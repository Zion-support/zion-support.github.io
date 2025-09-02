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
    id: 'ai-meeting-summary-generator',
    name: 'AI Meeting Summary Generator',
    category: 'micro-saas',
    description: 'Intelligent meeting transcription and summary generation with action items extraction and follow-up automation.',
    features: [
      'Real-time transcription',
      'AI-powered summarization',
      'Action items extraction',
      'Speaker identification',
      'Meeting insights',
      'Calendar integration',
      'Follow-up automation',
      'Multi-language support'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      'Save 2+ hours per meeting',
      'Never miss action items',
      'Improved meeting efficiency',
      'Better team collaboration'
    ],
    useCases: [
      'Remote teams',
      'Consulting firms',
      'Sales teams',
      'Project management'
    ],
    technologies: ['OpenAI Whisper', 'GPT-4', 'React', 'Node.js', 'WebRTC'],
    link: 'https://ziontechgroup.com/services/ai-meeting-summary',
    icon: '📝'
  },
  {
    id: 'ai-customer-sentiment-analyzer',
    name: 'AI Customer Sentiment Analyzer',
    category: 'micro-saas',
    description: 'Advanced sentiment analysis platform that monitors customer feedback across multiple channels and provides actionable insights.',
    features: [
      'Multi-channel monitoring',
      'Real-time sentiment tracking',
      'Trend analysis',
      'Alert system',
      'Competitor analysis',
      'Custom dashboards',
      'API integration',
      'Export capabilities'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Improve customer satisfaction by 40%',
      'Early issue detection',
      'Data-driven decisions',
      'Competitive intelligence'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Restaurants',
      'Service providers'
    ],
    technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/sentiment-analyzer',
    icon: '😊'
  },
  {
    id: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    category: 'micro-saas',
    description: 'Intelligent code review platform that automatically analyzes code quality, security vulnerabilities, and provides improvement suggestions.',
    features: [
      'Automated code analysis',
      'Security vulnerability detection',
      'Performance optimization suggestions',
      'Code quality metrics',
      'Integration with Git',
      'Team collaboration',
      'Custom rules engine',
      'Detailed reporting'
    ],
    pricing: {
      starter: 45,
      professional: 119,
      enterprise: 329,
      currency: 'USD'
    },
    benefits: [
      'Reduce code review time by 60%',
      'Improve code quality',
      'Early bug detection',
      'Knowledge sharing'
    ],
    useCases: [
      'Software development teams',
      'DevOps teams',
      'Code quality assurance',
      'Security teams'
    ],
    technologies: ['AI/ML', 'GitHub API', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/code-review-assistant',
    icon: '🔍'
  },
  {
    id: 'smart-digital-marketing-optimizer',
    name: 'Smart Digital Marketing Optimizer',
    category: 'micro-saas',
    description: 'AI-powered marketing optimization platform that analyzes campaigns and suggests improvements for better ROI.',
    features: [
      'Campaign performance analysis',
      'AI optimization suggestions',
      'A/B testing automation',
      'Budget allocation optimization',
      'Audience targeting insights',
      'ROI tracking',
      'Multi-platform integration',
      'Predictive analytics'
    ],
    pricing: {
      starter: 55,
      professional: 149,
      enterprise: 399,
      currency: 'USD'
    },
    benefits: [
      'Increase marketing ROI by 50%',
      'Automated optimization',
      'Better audience targeting',
      'Reduced ad spend waste'
    ],
    useCases: [
      'Digital marketing agencies',
      'E-commerce businesses',
      'SaaS companies',
      'Content creators'
    ],
    technologies: ['AI/ML', 'Marketing APIs', 'React', 'Python', 'Analytics'],
    link: 'https://ziontechgroup.com/services/marketing-optimizer',
    icon: '📈'
  },
  {
    id: 'ai-content-curation-platform',
    name: 'AI Content Curation Platform',
    category: 'micro-saas',
    description: 'Intelligent content discovery and curation platform that finds relevant articles, videos, and resources based on user preferences.',
    features: [
      'AI-powered content discovery',
      'Personalized recommendations',
      'Content bookmarking',
      'Social sharing',
      'Content scheduling',
      'Analytics dashboard',
      'RSS integration',
      'Team collaboration'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours weekly on research',
      'Stay updated with industry trends',
      'Better content strategy',
      'Improved engagement'
    ],
    useCases: [
      'Content marketers',
      'Researchers',
      'Social media managers',
      'Thought leaders'
    ],
    technologies: ['AI/ML', 'Web Scraping', 'React', 'Node.js', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/content-curation',
    icon: '📚'
  },
  {
    id: 'ai-workflow-automation',
    name: 'AI Workflow Automation Suite',
    category: 'micro-saas',
    description: 'Intelligent workflow automation platform that learns from user behavior and automates repetitive tasks across applications.',
    features: [
      'Visual workflow builder',
      'AI task learning',
      'Multi-app integration',
      'Conditional logic',
      'Error handling',
      'Performance monitoring',
      'Team collaboration',
      'Custom triggers'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 269,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Eliminate human errors',
      'Faster task completion',
      'Better resource allocation'
    ],
    useCases: [
      'Business process automation',
      'Data entry automation',
      'Customer onboarding',
      'Report generation'
    ],
    technologies: ['RPA', 'AI/ML', 'React', 'Python', 'Workflow Engine'],
    link: 'https://ziontechgroup.com/services/workflow-automation',
    icon: '⚙️'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer Pro',
    category: 'micro-saas',
    description: 'Advanced SEO optimization platform that uses AI to analyze and improve website rankings, content, and technical SEO.',
    features: [
      'AI content optimization',
      'Technical SEO analysis',
      'Keyword research',
      'Competitor analysis',
      'Ranking tracking',
      'Content suggestions',
      'Link building insights',
      'Performance monitoring'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Improve search rankings by 40%',
      'Increase organic traffic',
      'Better content strategy',
      'Competitive advantage'
    ],
    useCases: [
      'Website owners',
      'Digital agencies',
      'E-commerce sites',
      'Content creators'
    ],
    technologies: ['AI/ML', 'SEO APIs', 'React', 'Python', 'Analytics'],
    link: 'https://ziontechgroup.com/services/seo-optimizer',
    icon: '🔍'
  },
  {
    id: 'ai-data-visualization-platform',
    name: 'AI Data Visualization Platform',
    category: 'micro-saas',
    description: 'Intelligent data visualization platform that automatically creates charts, graphs, and dashboards from your data.',
    features: [
      'Automatic chart generation',
      'Interactive dashboards',
      'Data storytelling',
      'Real-time updates',
      'Custom templates',
      'Export capabilities',
      'Team collaboration',
      'Mobile optimization'
    ],
    pricing: {
      starter: 35,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Create insights 10x faster',
      'Better data understanding',
      'Improved decision making',
      'Professional presentations'
    ],
    useCases: [
      'Business analysts',
      'Data scientists',
      'Marketing teams',
      'Executive reporting'
    ],
    technologies: ['D3.js', 'AI/ML', 'React', 'Python', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/data-visualization',
    icon: '📊'
  },

  // Additional Innovative IT Services
  {
    id: 'edge-computing-solutions',
    name: 'Edge Computing Solutions',
    category: 'it-services',
    description: 'Edge computing infrastructure setup and optimization for low-latency applications and IoT deployments.',
    features: [
      'Edge infrastructure design',
      'CDN optimization',
      'IoT device management',
      'Real-time data processing',
      'Security implementation',
      'Performance monitoring',
      'Scalability planning',
      'Disaster recovery'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Reduced latency by 80%',
      'Better user experience',
      'Lower bandwidth costs',
      'Improved reliability'
    ],
    useCases: [
      'IoT applications',
      'Real-time gaming',
      'Video streaming',
      'Autonomous vehicles'
    ],
    technologies: ['AWS Edge', 'Azure Edge', 'Kubernetes', 'Docker', 'CDN'],
    link: 'https://ziontechgroup.com/services/edge-computing',
    icon: '🌐'
  },
  {
    id: 'quantum-ready-security',
    name: 'Quantum-Ready Security Implementation',
    category: 'it-services',
    description: 'Future-proof security solutions using post-quantum cryptography to protect against quantum computing threats.',
    features: [
      'Post-quantum cryptography',
      'Quantum key distribution',
      'Security assessment',
      'Migration planning',
      'Compliance auditing',
      'Training & documentation',
      'Ongoing monitoring',
      'Incident response'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof security',
      'Quantum threat protection',
      'Compliance readiness',
      'Competitive advantage'
    ],
    useCases: [
      'Financial institutions',
      'Government agencies',
      'Healthcare organizations',
      'Critical infrastructure'
    ],
    technologies: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Blockchain', 'Zero Trust'],
    link: 'https://ziontechgroup.com/services/quantum-security',
    icon: '🔐'
  },
  {
    id: '5g-network-optimization',
    name: '5G Network Optimization',
    category: 'it-services',
    description: '5G network infrastructure optimization and application development for ultra-low latency and high-speed connectivity.',
    features: [
      '5G network planning',
      'Application optimization',
      'Latency reduction',
      'Bandwidth optimization',
      'Security implementation',
      'Performance monitoring',
      'Device management',
      'Compliance testing'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency',
      'High-speed connectivity',
      'Better user experience',
      'Future-ready infrastructure'
    ],
    useCases: [
      'IoT applications',
      'AR/VR platforms',
      'Autonomous systems',
      'Smart cities'
    ],
    technologies: ['5G Core', 'Network Slicing', 'Edge Computing', 'SDN/NFV'],
    link: 'https://ziontechgroup.com/services/5g-optimization',
    icon: '📡'
  },
  {
    id: 'blockchain-infrastructure',
    name: 'Blockchain Infrastructure & Development',
    category: 'it-services',
    description: 'Complete blockchain infrastructure setup, smart contract development, and decentralized application deployment.',
    features: [
      'Blockchain network setup',
      'Smart contract development',
      'DApp development',
      'Token economics design',
      'Security auditing',
      'Performance optimization',
      'Integration services',
      'Maintenance & support'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Decentralized solutions',
      'Enhanced security',
      'Transparency & trust',
      'Cost reduction'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital identity',
      'DeFi applications',
      'NFT platforms'
    ],
    technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS'],
    link: 'https://ziontechgroup.com/services/blockchain',
    icon: '⛓️'
  },
  {
    id: 'ai-infrastructure-setup',
    name: 'AI Infrastructure & MLOps',
    category: 'it-services',
    description: 'Complete AI infrastructure setup with MLOps pipelines, model deployment, and monitoring systems.',
    features: [
      'AI infrastructure design',
      'MLOps pipeline setup',
      'Model deployment automation',
      'Performance monitoring',
      'A/B testing framework',
      'Data pipeline optimization',
      'Security implementation',
      'Scalability planning'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 140000,
      currency: 'USD'
    },
    benefits: [
      'Faster AI deployment',
      'Automated model management',
      'Better performance monitoring',
      'Reduced operational costs'
    ],
    useCases: [
      'Machine learning teams',
      'Data science organizations',
      'AI product companies',
      'Enterprise AI adoption'
    ],
    technologies: ['Kubernetes', 'TensorFlow', 'MLflow', 'Kubeflow', 'Prometheus'],
    link: 'https://ziontechgroup.com/services/ai-infrastructure',
    icon: '🤖'
  },

  // Additional Innovative AI Services
  {
    id: 'ai-drug-discovery',
    name: 'AI Drug Discovery Platform',
    category: 'ai-services',
    description: 'Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'Clinical trial optimization',
      'Adverse effect prediction',
      'Patent analysis',
      'Regulatory compliance',
      'Real-time collaboration',
      'Advanced analytics'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Reduce discovery time by 60%',
      'Lower development costs',
      'Higher success rates',
      'Faster time to market'
    ],
    useCases: [
      'Pharmaceutical companies',
      'Biotech startups',
      'Research institutions',
      'Clinical research organizations'
    ],
    technologies: ['Deep Learning', 'Molecular Dynamics', 'Quantum Computing', 'Bioinformatics'],
    link: 'https://ziontechgroup.com/services/ai-drug-discovery',
    icon: '💊'
  },
  {
    id: 'ai-climate-modeling',
    name: 'AI Climate Modeling & Prediction',
    category: 'ai-services',
    description: 'Advanced AI climate modeling system for weather prediction, climate change analysis, and environmental monitoring.',
    features: [
      'Weather pattern prediction',
      'Climate change modeling',
      'Environmental impact analysis',
      'Disaster risk assessment',
      'Real-time monitoring',
      'Data visualization',
      'API integration',
      'Custom reporting'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Accurate predictions',
      'Early warning systems',
      'Better resource planning',
      'Environmental protection'
    ],
    useCases: [
      'Meteorological services',
      'Agriculture companies',
      'Energy providers',
      'Government agencies'
    ],
    technologies: ['Deep Learning', 'Satellite Data', 'IoT Sensors', 'Big Data Analytics'],
    link: 'https://ziontechgroup.com/services/ai-climate-modeling',
    icon: '🌍'
  },
  {
    id: 'ai-autonomous-systems',
    name: 'AI Autonomous Systems Development',
    category: 'ai-services',
    description: 'Development of autonomous systems including self-driving vehicles, drones, and robotic process automation.',
    features: [
      'Computer vision systems',
      'Sensor fusion',
      'Path planning algorithms',
      'Real-time decision making',
      'Safety systems',
      'Performance optimization',
      'Simulation testing',
      'Deployment support'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Improved efficiency',
      'Reduced human error',
      '24/7 operation',
      'Cost savings'
    ],
    useCases: [
      'Autonomous vehicles',
      'Delivery drones',
      'Industrial robots',
      'Smart agriculture'
    ],
    technologies: ['Computer Vision', 'Reinforcement Learning', 'ROS', 'Lidar', 'SLAM'],
    link: 'https://ziontechgroup.com/services/autonomous-systems',
    icon: '🚗'
  },
  {
    id: 'ai-personalized-medicine',
    name: 'AI Personalized Medicine Platform',
    category: 'ai-services',
    description: 'AI-powered personalized medicine platform for treatment optimization, drug selection, and patient monitoring.',
    features: [
      'Genomic analysis',
      'Treatment optimization',
      'Drug interaction prediction',
      'Patient monitoring',
      'Clinical decision support',
      'Outcome prediction',
      'Data integration',
      'Privacy protection'
    ],
    pricing: {
      starter: 35000,
      professional: 100000,
      enterprise: 280000,
      currency: 'USD'
    },
    benefits: [
      'Improved treatment outcomes',
      'Reduced side effects',
      'Personalized care',
      'Better patient satisfaction'
    ],
    useCases: [
      'Hospitals',
      'Clinics',
      'Pharmaceutical companies',
      'Research institutions'
    ],
    technologies: ['Machine Learning', 'Genomics', 'Electronic Health Records', 'IoT'],
    link: 'https://ziontechgroup.com/services/personalized-medicine',
    icon: '🏥'
  },
  {
    id: 'ai-financial-trading',
    name: 'AI Financial Trading System',
    category: 'ai-services',
    description: 'Advanced AI trading system with algorithmic trading, risk management, and market prediction capabilities.',
    features: [
      'Algorithmic trading',
      'Market prediction',
      'Risk management',
      'Portfolio optimization',
      'Real-time analysis',
      'Backtesting',
      'Compliance monitoring',
      'Performance tracking'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Improved trading performance',
      'Reduced risk',
      '24/7 market monitoring',
      'Data-driven decisions'
    ],
    useCases: [
      'Investment firms',
      'Hedge funds',
      'Banks',
      'Individual traders'
    ],
    technologies: ['Deep Learning', 'Reinforcement Learning', 'Time Series Analysis', 'High-Frequency Trading'],
    link: 'https://ziontechgroup.com/services/ai-trading',
    icon: '📈'
  },
  {
    id: 'ai-cybersecurity-threat-detection',
    name: 'AI Cybersecurity Threat Detection',
    category: 'ai-services',
    description: 'Advanced AI-powered cybersecurity system for real-time threat detection, incident response, and security automation.',
    features: [
      'Real-time threat detection',
      'Behavioral analysis',
      'Incident response automation',
      'Vulnerability assessment',
      'Security orchestration',
      'Threat intelligence',
      'Compliance monitoring',
      'Forensic analysis'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Faster threat detection',
      'Reduced false positives',
      'Automated response',
      'Better security posture'
    ],
    useCases: [
      'Enterprise organizations',
      'Financial institutions',
      'Government agencies',
      'Healthcare systems'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Threat Intelligence', 'Behavioral Analytics'],
    link: 'https://ziontechgroup.com/services/ai-cybersecurity',
    icon: '🛡️'
  },

  // Additional Innovative Micro SaaS Services
  {
    id: 'ai-video-editing-platform',
    name: 'AI Video Editing Platform',
    category: 'micro-saas',
    description: 'Intelligent video editing platform that automatically creates professional videos from raw footage using AI.',
    features: [
      'AI-powered video editing',
      'Automatic scene detection',
      'Smart transitions',
      'Background music matching',
      'Text overlay generation',
      'Multi-format export',
      'Cloud storage integration',
      'Collaborative editing'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce editing time by 80%',
      'Professional quality output',
      'No technical skills required',
      'Consistent brand styling'
    ],
    useCases: [
      'Content creators',
      'Marketing agencies',
      'Social media managers',
      'Small businesses'
    ],
    technologies: ['Computer Vision', 'AI/ML', 'React', 'Node.js', 'FFmpeg'],
    link: 'https://ziontechgroup.com/services/ai-video-editing',
    icon: '🎬'
  },
  {
    id: 'smart-contract-auditor',
    name: 'Smart Contract Security Auditor',
    category: 'micro-saas',
    description: 'Automated smart contract security auditing platform that detects vulnerabilities and provides detailed reports.',
    features: [
      'Automated vulnerability scanning',
      'Gas optimization analysis',
      'Security best practices check',
      'Detailed audit reports',
      'Remediation suggestions',
      'Integration with development tools',
      'Team collaboration',
      'Compliance checking'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Prevent costly security breaches',
      'Reduce audit time by 90%',
      'Comprehensive vulnerability detection',
      'Industry-standard compliance'
    ],
    useCases: [
      'Blockchain developers',
      'DeFi projects',
      'NFT platforms',
      'Crypto startups'
    ],
    technologies: ['Solidity', 'AI/ML', 'React', 'Python', 'Blockchain APIs'],
    link: 'https://ziontechgroup.com/services/smart-contract-auditor',
    icon: '🔍'
  },
  {
    id: 'ai-customer-churn-predictor',
    name: 'AI Customer Churn Predictor',
    category: 'micro-saas',
    description: 'Advanced customer churn prediction platform that identifies at-risk customers and suggests retention strategies.',
    features: [
      'Real-time churn prediction',
      'Behavioral pattern analysis',
      'Retention strategy recommendations',
      'Customer segmentation',
      'Risk scoring',
      'Automated alerts',
      'Integration with CRM',
      'Performance analytics'
    ],
    pricing: {
      starter: 89,
      professional: 229,
      enterprise: 599,
      currency: 'USD'
    },
    benefits: [
      'Reduce churn by 35%',
      'Increase customer lifetime value',
      'Proactive retention strategies',
      'Data-driven insights'
    ],
    useCases: [
      'SaaS companies',
      'E-commerce businesses',
      'Subscription services',
      'Telecommunications'
    ],
    technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'Analytics'],
    link: 'https://ziontechgroup.com/services/customer-churn-predictor',
    icon: '📉'
  },
  {
    id: 'ai-legal-document-analyzer',
    name: 'AI Legal Document Analyzer',
    category: 'micro-saas',
    description: 'Intelligent legal document analysis platform that extracts key information, identifies risks, and provides insights.',
    features: [
      'Document text extraction',
      'Key clause identification',
      'Risk assessment',
      'Compliance checking',
      'Contract comparison',
      'Deadline tracking',
      'Team collaboration',
      'Audit trails'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Reduce review time by 70%',
      'Identify hidden risks',
      'Improve contract quality',
      'Ensure compliance'
    ],
    useCases: [
      'Law firms',
      'Corporate legal departments',
      'Real estate agencies',
      'Insurance companies'
    ],
    technologies: ['NLP', 'AI/ML', 'React', 'Python', 'Document Processing'],
    link: 'https://ziontechgroup.com/services/legal-document-analyzer',
    icon: '⚖️'
  },
  {
    id: 'ai-real-estate-valuator',
    name: 'AI Real Estate Valuator',
    category: 'micro-saas',
    description: 'Advanced property valuation platform using AI to analyze market data and provide accurate property estimates.',
    features: [
      'Automated property valuation',
      'Market trend analysis',
      'Comparable property research',
      'Investment potential scoring',
      'Rental yield calculations',
      'Market reports',
      'API integration',
      'Mobile app'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Accurate property valuations',
      'Save hours of research',
      'Data-driven investment decisions',
      'Competitive market advantage'
    ],
    useCases: [
      'Real estate agents',
      'Property investors',
      'Mortgage brokers',
      'Property management companies'
    ],
    technologies: ['Machine Learning', 'GIS', 'React', 'Python', 'Real Estate APIs'],
    link: 'https://ziontechgroup.com/services/real-estate-valuator',
    icon: '🏠'
  },
  {
    id: 'ai-health-monitoring-platform',
    name: 'AI Health Monitoring Platform',
    category: 'micro-saas',
    description: 'Comprehensive health monitoring platform that tracks vital signs, provides health insights, and alerts for anomalies.',
    features: [
      'Vital signs tracking',
      'Health trend analysis',
      'Anomaly detection',
      'Medication reminders',
      'Doctor appointment scheduling',
      'Health reports generation',
      'Wearable device integration',
      'Emergency alerts'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Proactive health management',
      'Early problem detection',
      'Improved health outcomes',
      'Reduced healthcare costs'
    ],
    useCases: [
      'Healthcare providers',
      'Senior care facilities',
      'Fitness centers',
      'Insurance companies'
    ],
    technologies: ['IoT', 'AI/ML', 'React Native', 'Python', 'Health APIs'],
    link: 'https://ziontechgroup.com/services/health-monitoring',
    icon: '❤️'
  },
  {
    id: 'ai-supply-chain-optimizer',
    name: 'AI Supply Chain Optimizer',
    category: 'micro-saas',
    description: 'Intelligent supply chain optimization platform that predicts demand, optimizes inventory, and reduces costs.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier performance tracking',
      'Risk assessment',
      'Cost optimization',
      'Route planning',
      'Real-time monitoring',
      'Predictive analytics'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Reduce inventory costs by 25%',
      'Improve delivery times',
      'Minimize supply chain risks',
      'Increase operational efficiency'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'E-commerce businesses'
    ],
    technologies: ['Machine Learning', 'IoT', 'React', 'Python', 'Supply Chain APIs'],
    link: 'https://ziontechgroup.com/services/supply-chain-optimizer',
    icon: '🚛'
  },
  {
    id: 'ai-recruitment-platform',
    name: 'AI Recruitment Platform',
    category: 'micro-saas',
    description: 'Intelligent recruitment platform that automates candidate screening, matching, and interview scheduling.',
    features: [
      'Resume parsing and analysis',
      'Candidate matching algorithms',
      'Automated screening',
      'Interview scheduling',
      'Skills assessment',
      'Background verification',
      'Team collaboration',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 99,
      professional: 249,
      enterprise: 649,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Eliminate bias in screening',
      'Streamline recruitment process'
    ],
    useCases: [
      'HR departments',
      'Recruitment agencies',
      'Startups',
      'Enterprise companies'
    ],
    technologies: ['NLP', 'AI/ML', 'React', 'Python', 'ATS Integration'],
    link: 'https://ziontechgroup.com/services/ai-recruitment',
    icon: '👥'
  },
  {
    id: 'ai-financial-planner',
    name: 'AI Financial Planning Platform',
    category: 'micro-saas',
    description: 'Personalized financial planning platform that provides investment advice, budgeting, and retirement planning.',
    features: [
      'Personalized financial plans',
      'Investment recommendations',
      'Budget tracking and optimization',
      'Retirement planning',
      'Tax optimization',
      'Risk assessment',
      'Goal tracking',
      'Financial education'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Improve financial health',
      'Optimize investment returns',
      'Reduce financial stress',
      'Achieve financial goals faster'
    ],
    useCases: [
      'Financial advisors',
      'Individuals',
      'Small businesses',
      'Financial institutions'
    ],
    technologies: ['AI/ML', 'Financial APIs', 'React', 'Python', 'Analytics'],
    link: 'https://ziontechgroup.com/services/financial-planner',
    icon: '💰'
  },
  {
    id: 'ai-content-translator',
    name: 'AI Content Translation Platform',
    category: 'micro-saas',
    description: 'Advanced content translation platform that provides accurate, context-aware translations for multiple languages.',
    features: [
      'Multi-language translation',
      'Context-aware translation',
      'Industry-specific terminology',
      'Quality assurance',
      'Batch processing',
      'API integration',
      'Translation memory',
      'Human review workflow'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 329,
      currency: 'USD'
    },
    benefits: [
      'Accurate translations',
      'Reduce translation costs',
      'Faster time to market',
      'Consistent terminology'
    ],
    useCases: [
      'E-commerce businesses',
      'Content creators',
      'Software companies',
      'Publishing houses'
    ],
    technologies: ['NLP', 'Machine Translation', 'React', 'Python', 'Translation APIs'],
    link: 'https://ziontechgroup.com/services/content-translator',
    icon: '🌐'
  },
  {
    id: 'ai-quality-assurance-tester',
    name: 'AI Quality Assurance Tester',
    category: 'micro-saas',
    description: 'Automated QA testing platform that performs comprehensive testing including functional, performance, and security testing.',
    features: [
      'Automated test generation',
      'Cross-browser testing',
      'Performance testing',
      'Security vulnerability scanning',
      'API testing',
      'Mobile app testing',
      'Test reporting',
      'CI/CD integration'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Reduce testing time by 80%',
      'Improve software quality',
      'Early bug detection',
      'Comprehensive test coverage'
    ],
    useCases: [
      'Software development teams',
      'QA departments',
      'DevOps teams',
      'Startups'
    ],
    technologies: ['Selenium', 'AI/ML', 'React', 'Python', 'Testing Frameworks'],
    link: 'https://ziontechgroup.com/services/qa-tester',
    icon: '🧪'
  },
  {
    id: 'ai-social-media-monitor',
    name: 'AI Social Media Monitor',
    category: 'micro-saas',
    description: 'Comprehensive social media monitoring platform that tracks brand mentions, sentiment, and competitor analysis.',
    features: [
      'Brand mention tracking',
      'Sentiment analysis',
      'Competitor monitoring',
      'Influencer identification',
      'Crisis detection',
      'Trend analysis',
      'Custom alerts',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Protect brand reputation',
      'Identify growth opportunities',
      'Monitor competitor activities',
      'Crisis prevention'
    ],
    useCases: [
      'Brand managers',
      'Marketing agencies',
      'PR departments',
      'Social media managers'
    ],
    technologies: ['NLP', 'Social Media APIs', 'React', 'Python', 'Analytics'],
    link: 'https://ziontechgroup.com/services/social-media-monitor',
    icon: '📱'
  },
  {
    id: 'ai-energy-optimizer',
    name: 'AI Energy Optimization Platform',
    category: 'micro-saas',
    description: 'Smart energy management platform that optimizes energy consumption, reduces costs, and improves sustainability.',
    features: [
      'Energy consumption monitoring',
      'Cost optimization',
      'Renewable energy integration',
      'Predictive maintenance',
      'Carbon footprint tracking',
      'Smart grid integration',
      'Real-time alerts',
      'Sustainability reporting'
    ],
    pricing: {
      starter: 149,
      professional: 399,
      enterprise: 999,
      currency: 'USD'
    },
    benefits: [
      'Reduce energy costs by 30%',
      'Improve sustainability',
      'Optimize energy usage',
      'Meet environmental goals'
    ],
    useCases: [
      'Manufacturing facilities',
      'Office buildings',
      'Data centers',
      'Retail chains'
    ],
    technologies: ['IoT', 'AI/ML', 'React', 'Python', 'Energy APIs'],
    link: 'https://ziontechgroup.com/services/energy-optimizer',
    icon: '⚡'
  },
  {
    id: 'ai-customer-feedback-analyzer',
    name: 'AI Customer Feedback Analyzer',
    category: 'micro-saas',
    description: 'Intelligent customer feedback analysis platform that extracts insights from reviews, surveys, and support tickets.',
    features: [
      'Multi-channel feedback collection',
      'Sentiment analysis',
      'Topic modeling',
      'Trend identification',
      'Action item extraction',
      'Competitor comparison',
      'Custom reporting',
      'Team collaboration'
    ],
    pricing: {
      starter: 59,
      professional: 149,
      enterprise: 399,
      currency: 'USD'
    },
    benefits: [
      'Improve customer satisfaction',
      'Identify product issues',
      'Data-driven improvements',
      'Competitive intelligence'
    ],
    useCases: [
      'Product managers',
      'Customer success teams',
      'Marketing departments',
      'E-commerce businesses'
    ],
    technologies: ['NLP', 'AI/ML', 'React', 'Python', 'Analytics'],
    link: 'https://ziontechgroup.com/services/feedback-analyzer',
    icon: '💬'
  },
  {
    id: 'ai-predictive-maintenance',
    name: 'AI Predictive Maintenance Platform',
    category: 'micro-saas',
    description: 'Advanced predictive maintenance system that uses AI to predict equipment failures and optimize maintenance schedules.',
    features: [
      'Equipment monitoring',
      'Failure prediction',
      'Maintenance scheduling',
      'Cost optimization',
      'Performance analytics',
      'Alert system',
      'Mobile app',
      'Integration with existing systems'
    ],
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 1299,
      currency: 'USD'
    },
    benefits: [
      'Reduce downtime by 50%',
      'Lower maintenance costs',
      'Extend equipment life',
      'Improve operational efficiency'
    ],
    useCases: [
      'Manufacturing companies',
      'Fleet management',
      'Facility management',
      'Industrial operations'
    ],
    technologies: ['IoT', 'AI/ML', 'React', 'Python', 'Predictive Analytics'],
    link: 'https://ziontechgroup.com/services/predictive-maintenance',
    icon: '🔧'
  },
  {
    id: 'ai-personalized-learning',
    name: 'AI Personalized Learning Platform',
    category: 'micro-saas',
    description: 'Adaptive learning platform that personalizes educational content based on individual learning patterns and progress.',
    features: [
      'Adaptive learning paths',
      'Progress tracking',
      'Skill assessment',
      'Content recommendations',
      'Gamification',
      'Multi-language support',
      'Mobile learning',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Improve learning outcomes',
      'Personalized education',
      'Engage learners',
      'Track progress effectively'
    ],
    useCases: [
      'Educational institutions',
      'Corporate training',
      'Online course providers',
      'Skill development platforms'
    ],
    technologies: ['AI/ML', 'React', 'Python', 'Learning Analytics', 'Gamification'],
    link: 'https://ziontechgroup.com/services/personalized-learning',
    icon: '🎓'
  },

  // Additional Innovative IT Services
  {
    id: 'quantum-computing-infrastructure',
    name: 'Quantum Computing Infrastructure Setup',
    category: 'it-services',
    description: 'Quantum computing infrastructure design and implementation for next-generation computational capabilities.',
    features: [
      'Quantum hardware integration',
      'Quantum algorithm development',
      'Hybrid classical-quantum systems',
      'Quantum error correction',
      'Performance optimization',
      'Security implementation',
      'Training and support',
      'Future-proofing strategies'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Exponential computational power',
      'Future-ready infrastructure',
      'Competitive advantage',
      'Breakthrough problem solving'
    ],
    useCases: [
      'Research institutions',
      'Financial services',
      'Pharmaceutical companies',
      'Government agencies'
    ],
    technologies: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Qiskit', 'Cirq'],
    link: 'https://ziontechgroup.com/services/quantum-computing',
    icon: '⚛️'
  },
  {
    id: 'metaverse-development-platform',
    name: 'Metaverse Development Platform',
    category: 'it-services',
    description: 'Complete metaverse infrastructure development including virtual worlds, avatars, and immersive experiences.',
    features: [
      '3D virtual world creation',
      'Avatar system development',
      'VR/AR integration',
      'Blockchain integration',
      'NFT marketplace',
      'Social features',
      'Monetization systems',
      'Cross-platform compatibility'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Immersive user experiences',
      'New revenue streams',
      'Enhanced engagement',
      'Future-proof platform'
    ],
    useCases: [
      'Gaming companies',
      'Real estate',
      'Education platforms',
      'Entertainment industry'
    ],
    technologies: ['Unity', 'Unreal Engine', 'WebXR', 'Blockchain', 'VR/AR SDKs'],
    link: 'https://ziontechgroup.com/services/metaverse-development',
    icon: '🌐'
  },
  {
    id: 'iot-ecosystem-management',
    name: 'IoT Ecosystem Management Platform',
    category: 'it-services',
    description: 'Comprehensive IoT infrastructure management including device connectivity, data processing, and security.',
    features: [
      'Device management and provisioning',
      'Real-time data processing',
      'Edge computing integration',
      'Security and encryption',
      'Scalable infrastructure',
      'Analytics and insights',
      'Remote monitoring',
      'Predictive maintenance'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Operational efficiency',
      'Real-time insights',
      'Reduced maintenance costs',
      'Scalable infrastructure'
    ],
    useCases: [
      'Smart cities',
      'Manufacturing',
      'Healthcare',
      'Agriculture'
    ],
    technologies: ['AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'MQTT', 'Kubernetes'],
    link: 'https://ziontechgroup.com/services/iot-ecosystem',
    icon: '🌐'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Complete zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring.',
    features: [
      'Identity and access management',
      'Micro-segmentation',
      'Continuous verification',
      'Least privilege access',
      'Threat detection',
      'Incident response',
      'Compliance automation',
      'Security analytics'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
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
      'Financial institutions',
      'Healthcare systems',
      'Government agencies'
    ],
    technologies: ['Okta', 'Palo Alto', 'Cisco', 'Microsoft', 'Splunk'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔒'
  },
  {
    id: 'hyperautomation-platform',
    name: 'Hyperautomation Platform Implementation',
    category: 'it-services',
    description: 'End-to-end hyperautomation platform combining RPA, AI, and process mining for complete business transformation.',
    features: [
      'Process discovery and mining',
      'RPA implementation',
      'AI integration',
      'Workflow automation',
      'Document processing',
      'Decision automation',
      'Performance monitoring',
      'Continuous optimization'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Reduce operational costs by 60%',
      'Improve process efficiency',
      'Eliminate manual errors',
      'Accelerate digital transformation'
    ],
    useCases: [
      'Financial services',
      'Healthcare',
      'Manufacturing',
      'Government'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'AI/ML', 'Process Mining'],
    link: 'https://ziontechgroup.com/services/hyperautomation',
    icon: '🤖'
  },
  {
    id: 'digital-twin-platform',
    name: 'Digital Twin Platform Development',
    category: 'it-services',
    description: 'Advanced digital twin platform for real-time simulation, monitoring, and optimization of physical assets.',
    features: [
      '3D modeling and simulation',
      'Real-time data integration',
      'Predictive analytics',
      'Performance optimization',
      'Remote monitoring',
      'Scenario testing',
      'Collaborative platform',
      'API integration'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 450000,
      currency: 'USD'
    },
    benefits: [
      'Optimize asset performance',
      'Reduce maintenance costs',
      'Improve decision making',
      'Enable predictive maintenance'
    ],
    useCases: [
      'Manufacturing',
      'Smart cities',
      'Energy sector',
      'Transportation'
    ],
    technologies: ['Unity', 'Unreal Engine', 'IoT', 'AI/ML', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/digital-twin',
    icon: '🔄'
  },
  {
    id: 'edge-ai-infrastructure',
    name: 'Edge AI Infrastructure Setup',
    category: 'it-services',
    description: 'Edge AI infrastructure deployment for real-time processing, reduced latency, and improved performance.',
    features: [
      'Edge computing nodes',
      'AI model deployment',
      'Real-time processing',
      'Data synchronization',
      'Security implementation',
      'Performance monitoring',
      'Scalable architecture',
      'Cloud integration'
    ],
    pricing: {
      starter: 35000,
      professional: 105000,
      enterprise: 280000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency',
      'Reduced bandwidth costs',
      'Improved privacy',
      'Enhanced reliability'
    ],
    useCases: [
      'Autonomous vehicles',
      'Industrial IoT',
      'Smart cities',
      'Healthcare'
    ],
    technologies: ['NVIDIA Jetson', 'Intel Edge', 'TensorFlow Lite', 'Kubernetes', 'Edge Computing'],
    link: 'https://ziontechgroup.com/services/edge-ai',
    icon: '🧠'
  },
  {
    id: 'composable-architecture',
    name: 'Composable Architecture Implementation',
    category: 'it-services',
    description: 'Modern composable architecture design for flexible, scalable, and maintainable enterprise systems.',
    features: [
      'Microservices architecture',
      'API-first design',
      'Event-driven architecture',
      'Cloud-native deployment',
      'Container orchestration',
      'Service mesh',
      'Observability',
      'DevOps integration'
    ],
    pricing: {
      starter: 45000,
      professional: 135000,
      enterprise: 350000,
      currency: 'USD'
    },
    benefits: [
      'Improved agility',
      'Better scalability',
      'Reduced complexity',
      'Faster time to market'
    ],
    useCases: [
      'Enterprise applications',
      'E-commerce platforms',
      'Financial services',
      'Healthcare systems'
    ],
    technologies: ['Kubernetes', 'Docker', 'Istio', 'gRPC', 'Event Streaming'],
    link: 'https://ziontechgroup.com/services/composable-architecture',
    icon: '🏗️'
  },
  {
    id: 'data-fabric-implementation',
    name: 'Data Fabric Implementation',
    category: 'it-services',
    description: 'Unified data fabric architecture for seamless data access, integration, and governance across the enterprise.',
    features: [
      'Unified data access',
      'Data virtualization',
      'Real-time integration',
      'Data governance',
      'Metadata management',
      'Security and privacy',
      'Analytics integration',
      'Self-service capabilities'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Unified data view',
      'Improved data quality',
      'Faster insights',
      'Reduced data silos'
    ],
    useCases: [
      'Enterprise data management',
      'Analytics platforms',
      'Customer 360',
      'Regulatory compliance'
    ],
    technologies: ['Apache Kafka', 'Data Virtualization', 'Data Governance', 'Cloud Storage', 'Analytics'],
    link: 'https://ziontechgroup.com/services/data-fabric',
    icon: '📊'
  },
  {
    id: 'cloud-native-transformation',
    name: 'Cloud-Native Transformation',
    category: 'it-services',
    description: 'Complete cloud-native transformation including containerization, microservices, and DevOps practices.',
    features: [
      'Application containerization',
      'Microservices migration',
      'Cloud-native development',
      'DevOps implementation',
      'CI/CD pipelines',
      'Monitoring and observability',
      'Security implementation',
      'Cost optimization'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Faster deployments',
      'Better reliability',
      'Reduced costs'
    ],
    useCases: [
      'Legacy system modernization',
      'Digital transformation',
      'Startup scaling',
      'Enterprise applications'
    ],
    technologies: ['Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'GitLab CI'],
    link: 'https://ziontechgroup.com/services/cloud-native',
    icon: '☁️'
  },

  // Additional Advanced AI Services
  {
    id: 'ai-robotic-process-automation',
    name: 'AI Robotic Process Automation (RPA)',
    category: 'ai-services',
    description: 'Intelligent RPA platform that combines traditional automation with AI to handle complex, cognitive tasks.',
    features: [
      'Cognitive automation',
      'Natural language processing',
      'Computer vision integration',
      'Decision-making capabilities',
      'Exception handling',
      'Process optimization',
      'Scalable deployment',
      'Analytics and insights'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 90%',
      'Handle complex processes',
      'Improve accuracy',
      'Scale operations efficiently'
    ],
    useCases: [
      'Financial services',
      'Healthcare',
      'Insurance',
      'Government'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'AI/ML', 'NLP', 'Computer Vision'],
    link: 'https://ziontechgroup.com/services/ai-rpa',
    icon: '🤖'
  },
  {
    id: 'ai-conversational-intelligence',
    name: 'AI Conversational Intelligence Platform',
    category: 'ai-services',
    description: 'Advanced conversational AI platform that understands context, emotions, and intent for natural human-like interactions.',
    features: [
      'Context-aware conversations',
      'Emotion recognition',
      'Intent understanding',
      'Multi-modal interactions',
      'Personalization',
      'Learning capabilities',
      'Integration APIs',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Natural human interactions',
      'Improved customer satisfaction',
      'Reduced support costs',
      '24/7 availability'
    ],
    useCases: [
      'Customer service',
      'Sales automation',
      'Healthcare assistance',
      'Educational support'
    ],
    technologies: ['GPT-4', 'BERT', 'NLP', 'Speech Recognition', 'Emotion AI'],
    link: 'https://ziontechgroup.com/services/conversational-intelligence',
    icon: '💬'
  },
  {
    id: 'ai-autonomous-vehicle-systems',
    name: 'AI Autonomous Vehicle Systems',
    category: 'ai-services',
    description: 'Complete autonomous vehicle AI system including perception, decision-making, and control algorithms.',
    features: [
      'Computer vision systems',
      'Sensor fusion',
      'Path planning',
      'Obstacle avoidance',
      'Traffic prediction',
      'Real-time decision making',
      'Safety systems',
      'Performance optimization'
    ],
    pricing: {
      starter: 200000,
      professional: 600000,
      enterprise: 1500000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced safety',
      'Reduced accidents',
      'Improved efficiency',
      'Future-ready technology'
    ],
    useCases: [
      'Autonomous cars',
      'Delivery vehicles',
      'Public transportation',
      'Industrial vehicles'
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Lidar', 'Radar', 'SLAM'],
    link: 'https://ziontechgroup.com/services/autonomous-vehicles',
    icon: '🚗'
  },
  {
    id: 'ai-medical-diagnosis-system',
    name: 'AI Medical Diagnosis System',
    category: 'ai-services',
    description: 'Advanced AI medical diagnosis platform that assists healthcare professionals with accurate diagnosis and treatment recommendations.',
    features: [
      'Medical image analysis',
      'Symptom analysis',
      'Disease prediction',
      'Treatment recommendations',
      'Drug interaction checking',
      'Patient monitoring',
      'Clinical decision support',
      'Compliance tracking'
    ],
    pricing: {
      starter: 100000,
      professional: 300000,
      enterprise: 800000,
      currency: 'USD'
    },
    benefits: [
      'Improved diagnostic accuracy',
      'Faster diagnosis',
      'Reduced medical errors',
      'Better patient outcomes'
    ],
    useCases: [
      'Hospitals',
      'Clinics',
      'Medical imaging centers',
      'Telemedicine platforms'
    ],
    technologies: ['Deep Learning', 'Medical Imaging', 'NLP', 'Computer Vision', 'Clinical Data'],
    link: 'https://ziontechgroup.com/services/medical-diagnosis',
    icon: '🏥'
  },
  {
    id: 'ai-financial-risk-management',
    name: 'AI Financial Risk Management',
    category: 'ai-services',
    description: 'Comprehensive AI-powered financial risk management system for real-time risk assessment and mitigation.',
    features: [
      'Real-time risk monitoring',
      'Credit risk assessment',
      'Market risk analysis',
      'Operational risk detection',
      'Regulatory compliance',
      'Stress testing',
      'Scenario analysis',
      'Automated reporting'
    ],
    pricing: {
      starter: 80000,
      professional: 240000,
      enterprise: 600000,
      currency: 'USD'
    },
    benefits: [
      'Reduce financial losses',
      'Improve risk visibility',
      'Ensure compliance',
      'Faster decision making'
    ],
    useCases: [
      'Banks',
      'Investment firms',
      'Insurance companies',
      'Fintech startups'
    ],
    technologies: ['Machine Learning', 'Time Series Analysis', 'Risk Models', 'Big Data', 'Real-time Analytics'],
    link: 'https://ziontechgroup.com/services/financial-risk-management',
    icon: '📊'
  },
  {
    id: 'ai-supply-chain-intelligence',
    name: 'AI Supply Chain Intelligence',
    category: 'ai-services',
    description: 'Intelligent supply chain management system that optimizes operations, predicts disruptions, and ensures resilience.',
    features: [
      'Demand forecasting',
      'Supply optimization',
      'Risk prediction',
      'Vendor management',
      'Quality control',
      'Sustainability tracking',
      'Real-time monitoring',
      'Automated decision making'
    ],
    pricing: {
      starter: 60000,
      professional: 180000,
      enterprise: 450000,
      currency: 'USD'
    },
    benefits: [
      'Reduce supply chain costs',
      'Improve resilience',
      'Optimize inventory',
      'Enhance sustainability'
    ],
    useCases: [
      'Manufacturing',
      'Retail',
      'Logistics',
      'E-commerce'
    ],
    technologies: ['Machine Learning', 'IoT', 'Blockchain', 'Predictive Analytics', 'Optimization'],
    link: 'https://ziontechgroup.com/services/supply-chain-intelligence',
    icon: '🚛'
  },
  {
    id: 'ai-cybersecurity-threat-hunting',
    name: 'AI Cybersecurity Threat Hunting',
    category: 'ai-services',
    description: 'Advanced AI-powered threat hunting system that proactively identifies and neutralizes cyber threats.',
    features: [
      'Proactive threat hunting',
      'Behavioral analysis',
      'Threat intelligence',
      'Incident response',
      'Forensic analysis',
      'Vulnerability assessment',
      'Security orchestration',
      'Compliance monitoring'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Proactive threat detection',
      'Reduce attack surface',
      'Faster incident response',
      'Enhanced security posture'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Government agencies',
      'Healthcare systems'
    ],
    technologies: ['Machine Learning', 'SIEM', 'SOAR', 'Threat Intelligence', 'Behavioral Analytics'],
    link: 'https://ziontechgroup.com/services/cybersecurity-threat-hunting',
    icon: '🛡️'
  },
  {
    id: 'ai-content-generation-platform',
    name: 'AI Content Generation Platform',
    category: 'ai-services',
    description: 'Advanced AI content generation platform that creates high-quality, personalized content across multiple formats and languages.',
    features: [
      'Multi-format content creation',
      'Personalized content',
      'Brand voice adaptation',
      'SEO optimization',
      'Multi-language support',
      'Content quality assurance',
      'Plagiarism detection',
      'Performance analytics'
    ],
    pricing: {
      starter: 30000,
      professional: 90000,
      enterprise: 250000,
      currency: 'USD'
    },
    benefits: [
      'Scale content production',
      'Maintain brand consistency',
      'Reduce content costs',
      'Improve engagement'
    ],
    useCases: [
      'Marketing agencies',
      'Publishing companies',
      'E-commerce businesses',
      'Content creators'
    ],
    technologies: ['GPT-4', 'BERT', 'NLP', 'Computer Vision', 'Content Optimization'],
    link: 'https://ziontechgroup.com/services/content-generation',
    icon: '✍️'
  },
  {
    id: 'ai-personalization-engine',
    name: 'AI Personalization Engine',
    category: 'ai-services',
    description: 'Advanced personalization engine that delivers tailored experiences across all customer touchpoints.',
    features: [
      'Real-time personalization',
      'Cross-channel consistency',
      'Behavioral analysis',
      'Predictive modeling',
      'A/B testing',
      'Performance optimization',
      'Privacy compliance',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 40000,
      professional: 120000,
      enterprise: 300000,
      currency: 'USD'
    },
    benefits: [
      'Increase engagement',
      'Improve conversion rates',
      'Enhance customer experience',
      'Drive revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Mobile apps',
      'Websites'
    ],
    technologies: ['Machine Learning', 'Real-time Analytics', 'Recommendation Systems', 'A/B Testing', 'Personalization'],
    link: 'https://ziontechgroup.com/services/personalization-engine',
    icon: '🎯'
  },
  {
    id: 'ai-quality-assurance-automation',
    name: 'AI Quality Assurance Automation',
    category: 'ai-services',
    description: 'Intelligent QA automation platform that performs comprehensive testing and quality assurance using AI.',
    features: [
      'Automated test generation',
      'Intelligent test execution',
      'Defect prediction',
      'Performance testing',
      'Security testing',
      'User experience testing',
      'Continuous testing',
      'Quality analytics'
    ],
    pricing: {
      starter: 35000,
      professional: 105000,
      enterprise: 280000,
      currency: 'USD'
    },
    benefits: [
      'Reduce testing time',
      'Improve test coverage',
      'Early defect detection',
      'Better software quality'
    ],
    useCases: [
      'Software development',
      'DevOps teams',
      'QA departments',
      'CI/CD pipelines'
    ],
    technologies: ['AI/ML', 'Test Automation', 'Computer Vision', 'NLP', 'Performance Testing'],
    link: 'https://ziontechgroup.com/services/qa-automation',
    icon: '🧪'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};