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

export const servicesCatalog: ServiceCategory[] = [];