export interface BannerData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string;
  priority: number;
  isActive: boolean;
  category: string;
  tags: string[];
}

export const bannerData: BannerData[] = [
  {
    id: 'ai-solutions',
    title: 'AI-Powered Solutions',
    subtitle: 'Transform Your Business',
    description: 'Leverage cutting-edge artificial intelligence and machine learning technologies to revolutionize your business operations.',
    ctaText: 'Explore AI Solutions',
    ctaLink: '/services/ai-solutions',
    imageUrl: '/images/ai-solutions-banner.jpg',
    priority: 1,
    isActive: true,
    category: 'AI',
    tags: ['artificial intelligence', 'machine learning', 'automation']
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    subtitle: 'Next-Generation Computing',
    description: 'Revolutionary quantum-enhanced computing platforms for unprecedented performance and capabilities.',
    ctaText: 'Learn More',
    ctaLink: '/services/quantum-computing',
    imageUrl: '/images/quantum-computing-banner.jpg',
    priority: 2,
    isActive: true,
    category: 'Quantum',
    tags: ['quantum computing', 'advanced computing', 'performance']
  },
  {
    id: 'automation',
    title: 'Enterprise Automation',
    subtitle: 'Streamline Operations',
    description: 'Complete automation suites for enterprise operations, workflows, and business processes.',
    ctaText: 'Get Started',
    ctaLink: '/services/automation',
    imageUrl: '/images/automation-banner.jpg',
    priority: 3,
    isActive: true,
    category: 'Automation',
    tags: ['automation', 'workflow', 'efficiency']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Scalable Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
    ctaText: 'Discover Cloud',
    ctaLink: '/services/cloud-solutions',
    imageUrl: '/images/cloud-solutions-banner.jpg',
    priority: 4,
    isActive: true,
    category: 'Cloud',
    tags: ['cloud computing', 'infrastructure', 'scalability']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Protect Your Assets',
    description: 'Advanced security solutions to protect your digital assets and infrastructure.',
    ctaText: 'Secure Now',
    ctaLink: '/services/cybersecurity',
    imageUrl: '/images/cybersecurity-banner.jpg',
    priority: 5,
    isActive: true,
    category: 'Security',
    tags: ['cybersecurity', 'security', 'protection']
  }
];

export const getActiveBanners = (): BannerData[] => {
  return bannerData
    .filter(banner => banner.isActive)
    .sort((a, b) => a.priority - b.priority);
};

export const getBannersByCategory = (category: string): BannerData[] => {
  return bannerData
    .filter(banner => banner.category === category && banner.isActive)
    .sort((a, b) => a.priority - b.priority);
};