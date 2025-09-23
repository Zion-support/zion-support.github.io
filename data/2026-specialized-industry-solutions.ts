export interface SpecializedIndustrySolution2026 {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  period: string;
  features: string[];
  useCases: string[];
  targetAudience: string;
  technology: string[];
  integrations: string[];
  setupTime: string;
  roi: string;
  marketPosition: string;
  competitors: string[];
  marketSize: string;
  contactInfo: {
    mobile: string;
    email: string;
    website: string;
  };
}

export const specializedIndustrySolutions2026: SpecializedIndustrySolution2026[] = [
  {
    id: 'ai-healthcare-diagnostic',
    name: 'AI Healthcare Diagnostic System',
    description: 'Advanced AI-powered diagnostic system for healthcare providers.',
    category: 'Healthcare',
    price: '$18,999',
    period: '/month',
    features: ['AI diagnostics', 'Real-time analysis', 'HIPAA compliance'],
    useCases: ['Medical diagnosis', 'Patient monitoring'],
    targetAudience: 'Healthcare providers',
    technology: ['AI/ML', 'Python', 'TensorFlow'],
    integrations: ['EMR systems', 'Lab systems'],
    setupTime: '2-4 weeks',
    roi: '300% ROI within 6 months',
    marketPosition: 'Leading provider',
    competitors: ['Company A', 'Company B'],
    marketSize: '$2.5B',
    contactInfo: {
      mobile: '+1-555-0123',
      email: 'contact@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];