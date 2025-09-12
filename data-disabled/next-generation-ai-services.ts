export interface NextGenerationAIService {
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
export const nextGenerationAIServices: NextGenerationAIService[] = [;
<<<<<<< HEAD:data-disabled/next-generation-ai-services.ts
  {
    id: "quantum-ai-brain-computer-interface",;
    name: "Quantum AI Brain-Computer Interface",;
    tagline: "World\"s first quantum-enhanced AI with human-like reasoning",;
    price: "$2,999",;
    period: "/month",;
    description: "Revolutionary quantum AI platform that interfaces directly with neural signals, enabling breakthrough discoveries and cognitive enhancement with unprecedented accuracy.",;
