  id: string;
  name: string;
  tagline: string;
  description: string;
  price?: string | {
    monthly?: number;
    yearly?: number;
    currency?: string;
    trialDays?: number;
    setupTime?: string
  },
  period?: string;
  pricing?: any;
  features: string[];
  popular?: boolean;
  category: string;
  icon: string;
  marketPrice?: string;
  competitors?: string[];
  targetMarket?: string;
  useCases?: string[];
  integration?: string[],
  benefits?: string[]
}
interface ServiceCardProps {
  service: Service;
  variant?: 'ai' | 'quantum' | 'space' | 'cybersecurity' | 'enterprise' | 'automation' | 'it' | 'emerging' | 'premium' | 'default'
}

const UltraFuturisticServiceCard2026: React.FC<ServiceCardProps> = ({ service, variant;
