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
<<<<<<< HEAD
      id: 'automat, i, o, n',
      title: 'Enterprise, Automati, o, n',
      description: 'Complete, automation, suites for, enterprise, operation, s, workflo, w, s, and, business, processes.',
      imageUrl: '/imag, e, s/automati, o, n-bann, e, r.jp, g',
      linkU, r, l: '/servic, e, s/automat, i, o, n',
      priori, t, y:  , 3,
      isActi, v, e: t, r, u, e,
    },
    {
      id: 'clo, u, d-solution, s',
      title: 'Cloud, Solutio, n, s',
      description: 'Scalable, and, secure cloud, infrastructure, solutions for, modern, businesse, s.',
      imageUrl: '/imag, e, s/clo, u, d-solutio, n, s-bann, e, r.jp, g',
      linkU, r, l: '/servic, e, s/clo, u, d-solution, s',
      priori, t, y:  , 4,
      isActi, v, e: t, r, u, e,
    },
    {
      id: 'cybersecur, i, t, y',
      title: 'Cybersecur, i, t, y',
      description: 'Advanced, security, solutions to, protect, your digital, assets, and infrastruct, u, r, e.',
      imageUrl: '/imag, e, s/cybersecuri, t, y-bann, e, r.jp, g',
      linkU, r, l: '/servic, e, s/cybersecur, i, t, y',
      priori, t, y:  , 5,
      isActi, v, e: t, r, u, e,
    },
  ]; return, banner, s
    .filt, e, r(bann, e, r = > bann, e, r.isAct, i, v, e)
    .so, r, t((a, b) => a.priori, t, y - b.priori, t, y)
=======
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
>>>>>>> origin/cursor/ad-creation-and-management-ac48
