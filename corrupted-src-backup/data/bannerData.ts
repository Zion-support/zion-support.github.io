export interface BannerData {
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

export const bannerData: BannerData[] = [
  {
    id: 'ai-platform-2025',
    title: 'AI Platform 2025: Transform Your Business',
    description:
      'Revolutionary AI platform delivering unprecedented business transformation with measurable results.',
    ctaText: 'Get Started',
    ctaUrl: '/services/ai-platform',
    featured: true,
    priority: 1,
    startDate: '2025-10-01',
    endDate: '2025-12-31',
    category: 'AI Platform',
    tags: ['AI', 'Platform', 'Business', 'Transformation'],
  },
  {
    id: 'quantum-ai-security',
    title: 'Quantum AI Security: Next-Gen Protection',
    description:
      'Advanced quantum AI security framework providing unprecedented protection against emerging threats.',
    ctaText: 'Learn More',
    ctaUrl: '/services/quantum-ai-security',
    featured: true,
    priority: 2,
    startDate: '2025-10-01',
    endDate: '2025-12-31',
    category: 'AI Security',
    tags: ['Security', 'Quantum', 'AI', 'Protection'],
  },
];
