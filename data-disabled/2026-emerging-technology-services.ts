export interface EmergingTechnologyService {
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
  targetAudience: string[];
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
<<<<<<< HEAD:data-disabled/2026-emerging-technology-services.ts
const contact = {
  mobile: "+1 302 464 0950",;
  email: "kleber@ziontechgroup.com",;
  address: "364 E Main St STE 1008 Middletown DE 19709";




  website: "https://ziontechgroup.com"}
export const emergingTechnologyServices2026: EmergingTechnologyService[] = [;
  {
    id: "ai-powered-autonomous-vehicles-platform",;
    name: "AI Autonomous Vehicles Platform",;
    tagline: "Develop and test autonomous vehicle systems with AI simulation",;
    price: "$799",;
    period: "/month",;
    description: "Comprehensive platform for developing, testing, and validating autonomous vehicle systems using advanced AI simulation and real-world data integration.",;
