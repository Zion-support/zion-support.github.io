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
<<<<<<< HEAD
      id: "rag-routing-evals",
      title: "RAG Routing with Evals: Send Queries Where They Win",
      summary:
      "Use intent detection, collection scores, and offline evals to route to the best retriever.",
      category: "GenAI",
      date: "2025-10-01",
      readMinutes: 5,
  },
  {
      id: "policy-tests-in-prod",
      title: "Policy Tests in Production: Guardrails Without Friction",
      summary:
      "Lightweight policies, exemptions, and telemetry that keep teams fast and safe.",
      category: "AI Governance",
      date: "2025-10-01",
      readMinutes: 4,
  },
  {
      id: "latency-budgets-at-edge",
      title: "Latency Budgets at the Edge: Design for P95, Not Happy Path",
      summary:
      "Budgeting, cache strategy, and fail‑open tactics for consistent sub‑100ms UX.",
      category: "Architecture",
      date: "2025-10-01",
      readMinutes: 5,
  },
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
      id: "crm-grounded-prompts",
      title: "Grounded Prompts with CRM Context: Sales Copilots That Convert",
      summary:
      "Reference opportunities, stakeholders, and last touches to improve reply quality and close rates.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "zero-downtime-cutover-checklist",
      title: "Zero‑Downtime Cutover Checklist",
      summary:
      "Dual‑write, read‑shadowing, backfills, and safe cutovers with rollback checkpoints.",
      category: "Platform Engineering",
      date: "2025-09-30",
      readMinutes: 4,
  },
  {
      id: "ai-sales-copilot-insights",
      title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
      summary:
      "How to wire CRMs, build prompt libraries, and add evals that boost win‑rates without risk.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "eda-contracts-replays",
      title: "Event‑Driven Architecture: Contracts, Idempotency, and Safe Replays",
      summary:
      "Version events, enforce schemas, and run backfills without double‑processing.",
      category: "Architecture",
      date: "2025-09-30",
      readMinutes: 6,
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
      id: "zero-downtime-migrations",
      title: "Zero‑Downtime Migrations: Patterns that Keep Pages Green",
      summary:
      "Dual‑write, read‑shadowing, and progressive delivery to ship schema changes safely.",
      category: "Platform Engineering",
      date: "2025-09-29",
      readMinutes: 5,
  },
  {
      id: "ai-autonomous-ops-intro",
      title: "AI Autonomous Operations: From Runbooks to Self‑Managing Systems",
      summary:
      "Policy tests, health circuits, and closed‑loop optimization that shrink toil to near zero.",
      category: "AI & Automation",
      date: "2025-09-30",
      readMinutes: 6,
  },
  {
      id: "ai-roi-scorecards",
      title: "AI ROI Scorecards That Executives Trust",
      summary:
      "Pick leading indicators, instrument baselines, and report outcomes without vanity metrics.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "edge-observability-blueprint",
      title: "Edge Observability Blueprint: Sub‑100ms Reliability",
      summary:
      "Latency budgets, client ↔ edge traces, and error budgets that keep UX snappy.",
      category: "Observability",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "genai-policy-tests-canaries",
      title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
      summary:
=======
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
>>>>>>> cursor/create-and-deploy-new-content-9c51
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
];

