export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readMinutes: number;
  featured?: boolean;
  link: string;
}

export const latestArticles: Article[] = [
  {
    id: "ai-foundation-models-2026",
    title: "AI Foundation Models 2026: Enterprise Implementation Guide",
    summary: "Master AI foundation models with 90% cost reduction and 300% performance improvement.",
    category: "AI Architecture",
    date: "2026-01-15",
    readMinutes: 25,
    featured: true,
    link: "/blog/ai-foundation-models-2026"
  },
  {
    id: "ai-operational-excellence-2026",
    title: "AI Operational Excellence 2026: 90% Automation & $8M+ Savings",
    summary: "Achieve operational excellence with AI-driven automation and $8M+ annual savings.",
    category: "AI Operations",
    date: "2026-01-15",
    readMinutes: 20,
    featured: true,
    link: "/blog/ai-operational-excellence-2026"
  },
  {
    id: "ai-governance-scorecards-2026",
    title: "AI Governance Scorecards Quickstart 2026",
    summary: "Transform your business with AI-powered BI that delivers real-time insights.",
    category: "AI Strategy",
    date: "2026-01-14",
    readMinutes: 6,
    featured: true,
    link: "/blog/ai-governance-scorecards-quickstart-2026"
  }
];

export default latestArticles;
