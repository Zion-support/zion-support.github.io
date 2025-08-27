export interface RealServiceQ22025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  category?: string;
}

export const realServicesQ22025: RealServiceQ22025[] = [
  {
    id: 'q2-service-1',
    name: 'Q2 Service 1',
    tagline: 'Second quarter service offering',
    price: '$299',
    features: ['Core features', 'Standard performance', 'Basic integration'],
    category: 'Q2 Services'
  },
  {
    id: 'q2-service-2',
    name: 'Q2 Service 2',
    tagline: 'Advanced Q2 solutions',
    price: '$499',
    features: ['Advanced features', 'Enhanced performance', 'Full integration'],
    category: 'Q2 Services'
  }
];