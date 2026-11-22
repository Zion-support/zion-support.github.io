# Agent quickstart (local)

This is a local contributor guide for Zion-support/zion-support.github.io.
It does not authorize email sending, production publication, supplier commitments,
procurement, or changes to account permissions.

## Start with the current repository context

Read [AGENTS.md](../AGENTS.md), [SOUL.md](../SOUL.md), and
[USER.md](../USER.md) locally where access is appropriate. Treat repository
context as project guidance, not credentials or permission to disclose private
information. Do not copy personal context, client records, operational memory,
or supplier pricing into public documentation, patches, logs, or examples.

Check `git status --short` and review the relevant existing issues and pull
requests before making a small change. Preserve other contributors' work; do
not overwrite unrelated files or force-push shared branches.

## Local validation

Use the package manager/version declared in `package.json` and the repository's
lockfile. Review scripts before execution. In an appropriately configured local
checkout with dependencies already installed, the declared lint check is:

```sh
npm run lint:check
```

This command is present in `package.json`; its presence is not proof that lint,
all tests, or the production build pass. Run only the tests relevant to the
change, record the exact command and result, and distinguish a local result
from GitHub CI, deployment, or live-site verification.

## Protect secrets and review publication

Never commit credentials, tokens, private keys, production data, or `.env`
files containing secrets. Inspect staged diffs before publication. If a secret
is discovered, stop sharing it and use the authorized incident process rather
than copying its value into a report.

Keep changes scoped and submit a reviewable draft pull request when appropriate.
A draft, a passing smoke test, or a successful build is not authorization to
merge, deploy, dispatch a technician, or spend money.

## Documentation smoke

The existing weekly workflow checks that this file is nonempty and retains
its onboarding, lint-command, and secret-handling anchors. Passing this
fixed-string check validates only those documentation anchors; it does not
certify application functionality or operational readiness.
