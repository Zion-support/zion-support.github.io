# Composio + 1Password setup for Zion

Vault: **Zion Agent Credentials** (`qvoxujxka43fr3kyzmb3qsidpi`)  
Write connection: Composio alias `zion-teams-write` (`_1password_winful-mast`)

Vendor keys from the 2026-09-12 CSV are stored as APICREDENTIALS items in that vault. The same names were written as GitHub Actions repository secrets on `Zion-support/zion-support.github.io`. **Do not commit secret values.**

See `docs/secrets-inventory.md` for item ids and GitHub secret names.

## Required repo secrets

Already written 2026-09-12:

- `COMPOSIO_API_KEY`
- `COMPOSIO_1PASSWORD_CONNECTION_ID` (write account `_1password_winful-mast`)
- `OP_SERVICE_ACCOUNT_TOKEN`

Plus vendor keys: OpenAI, OpenRouter, Stripe (`STRIPE_SECRET_KEY`), Resend, Brevo, Cloudflare, search, Google OAuth, Groq, Mistral, Hugging Face, Cohere, Nous, MiniMax, Apollo, Hunter, Jira, Browserless, Supermemory.

LinkedIn / X, Cursor, Clawfy, Gateway, Xiaomi, and Gmail app passwords stay in 1Password only.

## Workflows

- `.github/workflows/onepassword-sync.yml` — lists vault items via Composio (`vault_id` required)
- `.github/workflows/composio-1password-sync.yml` — CLI health + vault list
- `.github/workflows/composio-health.yml` — connection health + vault list

## Manual

After changing keys in 1Password, copy into GitHub Actions secrets (LibSodium + repo public key) or re-run the loader that uses `GITHUB_CREATE_OR_UPDATE_A_REPOSITORY_SECRET`.
