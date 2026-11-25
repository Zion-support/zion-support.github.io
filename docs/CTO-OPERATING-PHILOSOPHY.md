# CTO operating philosophy (Zion Tech Group)

Use [AGENTS.md](../AGENTS.md) to identify the repository's single integration branch and its release process. Keep each change on a topic branch and coordinate with the owner of any overlapping pull request.

## Investigate failures

Start with the failing commit, job and step. Reproduce the failure with the same inputs and command, then check the smallest change that addresses its cause. Preserve existing assertions. Record which tests ran, the result and any remaining release checks.

## Protect project information

Never store secrets in git. Use the approved secret manager for credentials. Public examples must omit identifying details from customer and supplier records. Direct commercial questions to commercial@ziontechgroup.com.

## Verify delivery

Record the merged commit, deployment result and public route or service behavior for changes that reach customers. For email delivery, distinguish a provider accepting a request from a message reaching each destination.
