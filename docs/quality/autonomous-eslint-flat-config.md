# Autonomous ESLint configuration

The Custom ESLint workflow continues to load `.eslintrc-autonomous.cjs` with its
existing `-c` argument and zero-warning threshold. The file now exports a flat
configuration array, as required by the installed ESLint 10. The workflow runs
`node --test tests/ci/test_autonomous_eslint.cjs` after `npm ci` and before the
repository lint scan; a failing regression prevents a successful job. No
dependency, warning threshold, or failure-reporting step is changed.

## What the repair preserves

- Error-level checks for eval, the Function constructor, HTML sinks, asynchronous
  rejection handling, explicit any, naming, and missing braces.
- The installed TypeScript recommended rules and Next core-web-vitals rules.
- Warning-level console, complexity, magic-number, and unused-variable/import
  checks. The workflow still fails on warnings. One maintained TypeScript rule
  covers both unused imports and variables instead of referencing an undeclared
  unused-imports plugin. Underscore-prefixed imports and variables are still
  checked; the existing underscore-argument exception remains.
- Existing TypeScript test exceptions for console and explicit any.
- The main site's existing disabled no-html-link-for-pages rule. In this tree,
  the upstream rule also throws while building a regular expression for generated
  slugs containing a literal opening parenthesis. Other Next rules remain enabled.

The old next/core-web-vitals extends entry referred to eslint-config-next, which
is not installed or declared in this repository. This repair uses the installed
@next/eslint-plugin-next, consistent with the established base configuration; it
does not claim to restore a separate React/hooks/import preset that was absent.

The unsupported ignoreRestParams/ignoreRestArrays options are replaced by the
installed rule's supported `ignoreRestArgs: false`. CommonJS files are parsed as
CommonJS; their require calls remain valid module syntax.

Fixed ESLint plugin and rule identifiers have line-scoped naming-convention suppressions explaining their API contract. Source naming checks remain unchanged. The complexity limit remains 20.

The configured naming selectors do not filter by inferred types. These checks
therefore do not require `parserOptions.project`, which would construct the full
generated TypeScript program and reject files excluded from that program.
Type-checking remains a separate compiler gate.

## Local guards

`eslint-rules/autonomous.cjs` registers the previously missing guards under the
`zion-autonomous` namespace.

The HTML guard flags direct innerHTML/outerHTML assignments, insertAdjacentHTML,
and React dangerouslySetInnerHTML attributes. It also flags a sink passed a
function named sanitize: a name alone does not prove sanitization. Reads,
textContent, ordinary JSX, and inert object data are allowed. A reviewed exception
must be narrow and document the actual data boundary; this is not a complete
cross-site-scripting proof.

The async guard requires awaited work and for-await iteration to have a catch in
the same function or a terminal rejection handler. It distinguishes try/catch
from try/finally, does not treat an outer function's catch as protecting a nested
async callback, and flags visible floating promise chains, global fetch/Promise
calls, and calls to locally declared async functions. Returning a promise
transfers handling to the caller. A synchronous try or a void expression does
not handle an unawaited promise rejection.

Evidently non-callable rejection handlers, including object, array and binary expressions, do not count as rejection handling.

These are syntax checks, not whole-program promise analysis. Indirect aliases,
stored promises, arbitrary imported function return types, dynamic HTML sinks,
and handler implementations need additional review or a separately provisioned
type-aware analysis. The guard does not claim that every promise or HTML sink is
provably safe.

## Verification

Run `node --test tests/ci/test_autonomous_eslint.cjs` from the repository root.
The suite contains positive and negative behavior cases plus production-config
checks for rule registration, actual errors, unused imports/variables, and test
exceptions. It uses the installed ESLint and TypeScript parser, with no permissive
parser stubs and no network or email calls.

The suite also lints this configuration and its own source with zero errors and warnings. Its asynchronous tests return their ESLint promise chains to `node:test`, so rejected operations and failed assertions fail the test.

A passing regression suite proves the configuration and these documented checks
work. It does not mean all repository source files meet the policy. The unchanged
workflow must still report and fail for real violations; do not hide them by
changing its warning threshold or replacing commands with success placeholders.

References: [ESLint migration guide](https://eslint.org/docs/latest/use/configure/migration-guide),
[custom-rule API](https://eslint.org/docs/latest/extend/custom-rules), and
[TypeScript unused-variable rule](https://typescript-eslint.io/rules/no-unused-vars/).
