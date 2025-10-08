export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO date string
  readMinutes: number;
}

export const insights: Insight[] = [
  {
    id: 'ai-cost-governance-framework',
    title: 'AI Cost Governance: FinOps Framework for ML Teams',
    summary:
      'Control AI spend with token budgets, model right-sizing, and automated cost alerts tied to business KPIs.',
    category: 'AI Operations',
    date: '2025-10-01',
    readMinutes: 8,
  },
  {
    id: 'enterprise-ai-scorecards-2025',
    title: 'Enterprise AI Scorecards 2025: KPI-Linked SLIs and Canary Gates',
    summary:
      'Implement production-ready AI scorecards with KPI-linked SLIs, canary deployments, and instant rollback capabilities.',
    category: 'AI Reliability',
    date: '2025-10-02',
    readMinutes: 12,
  },
  {
    id: 'rag-quality-budgets-production',
    title: 'RAG Quality Budgets in Production: Freshness Windows and Cache Tiers',
    summary:
      'Optimize RAG systems with quality budgets, freshness windows, and tiered caching strategies for cost-effective performance.',
    category: 'RAG Engineering',
    date: '2025-10-03',
    readMinutes: 10,
  },
];
