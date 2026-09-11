# Composio + 1Password setup for Zion

Agents should use the **1Password Teams** account at
[ziontechgroup.1password.com](https://ziontechgroup.1password.com), not the older
`my.1password.com` “Kleber Zion” trial (that account has no service-account vault
access).

## Account (non-secret)

| Field | Value |
| --- | --- |
| Sign-in URL | https://ziontechgroup.1password.com |
| Email | `kleber+zionvault@ziontechgroup.com` (plus-alias of `kleber@ziontechgroup.com`) |
| Vault | **Zion Agent Credentials** |
| Vault ID | `qvoxujxka43fr3kyzmb3qsidpi` |

Sign-in password, Secret Key, Emergency Kit, Resend `re_` key, and `ops_`
service-account tokens live **only** in that vault. Do not commit them.

## Composio connections

| Alias | Account ID | Role |
| --- | --- | --- |
| `zion-teams-write` | `_1password_winful-mast` | **Default.** Service account `composio-zion-write-v3` with Read + Write on the vault. Use this for LIST / GET / CREATE / UPDATE. |
| `zion-teams-vault` | `_1password_pike-geode` | Read-only SA `composio-zion-agent`. Keep as backup. |
| (none) | `_1password_wisen-salay` | Legacy empty connection. Ignore. |

GitHub Actions secret `COMPOSIO_1PASSWORD_CONNECTION_ID` should be set to
`_1password_winful-mast` (or the alias `zion-teams-write` if the workflow
resolves aliases).

Also required: `COMPOSIO_API_KEY`.

## Workflows

- `.github/workflows/composio-1password-sync.yml`
- `.github/workflows/onepassword-sync.yml`

Both list vaults, then list items in `qvoxujxka43fr3kyzmb3qsidpi`.

## Reconnecting 1Password in Composio

Composio’s hosted form fields:

- **Base URL:** `https://ziontechgroup.1password.com`
- **Bearer Token:** the `ops_…` service-account token

**Do not type the token.** Browser agents corrupt `U1JQZy` inside the JWT.
Paste from 1Password’s copy control, or set the input value with Playwright /
JavaScript from a local file.

Service-account vault permissions are **immutable**. If `LIST_VAULTS` returns
`[]`, create a new SA with CLI:

```bash
op service-account create composio-zion-write-NEXT \
  --vault 'Zion Agent Credentials':read_items,write_items \
  --raw
```

Then reconnect Composio with that exact token.

## Human billing

Add a payment method before the Teams trial freezes service accounts:
https://start.1password.com/billing#update-payment-method
