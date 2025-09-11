export interface InnovativeITService {
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
  variant: string;
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
export const innovativeITServices: InnovativeITService[] = [;
  {
    id: "quantum-cloud-orchestrator",;
    name: "Quantum Cloud Orchestrator",;
    tagline: "Autonomous cloud infrastructure management with quantum optimization",;
    price: "$18,999",;
    period: "/month",;
    description: "Revolutionary quantum AI platform that autonomously manages, optimizes, and scales cloud infrastructure across multiple providers with quantum-level efficiency and cost optimization.",;
