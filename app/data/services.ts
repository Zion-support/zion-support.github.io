'use client';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  href: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for your business',
    icon: 'brain',
    href: '/ai-solutions',
    category: 'AI'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Comprehensive cybersecurity services to protect your business',
    icon: 'shield',
    href: '/cybersecurity',
    category: 'Security'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions',
    icon: 'cloud',
    href: '/cloud-infrastructure',
    category: 'Infrastructure'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Transform your business with digital solutions',
    icon: 'refresh-cw',
    href: '/digital-transformation',
    category: 'Transformation'
  }
];

export default services;