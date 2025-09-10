export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  technologies: string[];
  timeline: string;
  icon: string;
};

export const servicesCatalog: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    category: 'Development',
    price: 'Starting at $5,000',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    timeline: '4-8 weeks',
    icon: 'Globe'
  }
];