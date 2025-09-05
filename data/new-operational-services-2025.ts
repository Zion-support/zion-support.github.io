export interface NewOperationalService2025 {
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

export const newOperationalServices2025: NewOperationalService2025[] = [
  {
    id: &quot;smart-operations-center&quot;,
    name: &quot;Smart Operations Center&quot;,
    tagline: &quot;AI-powered operations management&quot;,
    price: &quot;$119/month&quot;,
    description: &quot;Intelligent operations center that uses AI to optimize business processes and workflows.&quot;,
    features: [
      &quot;AI process optimization&quot;,
      &quot;Real-time monitoring&quot;,
      &quot;Predictive analytics&quot;,
      &quot;Automated workflows&quot;,
      &quot;Performance insights&quot;
    ],
    link: &quot;/services/smart-operations-center&quot;,
    category: &quot;New Operational Services 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],