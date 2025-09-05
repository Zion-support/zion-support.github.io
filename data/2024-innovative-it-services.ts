export interface InnovativeITService2024 {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  popular?: boolean;
}

export const innovativeITServices2024: InnovativeITService2024[] = [
  {
    id: "ai-ops-center",
    name: "AI-Powered IT Operations Center",
    tagline: "Intelligent IT operations with AI-driven automation",
    description: "Revolutionary AI-powered IT operations center that automates incident response, predictive maintenance, and intelligent monitoring.",
    features: [
      "AI Incident Response",
      "Predictive Maintenance",
      "Automated Remediation",
      "Intelligent Monitoring"
    ],
    pricing: "$25,000 - $150,000/setup",
    category: "AI Operations",
    popular: true
  }
];