export interface AdditionalRealService {;
  id: string,;
  name: string,;
  tagline: string,;
  price: string,;
  description: string,;
  features: string[],;
  link: string,;
  category: string,;
  realImplementation: boolean,;
  contactInfo: {;
    mobile: string,;
    email: string,;
    address: string;
  }
}
<<<<<<< HEAD

export const additionalEnhancedServices: AdditionalRealService[] = [
  {
    id: &quot;ai-automation-suite&quot;,
    name: &quot;AI Automation Suite&quot;,
    tagline: &quot;Intelligent automation for modern businesses&quot;,
    price: &quot;$79/month&quot;,
    description: &quot;Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.&quot;,
    features: [
      &quot;Workflow automation&quot;,
      &quot;AI decision making&quot;,
      &quot;Integration APIs&quot;,
      &quot;Custom workflows&quot;,
      &quot;Analytics dashboard&quot;
    ],
    link: &quot;/services/ai-automation-suite&quot;,
    category: &quot;AI & Automation&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  },
  {
    id: &quot;data-warehouse-solution&quot;,
    name: &quot;Data Warehouse Solution&quot;,
    tagline: &quot;Enterprise-grade data management and analytics&quot;,
    price: &quot;$149/month&quot;,
    description: &quot;Scalable data warehouse solution with advanced analytics and business intelligence capabilities.&quot;,
    features: [
      &quot;Data integration&quot;,
      &quot;Real-time processing&quot;,
      &quot;Advanced analytics&quot;,
      &quot;Scalable architecture&quot;,
      &quot;Security compliance&quot;
    ],
    link: &quot;/services/data-warehouse-solution&quot;,
    category: &quot;Data & Analytics&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
=======
;
export const additionalEnhancedServices: AdditionalRealService[] = [;
  {;
    id: "ai-automation-suite",;
    name: "AI Automation Suite",;
    tagline: "Intelligent automation for modern businesses",;
    price: "$79/month",;
    description: "Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.",;
    features: [;
      "Workflow automation",;
      "AI decision making",;
      "Integration APIs",;
      "Custom workflows",;
      "Analytics dashboard";
    ],;
    link: "/services/ai-automation-suite",;
    category: "AI & Automation",;
    realImplementation: true,;
    contactInfo: {;
      mobile: "+1 302 464 0950",;
      email: "kleber@ziontechgroup.com",;
      address: "364 E Main St STE 1008 Middletown DE 19709";
    }
  },;
  {;
    id: "data-warehouse-solution",;
    name: "Data Warehouse Solution",;
    tagline: "Enterprise-grade data management and analytics",;
    price: "$149/month",;
    description: "Scalable data warehouse solution with advanced analytics and business intelligence capabilities.",;
    features: [;
      "Data integration",;
      "Real-time processing",;
      "Advanced analytics",;
      "Scalable architecture",;
      "Security compliance";
    ],;
    link: "/services/data-warehouse-solution",;
    category: "Data & Analytics",;
    realImplementation: true,;
    contactInfo: {;
      mobile: "+1 302 464 0950",;
      email: "kleber@ziontechgroup.com",;
      address: "364 E Main St STE 1008 Middletown DE 19709";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
];