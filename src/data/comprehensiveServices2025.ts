import { ProductListing } from "@/types/listings";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from './innovativeMicroSaasServices2025';
import { ADVANCED_AI_SERVICES_2025 } from './advancedAIServices2025';
import { CLOUD_DEVOPS_SERVICES_2025 } from './cloudDevOpsServices2025';
import { DATA_ANALYTICS_SERVICES_2025 } from './dataAnalyticsServices2025';
import { EMERGING_TECH_SERVICES_2025 } from './emergingTechServices2025';

export const COMPREHENSIVE_SERVICES_2025: ProductListing[] = [
  ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
  ...ADVANCED_AI_SERVICES_2025,
  ...CLOUD_DEVOPS_SERVICES_2025,
  ...DATA_ANALYTICS_SERVICES_2025,
  ...EMERGING_TECH_SERVICES_2025
];

// Additional specialized services
export const SPECIALIZED_SERVICES_2025: ProductListing[] = [
  {
    id: "ai-financial-compliance-assistant",
    title: "AI Financial Compliance & Regulatory Assistant",
    description: "Intelligent compliance platform that automates financial regulatory reporting, monitors compliance requirements, and provides real-time alerts for regulatory changes across multiple jurisdictions.",
    category: "AI & Finance",
    subcategory: "Compliance & Regulatory",
    price: 5499,
    currency: "$",
    tags: ["Financial Compliance", "Regulatory Reporting", "AI Automation", "Multi-jurisdiction", "Real-time Monitoring"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-financial-compliance.jpg"],
    createdAt: "2024-07-01T10:00:00.000Z",
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 97,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-financial-compliance",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$5,000-12,000",
    competitors: ["ComplyAdvantage", "RegTech", "Compliance.ai", "Alessa"],
    roi: "500% within 8 months",
    setupTime: "6-8 weeks",
    integrations: ["Banking Systems", "Regulatory APIs", "Compliance Databases", "Reporting Tools", "Audit Systems"]
  },
  {
    id: "ai-healthcare-workflow-automation",
    title: "AI Healthcare Workflow Automation & Clinical Decision Support",
    description: "Comprehensive healthcare automation platform that streamlines clinical workflows, automates administrative tasks, and provides AI-powered clinical decision support for healthcare providers.",
    category: "AI & Healthcare",
    subcategory: "Workflow Automation",
    price: 6999,
    currency: "$",
    tags: ["Healthcare Automation", "Clinical Workflows", "Decision Support", "Administrative Tasks", "Patient Care"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-healthcare-workflow.jpg"],
    createdAt: "2024-07-05T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-healthcare-workflow",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$6,000-15,000",
    competitors: ["Epic", "Cerner", "Allscripts", "Athenahealth"],
    roi: "600% within 12 months",
    setupTime: "8-10 weeks",
    integrations: ["EHR Systems", "PACS", "Lab Systems", "Billing Systems", "Patient Portals", "Medical Devices"]
  },
  {
    id: "ai-legal-research-assistant",
    title: "AI Legal Research & Case Law Analysis Platform",
    description: "Advanced legal research platform that uses AI to analyze case law, legal precedents, and regulatory changes, providing comprehensive legal insights and research automation for legal professionals.",
    category: "AI & Legal",
    subcategory: "Legal Research",
    price: 3999,
    currency: "$",
    tags: ["Legal Research", "Case Law Analysis", "Legal Precedents", "Regulatory Changes", "Research Automation"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-legal-research.jpg"],
    createdAt: "2024-07-10T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-legal-research",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$3,500-8,000",
    competitors: ["Westlaw", "LexisNexis", "Bloomberg Law", "Fastcase"],
    roi: "400% within 6 months",
    setupTime: "4-6 weeks",
    integrations: ["Legal Databases", "Case Management Systems", "Document Management", "Legal Research Tools", "Citation Managers"]
  },
  {
    id: "ai-education-personalization",
    title: "AI Education Personalization & Adaptive Learning Platform",
    description: "Intelligent education platform that personalizes learning experiences, adapts content to individual student needs, and provides real-time feedback and assessment for educational institutions.",
    category: "AI & Education",
    subcategory: "Personalized Learning",
    price: 3499,
    currency: "$",
    tags: ["Education", "Personalized Learning", "Adaptive Content", "Student Assessment", "Real-time Feedback"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-education-personalization.jpg"],
    createdAt: "2024-07-15T10:00:00.000Z",
    rating: 4.7,
    reviewCount: 112,
    featured: true,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 94,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-education-personalization",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$3,000-7,000",
    competitors: ["Knewton", "DreamBox", "Carnegie Learning", "ALEKS"],
    roi: "350% within 8 months",
    setupTime: "5-7 weeks",
    integrations: ["LMS Platforms", "Student Information Systems", "Content Management", "Assessment Tools", "Analytics Platforms"]
  },
  {
    id: "ai-retail-optimization",
    title: "AI Retail Optimization & Customer Experience Platform",
    description: "Comprehensive retail optimization platform that uses AI to optimize inventory, personalize customer experiences, predict demand, and enhance omnichannel retail operations.",
    category: "AI & Retail",
    subcategory: "Retail Optimization",
    price: 4499,
    currency: "$",
    tags: ["Retail Optimization", "Customer Experience", "Inventory Management", "Demand Prediction", "Omnichannel"],
    author: { name: "Zion Tech Group", id: "zion-tech-group", email: "kleber@ziontechgroup.com", avatarUrl: "https://ziontechgroup.com/logo.png" },
    images: ["https://ziontechgroup.com/images/ai-retail-optimization.jpg"],
    createdAt: "2024-07-20T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com/ai-retail-optimization",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    },
    marketPrice: "$4,000-10,000",
    competitors: ["RetailNext", "ShopperTrak", "Prism Skylabs", "Brickstream"],
    roi: "450% within 9 months",
    setupTime: "6-8 weeks",
    integrations: ["POS Systems", "E-commerce Platforms", "Inventory Systems", "CRM Systems", "Analytics Tools", "Mobile Apps"]
  }
];

// Export all services combined
export const ALL_SERVICES_2025: ProductListing[] = [
  ...COMPREHENSIVE_SERVICES_2025,
  ...SPECIALIZED_SERVICES_2025
];

// Service categories for filtering
export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Services', count: ALL_SERVICES_2025.length, icon: '🚀', color: 'from-zion-cyan to-zion-blue' },
  { id: 'AI & Automation', name: 'AI & Automation', count: ALL_SERVICES_2025.filter(s => s.category.includes('AI')).length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
  { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: ALL_SERVICES_2025.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length, icon: '☁️', color: 'from-zion-blue to-zion-cyan' },
  { id: 'Data & Analytics', name: 'Data & Analytics', count: ALL_SERVICES_2025.filter(s => s.category.includes('Data')).length, icon: '📊', color: 'from-zion-green to-zion-emerald' },
  { id: 'Emerging Technology', name: 'Emerging Technology', count: ALL_SERVICES_2025.filter(s => s.category.includes('Emerging')).length, icon: '🔮', color: 'from-zion-purple to-zion-pink' },
  { id: 'Healthcare', name: 'Healthcare', count: ALL_SERVICES_2025.filter(s => s.category.includes('Healthcare')).length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
  { id: 'Finance', name: 'Finance', count: ALL_SERVICES_2025.filter(s => s.category.includes('Finance')).length, icon: '💰', color: 'from-zion-green to-zion-blue' },
  { id: 'Legal', name: 'Legal', count: ALL_SERVICES_2025.filter(s => s.category.includes('Legal')).length, icon: '⚖️', color: 'from-zion-purple to-zion-indigo' },
  { id: 'Education', name: 'Education', count: ALL_SERVICES_2025.filter(s => s.category.includes('Education')).length, icon: '🎓', color: 'from-zion-orange to-zion-red' },
  { id: 'Retail', name: 'Retail', count: ALL_SERVICES_2025.filter(s => s.category.includes('Retail')).length, icon: '🛍️', color: 'from-zion-green to-zion-cyan' }
];