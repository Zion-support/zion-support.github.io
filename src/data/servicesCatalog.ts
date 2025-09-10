export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  billing: 'month' | 'project' | 'hour';
  features: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
};

export type ServiceCategory = {
  name: string;
  slug: string;
  items: ServiceItem[];
};

export const servicesCatalog: ServiceCategory[] = [
  {
    name: 'AI Solutions',
    slug: 'ai-solutions',
    items: [
      {
        id: 'ai-business-intelligence',
        title: 'AI Business Intelligence',
        description: 'Intelligent business analytics platform with automated insights',
        category: 'AI Solutions',
        price: '$2,499',
        billing: 'month',
        features: ['Automated insights', 'Natural language queries', 'Predictive modeling'],
        ctaLabel: 'Get Started',
        href: '/services/ai-business-intelligence'
      }
    ]
  },
  {
    name: 'IT Services',
    slug: 'it-services',
    items: [
      {
        id: 'it-infrastructure',
        title: 'IT Infrastructure',
        description: 'Comprehensive IT infrastructure solutions',
        category: 'IT Services',
        price: '$5,000',
        billing: 'project',
        features: ['Infrastructure design', 'Implementation', 'Support'],
        ctaLabel: 'Learn More',
        href: '/services/it-infrastructure'
      }
    ]
  }
];