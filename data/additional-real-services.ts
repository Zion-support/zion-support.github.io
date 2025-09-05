export interface AdditionalRealService {_id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;};
}

export const additionalEnhancedServices: AdditionalRealService[] = [
  {_id: "ai-automation-suite", _name: "AI Automation Suite", _tagline: "Intelligent automation for modern businesses", _price: "$79/month", _description: "Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.", _features: [
      "Workflow automation", _"AI decision making", _"Integration APIs", _"Custom workflows", _"Analytics dashboard"
    ], _link: "/services/ai-automation-suite", _category: "AI & Automation", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  },
  {_id: "data-warehouse-solution", _name: "Data Warehouse Solution", _tagline: "Enterprise-grade data management and analytics", _price: "$149/month", _description: "Scalable data warehouse solution with advanced analytics and business intelligence capabilities.", _features: [
      "Data integration", _"Real-time processing", _"Advanced analytics", _"Scalable architecture", _"Security compliance"
    ], _link: "/services/data-warehouse-solution", _category: "Data & Analytics", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];