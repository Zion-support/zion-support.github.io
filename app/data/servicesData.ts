export interface Service {;
  id: string;
  title: string,
        description: string;
  shortDescription: string;
<<<<<<< HEAD
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT;'"
=======
  category: 'AI' | 'IT' | 'SaaS' | 'Cybersecurity' | 'Cloud' | '5G' | 'Blockchain' | 'IoT;''";
>>>>>>> main
  icon: string;
  features: string[];};
  pricing: {};
    basic: number;};
    pro: number;};
    enterprise: number};
  benefits: string[];
  useCases: string[];
  technologies: string[];
  contactInfo: {
    phone: string;
    email: string;,
    website: string;};
  };
<<<<<<< HEAD
};";
export const services: Service[]  =  [;";";
  {";";,";
    id: 'ai-solutions',''
    title: 'AI Solutions',''
    description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business operations.',''
    shortDescription: 'Advanced AI solutions for business transformation',''
    category: 'AI',''
    icon: 'CpuChipIcon','"
    features: [";";";
      'Machine Learning Models',''
      'Natural Language Processing',''
      'Computer Vision',''
      'Predictive Analytics',''
      'AI Chatbots','";";";";
      'Automated Decision Making;'"
    ],
    pricing: {};
      basic: 5000,};
      pro: 15000,};
      enterprise: 50000;};";
    },";";
    benefits: [";";";
      'Increased Efficiency',''
      'Cost Reduction',''
      'Better Decision Making',''
      'Automated Processes',''
      'Improved Customer Experience',''
      'Competitive Advantage;'"
    ],";";
    useCases: [";";";
      'Customer Service Automation',''
      'Predictive Maintenance',''
      'Fraud Detection',''
      'Content Generation',''
      'Data Analysis',''
      'Process Optimization;'"
    ],";";
    technologies: [";";";
      'TensorFlow',''
      'PyTorch',''
      'OpenAI GPT',''
      'Hugging Face',''
      'Scikit-learn',''
      'Pandas',''
      'NumPy;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: 'ai@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/ai-solutions;'"
    },";";";
    href: '/ai-solutions;'"
  },";";
  {";";";
    id: 'cybersecurity',''
    title: 'Cybersecurity',''
    description: 'Enterprise-grade cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management to protect your digital assets.',''
    shortDescription: 'Comprehensive cybersecurity protection',''
    category: 'Cybersecurity',''
    icon: 'ShieldCheckIcon','"
    features: [";";";
      'Threat Detection',''
      'Vulnerability Assessment',''
      'Security Monitoring',''
      'Compliance Management',''
      'Incident Response',''
      'Security Training;'"
=======
}
export const services: Service[] = [
  {
    id: 'ai-solutions',''";
    title: 'AI Solutions',''";
    description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, computer vision, and predictive analytics to transform your business operations.',''";
    shortDescription: 'Advanced AI solutions for business transformation',''";
    category: 'AI',''";
    icon: 'CpuChipIcon',''";
    features: [
      'Machine Learning Models',''";
      'Natural Language Processing',''";
      'Computer Vision',''";
      'Predictive Analytics',''";
      'AI Chatbots',''";
      'Automated Decision Making;''";
    ],
    pricing: {}
      basic: 5000,}
      pro: 15000,}
      enterprise: 50000;}
    },
    benefits: [
      'Increased Efficiency',''";
      'Cost Reduction',''";
      'Better Decision Making',''";
      'Automated Processes',''";
      'Improved Customer Experience',''";
      'Competitive Advantage;''";
    ],
    useCases: [
      'Customer Service Automation',''";
      'Predictive Maintenance',''";
      'Fraud Detection',''";
      'Content Generation',''";
      'Data Analysis',''";
      'Process Optimization;''";
    ],
    technologies: [
      'TensorFlow',''";
      'PyTorch',''";
      'OpenAI GPT',''";
      'Hugging Face',''";
      'Scikit-learn',''";
      'Pandas',''";
      'NumPy;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: 'ai@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/ai-solutions;''";
    },
    href: '/ai-solutions;''";
  },
  {
    id: 'cybersecurity',''";
    title: 'Cybersecurity',''";
    description: 'Enterprise-grade cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management to protect your digital assets.',''";
    shortDescription: 'Comprehensive cybersecurity protection',''";
    category: 'Cybersecurity',''";
    icon: 'ShieldCheckIcon',''";
    features: [
      'Threat Detection',''";
      'Vulnerability Assessment',''";
      'Security Monitoring',''";
      'Compliance Management',''";
      'Incident Response',''";
      'Security Training;''";
>>>>>>> main
    ],
    pricing: {,
      basic: 3000,
      pro: 10000,
      enterprise: 30000;
<<<<<<< HEAD
    ,";
  },";";
    benefits: [";";";
      'Enhanced Security',''
      'Compliance Assurance',''
      'Risk Mitigation',''
      '24/7 Monitoring',''
      'Expert Support',''
      'Peace of Mind;'"
    ],";";
    useCases: [";";";
      'Network Security',''
      'Data Protection',''
      'Compliance Auditing',''
      'Threat Hunting',''
      'Security Awareness',''
      'Incident Management;'"
    ],";";
    technologies: [";";";
      'SIEM',''
      'EDR',''
      'XDR',''
      'SOAR',''
      'NGFW',''
      'WAF',''
      'DLP;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: 'security@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/cybersecurity;'"
    },";";";
    href: '/cybersecurity;'"
  },";";
  {";";";
    id: 'cloud-infrastructure',''
    title: 'Cloud Infrastructure',''
    description: 'Scalable cloud infrastructure solutions including cloud migration, architecture design, DevOps implementation, and cloud management services.',''
    shortDescription: 'Scalable cloud infrastructure solutions',''
    category: 'Cloud',''
    icon: 'CloudIcon','"
    features: [";";";
      'Cloud Migration',''
      'Architecture Design',''
      'DevOps Implementation',''
      'Cloud Management',''
      'Auto-scaling',''
      'Disaster Recovery;'"
=======
    ,
  },
    benefits: [
      'Enhanced Security',''";
      'Compliance Assurance',''";
      'Risk Mitigation',''";
      '24/7 Monitoring',''";
      'Expert Support',''";
      'Peace of Mind;''";
    ],
    useCases: [
      'Network Security',''";
      'Data Protection',''";
      'Compliance Auditing',''";
      'Threat Hunting',''";
      'Security Awareness',''";
      'Incident Management;''";
    ],
    technologies: [
      'SIEM',''";
      'EDR',''";
      'XDR',''";
      'SOAR',''";
      'NGFW',''";
      'WAF',''";
      'DLP;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: 'security@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/cybersecurity;''";
    },
    href: '/cybersecurity;''";
  },
  {
    id: 'cloud-infrastructure',''";
    title: 'Cloud Infrastructure',''";
    description: 'Scalable cloud infrastructure solutions including cloud migration, architecture design, DevOps implementation, and cloud management services.',''";
    shortDescription: 'Scalable cloud infrastructure solutions',''";
    category: 'Cloud',''";
    icon: 'CloudIcon',''";
    features: [
      'Cloud Migration',''";
      'Architecture Design',''";
      'DevOps Implementation',''";
      'Cloud Management',''";
      'Auto-scaling',''";
      'Disaster Recovery;''";
>>>>>>> main
    ],
    pricing: {,
      basic: 2000,
      pro: 8000,
<<<<<<< HEAD
      enterprise: 25000";
    },";";
    benefits: [";";";
      'Scalability',''
      'Cost Efficiency',''
      'High Availability',''
      'Flexibility',''
      'Global Reach',''
      'Reduced Maintenance;'"
    ],";";
    useCases: [";";";
      'Application Hosting',''
      'Data Storage',''
      'Backup Solutions',''
      'Development Environments',''
      'Production Workloads',''
      'Hybrid Cloud;'"
    ],";";
    technologies: [";";";
      'AWS',''
      'Azure',''
      'Google Cloud',''
      'Docker',''
      'Kubernetes',''
      'Terraform',''
      'Ansible;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: 'cloud@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/cloud-infrastructure;'"
    },";";";
    href: '/cloud-infrastructure;'"
  },";";
  {";";";
    id: 'digital-transformation',''
    title: 'Digital Transformation',''
    description: 'Complete digital transformation services including process automation, workflow optimization, system integration, and change management.',''
    shortDescription: 'Complete digital transformation services',''
    category: 'IT',''
    icon: 'RocketLaunchIcon','"
    features: [";";";
      'Process Automation',''
      'Workflow Optimization',''
      'System Integration',''
      'Change Management',''
      'Digital Strategy',''
      'Technology Adoption;'"
=======
      enterprise: 25000
    },
    benefits: [
      'Scalability',''";
      'Cost Efficiency',''";
      'High Availability',''";
      'Flexibility',''";
      'Global Reach',''";
      'Reduced Maintenance;''";
    ],
    useCases: [
      'Application Hosting',''";
      'Data Storage',''";
      'Backup Solutions',''";
      'Development Environments',''";
      'Production Workloads',''";
      'Hybrid Cloud;''";
    ],
    technologies: [
      'AWS',''";
      'Azure',''";
      'Google Cloud',''";
      'Docker',''";
      'Kubernetes',''";
      'Terraform',''";
      'Ansible;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: 'cloud@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/cloud-infrastructure;''";
    },
    href: '/cloud-infrastructure;''";
  },
  {
    id: 'digital-transformation',''";
    title: 'Digital Transformation',''";
    description: 'Complete digital transformation services including process automation, workflow optimization, system integration, and change management.',''";
    shortDescription: 'Complete digital transformation services',''";
    category: 'IT',''";
    icon: 'RocketLaunchIcon',''";
    features: [
      'Process Automation',''";
      'Workflow Optimization',''";
      'System Integration',''";
      'Change Management',''";
      'Digital Strategy',''";
      'Technology Adoption;''";
>>>>>>> main
    ],
    pricing: {,
      basic: 10000,
      pro: 30000,
<<<<<<< HEAD
      enterprise: 100000";
    },";";
    benefits: [";";";
      'Improved Efficiency',''
      'Better Customer Experience',''
      'Increased Agility',''
      'Cost Reduction',''
      'Competitive Advantage',''
      'Future-Ready Operations;'"
    ],";";
    useCases: [";";";
      'Process Modernization',''
      'System Integration',''
      'Workflow Automation',''
      'Digital Strategy',''
      'Change Management',''
      'Technology Adoption;'"
    ],";";
    technologies: [";";";
      'RPA',''
      'API Integration',''
      'Workflow Engines',''
      'Data Analytics',''
      'Cloud Platforms',''
      'Mobile Solutions',''
      'IoT Integration;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: 'transformation@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/digital-transformation;'"
    },";";";
    href: '/digital-transformation;'"
  },";";
  {";";";
    id: '5g-solutions',''
    title: '5G Solutions',''
    description: 'Next-generation 5G solutions including network implementation, IoT connectivity, mobile optimization, and enterprise 5G services.',''
    shortDescription: 'Next-generation 5G solutions',''
    category: '5G',''
    icon: 'SignalIcon','"
    features: [";";";
      'Network Implementation',''
      'IoT Connectivity',''
      'Mobile Optimization',''
      'Enterprise Services',''
      'Edge Computing',''
      'Network Slicing;'"
=======
      enterprise: 100000
    },
    benefits: [
      'Improved Efficiency',''";
      'Better Customer Experience',''";
      'Increased Agility',''";
      'Cost Reduction',''";
      'Competitive Advantage',''";
      'Future-Ready Operations;''";
    ],
    useCases: [
      'Process Modernization',''";
      'System Integration',''";
      'Workflow Automation',''";
      'Digital Strategy',''";
      'Change Management',''";
      'Technology Adoption;''";
    ],
    technologies: [
      'RPA',''";
      'API Integration',''";
      'Workflow Engines',''";
      'Data Analytics',''";
      'Cloud Platforms',''";
      'Mobile Solutions',''";
      'IoT Integration;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: 'transformation@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/digital-transformation;''";
    },
    href: '/digital-transformation;''";
  },
  {
    id: '5g-solutions',''";
    title: '5G Solutions',''";
    description: 'Next-generation 5G solutions including network implementation, IoT connectivity, mobile optimization, and enterprise 5G services.',''";
    shortDescription: 'Next-generation 5G solutions',''";
    category: '5G',''";
    icon: 'SignalIcon',''";
    features: [
      'Network Implementation',''";
      'IoT Connectivity',''";
      'Mobile Optimization',''";
      'Enterprise Services',''";
      'Edge Computing',''";
      'Network Slicing;''";
>>>>>>> main
    ],
    pricing: {,
      basic: 15000,
      pro: 50000,
<<<<<<< HEAD
      enterprise: 150000";
    },";";
    benefits: [";";";
      'Ultra-Fast Speeds',''
      'Low Latency',''
      'Massive Connectivity',''
      'Enhanced Mobility',''
      'Edge Computing',''
      'Future-Ready Infrastructure;'"
    ],";";
    useCases: [";";";
      'Smart Cities',''
      'Industrial IoT',''
      'Autonomous Vehicles',''
      'Remote Work',''
      'AR/VR Applications',''
      'Real-time Analytics;'"
    ],";";
    technologies: [";";";
      '5G NR',''
      'Edge Computing',''
      'Network Slicing',''
      'MEC',''
      'IoT Platforms',''
      'SDN/NFV',''
      'AI/ML;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: '5g@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/5g-solutions;'"
    },";";";
    href: '/5g-solutions;'"
  },";";
  {";";";
    id: 'micro-saas',''
    title: 'Micro SaaS Solutions',''
    description: 'Custom micro SaaS solutions including application development, API integration, subscription management, and scalable architecture design.',''
    shortDescription: 'Custom micro SaaS solutions',''
    category: 'SaaS',''
    icon: 'GlobeAltIcon','"
    features: [";";";
      'Application Development',''
      'API Integration',''
      'Subscription Management',''
      'Scalable Architecture',''
      'Multi-tenancy',''
      'Analytics Dashboard;'"
=======
      enterprise: 150000
    },
    benefits: [
      'Ultra-Fast Speeds',''";
      'Low Latency',''";
      'Massive Connectivity',''";
      'Enhanced Mobility',''";
      'Edge Computing',''";
      'Future-Ready Infrastructure;''";
    ],
    useCases: [
      'Smart Cities',''";
      'Industrial IoT',''";
      'Autonomous Vehicles',''";
      'Remote Work',''";
      'AR/VR Applications',''";
      'Real-time Analytics;''";
    ],
    technologies: [
      '5G NR',''";
      'Edge Computing',''";
      'Network Slicing',''";
      'MEC',''";
      'IoT Platforms',''";
      'SDN/NFV',''";
      'AI/ML;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: '5g@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/5g-solutions;''";
    },
    href: '/5g-solutions;''";
  },
  {
    id: 'micro-saas',''";
    title: 'Micro SaaS Solutions',''";
    description: 'Custom micro SaaS solutions including application development, API integration, subscription management, and scalable architecture design.',''";
    shortDescription: 'Custom micro SaaS solutions',''";
    category: 'SaaS',''";
    icon: 'GlobeAltIcon',''";
    features: [
      'Application Development',''";
      'API Integration',''";
      'Subscription Management',''";
      'Scalable Architecture',''";
      'Multi-tenancy',''";
      'Analytics Dashboard;''";
>>>>>>> main
    ],
    pricing: {,
      basic: 8000,
      pro: 25000,
<<<<<<< HEAD
      enterprise: 75000";
    },";";
    benefits: [";";";
      'Rapid Deployment',''
      'Scalable Architecture',''
      'Cost-Effective',''
      'Easy Maintenance',''
      'Multi-tenant Support',''
      'Revenue Generation;'"
    ],";";
    useCases: [";";";
      'Business Tools',''
      'Productivity Apps',''
      'Industry Solutions',''
      'API Services',''
      'Data Management',''
      'Automation Tools;'"
    ],";";
    technologies: [";";";
      'React',''
      'Node.js',''
      'PostgreSQL',''
      'Redis',''
      'Docker',''
      'Kubernetes',''
      'Stripe API;'"
    ],";";
    contactInfo: {";";,";
      phone: '+1-302-464-0950',''
      email: 'saas@ziontechgroup.com',''
      website: 'https://ziontechgroup.com/micro-saas-solutions;'"
    },";";";
    href: '/micro-saas-solutions;'"
  };";
];";";
export const getServicesByCategory  =  (category: Service[";";";
    'category"
  ";";";
  ]) => {'";,
  return services.filter(service => service.category === category)};";
export const getServiceById  =  (id: string) => {;";,";
  return services.find(service => service.id === id)};";";";
=======
      enterprise: 75000
    },
    benefits: [
      'Rapid Deployment',''";
      'Scalable Architecture',''";
      'Cost-Effective',''";
      'Easy Maintenance',''";
      'Multi-tenant Support',''";
      'Revenue Generation;''";
    ],
    useCases: [
      'Business Tools',''";
      'Productivity Apps',''";
      'Industry Solutions',''";
      'API Services',''";
      'Data Management',''";
      'Automation Tools;''";
    ],
    technologies: [
      'React',''";
      'Node.js',''";
      'PostgreSQL',''";
      'Redis',''";
      'Docker',''";
      'Kubernetes',''";
      'Stripe API;''";
    ],
    contactInfo: {
      phone: '+1-302-464-0950',''";
      email: 'saas@ziontechgroup.com',''";
      website: 'https://ziontechgroup.com/micro-saas-solutions;''";
    },
    href: '/micro-saas-solutions;''";
  }
];
export const: getServicesByCategory = (category: Service['category']) => {''";
  return services.filter(service => service.category === category)};
export const: getServiceById = (id: string) => {;
  return services.find(service => service.id === id)};
>>>>>>> main
