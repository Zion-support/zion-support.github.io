# Git hooks (OpenClaw)

This repo can use **hooksPath** so hooks live in version control.

## Install

From the repository root:

```bash
npm run git:hooks:install
```

This runs `git config core.hooksPath scripts/git-hooks` (repo-local).

## Uninstall

```bash
npm run git:hooks:uninstall
```

## Behavior

| Hook        | What it does |
|-------------|----------------|
| `pre-commit` | Runs `node automation/openclaw-report-commit-budget.cjs` to block low-value **report-only** commits unless drift/gate/coalesce signals allow (or you set `REPORT_COMMIT_ALLOW=1`). |
| `pre-push`   | No-op unless `OPENCLAW_STABILITY_ON_PUSH=1`, then runs `npm run openclaw:autonomy:stability`. |

## Skip hooks (emergency / automation)

```bash
SKIP_OPENCLAW_GIT_HOOKS=1 git commit ...
SKIP_OPENCLAW_GIT_HOOKS=1 git push ...
```

## Executable bit

If hooks do not run, ensure they are executable:

```bash
chmod +x scripts/git-hooks/pre-commit scripts/git-hooks/pre-push
```
