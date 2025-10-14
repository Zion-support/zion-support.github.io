'use client';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Comprehensive AI solutions for your business',
    category: 'AI'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Professional IT services and support',
    category: 'IT'
  }
];

export default services;