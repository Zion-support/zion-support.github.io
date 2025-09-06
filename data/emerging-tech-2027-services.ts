export interface EmergingTech2027Service {
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
export const emergingTech2027Services: EmergingTech2027Service[] = [
  {
    id: any