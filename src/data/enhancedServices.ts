import { ProductListing } from "@/types/listings";

// Enhanced real micro SAAS services and solutions
export const ENHANCED_SERVICES: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      avatarUrl: "https://ziontechgroup.com/wp-content/uploads/2024/01/zion-logo.png",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 156,
    featured: true,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "ai-customer-insights",
    title: "AI-Powered Customer Insights Platform",
    description: "Advanced customer behavior analysis using machine learning to predict churn, identify upsell opportunities, and personalize customer experiences. Integrates with CRM systems and provides actionable recommendations.",
    category: "Customer Analytics",
    price: 1899,
    currency: "$",
    tags: ["Customer Analytics", "Predictive Analytics", "CRM Integration", "Personalization"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 93
  },
  {
    id: "ai-content-optimization",
    title: "AI Content Optimization Engine",
    description: "Intelligent content optimization tool that analyzes and improves SEO, readability, and engagement metrics. Uses NLP to suggest improvements, keyword optimization, and content structure recommendations.",
    category: "Content Marketing",
    price: 799,
    currency: "$",
    tags: ["Content Optimization", "SEO", "NLP", "Marketing"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    rating: 4.7,
    reviewCount: 234,
    location: "Global",
    availability: "Immediate",
    aiScore: 91
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated cost optimization, security compliance monitoring, and disaster recovery orchestration. Reduces cloud costs by 25-40%.",
    category: "Cloud Management",
    price: 4499,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security", "Disaster Recovery"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "edge-computing-solution",
    title: "Edge Computing Infrastructure Solution",
    description: "Distributed edge computing platform for IoT devices, reducing latency and bandwidth costs. Includes edge node management, data processing, and real-time analytics capabilities.",
    category: "Edge Computing",
    price: 5999,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Low Latency", "Real-time Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T08:20:00.000Z",
    rating: 4.8,
    reviewCount: 12,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },

  // Additional modern services (new)
  {
    id: "mlops-platform",
    title: "Managed MLOps Platform",
    description: "End-to-end model lifecycle management with CI/CD for ML, feature store, model registry, automated evaluations, and safe rollout.",
    category: "AI Platform",
    price: 7999,
    currency: "$",
    tags: ["MLOps", "Model Registry", "Feature Store", "CI/CD"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-05T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 64,
    featured: false,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "finops-cost-optimization",
    title: "Cloud FinOps Cost Optimization",
    description: "Data-driven cloud spend optimization across AWS, Azure, and GCP with continuous rightsizing, commitment planning, and anomaly detection.",
    category: "Cloud Management",
    price: 2499,
    currency: "$",
    tags: ["FinOps", "Cost Optimization", "AWS", "Azure", "GCP"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1508711043292-8f5023f1c3d9?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-12T09:30:00.000Z",
    rating: 4.7,
    reviewCount: 102,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },
  {
    id: "soc2-compliance-automation",
    title: "SOC 2 Compliance Automation",
    description: "Automated evidence collection, control monitoring, policy management, and audit readiness with mapped tasks and dashboards.",
    category: "Security & Compliance",
    price: 3999,
    currency: "$",
    tags: ["SOC 2", "Compliance", "Audit", "GRC"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-18T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 41,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 90
  },
  {
    id: "ai-sales-sdr",
    title: "AI Sales SDR Automation",
    description: "Outbound research, personalized messaging, meeting scheduling, and CRM updates driven by AI agents with human-in-the-loop.",
    category: "Sales Automation",
    price: 1299,
    currency: "$",
    tags: ["SDR", "Outreach", "Personalization", "CRM"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-25T14:15:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 87
  },

  // Advanced AI & Machine Learning Services
  {
    id: "ai-video-generation",
    title: "AI Video Generation & Editing Suite",
    description: "Professional AI-powered video creation platform with automated editing, scene generation, and content optimization. Includes voice synthesis, background music, and multi-format export capabilities.",
    category: "AI & Machine Learning",
    price: 3999,
    currency: "$",
    tags: ["Video Generation", "AI Editing", "Content Creation", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    featured: false,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },

  // Additional services can be added here...
];

// Service categories for filtering
export const ENHANCED_SERVICE_CATEGORIES = [
  { label: 'AI & Machine Learning', value: 'ai-ml' },
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Data & Analytics', value: 'data-analytics' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Development & DevOps', value: 'development-devops' },
  { label: 'Digital Transformation', value: 'digital-transformation' },
  { label: 'Healthcare Technology', value: 'healthcare-tech' },
  { label: 'Financial Technology', value: 'fintech' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'Quantum Computing', value: 'quantum-computing' },
  { label: 'Edge Computing', value: 'edge-computing' },
  { label: 'Emerging Technology', value: 'emerging-tech' },
  { label: 'AI Automation', value: 'ai-automation' }
];

// Pricing tiers for different service levels
export const SERVICE_PRICING_TIERS = {
  basic: { range: "$500 - $2,000", description: "Essential services for small businesses and startups" },
  professional: { range: "$2,000 - $8,000", description: "Advanced solutions for growing companies and mid-market" },
  enterprise: { range: "$8,000 - $25,000", description: "Custom enterprise solutions with dedicated support" },
  premium: { range: "$25,000 - $50,000+", description: "Specialized industry solutions and cutting-edge technology" }
};

// Backward-compatible alias expected by EnhancedServicesPage
export const PRICING_TIERS = SERVICE_PRICING_TIERS;

// Contact information
export const CONTACT_INFO = {
  mobile: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com",
  domain: "ziontechgroup.com"
};