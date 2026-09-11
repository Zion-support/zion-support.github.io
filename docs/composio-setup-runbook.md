# Zion — Composio setup runbook

## 1Password (source of truth for secrets)

- Sign-in: https://ziontechgroup.1password.com
- Vault: **Zion Agent Credentials** (`qvoxujxka43fr3kyzmb3qsidpi`)
- Composio write connection: alias `zion-teams-write`, id `_1password_winful-mast`
- Inventory item in the vault: `Zion Composio + 1Password inventory 2026-09-11`

Use `zion-teams-write` for create/update. `zion-teams-vault` is read-only backup.

## Other active connections (high-value)

- Stripe `acct_1U8rFeJRA2AketBh` (dashboard Ziontechgroup)
- Resend domain `ziontechgroup.com` verified
- HubSpot portal 51974051
- Calendly https://calendly.com/kleber-ziontechgroup
- GitHub `Zion-support`
- Gmail `kleber@ziontechgroup.com`
- Slack ziontechgroup.slack.com
- Notion, Linear, OpenRouter, Firecrawl, SerpApi

## Pending

See `docs/composio-connections-setup.md` for Cloudflare token, Tavily reset,
SendGrid, ActiveCampaign, Brevo IP allowlist, and 1Password billing.

## Workflows

- `composio-1password-sync` (`.github/workflows/composio-1password-sync.yml`) — lists vaults + items every 6 hours and on dispatch.
- `onepassword-sync` (`.github/workflows/onepassword-sync.yml`) — same vault check daily at 06:00 UTC and on dispatch.
- After rotating the write connection, update GitHub secret
  `COMPOSIO_1PASSWORD_CONNECTION_ID` to `_1password_winful-mast`.
