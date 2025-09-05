export interface EmergingTechnologyService {
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

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: &quot;blockchain-platform&quot;,
    name: &quot;Blockchain Development Platform&quot;,
    tagline: &quot;Build and deploy blockchain applications&quot;,
    price: &quot;$179/month&quot;,
    description: &quot;Comprehensive blockchain development platform for creating decentralized applications.&quot;,
    features: [
      &quot;Smart contract development&quot;,
      &quot;DApp deployment&quot;,
      &quot;Blockchain integration&quot;,
      &quot;Security auditing&quot;,
      &quot;Performance monitoring&quot;
    ],
    link: &quot;/services/blockchain-platform&quot;,
    category: &quot;Emerging Tech&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];