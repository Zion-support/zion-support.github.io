import { ServiceVariant  } from "../types/service-variants";
export interface SpaceColonization2029Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string}
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
export const spaceColonization2029Services: SpaceColonization2029Service[] = [;
  // Space Colonization & Mining Services;
<<<<<<< HEAD:data-disabled/2029-space-colonization-services.ts
  {
    id: "mars-colonization-automation-platform",;
    name: "Mars Colonization Automation Platform",;
    tagline: "Automate Mars colonization process with AI and robotics",;
    price: "$99,999",;
    period: "/month",;
    description: "Comprehensive platform that automates the entire Mars colonization process using advanced AI, robotics, and autonomous systems. Manages habitat construction, resource extraction, life support systems, and colony expansion.",;
