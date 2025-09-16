export type WhatsNewItem = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  emoji?: string;
  highlight?: boolean;
  date?: string;
};

export const WHATS_NEW_ITEMS: WhatsNewItem[] = [
  {
    description:
      "Blueprint for zero-trust agents with isolation domains, policy‑as‑code, and runtime guards.",
    ctaLabel: "Read Architecture",
    href: "/blog/ai-2026-zero-trust-agent-architecture",
    emoji: "🔐",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "privacy-preserving-agents-2026",
    title: "AI 2026: Privacy-Preserving Agents",
    description:
      "Private‑by‑default agents using scoped memory, redaction, and confidential computing.",
    ctaLabel: "Read Article",
    href: "/blog/ai-2026-privacy-preserving-agents",
    emoji: "🛡️",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "evidence-driven-release-checklists-2026",
    title: "AI 2026: Evidence‑Driven Release Checklists",
    description:
      "Make evals operational with runtime gates, progressive delivery, and audit‑ready rollbacks.",
    ctaLabel: "Read Checklist",
    href: "/blog/ai-2026-evidence-driven-release-checklists",
    emoji: "✅",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "agent-platform-health-dashboard-starter-2026",
    title: "AI 2026: Agent Platform Health Dashboard — Starter Kit",
    description:
      "Pre‑wired SLOs, evals, incident, and cost views with example queries and JSON dashboards.",
    ctaLabel: "Get Starter Kit",
    href: "/resources/ai-2026-agent-platform-health-dashboard-starter",
    id: "agent-platform-operations-2026-blog",
    title: "AI 2026: Agent Platform Operations",
    description:
      "SLOs, incidents, change management, and eval‑gated releases for agent platforms.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-agent-platform-operations",
    emoji: "📊",
    highlight: true,
    date: "2025-09-15",
  },
  {
