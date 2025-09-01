export interface AdditionalService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency?: string;
  pricingModel?: string;
  features?: string[];
  benefits?: string[];
  useCases?: string[];
  tags?: string[];
  estimatedDelivery?: string;
  supportLevel?: string;
  marketPrice: string;
  roi?: string;
  innovationLevel?: string;
  contactInfo?: {
    phone: string;
    email: string;
    website: string;
  };

export const ADDITIONAL_SPECIALIZED_SERVICES: AdditionalService[] = [
  {
    id: "ai-sales-outreach-accelerator",
    title: "AI Sales Outreach Accelerator",
    description: "Multi-channel AI outreach, persona targeting, cadence optimization, and reply classification.",
    category: "Revenue Ops",
    price: 899,
    marketPrice: "$900 - $2,200/month"
  },
  {
    id: "finops-cost-optimizer",
    title: "FinOps Cost Optimizer",
    description: "Automated cloud cost governance, rightsizing, and anomaly detection across AWS/Azure/GCP.",
    category: "Cloud & DevOps",
    price: 699,
    marketPrice: "$700 - $2,000/month"
  },
  {
    id: "genai-content-studio-pro",
    title: "GenAI Content Studio Pro",
    description: "Enterprise-grade LLM content workflows with guardrails, brand voice, and human-in-the-loop.",
    category: "AI & Content",
    price: 999,
    marketPrice: "$1,000 - $3,000/month"

];

}}}}}}}}