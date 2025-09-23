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
    tagline: 'Extended market service solutions',
    price: '$399',
    features: ['Extended capabilities', 'Market analysis', 'Strategic planning']
  }
];