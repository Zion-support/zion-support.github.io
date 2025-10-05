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
      isActive: true
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses.',
      imageUrl: '/images/cloud-infrastructure-banner.jpg',
      linkUrl: '/services/cloud-infrastructure',
      priority: 2,
      isActive: true
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and visualization tools.',
      imageUrl: '/images/data-analytics-banner.jpg',
      linkUrl: '/services/data-analytics',
      priority: 3,
      isActive: true
    }
  ];

  return banners.slice(0, count);
};