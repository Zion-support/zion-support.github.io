# Composio connected accounts — Zion Tech Group

Email used for accounts: `kleber@ziontechgroup.com`.

## Working now

| Toolkit | Notes |
| --- | --- |
| `_1password` | Teams vault **Zion Agent Credentials**. Write alias `zion-teams-write` (`_1password_winful-mast`). |
| Gmail / Google Workspace | `kleber@ziontechgroup.com` |
| GitHub | `Zion-support` (2FA on; OAuth — no GitHub password in vault) |
| Stripe | `acct_1U8rFeJRA2AketBh`, Ziontechgroup, BR/BRL, charges + payouts on |
| Resend | Domain `ziontechgroup.com` verified (`sa-east-1`). New full_access key is in 1Password. |
| HubSpot | Portal **51974051** STANDARD na1 |
| Calendly | https://calendly.com/kleber-ziontechgroup |
| Slack | ziontechgroup.slack.com |
| Notion, Linear, Discord, Canva, YouTube, WhatsApp, Telegram | Connected |
| OpenRouter | Connected (credits ~45, usage ~45.20) |
| Hugging Face | Username `kleberalcatrao` (mint a token at https://huggingface.co/settings/tokens) |
| Firecrawl | Connected. Credit balance changes; check the Firecrawl dashboard instead of this doc. |
| SerpApi | Connected |
| Apollo, Hunter, noCRM, Sentry, Perplexity, SuperMemory, Cursor | Connected |
| Google Ads / Search Console / Analytics | Connected |
| Supabase org | Zion Holdings |

## Broken / needs a human

| Toolkit | What to do | Link |
| --- | --- | --- |
| Cloudflare | Current connection sends an invalid `X-Auth-Key`. Create an **API token** (not Global API Key) and reconnect. | https://dash.cloudflare.com/profile/api-tokens |
| Brevo | Allowlist Composio IP `52.72.72.59` | https://app.brevo.com/security/authorised_ips |
| Tavily | Account already exists; password unknown. Reset, copy `tvly-` key, store in 1Password, finish Composio. | https://app.tavily.com |
| SendGrid | No account yet. Signup, copy API key, store, connect. | https://signup.sendgrid.com |
| ActiveCampaign | Not created (phone/CC). Skip unless still wanted. | https://www.activecampaign.com/free |
| 1Password billing | Add a card so Teams service accounts do not freeze. | https://start.1password.com/billing#update-payment-method |

Placeholder 1Password logins exist for Stripe / HubSpot / Calendly / GitHub / OpenRouter
(OAuth — passwords in those items are **not** the real provider passwords). Real
secrets currently in the vault: Teams sign-in, Resend API key, write-v3 `ops_` token.

## After Kleber supplies keys

Store them in vault **Zion Agent Credentials**, then complete Composio with
`COMPOSIO_MANAGE_CONNECTIONS` for `tavily`, `sendgrid`, `cloudflare` (token auth).
Do not put API keys in git.
