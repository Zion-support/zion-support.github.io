export interface EnterpriseIt2026Service {
  id: string;
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
    address: string;
  };
}

export const enterpriseIT2026Services: EnterpriseIt2026Service[] = [
  {
    id: &quot;2026-enterprise-it&quot;,
    name: &quot;2026 Enterprise IT Solutions&quot;,
    tagline: &quot;Future-ready enterprise IT&quot;,
    price: &quot;$399/month&quot;,
    description: &quot;Comprehensive enterprise IT solutions designed for 2026 and beyond.&quot;,
    features: [
      &quot;Enterprise architecture&quot;,
      &quot;Future-ready solutions&quot;,
      &quot;Scalable infrastructure&quot;,
      &quot;Advanced security&quot;,
      &quot;24/7 support&quot;
    ],
    link: &quot;/services/2026-enterprise-it&quot;,
    category: &quot;Enterprise IT 2026&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];