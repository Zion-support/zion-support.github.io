# Autonomous ESLint configuration repair — review candidate

## Status and scope

This candidate repairs configuration loading for the existing Autonomous Custom
ESLint Rules workflow. It is not a claim that the repository is lint-clean, that
all required checks passed, or that any application was deployed. Keep it on a
review branch until the policy semantics below and exact-head CI are reviewed.

The existing incident is [#71782](https://github.com/Zion-support/zion-support.github.io/issues/71782).
In [run 41140778794](https://github.com/Zion-support/zion-support.github.io/actions/runs/41140778794),
job 124354215105 installed dependencies and then failed because ESLint 10.7.0
rejected the legacy `root` configuration key. Removing that key alone is
insufficient: the configuration also used legacy extends/parser/plugins/overrides,
referenced two absent packages, named two unregistered custom rules, and passed
unsupported options to `@typescript-eslint/no-explicit-any`.

## Changes

- Retain `.eslintrc-autonomous.cjs` as the explicit CLI entry point while exporting
  a flat configuration array. Existing callers keep their command.
- Load the actual Next Core Web Vitals and TypeScript recommended presets. Keep
  every existing explicit rule severity, the effective magic-number allowlist,
  and the established test-only console/any allowances.
- Install pinned `eslint-config-next@16.4.1`,
  `eslint-plugin-unused-imports@4.4.1`, and `typescript-eslint@8.64.0`. The latter
  keeps the existing parser/plugin family at 8.64.0. The lock adds 105 package
  paths and removes none; the only existing package version change is
  `@next/eslint-plugin-next` 16.2.10 to 16.4.1, required by the Next preset.
- Express the intended strict rest-argument policy with the supported
  `ignoreRestArgs: false`; keep `fixToUnknown: false`. The old
  `ignoreRestParams` and `ignoreRestArrays` options were both invalid.
- Do not request TypeScript project services: the selected checks require syntax,
  not type information. This allows JavaScript and tooling outside tsconfig to
  reach the real rules. No source file is excluded to hide a diagnostic.
- Preserve the prior ignore list and legacy dotfile exclusion. Preserve the
  workflow's complete-tree lint, zero-warning limit, exit-code capture, JSON
  artifact, fail-closed gate, reporting and weekly schedule.
- Use Node 22, matching the repository's existing engine requirement. Add the
  fixture suite after dependency installation, before full-tree lint.

## Explicit new implementations of previously unregistered guards

No implementation for the two names was registered in the original configuration.
These are therefore documented implementations of its stated intent, not a claim
of exact parity with a historical working rule. Their review is a merge gate.

| Rule | Enforced behavior | Limits |
| --- | --- | --- |
| `zion/no-inner-html` | Error for direct/computed `innerHTML` assignment, compound/update writes, destructuring targets and loop assignment targets. | Reads and `textContent` remain allowed. A function merely named `sanitize` is not trusted automatically. This does not prove sanitization or cover every DOM sink, alias or framework API. |
| `zion/require-async-try-catch` | Error unless an async function has a whole-body try/catch or a sole returned/awaited promise with an explicit catch or rejection argument to then. | An unrelated or nested catch, try/finally, empty catch call, undefined handler or null handler does not qualify. This is a syntax boundary, not a type-aware guarantee that every Promise is awaited, handled or safely rethrown. Ordinary non-async functions are outside this rule. |

Both remain error-level checks. No known guard is removed or downgraded. The
explicit implementations may flag existing source and require content-aware
changes. Do not blanket-disable them, add broad exclusions, or call a failing
full-tree run a successful repair of all source issues.

## Reproduction and validation

Run from the repository root using Node 22 and its existing `.npmrc`:

```sh
npm ci --ignore-scripts --no-audit --no-fund
node --test tests/ci/test_autonomous_eslint_config.cjs
python3 tests/ci/test_workflow_checkout_scope.py
node --test tests/ci/test_eslint_report_scripts.cjs
npx eslint -c .eslintrc-autonomous.cjs . --max-warnings 0 --format json
```

Independent local validation on 30 October 2026 used ESLint 10.7.0 and Node
22.23.4 (official Linux binary verified against the published SHA256):

- **37/37 new regression cases passed**: actual preset/plugin loading,
  TypeScript and JavaScript parsing, explicit/rest any, unused imports,
  React/Next accessibility, both local guards and their negative cases,
  retained exclusions/test allowances, and the original root-key failure.
- The real CLI returns **0** on clean source, **1** on warnings with
  `--max-warnings 0`, and **1** on syntax errors, each with valid JSON output.
- **10/10 existing checkout/exit-propagation cases passed** against the modified
  workflow; **6/6 existing reporter cases passed**.
- The new suite also passed under Node 24.22.1. Node 22 remains the workflow target.
- These runs used an isolated source fixture, not all repository files. Full-tree
  lint and hosted checks remain pending. No hosted success or deployment is
  asserted here.

## Release and coordination

Persist the candidate as one review branch linked from the existing incident.
The existing queue instruction on
[#71769](https://github.com/Zion-support/zion-support.github.io/pull/71769#issuecomment-6493912440)
says no further automation PRs should be opened while the queue is congested.
A fresh query restricted to runs created on 30 October showed 157 queued runs
during validation, so this work does not open another automation PR or add a
workflow. Once that condition is resolved, review this same candidate and run
the existing workflow at its exact head before considering normal integration.

Relevant primary references:

- [ESLint 10 migration](https://eslint.org/docs/latest/use/migrate-to-10.0.0)
- [ESLint flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files)
- [TypeScript ESLint shared configurations](https://typescript-eslint.io/users/configs/)
- [Unused imports plugin](https://github.com/sweepline/eslint-plugin-unused-imports)
