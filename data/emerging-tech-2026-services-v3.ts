export interface EmergingTech2026ServiceV3 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  real_implementation: boolean;
  contact_info: {
    mobile: string;
    email: string;

    address: string;
  }
export const emergingTech2026ServicesV3: EmergingTech2026ServiceV3[] = [
  {
    id: any