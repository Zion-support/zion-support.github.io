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
    benefits: ['Competitive Advantage', 'Cost Reduction', 'Improved Efficiency'],
    useCases: [
      'Customer Service Automation',
      'Predictive Maintenance',
      'Fraud Detection',
      'Content Generation'
    ],
    technologies: [
      'TensorFlow',
      'PyTorch',
      'OpenAI GPT',
      'Hugging Face',
      'Scikit-learn',
      'Pandas',
      'NumPy'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'ai@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/ai-solutions'
  },
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services to protect your business from threats and ensure compliance with industry standards.',
    shortDescription: 'Advanced cybersecurity protection for your business',
    category: 'Cybersecurity',
    icon: 'ShieldCheckIcon',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Monitoring',
      'Incident Response',
      'Compliance Management',
      'Security Training'
    ],
    pricing: {
      basic: 3000,
      pro: 10000,
      enterprise: 30000
    },
    benefits: ['Enhanced Security', 'Compliance', 'Risk Mitigation'],
    useCases: [
      'Data Protection',
      'Network Security',
      'Compliance Auditing',
      'Security Training'
    ],
    technologies: [
      'SIEM',
      'Firewall',
      'Antivirus',
      'VPN',
      'Encryption',
      'Multi-Factor Authentication'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'security@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/cybersecurity-solutions'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your IT environment and improve operational efficiency.',
    shortDescription: 'Scalable cloud infrastructure and migration services',
    category: 'Cloud',
    icon: 'CloudIcon',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling',
      'Disaster Recovery',
      'Cost Optimization',
      'Security Management'
    ],
    pricing: {
      basic: 2000,
      pro: 8000,
      enterprise: 25000
    },
    benefits: ['Scalability', 'Cost Efficiency', 'Reliability'],
    useCases: [
      'Application Migration',
      'Data Backup',
      'Disaster Recovery',
      'Development Environments'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    contactInfo: {
      phone: '+1-302-464-0950',
      email: 'cloud@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    },
    href: '/cloud-solutions'
  }
];