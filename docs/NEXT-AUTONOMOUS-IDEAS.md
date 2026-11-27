# Next autonomous improvement ideas (backlog)

See [AGENT-QUICKSTART.md](AGENT-QUICKSTART.md) for local checks and [CTO-OPERATING-PHILOSOPHY.md](CTO-OPERATING-PHILOSOPHY.md) for release coordination.

## Make preflight checks meaningful

Trace each reported validation to its implementation. The current `scripts/automation/check-merge-conflict-markers.cjs` logs a message and exits successfully. A replacement should detect unresolved conflict markers in source files and distinguish clean and conflicted test fixtures before becoming a release check.

## Reduce time to diagnose a failed job

For repeated documentation failures, retain the existing checks for file presence, content and required text. Include the missing path or anchor in diagnostics. For lint or build failures, reproduce the command from the failing workflow. The `npm run lint:check` command covers application and component sources.

## Confirm customer-facing behavior

Validate linked pages in their deployed languages. For a change to a contact form, test the browser result, the provider response and delivery to the designated test recipients as separate observations.
