export interface EnhancedPromotionalBanner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  featured: boolean;
  priority: number;
  startDate: string;
  endDate: string;
  category: string;
  tags: string[];
}

export const enhancedPromotionalBanners: EnhancedPromotionalBanner[] = [
  {
    id: "oct-01-autonomous-business-ops-2025",
    title:
      "🚀 JUST RELEASED: Autonomous Business Operations Platform — $650M Value Creation, 85% Cost Reduction in 90 Days!",
    description:
      "Revolutionary AI platform delivering unprecedented business transformation with measurable results.",
    ctaText: "Get Started Now",
    ctaUrl: "/services/autonomous-business-operations",
    featured: true,
    priority: 1,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    category: "AI Platform",
    tags: ["AI", "Automation", "Business Operations", "Cost Reduction"],
  },
  {
    id: "oct-01-ai-governance-framework-2025",
    title:
      "NEW: AI Governance Framework 2025 — Ship AI Safely with Zero Regret",
    description:
      "Complete governance framework for enterprise AI deployment with policy tests, scorecards, and rollback capabilities.",
    ctaText: "Learn More",
    ctaUrl: "/services/ai-governance",
    featured: true,
    priority: 2,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
    category: "AI Governance",
    tags: ["AI Governance", "Enterprise", "Safety", "Compliance"],
  },
];
