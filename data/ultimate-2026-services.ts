export interface Ultimate2026Service {
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
export const ultimate2026Services: Ultimate2026Service[] = [
  {
    id: any