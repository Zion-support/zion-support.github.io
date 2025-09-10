import { specializedIndustrySolutions2026 } from '@/data/2026-specialized-industry-solutions';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  deliveryTime: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
}

export function map2026ServicesToExistingStructure(): Service[] {
  return specializedIndustrySolutions2026.map((solution, index) => ({
    id: `service-${index + 1}`,
    title: solution.title,
    description: solution.description,
    category: solution.category || 'Technology Solutions',
    tags: solution.tags || [],
    features: solution.features || [],
    pricing: {
      basic: solution.pricing?.basic || 1000,
      premium: solution.pricing?.premium || 5000,
      enterprise: solution.pricing?.enterprise || 15000
    },
    deliveryTime: solution.deliveryTime || '2-4 weeks',
    rating: 4.5 + Math.random() * 0.5,
    reviews: Math.floor(Math.random() * 100) + 10,
    image: solution.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    featured: Math.random() > 0.7
  }));
}

export function getServiceById(id: string): Service | undefined {
  const services = map2026ServicesToExistingStructure();
  return services.find(service => service.id === id);
}

export function getServicesByCategory(category: string): Service[] {
  const services = map2026ServicesToExistingStructure();
  return services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );
}

export function searchServices(query: string): Service[] {
  const services = map2026ServicesToExistingStructure();
  const lowercaseQuery = query.toLowerCase();
  
  return services.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}