<<<<<<< HEAD
export const realMarketServicesExtended = [
  {
    id: 'extended-service-1',
    name: 'Extended Market Service',
    tagline: 'Extended market service solutions',
    price: '$399',
    category: 'Extended Services'
=======
export interface RealMarketServiceExtended {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
}

export const realMarketServicesExtended: RealMarketServiceExtended[] = [
  {
    id: 'extended-service-1',
    name: 'Extended Market Service 1',
    tagline: 'Extended market coverage',
    price: '$599',
    features: ['Extended features', 'Market coverage', 'Advanced analytics']
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
  }
];