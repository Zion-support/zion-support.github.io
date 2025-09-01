export interface UltimateInnovativeService {

  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
contactInfo: {
    phone: string;
    email: string;
    website: string};
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[]};
  competitors?: string[];
  caseStudies?: string[]}

export const SERVICE_CATEGORIES = [;
  'AI & Automation',
  'Quantum Computing',
  'Blockchain & Web3',
  'Cybersecurity',;
  'IoT & Edge Computing',;
  'Metaverse & AR/VR',;
  'Robotics & Automation',;
  'Biotechnology',;
  'Space Technology',;
  'Green Technology';
];

export const SERVICE_SUBCATEGORIES = {
