export interface AdvancedCybersecurityService {
  id: string;
  title: string;
  description: string;
  category: 'Threat Detection' | 'Incident Response' | 'Compliance' | 'Penetration Testing' | 'Security Training' | 'Zero Trust';
  price: number;
  currency: string;
  pricingModel: 'monthly' | 'yearly' | 'one-time' | 'incident-based';
  features: string[];
  securityLevel: 'Basic' | 'Advanced' | 'Enterprise' | 'Military Grade';
  compliance: string[];
  responseTime: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
}

export const ADVANCED_CYBERSECURITY_SERVICES: AdvancedCybersecurityService[] = [
  {
    id: 'zero-trust-security-architecture',
    title: 'Zero Trust Security Architecture Implementation',
    description: 'Complete zero trust security framework implementation including identity verification, device trust, network segmentation, and continuous monitoring.',
    category: 'Zero Trust',
    price: 15999,
    currency: 'USD',
    pricingModel: 'one-time',
    features: [
      'Identity and access management (IAM)',
      'Multi-factor authentication (MFA)',
      'Device trust verification',
      'Network micro-segmentation',
      'Continuous security monitoring',
      'Privileged access management',
      'Security policy automation',
      'Compliance reporting'
    ],
    securityLevel: 'Enterprise',
    compliance: ['SOC2', 'ISO27001', 'NIST', 'GDPR', 'HIPAA'],
    responseTime: '<5 minutes',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'advanced-threat-hunting',
    title: 'Advanced Threat Hunting & Intelligence',
    description: 'Proactive threat hunting service using advanced analytics, machine learning, and threat intelligence to identify and eliminate hidden threats.',
    category: 'Threat Detection',
    price: 3499,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      '24/7 threat monitoring',
      'Advanced behavioral analytics',
      'Threat intelligence feeds',
      'Custom hunting rules',
      'Incident investigation',
      'Threat actor profiling',
      'IOC management',
      'Real-time alerts'
    ],
    securityLevel: 'Advanced',
    compliance: ['SOC2', 'ISO27001', 'NIST'],
    responseTime: '<15 minutes',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'incident-response-platform',
    title: 'AI-Powered Incident Response Platform',
    description: 'Intelligent incident response platform that automates threat containment, investigation, and recovery processes.',
    category: 'Incident Response',
    price: 2499,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Automated threat containment',
      'AI-powered investigation',
      'Playbook automation',
      'Forensic analysis tools',
      'Recovery automation',
      'Incident timeline tracking',
      'Team collaboration tools',
      'Post-incident reporting'
    ],
    securityLevel: 'Advanced',
    compliance: ['SOC2', 'ISO27001', 'NIST'],
    responseTime: '<2 minutes',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'penetration-testing-suite',
    title: 'Comprehensive Penetration Testing Suite',
    description: 'Full-spectrum penetration testing including web applications, mobile apps, network infrastructure, and social engineering assessments.',
    category: 'Penetration Testing',
    price: 8999,
    currency: 'USD',
    pricingModel: 'one-time',
    features: [
      'Web application testing',
      'Mobile application testing',
      'Network infrastructure testing',
      'Social engineering assessment',
      'Physical security testing',
      'Wireless network testing',
      'Detailed vulnerability reports',
      'Remediation guidance'
    ],
    securityLevel: 'Enterprise',
    compliance: ['OWASP', 'NIST', 'ISO27001'],
    responseTime: '24-48 hours',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'security-awareness-training',
    title: 'AI-Enhanced Security Awareness Training',
    description: 'Interactive security training platform using AI to personalize learning paths and simulate real-world attack scenarios.',
    category: 'Security Training',
    price: 299,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Personalized learning paths',
      'Phishing simulation campaigns',
      'Interactive scenarios',
      'Progress tracking',
      'Compliance reporting',
      'Mobile learning app',
      'Gamification elements',
      'Regular assessments'
    ],
    securityLevel: 'Basic',
    compliance: ['SOC2', 'ISO27001', 'NIST'],
    responseTime: 'Immediate access',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'compliance-automation-platform',
    title: 'Automated Compliance Management Platform',
    description: 'AI-powered platform that automates compliance monitoring, reporting, and audit preparation for major security frameworks.',
    category: 'Compliance',
    price: 1899,
    currency: 'USD',
    pricingModel: 'monthly',
    features: [
      'Automated compliance monitoring',
      'Real-time policy enforcement',
      'Audit preparation automation',
      'Compliance reporting',
      'Policy management',
      'Risk assessment tools',
      'Integration with security tools',
      'Expert consultation'
    ],
    securityLevel: 'Advanced',
    compliance: ['SOC2', 'ISO27001', 'NIST', 'GDPR', 'HIPAA', 'PCI-DSS'],
    responseTime: '<1 hour',
    contactInfo: {
      mobile: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008 Middletown DE 19709',
      website: 'https://ziontechgroup.com'
    }
  }
];