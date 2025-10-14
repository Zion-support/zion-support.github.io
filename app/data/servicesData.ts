export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT';
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business operations.',
    shortDescription: 'Advanced AI solutions for business transformation',
    category: 'AI',
    icon: 'CpuChipIcon',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Chatbots',
      'Automated Decision Making'
    ],
    pricing: {
      basic: 5000,
      pro: 15000,
      enterprise: 50000
    },
    benefits: [
      'Increased Efficiency',
      'Cost Reduction',
      'Better Decision Making',
      'Automated Processes',
      'Competitive Advantage'
    ],
    useCases: [
      'Customer Service Automation',
      'Predictive Maintenance',
      'Fraud Detection',
      'Content Generation',
      'Data Analysis'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'OpenAI GPT',
      'Computer Vision APIs',
      'Natural Language Processing'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/ai-solutions'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive cybersecurity solutions to protect your digital assets, including threat detection, vulnerability assessment, security monitoring, and incident response.',
    shortDescription: 'Complete cybersecurity protection for your business',
    category: 'Cybersecurity',
    icon: 'ShieldCheckIcon',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Monitoring',
      'Incident Response',
      'Security Training',
      'Compliance Management'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: [
      'Enhanced Security',
      'Risk Mitigation',
      'Compliance Assurance',
      'Peace of Mind',
      'Cost Savings'
    ],
    useCases: [
      'Network Security',
      'Data Protection',
      'Access Control',
      'Security Audits',
      'Incident Response'
    ],
    technologies: [
      'SIEM Systems',
      'Firewall Management',
      'Intrusion Detection',
      'Encryption',
      'Multi-Factor Authentication'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/cybersecurity'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions including cloud migration, infrastructure management, DevOps automation, and cloud security to support your business growth.',
    shortDescription: 'Scalable cloud infrastructure for modern businesses',
    category: 'Cloud',
    icon: 'CloudIcon',
    features: [
      'Cloud Migration',
      'Infrastructure Management',
      'DevOps Automation',
      'Cloud Security',
      'Scalability Solutions',
      'Cost Optimization'
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: [
      'Scalability',
      'Cost Efficiency',
      'Reliability',
      'Flexibility',
      'Global Reach'
    ],
    useCases: [
      'Application Hosting',
      'Data Storage',
      'Backup Solutions',
      'Disaster Recovery',
      'Development Environments'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/cloud-infrastructure'
  }
];