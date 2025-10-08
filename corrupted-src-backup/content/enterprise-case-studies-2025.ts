// Enterprise case studies showcasing real-world AI implementations and results

export interface EnterpriseCaseStudy {
  id: string;
  slug?: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    costSavings: string;
    efficiencyGain: string;
    roi: string;
    timeline: string;
  };
  featured: boolean;
  publishedAt: string;
  tags: string[];
}

export const enterpriseCaseStudies2025: EnterpriseCaseStudy[] = [
  {
    id: 'fortune-500-ai-automation',
    slug: 'fortune-500-ai-automation-case-study',
    title: 'Fortune 500 AI Automation: 85% Cost Reduction',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Manual processes causing delays and high operational costs',
    solution: 'Implemented AI-powered automation platform with intelligent workflow optimization',
    results: 'Achieved 85% cost reduction and 300% efficiency improvement',
    metrics: {
      costSavings: '$50M annually',
      efficiencyGain: '300%',
      roi: '450%',
      timeline: '6 months',
    },
    featured: true,
    publishedAt: '2025-10-01',
    tags: ['AI Automation', 'Manufacturing', 'Cost Reduction', 'ROI'],
  },
  {
    id: 'financial-services-ai-analytics',
    slug: 'financial-services-ai-analytics-case-study',
    title: 'Financial Services AI Analytics: 99.9% Accuracy',
    company: 'Major Bank',
    industry: 'Financial Services',
    challenge: 'Manual fraud detection leading to false positives and missed threats',
    solution: 'Deployed AI-powered analytics platform with real-time fraud detection',
    results: 'Achieved 99.9% accuracy in fraud detection with 60% reduction in false positives',
    metrics: {
      costSavings: '$25M annually',
      efficiencyGain: '200%',
      roi: '350%',
      timeline: '4 months',
    },
    featured: true,
    publishedAt: '2025-10-02',
    tags: ['AI Analytics', 'Financial Services', 'Fraud Detection', 'Accuracy'],
  },
];
