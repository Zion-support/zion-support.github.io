export interface AdditionalRealService {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  link: string,
  category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string,
    email: string,
    address: string
  }
}

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
    }
  }
],