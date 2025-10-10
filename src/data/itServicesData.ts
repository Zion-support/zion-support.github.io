export interface ITService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: string;
  popular?: boolean;
  comingSoon?: boolean;
  marketPrice?: string;
  technologies?: string[];
  contactInfo?: string;
  link: string;
  benefits: string[];
  capabilities: string[];
  roi: string;
  trial: string;
  timeline: string;
  rating?: number;
  users?: string;
}

export interface ITServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  services: ITService[];
}

export const itServices: ITService[] = [
  // Cloud Infrastructure & Migration
  {
    id: 'cloud-migration-setup',
    name: 'Cloud Migration & Setup',
    description: 'Seamless migration to AWS, Azure, or GCP with zero downtime, optimized performance, and comprehensive security implementation.',
    features: [
      'Multi-cloud Strategy',
      'Hybrid Cloud Solutions',
      'Cost Optimization',
      'Security Implementation',
      'Performance Tuning',
      'Disaster Recovery',
      'Monitoring Setup',
      'Training & Support'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 10000 },
    category: 'Cloud Infrastructure',
    icon: '☁️',
    popular: true,
    link: 'https://ziontechgroup.com/cloud-migration',
    benefits: ['Reduce infrastructure costs by 40%', 'Improve performance by 60%', 'Achieve 99.9% uptime'],
    capabilities: ['Migrate 1000+ servers', 'Support all major cloud providers', 'Zero-downtime migration'],
    roi: '200-400% ROI',
    trial: 'Free consultation',
    timeline: '2-8 weeks',
    marketPrice: '$15,000-50,000',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '200+'
  },
  {
    id: 'it-infrastructure-design',
    name: 'IT Infrastructure Design',
    description: 'Scalable and secure infrastructure architecture tailored to your business needs with comprehensive planning and implementation.',
    features: [
      'Network Design',
      'Server Configuration',
      'Load Balancing',
      'Disaster Recovery',
      'Scalability Planning',
      'Security Architecture',
      'Performance Optimization',
      'Documentation'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 15000 },
    category: 'Infrastructure Design',
    icon: '🏗️',
    popular: true,
    link: 'https://ziontechgroup.com/it-infrastructure',
    benefits: ['Design scalable architecture', 'Ensure 99.9% uptime', 'Reduce maintenance costs by 50%'],
    capabilities: ['Design for 1M+ users', 'Support global deployment', 'Handle 10TB+ data'],
    roi: '300-600% ROI',
    trial: 'Free assessment',
    timeline: '3-6 weeks',
    marketPrice: '$20,000-80,000',
    technologies: ['Network Design', 'Server Architecture', 'Load Balancing', 'Security'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '150+'
  },
  {
    id: 'database-management-optimization',
    name: 'Database Management & Optimization',
    description: 'Comprehensive database administration with performance tuning, security hardening, and automated backup solutions.',
    features: [
      'Performance Tuning',
      'Backup & Recovery',
      'Security Hardening',
      'Monitoring',
      'Scalability',
      'Data Migration',
      'Query Optimization',
      '24/7 Support'
    ],
    pricing: { monthly: 5000, yearly: 50000, setup: 2000 },
    category: 'Database Services',
    icon: '🗄️',
    popular: false,
    link: 'https://ziontechgroup.com/database-management',
    benefits: ['Improve query performance by 80%', 'Reduce downtime by 90%', 'Optimize storage by 40%'],
    capabilities: ['Manage 100+ databases', 'Process 1B+ queries daily', 'Support 20+ database types'],
    roi: '250-500% ROI',
    trial: 'Free health check',
    timeline: 'Ongoing',
    marketPrice: '$8,000-25,000/month',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '300+'
  },
  {
    id: 'cloud-cost-optimization',
    name: 'Cloud Cost Optimization',
    description: 'Reduce cloud costs by up to 40% with intelligent resource management, optimization, and automated scaling solutions.',
    features: [
      'Cost Analysis',
      'Resource Optimization',
      'Auto-scaling',
      'Reserved Instances',
      'Cost Monitoring',
      'Budget Alerts',
      'Usage Analytics',
      'Optimization Reports'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 3000 },
    category: 'Cloud Optimization',
    icon: '💰',
    popular: false,
    link: 'https://ziontechgroup.com/cloud-optimization',
    benefits: ['Reduce cloud costs by 40%', 'Optimize resource utilization', 'Save $50,000+ annually'],
    capabilities: ['Analyze 1000+ resources', 'Optimize 50+ services', 'Monitor 24/7'],
    roi: '400-800% ROI',
    trial: 'Free audit',
    timeline: '2-4 weeks',
    marketPrice: '$5,000-15,000',
    technologies: ['Cloud Cost Management', 'Resource Optimization', 'Auto-scaling', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '250+'
  },

  // Cybersecurity & Compliance
  {
    id: 'enterprise-cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    description: 'Comprehensive security solutions with 24/7 monitoring, threat detection, and incident response for maximum protection.',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Monitoring',
      'Incident Response',
      'Penetration Testing',
      'Security Training',
      'Compliance Management',
      '24/7 SOC'
    ],
    pricing: { monthly: 8000, yearly: 80000, setup: 5000 },
    category: 'Cybersecurity',
    icon: '🛡️',
    popular: true,
    link: 'https://ziontechgroup.com/cybersecurity',
    benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 95%', 'Ensure compliance'],
    capabilities: ['Monitor 10,000+ endpoints', 'Detect threats in real-time', 'Respond to incidents in minutes'],
    roi: '300-600% ROI',
    trial: 'Free security audit',
    timeline: '2-4 weeks',
    marketPrice: '$12,000-50,000/month',
    technologies: ['SIEM', 'EDR', 'Firewall', 'Antivirus', 'Threat Intelligence'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '400+'
  },
  {
    id: 'compliance-management-platform',
    name: 'Compliance Management Platform',
    description: 'Ensure compliance with GDPR, HIPAA, SOX, and other industry regulations with automated monitoring and reporting.',
    features: [
      'GDPR Compliance',
      'HIPAA Compliance',
      'SOX Compliance',
      'Audit Support',
      'Policy Management',
      'Risk Assessment',
      'Training Programs',
      'Reporting Dashboard'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 12000 },
    category: 'Compliance',
    icon: '📋',
    popular: true,
    link: 'https://ziontechgroup.com/compliance-management',
    benefits: ['Ensure 100% compliance', 'Reduce audit time by 70%', 'Avoid costly penalties'],
    capabilities: ['Support 20+ regulations', 'Automate compliance checks', 'Generate audit reports'],
    roi: '400-800% ROI',
    trial: 'Free compliance check',
    timeline: '4-8 weeks',
    marketPrice: '$15,000-60,000',
    technologies: ['Compliance Management', 'Risk Assessment', 'Audit Tools', 'Policy Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '200+'
  },
  {
    id: 'security-awareness-training',
    name: 'Security Awareness Training',
    description: 'Comprehensive employee security training with phishing simulation, assessment, and certification programs.',
    features: [
      'Phishing Simulation',
      'Security Workshops',
      'Policy Development',
      'Assessment',
      'Certification',
      'Progress Tracking',
      'Custom Content',
      'Reporting'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 3000 },
    category: 'Security Training',
    icon: '🎓',
    popular: false,
    link: 'https://ziontechgroup.com/security-training',
    benefits: ['Reduce human error by 80%', 'Improve security awareness', 'Prevent data breaches'],
    capabilities: ['Train 10,000+ employees', 'Simulate 100+ attack types', 'Track progress in real-time'],
    roi: '200-400% ROI',
    trial: 'Free training session',
    timeline: '1-2 weeks',
    marketPrice: '$5,000-20,000',
    technologies: ['Training Platform', 'Phishing Simulation', 'Assessment Tools', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '500+'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model with identity verification, micro-segmentation, and continuous monitoring.',
    features: [
      'Identity Verification',
      'Micro-segmentation',
      'Device Management',
      'Access Control',
      'Continuous Monitoring',
      'Policy Enforcement',
      'Risk Assessment',
      'Incident Response'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 15000 },
    category: 'Zero Trust',
    icon: '🔐',
    popular: false,
    link: 'https://ziontechgroup.com/zero-trust',
    benefits: ['Eliminate security perimeters', 'Prevent lateral movement', 'Ensure continuous verification'],
    capabilities: ['Implement across 1000+ devices', 'Monitor 24/7', 'Enforce policies automatically'],
    roi: '500-1000% ROI',
    trial: 'Free assessment',
    timeline: '6-12 weeks',
    marketPrice: '$25,000-100,000',
    technologies: ['Zero Trust', 'Identity Management', 'Network Segmentation', 'Monitoring'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '100+'
  },

  // IT Support & Management
  {
    id: '24-7-it-support-monitoring',
    name: '24/7 IT Support & Monitoring',
    description: 'Round-the-clock technical support with proactive monitoring, maintenance, and emergency response for maximum uptime.',
    features: [
      'Help Desk Support',
      'Remote Monitoring',
      'Proactive Maintenance',
      'Emergency Response',
      'SLA Guarantee',
      'Performance Monitoring',
      'Incident Management',
      'Knowledge Base'
    ],
    pricing: { monthly: 2000, yearly: 20000, setup: 1000 },
    category: 'IT Support',
    icon: '🛠️',
    popular: true,
    link: 'https://ziontechgroup.com/it-support',
    benefits: ['Achieve 99.9% uptime', 'Reduce response time by 80%', 'Prevent 90% of issues'],
    capabilities: ['Support 1000+ users', 'Monitor 500+ systems', 'Respond in 15 minutes'],
    roi: '200-400% ROI',
    trial: 'Free trial month',
    timeline: 'Immediate',
    marketPrice: '$3,000-10,000/month',
    technologies: ['Help Desk', 'Monitoring Tools', 'Remote Access', 'Ticketing System'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '600+'
  },
  {
    id: 'system-administration-services',
    name: 'System Administration Services',
    description: 'Complete system administration with user management, performance optimization, and automated maintenance.',
    features: [
      'User Management',
      'System Updates',
      'Performance Monitoring',
      'Backup Management',
      'Patch Management',
      'Security Hardening',
      'Capacity Planning',
      'Documentation'
    ],
    pricing: { monthly: 4000, yearly: 40000, setup: 2000 },
    category: 'System Administration',
    icon: '⚙️',
    popular: true,
    link: 'https://ziontechgroup.com/system-administration',
    benefits: ['Optimize system performance', 'Reduce maintenance time by 70%', 'Ensure security compliance'],
    capabilities: ['Manage 500+ servers', 'Support 20+ operating systems', 'Automate 80% of tasks'],
    roi: '300-600% ROI',
    trial: 'Free assessment',
    timeline: 'Ongoing',
    marketPrice: '$6,000-20,000/month',
    technologies: ['System Administration', 'Automation', 'Monitoring', 'Security'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '400+'
  },
  {
    id: 'it-strategic-consulting',
    name: 'IT Strategic Consulting',
    description: 'Strategic IT planning and technology consulting for digital transformation and business alignment.',
    features: [
      'Technology Assessment',
      'Strategic Planning',
      'Vendor Management',
      'Budget Planning',
      'Digital Transformation',
      'Technology Roadmap',
      'Risk Assessment',
      'Implementation Support'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 200 },
    category: 'IT Consulting',
    icon: '💼',
    popular: false,
    link: 'https://ziontechgroup.com/it-consulting',
    benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan digital transformation'],
    capabilities: ['Assess 100+ technologies', 'Plan 5-year roadmaps', 'Manage 50+ vendors'],
    roi: '500-1000% ROI',
    trial: 'Free consultation',
    timeline: 'As needed',
    marketPrice: '$200-500/hour',
    technologies: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Vendor Management'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '150+'
  },
  {
    id: 'it-asset-management',
    name: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and automated reporting.',
    features: [
      'Asset Tracking',
      'Lifecycle Management',
      'License Management',
      'Cost Optimization',
      'Disposal Services',
      'Compliance Reporting',
      'Vendor Management',
      'Analytics Dashboard'
    ],
    pricing: { monthly: 1500, yearly: 15000, setup: 1000 },
    category: 'Asset Management',
    icon: '📦',
    popular: false,
    link: 'https://ziontechgroup.com/asset-management',
    benefits: ['Reduce asset costs by 30%', 'Ensure license compliance', 'Optimize asset utilization'],
    capabilities: ['Track 10,000+ assets', 'Manage 100+ vendors', 'Automate 90% of processes'],
    roi: '150-300% ROI',
    trial: 'Free inventory',
    timeline: '2-4 weeks',
    marketPrice: '$2,000-8,000/month',
    technologies: ['Asset Management', 'License Management', 'Inventory Tracking', 'Analytics'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '300+'
  },

  // Software Development & Integration
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    description: 'Tailored software solutions built with modern technologies, best practices, and comprehensive testing.',
    features: [
      'Web Applications',
      'Mobile Apps',
      'API Development',
      'Integration Services',
      'Quality Assurance',
      'Performance Optimization',
      'Security Implementation',
      'Maintenance & Support'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 15000 },
    category: 'Software Development',
    icon: '💻',
    popular: true,
    link: 'https://ziontechgroup.com/custom-development',
    benefits: ['Build custom solutions', 'Integrate with existing systems', 'Ensure scalability and security'],
    capabilities: ['Develop 50+ applications', 'Support 10+ technologies', 'Deliver in 6-12 weeks'],
    roi: '300-800% ROI',
    trial: 'Free consultation',
    timeline: '6-12 weeks',
    marketPrice: '$20,000-200,000',
    technologies: ['React', 'Node.js', 'Python', 'Java', 'Cloud Platforms'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '250+'
  },
  {
    id: 'system-integration-apis',
    name: 'System Integration & APIs',
    description: 'Connect and integrate disparate systems with robust API development, management, and automated workflows.',
    features: [
      'API Integration',
      'Data Migration',
      'Workflow Automation',
      'Legacy System Modernization',
      'API Management',
      'Real-time Sync',
      'Error Handling',
      'Monitoring & Analytics'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 8000 },
    category: 'System Integration',
    icon: '🔗',
    popular: true,
    link: 'https://ziontechgroup.com/system-integration',
    benefits: ['Connect 100+ systems', 'Automate data flows', 'Reduce manual work by 80%'],
    capabilities: ['Integrate 50+ APIs', 'Process 1M+ records daily', 'Ensure 99.9% uptime'],
    roi: '400-800% ROI',
    trial: 'Free integration assessment',
    timeline: '3-8 weeks',
    marketPrice: '$10,000-50,000',
    technologies: ['API Development', 'Data Integration', 'Workflow Automation', 'Legacy Modernization'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '200+'
  },
  {
    id: 'devops-cicd-implementation',
    name: 'DevOps & CI/CD Implementation',
    description: 'Streamline development and deployment with automated testing, continuous integration, and infrastructure as code.',
    features: [
      'Automated Testing',
      'Continuous Integration',
      'Deployment Automation',
      'Monitoring',
      'Infrastructure as Code',
      'Container Orchestration',
      'Security Scanning',
      'Performance Optimization'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 6000 },
    category: 'DevOps',
    icon: '🚀',
    popular: true,
    link: 'https://ziontechgroup.com/devops-cicd',
    benefits: ['Deploy 10x faster', 'Reduce errors by 90%', 'Improve team productivity'],
    capabilities: ['Automate 100+ processes', 'Deploy to 20+ environments', 'Monitor 24/7'],
    roi: '500-1000% ROI',
    trial: 'Free DevOps audit',
    timeline: '2-6 weeks',
    marketPrice: '$8,000-40,000',
    technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'AWS/Azure'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.9,
    users: '300+'
  },
  {
    id: 'legacy-system-modernization',
    name: 'Legacy System Modernization',
    description: 'Modernize legacy systems with cloud migration, technology updates, and seamless data migration.',
    features: [
      'Legacy Assessment',
      'Cloud Migration',
      'Technology Updates',
      'Data Migration',
      'User Training',
      'Performance Optimization',
      'Security Enhancement',
      'Ongoing Support'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 20000 },
    category: 'Legacy Modernization',
    icon: '🔄',
    popular: false,
    link: 'https://ziontechgroup.com/legacy-modernization',
    benefits: ['Modernize outdated systems', 'Improve performance by 200%', 'Reduce maintenance costs'],
    capabilities: ['Migrate 100+ legacy systems', 'Support 20+ technologies', 'Ensure zero data loss'],
    roi: '400-1000% ROI',
    trial: 'Free modernization plan',
    timeline: '8-16 weeks',
    marketPrice: '$30,000-200,000',
    technologies: ['Legacy Modernization', 'Cloud Migration', 'Data Migration', 'Technology Updates'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '100+'
  },

  // Network & Infrastructure
  {
    id: 'network-design-implementation',
    name: 'Network Design & Implementation',
    description: 'Secure and scalable network infrastructure with wireless and wired solutions for optimal performance.',
    features: [
      'Network Design',
      'Wireless Solutions',
      'Security Implementation',
      'Performance Optimization',
      'Monitoring',
      'Disaster Recovery',
      'Load Balancing',
      'Documentation'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 12000 },
    category: 'Network Services',
    icon: '🌐',
    popular: true,
    link: 'https://ziontechgroup.com/network-design',
    benefits: ['Design scalable networks', 'Ensure 99.9% uptime', 'Optimize performance'],
    capabilities: ['Design for 10,000+ users', 'Support global deployment', 'Handle 100Gbps+ traffic'],
    roi: '300-600% ROI',
    trial: 'Free network assessment',
    timeline: '3-6 weeks',
    marketPrice: '$15,000-80,000',
    technologies: ['Network Design', 'Wireless', 'Security', 'Load Balancing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.8,
    users: '200+'
  },
  {
    id: 'disaster-recovery-backup',
    name: 'Disaster Recovery & Backup',
    description: 'Comprehensive disaster recovery solutions with automated backup, recovery testing, and business continuity planning.',
    features: [
      'Backup Solutions',
      'Disaster Recovery',
      'Business Continuity',
      'Testing',
      'Documentation',
      'Monitoring',
      'Recovery Planning',
      'Training'
    ],
    pricing: { monthly: 0, yearly: 0, setup: 5000 },
    category: 'Disaster Recovery',
    icon: '🔄',
    popular: false,
    link: 'https://ziontechgroup.com/disaster-recovery',
    benefits: ['Ensure business continuity', 'Recover in minutes', 'Prevent data loss'],
    capabilities: ['Backup 100TB+ data', 'Recover in 15 minutes', 'Test monthly'],
    roi: '500-1000% ROI',
    trial: 'Free DR assessment',
    timeline: '2-4 weeks',
    marketPrice: '$8,000-30,000',
    technologies: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Testing'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.7,
    users: '150+'
  },
  {
    id: 'it-performance-monitoring',
    name: 'IT Performance Monitoring',
    description: 'Real-time monitoring and alerting for IT infrastructure and applications with comprehensive analytics.',
    features: [
      'Real-time Monitoring',
      'Performance Metrics',
      'Alerting',
      'Reporting',
      'Capacity Planning',
      'Trend Analysis',
      'Custom Dashboards',
      'API Integrations'
    ],
    pricing: { monthly: 3000, yearly: 30000, setup: 1500 },
    category: 'Performance Monitoring',
    icon: '📊',
    popular: false,
    link: 'https://ziontechgroup.com/performance-monitoring',
    benefits: ['Monitor 1000+ metrics', 'Prevent 90% of issues', 'Optimize performance'],
    capabilities: ['Monitor 500+ systems', 'Process 1M+ events daily', 'Alert in real-time'],
    roi: '300-600% ROI',
    trial: 'Free monitoring setup',
    timeline: '1-2 weeks',
    marketPrice: '$5,000-20,000/month',
    technologies: ['Monitoring Tools', 'Analytics', 'Alerting', 'Dashboards'],
    contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    rating: 4.6,
    users: '250+'
  }
];

export const itServiceCategories: ITServiceCategory[] = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure & Migration',
    description: 'Comprehensive cloud solutions and migration services',
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    services: itServices.filter(s => ['Cloud Infrastructure', 'Infrastructure Design', 'Database Services', 'Cloud Optimization'].includes(s.category))
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions and compliance management',
    icon: '🛡️',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    services: itServices.filter(s => ['Cybersecurity', 'Compliance', 'Security Training', 'Zero Trust'].includes(s.category))
  },
  {
    id: 'it-support',
    name: 'IT Support & Management',
    description: 'Comprehensive IT support and system administration',
    icon: '🛠️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    services: itServices.filter(s => ['IT Support', 'System Administration', 'IT Consulting', 'Asset Management'].includes(s.category))
  },
  {
    id: 'software-development',
    name: 'Software Development & Integration',
    description: 'Custom software development and system integration',
    icon: '💻',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    services: itServices.filter(s => ['Software Development', 'System Integration', 'DevOps', 'Legacy Modernization'].includes(s.category))
  },
  {
    id: 'network-infrastructure',
    name: 'Network & Infrastructure',
    description: 'Network design, monitoring, and disaster recovery',
    icon: '🌐',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    services: itServices.filter(s => ['Network Services', 'Disaster Recovery', 'Performance Monitoring'].includes(s.category))
  }
];