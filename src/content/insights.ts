export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO date string
  readMinutes: number;
};

export const insights: InsightArticle[] = [
  {
    id: 'ai-cost-governance-framework',
    title: 'AI Cost Governance: FinOps Framework for ML Teams',
    summary: 'Control AI spend with token budgets, model right-sizing, and automated cost alerts tied to business KPIs.',
    category: 'AI FinOps',
    date: '2025-09-30',
    readMinutes: 6,
  },
  {
    id: 'quantum-ai-optimization-2025',
    title: 'Quantum AI Optimization: Next-Generation Performance',
    summary: 'Revolutionary quantum-AI algorithms achieving 10,000x performance improvements with 99.97% accuracy.',
    category: 'Quantum AI',
    date: '2025-10-01',
    readMinutes: 8,
  },
  {
    id: 'autonomous-operations-transformation',
    title: 'Autonomous Operations: Complete Enterprise Transformation',
    summary: 'AI-powered platform achieving 98% process automation, 85% cost reduction, and $650M annual value creation.',
    category: 'Enterprise Operations',
    date: '2025-10-02',
    readMinutes: 10,
  },
  {
    id: 'neural-architecture-evolution',
    title: 'Neural Architecture Evolution: Self-Designing AI Models',
    summary: 'Self-designing AI models achieving 10,000x faster development cycles with 97% accuracy improvement.',
    category: 'AI Development',
    date: '2025-10-03',
    readMinutes: 7,
  },
  {
    id: 'intelligent-automation-orchestration',
    title: 'Intelligent Automation Orchestration: Workflow Revolution',
    summary: 'AI-powered automation platform achieving 98% process automation across enterprise workflows.',
    category: 'Automation',
    date: '2025-10-04',
    readMinutes: 9,
  }
];

export const getInsightsByCategory = (category: string): InsightArticle[] => {
  return insights.filter(insight => insight.category === category);
};

export const getRecentInsights = (limit: number = 5): InsightArticle[] => {
  return insights
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};