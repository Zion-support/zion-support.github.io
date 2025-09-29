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
    id: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG Blueprint v2: Retrieval That Actually Works",
    summary:
      "Governance for sources, retrieval policies, and evals that track to CSAT and deflection.",
    category: "GenAI",
    date: "2025-10-04",
    readMinutes: 6,
  },
  {
    id: "ai-governance-scorecards",
    title: "AI Governance Scorecards: Policy Tests That Enable Speed",
    summary:
      "Approval trails, automated policy checks in CI, and runtime observability for safe velocity.",
    category: "AI Governance",
    date: "2025-10-04",
    readMinutes: 5,
  },
  {
    id: "agent-observability-2025",
    title: "Agent Observability: What to Trace and How to Measure",
    summary:
      "Spans for tool calls, guardrail outcomes, and quality metrics that drive iteration.",
    category: "GenAI",
    date: "2025-10-04",
    readMinutes: 5,
  }
];

