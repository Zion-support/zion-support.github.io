export interface CuratedMarketService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  category: string;
  description?: string;
}

export const curatedMarketServices: CuratedMarketService[] = [
  {
    id: 'curated-market-1',
    name: 'Market Analysis Platform',
    tagline: 'Comprehensive market intelligence and analysis',
    price: '$299',
    category: 'Business Intelligence',
    description: 'Advanced market research and competitive analysis platform'
  },
  {
    id: 'curated-market-2',
    name: 'Customer Insights Dashboard',
    tagline: 'Real-time customer behavior analytics',
    price: '$199',
    category: 'Analytics',
    description: 'Deep customer insights and behavioral analysis'
  }
];