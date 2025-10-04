export interface Banner {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  priority: number;
}

export const getFeaturedBanners = (count: number = 3): Banner[] => {
  const banners: Banner[] = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      imageUrl: '/images/ai-solutions.jpg',
      linkUrl: '/solutions/ai',
      priority: 1
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Revolutionary quantum-enhanced computing platforms for unprecedented performance and capabilities.',
      imageUrl: '/images/quantum-computing.jpg',
      linkUrl: '/solutions/quantum',
      priority: 2
    },
    {
      id: 'automation',
      title: 'Enterprise Automation',
      description: 'Complete automation suites for enterprise operations, workflows, and business processes.',
      imageUrl: '/images/automation.jpg',
      linkUrl: '/solutions/automation',
      priority: 3
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and services for modern enterprise applications.',
      imageUrl: '/images/cloud-services.jpg',
      linkUrl: '/solutions/cloud',
      priority: 4
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      imageUrl: '/images/cybersecurity.jpg',
      linkUrl: '/solutions/security',
      priority: 5
    }
  ];

  return banners
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count);
};