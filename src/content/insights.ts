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
    id: "policy-guarded-autoremediation",
    title: "Policy‑Guarded Auto‑Remediation: Safe by Design",
    summary:
      "Guardrails, change windows, and eval gates for automated incident responders.",
    category: "SRE",
    date: "2025-10-04",
    readMinutes: 4,
  },
  {
    id: "gpu-cost-aware-scheduling",
    title: "GPU Cost‑Aware Scheduling for LLM Workloads",
    summary:
      "Right‑size, right‑place: spot pools, KV offload, and tiered SLAs for inference.",
    category: "Platform Engineering",
    date: "2025-10-04",
    readMinutes: 5,
  },
  {
    id: "evals-in-the-loop",
    title: "Evals In The Loop: From Offline Suites to Live Canaries",
    summary:
      "Trace‑linked evals that correlate to KPIs and ship with every change.",
    category: "GenAI",
    date: "2025-10-04",
    readMinutes: 4,
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
];

