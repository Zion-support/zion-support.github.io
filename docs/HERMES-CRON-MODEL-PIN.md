# Pin Hermes crons off model `local`

Several Telegram Hermes jobs fail with:

```
HTTP 400: local is not a valid model ID
```

`local` is not a Nous/OpenRouter model id. The gateway treats it as invalid and the job never runs.

## Jobs (as of 2026-09-11)

| Job | id | Bot | Streak (approx.) |
|---|---|---|---|
| Zion Service Discovery + Page Deployment for agents group | `fb3d274edc27` | New_Tablet_Kleber_bot | 480+ |
| zion-agent-coordinator | `e3c19238fdbc` | New_Tablet_Kleber_bot | 910+ |
| zion-delegator-brief | `f684cb1dd80f` | New_Tablet_Kleber_bot | 620+ |
| ZTG GitHub Actions status | `6251974df2e8` | Junction Bot | 80+ |
| ztg-route-recovery-monitor | `9979b4b8453c` | Junction Bot | 210+ |

Machine-readable copy: `automation/hermes-cron-model-pin.json`.

## Fix (Termux / Hermes host)

```bash
bash scripts/pin-hermes-local-model-jobs.sh
```

Or per job:

```bash
hermes cron edit fb3d274edc27 --provider nous --model stepfun/step-3.7-flash:free
```

`stepfun/step-3.7-flash:free` was the model that successfully ran `zion-autonomous-growth-loop` on 2026-09-11. Override with `HERMES_MODEL` / `HERMES_PROVIDER` if the catalog moves again.

Never create a new cron with `--model local`.
