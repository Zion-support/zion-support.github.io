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
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};