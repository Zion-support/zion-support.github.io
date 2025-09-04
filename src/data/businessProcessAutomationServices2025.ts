export interface BusinessProcessAutomationService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
}

export const BUSINESS_PROCESS_AUTOMATION_SERVICES_2025: BusinessProcessAutomationService[] = [
  // Intelligent Document Processing Platform
  {
    id: "intelligent-document-processing",
    title: "Intelligent Document Processing Platform",
    description: "AI-powered platform that automatically extracts, processes, and analyzes data from various document types including invoices, contracts, forms, and reports with high accuracy and speed.",
    category: "Business Process Automation",
    subcategory: "Document Processing",
    price: 1499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "OCR and text extraction",
      "AI data classification",
      "Form recognition",
      "Invoice processing",
      "Contract analysis",
      "Data validation",
      "Workflow automation",
      "Integration APIs",
      "Mobile app",
      "Compliance tracking"
    ],
    benefits: [
      "Reduce processing time by 80%",
      "Improve accuracy by 95%",
      "Eliminate manual data entry",
      "Speed up approval processes",
      "Reduce operational costs"
    ],
    useCases: [
      "Invoice processing",
      "Contract management",
      "Form processing",
      "Compliance documentation",
      "Data entry automation"
    ],
    targetAudience: [
      "Accounting departments",
      "Legal teams",
      "HR departments",
      "Administrative staff",
      "Compliance officers"
    ],
    tags: ["Automation", "Document Processing", "AI", "OCR", "Workflow"],
    estimatedDelivery: "6-10 weeks",
    supportLevel: "standard",
    marketPrice: "$1,499 - $4,999/month",
    roi: "300-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["OCR", "Machine Learning", "Natural Language Processing", "React", "Node.js"],
      integrations: ["ERP Systems", "Accounting Software", "Document Management", "Email Systems", "Cloud Storage"],
      apiEndpoints: 80,
      uptime: "99.9%",
      security: ["Data encryption", "Access control", "Audit trails", "Privacy protection", "Compliance"]
    },
    competitors: ["UiPath", "Automation Anywhere", "ABBYY", "Kofax", "DocuSign"],
    marketSize: "$4.9 billion by 2025"
  },

  // Intelligent Customer Service Automation
  {
    id: "intelligent-customer-service-automation",
    title: "Intelligent Customer Service Automation Platform",
    description: "Advanced AI-powered customer service platform that automates responses, handles inquiries, escalates complex issues, and provides personalized support across multiple channels.",
    category: "Business Process Automation",
    subcategory: "Customer Service",
    price: 1999,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI chatbot",
      "Natural language processing",
      "Multi-channel support",
      "Sentiment analysis",
      "Ticket routing",
      "Knowledge base",
      "Live chat integration",
      "Performance analytics",
      "Mobile app",
      "API integration"
    ],
    benefits: [
      "Reduce response time by 90%",
      "Increase customer satisfaction by 40%",
      "Reduce support costs by 60%",
      "Handle 24/7 inquiries",
      "Improve agent productivity"
    ],
    useCases: [
      "Customer support",
      "Sales inquiries",
      "Technical support",
      "Order management",
      "Complaint handling"
    ],
    targetAudience: [
      "Customer service teams",
      "E-commerce businesses",
      "SaaS companies",
      "Support managers",
      "Call centers"
    ],
    tags: ["Automation", "Customer Service", "AI", "Chatbot", "Support"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "standard",
    marketPrice: "$1,999 - $6,999/month",
    roi: "350-500%",
    innovationLevel: "Advanced",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["NLP", "Machine Learning", "WebRTC", "React", "Node.js"],
      integrations: ["Zendesk", "Salesforce", "HubSpot", "Slack", "Microsoft Teams"],
      apiEndpoints: 100,
      uptime: "99.9%",
      security: ["Data encryption", "Access control", "Privacy protection", "Audit trails", "Compliance"]
    },
    competitors: ["Zendesk", "Intercom", "Freshworks", "Help Scout", "Drift"],
    marketSize: "$8.6 billion by 2025"
  };
];