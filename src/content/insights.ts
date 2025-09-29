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
    id: "serverless-warm-pools-playbook",
    title: "Serverless Warm Pools: Cut Cold Starts, Not Corners",
    summary:
      "Adaptive warmers, concurrency hints, and budgets to keep P95 low without overspend.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 4,
  },
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
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary:
      "When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
    category: "AI Governance",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "edge-cache-invalidation",
    title: "Edge Cache Invalidation Strategies That Won't Wake You Up",
    summary:
      "Versioned keys, background warming, and circuit breakers for resilient edge experiences.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "genai-telemetry-metrics",
    title: "GenAI Telemetry: The 8 Metrics That Predict Drift",
    summary:
      "Capture inputs, policies, and human feedback signals to detect regressions before users do.",
    category: "GenAI",
    date: "2025-09-27",
    readMinutes: 7,
  },
  {
    id: "observability-otel-traces-that-matter",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "feature-flags-edge-realtime",
    title: "Real‑Time Feature Flags at the Edge",
    summary:
      "Architect, cache, and validate flags globally for instant rollouts and safe rollbacks.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
];

