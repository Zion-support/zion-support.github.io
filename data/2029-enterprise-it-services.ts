export interface EnterpriseItService2029 {
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

export const enterpriseITServices2029: EnterpriseItService2029[] = [
  {
    id: &quot;2029-enterprise-it&quot;,
    name: &quot;2029 Enterprise IT Service Platform&quot;,
    tagline: &quot;Enterprise IT services for 2029&quot;,
    price: &quot;$599/month&quot;,
    description: &quot;Advanced enterprise IT service platform designed for large organizations in 2029.&quot;,
    features: [
      &quot;Enterprise IT services&quot;,
      &quot;Scalable solutions&quot;,
      &quot;Advanced security&quot;,
      &quot;24/7 support&quot;,
      &quot;Custom integration&quot;
    ],
    link: &quot;/services/2029-enterprise-it&quot;,
    category: &quot;Enterprise IT Services 2029&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];