export interface ServiceData {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  }
  icon: string;

export const servicesData: ServiceData[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced AI and machine learning solutions for your business',
    category: 'AI/ML',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    pricing: {
      starter: 1000,
      professional: 2500,
      enterprise: 5000
    },
    icon: 'robot'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    category: 'Cloud',
    features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps'],
    pricing: {
      starter: 2000,
      professional: 5000,
      enterprise: 10000
    icon: 'cloud-upload'
]