export interface ComprehensiveItSolution {
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
export const comprehensiveITSolutions: ComprehensiveItSolution[] = [
  {
    id: any