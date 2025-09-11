import { Cloud } from 'lucide-react';
const features = [];
const benefits = [];
const industries = [];
const services = [];

export const _contactInfo = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};
export const _microSAASServices = [
  {
    id: "ai-sales-copilot",
    name: "AI Sales Copilot",
    description: "Intelligent sales automation platform that boosts conversion rates and streamlines sales processes",
    features: [
      "Lead scoring and prioritization",
      "Automated follow-up sequences",
      "Sales performance analytics",
      "CRM integration",
      "AI-powered conversation insights"
    ],
    benefits: [
      "Increase sales by 35%",
      "Reduce follow-up time by 60%",
      "Improve lead conversion rates",
      "Automate repetitive tasks"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "$799/month"
    },
    link: "/services/ai-sales-copilot",
    category: "Sales & Marketing"
  },
  {
    id: "ai-compliance-assistant",
    name: "AI Compliance Assistant",
    description: "Automated compliance monitoring and reporting for regulatory requirements across industries",
    features: [
      "Real-time compliance monitoring",
      "Automated reporting generation",
      "Risk assessment algorithms",
      "Multi-regulation support",
      "Audit trail management"
    ],
    benefits: [
      "Reduce compliance costs by 40%",
      "Eliminate manual reporting errors",
      "Stay ahead of regulatory changes",
      "Improve audit readiness"
    ],
    pricing: {
      starter: "$149/month",
      professional: "$399/month",
      enterprise: "$999/month"
    },
    link: "/services/ai-compliance-assistant",
    category: "Compliance & Risk"
  },
  {
    id: "cloud-finops-optimizer",
    name: "Cloud FinOps Optimizer",
    description: "Cloud cost optimization and financial operations management platform",
    features: [
      "Cost allocation and tracking",
      "Resource optimization recommendations",
      "Budget forecasting",
      "Multi-cloud cost management",
      "Automated cost alerts"
    ],
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Improve resource utilization",
      "Better budget planning",
      "Transparent cost visibility"
    ],
    pricing: {
      starter: "$79/month",
      professional: "$199/month",
      enterprise: "$499/month"
    },
    link: "/services/cloud-finops-optimizer",
    category: "Cloud & DevOps"
  },
  {
    id: "ai-workflow-automation",
    name: "AI Workflow Automation",
    description: "Intelligent process automation platform that learns and optimizes business workflows",
    features: [
      "Visual workflow designer",
      "AI-powered process optimization",
      "Integration with 100+ tools",
      "Performance analytics",
      "Custom automation rules"
    ],
    benefits: [
      "Reduce manual work by 70%",
      "Improve process efficiency",
      "Faster decision making",
      "Scalable automation"
    ],
    pricing: {
      starter: "$129/month",
      professional: "$349/month",
      enterprise: "$899/month"
    },
    link: "/services/ai-workflow-automation",
    category: "Automation"
  },
  {
    id: "ai-customer-support-automation",
    name: "AI Customer Support Automation",
    description: "Intelligent customer service platform with automated responses and human escalation",
    features: [
      "AI-powered chatbot",
      "Multi-language support",
      "Ticket routing automation",
      "Customer sentiment analysis",
      "Knowledge base integration"
    ],
    benefits: [
      "Reduce response time by 80%",
      "Handle 70% of queries automatically",
      "Improve customer satisfaction",
      "24/7 support availability"
    ],
    pricing: {
      starter: "$89/month",
      professional: "$249/month",
      enterprise: "$649/month"
    },
    link: "/services/ai-customer-support-automation",
    category: "Customer Service"