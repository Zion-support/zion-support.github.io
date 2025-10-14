  title: "string;
  description: string;
  shortDescription: string;
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | "IoT"'"'"
  icon: string;
  features: string[];
  pricing: {
    basic: number;
    pr",
    o: number;
    enterpris,
    e: number}
  benefits: "string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {phone: string;
    emai",
    l: string;
    websit,
    e: string}
  href: string;
}

export const services: Service[] = [
  {
    i,
    d: 'ai-solutions','''
    title: 'AI Solutions','''
    description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business operations.','''
    shortDescription: 'Advanced AI solutions for business transformation','''
    category: 'AI','''
    icon: 'CpuChipIcon','''
    features: [
      'Machine Learning Models','''
      'Natural Language Processing','''
      'Computer Vision','''
      'Predictive Analytics','''
      'AI Chatbots','''
      'Automated Decision Making''''
    ],
    pricing: {
      basi,
    c: 5000,
      pro: 15000,
      enterprise: 50000;
    },
    benefits: [
      'Competitive Advantage'''
    ],
    useCases: [
      'Customer Service Automation',''
      'Predictive Maintenance',''
      'Fraud Detection',''
      'Content Generation',''
    ],
    technologies: [
      'TensorFlow',''
      'PyTorch',''
      'OpenAI GPT',''
    },
    href: '/ai-solutions''''
  },
  {
    category: 'Cybersecurity',''
    icon: 'ShieldCheckIcon',''
    features: [
      'Threat Detection',''
      'Vulnerability Assessment',''
      'Security Monitoring',''
    ],
    pricing: {
      basi,
    c: 3000,
      pro: 10000,
      enterprise: 30000;
    },
    benefits: [
    ],
    useCases: [
      'Network Security',''
      'Data Protection',''
    ],
    technologies: [
      'SIEM','''
      'EDR','''
      'XDR','''
      'SOAR','''
      'NGFW','''
      'WAF','''
      'DLP''''
    ],
    contactInfo: {},
    href: '/cybersecurity''''
  },
  {
    category: 'Cloud',''
    icon: 'CloudIcon',''
    features: [
      'Cloud Migration',''
    ],
    pricing: {
      basi,
    c: 2000,
      pro: 8000,
      enterprise: 25000;
    },
    benefits: [
      'Scalability','''
      'Cost Efficiency','''
      'High Availability','''
      'Flexibility','''
      'Global Reach','''
      'Reduced Maintenance''''
    ],
    useCases: [
      'Application Hosting','''
      'Data Storage','''
      'Backup Solutions','''
      'Development Environments','''
      'Production Workloads','''
      'Hybrid Cloud''''
    ],
    technologies: [
      'AWS','''
      'Azure','''
      'Google Cloud','''
      'Docker','''
      'Kubernetes','''
      'Terraform','''
      'Ansible''''
    ],
    contactInfo: {
      phon,
    e: '+1-302-464-0950','''
      email: 'cloud@ziontechgroup.com','''
      website: 'http,
    s://ziontechgroup.com/cloud-infrastructure''''
    },
    href: '/cloud-infrastructure''''
  },
  {
    id: 'digital-transformation','''
    title: 'Digital Transformation','''
    description: 'Complete digital transformation services including process automation, workflow optimization, system integration, and change management.','''
    shortDescription: 'Complete digital transformation services','''
    category: 'IT','''
    icon: 'RocketLaunchIcon','''
    features: [
      'Process Automation','''
      'Workflow Optimization','''
      'System Integration','''
      'Change Management','''
      'Digital Strategy','''
      'Technology Adoption''''
    ],
    pricing: {
      basi,
    c: 10000,
      pro: 30000,
      enterprise: 100000;
    },
    benefits: [
      'Improved Efficiency','''
      'Better Customer Experience','''
      'Increased Agility','''
      'Cost Reduction','''
      'Competitive Advantage','''
      'Future-Ready Operations''''
    ],
    useCases: [
      'Process Modernization','''
      'System Integration','''
      'Workflow Automation','''
      'Digital Strategy','''
      'Change Management','''
      'Technology Adoption''''
    ],
    technologies: [
      'RPA','''
      'API Integration','''
      'Workflow Engines','''
      'Data Analytics','''
      'Cloud Platforms','''
      'Mobile Solutions','''
      'IoT Integration''''
    ],
    contactInfo: {
      phon,
    e: '+1-302-464-0950','''
      email: 'transformation@ziontechgroup.com','''
      website: 'http,
    s://ziontechgroup.com/digital-transformation''''
    },
    href: '/digital-transformation''''
  },
  {
    id: '5g-solutions','''
    title: '5G Solutions','''
    description: 'Next-generation 5G solutions including network implementation, IoT connectivity, mobile optimization, and enterprise 5G services.','''
    shortDescription: 'Next-generation 5G solutions','''
    category: '5G','''
    icon: 'SignalIcon','''
    features: [
      'Network Implementation','''
      'IoT Connectivity','''
      'Mobile Optimization','''
      'Enterprise Services','''
      'Edge Computing','''
      'Network Slicing''''
    ],
    pricing: {
      basi,
    c: 15000,
      pro: 50000,
      enterprise: 150000;
    },
    benefits: [
      'Ultra-Fast Speeds','''
      'Low Latency','''
      'Massive Connectivity','''
      'Enhanced Mobility','''
      'Edge Computing','''
      'Future-Ready Infrastructure''''
    ],
    useCases: [
      'Smart Cities','''
      'Industrial IoT','''
      'Autonomous Vehicles','''
      'Remote Work','''
      'AR/VR Applications','''
      'Real-time Analytics''''
    ],
    technologies: [
      '5G NR','''
      'Edge Computing','''
      'Network Slicing','''
      'MEC','''
      'IoT Platforms','''
      'SDN/NFV','''
      'AI/ML''''
    ],
    contactInfo: {
      phon,
    e: '+1-302-464-0950','''
      email: '5g@ziontechgroup.com','''
      website: 'http,
    s://ziontechgroup.com/5g-solutions''''
    },
    href: '/5g-solutions''''
  },
  {
    id: 'micro-saas','''
    title: 'Micro SaaS Solutions','''
    description: 'Custom micro SaaS solutions including application development, API integration, subscription management, and scalable architecture design.','''
    shortDescription: 'Custom micro SaaS solutions','''
    category: 'SaaS','''
    icon: 'GlobeAltIcon','''
    features: [
      'Application Development','''
      'API Integration','''
      'Subscription Management','''
      'Scalable Architecture','''
      'Multi-tenancy','''
      'Analytics Dashboard''''
    ],
    pricing: {
      basi,
    c: 8000,
      pro: 25000,
      enterprise: 75000;
    },
    benefits: [
      'Rapid Deployment','''
      'Scalable Architecture','''
      'Cost-Effective','''
      'Easy Maintenance','''
      'Multi-tenant Support','''
      'Revenue Generation''''
    ],
    useCases: [
      'Business Tools','''
      'Productivity Apps','''
      'Industry Solutions','''
      'API Services','''
      'Data Management','''
      'Automation Tools''''
    ],
    technologies: [
      'React','''
      'Node.js','''
      'PostgreSQL','''
      'Redis','''
      'Docker','''
      'Kubernetes','''
      'Stripe API''''
    ],
    contactInfo: {
      phon,
    e: '+1-302-464-0950','''
      email: 'saas@ziontechgroup.com','''
      website: 'http,
    s://ziontechgroup.com/micro-saas-solutions''''
    },
    href: '/micro-saas-solutions''''
  }
];
// servicesData - Basic implementation;
export default function servicesData() {;
  return null;
}
;
"