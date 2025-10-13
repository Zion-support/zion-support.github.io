export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'it' | 'micro-saas' | 'cybersecurity' | 'cloud' | '5g' | 'blockchain' | 'iot';
  icon: string;
  features: string[];
  benefits: string[];
  pricing: {
    starting: string;
    enterprise: string;
    custom: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  href: string;
  color: string;
  isPopular?: boolean;
  isNew?: boolean;
  marketPrice: string;
  implementationTime: string;
  supportLevel: string;
}

export const servicesData: Service[] = [
  // AI Services
  {
    id: 'ai-chatbot-enterprise',
    title: 'AI Enterprise Chatbot Suite',
    description: 'Advanced conversational AI platform with natural language processing, sentiment analysis, and multi-channel support for enterprise customer service.',
    category: 'ai',
    icon: 'ChatBubbleLeftRightIcon',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support (50+ languages)',
      'Sentiment Analysis & Emotion Detection',
      'Integration with CRM/ERP Systems',
      'Voice & Text Support',
      'Analytics & Performance Dashboard',
      'Custom Training on Your Data',
      'API Integration & Webhooks'
    ],
    benefits: [
      '80% reduction in response time',
      '24/7 customer support availability',
      '60% cost savings on support staff',
      '95% customer satisfaction rate',
      'Real-time analytics and insights'
    ],
    pricing: {
      starting: '$2,500/month',
      enterprise: '$8,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-chatbot-enterprise'
    },
    href: '/ai-chatbot-enterprise',
    color: 'from-purple-500 to-pink-500',
    isPopular: true,
    marketPrice: '$3,000-$10,000/month',
    implementationTime: '2-4 weeks',
    supportLevel: '24/7 Premium Support'
  },
  {
    id: 'ai-content-generation-pro',
    title: 'AI Content Generation Pro',
    description: 'Comprehensive AI-powered content creation platform for blogs, social media, marketing materials, and technical documentation with SEO optimization.',
    category: 'ai',
    icon: 'DocumentTextIcon',
    features: [
      'Automated Blog Post Generation',
      'Social Media Content Creation',
      'SEO-Optimized Content',
      'Multi-language Content Generation',
      'Brand Voice Consistency',
      'Plagiarism Detection',
      'Content Performance Analytics',
      'Team Collaboration Tools'
    ],
    benefits: [
      '90% time savings on content creation',
      '300% increase in content output',
      '40% improvement in SEO rankings',
      'Consistent brand voice across all content',
      'Automated content scheduling'
    ],
    pricing: {
      starting: '$800/month',
      enterprise: '$2,500/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-content-generation-pro'
    },
    href: '/ai-content-generation-pro',
    color: 'from-blue-500 to-indigo-500',
    marketPrice: '$1,200-$3,500/month',
    implementationTime: '1-2 weeks',
    supportLevel: 'Business Hours Support'
  },
  {
    id: 'ai-data-analytics-pro',
    title: 'AI Data Analytics Pro',
    description: 'Advanced AI-powered business intelligence platform with predictive analytics, real-time dashboards, and automated reporting for data-driven decisions.',
    category: 'ai',
    icon: 'ChartBarIcon',
    features: [
      'Real-time Data Processing',
      'Predictive Analytics & Forecasting',
      'Custom Dashboard Creation',
      'Automated Report Generation',
      'Data Visualization Tools',
      'Machine Learning Models',
      'API Integration',
      'Mobile App Access'
    ],
    benefits: [
      '50% faster decision making',
      '85% improvement in forecast accuracy',
      'Real-time business insights',
      'Automated report generation',
      'Customizable dashboards'
    ],
    pricing: {
      starting: '$1,500/month',
      enterprise: '$5,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/ai-data-analytics-pro'
    },
    href: '/ai-data-analytics-pro',
    color: 'from-emerald-500 to-teal-500',
    marketPrice: '$2,000-$6,000/month',
    implementationTime: '3-6 weeks',
    supportLevel: '24/7 Premium Support'
  },

  // Micro SaaS Services
  {
    id: 'project-management-saas',
    title: 'Project Management SaaS',
    description: 'Comprehensive project management platform with task tracking, team collaboration, time management, and resource allocation tools.',
    category: 'micro-saas',
    icon: 'ClipboardDocumentListIcon',
    features: [
      'Task & Project Tracking',
      'Team Collaboration Tools',
      'Time Tracking & Reporting',
      'Resource Management',
      'Gantt Charts & Timelines',
      'File Sharing & Storage',
      'Mobile App Access',
      'Integration with Popular Tools'
    ],
    benefits: [
      '40% increase in team productivity',
      '30% reduction in project delays',
      'Centralized project visibility',
      'Improved team collaboration',
      'Automated reporting and analytics'
    ],
    pricing: {
      starting: '$500/month',
      enterprise: '$1,500/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/project-management-saas'
    },
    href: '/project-management-saas',
    color: 'from-green-500 to-emerald-500',
    isPopular: true,
    marketPrice: '$800-$2,500/month',
    implementationTime: '2-3 weeks',
    supportLevel: 'Business Hours Support'
  },
  {
    id: 'crm-saas-platform',
    title: 'CRM SaaS Platform',
    description: 'Customer relationship management platform with lead tracking, sales pipeline management, customer communication, and analytics.',
    category: 'micro-saas',
    icon: 'UsersIcon',
    features: [
      'Lead & Contact Management',
      'Sales Pipeline Tracking',
      'Email Marketing Integration',
      'Customer Communication History',
      'Sales Analytics & Reporting',
      'Mobile CRM Access',
      'API Integration',
      'Custom Field Configuration'
    ],
    benefits: [
      '35% increase in sales conversion',
      '50% improvement in lead management',
      'Centralized customer data',
      'Automated follow-up processes',
      'Real-time sales analytics'
    ],
    pricing: {
      starting: '$600/month',
      enterprise: '$2,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/crm-saas-platform'
    },
    href: '/crm-saas-platform',
    color: 'from-orange-500 to-red-500',
    marketPrice: '$1,000-$3,000/month',
    implementationTime: '3-4 weeks',
    supportLevel: 'Business Hours Support'
  },
  {
    id: 'inventory-management-saas',
    title: 'Inventory Management SaaS',
    description: 'Advanced inventory management system with real-time tracking, automated reordering, barcode scanning, and multi-location support.',
    category: 'micro-saas',
    icon: 'ArchiveBoxIcon',
    features: [
      'Real-time Inventory Tracking',
      'Automated Reorder Points',
      'Barcode & QR Code Scanning',
      'Multi-location Management',
      'Supplier Management',
      'Inventory Analytics',
      'Mobile App Access',
      'Integration with POS Systems'
    ],
    benefits: [
      '60% reduction in stockouts',
      '40% decrease in excess inventory',
      'Real-time inventory visibility',
      'Automated reorder processes',
      'Multi-location inventory control'
    ],
    pricing: {
      starting: '$400/month',
      enterprise: '$1,200/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/inventory-management-saas'
    },
    href: '/inventory-management-saas',
    color: 'from-yellow-500 to-orange-500',
    marketPrice: '$600-$1,800/month',
    implementationTime: '2-3 weeks',
    supportLevel: 'Business Hours Support'
  },

  // IT Services
  {
    id: 'cloud-infrastructure-management',
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure services including migration, optimization, security, and 24/7 monitoring for AWS, Azure, and Google Cloud.',
    category: 'cloud',
    icon: 'CloudIcon',
    features: [
      'Cloud Migration Services',
      'Infrastructure as Code (IaC)',
      'Auto-scaling & Load Balancing',
      'Disaster Recovery Planning',
      'Cost Optimization',
      'Security Hardening',
      '24/7 Monitoring & Support',
      'Multi-cloud Strategy'
    ],
    benefits: [
      '50% reduction in cloud costs',
      '99.99% uptime guarantee',
      'Automated scaling capabilities',
      'Enhanced security posture',
      'Reduced operational overhead'
    ],
    pricing: {
      starting: '$1,200/month',
      enterprise: '$4,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cloud-infrastructure-management'
    },
    href: '/cloud-infrastructure-management',
    color: 'from-cyan-500 to-blue-500',
    isPopular: true,
    marketPrice: '$1,500-$5,000/month',
    implementationTime: '4-8 weeks',
    supportLevel: '24/7 Premium Support'
  },
  {
    id: 'cybersecurity-suite-pro',
    title: 'Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution with threat detection, vulnerability assessment, compliance monitoring, and incident response.',
    category: 'cybersecurity',
    icon: 'ShieldCheckIcon',
    features: [
      'AI-Powered Threat Detection',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Awareness Training',
      'Compliance Monitoring (SOC 2, GDPR)',
      'Incident Response Planning',
      '24/7 Security Monitoring',
      'Security Analytics Dashboard'
    ],
    benefits: [
      '99.9% threat detection accuracy',
      'Zero breach guarantee',
      'SOC 2 compliance ready',
      'Proactive threat prevention',
      'Reduced security incidents by 90%'
    ],
    pricing: {
      starting: '$2,800/month',
      enterprise: '$8,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/cybersecurity-suite-pro'
    },
    href: '/cybersecurity-suite-pro',
    color: 'from-red-500 to-orange-500',
    isPopular: true,
    marketPrice: '$3,500-$10,000/month',
    implementationTime: '6-8 weeks',
    supportLevel: '24/7 Premium Support'
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation services to modernize business processes, implement new technologies, and enhance customer experiences.',
    category: 'it',
    icon: 'CogIcon',
    features: [
      'Digital Strategy Development',
      'Process Automation',
      'Legacy System Modernization',
      'Change Management',
      'Technology Integration',
      'Performance Optimization',
      'Training & Support',
      'ROI Measurement'
    ],
    benefits: [
      '300% increase in ROI',
      '80% improvement in process efficiency',
      'Digital-first business model',
      'Enhanced customer experience',
      'Competitive advantage'
    ],
    pricing: {
      starting: '$3,000/month',
      enterprise: '$10,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/digital-transformation-consulting'
    },
    href: '/digital-transformation-consulting',
    color: 'from-purple-500 to-indigo-500',
    marketPrice: '$4,000-$15,000/month',
    implementationTime: '8-12 weeks',
    supportLevel: 'Dedicated Project Manager'
  },

  // 5G Solutions
  {
    id: '5g-network-implementation',
    title: '5G Network Implementation',
    description: 'Complete 5G network deployment services including planning, infrastructure setup, optimization, and IoT integration for ultra-low latency applications.',
    category: '5g',
    icon: 'SignalIcon',
    features: [
      '5G Network Planning & Design',
      'Infrastructure Deployment',
      'IoT Device Integration',
      'Edge Computing Setup',
      'Network Optimization',
      'Performance Monitoring',
      'Security Implementation',
      'Training & Support'
    ],
    benefits: [
      'Ultra-low latency (1ms)',
      'Massive IoT device support',
      'Enhanced mobile broadband',
      'Real-time applications support',
      'Future-proof infrastructure'
    ],
    pricing: {
      starting: '$4,000/month',
      enterprise: '$15,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/5g-network-implementation'
    },
    href: '/5g-network-implementation',
    color: 'from-indigo-500 to-purple-500',
    isNew: true,
    marketPrice: '$5,000-$20,000/month',
    implementationTime: '12-16 weeks',
    supportLevel: '24/7 Premium Support'
  },

  // Blockchain Solutions
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Solution',
    description: 'Transparent and secure supply chain management using blockchain technology for tracking, verification, and compliance across the entire supply chain.',
    category: 'blockchain',
    icon: 'LinkIcon',
    features: [
      'Supply Chain Tracking',
      'Smart Contract Implementation',
      'Product Authentication',
      'Compliance Monitoring',
      'Supplier Verification',
      'Real-time Transparency',
      'API Integration',
      'Analytics Dashboard'
    ],
    benefits: [
      '100% supply chain transparency',
      'Reduced fraud and counterfeiting',
      'Automated compliance checking',
      'Enhanced trust and credibility',
      'Real-time tracking capabilities'
    ],
    pricing: {
      starting: '$2,200/month',
      enterprise: '$7,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/blockchain-supply-chain'
    },
    href: '/blockchain-supply-chain',
    color: 'from-orange-500 to-red-500',
    marketPrice: '$3,000-$10,000/month',
    implementationTime: '8-12 weeks',
    supportLevel: 'Business Hours Support'
  },

  // IoT Solutions
  {
    id: 'iot-smart-building',
    title: 'IoT Smart Building Solution',
    description: 'Comprehensive IoT solution for smart buildings with energy management, security monitoring, predictive maintenance, and automated controls.',
    category: 'iot',
    icon: 'BuildingOfficeIcon',
    features: [
      'Energy Management System',
      'Security & Access Control',
      'Predictive Maintenance',
      'Environmental Monitoring',
      'Automated Controls',
      'Real-time Analytics',
      'Mobile App Control',
      'Integration with Building Systems'
    ],
    benefits: [
      '30% reduction in energy costs',
      '50% decrease in maintenance costs',
      'Enhanced building security',
      'Improved occupant comfort',
      'Predictive maintenance capabilities'
    ],
    pricing: {
      starting: '$1,800/month',
      enterprise: '$5,000/month',
      custom: 'Contact for pricing'
    },
    contact: {
      phone: '+1-302-464-0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com/iot-smart-building'
    },
    href: '/iot-smart-building',
    color: 'from-violet-500 to-purple-500',
    marketPrice: '$2,500-$7,000/month',
    implementationTime: '6-10 weeks',
    supportLevel: '24/7 Premium Support'
  }
];

export const getServicesByCategory = (category: string) => {
  return servicesData.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return servicesData.filter(service => service.isPopular);
};

export const getNewServices = () => {
  return servicesData.filter(service => service.isNew);
};