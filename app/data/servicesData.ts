export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

export const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Expert AI strategy and implementation consulting',
    shortDescription: 'AI strategy consulting',
    icon: '🤖',
    features: ['Strategy Development', 'Implementation Planning', 'ROI Analysis'],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: ['Increased Efficiency', 'Cost Reduction', 'Competitive Advantage'],
    useCases: ['Process Automation', 'Data Analysis', 'Customer Service'],
    technologies: ['Machine Learning', 'Deep Learning', 'NLP'],
    contactInfo: {
      phone: '+1-555-0123',
      email: 'ai@ziontech.com',
      website: 'https://ziontech.com'
    }
  }
];