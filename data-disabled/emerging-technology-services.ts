export interface EmergingTechnologyService {
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
export const emergingTechnologyServices: EmergingTechnologyService[] = [;
  {
    id: "blockchain-platform",;
    name: "Blockchain Development Platform",;
    tagline: "Build and deploy blockchain applications",;
    price: "$179/month",;
    description: "Comprehensive blockchain development platform for creating decentralized applications.",;
