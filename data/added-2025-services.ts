export interface AddedService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string | number;
  period?: string;
  category: string;
  features: string[];
  icon?: string;
  link?: string;
  rating?: number;
  customerCount?: number;
}
