import { ServiceVariant  } from "../types/service-variants";
export interface NextGenInnovation2025 {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
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
export const nextGenInnovations2025: NextGenInnovation2025[] = [;
  // Next-Gen AI & Robotics;
<<<<<<< HEAD:data-disabled/next-gen-innovations-2025.ts
  {
    id: "autonomous-ai-fleet-manager",;
    name: "Autonomous AI Fleet Manager",;
    tagline: "Manage autonomous vehicle fleets with AI intelligence",;
    price: "$18,999",;
    period: "/month",;
    description: "Comprehensive autonomous fleet management platform that uses AI to coordinate, optimize, and manage fleets of autonomous vehicles for logistics, transportation, and delivery services.",;
