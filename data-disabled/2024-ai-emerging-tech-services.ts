import { ServiceVariant  } from "../types/service-variants";
export interface AIEmergingTechService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string,
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
    website: string
};
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
export const aiEmergingTechServices: AIEmergingTechService[] = [;
  // AI-Powered Video Generation Platform;
  {
    id: "ai-video-generation-platform",;
    name: "AI Video Generation Platform",;
    tagline: "Create professional videos with AI in minutes",;
    price: "$499",;
    period: "/month",;
    description: "Advanced AI-powered video generation platform that creates professional-quality videos from text, images, and audio inputs. Perfect for marketers, content creators, and businesses.",;
