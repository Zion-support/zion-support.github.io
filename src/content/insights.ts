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
    id: "autonomous-ops-slo-controllers",
    title: "Autonomous Ops: SLO‑Driven Controllers That Keep You Green",
    summary:
      "Design controllers that watch SLOs and take safe corrective action automatically, with auditability.",
    category: "AI & Automation",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "cyber-ai-behavioral-analytics",
    title: "Cyber AI: Behavioral Analytics that Cut False Positives 60%",
    summary:
      "Pair signals, context windows, and human feedback to harden detections and accelerate triage.",
    category: "Security",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "cloud-scorecards-review-rituals",
    title: "Cloud Scorecards: Review Rituals that Scale Decision Quality",
    summary:
      "Lightweight, repeatable scorecards that guide capacity, resilience, and cost decisions across teams.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "genai-evals-live-canaries",
    title: "GenAI Evals: Shipping with Live Canaries and Policy Tests",
    summary:
      "A practical path from notebooks to continuous evaluation with rollback triggers and budgets.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 7,
  },
  {
    id: "edge-flags-health-circuits",
    title: "Edge Flags: Health Circuits for Instant, Safe Rollouts",
    summary:
      "Validation, signing, and caching strategies that make rollouts boring—even on Friday.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 6,
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
    readMinutes: 6,
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

