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
    id: "ai-risk-register-checklist",
    title: "AI Risk Register Checklist",
    summary: "Owners, policy tests, and dashboards that make risk programs real.",
    category: "AI Governance",
    date: "2025-10-04",
    readMinutes: 4,
  },
  {
    id: "ai-platform-roi-scorecards",
    title: "AI Platform ROI Scorecards: Ship Value Every Quarter",
    summary: "Tie platform work to adoption, golden paths, and business KPIs with simple scorecards.",
    category: "AI Strategy",
    date: "2025-10-06",
    readMinutes: 5,
  },
  {
    id: "secure-ml-supply-chain",
    title: "Secure ML Supply Chain: SBOMs, Lineage, Egress Controls",
    summary: "Proven controls for datasets, models, and inference—track provenance and lock egress.",
    category: "Security",
    date: "2025-10-06",
    readMinutes: 6,
  },
  {
    id: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG v2: Freshness, Hybrid Search, Reliable Evals",
    summary: "Blueprint for stable quality: versioned chunks, hybrid retrievers, KPI‑linked evals.",
    category: "GenAI",
    date: "2025-10-06",
    readMinutes: 7,
  },
  {
    id: "rag-freshness-strategies",
    title: "RAG Freshness Strategies",
    summary: "Invalidate staleness with versioned chunks, TTLs, and async warmups.",
    category: "GenAI",
    date: "2025-10-04",
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
    id: "ai-governance-at-scale-2025",
    title: "AI Governance at Scale: Policies That Enable Speed",
    summary:
      "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "ai-scorecards-that-ship",
    title: "AI Scorecards That Ship",
    summary: "Tie initiatives to KPIs with lightweight scorecards and weekly operating rhythms.",
    category: "AI Strategy",
    date: "2025-10-05",
    readMinutes: 4,
  },
  {
    id: "edge-feature-flags",
    title: "Edge Feature Flags: Zero‑Regret Rollouts",
    summary: "Canary by segment and geography with instant rollback and budget caps at the edge.",
    category: "Architecture",
    date: "2025-10-05",
    readMinutes: 5,
  },
  {
    id: "cloud-governance-scorecards",
    title: "Cloud Governance with Scorecards",
    summary: "Turn policies into dashboards and PR checks—spend less time arguing, more shipping.",
    category: "Platform Engineering",
    date: "2025-10-05",
    readMinutes: 4,
  },
];

