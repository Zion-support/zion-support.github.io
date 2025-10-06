export const newInsights = [
  { 
    id: 'ai-platform-roi-scorecards',
    title: 'AI Platform ROI: Simple Scorecards That Drive Adoption',
    summary: 'Connect platform capabilities to adoption golden paths and SLO outcomes. Make quarterly cut/scale decisions with evidence.',
    category: 'AI Strategy',
    date: '2025-10-03',
    readMinutes: 7,
    featured: true,
    tags: ['Platform', 'ROI', 'Scorecards'],
    content: `
# AI Platform ROI: Simple Scorecards That Drive Adoption

Connect platform capabilities to adoption golden paths and SLO outcomes. Make quarterly cut/scale decisions with evidence.

## Key Points
- Simple scorecards that drive adoption
- Connect capabilities to outcomes
- Make data-driven decisions
- Quarterly review cycles
    `,
  },
  { 
    id: 'guardrails-scorecards-evals-2025',
    title: 'Guardrails Engineers Adopt: Scorecards, PR Gates, Online Canaries',
    summary: 'Lightweight outcome‑linked guardrails that speed delivery while managing risk.',
    category: 'AI Strategy',
    date: '2025-09-29',
    readMinutes: 6,
    featured: true,
    tags: ['Guardrails', 'Scorecards', 'PR Gates', 'Canaries'],
    content: `
# Guardrails Engineers Adopt: Scorecards, PR Gates, Online Canaries

Lightweight outcome‑linked guardrails that speed delivery while managing risk.

## Key Points
- Lightweight guardrails
- Outcome-linked metrics
- Speed delivery
- Manage risk effectively
    `,
  }
];

export const getFeaturedInsights = () => {
  return newInsights.filter(insight => insight.featured);
};

export const getInsightsByCategory = (category: string) => {
  return newInsights.filter(insight => insight.category === category);
};