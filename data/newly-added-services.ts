export interface EnhancedService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  description: string;
  link: string;
  category: string;
  realImplementation: boolean;
}

export const newlyAddedServices: EnhancedService[] = [
  {
    id: 'managed-ml-feature-store-starter',
    name: 'Managed ML Feature Store Starter',
    tagline: 'Production-ready feature store with governance and lineage',
    price: '$249',
    period: '/month',
    description: 'Spin up a governed feature store with versioning and lineage.',
    link: 'https://ziontechgroup.com/services/managed-ml-feature-store-starter',
    category: 'AI & Data',
    realImplementation: true}];
