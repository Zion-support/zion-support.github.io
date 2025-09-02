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

  // Additional Innovative Micro SaaS Services
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder Pro',
    category: 'micro-saas',
    description: 'Intelligent email automation that reads, categorizes, and responds to emails using advanced AI, handling simple inquiries and flagging important messages.',
    features: [
      'AI-powered email analysis',
      'Automatic response generation',
      'Priority email flagging',
      'Sentiment analysis',
      'Multi-language support',
      'Custom response templates',
      'Integration with CRM systems',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce email response time by 80%',
      '24/7 email handling',
      'Improved customer satisfaction',
      'Better email organization',
      'Reduced manual workload'
    ],
    useCases: [
      'Customer support teams',
      'Sales departments',
      'Small businesses',
      'Freelancers and consultants'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/ai-email-responder',
    icon: '📧'
  },
  {
    id: 'mobile-survey-platform',
    name: 'Mobile-First Survey Platform',
    category: 'micro-saas',
    description: 'Advanced mobile-optimized survey platform with adaptive questioning, real-time analytics, and AI-powered insights for better data collection.',
    features: [
      'Mobile-first design',
      'Adaptive questioning logic',
      'Real-time analytics',
      'Offline survey capability',
      'Multi-media question types',
      'AI-powered insights',
      'Custom branding',
      'Integration APIs'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      'Increase response rates by 60%',
      'Better data quality',
      'Real-time insights',
      'Mobile-optimized experience',
      'Reduced survey abandonment'
    ],
    useCases: [
      'Market research',
      'Customer feedback',
      'Employee surveys',
      'Event feedback collection'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AI/ML', 'Analytics'],
    link: 'https://ziontechgroup.com/services/mobile-survey-platform',
    icon: '📱'
  },
  {
    id: 'niche-productivity-planner',
    name: 'Industry-Specific Productivity Planner',
    category: 'micro-saas',
    description: 'Specialized productivity planning tool tailored to specific industries with custom dashboards, tools, and AI-powered recommendations.',
    features: [
      'Industry-specific templates',
      'AI-powered goal setting',
      'Custom dashboard creation',
      'Team collaboration tools',
      'Progress tracking',
      'Performance analytics',
      'Integration with industry tools',
      'Mobile app'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Increase productivity by 35%',
      'Industry-specific insights',
      'Better goal achievement',
      'Streamlined workflows',
      'Data-driven decisions'
    ],
    useCases: [
      'Healthcare professionals',
      'Legal firms',
      'Real estate agents',
      'Consulting firms'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Analytics'],
    link: 'https://ziontechgroup.com/services/niche-productivity-planner',
    icon: '📋'
  },
  {
    id: 'event-management-dashboard',
    name: 'Smart Event Management Dashboard',
    category: 'micro-saas',
    description: 'Comprehensive event management platform with ticket sales, guest management, scheduling, and real-time analytics for successful events.',
    features: [
      'Event planning tools',
      'Ticket sales management',
      'Guest registration',
      'Schedule management',
      'Real-time analytics',
      'Payment processing',
      'Mobile check-in',
      'Post-event surveys'
    ],
    pricing: {
      starter: 45,
      professional: 119,
      enterprise: 299,
      currency: 'USD'
    },
    benefits: [
      'Streamline event planning',
      'Increase ticket sales',
      'Better guest experience',
      'Real-time insights',
      'Reduced manual work'
    ],
    useCases: [
      'Conference organizers',
      'Wedding planners',
      'Corporate events',
      'Community organizations'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Analytics'],
    link: 'https://ziontechgroup.com/services/event-management-dashboard',
    icon: '🎪'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Content Optimizer',
    category: 'micro-saas',
    description: 'AI-powered SEO optimization platform that analyzes web pages, provides keyword recommendations, and optimizes content for better search rankings.',
    features: [
      'Real-time SEO analysis',
      'Keyword research and recommendations',
      'Content optimization suggestions',
      'Competitor analysis',
      'Technical SEO audits',
      'Performance tracking',
      'Content scoring',
      'Automated reports'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Improve search rankings by 50%',
      'Increase organic traffic',
      'Better content performance',
      'Automated optimization',
      'Competitive advantage'
    ],
    useCases: [
      'Content creators',
      'Digital marketing agencies',
      'E-commerce businesses',
      'Blog owners'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'SEO APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-seo-optimizer',
    icon: '🔍'
  },
  {
    id: 'ai-talent-matching',
    name: 'AI Talent Matching Platform',
    category: 'micro-saas',
    description: 'Advanced AI-powered talent matching system that connects businesses with the right tech professionals using machine learning algorithms.',
    features: [
      'AI-powered candidate matching',
      'Skills assessment tools',
      'Behavioral analysis',
      'Cultural fit evaluation',
      'Interview scheduling',
      'Performance tracking',
      'Integration with job boards',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 70%',
      'Better candidate matches',
      'Improved retention rates',
      'Cost-effective recruitment',
      'Data-driven hiring decisions'
    ],
    useCases: [
      'Tech companies',
      'Recruitment agencies',
      'HR departments',
      'Startups'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Matching Algorithms'],
    link: 'https://ziontechgroup.com/services/ai-talent-matching',
    icon: '👥'
  },
  {
    id: 'ai-recruiting-platform',
    name: 'AI Recruiting Platform',
    category: 'micro-saas',
    description: 'Intelligent recruitment platform with automated screening, candidate scoring, and streamlined hiring processes for faster, better hires.',
    features: [
      'Automated resume screening',
      'AI candidate scoring',
      'Video interview analysis',
      'Reference checking automation',
      'Job posting optimization',
      'Candidate pipeline management',
      'Diversity and inclusion metrics',
      'Integration with ATS systems'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Reduce time-to-hire by 60%',
      'Improve candidate quality',
      'Eliminate bias in hiring',
      'Streamlined recruitment process',
      'Better candidate experience'
    ],
    useCases: [
      'Enterprise companies',
      'HR departments',
      'Recruitment agencies',
      'Growing startups'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Video Analysis'],
    link: 'https://ziontechgroup.com/services/ai-recruiting-platform',
    icon: '🎯'
  },
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    category: 'micro-saas',
    description: 'Cutting-edge quantum computing applications for optimization, cryptography, and scientific research, positioning businesses at the forefront of innovation.',
    features: [
      'Quantum optimization algorithms',
      'Cryptographic solutions',
      'Scientific simulation tools',
      'Quantum machine learning',
      'Performance benchmarking',
      'Cloud quantum access',
      'Custom algorithm development',
      'Research collaboration tools'
    ],
    pricing: {
      starter: 999,
      professional: 2999,
      enterprise: 9999,
      currency: 'USD'
    },
    benefits: [
      'Exponential computational power',
      'Advanced optimization capabilities',
      'Future-proof technology',
      'Competitive advantage',
      'Research and development edge'
    ],
    useCases: [
      'Financial institutions',
      'Pharmaceutical companies',
      'Research organizations',
      'Government agencies'
    ],
    technologies: ['Quantum Computing', 'Python', 'Qiskit', 'Cirq', 'Quantum Algorithms'],
    link: 'https://ziontechgroup.com/services/quantum-computing-solutions',
    icon: '⚛️'
  },

  // Additional Advanced IT Services
  {
    id: 'edge-computing-solutions',
    name: 'Edge Computing Solutions',
    category: 'it-services',
    description: 'Comprehensive edge computing implementation for reduced latency, improved performance, and enhanced data processing at the network edge.',
    features: [
      'Edge infrastructure setup',
      'Data processing optimization',
      'Latency reduction strategies',
      'Edge security implementation',
      'IoT device management',
      'Real-time analytics',
      'Disaster recovery planning',
      'Performance monitoring'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Reduce latency by 90%',
      'Improved application performance',
      'Better data privacy',
      'Reduced bandwidth costs',
      'Enhanced reliability'
    ],
    useCases: [
      'IoT applications',
      'Real-time gaming',
      'Autonomous vehicles',
      'Smart cities'
    ],
    technologies: ['Kubernetes', 'Docker', 'Edge Computing', '5G', 'IoT'],
    link: 'https://ziontechgroup.com/services/edge-computing-solutions',
    icon: '🌐'
  },
  {
    id: 'blockchain-infrastructure',
    name: 'Blockchain Infrastructure & Development',
    category: 'it-services',
    description: 'Complete blockchain infrastructure setup and smart contract development for secure, decentralized applications and business processes.',
    features: [
      'Blockchain network setup',
      'Smart contract development',
      'DeFi protocol integration',
      'NFT marketplace development',
      'Cryptocurrency wallet integration',
      'Security auditing',
      'Performance optimization',
      'Compliance consulting'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security and transparency',
      'Reduced transaction costs',
      'Improved traceability',
      'Decentralized operations',
      'Future-proof technology'
    ],
    useCases: [
      'Financial services',
      'Supply chain management',
      'Digital identity',
      'Asset tokenization'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'Blockchain'],
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    icon: '⛓️'
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Comprehensive zero trust security implementation with continuous verification, micro-segmentation, and advanced threat protection.',
    features: [
      'Identity verification systems',
      'Micro-segmentation implementation',
      'Continuous monitoring',
      'Threat detection and response',
      'Access control policies',
      'Security analytics',
      'Compliance automation',
      'Incident response planning'
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
      'Better compliance adherence',
      'Improved visibility',
      'Proactive threat protection'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Zero Trust', 'SIEM', 'SOAR', 'Identity Management', 'Network Security'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔒'
  },
  {
    id: '5g-network-implementation',
    name: '5G Network Implementation & Optimization',
    category: 'it-services',
    description: 'Complete 5G network deployment and optimization services for ultra-fast connectivity, low latency, and massive IoT device support.',
    features: [
      '5G network planning and design',
      'Infrastructure deployment',
      'Network optimization',
      'IoT device integration',
      'Edge computing setup',
      'Performance monitoring',
      'Security implementation',
      'Compliance management'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive device support',
      'Enhanced mobile experiences',
      'Future-ready infrastructure'
    ],
    useCases: [
      'Smart cities',
      'Industrial IoT',
      'Autonomous vehicles',
      'Telecommunications'
    ],
    technologies: ['5G', 'Network Infrastructure', 'IoT', 'Edge Computing', 'Telecommunications'],
    link: 'https://ziontechgroup.com/services/5g-network-implementation',
    icon: '📡'
  },
  {
    id: 'hyperautomation-platform',
    name: 'Hyperautomation Platform',
    category: 'it-services',
    description: 'Comprehensive hyperautomation solution combining RPA, AI, and process mining to automate complex business processes end-to-end.',
    features: [
      'Process discovery and mining',
      'RPA implementation',
      'AI-powered decision making',
      'Workflow automation',
      'Integration orchestration',
      'Performance monitoring',
      'Continuous optimization',
      'Change management'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Reduce operational costs by 60%',
      'Improve process efficiency',
      'Eliminate manual errors',
      'Faster process execution',
      'Better resource utilization'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Manufacturing companies',
      'Government agencies'
    ],
    technologies: ['RPA', 'AI/ML', 'Process Mining', 'Workflow Automation', 'Integration'],
    link: 'https://ziontechgroup.com/services/hyperautomation-platform',
    icon: '🤖'
  },

  // Additional Advanced AI Services
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Platform',
    category: 'ai-services',
    description: 'Revolutionary AI-powered drug discovery platform using machine learning to accelerate pharmaceutical research and development.',
    features: [
      'Molecular design and optimization',
      'Drug-target interaction prediction',
      'Toxicity assessment',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing analysis',
      'Patent analysis',
      'Regulatory compliance support'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Reduce drug development time by 50%',
      'Lower R&D costs',
      'Higher success rates',
      'Faster time to market',
      'Improved patient outcomes'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Government health agencies'
    ],
    technologies: ['Deep Learning', 'Molecular AI', 'Bioinformatics', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Prediction',
    category: 'ai-services',
    description: 'Advanced AI climate modeling system for accurate weather prediction, climate change analysis, and environmental impact assessment.',
    features: [
      'Weather pattern prediction',
      'Climate change modeling',
      'Environmental impact analysis',
      'Natural disaster forecasting',
      'Carbon footprint tracking',
      'Renewable energy optimization',
      'Agricultural yield prediction',
      'Risk assessment tools'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Accurate climate predictions',
      'Better disaster preparedness',
      'Environmental sustainability',
      'Cost-effective solutions',
      'Data-driven decisions'
    ],
    useCases: [
      'Government agencies',
      'Environmental organizations',
      'Agricultural companies',
      'Energy sector'
    ],
    technologies: ['Climate AI', 'Machine Learning', 'Satellite Data', 'Python', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration Solutions',
    category: 'ai-services',
    description: 'Cutting-edge AI solutions for space exploration, satellite management, and astronomical research with advanced data analysis capabilities.',
    features: [
      'Satellite orbit optimization',
      'Space debris tracking',
      'Astronomical data analysis',
      'Mission planning automation',
      'Space weather prediction',
      'Planetary exploration support',
      'Communication optimization',
      'Resource management'
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 2000000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced mission success rates',
      'Optimized resource utilization',
      'Improved safety protocols',
      'Advanced data insights',
      'Cost-effective operations'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Research institutions',
      'Defense organizations'
    ],
    technologies: ['Space AI', 'Orbital Mechanics', 'Machine Learning', 'Python', 'Satellite Data'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
  },
  {
    id: 'ai-neuroscience-research',
    name: 'AI Neuroscience Research Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for neuroscience research, brain-computer interfaces, and neurological disorder analysis using cutting-edge machine learning.',
    features: [
      'Brain signal analysis',
      'Neural network modeling',
      'Brain-computer interface development',
      'Neurological disorder detection',
      'Cognitive assessment tools',
      'Treatment optimization',
      'Research data management',
      'Clinical trial support'
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 750000,
      currency: 'USD'
    },
    benefits: [
      'Accelerated research progress',
      'Better treatment outcomes',
      'Improved patient care',
      'Advanced diagnostic capabilities',
      'Research collaboration tools'
    ],
    useCases: [
      'Medical research institutions',
      'Hospitals and clinics',
      'Pharmaceutical companies',
      'Neuroscience laboratories'
    ],
    technologies: ['Neural Networks', 'Brain Imaging', 'Machine Learning', 'Python', 'Medical AI'],
    link: 'https://ziontechgroup.com/services/ai-neuroscience-research',
    icon: '🧠'
  },
  {
    id: 'ai-robotics-automation',
    name: 'AI Robotics & Automation',
    category: 'ai-services',
    description: 'Intelligent robotics solutions with advanced AI for autonomous operations, human-robot collaboration, and industrial automation.',
    features: [
      'Autonomous robot control',
      'Human-robot interaction',
      'Computer vision integration',
      'Predictive maintenance',
      'Quality control automation',
      'Safety monitoring',
      'Performance optimization',
      'Custom robot programming'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Increased productivity',
      'Reduced operational costs',
      'Improved safety',
      '24/7 operations',
      'Consistent quality'
    ],
    useCases: [
      'Manufacturing companies',
      'Warehouse operations',
      'Healthcare facilities',
      'Agricultural operations'
    ],
    technologies: ['Robotics', 'Computer Vision', 'Machine Learning', 'ROS', 'AI Control Systems'],
    link: 'https://ziontechgroup.com/services/ai-robotics-automation',
    icon: '🤖'
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading Platform',
    category: 'ai-services',
    description: 'Advanced AI-powered financial trading platform with algorithmic trading, risk management, and market prediction capabilities.',
    features: [
      'Algorithmic trading strategies',
      'Real-time market analysis',
      'Risk assessment and management',
      'Portfolio optimization',
      'Sentiment analysis',
      'High-frequency trading',
      'Backtesting capabilities',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 500000,
      currency: 'USD'
    },
    benefits: [
      'Improved trading performance',
      'Reduced risk exposure',
      '24/7 market monitoring',
      'Data-driven decisions',
      'Automated execution'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Banks and financial institutions',
      'Individual traders'
    ],
    technologies: ['Financial AI', 'Machine Learning', 'Quantitative Analysis', 'Python', 'Trading APIs'],
    link: 'https://ziontechgroup.com/services/ai-financial-trading',
    icon: '📈'
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
      'Best practices recommendations',
      'Integration with Git platforms',
      'Team collaboration tools',
      'Custom rule configuration'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce code review time by 70%',
      'Catch bugs before deployment',
      'Improve code quality standards',
      'Faster development cycles'
    ],
    useCases: [
      'Software development teams',
      'DevOps engineers',
      'Code quality managers',
      'Open source projects'
    ],
    technologies: ['AI/ML', 'Static Analysis', 'React', 'Node.js', 'Git APIs'],
    link: 'https://ziontechgroup.com/services/ai-code-reviewer',
    icon: '🔍'
  },
  {
    id: 'ai-meeting-transcriber',
    name: 'AI Meeting Transcriber & Analyzer',
    category: 'micro-saas',
    description: 'Advanced meeting transcription service with AI-powered analysis, action item extraction, and intelligent summarization.',
    features: [
      'Real-time transcription',
      'Multi-language support',
      'Speaker identification',
      'Action item extraction',
      'Meeting summaries',
      'Sentiment analysis',
      'Integration with calendar apps',
      'Searchable transcripts'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours per week',
      'Never miss important details',
      'Improved meeting productivity',
      'Better follow-up tracking'
    ],
    useCases: [
      'Remote teams',
      'Consulting firms',
      'Legal practices',
      'Educational institutions'
    ],
    technologies: ['Speech Recognition', 'NLP', 'React', 'Node.js', 'WebRTC'],
    link: 'https://ziontechgroup.com/services/ai-meeting-transcriber',
    icon: '🎤'
  },
  {
    id: 'ai-social-media-monitor',
    name: 'AI Social Media Monitor',
    category: 'micro-saas',
    description: 'Intelligent social media monitoring platform that tracks brand mentions, sentiment analysis, and competitor insights using AI.',
    features: [
      'Real-time brand monitoring',
      'Sentiment analysis',
      'Competitor tracking',
      'Crisis detection alerts',
      'Influencer identification',
      'Trend analysis',
      'Custom dashboard',
      'API integrations'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Protect brand reputation',
      'Identify growth opportunities',
      'Monitor competitor strategies',
      'Crisis prevention'
    ],
    useCases: [
      'Brand managers',
      'Marketing agencies',
      'PR professionals',
      'E-commerce businesses'
    ],
    technologies: ['AI/ML', 'Social APIs', 'React', 'Node.js', 'Analytics'],
    link: 'https://ziontechgroup.com/services/ai-social-media-monitor',
    icon: '📊'
  },
  {
    id: 'ai-voice-cloning',
    name: 'AI Voice Cloning Studio',
    category: 'micro-saas',
    description: 'Professional voice cloning platform for creating custom AI voices for content creation, accessibility, and personalization.',
    features: [
      'High-quality voice synthesis',
      'Custom voice training',
      'Multi-language support',
      'Emotion control',
      'Voice customization',
      'API integration',
      'Batch processing',
      'Commercial licensing'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Create unique voice content',
      'Improve accessibility',
      'Scale voice production',
      'Personalize user experiences'
    ],
    useCases: [
      'Content creators',
      'Accessibility services',
      'E-learning platforms',
      'Podcast producers'
    ],
    technologies: ['Deep Learning', 'Speech Synthesis', 'React', 'Python', 'Audio Processing'],
    link: 'https://ziontechgroup.com/services/ai-voice-cloning',
    icon: '🎭'
  },
  {
    id: 'ai-document-processor',
    name: 'AI Document Processor',
    category: 'micro-saas',
    description: 'Intelligent document processing platform that extracts, analyzes, and structures data from any document type using advanced AI.',
    features: [
      'OCR and text extraction',
      'Document classification',
      'Data validation',
      'Form processing',
      'Batch processing',
      'API integration',
      'Custom templates',
      'Workflow automation'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual data entry by 90%',
      'Improve data accuracy',
      'Faster document processing',
      'Automated workflows'
    ],
    useCases: [
      'Accounting firms',
      'Insurance companies',
      'Legal practices',
      'Government agencies'
    ],
    technologies: ['OCR', 'NLP', 'Computer Vision', 'React', 'Python'],
    link: 'https://ziontechgroup.com/services/ai-document-processor',
    icon: '📄'
  },

  // NEW INNOVATIVE IT SERVICES
  {
    id: 'quantum-computing-consulting',
    name: 'Quantum Computing Consulting',
    category: 'it-services',
    description: 'Expert quantum computing consulting services to help organizations prepare for and implement quantum solutions for complex computational problems.',
    features: [
      'Quantum algorithm development',
      'Quantum hardware evaluation',
      'Hybrid classical-quantum systems',
      'Quantum security implementation',
      'Performance optimization',
      'Training and education',
      'Proof of concept development',
      'Strategic planning'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof your technology',
      'Solve complex optimization problems',
      'Enhanced security capabilities',
      'Competitive advantage'
    ],
    useCases: [
      'Financial services',
      'Pharmaceutical research',
      'Logistics optimization',
      'Cryptography and security'
    ],
    technologies: ['Quantum Computing', 'Qiskit', 'Cirq', 'Quantum Algorithms', 'Python'],
    link: 'https://ziontechgroup.com/services/quantum-computing-consulting',
    icon: '⚛️'
  },
  {
    id: 'edge-computing-infrastructure',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Comprehensive edge computing infrastructure setup for low-latency applications, IoT deployments, and distributed computing solutions.',
    features: [
      'Edge server deployment',
      'IoT device management',
      'Real-time data processing',
      'Edge AI implementation',
      'Network optimization',
      'Security hardening',
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
      'Improved reliability',
      'Enhanced privacy and security'
    ],
    useCases: [
      'Autonomous vehicles',
      'Smart cities',
      'Industrial IoT',
      'Real-time analytics'
    ],
    technologies: ['Edge Computing', 'Kubernetes', 'Docker', 'IoT Platforms', '5G'],
    link: 'https://ziontechgroup.com/services/edge-computing-infrastructure',
    icon: '🌐'
  },
  {
    id: 'blockchain-enterprise-solutions',
    name: 'Blockchain Enterprise Solutions',
    category: 'it-services',
    description: 'Enterprise-grade blockchain solutions including smart contracts, DeFi integration, and custom blockchain development.',
    features: [
      'Smart contract development',
      'Blockchain architecture design',
      'DeFi protocol integration',
      'NFT marketplace development',
      'Cross-chain solutions',
      'Security auditing',
      'Token economics design',
      'Regulatory compliance'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Transparent and secure transactions',
      'Reduced intermediaries',
      'Automated business processes',
      'New revenue opportunities'
    ],
    useCases: [
      'Supply chain management',
      'Financial services',
      'Healthcare records',
      'Digital identity'
    ],
    technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS', 'DeFi Protocols'],
    link: 'https://ziontechgroup.com/services/blockchain-enterprise-solutions',
    icon: '⛓️'
  },
  {
    id: 'cybersecurity-operations-center',
    name: 'Cybersecurity Operations Center (SOC)',
    category: 'it-services',
    description: '24/7 cybersecurity operations center with advanced threat detection, incident response, and security monitoring services.',
    features: [
      '24/7 threat monitoring',
      'Advanced threat detection',
      'Incident response',
      'Security analytics',
      'Vulnerability management',
      'Compliance monitoring',
      'Threat intelligence',
      'Security training'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Faster incident response',
      'Reduced security risks',
      'Compliance assurance'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Large enterprises'
    ],
    technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Machine Learning', 'Security Tools'],
    link: 'https://ziontechgroup.com/services/cybersecurity-operations-center',
    icon: '🛡️'
  },
  {
    id: 'iot-platform-development',
    name: 'IoT Platform Development',
    category: 'it-services',
    description: 'Comprehensive IoT platform development including device management, data analytics, and real-time monitoring solutions.',
    features: [
      'Device management platform',
      'Real-time data processing',
      'Predictive analytics',
      'Remote device control',
      'Data visualization',
      'API development',
      'Security implementation',
      'Scalability planning'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Predictive maintenance',
      'Real-time insights',
      'Cost optimization'
    ],
    useCases: [
      'Smart manufacturing',
      'Agriculture monitoring',
      'Energy management',
      'Smart buildings'
    ],
    technologies: ['IoT Platforms', 'MQTT', 'Time Series DB', 'Machine Learning', 'Edge Computing'],
    link: 'https://ziontechgroup.com/services/iot-platform-development',
    icon: '📡'
  },

  // NEW INNOVATIVE AI SERVICES
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems Development',
    category: 'ai-services',
    description: 'Development of fully autonomous AI systems for self-driving vehicles, drones, and robotic process automation.',
    features: [
      'Autonomous vehicle systems',
      'Drone navigation systems',
      'Robotic process automation',
      'Computer vision integration',
      'Sensor fusion',
      'Decision-making algorithms',
      'Safety systems',
      'Performance optimization'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 1000000,
      currency: 'USD'
    },
    benefits: [
      'Fully autonomous operations',
      'Reduced human intervention',
      'Improved safety',
      '24/7 operation capability'
    ],
    useCases: [
      'Autonomous vehicles',
      'Delivery drones',
      'Industrial automation',
      'Service robots'
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Reinforcement Learning', 'Robotics', 'Sensor Fusion'],
    link: 'https://ziontechgroup.com/services/ai-autonomous-systems',
    icon: '🚗'
  },
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for accelerating drug discovery, molecular design, and pharmaceutical research using machine learning.',
    features: [
      'Molecular design and optimization',
      'Drug-target interaction prediction',
      'ADMET property prediction',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing',
      'Toxicity prediction',
      'Patent analysis'
    ],
    pricing: {
      starter: 150000,
      professional: 450000,
      enterprise: 1200000,
      currency: 'USD'
    },
    benefits: [
      'Faster drug development',
      'Reduced research costs',
      'Higher success rates',
      'Personalized medicine'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical research organizations'
    ],
    technologies: ['Deep Learning', 'Molecular AI', 'Bioinformatics', 'Python', 'Drug Discovery Tools'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Prediction',
    category: 'ai-services',
    description: 'Advanced AI climate modeling platform for weather prediction, climate change analysis, and environmental impact assessment.',
    features: [
      'Weather prediction models',
      'Climate change analysis',
      'Environmental impact assessment',
      'Natural disaster prediction',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Agricultural forecasting',
      'Risk assessment'
    ],
    pricing: {
      starter: 75000,
      professional: 225000,
      enterprise: 600000,
      currency: 'USD'
    },
    benefits: [
      'Accurate weather predictions',
      'Climate risk mitigation',
      'Environmental planning',
      'Sustainable development'
    ],
    useCases: [
      'Meteorological services',
      'Agriculture companies',
      'Energy companies',
      'Government agencies'
    ],
    technologies: ['Climate AI', 'Machine Learning', 'Satellite Data', 'Python', 'Climate Models'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-space-exploration',
    name: 'AI Space Exploration Systems',
    category: 'ai-services',
    description: 'AI-powered systems for space exploration, satellite operations, and space mission optimization.',
    features: [
      'Satellite constellation management',
      'Space mission planning',
      'Autonomous spacecraft control',
      'Space debris tracking',
      'Planetary exploration AI',
      'Communication optimization',
      'Resource management',
      'Mission risk assessment'
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 1500000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced space operations',
      'Reduced mission costs',
      'Improved safety',
      'Autonomous decision making'
    ],
    useCases: [
      'Space agencies',
      'Satellite companies',
      'Space exploration missions',
      'Commercial space ventures'
    ],
    technologies: ['Space AI', 'Autonomous Systems', 'Satellite Technology', 'Mission Planning', 'Space Communication'],
    link: 'https://ziontechgroup.com/services/ai-space-exploration',
    icon: '🚀'
  },
  {
    id: 'ai-mental-health-platform',
    name: 'AI Mental Health Platform',
    category: 'ai-services',
    description: 'Comprehensive AI-powered mental health platform with early detection, personalized therapy, and wellness monitoring.',
    features: [
      'Mental health screening',
      'Personalized therapy recommendations',
      'Mood tracking and analysis',
      'Crisis intervention',
      'Therapist matching',
      'Progress monitoring',
      'Privacy protection',
      'Multi-language support'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Early mental health detection',
      'Personalized care',
      '24/7 support availability',
      'Reduced treatment costs'
    ],
    useCases: [
      'Healthcare providers',
      'Corporate wellness programs',
      'Educational institutions',
      'Mental health organizations'
    ],
    technologies: ['Mental Health AI', 'NLP', 'Machine Learning', 'Privacy-Preserving ML', 'Mobile Health'],
    link: 'https://ziontechgroup.com/services/ai-mental-health-platform',
    icon: '🧠'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};