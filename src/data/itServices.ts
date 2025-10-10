// Comprehensive IT Services Data for Zion Tech Group

export interface ITService {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  category: string;
  popular: boolean;
  enterprise: boolean;
  icon: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  benefits: string[];
  useCases: string[];
  integrations: string[];
  apiAccess: boolean;
  freeTrial: boolean;
  setupTime: string;
  support: string;
  uptime: string;
  dataRetention: string;
  compliance: string[];
  languages: string[];
  mobileApp: boolean;
  webApp: boolean;
  desktopApp: boolean;
  apiDocumentation: string;
  demoUrl: string;
  documentation: string;
  changelog: string;
  status: 'active' | 'beta' | 'coming-soon';
  lastUpdated: string;
  version: string;
  rating: number;
  reviews: number;
  customers: number;
  revenue: string;
  founded: string;
  team: number;
  funding: string;
  investors: string[];
  awards: string[];
  certifications: string[];
  partnerships: string[];
  caseStudies: string[];
  testimonials: {
    name: string;
    company: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  pricingTiers: {
    name: string;
    price: number;
    features: string[];
    popular: boolean;
  }[];
  competitors: {
    name: string;
    price: number;
    features: string[];
  }[];
  marketSize: string;
  growthRate: string;
  targetAudience: string[];
  businessModel: string;
  revenueModel: string;
  pricingStrategy: string;
  valueProposition: string;
  uniqueSellingPoints: string[];
  technicalSpecs: {
    architecture: string;
    database: string;
    hosting: string;
    security: string;
    scalability: string;
    performance: string;
  };
  roadmap: {
    quarter: string;
    features: string[];
    status: 'completed' | 'in-progress' | 'planned';
  }[];
}

export const itServices: ITService[] = [
  {
    id: 'cloud-migration-setup',
    name: 'Cloud Migration & Setup Pro',
    description: 'Comprehensive cloud migration and infrastructure setup service that seamlessly moves your applications, data, and workloads to the cloud with zero downtime. Our expert team ensures optimal performance, security, and cost optimization across AWS, Azure, and Google Cloud platforms.',
    shortDescription: 'Seamless cloud migration with zero downtime and comprehensive security',
    price: '$2,500/mo',
    monthlyPrice: 2500,
    yearlyPrice: 25000,
    features: [
      'Zero-Downtime Migration',
      'Multi-Cloud Strategy',
      'Security Assessment & Hardening',
      'Performance Optimization',
      'Cost Optimization',
      'Disaster Recovery Setup',
      'Backup & Recovery',
      'Monitoring & Alerting',
      'Compliance Implementation',
      'Data Migration',
      'Application Modernization',
      'Container Orchestration',
      'Serverless Architecture',
      'Database Migration',
      'Network Configuration',
      'Load Balancing',
      'Auto-Scaling Setup',
      'CI/CD Pipeline',
      'Documentation & Training',
      '24/7 Support'
    ],
    category: 'Cloud Services',
    popular: true,
    enterprise: false,
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability and flexibility',
      'Enhance security posture',
      'Increase system reliability',
      'Enable remote work capabilities',
      'Simplify IT management',
      'Improve disaster recovery',
      'Future-proof your infrastructure'
    ],
    useCases: [
      'Legacy System Migration',
      'Hybrid Cloud Setup',
      'Multi-Cloud Strategy',
      'Disaster Recovery',
      'Application Modernization',
      'Data Center Consolidation',
      'Remote Work Enablement',
      'Compliance Requirements'
    ],
    integrations: [
      'AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud',
      'VMware', 'Hyper-V', 'Docker', 'Kubernetes',
      'Terraform', 'Ansible', 'Chef', 'Puppet',
      'Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps',
      'Datadog', 'New Relic', 'Splunk', 'ELK Stack'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '2-4 weeks',
    support: '24/7 Cloud Operations Support',
    uptime: '99.99%',
    dataRetention: '7 years',
    compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: false,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/cloud-migration-setup/api',
    demoUrl: 'https://demo.ziontechgroup.com/cloud-migration-setup',
    documentation: 'https://docs.ziontechgroup.com/cloud-migration-setup',
    changelog: 'https://changelog.ziontechgroup.com/cloud-migration-setup',
    status: 'active',
    lastUpdated: '2024-01-24',
    version: '2.3.1',
    rating: 4.8,
    reviews: 892,
    customers: 3450,
    revenue: '$15.2M ARR',
    founded: '2022-01-15',
    team: 65,
    funding: '$25M Series B',
    investors: ['Andreessen Horowitz', 'Sequoia Capital', 'GV', 'Bessemer Venture Partners'],
    awards: ['Best Cloud Migration Service 2023', 'AWS Partner Award', 'Azure Expert MSP'],
    certifications: ['AWS Advanced Partner', 'Microsoft Gold Partner', 'Google Cloud Premier Partner'],
    partnerships: ['AWS', 'Microsoft', 'Google', 'VMware', 'Red Hat'],
    caseStudies: [
      'Fortune 500: 60% cost reduction in cloud migration',
      'SaaS Startup: 99.9% uptime achieved',
      'Healthcare: HIPAA-compliant cloud setup'
    ],
    testimonials: [
      {
        name: 'Jennifer Martinez',
        company: 'Fortune 500',
        role: 'CTO',
        quote: 'Zion Tech Group migrated our entire infrastructure to the cloud with zero downtime. The cost savings have been incredible.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'David Kim',
        company: 'SaaS Startup',
        role: 'Founder & CEO',
        quote: 'The migration was seamless and our application performance improved by 40%. Highly recommended!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How long does a typical cloud migration take?',
        answer: 'Most migrations take 2-4 weeks depending on complexity. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you support all major cloud providers?',
        answer: 'Yes, we are certified partners with AWS, Microsoft Azure, and Google Cloud Platform.'
      }
    ],
    pricingTiers: [
      {
        name: 'Starter',
        price: 1500,
        features: ['Basic migration', 'Email support', 'Standard SLA'],
        popular: false
      },
      {
        name: 'Professional',
        price: 2500,
        features: ['Advanced migration', 'Priority support', 'Enhanced SLA', 'Training'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 4500,
        features: ['Everything in Pro', 'Dedicated team', '24/7 support', 'Custom solutions'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Accenture', price: 5000, features: ['Enterprise focus', 'Higher cost'] },
      { name: 'Deloitte', price: 4000, features: ['Consulting heavy', 'Limited automation'] },
      { name: 'IBM', price: 3500, features: ['Legacy focus', 'Complex setup'] }
    ],
    marketSize: '$45.2B',
    growthRate: '18% YoY',
    targetAudience: ['Enterprises', 'Mid-market', 'SaaS Companies', 'Healthcare'],
    businessModel: 'Professional Services + Managed Services',
    revenueModel: 'Project-based + Retainer + Usage',
    pricingStrategy: 'Value-based',
    valueProposition: 'Transform your infrastructure with seamless cloud migration and optimization',
    uniqueSellingPoints: [
      'Zero-downtime migration guarantee',
      'Multi-cloud expertise',
      'Automated migration tools',
      '24/7 ongoing support'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native with automation',
      database: 'Multi-cloud database solutions',
      hosting: 'AWS, Azure, Google Cloud',
      security: 'Zero-trust architecture',
      scalability: 'Unlimited cloud resources',
      performance: '99.99% uptime SLA'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['AI-powered migration planning', 'Cost optimization automation'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Quantum-ready infrastructure', 'Advanced monitoring'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite Pro',
    description: 'Comprehensive cybersecurity solution that protects your organization from advanced threats with AI-powered threat detection, automated incident response, and continuous security monitoring. Our multi-layered approach ensures complete protection across all attack vectors.',
    shortDescription: 'Comprehensive security solutions to protect your digital assets and data',
    price: '$1,800/mo',
    monthlyPrice: 1800,
    yearlyPrice: 18000,
    features: [
      'AI-Powered Threat Detection',
      'Automated Incident Response',
      '24/7 Security Monitoring',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Security Awareness Training',
      'Endpoint Protection',
      'Network Security',
      'Email Security',
      'Web Application Firewall',
      'Identity & Access Management',
      'Privileged Access Management',
      'Data Loss Prevention',
      'Security Information & Event Management',
      'Threat Intelligence',
      'Compliance Management',
      'Security Orchestration',
      'Forensic Analysis',
      'Incident Response Planning',
      'Security Consulting'
    ],
    category: 'Security',
    popular: true,
    enterprise: false,
    icon: '🛡️',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    hoverColor: 'hover:bg-red-500/20',
    benefits: [
      'Reduce security incidents by 90%',
      'Improve threat detection by 95%',
      'Lower security costs by 50%',
      'Enhance compliance posture',
      'Automate security operations',
      'Improve response times',
      'Reduce false positives',
      'Strengthen security culture'
    ],
    useCases: [
      'Enterprise Security',
      'Healthcare Compliance',
      'Financial Services',
      'Government Security',
      'Critical Infrastructure',
      'E-commerce Protection',
      'Remote Work Security',
      'Cloud Security'
    ],
    integrations: [
      'SIEM Platforms', 'EDR Solutions', 'Firewalls', 'Email Gateways',
      'Identity Providers', 'Cloud Platforms', 'Network Devices',
      'AWS', 'Azure', 'Google Cloud', 'IBM Cloud',
      'Splunk', 'QRadar', 'ArcSight', 'LogRhythm',
      'CrowdStrike', 'SentinelOne', 'Carbon Black', 'Cylance'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '1-2 weeks',
    support: '24/7 Security Operations Center',
    uptime: '99.99%',
    dataRetention: '7 years',
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'CIS', 'GDPR', 'HIPAA', 'PCI DSS'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: true,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/cybersecurity-suite/api',
    demoUrl: 'https://demo.ziontechgroup.com/cybersecurity-suite',
    documentation: 'https://docs.ziontechgroup.com/cybersecurity-suite',
    changelog: 'https://changelog.ziontechgroup.com/cybersecurity-suite',
    status: 'active',
    lastUpdated: '2024-01-22',
    version: '3.1.0',
    rating: 4.9,
    reviews: 1245,
    customers: 5670,
    revenue: '$22.8M ARR',
    founded: '2021-11-20',
    team: 85,
    funding: '$35M Series C',
    investors: ['Andreessen Horowitz', 'Sequoia Capital', 'GV', 'Index Ventures'],
    awards: ['Best Cybersecurity Solution 2023', 'Gartner Leader', 'Forrester Wave Leader'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP', 'Common Criteria'],
    partnerships: ['Microsoft', 'Cisco', 'Palo Alto Networks', 'CrowdStrike'],
    caseStudies: [
      'Fortune 500: 95% reduction in security incidents',
      'Healthcare: HIPAA compliance achieved',
      'Financial: Zero breaches in 2 years'
    ],
    testimonials: [
      {
        name: 'Michael Thompson',
        company: 'Fortune 500',
        role: 'CISO',
        quote: 'The AI-powered threat detection has been a game-changer. We caught 3 advanced persistent threats that other solutions missed.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Sarah Johnson',
        company: 'Healthcare',
        role: 'IT Director',
        quote: 'Zion Tech Group helped us achieve HIPAA compliance and significantly improved our security posture.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How effective is the AI threat detection?',
        answer: 'Our AI achieves 99.5% accuracy in threat detection with a false positive rate of less than 0.1%.'
      },
      {
        question: 'Do you provide 24/7 monitoring?',
        answer: 'Yes, our Security Operations Center provides 24/7 monitoring and incident response.'
      }
    ],
    pricingTiers: [
      {
        name: 'Essential',
        price: 800,
        features: ['Basic protection', 'Email support', 'Standard monitoring'],
        popular: false
      },
      {
        name: 'Professional',
        price: 1800,
        features: ['Advanced AI features', 'Priority support', '24/7 monitoring', 'Compliance tools'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 3500,
        features: ['Everything in Pro', 'Dedicated SOC', 'Custom solutions', 'White-label option'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Palo Alto Networks', price: 2500, features: ['Network focus', 'Higher cost'] },
      { name: 'CrowdStrike', price: 2000, features: ['Endpoint focus', 'Limited coverage'] },
      { name: 'Symantec', price: 1500, features: ['Legacy solution', 'Limited AI'] }
    ],
    marketSize: '$28.5B',
    growthRate: '12% YoY',
    targetAudience: ['Enterprises', 'Healthcare', 'Financial Services', 'Government'],
    businessModel: 'SaaS + Managed Services',
    revenueModel: 'Subscription + Professional Services',
    pricingStrategy: 'Value-based',
    valueProposition: 'Protect your organization with AI-powered cybersecurity and automated threat response',
    uniqueSellingPoints: [
      'AI-powered threat detection',
      '99.5% detection accuracy',
      'Automated incident response',
      'Comprehensive compliance suite'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native with AI/ML pipeline',
      database: 'Security data lake',
      hosting: 'Global cloud with edge computing',
      security: 'Zero-trust architecture',
      scalability: 'Millions of endpoints',
      performance: '<1 second threat detection'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['Quantum-resistant encryption', 'Advanced AI models'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Zero-trust architecture', 'Enhanced automation'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'it-infrastructure-design',
    name: 'IT Infrastructure Design Pro',
    description: 'Comprehensive IT infrastructure design and implementation service that creates scalable, secure, and high-performance technology foundations for your organization. Our expert architects design solutions that grow with your business while maintaining optimal performance and security.',
    shortDescription: 'Scalable infrastructure architecture designed for your business needs',
    price: '$3,000/mo',
    monthlyPrice: 3000,
    yearlyPrice: 30000,
    features: [
      'Infrastructure Architecture Design',
      'Scalability Planning',
      'Performance Optimization',
      'Security Architecture',
      'Disaster Recovery Design',
      'Network Design & Implementation',
      'Data Center Design',
      'Cloud Architecture',
      'Hybrid Cloud Solutions',
      'Edge Computing Setup',
      'Load Balancing Configuration',
      'High Availability Design',
      'Backup & Recovery Planning',
      'Monitoring & Alerting Setup',
      'Documentation & Training',
      'Compliance Implementation',
      'Cost Optimization',
      'Technology Roadmap',
      'Vendor Management',
      'Ongoing Support'
    ],
    category: 'Infrastructure',
    popular: true,
    enterprise: false,
    icon: '🏗️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    hoverColor: 'hover:bg-green-500/20',
    benefits: [
      'Improve system performance by 60%',
      'Reduce infrastructure costs by 35%',
      'Enhance security posture',
      'Increase scalability',
      'Improve reliability',
      'Simplify management',
      'Future-proof technology',
      'Optimize resource utilization'
    ],
    useCases: [
      'New Infrastructure Setup',
      'Legacy System Modernization',
      'Cloud Migration Planning',
      'Disaster Recovery',
      'High Availability Setup',
      'Performance Optimization',
      'Security Enhancement',
      'Compliance Implementation'
    ],
    integrations: [
      'AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud',
      'VMware', 'Hyper-V', 'Docker', 'Kubernetes',
      'Cisco', 'Juniper', 'Aruba', 'Fortinet',
      'Dell', 'HPE', 'Lenovo', 'Supermicro',
      'NetApp', 'Pure Storage', 'Dell EMC', 'IBM Storage'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '3-6 weeks',
    support: '24/7 Infrastructure Support',
    uptime: '99.99%',
    dataRetention: '10 years',
    compliance: ['SOC 2', 'ISO 27001', 'NIST', 'CIS', 'GDPR', 'HIPAA'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: false,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/it-infrastructure-design/api',
    demoUrl: 'https://demo.ziontechgroup.com/it-infrastructure-design',
    documentation: 'https://docs.ziontechgroup.com/it-infrastructure-design',
    changelog: 'https://changelog.ziontechgroup.com/it-infrastructure-design',
    status: 'active',
    lastUpdated: '2024-01-20',
    version: '2.8.2',
    rating: 4.7,
    reviews: 678,
    customers: 2340,
    revenue: '$18.5M ARR',
    founded: '2022-03-10',
    team: 45,
    funding: '$20M Series A',
    investors: ['Andreessen Horowitz', 'Sequoia Capital', 'GV', 'Bessemer Venture Partners'],
    awards: ['Best Infrastructure Solution 2023', 'AWS Architecture Award', 'Microsoft Partner Award'],
    certifications: ['AWS Solutions Architect', 'Microsoft Azure Expert', 'Google Cloud Professional'],
    partnerships: ['AWS', 'Microsoft', 'Google', 'Cisco', 'Dell'],
    caseStudies: [
      'Tech Startup: 300% performance improvement',
      'Manufacturing: 50% cost reduction',
      'Healthcare: HIPAA-compliant infrastructure'
    ],
    testimonials: [
      {
        name: 'Robert Chen',
        company: 'Tech Startup',
        role: 'CTO',
        quote: 'The infrastructure design was perfect for our growth. We scaled from 100 to 10,000 users without any issues.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Maria Rodriguez',
        company: 'Manufacturing',
        role: 'IT Director',
        quote: 'The cost optimization recommendations saved us $500K annually while improving performance.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'How long does infrastructure design take?',
        answer: 'Most designs take 3-6 weeks depending on complexity. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you support hybrid cloud architectures?',
        answer: 'Yes, we specialize in hybrid cloud solutions that combine on-premises and cloud infrastructure.'
      }
    ],
    pricingTiers: [
      {
        name: 'Standard',
        price: 2000,
        features: ['Basic design', 'Email support', 'Standard documentation'],
        popular: false
      },
      {
        name: 'Professional',
        price: 3000,
        features: ['Advanced design', 'Priority support', 'Comprehensive documentation', 'Training'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 5500,
        features: ['Everything in Pro', 'Dedicated architect', 'Custom solutions', 'Ongoing support'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Accenture', price: 5000, features: ['Enterprise focus', 'Higher cost'] },
      { name: 'Deloitte', price: 4000, features: ['Consulting heavy', 'Limited automation'] },
      { name: 'IBM', price: 3500, features: ['Legacy focus', 'Complex setup'] }
    ],
    marketSize: '$35.8B',
    growthRate: '15% YoY',
    targetAudience: ['Enterprises', 'Mid-market', 'Startups', 'Government'],
    businessModel: 'Professional Services + Managed Services',
    revenueModel: 'Project-based + Retainer + Consulting',
    pricingStrategy: 'Value-based',
    valueProposition: 'Build scalable, secure, and high-performance IT infrastructure that grows with your business',
    uniqueSellingPoints: [
      'Expert architecture design',
      'Multi-cloud expertise',
      'Cost optimization focus',
      'Future-proof solutions'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native with hybrid options',
      database: 'Multi-database solutions',
      hosting: 'Multi-cloud with edge computing',
      security: 'Zero-trust architecture',
      scalability: 'Unlimited scaling',
      performance: '99.99% uptime SLA'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['AI-powered optimization', 'Quantum-ready design'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Edge computing focus', 'Advanced monitoring'],
        status: 'in-progress'
      }
    ]
  },
  {
    id: 'it-support-monitoring',
    name: '24/7 IT Support & Monitoring Pro',
    description: 'Comprehensive IT support and monitoring service that provides round-the-clock technical assistance, proactive monitoring, and rapid incident response. Our expert team ensures your systems run smoothly with minimal downtime and maximum performance.',
    shortDescription: 'Round-the-clock technical support and monitoring for your systems',
    price: '$1,200/mo',
    monthlyPrice: 1200,
    yearlyPrice: 12000,
    features: [
      '24/7 Technical Support',
      'Proactive Monitoring',
      'Rapid Incident Response',
      'Remote Support',
      'On-site Support',
      'System Health Monitoring',
      'Performance Optimization',
      'Security Monitoring',
      'Backup Management',
      'Patch Management',
      'User Support',
      'Hardware Support',
      'Software Support',
      'Network Support',
      'Email Support',
      'Phone Support',
      'Chat Support',
      'Ticket Management',
      'SLA Guarantees',
      'Monthly Reports'
    ],
    category: 'Support',
    popular: true,
    enterprise: false,
    icon: '🔄',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    benefits: [
      'Reduce downtime by 80%',
      'Improve system performance by 50%',
      'Lower IT costs by 40%',
      'Enhance user productivity',
      'Proactive issue resolution',
      'Expert technical support',
      'Comprehensive monitoring',
      'Rapid response times'
    ],
    useCases: [
      'Small Business IT',
      'Remote Work Support',
      'System Maintenance',
      'User Training',
      'Hardware Issues',
      'Software Problems',
      'Network Troubleshooting',
      'Security Incidents'
    ],
    integrations: [
      'RMM Tools', 'PSA Systems', 'Monitoring Platforms', 'Ticketing Systems',
      'Remote Access Tools', 'Backup Solutions', 'Security Tools',
      'Microsoft 365', 'Google Workspace', 'AWS', 'Azure',
      'ConnectWise', 'Kaseya', 'SolarWinds', 'PRTG',
      'TeamViewer', 'LogMeIn', 'ScreenConnect', 'BeyondTrust'
    ],
    apiAccess: true,
    freeTrial: true,
    setupTime: '1 week',
    support: '24/7 IT Support',
    uptime: '99.9%',
    dataRetention: '5 years',
    compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'],
    languages: ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'],
    mobileApp: true,
    webApp: true,
    desktopApp: true,
    apiDocumentation: 'https://docs.ziontechgroup.com/it-support-monitoring/api',
    demoUrl: 'https://demo.ziontechgroup.com/it-support-monitoring',
    documentation: 'https://docs.ziontechgroup.com/it-support-monitoring',
    changelog: 'https://changelog.ziontechgroup.com/it-support-monitoring',
    status: 'active',
    lastUpdated: '2024-01-19',
    version: '1.9.3',
    rating: 4.8,
    reviews: 1456,
    customers: 7890,
    revenue: '$28.5M ARR',
    founded: '2021-08-15',
    team: 120,
    funding: '$15M Series A',
    investors: ['Andreessen Horowitz', 'Sequoia Capital', 'GV', 'Index Ventures'],
    awards: ['Best IT Support Service 2023', 'G2 Leader', 'Capterra Top Performer'],
    certifications: ['SOC 2 Type II', 'ISO 27001', 'ITIL Certified'],
    partnerships: ['Microsoft', 'Google', 'AWS', 'Cisco', 'Dell'],
    caseStudies: [
      'Small Business: 90% reduction in IT issues',
      'Remote Team: Seamless work-from-home support',
      'Growing Company: Scalable IT support'
    ],
    testimonials: [
      {
        name: 'John Smith',
        company: 'Small Business',
        role: 'Owner',
        quote: 'The 24/7 support has been incredible. Our systems run smoothly and issues are resolved quickly.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      {
        name: 'Lisa Wang',
        company: 'Growing Company',
        role: 'Operations Manager',
        quote: 'The proactive monitoring caught issues before they became problems. Highly recommended!',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      }
    ],
    faq: [
      {
        question: 'What is your average response time?',
        answer: 'We guarantee response times of 15 minutes for critical issues and 2 hours for standard issues.'
      },
      {
        question: 'Do you provide on-site support?',
        answer: 'Yes, we provide both remote and on-site support depending on the issue and your location.'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic',
        price: 600,
        features: ['Business hours support', 'Basic monitoring', 'Email support'],
        popular: false
      },
      {
        name: 'Professional',
        price: 1200,
        features: ['24/7 support', 'Advanced monitoring', 'Priority support', 'SLA guarantees'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 2200,
        features: ['Everything in Pro', 'Dedicated team', 'Custom SLA', 'White-label option'],
        popular: false
      }
    ],
    competitors: [
      { name: 'Geek Squad', price: 800, features: ['Basic support', 'Limited monitoring'] },
      { name: 'Tech Support', price: 1000, features: ['Standard support', 'No proactive monitoring'] },
      { name: 'IT Support Co', price: 900, features: ['Limited hours', 'Basic features'] }
    ],
    marketSize: '$18.5B',
    growthRate: '10% YoY',
    targetAudience: ['Small Business', 'Mid-market', 'Remote Teams', 'Growing Companies'],
    businessModel: 'Managed Services',
    revenueModel: 'Subscription + Usage',
    pricingStrategy: 'Value-based',
    valueProposition: 'Ensure your IT systems run smoothly with 24/7 expert support and proactive monitoring',
    uniqueSellingPoints: [
      '24/7 expert support',
      'Proactive monitoring',
      'Rapid response times',
      'Comprehensive coverage'
    ],
    technicalSpecs: {
      architecture: 'Cloud-native monitoring',
      database: 'Time-series database',
      hosting: 'Global cloud infrastructure',
      security: 'End-to-end encryption',
      scalability: 'Unlimited endpoints',
      performance: '<15 minute response time'
    },
    roadmap: [
      {
        quarter: 'Q1 2024',
        features: ['AI-powered diagnostics', 'Predictive maintenance'],
        status: 'completed'
      },
      {
        quarter: 'Q2 2024',
        features: ['Advanced automation', 'Self-healing systems'],
        status: 'in-progress'
      }
    ]
  }
];

export const itServiceCategories = [
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    description: 'Cloud migration, setup, and optimization services',
    icon: '☁️',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    services: itServices.filter(s => s.category === 'Cloud Services')
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Cybersecurity and threat protection solutions',
    icon: '🛡️',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    services: itServices.filter(s => s.category === 'Security')
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'IT infrastructure design and implementation',
    icon: '🏗️',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    services: itServices.filter(s => s.category === 'Infrastructure')
  },
  {
    id: 'support',
    name: 'Support',
    description: 'IT support and monitoring services',
    icon: '🔄',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    services: itServices.filter(s => s.category === 'Support')
  }
];

export const getITServiceById = (id: string): ITService | undefined => {
  return itServices.find(service => service.id === id);
};

export const getITServicesByCategory = (category: string): ITService[] => {
  return itServices.filter(service => service.category.toLowerCase() === category.toLowerCase());
};

export const getPopularITServices = (): ITService[] => {
  return itServices.filter(service => service.popular);
};

export const getEnterpriseITServices = (): ITService[] => {
  return itServices.filter(service => service.enterprise);
};