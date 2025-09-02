export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  // Micro SaaS Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials with GPT-4 integration.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration',
      'Plagiarism detection',
      'Content templates library'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing',
      'Cost-effective content marketing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copywriting'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Comprehensive social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & reporting',
      'Team collaboration',
      'Content calendar',
      'Auto-posting',
      'Engagement tracking'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours weekly',
      'Increase engagement by 40%',
      'Consistent posting schedule',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Marketing agencies',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Redis'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Advanced email marketing platform with AI-driven personalization, automation workflows, and detailed analytics.',
    features: [
      'Drag-and-drop email builder',
      'AI personalization',
      'Automation workflows',
      'A/B testing',
      'Advanced segmentation',
      'Deliverability optimization',
      'Analytics dashboard',
      'Template library'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '3x higher open rates',
      'Automated lead nurturing',
      'Personalized customer journeys',
      'ROI tracking'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Non-profit organizations'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Redis'],
    link: 'https://ziontechgroup.com/services/email-marketing-automation',
    icon: '📧'
  },
  {
    id: 'invoice-management-system',
    name: 'Smart Invoice Management',
    category: 'micro-saas',
    description: 'Intelligent invoice management system with automated billing, payment tracking, and financial reporting.',
    features: [
      'Automated invoice generation',
      'Payment tracking',
      'Recurring billing',
      'Multi-currency support',
      'Tax calculations',
      'Client portal',
      'Financial reporting',
      'Payment reminders'
    ],
    pricing: {
      starter: 15,
      professional: 39,
      enterprise: 99,
      currency: 'USD'
    },
    benefits: [
      'Reduce billing time by 80%',
      'Faster payment collection',
      'Automated tax compliance',
      'Better cash flow management'
    ],
    useCases: [
      'Freelancers',
      'Small businesses',
      'Consulting firms',
      'Service providers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PDF.js'],
    link: 'https://ziontechgroup.com/services/invoice-management',
    icon: '🧾'
  },
  {
    id: 'time-tracking-productivity',
    name: 'Time Tracking & Productivity Suite',
    category: 'micro-saas',
    description: 'Comprehensive time tracking and productivity management platform with AI insights and team collaboration.',
    features: [
      'Automatic time tracking',
      'Project management',
      'Team collaboration',
      'Productivity analytics',
      'Screenshot monitoring',
      'Expense tracking',
      'Reporting dashboard',
      'Mobile apps'
    ],
    pricing: {
      starter: 12,
      professional: 29,
      enterprise: 79,
      currency: 'USD'
    },
    benefits: [
      'Increase productivity by 25%',
      'Accurate project billing',
      'Team performance insights',
      'Better resource allocation'
    ],
    useCases: [
      'Remote teams',
      'Freelancers',
      'Consulting firms',
      'Software development'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'crm-sales-pipeline',
    name: 'CRM & Sales Pipeline Manager',
    category: 'micro-saas',
    description: 'Customer relationship management platform with AI-powered lead scoring and sales pipeline automation.',
    features: [
      'Lead management',
      'Sales pipeline tracking',
      'AI lead scoring',
      'Email integration',
      'Task automation',
      'Reporting & analytics',
      'Mobile access',
      'Team collaboration'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Increase sales by 30%',
      'Better lead qualification',
      'Automated follow-ups',
      'Sales forecasting'
    ],
    useCases: [
      'Sales teams',
      'Real estate agents',
      'Insurance brokers',
      'B2B companies'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/crm-sales-pipeline',
    icon: '📊'
  },
  {
    id: 'appointment-booking-system',
    name: 'Smart Appointment Booking',
    category: 'micro-saas',
    description: 'Intelligent appointment booking system with automated scheduling, reminders, and payment processing.',
    features: [
      'Online booking calendar',
      'Automated reminders',
      'Payment processing',
      'Multi-service support',
      'Staff scheduling',
      'Client management',
      'Analytics dashboard',
      'Mobile optimization'
    ],
    pricing: {
      starter: 18,
      professional: 45,
      enterprise: 119,
      currency: 'USD'
    },
    benefits: [
      'Reduce no-shows by 50%',
      '24/7 booking availability',
      'Automated payment collection',
      'Streamlined operations'
    ],
    useCases: [
      'Healthcare providers',
      'Beauty salons',
      'Consulting services',
      'Fitness trainers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar APIs'],
    link: 'https://ziontechgroup.com/services/appointment-booking',
    icon: '📅'
  },
  {
    id: 'inventory-pos-system',
    name: 'Inventory & POS System',
    category: 'micro-saas',
    description: 'Complete point-of-sale and inventory management system for retail and restaurant businesses.',
    features: [
      'Point of sale terminal',
      'Inventory tracking',
      'Barcode scanning',
      'Multi-location support',
      'Sales reporting',
      'Customer management',
      'Payment processing',
      'Staff management'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Streamlined operations',
      'Real-time inventory',
      'Better sales insights',
      'Reduced manual work'
    ],
    useCases: [
      'Retail stores',
      'Restaurants',
      'Coffee shops',
      'Boutique stores'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Barcode APIs'],
    link: 'https://ziontechgroup.com/services/inventory-pos',
    icon: '🛒'
  },
  {
    id: 'document-management-system',
    name: 'Document Management & Collaboration',
    category: 'micro-saas',
    description: 'Secure document management platform with version control, collaboration tools, and AI-powered search.',
    features: [
      'Document storage',
      'Version control',
      'Collaborative editing',
      'AI-powered search',
      'Access control',
      'Document templates',
      'Workflow automation',
      'Audit trails'
    ],
    pricing: {
      starter: 20,
      professional: 50,
      enterprise: 139,
      currency: 'USD'
    },
    benefits: [
      'Centralized document storage',
      'Improved collaboration',
      'Version control',
      'Enhanced security'
    ],
    useCases: [
      'Legal firms',
      'Accounting firms',
      'Real estate agencies',
      'Consulting companies'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'AI Search'],
    link: 'https://ziontechgroup.com/services/document-management',
    icon: '📄'
  },
  {
    id: 'survey-feedback-platform',
    name: 'Survey & Feedback Platform',
    category: 'micro-saas',
    description: 'Advanced survey and feedback collection platform with AI analysis and real-time insights.',
    features: [
      'Drag-and-drop survey builder',
      'AI response analysis',
      'Real-time analytics',
      'Multi-channel distribution',
      'Custom branding',
      'Advanced reporting',
      'Integration APIs',
      'Mobile optimization'
    ],
    pricing: {
      starter: 16,
      professional: 42,
      enterprise: 109,
      currency: 'USD'
    },
    benefits: [
      'Better customer insights',
      'Automated analysis',
      'Real-time feedback',
      'Data-driven decisions'
    ],
    useCases: [
      'Market research',
      'Customer satisfaction',
      'Employee feedback',
      'Event feedback'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/survey-feedback',
    icon: '📋'
  },
  {
    id: 'expense-management-system',
    name: 'Expense Management & Reimbursement',
    category: 'micro-saas',
    description: 'Automated expense management system with receipt scanning, approval workflows, and financial reporting.',
    features: [
      'Receipt scanning',
      'Expense categorization',
      'Approval workflows',
      'Reimbursement processing',
      'Policy compliance',
      'Financial reporting',
      'Mobile app',
      'Integration with accounting'
    ],
    pricing: {
      starter: 14,
      professional: 35,
      enterprise: 89,
      currency: 'USD'
    },
    benefits: [
      'Reduce processing time by 70%',
      'Automated compliance',
      'Better expense control',
      'Streamlined reimbursements'
    ],
    useCases: [
      'Small businesses',
      'Startups',
      'Consulting firms',
      'Sales teams'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OCR', 'Stripe'],
    link: 'https://ziontechgroup.com/services/expense-management',
    icon: '💰'
  },
  {
    id: 'project-management-suite',
    name: 'Smart Project Manager',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization and team collaboration.',
    features: [
      'AI task prioritization',
      'Real-time collaboration',
      'Time tracking',
      'Resource allocation',
      'Progress analytics',
      'Mobile app'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      '30% faster project completion',
      'Improved team productivity',
      'Better resource utilization',
      'Real-time insights'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://ziontechgroup.com/services/project-management',
    icon: '📊'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Tracker Pro',
    category: 'micro-saas',
    description: 'Smart inventory management system with predictive analytics and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support',
      'Integration APIs'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 80%',
      'Optimize inventory levels',
      'Automated procurement',
      'Cost savings'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail stores',
      'Manufacturing',
      'Warehouse management'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'AI Support Assistant',
    category: 'micro-saas',
    description: 'Intelligent customer support platform with AI chatbots and automated ticket routing.',
    features: [
      'AI-powered chatbots',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Service businesses',
      'Educational institutions'
    ],
    technologies: ['Next.js', 'OpenAI', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/customer-support',
    icon: '🤖'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Expert',
    category: 'it-services',
    description: 'Comprehensive cloud migration services for seamless transition to AWS, Azure, or Google Cloud with zero downtime.',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Data migration',
      'Application modernization',
      'Security implementation',
      'Performance optimization',
      'Cost optimization',
      '24/7 monitoring'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 50000,
      currency: 'USD'
    },
    benefits: [
      'Reduced infrastructure costs by 40%',
      'Improved scalability',
      'Enhanced security',
      'Better performance',
      'Disaster recovery'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Disaster recovery setup',
      'Application scaling'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    link: 'https://ziontechgroup.com/services/cloud-migration',
    icon: '☁️'
  },
  {
    id: 'multi-cloud-strategy',
    name: 'Multi-Cloud Strategy & Management',
    category: 'it-services',
    description: 'Strategic multi-cloud implementation and management to optimize costs, performance, and avoid vendor lock-in.',
    features: [
      'Multi-cloud architecture design',
      'Cost optimization across providers',
      'Disaster recovery planning',
      'Security compliance',
      'Performance monitoring',
      'Vendor management',
      'Automated scaling',
      'Compliance auditing'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Avoid vendor lock-in',
      'Optimize costs across providers',
      'Enhanced disaster recovery',
      'Better performance distribution'
    ],
    useCases: [
      'Enterprise applications',
      'Global businesses',
      'High-availability systems',
      'Compliance requirements'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Ansible'],
    link: 'https://ziontechgroup.com/services/multi-cloud-strategy',
    icon: '🌐'
  },
  {
    id: 'container-orchestration',
    name: 'Container Orchestration & Kubernetes',
    category: 'it-services',
    description: 'Complete container orchestration setup with Kubernetes, Docker, and microservices architecture implementation.',
    features: [
      'Kubernetes cluster setup',
      'Container orchestration',
      'Microservices architecture',
      'Service mesh implementation',
      'Auto-scaling configuration',
      'Monitoring & logging',
      'CI/CD integration',
      'Security hardening'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Better resource utilization',
      'Faster deployments',
      'Enhanced reliability'
    ],
    useCases: [
      'Microservices applications',
      'Scalable web services',
      'DevOps transformation',
      'Legacy application modernization'
    ],
    technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus', 'Grafana'],
    link: 'https://ziontechgroup.com/services/container-orchestration',
    icon: '📦'
  },
  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture Implementation',
    category: 'it-services',
    description: 'Serverless architecture design and implementation using AWS Lambda, Azure Functions, and Google Cloud Functions.',
    features: [
      'Serverless architecture design',
      'Function optimization',
      'API Gateway setup',
      'Event-driven architecture',
      'Cost optimization',
      'Performance monitoring',
      'Security implementation',
      'Auto-scaling configuration'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Pay-per-use pricing',
      'Automatic scaling',
      'Reduced operational overhead',
      'Faster time to market'
    ],
    useCases: [
      'API development',
      'Event processing',
      'Data processing pipelines',
      'IoT applications'
    ],
    technologies: ['AWS Lambda', 'Azure Functions', 'GCP Functions', 'API Gateway', 'EventBridge'],
    link: 'https://ziontechgroup.com/services/serverless-architecture',
    icon: '⚡'
  },
  {
    id: 'network-security-audit',
    name: 'Network Security & Infrastructure Audit',
    category: 'it-services',
    description: 'Comprehensive network security assessment and infrastructure hardening to protect against cyber threats.',
    features: [
      'Network vulnerability assessment',
      'Firewall configuration review',
      'Intrusion detection setup',
      'Network segmentation',
      'VPN implementation',
      'Security policy development',
      'Compliance auditing',
      'Incident response planning'
    ],
    pricing: {
      starter: 3500,
      professional: 9500,
      enterprise: 28000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced network security',
      'Compliance with regulations',
      'Reduced security risks',
      'Better threat detection'
    ],
    useCases: [
      'Enterprise networks',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Wireshark', 'Nmap', 'Snort'],
    link: 'https://ziontechgroup.com/services/network-security-audit',
    icon: '🛡️'
  },
  {
    id: 'database-optimization',
    name: 'Database Optimization & Migration',
    category: 'it-services',
    description: 'Database performance optimization, migration, and management services for improved performance and scalability.',
    features: [
      'Database performance tuning',
      'Migration planning & execution',
      'Query optimization',
      'Index optimization',
      'Backup & recovery setup',
      'High availability configuration',
      'Security hardening',
      'Monitoring & alerting'
    ],
    pricing: {
      starter: 3000,
      professional: 8500,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Improved query performance',
      'Reduced downtime',
      'Better scalability',
      'Enhanced data security'
    ],
    useCases: [
      'Legacy database modernization',
      'Performance optimization',
      'Cloud database migration',
      'High-availability setup'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS RDS', 'Azure SQL'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
  },
  {
    id: 'api-gateway-management',
    name: 'API Gateway & Microservices Management',
    category: 'it-services',
    description: 'API gateway setup and microservices management for scalable, secure, and efficient API operations.',
    features: [
      'API gateway configuration',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API versioning',
      'Monitoring & analytics',
      'Documentation generation',
      'Load balancing',
      'Security policies'
    ],
    pricing: {
      starter: 2500,
      professional: 7500,
      enterprise: 22000,
      currency: 'USD'
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Better performance monitoring',
      'Simplified integration'
    ],
    useCases: [
      'Microservices architecture',
      'API-first businesses',
      'Third-party integrations',
      'Mobile app backends'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Istio', 'Nginx'],
    link: 'https://ziontechgroup.com/services/api-gateway-management',
    icon: '🔗'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery & Business Continuity',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and business continuity solutions to ensure minimal downtime.',
    features: [
      'Disaster recovery planning',
      'Backup strategy implementation',
      'Failover systems setup',
      'Recovery time objectives',
      'Testing & validation',
      'Documentation & procedures',
      'Staff training',
      'Regular audits'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Minimal downtime',
      'Data protection',
      'Business continuity',
      'Compliance adherence'
    ],
    useCases: [
      'Critical business systems',
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS DR', 'Azure Site Recovery', 'VMware SRM'],
    link: 'https://ziontechgroup.com/services/disaster-recovery-planning',
    icon: '🔄'
  },
  {
    id: 'it-infrastructure-monitoring',
    name: 'IT Infrastructure Monitoring & Management',
    category: 'it-services',
    description: '24/7 IT infrastructure monitoring and management services with proactive issue detection and resolution.',
    features: [
      '24/7 infrastructure monitoring',
      'Proactive issue detection',
      'Performance optimization',
      'Capacity planning',
      'Security monitoring',
      'Automated alerting',
      'Incident response',
      'Regular reporting'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Reduced downtime',
      'Proactive issue resolution',
      'Better performance',
      'Cost optimization'
    ],
    useCases: [
      'Enterprise infrastructure',
      'Cloud environments',
      'Hybrid systems',
      'Critical applications'
    ],
    technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack', 'Splunk'],
    link: 'https://ziontechgroup.com/services/it-infrastructure-monitoring',
    icon: '📊'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management (IAM)',
    category: 'it-services',
    description: 'Comprehensive identity and access management solutions with single sign-on, multi-factor authentication, and role-based access control.',
    features: [
      'Single Sign-On (SSO) setup',
      'Multi-factor authentication',
      'Role-based access control',
      'Identity provisioning',
      'Audit & compliance',
      'Password management',
      'API security',
      'Integration with existing systems'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 27000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Simplified user management',
      'Compliance adherence',
      'Reduced IT overhead'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Okta', 'Azure AD', 'AWS IAM', 'Auth0', 'SAML', 'OAuth'],
    link: 'https://ziontechgroup.com/services/identity-access-management',
    icon: '🔐'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Assessment',
    category: 'it-services',
    description: 'Comprehensive cybersecurity audit and penetration testing services to protect your business.',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance auditing',
      'Incident response planning',
      'Security training'
    ],
    pricing: {
      starter: 3000,
      professional: 8000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with regulations',
      'Protect customer data',
      'Reduce security risks'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    link: 'https://ziontechgroup.com/services/cybersecurity',
    icon: '🔒'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Suite',
    category: 'it-services',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Automated testing',
      'Deployment automation'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Better collaboration'
    ],
    useCases: [
      'Software development teams',
      'Startups scaling up',
      'Enterprise applications',
      'Microservices architecture'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Kubernetes', 'Prometheus'],
    link: 'https://ziontechgroup.com/services/devops',
    icon: '⚙️'
  },
  {
    id: 'data-backup-recovery',
    name: 'Data Backup & Recovery',
    category: 'it-services',
    description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
    features: [
      'Automated backup scheduling',
      'Incremental backups',
      'Disaster recovery planning',
      'Data encryption',
      'Backup testing',
      'Recovery time objectives'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Data protection',
      'Business continuity',
      'Compliance adherence',
      'Peace of mind'
    ],
    useCases: [
      'Database systems',
      'File servers',
      'Virtual machines',
      'Cloud applications'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS S3', 'Azure Backup'],
    link: 'https://ziontechgroup.com/services/backup-recovery',
    icon: '💾'
  },

  // AI Services
  {
    id: 'custom-ai-models',
    name: 'Custom AI Model Development',
    category: 'ai-services',
    description: 'Custom AI model development tailored to your specific business needs and data with advanced machine learning techniques.',
    features: [
      'Custom model training',
      'Data preprocessing',
      'Model optimization',
      'API development',
      'Integration support',
      'Ongoing maintenance',
      'Model versioning',
      'Performance monitoring'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Tailored to your data',
      'Better accuracy',
      'Competitive advantage',
      'Scalable solutions',
      'ROI optimization'
    ],
    useCases: [
      'Predictive analytics',
      'Image recognition',
      'Natural language processing',
      'Recommendation systems',
      'Fraud detection'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker', 'MLflow'],
    link: 'https://ziontechgroup.com/services/custom-ai-models',
    icon: '🧠'
  },
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision & Image Recognition',
    category: 'ai-services',
    description: 'Advanced computer vision solutions for object detection, facial recognition, and image analysis applications.',
    features: [
      'Object detection & classification',
      'Facial recognition systems',
      'Image segmentation',
      'OCR & text extraction',
      'Quality inspection',
      'Real-time processing',
      'Custom model training',
      'API integration'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Enhanced security',
      'Improved accuracy',
      'Cost reduction'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security & surveillance',
      'Medical imaging',
      'Retail analytics',
      'Autonomous vehicles'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision-solutions',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing (NLP)',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
    features: [
      'Text classification & analysis',
      'Sentiment analysis',
      'Language translation',
      'Named entity recognition',
      'Text summarization',
      'Question answering systems',
      'Chatbot development',
      'Document processing'
    ],
    pricing: {
      starter: 7000,
      professional: 22000,
      enterprise: 65000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Multilingual support',
      'Improved efficiency'
    ],
    useCases: [
      'Customer service automation',
      'Content moderation',
      'Market research',
      'Legal document analysis',
      'Social media monitoring'
    ],
    technologies: ['BERT', 'GPT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
    link: 'https://ziontechgroup.com/services/natural-language-processing',
    icon: '💬'
  },
  {
    id: 'predictive-analytics-platform',
    name: 'Predictive Analytics & Forecasting',
    category: 'ai-services',
    description: 'Advanced predictive analytics platform for business forecasting, demand planning, and risk assessment.',
    features: [
      'Time series forecasting',
      'Demand prediction',
      'Risk assessment models',
      'Customer behavior analysis',
      'Sales forecasting',
      'Inventory optimization',
      'Churn prediction',
      'Real-time predictions'
    ],
    pricing: {
      starter: 9000,
      professional: 28000,
      enterprise: 85000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Reduced risks',
      'Optimized operations',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Marketing campaign optimization',
      'Healthcare predictions',
      'Energy demand forecasting'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'Prophet', 'ARIMA', 'XGBoost'],
    link: 'https://ziontechgroup.com/services/predictive-analytics-platform',
    icon: '📈'
  },
  {
    id: 'ai-powered-recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation systems for personalized content, products, and services using advanced ML algorithms.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation systems',
      'Real-time recommendations',
      'A/B testing framework',
      'Performance analytics',
      'Multi-domain support',
      'Scalable architecture'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Personalized experiences',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Social media platforms',
      'News websites',
      'Job matching platforms'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Redis', 'Kafka', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/ai-powered-recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-automation-workflows',
    name: 'AI-Powered Workflow Automation',
    category: 'ai-services',
    description: 'Intelligent workflow automation using AI to streamline business processes and reduce manual intervention.',
    features: [
      'Process mining & analysis',
      'Intelligent document processing',
      'Decision automation',
      'Exception handling',
      'Process optimization',
      'Integration with existing systems',
      'Monitoring & analytics',
      'Continuous improvement'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 80%',
      'Faster processing times',
      'Improved accuracy',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Claims processing',
      'HR workflows',
      'Compliance monitoring'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR', 'RPA', 'ML'],
    link: 'https://ziontechgroup.com/services/ai-automation-workflows',
    icon: '⚙️'
  },
  {
    id: 'ai-data-analytics-platform',
    name: 'AI Data Analytics & Business Intelligence',
    category: 'ai-services',
    description: 'Advanced AI-powered analytics platform for business intelligence, data visualization, and automated insights.',
    features: [
      'Automated data analysis',
      'Natural language queries',
      'Predictive insights',
      'Anomaly detection',
      'Automated reporting',
      'Interactive dashboards',
      'Data visualization',
      'Real-time analytics'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Faster insights',
      'Automated analysis',
      'Better decision making',
      'Reduced manual work'
    ],
    useCases: [
      'Business intelligence',
      'Financial analysis',
      'Marketing analytics',
      'Operations monitoring',
      'Performance tracking'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow', 'D3.js'],
    link: 'https://ziontechgroup.com/services/ai-data-analytics-platform',
    icon: '📊'
  },
  {
    id: 'ai-chatbot-voice-assistant',
    name: 'AI Chatbot & Voice Assistant Development',
    category: 'ai-services',
    description: 'Advanced conversational AI solutions including chatbots, voice assistants, and virtual agents.',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Voice recognition',
      'Context awareness',
      'Integration with business systems',
      'Analytics & insights',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales assistance',
      'Appointment booking',
      'FAQ handling',
      'Voice commands'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'Amazon Lex', 'Azure Bot', 'WebRTC', 'Speech APIs'],
    link: 'https://ziontechgroup.com/services/ai-chatbot-voice-assistant',
    icon: '🤖'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection & Security',
    category: 'ai-services',
    description: 'Advanced AI-powered fraud detection and security systems to protect against financial crimes and cyber threats.',
    features: [
      'Real-time fraud detection',
      'Anomaly detection',
      'Risk scoring',
      'Behavioral analysis',
      'Transaction monitoring',
      'Identity verification',
      'Threat intelligence',
      'Automated response'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Reduced fraud losses',
      'Real-time protection',
      'Improved accuracy',
      'Compliance adherence'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies',
      'Gaming platforms'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Apache Kafka', 'Redis', 'Elasticsearch', 'MLflow'],
    link: 'https://ziontechgroup.com/services/ai-fraud-detection',
    icon: '🛡️'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation & Safety',
    category: 'ai-services',
    description: 'Intelligent content moderation system using AI to automatically detect and filter inappropriate content.',
    features: [
      'Text content analysis',
      'Image & video moderation',
      'Hate speech detection',
      'Spam filtering',
      'Age-appropriate content',
      'Real-time processing',
      'Custom policy enforcement',
      'Human review integration'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Automated content filtering',
      'Reduced manual moderation',
      'Consistent policy enforcement',
      'Improved user safety'
    ],
    useCases: [
      'Social media platforms',
      'Online communities',
      'E-commerce marketplaces',
      'Educational platforms',
      'Gaming communities'
    ],
    technologies: ['OpenAI', 'Google Vision API', 'AWS Rekognition', 'TensorFlow', 'NLP', 'Computer Vision'],
    link: 'https://ziontechgroup.com/services/ai-content-moderation',
    icon: '🔍'
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    category: 'ai-services',
    description: 'AI-powered supply chain optimization for demand forecasting, inventory management, and logistics optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Reduced inventory costs',
      'Improved efficiency',
      'Better demand planning',
      'Risk mitigation'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'Food & beverage industry',
      'Pharmaceutical companies'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Optimization algorithms', 'IoT', 'Blockchain'],
    link: 'https://ziontechgroup.com/services/ai-supply-chain-optimization',
    icon: '🚚'
  },
  {
    id: 'ai-process-automation',
    name: 'AI Process Automation',
    category: 'ai-services',
    description: 'Intelligent process automation using AI to streamline business operations and reduce manual work.',
    features: [
      'Process analysis',
      'RPA implementation',
      'AI decision making',
      'Workflow automation',
      'Integration with existing systems',
      'Performance monitoring'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Improve accuracy',
      'Faster processing',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Data entry automation',
      'Report generation'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR'],
    link: 'https://ziontechgroup.com/services/ai-automation',
    icon: '🤖'
  },
  {
    id: 'ai-analytics-platform',
    name: 'AI Analytics Platform',
    category: 'ai-services',
    description: 'Advanced analytics platform powered by AI for deep business insights and predictive analytics.',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Real-time dashboards',
      'Automated reporting',
      'Anomaly detection',
      'Custom alerts'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Predictive insights',
      'Real-time monitoring',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Risk assessment',
      'Performance monitoring'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-analytics',
    icon: '📈'
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    category: 'ai-services',
    description: 'Custom AI chatbot development for customer service, sales, and internal communication.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales qualification',
      'Appointment booking',
      'FAQ handling'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'React', 'Node.js', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/ai-chatbot',
    icon: '💬'
  },

  // Additional Micro SaaS Services
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Advanced social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & insights',
      'Team collaboration',
      'Content calendar'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Save 10+ hours per week',
      'Increase engagement by 40%',
      'Consistent brand presence',
      'Data-driven content strategy'
    ],
    useCases: [
      'Marketing agencies',
      'Small businesses',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'expense-tracker',
    name: 'Smart Expense Tracker',
    category: 'micro-saas',
    description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
    features: [
      'Receipt scanning with OCR',
      'Automatic categorization',
      'Multi-currency support',
      'Tax preparation',
      'Team expense management',
      'Mobile app'
    ],
    pricing: {
      starter: 12,
      professional: 35,
      enterprise: 95,
      currency: 'USD'
    },
    benefits: [
      'Reduce expense processing time by 80%',
      'Accurate tax deductions',
      'Real-time expense insights',
      'Compliance with regulations'
    ],
    useCases: [
      'Small businesses',
      'Freelancers',
      'Sales teams',
      'Remote workers'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'OCR'],
    link: 'https://ziontechgroup.com/services/expense-tracker',
    icon: '💰'
  },
  {
    id: 'lead-scoring-platform',
    name: 'AI Lead Scoring Platform',
    category: 'micro-saas',
    description: 'Intelligent lead scoring system that uses AI to identify and prioritize high-value prospects.',
    features: [
      'AI-powered lead scoring',
      'Behavioral tracking',
      'CRM integration',
      'Custom scoring models',
      'Real-time alerts',
      'Performance analytics'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Increase conversion rates by 35%',
      'Focus on high-value leads',
      'Automated lead qualification',
      'Better sales efficiency'
    ],
    useCases: [
      'Sales teams',
      'Marketing agencies',
      'B2B companies',
      'Lead generation services'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/lead-scoring',
    icon: '🎯'
  },
  {
    id: 'time-tracking-analytics',
    name: 'Time Tracking Analytics Pro',
    category: 'micro-saas',
    description: 'Advanced time tracking with productivity analytics, project insights, and team performance metrics.',
    features: [
      'Automatic time tracking',
      'Productivity analytics',
      'Project profitability analysis',
      'Team performance metrics',
      'Client billing integration',
      'Mobile time tracking'
    ],
    pricing: {
      starter: 8,
      professional: 25,
      enterprise: 65,
      currency: 'USD'
    },
    benefits: [
      'Increase billable hours by 25%',
      'Better project profitability',
      'Improved team productivity',
      'Accurate client billing'
    ],
    useCases: [
      'Consulting firms',
      'Freelancers',
      'Remote teams',
      'Project-based businesses'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Comprehensive email marketing platform with advanced automation, segmentation, and personalization.',
    features: [
      'Drag-and-drop email builder',
      'Advanced automation workflows',
      'Behavioral segmentation',
      'A/B testing',
      'Deliverability optimization',
      'Analytics & reporting'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Increase email ROI by 300%',
      'Automated customer journeys',
      'Personalized messaging',
      'Better deliverability rates'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Content creators'
    ],
    technologies: ['React', 'Node.js', 'Redis', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/email-marketing',
    icon: '📧'
  },
  {
    id: 'website-speed-optimizer',
    name: 'Website Speed Optimizer',
    category: 'micro-saas',
    description: 'AI-powered website performance optimization tool that automatically improves loading speeds and Core Web Vitals.',
    features: [
      'Automatic image optimization',
      'Code minification',
      'CDN integration',
      'Core Web Vitals monitoring',
      'Performance reports',
      'One-click optimization'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Improve page speed by 60%',
      'Better SEO rankings',
      'Reduced bounce rates',
      'Improved user experience'
    ],
    useCases: [
      'Website owners',
      'Digital agencies',
      'E-commerce sites',
      'Content websites'
    ],
    technologies: ['AI Optimization', 'CDN', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/speed-optimizer',
    icon: '⚡'
  },
  {
    id: 'api-monitoring-platform',
    name: 'API Monitoring Platform',
    category: 'micro-saas',
    description: 'Comprehensive API monitoring and testing platform with real-time alerts and performance analytics.',
    features: [
      'Real-time API monitoring',
      'Automated testing',
      'Performance analytics',
      'Uptime monitoring',
      'Error tracking',
      'SLA monitoring'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      '99.9% API uptime',
      'Faster issue resolution',
      'Better user experience',
      'Proactive monitoring'
    ],
    useCases: [
      'API developers',
      'SaaS companies',
      'Mobile app developers',
      'Enterprise applications'
    ],
    technologies: ['Node.js', 'MongoDB', 'Monitoring APIs', 'React'],
    link: 'https://ziontechgroup.com/services/api-monitoring',
    icon: '🔍'
  },
  {
    id: 'password-manager-business',
    name: 'Business Password Manager',
    category: 'micro-saas',
    description: 'Enterprise-grade password management solution with team sharing, security policies, and audit trails.',
    features: [
      'Secure password storage',
      'Team password sharing',
      'Security policies',
      'Audit trails',
      'SSO integration',
      'Mobile apps'
    ],
    pricing: {
      starter: 3,
      professional: 8,
      enterprise: 20,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Reduced password-related breaches',
      'Centralized access management',
      'Compliance with security standards'
    ],
    useCases: [
      'Small businesses',
      'Remote teams',
      'IT departments',
      'Security-conscious organizations'
    ],
    technologies: ['Encryption', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/password-manager',
    icon: '🔐'
  },
  {
    id: 'form-builder-platform',
    name: 'Advanced Form Builder',
    category: 'micro-saas',
    description: 'Powerful form builder with conditional logic, payment integration, and advanced analytics.',
    features: [
      'Drag-and-drop builder',
      'Conditional logic',
      'Payment integration',
      'Multi-step forms',
      'Analytics dashboard',
      'API access'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Increase form conversions by 40%',
      'Reduce form abandonment',
      'Streamlined data collection',
      'Better user experience'
    ],
    useCases: [
      'Lead generation',
      'Event registration',
      'Customer feedback',
      'Order processing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment APIs'],
    link: 'https://ziontechgroup.com/services/form-builder',
    icon: '📋'
  },
  {
    id: 'screenshot-api-service',
    name: 'Screenshot API Service',
    category: 'micro-saas',
    description: 'High-performance screenshot API for websites, PDFs, and web applications with advanced customization options.',
    features: [
      'High-quality screenshots',
      'PDF generation',
      'Custom dimensions',
      'Mobile device simulation',
      'Batch processing',
      'API integration'
    ],
    pricing: {
      starter: 20,
      professional: 60,
      enterprise: 160,
      currency: 'USD'
    },
    benefits: [
      'Fast screenshot generation',
      'Scalable infrastructure',
      'Multiple output formats',
      'Developer-friendly API'
    ],
    useCases: [
      'Web development',
      'Quality assurance',
      'Documentation',
      'Social media automation'
    ],
    technologies: ['Puppeteer', 'Node.js', 'AWS', 'React'],
    link: 'https://ziontechgroup.com/services/screenshot-api',
    icon: '📸'
  },

  // Additional IT Services
  {
    id: 'kubernetes-orchestration',
    name: 'Kubernetes Orchestration',
    category: 'it-services',
    description: 'Complete Kubernetes setup, management, and optimization for containerized applications.',
    features: [
      'Cluster setup & configuration',
      'Auto-scaling implementation',
      'Service mesh integration',
      'Monitoring & logging',
      'Security hardening',
      'Disaster recovery'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Improved application reliability',
      'Automatic scaling',
      'Reduced infrastructure costs',
      'Better resource utilization'
    ],
    useCases: [
      'Microservices architecture',
      'Cloud-native applications',
      'High-traffic websites',
      'Enterprise applications'
    ],
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Istio'],
    link: 'https://ziontechgroup.com/services/kubernetes',
    icon: '☸️'
  },
  {
    id: 'api-gateway-setup',
    name: 'API Gateway & Management',
    category: 'it-services',
    description: 'Enterprise API gateway setup with rate limiting, authentication, monitoring, and analytics.',
    features: [
      'API gateway configuration',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API versioning',
      'Analytics & monitoring',
      'Developer portal'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Better performance',
      'Simplified integration'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Enterprise systems'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Nginx'],
    link: 'https://ziontechgroup.com/services/api-gateway',
    icon: '🚪'
  },
  {
    id: 'database-optimization',
    name: 'Database Performance Optimization',
    category: 'it-services',
    description: 'Comprehensive database optimization including query tuning, indexing, and performance monitoring.',
    features: [
      'Query performance analysis',
      'Index optimization',
      'Database tuning',
      'Performance monitoring',
      'Backup optimization',
      'Scaling strategies'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster query execution',
      'Reduced resource usage',
      'Better scalability',
      'Improved user experience'
    ],
    useCases: [
      'High-traffic applications',
      'Data-intensive systems',
      'E-commerce platforms',
      'Analytics systems'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
  },
  {
    id: 'network-security-audit',
    name: 'Network Security Audit',
    category: 'it-services',
    description: 'Comprehensive network security assessment including penetration testing and vulnerability scanning.',
    features: [
      'Network vulnerability scanning',
      'Penetration testing',
      'Firewall configuration review',
      'Wireless security audit',
      'Compliance assessment',
      'Security recommendations'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with standards',
      'Protect against threats',
      'Improve security posture'
    ],
    useCases: [
      'Corporate networks',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Nessus', 'Metasploit', 'Wireshark', 'Burp Suite'],
    link: 'https://ziontechgroup.com/services/network-security',
    icon: '🛡️'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery Planning',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    features: [
      'Business impact analysis',
      'Recovery time objectives',
      'Backup strategy design',
      'Failover implementation',
      'Testing & validation',
      'Documentation & training'
    ],
    pricing: {
      starter: 7000,
      professional: 20000,
      enterprise: 60000,
      currency: 'USD'
    },
    benefits: [
      'Minimize downtime',
      'Protect critical data',
      'Ensure business continuity',
      'Compliance requirements'
    ],
    useCases: [
      'Enterprise systems',
      'Critical applications',
      'Data centers',
      'Cloud infrastructure'
    ],
    technologies: ['AWS', 'Azure', 'VMware', 'Veeam', 'Commvault'],
    link: 'https://ziontechgroup.com/services/disaster-recovery',
    icon: '🔄'
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices Architecture Design',
    category: 'it-services',
    description: 'Complete microservices architecture design and implementation for scalable applications.',
    features: [
      'Architecture design',
      'Service decomposition',
      'API design',
      'Container orchestration',
      'Service mesh implementation',
      'Monitoring setup'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Better maintainability',
      'Faster development',
      'Technology flexibility'
    ],
    useCases: [
      'Legacy system modernization',
      'High-scale applications',
      'Multi-team development',
      'Cloud-native applications'
    ],
    technologies: ['Docker', 'Kubernetes', 'Istio', 'gRPC', 'Redis'],
    link: 'https://ziontechgroup.com/services/microservices',
    icon: '🏗️'
  },
  {
    id: 'performance-monitoring',
    name: 'Application Performance Monitoring',
    category: 'it-services',
    description: 'Comprehensive APM solution with real-time monitoring, alerting, and performance optimization.',
    features: [
      'Real-time performance monitoring',
      'Error tracking & alerting',
      'User experience monitoring',
      'Infrastructure monitoring',
      'Custom dashboards',
      'Performance optimization'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Proactive issue detection',
      'Improved application performance',
      'Better user experience',
      'Reduced downtime'
    ],
    useCases: [
      'Web applications',
      'Mobile apps',
      'API services',
      'Enterprise systems'
    ],
    technologies: ['New Relic', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack'],
    link: 'https://ziontechgroup.com/services/apm',
    icon: '📊'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management',
    category: 'it-services',
    description: 'Enterprise IAM solution with SSO, multi-factor authentication, and role-based access control.',
    features: [
      'Single Sign-On (SSO)',
      'Multi-factor authentication',
      'Role-based access control',
      'User provisioning',
      'Audit & compliance',
      'API security'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 40000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Simplified user management',
      'Compliance adherence',
      'Reduced IT overhead'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Okta', 'Azure AD', 'Auth0', 'SAML', 'OAuth'],
    link: 'https://ziontechgroup.com/services/iam',
    icon: '👤'
  },

  // Additional AI Services
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Custom computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection',
      'Facial recognition',
      'OCR & text extraction',
      'Quality inspection',
      'Real-time processing'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Improved accuracy',
      'Cost reduction',
      '24/7 operation'
    ],
    useCases: [
      'Manufacturing quality control',
      'Retail analytics',
      'Security surveillance',
      'Medical imaging'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'YOLO', 'PyTorch', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
    features: [
      'Text classification',
      'Sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Question answering'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Improved content management',
      'Multilingual support'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Document processing',
      'Chatbot enhancement'
    ],
    technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
    link: 'https://ziontechgroup.com/services/nlp',
    icon: '📝'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    category: 'ai-services',
    description: 'Advanced predictive analytics using machine learning for forecasting and trend analysis.',
    features: [
      'Demand forecasting',
      'Risk assessment',
      'Customer behavior prediction',
      'Market trend analysis',
      'Anomaly detection',
      'Real-time predictions'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Reduced risks',
      'Improved efficiency',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Sales forecasting',
      'Maintenance scheduling'
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'Python', 'Apache Spark'],
    link: 'https://ziontechgroup.com/services/predictive-analytics',
    icon: '🔮'
  },
  {
    id: 'recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation system for personalized content, products, and services.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendations',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Better user experience',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Content platforms',
      'Social media'
    ],
    technologies: ['TensorFlow', 'Apache Spark', 'Redis', 'Python', 'MLlib'],
    link: 'https://ziontechgroup.com/services/recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-powered-search',
    name: 'AI-Powered Search Engine',
    category: 'ai-services',
    description: 'Intelligent search solution with semantic understanding, auto-complete, and personalized results.',
    features: [
      'Semantic search',
      'Auto-complete suggestions',
      'Personalized results',
      'Multi-language support',
      'Voice search',
      'Search analytics'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Better search accuracy',
      'Improved user experience',
      'Increased engagement',
      'Reduced bounce rates'
    ],
    useCases: [
      'E-commerce search',
      'Document management',
      'Knowledge bases',
      'Content platforms'
    ],
    technologies: ['Elasticsearch', 'BERT', 'Vector Search', 'Python', 'React'],
    link: 'https://ziontechgroup.com/services/ai-search',
    icon: '🔍'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    category: 'ai-services',
    description: 'Automated content moderation using AI to detect and filter inappropriate content across platforms.',
    features: [
      'Text content filtering',
      'Image content detection',
      'Video content analysis',
      'Real-time moderation',
      'Custom policy enforcement',
      'Human review integration'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 content monitoring',
      'Reduced moderation costs',
      'Consistent policy enforcement',
      'Scalable solution'
    ],
    useCases: [
      'Social media platforms',
      'User-generated content',
      'Online communities',
      'Marketplace platforms'
    ],
    technologies: ['Computer Vision', 'NLP', 'TensorFlow', 'OpenCV', 'Python'],
    link: 'https://ziontechgroup.com/services/content-moderation',
    icon: '🛡️'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection System',
    category: 'ai-services',
    description: 'Advanced fraud detection using machine learning to identify and prevent fraudulent activities.',
    features: [
      'Real-time fraud detection',
      'Transaction monitoring',
      'Behavioral analysis',
      'Risk scoring',
      'Alert system',
      'False positive reduction'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduced fraud losses',
      'Faster detection',
      'Lower false positives',
      'Compliance adherence'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies'
    ],
    technologies: ['Machine Learning', 'Anomaly Detection', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/fraud-detection',
    icon: '🚨'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant Development',
    category: 'ai-services',
    description: 'Custom voice assistant development with natural language understanding and multi-platform integration.',
    features: [
      'Voice recognition',
      'Natural language understanding',
      'Multi-platform support',
      'Custom wake words',
      'Integration APIs',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Hands-free operation',
      'Improved accessibility',
      'Enhanced user experience',
      'Multi-language support'
    ],
    useCases: [
      'Smart home automation',
      'Customer service',
      'Healthcare applications',
      'Automotive systems'
    ],
    technologies: ['Speech Recognition', 'NLP', 'WebRTC', 'Python', 'Node.js'],
    link: 'https://ziontechgroup.com/services/voice-assistant',
    icon: '🎤'
  },

  // NEW INNOVATIVE MICRO SAAS SERVICES
  {
    id: 'ai-code-reviewer',
    name: 'AI Code Reviewer Pro',
    category: 'micro-saas',
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and performance issues using advanced AI.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code quality scoring',
      'Integration with GitHub/GitLab',
      'Custom rule configuration',
      'Team collaboration tools',
      'Detailed reporting'
    ],
    pricing: {
      starter: 45,
      professional: 125,
      enterprise: 299,
      currency: 'USD'
    },
    benefits: [
      'Reduce code review time by 70%',
      'Catch bugs before production',
      'Improve code quality standards',
      'Faster development cycles'
    ],
    useCases: [
      'Software development teams',
      'DevOps teams',
      'Code quality assurance',
      'Open source projects'
    ],
    technologies: ['AI/ML', 'Static Analysis', 'React', 'Node.js', 'GitHub API'],
    link: 'https://ziontechgroup.com/services/ai-code-reviewer',
    icon: '🔍'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Security Auditor',
    category: 'micro-saas',
    description: 'Automated smart contract security auditing platform that identifies vulnerabilities and provides remediation suggestions.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Reentrancy attack detection',
      'Access control validation',
      'Integration with popular blockchains',
      'Detailed security reports',
      'Remediation suggestions',
      'Continuous monitoring'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Prevent costly security breaches',
      'Ensure smart contract reliability',
      'Compliance with security standards',
      'Reduce audit costs by 80%'
    ],
    useCases: [
      'DeFi protocols',
      'NFT marketplaces',
      'Blockchain startups',
      'Enterprise blockchain solutions'
    ],
    technologies: ['Solidity', 'AI Analysis', 'Ethereum', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔐'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    category: 'micro-saas',
    description: 'Advanced SEO optimization platform that uses AI to analyze and improve website rankings, content, and technical SEO.',
    features: [
      'AI-powered keyword research',
      'Content optimization suggestions',
      'Technical SEO analysis',
      'Competitor analysis',
      'Ranking tracking',
      'Backlink analysis',
      'Local SEO optimization',
      'Performance reporting'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Increase organic traffic by 150%',
      'Improve search rankings',
      'Automated SEO optimization',
      'Competitive advantage'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Local businesses'
    ],
    technologies: ['AI/ML', 'SEO APIs', 'React', 'Node.js', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-seo-optimizer',
    icon: '📈'
  },
  {
    id: 'blockchain-analytics-platform',
    name: 'Blockchain Analytics Platform',
    category: 'micro-saas',
    description: 'Comprehensive blockchain analytics platform for tracking transactions, analyzing DeFi protocols, and monitoring crypto markets.',
    features: [
      'Real-time transaction tracking',
      'DeFi protocol analysis',
      'Market sentiment analysis',
      'Portfolio tracking',
      'Risk assessment tools',
      'Custom alerts',
      'API integration',
      'Advanced reporting'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Make informed investment decisions',
      'Track portfolio performance',
      'Identify market opportunities',
      'Risk management'
    ],
    useCases: [
      'Crypto investors',
      'DeFi protocols',
      'Financial institutions',
      'Blockchain researchers'
    ],
    technologies: ['Blockchain APIs', 'React', 'Node.js', 'Web3', 'Analytics'],
    link: 'https://ziontechgroup.com/services/blockchain-analytics',
    icon: '⛓️'
  },
  {
    id: 'ai-video-editor',
    name: 'AI Video Editor Pro',
    category: 'micro-saas',
    description: 'Intelligent video editing platform that uses AI to automatically edit, enhance, and optimize videos for different platforms.',
    features: [
      'Automated video editing',
      'AI-powered scene detection',
      'Auto-subtitle generation',
      'Background removal',
      'Color correction',
      'Multi-platform optimization',
      'Template library',
      'Collaboration tools'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Reduce editing time by 80%',
      'Professional-quality results',
      'Multi-platform optimization',
      'Cost-effective video production'
    ],
    useCases: [
      'Content creators',
      'Marketing agencies',
      'Social media managers',
      'E-learning platforms'
    ],
    technologies: ['AI/ML', 'Video Processing', 'React', 'Node.js', 'FFmpeg'],
    link: 'https://ziontechgroup.com/services/ai-video-editor',
    icon: '🎬'
  },
  {
    id: 'quantum-computing-simulator',
    name: 'Quantum Computing Simulator',
    category: 'micro-saas',
    description: 'Cloud-based quantum computing simulator for researchers, developers, and students to experiment with quantum algorithms.',
    features: [
      'Quantum circuit simulator',
      'Multiple quantum gates',
      'Algorithm visualization',
      'Performance benchmarking',
      'Educational resources',
      'API access',
      'Collaboration tools',
      'Export capabilities'
    ],
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799,
      currency: 'USD'
    },
    benefits: [
      'Access to quantum computing',
      'Educational and research tool',
      'Cost-effective quantum development',
      'No hardware requirements'
    ],
    useCases: [
      'Quantum researchers',
      'Educational institutions',
      'Quantum algorithm developers',
      'Technology companies'
    ],
    technologies: ['Quantum Computing', 'Python', 'React', 'Node.js', 'WebGL'],
    link: 'https://ziontechgroup.com/services/quantum-simulator',
    icon: '⚛️'
  },
  {
    id: 'ai-translation-platform',
    name: 'AI Translation Platform Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered translation platform supporting 100+ languages with context-aware translations and real-time processing.',
    features: [
      '100+ language support',
      'Context-aware translation',
      'Real-time translation',
      'Document translation',
      'Website localization',
      'API integration',
      'Translation memory',
      'Quality assurance tools'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 159,
      currency: 'USD'
    },
    benefits: [
      'Accurate translations',
      'Faster localization',
      'Cost-effective translation',
      'Global market expansion'
    ],
    useCases: [
      'E-commerce businesses',
      'Content creators',
      'Software companies',
      'Educational platforms'
    ],
    technologies: ['AI/ML', 'NLP', 'React', 'Node.js', 'Translation APIs'],
    link: 'https://ziontechgroup.com/services/ai-translation',
    icon: '🌐'
  },
  {
    id: 'iot-device-manager',
    name: 'IoT Device Management Platform',
    category: 'micro-saas',
    description: 'Comprehensive IoT device management platform for monitoring, controlling, and analyzing connected devices.',
    features: [
      'Device registration & provisioning',
      'Real-time monitoring',
      'Remote device control',
      'Data analytics dashboard',
      'Alert management',
      'Firmware updates',
      'Security management',
      'API integration'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 329,
      currency: 'USD'
    },
    benefits: [
      'Centralized device management',
      'Improved operational efficiency',
      'Predictive maintenance',
      'Cost optimization'
    ],
    useCases: [
      'Smart home automation',
      'Industrial IoT',
      'Smart cities',
      'Healthcare monitoring'
    ],
    technologies: ['IoT Protocols', 'React', 'Node.js', 'MQTT', 'Time Series DB'],
    link: 'https://ziontechgroup.com/services/iot-device-manager',
    icon: '📡'
  },
  {
    id: 'ai-data-labeling-platform',
    name: 'AI Data Labeling Platform',
    category: 'micro-saas',
    description: 'Intelligent data labeling platform that uses AI to automate and accelerate the data annotation process for machine learning.',
    features: [
      'Automated data labeling',
      'Human-in-the-loop validation',
      'Quality assurance tools',
      'Multi-format support',
      'Team collaboration',
      'Progress tracking',
      'API integration',
      'Export capabilities'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Reduce labeling time by 60%',
      'Improve data quality',
      'Cost-effective annotation',
      'Faster ML model development'
    ],
    useCases: [
      'Machine learning teams',
      'AI startups',
      'Data science companies',
      'Research institutions'
    ],
    technologies: ['AI/ML', 'Computer Vision', 'React', 'Node.js', 'Annotation Tools'],
    link: 'https://ziontechgroup.com/services/ai-data-labeling',
    icon: '🏷️'
  },
  {
    id: 'cybersecurity-threat-monitor',
    name: 'Cybersecurity Threat Monitor',
    category: 'micro-saas',
    description: 'Real-time cybersecurity threat monitoring platform that detects and alerts on potential security breaches and vulnerabilities.',
    features: [
      'Real-time threat detection',
      'Vulnerability scanning',
      'Security incident alerts',
      'Compliance monitoring',
      'Risk assessment',
      'Incident response tools',
      'Security reporting',
      'Integration with security tools'
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 399,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Reduced security risks',
      'Compliance adherence',
      'Faster incident response'
    ],
    useCases: [
      'Small to medium businesses',
      'IT departments',
      'Security teams',
      'Compliance officers'
    ],
    technologies: ['Security APIs', 'Threat Intelligence', 'React', 'Node.js', 'Monitoring'],
    link: 'https://ziontechgroup.com/services/cybersecurity-monitor',
    icon: '🛡️'
  },
  {
    id: 'ai-customer-insights',
    name: 'AI Customer Insights Platform',
    category: 'micro-saas',
    description: 'Advanced customer analytics platform that uses AI to analyze customer behavior, predict churn, and optimize customer experience.',
    features: [
      'Customer behavior analysis',
      'Churn prediction',
      'Sentiment analysis',
      'Customer segmentation',
      'Lifetime value prediction',
      'Personalization recommendations',
      'Real-time insights',
      'Integration with CRM systems'
    ],
    pricing: {
      starter: 69,
      professional: 179,
      enterprise: 449,
      currency: 'USD'
    },
    benefits: [
      'Reduce customer churn by 30%',
      'Increase customer lifetime value',
      'Improve customer satisfaction',
      'Data-driven decisions'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Retail chains',
      'Subscription services'
    ],
    technologies: ['AI/ML', 'Analytics', 'React', 'Node.js', 'Customer Data'],
    link: 'https://ziontechgroup.com/services/ai-customer-insights',
    icon: '👥'
  },
  {
    id: 'smart-energy-monitor',
    name: 'Smart Energy Monitoring Platform',
    category: 'micro-saas',
    description: 'Intelligent energy monitoring and optimization platform for businesses to track, analyze, and reduce energy consumption.',
    features: [
      'Real-time energy monitoring',
      'Consumption analytics',
      'Cost optimization',
      'Carbon footprint tracking',
      'Predictive maintenance',
      'Energy efficiency recommendations',
      'Reporting dashboard',
      'IoT device integration'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce energy costs by 25%',
      'Improve sustainability',
      'Predictive maintenance',
      'Compliance reporting'
    ],
    useCases: [
      'Manufacturing companies',
      'Office buildings',
      'Retail chains',
      'Healthcare facilities'
    ],
    technologies: ['IoT', 'Energy APIs', 'React', 'Node.js', 'Analytics'],
    link: 'https://ziontechgroup.com/services/smart-energy-monitor',
    icon: '⚡'
  },
  {
    id: 'ai-content-moderation-saas',
    name: 'AI Content Moderation SaaS',
    category: 'micro-saas',
    description: 'Automated content moderation platform that uses AI to detect and filter inappropriate content across text, images, and videos.',
    features: [
      'Multi-modal content analysis',
      'Real-time moderation',
      'Custom policy configuration',
      'Human review workflow',
      'API integration',
      'Analytics dashboard',
      'Compliance reporting',
      'Multi-language support'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 329,
      currency: 'USD'
    },
    benefits: [
      'Reduce moderation costs by 70%',
      '24/7 content monitoring',
      'Consistent policy enforcement',
      'Scalable solution'
    ],
    useCases: [
      'Social media platforms',
      'Online communities',
      'E-commerce marketplaces',
      'Educational platforms'
    ],
    technologies: ['AI/ML', 'Computer Vision', 'NLP', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-content-moderation-saas',
    icon: '🔍'
  },
  {
    id: 'blockchain-nft-marketplace',
    name: 'NFT Marketplace Builder',
    category: 'micro-saas',
    description: 'Complete NFT marketplace solution with smart contracts, payment processing, and user management for creators and collectors.',
    features: [
      'Smart contract deployment',
      'NFT minting tools',
      'Auction functionality',
      'Payment processing',
      'User management',
      'Analytics dashboard',
      'Mobile app support',
      'Multi-blockchain support'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Launch NFT marketplace quickly',
      'Revenue sharing model',
      'Multi-blockchain support',
      'Professional-grade security'
    ],
    useCases: [
      'Digital artists',
      'Gaming companies',
      'Brands and creators',
      'Collectors and investors'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'React', 'Node.js', 'Web3'],
    link: 'https://ziontechgroup.com/services/nft-marketplace-builder',
    icon: '🎨'
  },
  {
    id: 'ai-voice-cloning-platform',
    name: 'AI Voice Cloning Platform',
    category: 'micro-saas',
    description: 'Advanced voice cloning platform that creates realistic voice replicas for content creation, accessibility, and entertainment.',
    features: [
      'High-quality voice cloning',
      'Multiple voice models',
      'Text-to-speech synthesis',
      'Voice customization',
      'API integration',
      'Real-time processing',
      'Multi-language support',
      'Ethical usage controls'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Create realistic voice content',
      'Accessibility solutions',
      'Content creation efficiency',
      'Multi-language support'
    ],
    useCases: [
      'Content creators',
      'Accessibility services',
      'Entertainment industry',
      'Educational platforms'
    ],
    technologies: ['AI/ML', 'Speech Synthesis', 'React', 'Node.js', 'Audio Processing'],
    link: 'https://ziontechgroup.com/services/ai-voice-cloning',
    icon: '🎤'
  },

  // NEW CUTTING-EDGE IT SERVICES
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure Setup',
    category: 'it-services',
    description: 'Complete quantum computing infrastructure setup on cloud platforms with quantum algorithm development and optimization.',
    features: [
      'Quantum cloud platform setup',
      'Quantum algorithm development',
      'Quantum circuit optimization',
      'Hybrid classical-quantum systems',
      'Quantum error correction',
      'Performance benchmarking',
      'Security implementation',
      'Training and documentation'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Access to quantum computing power',
      'Competitive advantage in research',
      'Future-proof technology investment',
      'Advanced problem-solving capabilities'
    ],
    useCases: [
      'Research institutions',
      'Financial services',
      'Pharmaceutical companies',
      'Technology corporations'
    ],
    technologies: ['IBM Quantum', 'Google Quantum', 'Azure Quantum', 'Qiskit', 'Cirq'],
    link: 'https://ziontechgroup.com/services/quantum-cloud-infrastructure',
    icon: '⚛️'
  },
  {
    id: 'edge-computing-architecture',
    name: 'Edge Computing Architecture Design',
    category: 'it-services',
    description: 'Comprehensive edge computing architecture design and implementation for low-latency, high-performance applications.',
    features: [
      'Edge infrastructure design',
      'Latency optimization',
      'Data processing at edge',
      'IoT device integration',
      '5G network optimization',
      'Security implementation',
      'Monitoring and management',
      'Scalability planning'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency processing',
      'Reduced bandwidth costs',
      'Improved user experience',
      'Enhanced data privacy'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial IoT',
      'Smart cities',
      'Real-time gaming'
    ],
    technologies: ['Kubernetes', 'Docker', '5G', 'IoT', 'Edge Computing'],
    link: 'https://ziontechgroup.com/services/edge-computing-architecture',
    icon: '🌐'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Complete zero trust security architecture implementation with identity verification, micro-segmentation, and continuous monitoring.',
    features: [
      'Identity and access management',
      'Network micro-segmentation',
      'Continuous verification',
      'Least privilege access',
      'Threat detection and response',
      'Compliance automation',
      'Security analytics',
      'Incident response automation'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance adherence',
      'Automated threat response'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare systems',
      'Financial institutions'
    ],
    technologies: ['Okta', 'Palo Alto', 'Cisco', 'Microsoft', 'Security Tools'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔒'
  },
  {
    id: 'aiops-platform-implementation',
    name: 'AIOps Platform Implementation',
    category: 'it-services',
    description: 'Advanced AIOps platform implementation for intelligent IT operations, automated incident response, and predictive maintenance.',
    features: [
      'Intelligent monitoring',
      'Automated incident response',
      'Predictive maintenance',
      'Root cause analysis',
      'Performance optimization',
      'Capacity planning',
      'Cost optimization',
      'Service level management'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 140000,
      currency: 'USD'
    },
    benefits: [
      'Reduced downtime',
      'Proactive issue resolution',
      'Improved operational efficiency',
      'Cost optimization'
    ],
    useCases: [
      'Enterprise IT operations',
      'Cloud service providers',
      'Managed service providers',
      'Large-scale applications'
    ],
    technologies: ['Machine Learning', 'Monitoring Tools', 'Automation', 'Analytics'],
    link: 'https://ziontechgroup.com/services/aiops-platform',
    icon: '🤖'
  },
  {
    id: 'blockchain-infrastructure-setup',
    name: 'Enterprise Blockchain Infrastructure',
    category: 'it-services',
    description: 'Complete enterprise blockchain infrastructure setup with private networks, smart contracts, and integration services.',
    features: [
      'Private blockchain network setup',
      'Smart contract development',
      'Consensus mechanism configuration',
      'Node management',
      'Security implementation',
      'Integration with existing systems',
      'Performance optimization',
      'Monitoring and maintenance'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced data security',
      'Transparent transactions',
      'Reduced intermediaries',
      'Improved trust and compliance'
    ],
    useCases: [
      'Supply chain management',
      'Financial services',
      'Healthcare systems',
      'Government services'
    ],
    technologies: ['Hyperledger', 'Ethereum', 'Corda', 'Blockchain', 'Smart Contracts'],
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    icon: '⛓️'
  },
  {
    id: 'green-cloud-optimization',
    name: 'Green Cloud Optimization',
    category: 'it-services',
    description: 'Sustainable cloud infrastructure optimization focusing on carbon footprint reduction and energy efficiency.',
    features: [
      'Carbon footprint assessment',
      'Energy-efficient infrastructure design',
      'Renewable energy integration',
      'Resource optimization',
      'Sustainability reporting',
      'Green computing practices',
      'Cost-benefit analysis',
      'Compliance with environmental standards'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 95000,
      currency: 'USD'
    },
    benefits: [
      'Reduced carbon footprint',
      'Lower energy costs',
      'Environmental compliance',
      'Corporate sustainability goals'
    ],
    useCases: [
      'Environmentally conscious companies',
      'Government organizations',
      'Educational institutions',
      'Large enterprises'
    ],
    technologies: ['Green Computing', 'Cloud Optimization', 'Sustainability', 'Analytics'],
    link: 'https://ziontechgroup.com/services/green-cloud-optimization',
    icon: '🌱'
  },
  {
    id: 'immersive-tech-infrastructure',
    name: 'Immersive Technology Infrastructure',
    category: 'it-services',
    description: 'Complete AR/VR infrastructure setup for immersive experiences, including hardware, software, and cloud services.',
    features: [
      'AR/VR hardware setup',
      'Immersive content development',
      'Cloud rendering services',
      'Spatial computing infrastructure',
      'Multi-user collaboration',
      'Performance optimization',
      'Content delivery networks',
      'Analytics and monitoring'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced user experiences',
      'Competitive advantage',
      'New revenue opportunities',
      'Innovation leadership'
    ],
    useCases: [
      'Training and education',
      'Real estate visualization',
      'Healthcare applications',
      'Entertainment and gaming'
    ],
    technologies: ['AR/VR', 'Unity', 'Unreal Engine', 'Cloud Rendering', 'Spatial Computing'],
    link: 'https://ziontechgroup.com/services/immersive-tech-infrastructure',
    icon: '🥽'
  },
  {
    id: 'autonomous-systems-infrastructure',
    name: 'Autonomous Systems Infrastructure',
    category: 'it-services',
    description: 'Complete infrastructure setup for autonomous systems including robotics, drones, and autonomous vehicles.',
    features: [
      'Autonomous system architecture',
      'Sensor integration',
      'Real-time data processing',
      'Machine learning pipelines',
      'Safety and compliance systems',
      'Remote monitoring',
      'Fleet management',
      'Performance optimization'
    ],
    pricing: {
      starter: 35000,
      professional: 100000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Reduced human intervention',
      'Improved safety',
      'Cost optimization'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial robotics',
      'Drone delivery systems',
      'Smart manufacturing'
    ],
    technologies: ['Robotics', 'AI/ML', 'IoT', 'Computer Vision', 'Autonomous Systems'],
    link: 'https://ziontechgroup.com/services/autonomous-systems-infrastructure',
    icon: '🤖'
  },
  {
    id: 'neuromorphic-computing-setup',
    name: 'Neuromorphic Computing Infrastructure',
    category: 'it-services',
    description: 'Advanced neuromorphic computing infrastructure setup for brain-inspired computing and AI applications.',
    features: [
      'Neuromorphic hardware setup',
      'Spiking neural networks',
      'Low-power computing optimization',
      'Real-time processing',
      'AI algorithm optimization',
      'Performance benchmarking',
      'Integration with existing systems',
      'Research and development support'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low power consumption',
      'Real-time processing capabilities',
      'Advanced AI performance',
      'Future-proof technology'
    ],
    useCases: [
      'Research institutions',
      'AI companies',
      'IoT applications',
      'Edge computing'
    ],
    technologies: ['Neuromorphic Computing', 'Spiking Neural Networks', 'AI/ML', 'Hardware'],
    link: 'https://ziontechgroup.com/services/neuromorphic-computing',
    icon: '🧠'
  },

  // NEW ADVANCED AI SERVICES
  {
    id: 'quantum-ai-algorithms',
    name: 'Quantum AI Algorithm Development',
    category: 'ai-services',
    description: 'Development of quantum machine learning algorithms that leverage quantum computing for superior AI performance.',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Quantum optimization',
      'Hybrid classical-quantum models',
      'Quantum data processing',
      'Performance benchmarking',
      'Algorithm optimization',
      'Integration with quantum hardware'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Exponential speedup potential',
      'Superior optimization capabilities',
      'Advanced pattern recognition',
      'Future-proof AI solutions'
    ],
    useCases: [
      'Financial modeling',
      'Drug discovery',
      'Cryptography',
      'Complex optimization problems'
    ],
    technologies: ['Quantum Computing', 'Machine Learning', 'Qiskit', 'Cirq', 'Quantum ML'],
    link: 'https://ziontechgroup.com/services/quantum-ai-algorithms',
    icon: '⚛️'
  },
  {
    id: 'federated-learning-platform',
    name: 'Federated Learning Platform',
    category: 'ai-services',
    description: 'Privacy-preserving federated learning platform that enables AI model training across distributed data sources.',
    features: [
      'Distributed model training',
      'Privacy-preserving algorithms',
      'Secure aggregation',
      'Differential privacy',
      'Multi-party computation',
      'Model synchronization',
      'Performance monitoring',
      'Compliance management'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Privacy-preserving AI',
      'Regulatory compliance',
      'Distributed data utilization',
      'Enhanced model performance'
    ],
    useCases: [
      'Healthcare AI',
      'Financial services',
      'Cross-organization collaboration',
      'Privacy-sensitive applications'
    ],
    technologies: ['Federated Learning', 'Privacy', 'Distributed Systems', 'AI/ML'],
    link: 'https://ziontechgroup.com/services/federated-learning-platform',
    icon: '🔐'
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI-Powered Drug Discovery',
    category: 'ai-services',
    description: 'Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'ADMET prediction',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing',
      'Synthetic pathway design',
      'Regulatory compliance support'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Faster drug development',
      'Reduced R&D costs',
      'Higher success rates',
      'Personalized medicine'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical research organizations'
    ],
    technologies: ['Deep Learning', 'Molecular Modeling', 'Bioinformatics', 'AI/ML'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Prediction',
    category: 'ai-services',
    description: 'Advanced AI climate modeling platform for weather prediction, climate change analysis, and environmental monitoring.',
    features: [
      'High-resolution weather prediction',
      'Climate change modeling',
      'Environmental impact assessment',
      'Natural disaster prediction',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Real-time monitoring',
      'Policy impact simulation'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 350000,
      currency: 'USD'
    },
    benefits: [
      'Accurate climate predictions',
      'Environmental risk mitigation',
      'Policy decision support',
      'Sustainability optimization'
    ],
    useCases: [
      'Government agencies',
      'Environmental organizations',
      'Energy companies',
      'Insurance companies'
    ],
    technologies: ['Climate Modeling', 'AI/ML', 'Satellite Data', 'Environmental Science'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration Platform',
    category: 'ai-services',
    description: 'AI-powered space exploration platform for satellite data analysis, space mission planning, and astronomical research.',
    features: [
      'Satellite data processing',
      'Space mission optimization',
      'Astronomical object detection',
      'Orbital mechanics simulation',
      'Space weather prediction',
      'Autonomous spacecraft control',
      'Data visualization',
      'Research collaboration tools'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced space mission success',
      'Automated data analysis',
      'Cost-effective exploration',
      'Scientific discovery acceleration'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Research institutions',
      'Private space companies'
    ],
    technologies: ['Space Technology', 'AI/ML', 'Satellite Data', 'Astrophysics'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
  },
  {
    id: 'ai-cybersecurity-defense',
    name: 'AI Cybersecurity Defense System',
    category: 'ai-services',
    description: 'Advanced AI-powered cybersecurity defense system with real-time threat detection, automated response, and predictive security.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Predictive threat modeling',
      'Zero-day attack detection',
      'Security orchestration',
      'Threat intelligence integration',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat prevention',
      'Reduced response time',
      'Advanced threat detection',
      'Automated security operations'
    ],
    useCases: [
      'Enterprise security',
      'Government agencies',
      'Financial institutions',
      'Critical infrastructure'
    ],
    technologies: ['AI/ML', 'Cybersecurity', 'Threat Intelligence', 'Security Automation'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity-defense',
    icon: '🛡️'
  },
  {
    id: 'ai-financial-modeling',
    name: 'AI Financial Modeling & Risk Management',
    category: 'ai-services',
    description: 'Advanced AI financial modeling platform for risk assessment, algorithmic trading, and financial market analysis.',
    features: [
      'Real-time market analysis',
      'Risk assessment models',
      'Algorithmic trading strategies',
      'Portfolio optimization',
      'Fraud detection',
      'Credit scoring',
      'Regulatory compliance',
      'Performance analytics'
    ],
    pricing: {
      starter: 35000,
      professional: 100000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Improved risk management',
      'Enhanced trading performance',
      'Automated compliance',
      'Data-driven decisions'
    ],
    useCases: [
      'Investment banks',
      'Hedge funds',
      'Insurance companies',
      'Fintech startups'
    ],
    technologies: ['Financial AI', 'Machine Learning', 'Quantitative Finance', 'Risk Management'],
    link: 'https://ziontechgroup.com/services/ai-financial-modeling',
    icon: '💰'
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems Development',
    category: 'ai-services',
    description: 'Development of AI-powered autonomous systems for robotics, vehicles, and intelligent automation.',
    features: [
      'Autonomous decision making',
      'Real-time perception',
      'Path planning and navigation',
      'Object recognition',
      'Safety systems',
      'Human-robot interaction',
      'Performance optimization',
      'Integration and testing'
    ],
    pricing: {
      starter: 45000,
      professional: 135000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Reduced human intervention',
      'Improved safety',
      'Cost optimization'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial robotics',
      'Service robots',
      'Smart manufacturing'
    ],
    technologies: ['Autonomous Systems', 'Robotics', 'Computer Vision', 'AI/ML'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems',
    icon: '🤖'
  },
  {
    id: 'ai-metaverse-platform',
    name: 'AI Metaverse Platform Development',
    category: 'ai-services',
    description: 'Complete AI-powered metaverse platform with virtual worlds, avatars, and immersive experiences.',
    features: [
      'Virtual world creation',
      'AI-powered avatars',
      'Natural language interaction',
      'Virtual economy',
      'Social features',
      'Content generation',
      'Cross-platform compatibility',
      'Analytics and insights'
    ],
    pricing: {
      starter: 80000,
      professional: 240000,
      enterprise: 700000,
      currency: 'USD'
    },
    benefits: [
      'Immersive user experiences',
      'New revenue opportunities',
      'Virtual collaboration',
      'Innovation leadership'
    ],
    useCases: [
      'Gaming companies',
      'Educational institutions',
      'Virtual events',
      'Social platforms'
    ],
    technologies: ['Metaverse', 'AI/ML', 'Virtual Reality', 'Blockchain', '3D Graphics'],
    link: 'https://ziontechgroup.com/services/ai-metaverse-platform',
    icon: '🌐'
  },
  {
    id: 'ai-biotech-research',
    name: 'AI Biotechnology Research Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for biotechnology research including genomics, proteomics, and synthetic biology.',
    features: [
      'Genomic data analysis',
      'Protein structure prediction',
      'Synthetic biology design',
      'Drug discovery algorithms',
      'Biomarker identification',
      'Clinical trial optimization',
      'Research collaboration tools',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 70000,
      professional: 210000,
      enterprise: 600000,
      currency: 'USD'
    },
    benefits: [
      'Accelerated research',
      'Improved accuracy',
      'Cost-effective analysis',
      'Innovation acceleration'
    ],
    useCases: [
      'Biotech companies',
      'Research institutions',
      'Pharmaceutical companies',
      'Academic research'
    ],
    technologies: ['Biotechnology', 'AI/ML', 'Genomics', 'Bioinformatics'],
    link: 'https://ziontechgroup.com/services/ai-biotech-research',
    icon: '🧬'
  },
  {
    id: 'ai-energy-optimization',
    name: 'AI Energy Grid Optimization',
    category: 'ai-services',
    description: 'AI-powered energy grid optimization for smart grids, renewable energy integration, and energy efficiency.',
    features: [
      'Smart grid optimization',
      'Renewable energy forecasting',
      'Demand response management',
      'Energy storage optimization',
      'Grid stability analysis',
      'Predictive maintenance',
      'Carbon footprint reduction',
      'Real-time monitoring'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 450000,
      currency: 'USD'
    },
    benefits: [
      'Improved energy efficiency',
      'Reduced carbon footprint',
      'Cost optimization',
      'Grid reliability'
    ],
    useCases: [
      'Utility companies',
      'Energy grid operators',
      'Renewable energy companies',
      'Government agencies'
    ],
    technologies: ['Energy AI', 'Smart Grids', 'Renewable Energy', 'IoT', 'Machine Learning'],
    link: 'https://ziontechgroup.com/services/ai-energy-optimization',
    icon: '⚡'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};