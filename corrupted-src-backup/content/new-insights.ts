export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readMinutes: number;
  featured: boolean;
  tags: string[];
  content: string;
}

export const newInsights: Insight[] = [
  {
    id: "ai-platform-optimization-insights",
    title:
      "AI Platform Optimization: Maximizing ROI with Intelligent Scorecards",
    summary:
      "Revolutionary AI platform optimization delivering unprecedented ROI through intelligent scorecards and performance monitoring.",
    category: "AI Strategy",
    date: "2025-10-03",
    readMinutes: 7,
    featured: true,
    tags: ["Platform", "ROI", "Scorecards"],
    content: `
# AI Platform Optimization Insights

Transform your AI platform with intelligent scorecards and performance monitoring that deliver measurable ROI.

## Key Insights
- Intelligent performance scorecards drive 300% ROI improvement
- Real-time optimization recommendations reduce costs by 40%
- Comprehensive ROI tracking enables data-driven decisions
- Automated performance tuning increases efficiency by 60%
    `,
  },
  {
    id: "quantum-ai-security-insights",
    title: "Quantum AI Security: Next-Generation Protection Framework",
    summary:
      "Advanced quantum AI security framework providing unprecedented protection against emerging threats.",
    category: "AI Security",
    date: "2025-10-04",
    readMinutes: 9,
    featured: true,
    tags: ["Security", "Quantum", "AI"],
    content: `
# Quantum AI Security Insights

Protect your AI systems with next-generation quantum security frameworks.

## Security Insights
- Quantum-resistant encryption prevents 99.99% of threats
- Advanced threat detection identifies zero-day attacks
- Zero-trust architecture eliminates security vulnerabilities
- Real-time monitoring provides instant threat response
    `,
  },
];
