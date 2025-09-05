export interface ExtraService {
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

export const extraServices: ExtraService[] = [
  {
    id: &quot;cloud-migration-expert&quot;,
    name: &quot;Cloud Migration Expert&quot;,
    tagline: &quot;Seamless cloud migration and optimization&quot;,
    price: &quot;$99/hour&quot;,
    description: &quot;Professional cloud migration services for businesses looking to modernize their infrastructure.&quot;,
    features: [
      &quot;AWS/Azure/GCP migration&quot;,
      &quot;Performance optimization&quot;,
      &quot;Cost analysis&quot;,
      &quot;Security implementation&quot;,
      &quot;24/7 support&quot;
    ],
    link: &quot;/services/cloud-migration-expert&quot;,
    category: &quot;Cloud Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  },
  {
    id: &quot;cybersecurity-audit&quot;,
    name: &quot;Cybersecurity Audit Pro&quot;,
    tagline: &quot;Comprehensive security assessment and protection&quot;,
    price: &quot;$199/hour&quot;,
    description: &quot;Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.&quot;,
    features: [
      &quot;Vulnerability assessment&quot;,
      &quot;Penetration testing&quot;,
      &quot;Security policy review&quot;,
      &quot;Compliance audit&quot;,
      &quot;Remediation guidance&quot;
    ],
    link: &quot;/services/cybersecurity-audit&quot;,
    category: &quot;Security&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
  }
];