import { ServiceVariant  } from "../types/service-variants";
export interface AdvancedITInfrastructureService {
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
export const advancedITInfrastructure2025: AdvancedITInfrastructureService[] = [;
  // Multi-Cloud Orchestration Platform;
  {
    id: "multi-cloud-orchestration",;
    name: "Multi-Cloud Orchestration Platform",;
    tagline: "Unified management across AWS, Azure, Google Cloud, and private clouds",;
    price: "$1,299",;
    period: "/month",;
    description: "Enterprise-grade multi-cloud orchestration platform that provides unified management, monitoring, and optimization across multiple cloud providers. Features intelligent workload placement, cost optimization, and seamless migration capabilities.",;
