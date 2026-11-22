# Spotlight: Platform Engineering & DevOps AI Suite

> September 25, 2026 — Ten interlinked apps that keep your platform fast, safe and reviewable: from PR swarms to uptime to quantum-safe migration.

Part of the [Zion Tech Group App Network](https://github.com/Zion-support/zion-app-network) — live master directory at https://ziontechgroup.com/zion-app-network/.

## The suite

| App | What it does | Live | Source |
|-----|--------------|------|--------|
| **Zion AI PR Review Swarm** | Parallel AI reviewers for security, style and performance | [ziontechgroup.com/zion-ai-pr-review-swarm](https://ziontechgroup.com/zion-ai-pr-review-swarm/) | [repo](https://github.com/Zion-support/zion-ai-pr-review-swarm) |
| **Zion AI API Guardian** | Contract drift, breaking-change and abuse detection for APIs | [ziontechgroup.com/zion-ai-api-guardian](https://ziontechgroup.com/zion-ai-api-guardian/) | [repo](https://github.com/Zion-support/zion-ai-api-guardian) |
| **Log Anomaly Spotter** | ML anomaly detection across logs with root-cause hints | [ziontechgroup.com/log-anomaly-spotter](https://ziontechgroup.com/log-anomaly-spotter/) | [repo](https://github.com/Zion-support/log-anomaly-spotter) |
| **DNS Health Checker** | DNS, TLS and propagation checks with alert rules | [ziontechgroup.com/dns-health-checker](https://ziontechgroup.com/dns-health-checker/) | [repo](https://github.com/Zion-support/dns-health-checker) |
| **Uptime Status Hub** | Hosted status pages with incident comms | [ziontechgroup.com/uptime-status-hub](https://ziontechgroup.com/uptime-status-hub/) | [repo](https://github.com/Zion-support/uptime-status-hub) |
| **AI Infrastructure Monitor** | Unified infra metrics, alerts and capacity signals | [ziontechgroup.com/ai-infrastructure-monitor](https://ziontechgroup.com/ai-infrastructure-monitor/) | [repo](https://github.com/Zion-support/ai-infrastructure-monitor) |
| **K8s YAML Linter** | Kubernetes manifest linting with security policies | [ziontechgroup.com/k8s-yaml-linter](https://ziontechgroup.com/k8s-yaml-linter/) | [repo](https://github.com/Zion-support/k8s-yaml-linter) |
| **Quantum-Safe Migrator** | Inventory crypto usage and plan post-quantum migration | [ziontechgroup.com/quantum-safe-migrator](https://ziontechgroup.com/quantum-safe-migrator/) | [repo](https://github.com/Zion-support/quantum-safe-migrator) |
| **SLO Calculator** | SLO, error budget and uptime math for SRE teams | [ziontechgroup.com/slo-calculator](https://ziontechgroup.com/slo-calculator/) | [repo](https://github.com/Zion-support/slo-calculator) |
| **Zion AI Feature Flag Steward** | Flag lifecycle, stale-flag cleanup and rollout safety | [ziontechgroup.com/zion-ai-feature-flag-steward](https://ziontechgroup.com/zion-ai-feature-flag-steward/) | [repo](https://github.com/Zion-support/zion-ai-feature-flag-steward) |

## How the apps interlink

1. [PR Review Swarm](https://github.com/Zion-support/zion-ai-pr-review-swarm) gates code; [Feature Flag Steward](https://github.com/Zion-support/zion-ai-feature-flag-steward) governs rollout.
2. [K8s YAML Linter](https://github.com/Zion-support/k8s-yaml-linter) hardens deploys; [API Guardian](https://github.com/Zion-support/zion-ai-api-guardian) watches contracts in production.
3. [Infrastructure Monitor](https://github.com/Zion-support/ai-infrastructure-monitor) + [Log Anomaly Spotter](https://github.com/Zion-support/log-anomaly-spotter) detect; [DNS Health Checker](https://github.com/Zion-support/dns-health-checker) isolates edge issues; [Uptime Status Hub](https://github.com/Zion-support/uptime-status-hub) communicates.
4. [SLO Calculator](https://github.com/Zion-support/slo-calculator) quantifies reliability targets; [Quantum-Safe Migrator](https://github.com/Zion-support/quantum-safe-migrator) plans the long-term crypto roadmap.

## Related spotlights

- 🛡️ [SecOps & Reliability](APP_NETWORK_SPOTLIGHT_SECOPS_RELIABILITY.md) · 🛠️ [Dev & SRE Tools](APP_NETWORK_SPOTLIGHT_DEV_SRE_TOOLS.md) · ☁️ [Cloud & Architecture](APP_NETWORK_SPOTLIGHT_CLOUD_ARCHITECTURE.md)
- 📰 [What's new](APP_NETWORK_LATEST.md) · 🗂️ [Master directory](https://github.com/Zion-support/zion-app-network) · 📭 [Apps hub](https://ziontechgroup.com/zion-apps-hub/)

---
© 2026 [Zion Tech Group](https://ziontechgroup.com/) — Middletown, DE
