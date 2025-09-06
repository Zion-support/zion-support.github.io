export interface Revolutionary2027Service {
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
export const revolutionary2027Services: Revolutionary2027Service[] = [
  {
    id: any