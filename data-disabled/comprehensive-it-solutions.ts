export interface ComprehensiveItSolution {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
export const comprehensiveITSolutions: ComprehensiveItSolution[] = [;
  {
    id: "full-stack-development",;
    name: "Full-Stack Development Services",;
    tagline: "End-to-end web application development",;
    price: "$80/hour",;
    description: "Complete full-stack development services from frontend to backend and database design.",;
