# Composio Connected Accounts Setup Guide

## Current Status (2026-09-12)

- **Composio API key**: stored in 1Password (`Zion Composio keys 2026-09-12`) and GitHub secret `COMPOSIO_API_KEY`.
- **1Password connection**: ACTIVE — Composio alias `zion-teams-write` (`_1password_winful-mast`). Vault **Zion Agent Credentials** (`qvoxujxka43fr3kyzmb3qsidpi`) holds the vendor keys.
- **GitHub Actions**: repository secrets written for the names in `docs/secrets-inventory.md`.

Do not commit secret values. Load from 1Password or Actions secrets.

## Vendor API keys (loaded)

These are no longer blocked on a paste into chat. They live in 1Password and (except LinkedIn/X/Cursor/Clawfy/Gateway/Xiaomi/app passwords) as GitHub Actions secrets:

| Toolkit / vendor | GitHub secret / 1Password field |
| --- | --- |
| Brevo | `BREVO_API_KEY` |
| Resend | `RESEND_API_KEY` |
| SerpApi | `SERPAPI_API_KEY` |
| Firecrawl | `FIRECRAWL_API_KEY` |
| Tavily | `TAVILY_API_KEY` |
| Stripe | `STRIPE_SECRET_KEY` (Python also accepts `STRIPE_API_KEY`) |
| OpenAI / OpenRouter / Groq / Mistral / HF / Cohere / Nous / MiniMax | matching `*_API_KEY` secrets |
| Cloudflare + R2 | `CLOUDFLARE_*` secrets |
| Google OAuth + Gemini | `GOOGLE_*` / `GEMINI_API_KEY` |

## Still missing for Gmail on Actions

`GOG_TOKENS_JSON` needs a **refresh token**. The stored Google access token expires; until a full gog blob is saved, the continuous email agent cannot use Gmail from GitHub Actions.

## OAuth connections (separate from API keys)

Some Composio OAuth connections (Stripe/Calendly/WhatsApp) may still show EXPIRED in older notes. Re-auth those in the Composio dashboard if a workflow needs the connected-account path rather than the raw API key.
