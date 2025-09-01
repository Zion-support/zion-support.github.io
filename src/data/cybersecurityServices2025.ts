export interface CybersecurityService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs?: {
    technology: string[];
    integrations: string[];
    apiEndpoints: number;
    uptime: string;
    security: string[];
  };
  competitors?: string[];
  marketSize?: string;
  demoUrl?: string;
  documentationUrl?: string;
}

export const CYBERSECURITY_SERVICES_2025: CybersecurityService[] = [
  // Zero Trust Security Platform
  {
    id: 'zero-trust-security-platform',
    title: 'Zero Trust Security Platform',
    description: 'Comprehensive zero trust security platform that implements continuous verification and least-privilege access controls across all enterprise resources.',
    category: 'Cybersecurity',
    subcategory: 'Zero Trust',
    price: 8500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Identity verification and authentication',
      'Device trust assessment',
      'Network segmentation',
      'Application access control',
      'Data encryption and protection',
      'Continuous monitoring',
      'Threat detection and response',
      'Compliance reporting',
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'API security',
      'Mobile device management'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      'Improve compliance posture',
      'Enhanced data protection',
      'Simplified access management',
      'Real-time threat prevention'
    ],
    useCases: [
      'Large enterprises',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Educational institutions'
    ],
    targetAudience: [
      'CISOs',
      'Security architects',
      'IT administrators',
      'Compliance officers',
      'Risk managers'
    ],
    tags: ['Zero Trust', 'Security', 'Authentication', 'Compliance', 'Access Control'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$8,500 - $25,000/month',
    roi: '300-500%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['OAuth 2.0', 'SAML', 'OIDC', 'Python', 'React', 'Node.js'],
      integrations: ['Active Directory', 'LDAP', 'SAML providers', 'SIEM systems'],
      apiEndpoints: 100,
      uptime: '99.99%',
      security: ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA']
    },
    competitors: ['Okta', 'Ping Identity', 'ForgeRock', 'Microsoft Azure AD'],
    marketSize: '$35 billion',
    demoUrl: 'https://ziontechgroup.com/demo/zero-trust',
    documentationUrl: 'https://ziontechgroup.com/docs/zero-trust'
  },

  // Advanced Threat Detection
  {
    id: 'advanced-threat-detection',
    title: 'Advanced Threat Detection Platform',
    description: 'Next-generation threat detection platform that uses AI and machine learning to identify and respond to sophisticated cyber threats in real-time.',
    category: 'Cybersecurity',
    subcategory: 'Threat Detection',
    price: 6500,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'AI-powered threat detection',
      'Behavioral analytics',
      'Anomaly detection',
      'Real-time threat intelligence',
      'Automated incident response',
      'Threat hunting capabilities',
      'Forensic analysis',
      'Compliance reporting',
      'Integration with SIEM',
      'Mobile threat defense',
      'Cloud security monitoring',
      'Vulnerability assessment'
    ],
    benefits: [
      'Detect threats 90% faster',
      'Reduce false positives by 70%',
      'Automated threat response',
      'Enhanced security visibility',
      'Proactive threat hunting'
    ],
    useCases: [
      'Security operations centers',
      'Large enterprises',
      'Financial services',
      'Healthcare organizations',
      'Government agencies'
    ],
    targetAudience: [
      'Security analysts',
      'SOC teams',
      'Incident responders',
      'Security managers',
      'IT security teams'
    ],
    tags: ['Threat Detection', 'AI', 'Security Analytics', 'Incident Response', 'SIEM'],
    estimatedDelivery: '6-10 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$6,500 - $20,000/month',
    roi: '250-400%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['Machine Learning', 'Python', 'Elasticsearch', 'Kafka', 'React'],
      integrations: ['Splunk', 'QRadar', 'LogRhythm', 'FireEye', 'CrowdStrike'],
      apiEndpoints: 120,
      uptime: '99.95%',
      security: ['SOC 2', 'ISO 27001', 'NIST Framework', 'Encryption']
    },
    competitors: ['CrowdStrike', 'FireEye', 'Carbon Black', 'SentinelOne'],
    marketSize: '$25 billion',
    demoUrl: 'https://ziontechgroup.com/demo/threat-detection',
    documentationUrl: 'https://ziontechgroup.com/docs/threat-detection'
  },

  // Cloud Security Platform
  {
    id: 'cloud-security-platform',
    title: 'Cloud Security Platform',
    description: 'Comprehensive cloud security platform that provides visibility, compliance, and threat protection across multi-cloud environments.',
    category: 'Cybersecurity',
    subcategory: 'Cloud Security',
    price: 7200,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Cloud security posture management',
      'Identity and access management',
      'Data loss prevention',
      'Compliance monitoring',
      'Threat detection and response',
      'Security configuration management',
      'Vulnerability scanning',
      'Container security',
      'Serverless security',
      'API security',
      'Multi-cloud support',
      'Automated remediation'
    ],
    benefits: [
      'Reduce cloud security risks by 75%',
      'Automate compliance reporting',
      'Enhanced cloud visibility',
      'Unified security management',
      'Cost optimization'
    ],
    useCases: [
      'Cloud-native organizations',
      'Multi-cloud enterprises',
      'DevOps teams',
      'Security teams',
      'Compliance officers'
    ],
    targetAudience: [
      'Cloud architects',
      'DevOps engineers',
      'Security teams',
      'Compliance managers',
      'IT administrators'
    ],
    tags: ['Cloud Security', 'CSPM', 'Compliance', 'DevSecOps', 'Multi-cloud'],
    estimatedDelivery: '6-8 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$7,200 - $22,000/month',
    roi: '200-350%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['AWS SDK', 'Azure SDK', 'GCP SDK', 'Python', 'React', 'Node.js'],
      integrations: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
      apiEndpoints: 150,
      uptime: '99.9%',
      security: ['SOC 2', 'ISO 27001', 'CSA STAR', 'GDPR']
    },
    competitors: ['Prisma Cloud', 'AWS Security Hub', 'Azure Security Center', 'Google Security Command Center'],
    marketSize: '$30 billion',
    demoUrl: 'https://ziontechgroup.com/demo/cloud-security',
    documentationUrl: 'https://ziontechgroup.com/docs/cloud-security'
  },

  // Data Protection and Privacy
  {
    id: 'data-protection-privacy',
    title: 'Data Protection and Privacy Platform',
    description: 'Comprehensive data protection and privacy platform that ensures compliance with global regulations while protecting sensitive data.',
    category: 'Cybersecurity',
    subcategory: 'Data Protection',
    price: 5800,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      'Data discovery and classification',
      'Data loss prevention',
      'Encryption and tokenization',
      'Privacy compliance automation',
      'Consent management',
      'Data governance',
      'Audit and reporting',
      'Data masking',
      'Backup and recovery',
      'Data retention policies',
      'Privacy impact assessments',
      'Breach notification'
    ],
    benefits: [
      'Ensure regulatory compliance',
      'Protect sensitive data',
      'Reduce data breach risks',
      'Automated privacy management',
      'Enhanced data governance'
    ],
    useCases: [
      'Healthcare organizations',
      'Financial services',
      'E-commerce businesses',
      'Educational institutions',
      'Government agencies'
    ],
    targetAudience: [
      'Privacy officers',
      'Compliance managers',
      'Data protection officers',
      'Legal teams',
      'IT security teams'
    ],
    tags: ['Data Protection', 'Privacy', 'GDPR', 'Compliance', 'Encryption'],
    estimatedDelivery: '8-12 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$5,800 - $18,000/month',
    roi: '180-300%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['AES-256', 'RSA', 'Python', 'React', 'Node.js', 'PostgreSQL'],
      integrations: ['Databases', 'Cloud storage', 'Email systems', 'File systems'],
      apiEndpoints: 80,
      uptime: '99.9%',
      security: ['SOC 2', 'ISO 27001', 'GDPR', 'CCPA', 'HIPAA']
    },
    competitors: ['OneTrust', 'TrustArc', 'BigID', 'Collibra'],
    marketSize: '$20 billion',
    demoUrl: 'https://ziontechgroup.com/demo/data-protection',
    documentationUrl: 'https://ziontechgroup.com/docs/data-protection'
  },

  // Security Operations Center (SOC)
  {
    id: 'managed-soc-services',
    title: 'Managed Security Operations Center (SOC)',
    description: '24/7 managed security operations center that provides continuous monitoring, threat detection, and incident response services.',
    category: 'Cybersecurity',
    subcategory: 'Managed Security',
    price: 12000,
    currency: '$',
    pricingModel: 'monthly',
    features: [
      '24/7 security monitoring',
      'Threat detection and analysis',
      'Incident response and remediation',
      'Security tool management',
      'Vulnerability management',
      'Compliance reporting',
      'Security awareness training',
      'Threat intelligence',
      'Forensic analysis',
      'Security assessments',
      'Monthly security reports',
      'Dedicated security team'
    ],
    benefits: [
      'Reduce security incidents by 90%',
      'Lower security operational costs',
      'Expert security team access',
      'Continuous protection',
      'Compliance assurance'
    ],
    useCases: [
      'Mid to large enterprises',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies',
      'Educational institutions'
    ],
    targetAudience: [
      'CISOs',
      'Security managers',
      'IT directors',
      'Risk managers',
      'Compliance officers'
    ],
    tags: ['Managed SOC', 'Security Monitoring', 'Incident Response', '24/7 Support', 'Compliance'],
    estimatedDelivery: '4-6 weeks',
    supportLevel: 'enterprise',
    marketPrice: '$12,000 - $50,000/month',
    roi: '200-400%',
    innovationLevel: 'Advanced',
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    technicalSpecs: {
      technology: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Threat Intelligence'],
      integrations: ['Security tools', 'Monitoring systems', 'Ticketing systems'],
      apiEndpoints: 200,
      uptime: '99.99%',
      security: ['SOC 2 Type II', 'ISO 27001', 'NIST Framework', 'Incident Response']
    },
    competitors: ['Secureworks', 'Deloitte', 'PwC', 'KPMG'],
    marketSize: '$40 billion',
    demoUrl: 'https://ziontechgroup.com/demo/managed-soc',
    documentationUrl: 'https://ziontechgroup.com/docs/managed-soc'
  }
];