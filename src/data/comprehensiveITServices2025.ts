export type ITServiceItem = {
  id: string;
  title: string;
  description: string;
  category: 'IT Infrastructure' | 'Cybersecurity' | 'Cloud Services' | 'Data Management' | 'Network Solutions' | 'Digital Transformation' | 'IT Consulting' | 'Managed Services';
  price: string;
  billing: 'month' | 'project' | 'hour' | 'year';
  features: string[];
  benefits: string[];
  marketPrice: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
};

export const comprehensiveITServices2025: ITServiceItem[] = [
  // IT Infrastructure Services
  {
    id: 'enterprise-network-infrastructure',
    title: 'Enterprise Network Infrastructure Design',
    description: 'Comprehensive network infrastructure design and implementation for enterprise environments',
    category: 'IT Infrastructure',
    price: '$15,000',
    billing: 'project',
    features: [
      'Network architecture design',
      'High-availability solutions',
      'Load balancing configuration',
      'Network security implementation',
      'Performance optimization',
      'Documentation and training'
    ],
    benefits: [
      'Improved network performance',
      'Enhanced security posture',
      'Scalable infrastructure',
      'Reduced downtime'
    ],
    marketPrice: '$20,000-50,000',
    ctaLabel: 'Schedule Consultation',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'data-center-optimization',
    title: 'Data Center Optimization & Migration',
    description: 'Optimize existing data centers and migrate to modern infrastructure solutions',
    category: 'IT Infrastructure',
    price: '$25,000',
    billing: 'project',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Performance optimization',
      'Energy efficiency improvements',
      'Disaster recovery setup',
      'Monitoring implementation'
    ],
    benefits: [
      'Reduced operational costs',
      'Improved performance',
      'Enhanced reliability',
      'Better resource utilization'
    ],
    marketPrice: '$30,000-100,000',
    ctaLabel: 'Get Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'virtualization-solutions',
    title: 'Enterprise Virtualization Solutions',
    description: 'Complete virtualization infrastructure for servers, desktops, and applications',
    category: 'IT Infrastructure',
    price: '$12,000',
    billing: 'project',
    features: [
      'Server virtualization',
      'Desktop virtualization (VDI)',
      'Application virtualization',
      'Storage virtualization',
      'Performance monitoring',
      'Backup and recovery'
    ],
    benefits: [
      'Reduced hardware costs',
      'Improved resource utilization',
      'Enhanced disaster recovery',
      'Simplified management'
    ],
    marketPrice: '$15,000-40,000',
    ctaLabel: 'Start Free Assessment',
    href: 'https://ziontechgroup.com/contact'
  },

  // Cybersecurity Services
  {
    id: 'zero-trust-security-implementation',
    title: 'Zero Trust Security Implementation',
    description: 'Implement comprehensive zero trust security architecture for modern enterprise environments',
    category: 'Cybersecurity',
    price: '$18,000',
    billing: 'project',
    features: [
      'Identity and access management',
      'Network segmentation',
      'Multi-factor authentication',
      'Continuous monitoring',
      'Threat detection',
      'Incident response planning'
    ],
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance with regulations',
      'Improved threat detection'
    ],
    marketPrice: '$25,000-75,000',
    ctaLabel: 'Security Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'advanced-threat-detection',
    title: 'Advanced Threat Detection & Response',
    description: 'AI-powered threat detection and automated incident response system',
    category: 'Cybersecurity',
    price: '$2,500',
    billing: 'month',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Automated response',
      'Threat intelligence',
      'Incident investigation',
      'Forensic analysis'
    ],
    benefits: [
      'Faster threat detection',
      'Reduced response time',
      'Automated mitigation',
      'Comprehensive protection'
    ],
    marketPrice: '$3,000-8,000/month',
    ctaLabel: 'Start Free Trial',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'compliance-management-suite',
    title: 'Compliance Management Suite',
    description: 'Comprehensive compliance management for SOX, GDPR, HIPAA, and other regulations',
    category: 'Cybersecurity',
    price: '$1,800',
    billing: 'month',
    features: [
      'Regulatory compliance tracking',
      'Automated assessments',
      'Policy management',
      'Audit preparation',
      'Risk assessment',
      'Reporting automation'
    ],
    benefits: [
      'Ensure compliance',
      'Reduce audit risks',
      'Automated reporting',
      'Risk mitigation'
    ],
    marketPrice: '$2,500-6,000/month',
    ctaLabel: 'Compliance Check',
    href: 'https://ziontechgroup.com/contact'
  },

  // Cloud Services
  {
    id: 'multi-cloud-strategy',
    title: 'Multi-Cloud Strategy & Implementation',
    description: 'Design and implement multi-cloud strategies for optimal performance and cost management',
    category: 'Cloud Services',
    price: '$22,000',
    billing: 'project',
    features: [
      'Cloud strategy development',
      'Multi-cloud architecture',
      'Cost optimization',
      'Security implementation',
      'Migration planning',
      'Performance monitoring'
    ],
    benefits: [
      'Optimized cloud costs',
      'Improved performance',
      'Enhanced reliability',
      'Vendor flexibility'
    ],
    marketPrice: '$30,000-80,000',
    ctaLabel: 'Cloud Strategy Session',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization Platform',
    description: 'AI-powered cloud cost optimization and resource management platform',
    category: 'Cloud Services',
    price: '$899',
    billing: 'month',
    features: [
      'Cost analysis and tracking',
      'Resource optimization',
      'Automated scaling',
      'Budget management',
      'ROI tracking',
      'Cost forecasting'
    ],
    benefits: [
      'Reduce cloud costs by 30%',
      'Optimize resource usage',
      'Better budget control',
      'Automated optimization'
    ],
    marketPrice: '$1,200-3,000/month',
    ctaLabel: 'Cost Analysis',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'serverless-architecture',
    title: 'Serverless Architecture Implementation',
    description: 'Design and implement serverless architectures for scalable and cost-effective applications',
    category: 'Cloud Services',
    price: '$16,000',
    billing: 'project',
    features: [
      'Architecture design',
      'Function development',
      'API integration',
      'Monitoring setup',
      'Performance optimization',
      'Cost analysis'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Automatic scaling',
      'Faster development',
      'Improved reliability'
    ],
    marketPrice: '$20,000-60,000',
    ctaLabel: 'Serverless Assessment',
    href: 'https://ziontechgroup.com/contact'
  },

  // Data Management Services
  {
    id: 'data-lake-implementation',
    title: 'Enterprise Data Lake Implementation',
    description: 'Build scalable data lakes for big data analytics and machine learning',
    category: 'Data Management',
    price: '$28,000',
    billing: 'project',
    features: [
      'Data lake architecture',
      'ETL pipeline development',
      'Data governance',
      'Security implementation',
      'Analytics integration',
      'Performance optimization'
    ],
    benefits: [
      'Centralized data storage',
      'Improved analytics',
      'Better data quality',
      'Scalable architecture'
    ],
    marketPrice: '$35,000-100,000',
    ctaLabel: 'Data Strategy Session',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'real-time-analytics-platform',
    title: 'Real-Time Analytics Platform',
    description: 'Real-time data processing and analytics platform for instant business insights',
    category: 'Data Management',
    price: '$1,200',
    billing: 'month',
    features: [
      'Real-time data processing',
      'Stream analytics',
      'Dashboard creation',
      'Alert system',
      'Data visualization',
      'Performance monitoring'
    ],
    benefits: [
      'Instant business insights',
      'Faster decision making',
      'Real-time monitoring',
      'Improved responsiveness'
    ],
    marketPrice: '$1,800-5,000/month',
    ctaLabel: 'Analytics Demo',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'data-quality-management',
    title: 'Data Quality Management Platform',
    description: 'Comprehensive data quality management with automated monitoring and improvement',
    category: 'Data Management',
    price: '$999',
    billing: 'month',
    features: [
      'Data quality assessment',
      'Automated monitoring',
      'Data cleansing',
      'Quality scoring',
      'Compliance tracking',
      'Performance analytics'
    ],
    benefits: [
      'Improved data quality',
      'Reduced errors',
      'Better decision making',
      'Compliance assurance'
    ],
    marketPrice: '$1,500-4,000/month',
    ctaLabel: 'Quality Assessment',
    href: 'https://ziontechgroup.com/contact'
  },

  // Network Solutions
  {
    id: 'sd-wan-implementation',
    title: 'SD-WAN Implementation & Optimization',
    description: 'Software-defined wide area network implementation for improved performance and cost efficiency',
    category: 'Network Solutions',
    price: '$20,000',
    billing: 'project',
    features: [
      'SD-WAN design',
      'Implementation planning',
      'Performance optimization',
      'Security integration',
      'Monitoring setup',
      'Staff training'
    ],
    benefits: [
      'Improved network performance',
      'Reduced costs',
      'Better reliability',
      'Simplified management'
    ],
    marketPrice: '$25,000-70,000',
    ctaLabel: 'Network Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'network-performance-monitoring',
    title: 'Network Performance Monitoring Suite',
    description: 'Comprehensive network monitoring and performance optimization platform',
    category: 'Network Solutions',
    price: '$799',
    billing: 'month',
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Alert system',
      'Capacity planning',
      'Troubleshooting tools',
      'Reporting automation'
    ],
    benefits: [
      'Proactive issue detection',
      'Improved performance',
      'Reduced downtime',
      'Better planning'
    ],
    marketPrice: '$1,000-3,000/month',
    ctaLabel: 'Monitoring Demo',
    href: 'https://ziontechgroup.com/contact'
  },

  // Digital Transformation
  {
    id: 'digital-workplace-transformation',
    title: 'Digital Workplace Transformation',
    description: 'Transform traditional workplaces into modern, digital-first environments',
    category: 'Digital Transformation',
    price: '$35,000',
    billing: 'project',
    features: [
      'Workplace assessment',
      'Technology strategy',
      'Implementation planning',
      'Change management',
      'Training programs',
      'Performance measurement'
    ],
    benefits: [
      'Improved productivity',
      'Better collaboration',
      'Enhanced employee experience',
      'Cost optimization'
    ],
    marketPrice: '$50,000-150,000',
    ctaLabel: 'Transformation Session',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'legacy-system-modernization',
    title: 'Legacy System Modernization',
    description: 'Modernize legacy systems with cloud-native technologies and microservices architecture',
    category: 'Digital Transformation',
    price: '$45,000',
    billing: 'project',
    features: [
      'System assessment',
      'Modernization strategy',
      'Architecture design',
      'Migration planning',
      'Implementation',
      'Testing and validation'
    ],
    benefits: [
      'Improved performance',
      'Reduced maintenance costs',
      'Enhanced scalability',
      'Better user experience'
    ],
    marketPrice: '$60,000-200,000',
    ctaLabel: 'Modernization Assessment',
    href: 'https://ziontechgroup.com/contact'
  },

  // IT Consulting
  {
    id: 'technology-roadmap-development',
    title: 'Technology Roadmap Development',
    description: 'Strategic technology roadmap development aligned with business objectives',
    category: 'IT Consulting',
    price: '$8,000',
    billing: 'project',
    features: [
      'Business alignment analysis',
      'Technology assessment',
      'Roadmap development',
      'Implementation planning',
      'Risk assessment',
      'ROI analysis'
    ],
    benefits: [
      'Clear technology direction',
      'Better resource planning',
      'Risk mitigation',
      'Improved ROI'
    ],
    marketPrice: '$10,000-30,000',
    ctaLabel: 'Strategy Session',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'it-governance-framework',
    title: 'IT Governance Framework Implementation',
    description: 'Implement comprehensive IT governance frameworks for better decision making and risk management',
    category: 'IT Consulting',
    price: '$12,000',
    billing: 'project',
    features: [
      'Governance assessment',
      'Framework design',
      'Policy development',
      'Process implementation',
      'Training programs',
      'Performance monitoring'
    ],
    benefits: [
      'Better decision making',
      'Risk reduction',
      'Compliance assurance',
      'Improved efficiency'
    ],
    marketPrice: '$15,000-50,000',
    ctaLabel: 'Governance Assessment',
    href: 'https://ziontechgroup.com/contact'
  },

  // Managed Services
  {
    id: 'managed-it-services',
    title: 'Comprehensive Managed IT Services',
    description: 'End-to-end managed IT services including infrastructure, security, and support',
    category: 'Managed Services',
    price: '$3,500',
    billing: 'month',
    features: [
      '24/7 monitoring',
      'Proactive maintenance',
      'Help desk support',
      'Security management',
      'Backup and recovery',
      'Performance optimization'
    ],
    benefits: [
      'Reduced IT overhead',
      'Improved reliability',
      'Expert support',
      'Predictable costs'
    ],
    marketPrice: '$5,000-15,000/month',
    ctaLabel: 'Service Assessment',
    href: 'https://ziontechgroup.com/contact'
  },
  {
    id: 'managed-security-services',
    title: 'Managed Security Services',
    description: 'Comprehensive managed security services including monitoring, incident response, and compliance',
    category: 'Managed Services',
    price: '$2,800',
    billing: 'month',
    features: [
      'Security monitoring',
      'Incident response',
      'Vulnerability management',
      'Compliance tracking',
      'Security assessments',
      'Staff training'
    ],
    benefits: [
      'Enhanced security',
      'Expert security team',
      'Compliance assurance',
      'Reduced risks'
    ],
    marketPrice: '$4,000-12,000/month',
    ctaLabel: 'Security Assessment',
    href: 'https://ziontechgroup.com/contact'
  }
];

export default comprehensiveITServices2025;