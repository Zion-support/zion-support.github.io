# Public Site Smoke Check

This workflow checks the HTTP availability of the Zion homepage, apps directory, and Discovery page once per day (10:23 UTC), plus on manual dispatch. It uses GitHub-hosted runners and curl only, with no API keys, paid services, checkout actions, form submissions, production writes, or customer data.

A failing route fails the GitHub Actions run. Enable GitHub repository Actions failure notifications to receive alerts. GitHub's scheduled workflow timing can be delayed, and free minutes depend on GitHub's plan and repository settings.

**Scope limitation:** HTTP 2xx does not prove content correctness, translation quality, the free Discovery journey, or successful email delivery. Existing QA/release ownership remains authoritative. Do not merge without review and checking for an equivalent workflow already in use.
