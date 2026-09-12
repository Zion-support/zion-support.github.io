# Zion secrets inventory (2026-09-12)

Values live in **1Password** vault `Zion Agent Credentials` (`qvoxujxka43fr3kyzmb3qsidpi`) via Composio account `zion-teams-write` (`_1password_winful-mast`). The same names are GitHub Actions repository secrets on `Zion-support/zion-support.github.io`. **Do not commit secret values.**

## 1Password items created

| Item | 1Password id |
| --- | --- |
| Zion OpenAI keys 2026-09-12 | `yyb42pg5in6j6a7anio7h5tw5m` |
| Zion OpenRouter keys 2026-09-12 | `wuz4ganiscr7llmtagoehypype` |
| Zion Google OAuth and API 2026-09-12 | `wh5lmfuithj6dteqabemtefr2m` |
| Zion GitHub PATs 2026-09-12 | `2c5xnsqhip2i632yfyz4h7xrtu` |
| Zion Stripe live 2026-09-12 | `xqmfoon6gzq7skast6ejq2zpqm` |
| Zion Composio keys 2026-09-12 | `ihgw7eah3e2idhlfm74mdcsgx4` |
| Zion Cloudflare account and R2 2026-09-12 | `av4zio2sozu5fvk7ghy37hmuqi` |
| Zion email Resend Brevo 2026-09-12 | `vqbex3tupzloefjsu6e27vzw6y` |
| Zion search Firecrawl Tavily SerpAPI Hunter 2026-09-12 | `enjet726vd4opdyayg3wdboc6m` |
| Zion Apollo keys 2026-09-12 | `wkzgx33ji4gyuxh7wtwv4kq7vm` |
| Zion LinkedIn Twitter 2026-09-12 | `6poh7tdq4wwtvdy2lzcgwkvktu` |
| Zion LLM Groq Mistral HF Cohere Nous MiniMax 2026-09-12 | `pcnmzjkhttzrxfhm4ldcxjx3uu` |
| Zion ops Jira Browserless Cursor Gateway 2026-09-12 | `kwanfwabxissxblor6z7kpj2yy` |
| Zion 1Password service account 2026-09-12 | `cx7fdzqlbkxrcqaeqpkctfnmwy` |
| Zion Xiaomi 2026-09-12 | `53eozfawuvwr3utruyrntaeoea` |

Placeholders filled: Tavily (`3d7axar54xwnab7i5nmclp7uza`), Cloudflare token (`kk4jhcmvot3ac2t66dbzxaodji`).

### Field labels (no values)

- OpenAI: `OPENAI_API_KEY` (+ additional OpenAI variants in that item)
- OpenRouter: `OPENROUTER_API_KEY`, `OPENROUTER_HERMES`, `OPENROUTER_CURSOR`, `OPENROUTER_ROCKET_2`, `OPENROUTER_OPENCLAW_ROCKET`
- Google: `GOOGLE_API_KEY`, `GOOGLE_OAUTH_API_KEY`, `GEMINI_API_KEY`, `GEMINI_HERMES_KEY`, `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, alts, `GOOGLE_APP_PASSWORD`, `GOOGLE_APP_PASSWORD_NOTEBOOK`, `GOOGLE_GOG_ACCESS_TOKEN`, `GOOGLE_CLOUD_PROJECT`
- Ops: `JIRA_ORG_ID`, `JIRA_API_TOKEN`, `BROWSERLESS_API_KEY`, `CURSOR_API_KEY`, `CLAWFY_API_KEY`, `GATEWAY_TOKEN`, `SUPERMEMORY_API_KEY`
- Xiaomi: `XIAOMI_API_KEY`

## GitHub Actions secrets written

`COMPOSIO_API_KEY`, `COMPOSIO_1PASSWORD_CONNECTION_ID`, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `STRIPE_SECRET_KEY`, `RESEND_API_KEY`, `BREVO_API_KEY`, `FIRECRAWL_API_KEY`, `TAVILY_API_KEY`, `SERPAPI_API_KEY`, `HUNTER_API_KEY`, `APOLLO_API_KEY`, `GOOGLE_API_KEY`, `GEMINI_API_KEY`, `GROQ_API_KEY`, `MISTRAL_API_KEY`, `HUGGINGFACE_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_WORKERS_AI_TOKEN`, `CLOUDFLARE_R2_ACCESS_KEY_ID`, `CLOUDFLARE_R2_SECRET_ACCESS_KEY`, `ZION_GITHUB_PAT`, `OP_SERVICE_ACCOUNT_TOKEN`, `NOUS_API_KEY`, `SUPERMEMORY_API_KEY`, `BROWSERLESS_API_KEY`, `JIRA_API_TOKEN`, `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `COHERE_API_KEY`, `MINIMAX_API_KEY`.

`GOG_TOKENS_JSON` is still missing a **refresh token**. The Google access token in 1Password expires; the email agent on Actions will keep skipping Gmail until a full gog token blob is stored.

LinkedIn / X (Twitter), Cursor, Clawfy, Gateway, Xiaomi, and Gmail app passwords are in 1Password only (not GitHub secret names, to keep the Actions surface smaller).

## How agents should load keys

```bash
# GitHub Actions
${{ secrets.OPENROUTER_API_KEY }}
${{ secrets.STRIPE_SECRET_KEY }}   # also accepted as STRIPE_API_KEY in Python billing scripts

# Composio 1Password (write connection)
# toolkit _1password account zion-teams-write
# _1PASSWORD_GET_ITEM vault_id=qvoxujxka43fr3kyzmb3qsidpi item_id=<id above>
```
