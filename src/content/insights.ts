export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO date string
  readMinutes: number;
};

export const latestInsights: InsightArticle[] = [
  {
    id: "ai-governance-at-scale-2025",
    title: "AI Governance at Scale: Policies That Enable Speed",
    summary:
      "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-observability-blueprint",
    title: "Edge Observability Blueprint: Sub‑100ms Reliability",
    summary:
      "Latency budgets, client↔edge traces, and error budgets that keep UX snappy.",
    category: "Observability",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "genai-policy-tests-canaries",
    title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
    summary:
      "How to combine offline evals with live canaries to catch regressions before customers do.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-flags-validation",
    title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
    summary:
      "Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "north-star-metrics-pitfalls",
    title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
    summary:
      "Replace vanity KPIs with leading indicators and consistent instrumentation.",
    category: "Product Analytics",
    date: "2025-09-30",
    readMinutes: 5,
  },
  // New insights for this update
  {
    id: "cloud-finops-qa-gates",
    title: "Cloud FinOps QA Gates That Engineers Actually Use",
    summary:
      "Guardrails and review loops that reduce cost without slowing delivery.",
    category: "Cloud FinOps",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "ai-roadmaps-that-ship",
    title: "AI Roadmaps That Ship: From Strategy to Weekly Wins",
    summary:
      "Eval gates, ROI scorecards, and delivery rituals that keep momentum high.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "ai-cost-guardrails-insight",
    title: "AI Cost Guardrails: Telemetry That Drives the Right Decisions",
    summary:
      "Dashboards, alerts, and review cadences that reduce AI spend without surprises.",
    category: "AI Operations",
    date: "2025-10-01",
    readMinutes: 5,
  },
  {
    id: "platform-golden-paths-insight",
    title: "Golden Paths That Teams Actually Use",
    summary:
      "Make paved roads the fastest option with templates, CLIs, and visible scorecards.",
    category: "Platform Engineering",
    date: "2025-10-01",
    readMinutes: 6,
  },
];

