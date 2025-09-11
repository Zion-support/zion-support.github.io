import { ServiceVariant  } from "../types/service-variants";
export interface Revolutionary2026Service {
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
export const revolutionary2026Services: Revolutionary2026Service[] = [;
  // AI-Powered Business Intelligence & Analytics;
  {
    id: "ai-business-intelligence-suite-2026",;
    name: "AI Business Intelligence Suite 2026",;
    tagline: "Next-generation AI-powered business analytics and decision intelligence",;
    price: "$299",;
    period: "/month",;
    description: "Revolutionary AI-powered business intelligence platform that transforms raw data into actionable insights, predictive analytics, and automated decision-making capabilities. Features advanced machine learning algorithms, natural language querying, and real-time dashboard customization.",;
