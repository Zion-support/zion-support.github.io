export interface Banner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  priority: number;
  isActive: boolean;
}

export const getFeaturedBanners = (count: number = 3): Banner[] => {
  const banners: Banner[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      imageUrl: '/images/ai-solutions-banner.jpg',
      linkUrl: '/services/ai-solutions',
      priority: 1,
      isActive: true,
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Revolutionary quantum-enhanced computing platforms for unprecedented performance and capabilities.',
      imageUrl: '/images/quantum-computing-banner.jpg',
      linkUrl: '/services/quantum-computing',
      priority: 2,
      isActive: true,
    },
    {
      id: 'automation',
      title: 'Enterprise Automation',
      description: 'Complete automation suites for enterprise operations, workflows, and business processes.',
      imageUrl: '/images/automation-banner.jpg',
      linkUrl: '/services/automation',
      priority: 3,
      isActive: true,
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      imageUrl: '/images/cloud-solutions-banner.jpg',
      linkUrl: '/services/cloud-solutions',
      priority: 4,
      isActive: true,
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      imageUrl: '/images/cybersecurity-banner.jpg',
      linkUrl: '/services/cybersecurity',
      priority: 5,
      isActive: true,
    },
  ];

  return banners
    .filter(banner => banner.isActive)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count);
};