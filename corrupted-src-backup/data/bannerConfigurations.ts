export interface Banner {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  featured: boolean;
  priority: number;
}

export const getFeaturedBanners = (count: number = 3): Banner[] => {
  const banners: Banner[] = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions for Enterprise',
      description: 'Transform your business with cutting-edge AI technology',
      ctaText: 'Learn More',
      ctaUrl: '/services',
      featured: true,
      priority: 1,
    },
    {
      id: 'automation-platform',
      title: 'Automation Platform',
      description: 'Streamline operations with intelligent automation',
      ctaText: 'Get Started',
      ctaUrl: '/services/automation',
      featured: true,
      priority: 2,
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Solutions',
      description: 'Unlock insights from your data with advanced analytics',
      ctaText: 'Explore',
      ctaUrl: '/services/analytics',
      featured: true,
      priority: 3,
    },
  ];

  return banners.slice(0, count);
};
