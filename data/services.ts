export interface Service {
  id: string;
  name: string;
  description: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 'ai-development',
    name: 'AI Development',
    description: 'Cutting-edge AI solutions for your business.',
    link: '/services/ai-development',
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Scalable and secure cloud infrastructure.',
    link: '/services/cloud-services',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern and responsive web applications.',
    link: '/services/web-development',
  },
];