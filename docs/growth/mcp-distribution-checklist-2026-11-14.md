# MCP Distribution Checklist (2026-11-14)

Goal: publish the Zion AI App Network as an MCP server so AI clients and directories can discover and invoke it. Publishing is an external action and was **not** performed in this pass.

## 2026 distribution evidence

- Official MCP Registry: 53,541 servers on 2026-10-31 (API count); free to publish via `mcp-publisher`; other catalogues ingest it.
- Glama: 113,204 open-source servers + 40,151 remote connectors on 2026-10-31; free listing, $49/mo boost.
- mcp.so: free submission path; $39 one-time paid placement.
- PulseMCP: submissions paused since 2026-09-03; ingests the official registry.
- Smithery: hosted proxy and managed identity shut down 2026-10-31; now lists 214 servers as part of Arcade.
- Source: apideck "where to list your MCP server in 2026", locus.pro directory comparison (opened 2026-11-14).

## Steps

1. Stand up a remote streamable-HTTP MCP endpoint for the app network (needs a public URL and OAuth or API-key auth).
2. Add `mcpName` to the package manifest matching the server name.
3. `mcp-publisher init` → `server.json`; `description` capped at 100 characters.
4. Verify the namespace (GitHub account, DNS or HTTP challenge).
5. `mcp-publisher publish` to the official registry.
6. Same week: claim/submit Glama and mcp.so free listings.
7. Track: registry acceptance, Glama health check, inbound installs (all NÃO REGISTRADO today).

## Blockers

- No public MCP endpoint or verified namespace yet.
- Composio connections are expired; auth wiring would need the owner.

## Status

NÃO REGISTRADO — checklist only; nothing published.
