#!/usr/bin/env python3
"""
commands/utils/llm_client.py — thin LLM call wrapper
Used by email_decision.py; falls back gracefully when no LLM endpoint is configured.
"""
import os, json, urllib.request, urllib.error

LLM_ENDPOINT = os.getenv("LLM_ENDPOINT", "http://localhost:11434/api/generate")
LLM_MODEL    = os.getenv("LLM_MODEL",    "nousresearch/nous-hermes-2-mixtral-8x7b-dpo")
LLM_TIMEOUT  = int(os.getenv("LLM_TIMEOUT", "8"))

def llm_query(
    prompt: str,
    temperature: float = 0.3,
    max_tokens: int   = 150,
    model: str | None = None,
) -> dict:
    """Call LLM endpoint; return parsed JSON dict with 'response' key on success."""
    payload = {
        "model":       model or LLM_MODEL,
        "prompt":      prompt,
        "temperature": temperature,
        "max_tokens":  max_tokens,
        "stream":      False,
    }
    try:
        req = urllib.request.Request(
            LLM_ENDPOINT,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
        )
        with urllib.request.urlopen(req, timeout=LLM_TIMEOUT) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.URLError as e:
        return {"response": "", "error": f"URLError: {e}"}
    except json.JSONDecodeError as e:
        return {"response": "", "error": f"JSONDecodeError: {e}"}
    except Exception as e:
        return {"response": "", "error": str(e)}

if __name__ == "__main__":
    r = llm_query("Say hello in one word.", max_tokens=10)
    print(r.get("response", r.get("error", "no response")))
