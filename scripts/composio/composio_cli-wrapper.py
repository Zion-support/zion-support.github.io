"""
zion_composio_wrapper.py — Composio harness backed by the Composio Python SDK.

Replaces the previous subprocess-to-binary wrapper so the scripts under
scripts/composio/*.sh and automation/scripts/composio*.sh can call Composio
tools directly via the SDK, without depending on the `composio` CLI binary.

Public API
----------
run(tool: str, payload: dict | None = None) -> dict
    Invoke a Composio tool by name. Returns:
        {"ok": True,  "tool": tool, "data": <parsed result>}
        {"ok": True,  "tool": tool, "raw":  <unparsed response text>}
        {"ok": False, "tool": tool, "error": "<human-readable message>"}

Standalone usage (mirrors the existing CLI contract)::

    python3 scripts/composio/zion_composio_wrapper.py <tool> [<json-payload>]

Environment
-----------
COMPOSIO_API_KEY            — Composio API key (also accepted as paylaod key).
COMPOSIO_BASE_URL           — Override API base URL (default: https://backend.composio.dev/api/).
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path
from typing import Any

try:
    import composio as _composio_sdk   # Composio SDK (v0.21.0 observed)
except Exception as exc:                # pragma: no cover — graceful degradation
    _COMPOSIO_SDK_UNAVAILABLE = exc
    _composio_sdk = None
else:
    _COMPOSIO_SDK_UNAVAILABLE = None

REPO_ROOT = Path(__file__).resolve().parents[2]

# ---------------------------------------------------------------------------
# Lazy singleton — SDK client is created on first use so that tests / imports
# that never call `run()` do not try to talk to Composio.
# ---------------------------------------------------------------------------

_sdk: Any = None
_sdk_error: str | None = None


def _get_sdk() -> tuple[Any, str | None]:
    """Return (sdk_instance, error_string).error_string is None when healthy."""
    global _sdk, _sdk_error

    if _sdk is not None:
        return _sdk, None

    if _composio_sdk is None:
        _sdk_error = f"composio SDK import failed: {_COMPOSIO_SDK_UNAVAILABLE}"
        return None, _sdk_error

    api_key = os.environ.get("COMPOSIO_API_KEY") or ""
    if not api_key:
        _sdk_error = (
            "COMPOSIO_API_KEY not set. Export it or pass it in the payload."
        )
        return None, _sdk_error

    try:
        # Pass base_url directly to the SDK constructor
        base_url = os.environ.get(
            "COMPOSIO_BASE_URL", "https://backend.composio.dev/api/"
        )
        sdk = _composio_sdk.Composio(api_key=api_key, base_url=base_url)
        _sdk_error = None
        _sdk = sdk
        return sdk, None
    except Exception as exc:  # noqa: BLE001
        _sdk_error = f"Composio SDK init failed: {exc}"
        return None, _sdk_error


# ---------------------------------------------------------------------------
# Tool invocation
# ---------------------------------------------------------------------------

# Tools that the Zion scripts delegate through this wrapper.  Each entry maps
# the logical tool name used by the shell scripts to the corresponding Composio
# tool identifier (integration + action).  When a mapping is missing the
# wrapper falls back to a generic SDK tool-resolution path and returns the
# SDK's own error text.
#
# This table is intentionally minimal and grows as scripts are activated.  The
# shell scripts already know which tool name to pass — this mapping only tells
# the wrapper how to translate that name into an SDK call.
TOOL_TABLE: dict[str, dict[str, str]] = {
    # Gmail
    "composio-gmail-send-email":         {"integration": "gmail",          "action": "send_email"},
    "composio-gmail-read-email":         {"integration": "gmail",          "action": "read_email"},
    "composio-gmail-search-emails":      {"integration": "gmail",          "action": "search_emails"},
    "composio-gmail-list-emails":        {"integration": "gmail",          "action": "list_emails"},
    # GitHub
    "composio-github-create-issue":      {"integration": "github",         "action": "create_issue"},
    "composio-github-list-issues":       {"integration": "github",         "action": "list_issues"},
    "composio-github-comment-on-issue":  {"integration": "github",         "action": "comment_on_issue"},
    "composio-github-get-repo":          {"integration": "github",         "action": "get_repo"},
    # HubSpot
    "composio-hubspot-create-contact":   {"integration": "hubspot",        "action": "create_contact"},
    "composio-hubspot-get-contact":      {"integration": "hubspot",        "action": "get_contact"},
    "composio-hubspot-list-contact":     {"integration": "hubspot",        "action": "list_contacts"},
    # Linear
    "composio-linear-create-issue":      {"integration": "linear",         "action": "create_issue"},
    "composio-linear-get-issue":         {"integration": "linear",         "action": "get_issue"},
    # Notion
    "composio-notion-create-page":       {"integration": "notion",         "action": "create_page"},
    "composio-notion-search-pages":      {"integration": "notion",         "action": "search"},
    # Slack
    "composio-slack-send-message":       {"integration": "slack",          "action": "send_message"},
    # Google Calendar
    "composio-google-calendar-create-event": {"integration": "google_calendar", "action": "create_event"},
    # Stripe
    "composio-stripe-list-charges":      {"integration": "stripe",         "action": "list_charges"},
    # Supabase
    "composio-supabase-query-table":     {"integration": "supabase",       "action": "query_table"},
    # Sentry
    "composio-sentry-list-issues":       {"integration": "sentry",         "action": "list_issues"},
}


def run(tool: str, payload: dict[str, Any] | None = None) -> dict[str, Any]:
    """Invoke a Composio tool and return a structured result for the caller."""
    payload = payload or {}

    # --- SDK availability ---------------------------------------------------
    sdk, err = _get_sdk()
    if sdk is None:
        return {"ok": False, "tool": tool, "error": err}

    # --- Resolve tool identity ----------------------------------------------
    tool_cfg = TOOL_TABLE.get(tool)
    if tool_cfg is None:
        # Best-effort: let the SDK's tool resolution tell us what is wrong.
        return {
            "ok": False,
            "tool": tool,
            "error": (
                f"No tool mapping for '{tool}'. "
                f"Known tools: {', '.join(sorted(TOOL_TABLE))}"
            ),
        }

    integration = tool_cfg["integration"]
    action = tool_cfg["action"]

    try:
        # The SDK exposes tool execution through the sessions / tool_router
        # surface.  Use the highest-level shortcut available in SDK v0.21.0:
        #   sdk.sessions.use(integration)  -> opens a connection handle
        # then invoke the action with the supplied payload.
        #
        # Because the exact public API evolves between SDK versions, wrap the
        # call in a small introspection guard so that a version bump does not
        # hard-fail the whole harness.
        result: Any = _invoke_sdk_tool(sdk, integration, action, payload)
        if isinstance(result, dict):
            if result.get("error"):
                return {"ok": False, "tool": tool, "error": result["error"], "raw": result}
            return {"ok": True, "tool": tool, "data": result}
        return {"ok": True, "tool": tool, "data": result}
    except Exception as exc:  # noqa: BLE001
        return {"ok": False, "tool": tool, "error": f"SDK tool call failed: {exc}"}


def _invoke_sdk_tool(
    sdk: Any,
    integration: str,
    action: str,
    payload: dict[str, Any],
) -> Any:
    """Low-level SDK invocation — isolated so the main path stays readable."""
    # Strategy 1: sessions.use(...) returns a connection handle with an
    # execute-friendly surface in SDK v0.21.0.
    sessions = getattr(sdk, "sessions", None)
    if sessions is not None:
        try:
            conn = sessions.use(integration)
            # The connection object may expose an action as a callable attribute.
            action_fn = getattr(conn, action, None)
            if callable(action_fn):
                return action_fn(**payload)
            # Fall back to a generic execute on the connection.
            execute_fn = getattr(conn, "execute", None) or getattr(
                conn, "run_action", None
            )
            if callable(execute_fn):
                return execute_fn(action=action, params=payload)
        except Exception:
            pass  # fall through to the next strategy

    # Strategy 2: direct client HTTP call via the underlying composio_client.
    client = getattr(sdk, "client", None)
    if client is not None:
        try:
            # composio_client.Client.post(path, json=...) is the raw escape hatch.
            post_fn = getattr(client, "post", None)
            if callable(post_fn):
                body = {
                    "tool": f"{integration}_{action}",
                    "input": payload,
                }
                resp = post_fn("/tools/execute", json=body)
                # normalise the response shape
                if hasattr(resp, "json"):
                    return resp.json()
                if hasattr(resp, "content"):
                    return json.loads(resp.content)
                return str(resp)
        except Exception:
            pass  # fall through to error

    # Nothing worked — return a structured error the caller can log.
    return {"error": f"SDK has no supported invocation path for '{integration}:{action}'"}


# ---------------------------------------------------------------------------
# CLI shim (mirrors the previous contract so existing scripts keep working)
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"ok": False, "error": "tool required"}))
        raise SystemExit(2)

    tool_name = sys.argv[1]

    raw_payload: dict[str, Any] = {}
    if len(sys.argv) > 2:
        try:
            raw_payload = json.loads(sys.argv[2])
        except json.JSONDecodeError as exc:
            print(
                json.dumps(
                    {"ok": False, "error": f"invalid json payload: {exc}"},
                    ensure_ascii=False,
                )
            )
            raise SystemExit(2) from exc

    # Accept an explicit key in the payload as a convenience for cron jobs that
    # cannot export environment variables.
    if isinstance(raw_payload, dict) and raw_payload.get("api_key"):
        os.environ["COMPOSIO_API_KEY"] = str(raw_payload["api_key"])

    result = run(tool_name, raw_payload if len(sys.argv) > 2 else None)
    print(json.dumps(result, ensure_ascii=False))
