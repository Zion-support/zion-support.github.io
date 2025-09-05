export interface RealMicroSaasService2024 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  popular?: boolean;
}

export const realMicroSaasServices2024: RealMicroSaasService2024[] = [
  {
    id: "ai-code-review",
    name: "AI-Powered Code Review Assistant",
    tagline: "Automated code review with AI analysis",
    description: "Revolutionary AI-powered code review platform that automatically analyzes code quality, security, and performance.",
    features: [
      "Security Analysis",
      "Performance Optimization",
      "Code Quality Metrics",
      "Best Practice Suggestions"
    ],
    pricing: "$79 - $399/month",
    category: "Development Tools",
    popular: true
  }
];