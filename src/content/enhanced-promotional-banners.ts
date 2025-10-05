/**
 * Enhanced Promotional Banners
 * Collection of promotional banners for marketing campaigns
 */

export interface PromotionalBanner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant: 'success' | 'warning' | 'info' | 'error';
  icon?: string;
  featured: boolean;
  priority: number;
  startDate: string;
}

/**
 * Sample promotional banners
 */
export const promotionalBanners: PromotionalBanner[] = [
  {
    id: "ai-breakthrough-2025",
    title: "Revolutionary AI Breakthrough 2025",
    description: "Discover the latest AI consciousness and superintelligence breakthroughs",
    ctaText: "Learn More",
    ctaLink: "/ai-breakthroughs",
    variant: 'info',
    icon: "brain",
    featured: true,
    priority: 1,
    startDate: "2024-12-01"
  },
  {
    id: "quantum-computing-available",
    title: "Quantum Computing Solutions Now Available",
    description: "Unlock unprecedented computational power with our quantum-AI integration",
    ctaText: "Get Started",
    ctaLink: "/quantum-solutions",
    variant: 'success',
    icon: "cpu",
    featured: true,
    priority: 2,
    startDate: "2024-12-01"
  }
];

export default promotionalBanners;