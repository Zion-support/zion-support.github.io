export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: string;
  featured: boolean;
}

export const newServices2026: Service[] = [];

export default newServices2026;