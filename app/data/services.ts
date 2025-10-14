'use client';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive AI solutions for your business needs',
    icon: '🤖',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    category: 'AI'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern web applications built with latest technologies',
    icon: '🌐',
    features: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Development'
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: '📱',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    category: 'Development'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and services',
    icon: '☁️',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    category: 'Infrastructure'
  }
];

export default services;