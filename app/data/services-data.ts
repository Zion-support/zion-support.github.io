// Comprehensive Services Data for Zion Tech Group
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  Globe, 
  Settings,
  Users,
  Code,
  Lock,
  Monitor,
  Server,
  Cpu,
  Target,
  TrendingUp,
  FileText,
  Mail,
  Calendar,
  CheckCircle,
  DollarSign,
  Headphones,
  Wifi,
  HardDrive,
  Printer,
  Router,
  Laptop,
  Bot,
  Eye,
  Mic,
  Palette,
  Workflow,
  Layers,
  MessageSquare,
  Heart,
  Package,
  Search,
  Filter,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Cpu as CpuIcon,
  Target as TargetIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon,
  Smartphone as SmartphoneIcon,
  Lock as LockIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  Calendar as CalendarIcon,
  CheckSquare,
  FileText as FileTextIcon,
  MessageCircle,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Box,
  Monitor as MonitorIcon,
  Link as LinkIcon,
  Server as ServerIcon
} from 'lucide-react';

// AI Services Data
export const aiServices = [
  {
    id: 1,
    title: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that provides 24/7 customer support, lead qualification, and automated assistance with natural language understanding.',
    icon: Bot,
    category: 'Customer Service',
    features: [
      'Natural language processing (NLP)',
      'Multi-language support (50+ languages)',
      'Sentiment analysis and emotion detection',
      'Integration with CRM systems (Salesforce, HubSpot)',
      'Real-time learning and adaptation',
      'Voice and text conversation support',
      'Custom knowledge base integration',
      'Analytics and performance tracking'
    ],
    price: 'Starting at $299/month',
    marketPrice: '$500-2000/month',
    benefits: [
      'Reduce support costs by 60%',
      '24/7 availability for customers',
      'Instant response times',
      'Scalable to handle unlimited conversations',
      'Multilingual customer support',
      'Lead qualification and nurturing',
      'Integration with existing systems'
    ],
    useCases: [
      'Customer support automation',
      'Lead generation and qualification',
      'FAQ automation',
      'Appointment scheduling',
      'Order tracking and support',
      'Technical support assistance'
    ],
    technologies: ['OpenAI GPT-4', 'Google Dialogflow', 'Microsoft Bot Framework', 'Amazon Lex', 'Custom NLP models'],
    deliveryTime: '2-4 weeks',
    support: '24/7 technical support included'
  },
  {
    id: 2,
    title: 'AI Content Generation & Marketing Automation',
    description: 'Automated content creation using advanced language models for blogs, social media, email campaigns, and marketing materials with brand voice consistency.',
    icon: FileText,
    category: 'Content & Marketing',
    features: [
      'Blog post and article generation',
      'Social media content creation',
      'Email marketing campaigns',
      'SEO-optimized content',
      'Brand voice customization',
      'Multi-language content generation',
      'Content calendar automation',
      'A/B testing and optimization'
    ],
    price: 'Starting at $199/month',
    marketPrice: '$300-1500/month',
    benefits: [
      'Save 80% content creation time',
      'Consistent brand voice across all content',
      'SEO optimization for better rankings',
      'Multi-platform content publishing',
      'Automated content scheduling',
      'Performance analytics and insights'
    ],
    useCases: [
      'Blog content automation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copy generation',
      'Content localization'
    ],
    technologies: ['GPT-4', 'Claude AI', 'Jasper AI', 'Copy.ai', 'Custom content models'],
    deliveryTime: '1-2 weeks',
    support: 'Content strategy consultation included'
  },
  {
    id: 3,
    title: 'AI Data Analytics & Business Intelligence',
    description: 'Advanced analytics and business intelligence powered by machine learning algorithms to transform raw data into actionable insights and predictions.',
    icon: BarChart3,
    category: 'Analytics & BI',
    features: [
      'Predictive analytics and forecasting',
      'Real-time dashboards and visualizations',
      'Automated reporting and insights',
      'Anomaly detection and alerting',
      'Custom data models and algorithms',
      'Data integration from multiple sources',
      'Natural language query interface',
      'ROI and performance optimization'
    ],
    price: 'Starting at $399/month',
    marketPrice: '$800-3000/month',
    benefits: [
      'Data-driven decision making',
      'Predictive forecasting accuracy',
      'Automated report generation',
      'Real-time business insights',
      'Cost reduction through optimization',
      'Competitive advantage through analytics'
    ],
    useCases: [
      'Sales forecasting and pipeline analysis',
      'Customer behavior analysis',
      'Financial performance tracking',
      'Supply chain optimization',
      'Risk assessment and management',
      'Market trend analysis'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI', 'Apache Spark'],
    deliveryTime: '3-6 weeks',
    support: 'Data science consultation included'
  },
  {
    id: 4,
    title: 'AI Computer Vision & Image Processing',
    description: 'Image and video analysis solutions for quality control, security, automation, and visual recognition using advanced computer vision algorithms.',
    icon: Eye,
    category: 'Computer Vision',
    features: [
      'Object detection and recognition',
      'Quality control automation',
      'Facial recognition systems',
      'Video analytics and monitoring',
      'Real-time image processing',
      'OCR and document scanning',
      'Medical image analysis',
      'Autonomous vehicle vision'
    ],
    price: 'Starting at $599/month',
    marketPrice: '$1000-5000/month',
    benefits: [
      'Automated quality control',
      'Enhanced security and monitoring',
      'Real-time visual analysis',
      'Reduced manual inspection costs',
      'Improved accuracy and consistency',
      '24/7 visual monitoring capabilities'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security and surveillance',
      'Medical image diagnosis',
      'Retail inventory management',
      'Autonomous vehicle navigation',
      'Document digitization'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'Custom CNN models'],
    deliveryTime: '4-8 weeks',
    support: 'Model training and optimization included'
  },
  {
    id: 5,
    title: 'AI Voice Processing & Speech Recognition',
    description: 'Advanced speech recognition, synthesis, and voice analytics for customer interactions, accessibility, and voice-controlled applications.',
    icon: Mic,
    category: 'Voice AI',
    features: [
      'Speech-to-text conversion',
      'Text-to-speech synthesis',
      'Voice biometrics and authentication',
      'Call analytics and insights',
      'Multi-language voice support',
      'Noise cancellation and enhancement',
      'Voice emotion analysis',
      'Real-time transcription'
    ],
    price: 'Starting at $249/month',
    marketPrice: '$400-1800/month',
    benefits: [
      'Improved accessibility',
      'Voice automation capabilities',
      'Call quality insights',
      'Multi-language support',
      'Enhanced customer experience',
      'Hands-free operation'
    ],
    useCases: [
      'Voice-controlled applications',
      'Call center automation',
      'Accessibility solutions',
      'Voice search and commands',
      'Language translation',
      'Voice authentication'
    ],
    technologies: ['Google Speech API', 'Amazon Polly', 'Azure Speech', 'Whisper AI', 'Custom voice models'],
    deliveryTime: '2-4 weeks',
    support: 'Voice integration consultation included'
  },
  {
    id: 6,
    title: 'AI Workflow Automation & RPA',
    description: 'Intelligent process automation that learns and optimizes business workflows, reducing manual tasks and improving efficiency.',
    icon: Workflow,
    category: 'Automation',
    features: [
      'Process mining and analysis',
      'Workflow optimization',
      'Task automation and scheduling',
      'Exception handling and escalation',
      'Performance monitoring and analytics',
      'Integration with existing systems',
      'Custom automation rules',
      'Human-in-the-loop workflows'
    ],
    price: 'Starting at $349/month',
    marketPrice: '$600-2500/month',
    benefits: [
      'Process efficiency improvement',
      'Error reduction and consistency',
      'Cost savings through automation',
      'Scalable automation solutions',
      'Improved compliance and audit trails',
      'Faster process execution'
    ],
    useCases: [
      'Invoice processing automation',
      'Customer onboarding workflows',
      'Data entry and validation',
      'Report generation and distribution',
      'Email and communication automation',
      'Compliance monitoring'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Custom RPA'],
    deliveryTime: '3-5 weeks',
    support: 'Process optimization consultation included'
  },
  {
    id: 7,
    title: 'AI Cybersecurity & Threat Detection',
    description: 'Advanced AI-powered security solutions for threat detection, fraud prevention, and risk management with real-time monitoring.',
    icon: Shield,
    category: 'Security',
    features: [
      'Real-time threat detection',
      'Behavioral analysis and monitoring',
      'Fraud pattern recognition',
      'Incident response automation',
      'Vulnerability assessment',
      'Compliance monitoring',
      'Security analytics and reporting',
      'Predictive security insights'
    ],
    price: 'Starting at $499/month',
    marketPrice: '$800-4000/month',
    benefits: [
      'Proactive security protection',
      'Reduced false positives',
      'Faster incident response',
      'Compliance assurance',
      'Cost-effective security monitoring',
      'Advanced threat intelligence'
    ],
    useCases: [
      'Network security monitoring',
      'Fraud detection and prevention',
      'User behavior analytics',
      'Compliance auditing',
      'Incident response automation',
      'Security risk assessment'
    ],
    technologies: ['Machine Learning', 'Deep Learning', 'SIEM', 'SOAR', 'Custom security models'],
    deliveryTime: '4-6 weeks',
    support: 'Security consultation and training included'
  },
  {
    id: 8,
    title: 'AI Mobile Applications & Cross-Platform Development',
    description: 'Custom mobile applications with integrated AI features for iOS and Android, including cross-platform solutions.',
    icon: Smartphone,
    category: 'Mobile Development',
    features: [
      'AI-powered mobile features',
      'Cross-platform development (React Native, Flutter)',
      'Offline AI capabilities',
      'Real-time processing and inference',
      'Custom AI model integration',
      'Push notifications and alerts',
      'App store optimization',
      'Performance monitoring'
    ],
    price: 'Starting at $8,000/project',
    marketPrice: '$15000-50000/project',
    benefits: [
      'Enhanced user experience',
      'Intelligent mobile features',
      'Competitive advantage',
      'Future-proof solutions',
      'Cross-platform compatibility',
      'Reduced development time'
    ],
    useCases: [
      'AI-powered mobile apps',
      'Voice-controlled applications',
      'Image recognition apps',
      'Personalized mobile experiences',
      'Mobile business intelligence',
      'IoT mobile applications'
    ],
    technologies: ['React Native', 'Flutter', 'TensorFlow Lite', 'Core ML', 'ML Kit', 'Custom mobile AI'],
    deliveryTime: '8-16 weeks',
    support: 'App store deployment and maintenance included'
  },
  {
    id: 9,
    title: 'AI Cloud Infrastructure & Model Deployment',
    description: 'Scalable AI infrastructure and model deployment on cloud platforms with auto-scaling and monitoring capabilities.',
    icon: Cloud,
    category: 'Infrastructure',
    features: [
      'Model deployment and serving',
      'Auto-scaling and load balancing',
      'GPU optimization and management',
      'Data pipeline automation',
      'Monitoring and logging',
      'A/B testing for models',
      'Model versioning and management',
      'Cost optimization'
    ],
    price: 'Starting at $699/month',
    marketPrice: '$1200-5000/month',
    benefits: [
      'Scalable AI infrastructure',
      'Cost optimization',
      'High availability and reliability',
      'Easy model deployment',
      'Performance monitoring',
      'Reduced operational overhead'
    ],
    useCases: [
      'AI model hosting and serving',
      'Machine learning pipelines',
      'Real-time inference',
      'Batch processing',
      'Model training infrastructure',
      'AI service APIs'
    ],
    technologies: ['AWS SageMaker', 'Azure ML', 'Google Cloud AI', 'Kubernetes', 'Docker', 'TensorFlow Serving'],
    deliveryTime: '2-4 weeks',
    support: 'Infrastructure monitoring and optimization included'
  },
  {
    id: 10,
    title: 'AI Design Assistant & Creative Tools',
    description: 'AI-powered design tools for graphics, UI/UX, and creative content generation with brand consistency and optimization.',
    icon: Palette,
    category: 'Design & Creative',
    features: [
      'Automated design generation',
      'Brand consistency enforcement',
      'A/B testing optimization',
      'Color and layout suggestions',
      'Template customization',
      'Logo and graphic generation',
      'UI/UX design assistance',
      'Creative inspiration and ideation'
    ],
    price: 'Starting at $199/month',
    marketPrice: '$300-1200/month',
    benefits: [
      'Faster design process',
      'Consistent brand identity',
      'Creative inspiration',
      'Cost-effective design solutions',
      'Automated design optimization',
      'Reduced design iterations'
    ],
    useCases: [
      'Logo and brand design',
      'UI/UX design assistance',
      'Marketing material generation',
      'Social media graphics',
      'Web design optimization',
      'Creative content generation'
    ],
    technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Figma AI', 'Adobe Creative Suite', 'Custom design AI'],
    deliveryTime: '1-3 weeks',
    support: 'Design consultation and training included'
  }
];

// IT Services Data
export const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure & Migration Services',
    description: 'Complete cloud solutions including AWS, Azure, and GCP setup, migration, and optimization with 99.9% uptime guarantee.',
    icon: Cloud,
    category: 'Cloud Services',
    features: [
      'Cloud architecture design and implementation',
      'Multi-cloud and hybrid cloud strategies',
      'Cost optimization and resource management',
      'Disaster recovery and backup solutions',
      'Auto-scaling and load balancing',
      'Security compliance and monitoring',
      '24/7 cloud monitoring and support',
      'Migration planning and execution'
    ],
    price: 'Starting at $2,500/month',
    marketPrice: '$4000-15000/month',
    benefits: [
      '99.9% uptime guarantee',
      'Cost reduction up to 40%',
      'Scalable infrastructure',
      'Expert migration support',
      'Enhanced security and compliance',
      'Reduced operational overhead'
    ],
    useCases: [
      'Legacy system migration',
      'Hybrid cloud implementation',
      'Disaster recovery setup',
      'Cost optimization',
      'Security compliance',
      'Performance optimization'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    deliveryTime: '4-12 weeks',
    support: '24/7 cloud support included'
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions & Compliance',
    description: 'Comprehensive security services including threat detection, compliance management, and incident response with 24/7 monitoring.',
    icon: Shield,
    category: 'Security',
    features: [
      'Threat detection and response',
      'Vulnerability assessments and penetration testing',
      'Security monitoring and alerting',
      'Compliance management (SOC2, GDPR, HIPAA)',
      'Incident response and forensics',
      'Employee security training',
      'Security policy development',
      'Risk assessment and mitigation'
    ],
    price: 'Starting at $1,800/month',
    marketPrice: '$3000-12000/month',
    benefits: [
      '24/7 security monitoring',
      'Reduced security incidents',
      'Compliance assurance',
      'Expert security team',
      'Proactive threat protection',
      'Cost-effective security solutions'
    ],
    useCases: [
      'Security audit and compliance',
      'Threat monitoring and response',
      'Vulnerability management',
      'Security training and awareness',
      'Incident response planning',
      'Risk assessment and mitigation'
    ],
    technologies: ['SIEM', 'SOAR', 'EDR', 'XDR', 'Firewalls', 'VPN', 'Identity Management'],
    deliveryTime: '2-6 weeks',
    support: 'Security consultation and training included'
  },
  {
    id: 3,
    title: 'DevOps & CI/CD Pipeline Implementation',
    description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code for faster delivery.',
    icon: Settings,
    category: 'DevOps',
    features: [
      'CI/CD pipeline setup and optimization',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Monitoring and logging solutions',
      'Automated testing and deployment',
      'Version control and collaboration',
      'Performance monitoring and optimization',
      'Disaster recovery and backup'
    ],
    price: 'Starting at $2,200/month',
    marketPrice: '$3500-10000/month',
    benefits: [
      'Faster deployments and releases',
      'Reduced downtime and errors',
      'Improved code quality',
      'Automated workflows',
      'Better collaboration',
      'Scalable infrastructure'
    ],
    useCases: [
      'Application deployment automation',
      'Infrastructure management',
      'Continuous integration',
      'Performance monitoring',
      'Disaster recovery',
      'Team collaboration optimization'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus'],
    deliveryTime: '3-8 weeks',
    support: 'DevOps training and consultation included'
  },
  {
    id: 4,
    title: 'Database Management & Optimization',
    description: 'Expert database design, optimization, and management for all major database systems with performance tuning.',
    icon: Database,
    category: 'Database',
    features: [
      'Database design and architecture',
      'Performance tuning and optimization',
      'Backup and recovery solutions',
      'Data migration and synchronization',
      'Security hardening and compliance',
      'Monitoring and maintenance',
      'Query optimization',
      'High availability setup'
    ],
    price: 'Starting at $1,200/month',
    marketPrice: '$2000-8000/month',
    benefits: [
      'Improved database performance',
      'Enhanced data security',
      'Automated backups and recovery',
      'Expert DBA support',
      'Cost optimization',
      'Reduced downtime'
    ],
    useCases: [
      'Database performance optimization',
      'Data migration projects',
      'Backup and recovery setup',
      'Database security hardening',
      'High availability configuration',
      'Query performance tuning'
    ],
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle', 'SQL Server'],
    deliveryTime: '2-6 weeks',
    support: 'Database administration and monitoring included'
  },
  {
    id: 5,
    title: 'IT Infrastructure Management',
    description: 'Complete infrastructure setup and management including servers, networks, and hardware with proactive monitoring.',
    icon: Server,
    category: 'Infrastructure',
    features: [
      'Server setup and configuration',
      'Network design and implementation',
      'Hardware procurement and management',
      'System administration and maintenance',
      'Performance monitoring and optimization',
      'Capacity planning and scaling',
      'Disaster recovery planning',
      'Vendor management'
    ],
    price: 'Starting at $1,500/month',
    marketPrice: '$2500-10000/month',
    benefits: [
      'Reliable infrastructure',
      'Proactive monitoring and maintenance',
      'Cost optimization',
      'Expert administration',
      'Reduced downtime',
      'Scalable solutions'
    ],
    useCases: [
      'Infrastructure setup and migration',
      'Server management and optimization',
      'Network configuration and security',
      'Hardware lifecycle management',
      'Performance monitoring',
      'Disaster recovery planning'
    ],
    technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Cisco', 'HP', 'Dell'],
    deliveryTime: '3-8 weeks',
    support: 'Infrastructure monitoring and maintenance included'
  },
  {
    id: 6,
    title: 'Managed IT Services & Helpdesk',
    description: 'Comprehensive IT support and management including helpdesk, maintenance, and monitoring with 24/7 support.',
    icon: Headphones,
    category: 'Support',
    features: [
      '24/7 helpdesk support',
      'Remote monitoring and management',
      'Proactive maintenance and updates',
      'Software and license management',
      'User support and training',
      'Incident management and resolution',
      'Asset management and tracking',
      'Vendor coordination'
    ],
    price: 'Starting at $800/month',
    marketPrice: '$1200-5000/month',
    benefits: [
      'Reduced IT costs',
      'Improved uptime and reliability',
      'Expert support team',
      'Proactive maintenance',
      'Better user experience',
      'Comprehensive IT management'
    ],
    useCases: [
      'IT support outsourcing',
      'Helpdesk management',
      'System monitoring and maintenance',
      'User training and support',
      'Asset management',
      'Vendor management'
    ],
    technologies: ['ServiceNow', 'Jira', 'Zendesk', 'Microsoft 365', 'Active Directory', 'Remote Desktop'],
    deliveryTime: '1-2 weeks',
    support: '24/7 helpdesk support included'
  },
  {
    id: 7,
    title: 'Web Application Development',
    description: 'Custom web applications and e-commerce solutions built with modern technologies and best practices.',
    icon: Globe,
    category: 'Development',
    features: [
      'Custom web application development',
      'E-commerce platform development',
      'API development and integration',
      'Responsive design and mobile optimization',
      'Performance optimization',
      'SEO optimization',
      'Security implementation',
      'Maintenance and support'
    ],
    price: 'Starting at $5,000/project',
    marketPrice: '$8000-50000/project',
    benefits: [
      'Modern technology stack',
      'Mobile-responsive design',
      'SEO optimization',
      'Security best practices',
      'Scalable architecture',
      'Ongoing maintenance and support'
    ],
    useCases: [
      'Custom web applications',
      'E-commerce platforms',
      'Business portals',
      'API development',
      'Web integration projects',
      'Legacy system modernization'
    ],
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress'],
    deliveryTime: '6-16 weeks',
    support: 'Development and maintenance included'
  },
  {
    id: 8,
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
    icon: Smartphone,
    category: 'Development',
    features: [
      'Native iOS and Android development',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design and optimization',
      'App store optimization and deployment',
      'Push notifications and analytics',
      'Offline capabilities and sync',
      'API integration and backend services',
      'Maintenance and updates'
    ],
    price: 'Starting at $8,000/project',
    marketPrice: '$15000-100000/project',
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'Modern UI/UX design',
      'App store optimization',
      'Scalable architecture',
      'Ongoing maintenance and updates'
    ],
    useCases: [
      'Business mobile applications',
      'E-commerce mobile apps',
      'IoT mobile applications',
      'Social media applications',
      'Gaming applications',
      'Enterprise mobile solutions'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
    deliveryTime: '8-20 weeks',
    support: 'App store deployment and maintenance included'
  },
  {
    id: 9,
    title: 'Data Analytics & Business Intelligence',
    description: 'Business intelligence solutions with data visualization, reporting, and analytics for data-driven decisions.',
    icon: BarChart3,
    category: 'Analytics',
    features: [
      'Data visualization and dashboards',
      'Business intelligence solutions',
      'Custom reporting and analytics',
      'Data warehousing and ETL',
      'Predictive analytics and forecasting',
      'Real-time data processing',
      'Data integration and management',
      'Performance monitoring and optimization'
    ],
    price: 'Starting at $1,800/month',
    marketPrice: '$3000-15000/month',
    benefits: [
      'Data-driven insights',
      'Custom dashboards and reports',
      'Automated reporting',
      'Predictive analytics',
      'Real-time data access',
      'Improved decision making'
    ],
    useCases: [
      'Business intelligence implementation',
      'Data visualization projects',
      'Predictive analytics',
      'Reporting automation',
      'Data integration',
      'Performance analytics'
    ],
    technologies: ['Tableau', 'Power BI', 'QlikView', 'Python', 'R', 'SQL', 'Apache Spark'],
    deliveryTime: '4-10 weeks',
    support: 'Analytics consultation and training included'
  },
  {
    id: 10,
    title: 'Network Solutions & Infrastructure',
    description: 'Complete network design, implementation, and management including LAN, WAN, and wireless solutions.',
    icon: Wifi,
    category: 'Networking',
    features: [
      'Network design and implementation',
      'Wireless solutions and optimization',
      'VPN setup and management',
      'Network security and monitoring',
      'Performance optimization',
      'Disaster recovery planning',
      'Vendor management',
      '24/7 network monitoring'
    ],
    price: 'Starting at $1,000/month',
    marketPrice: '$1500-6000/month',
    benefits: [
      'Reliable network connectivity',
      'Enhanced security',
      'Performance optimization',
      'Expert network management',
      'Reduced downtime',
      'Cost-effective solutions'
    ],
    useCases: [
      'Network infrastructure setup',
      'Wireless network optimization',
      'VPN implementation',
      'Network security hardening',
      'Performance monitoring',
      'Disaster recovery planning'
    ],
    technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto', 'Ubiquiti'],
    deliveryTime: '2-6 weeks',
    support: 'Network monitoring and maintenance included'
  }
];

// Micro SAAS Services Data
export const microSaasServices = [
  {
    id: 1,
    title: 'AI-Powered CRM Assistant',
    description: 'Intelligent customer relationship management with AI-driven insights, automated follow-ups, and predictive analytics for sales teams.',
    icon: Users,
    category: 'CRM & Sales',
    features: [
      'AI-powered lead scoring and qualification',
      'Automated follow-up and nurturing',
      'Predictive sales analytics',
      'Customer behavior analysis',
      'Integration with existing CRM systems',
      'Real-time insights and recommendations',
      'Custom reporting and dashboards',
      'Mobile app for sales teams'
    ],
    price: 'Starting at $99/month',
    marketPrice: '$200-800/month',
    benefits: [
      'Increase sales conversion by 40%',
      'Automate repetitive sales tasks',
      'Better customer insights',
      'Improved sales forecasting',
      'Reduced manual data entry',
      'Enhanced team productivity'
    ],
    useCases: [
      'Lead management and qualification',
      'Sales pipeline optimization',
      'Customer relationship management',
      'Sales forecasting and analytics',
      'Automated follow-up campaigns',
      'Performance tracking and reporting'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Salesforce API', 'HubSpot API'],
    deliveryTime: '4-8 weeks',
    support: 'Setup and training included'
  },
  {
    id: 2,
    title: 'AI Email Marketing Automation',
    description: 'Intelligent email marketing platform with AI-driven personalization, segmentation, and automated campaign optimization.',
    icon: Mail,
    category: 'Marketing',
    features: [
      'AI-powered email personalization',
      'Automated segmentation and targeting',
      'A/B testing and optimization',
      'Behavioral trigger campaigns',
      'Email template generation',
      'Deliverability optimization',
      'Analytics and performance tracking',
      'Integration with e-commerce platforms'
    ],
    price: 'Starting at $79/month',
    marketPrice: '$150-600/month',
    benefits: [
      'Increase email open rates by 60%',
      'Automate email campaigns',
      'Better audience targeting',
      'Improved deliverability',
      'Reduced manual work',
      'Higher conversion rates'
    ],
    useCases: [
      'Email campaign automation',
      'Customer segmentation',
      'Welcome email sequences',
      'Abandoned cart recovery',
      'Newsletter management',
      'Lead nurturing campaigns'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'SendGrid', 'Mailchimp API', 'AI personalization'],
    deliveryTime: '3-6 weeks',
    support: 'Campaign setup and optimization included'
  },
  {
    id: 3,
    title: 'AI Expense Tracking & Financial Management',
    description: 'Smart expense tracking and financial management with AI-powered categorization, receipt scanning, and budget optimization.',
    icon: TrendingUp,
    category: 'Finance',
    features: [
      'AI-powered expense categorization',
      'Receipt scanning and OCR',
      'Automated budget tracking',
      'Financial insights and analytics',
      'Tax preparation assistance',
      'Multi-currency support',
      'Integration with accounting software',
      'Mobile app for expense entry'
    ],
    price: 'Starting at $49/month',
    marketPrice: '$100-400/month',
    benefits: [
      'Save 5+ hours per week on expense management',
      'Automated categorization and tracking',
      'Better financial insights',
      'Simplified tax preparation',
      'Reduced manual data entry',
      'Improved budget control'
    ],
    useCases: [
      'Business expense management',
      'Personal finance tracking',
      'Tax preparation',
      'Budget planning and monitoring',
      'Receipt management',
      'Financial reporting'
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'OCR API', 'QuickBooks API', 'AI categorization'],
    deliveryTime: '3-5 weeks',
    support: 'Setup and training included'
  },
  {
    id: 4,
    title: 'AI Invoice Generator & Billing Automation',
    description: 'Automated invoice generation and billing management with AI-powered templates, payment tracking, and client communication.',
    icon: FileText,
    category: 'Billing & Invoicing',
    features: [
      'AI-powered invoice generation',
      'Automated payment reminders',
      'Client portal and payment processing',
      'Recurring billing automation',
      'Tax calculation and compliance',
      'Multi-currency support',
      'Integration with accounting systems',
      'Analytics and reporting'
    ],
    price: 'Starting at $69/month',
    marketPrice: '$120-500/month',
    benefits: [
      'Reduce billing time by 80%',
      'Automated payment collection',
      'Improved cash flow',
      'Reduced billing errors',
      'Better client experience',
      'Streamlined accounting'
    ],
    useCases: [
      'Freelancer billing',
      'Small business invoicing',
      'Recurring subscription billing',
      'Service-based business billing',
      'Multi-client management',
      'Payment tracking and reporting'
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'PayPal', 'QuickBooks API', 'PDF generation'],
    deliveryTime: '2-4 weeks',
    support: 'Setup and payment integration included'
  },
  {
    id: 5,
    title: 'AI Lead Generation & Prospecting',
    description: 'Intelligent lead generation and prospecting platform with AI-powered research, contact finding, and outreach automation.',
    icon: Target,
    category: 'Sales & Marketing',
    features: [
      'AI-powered lead research and scoring',
      'Contact information discovery',
      'Automated outreach campaigns',
      'Social media prospecting',
      'Email verification and validation',
      'CRM integration and synchronization',
      'Performance analytics and optimization',
      'Custom lead qualification rules'
    ],
    price: 'Starting at $149/month',
    marketPrice: '$300-1200/month',
    benefits: [
      'Generate 3x more qualified leads',
      'Automate prospecting processes',
      'Better lead quality and targeting',
      'Reduced manual research time',
      'Improved conversion rates',
      'Scalable lead generation'
    ],
    useCases: [
      'B2B lead generation',
      'Sales prospecting',
      'Outbound marketing campaigns',
      'Lead qualification and scoring',
      'Contact database building',
      'Sales pipeline development'
    ],
    technologies: ['Python', 'React', 'MongoDB', 'LinkedIn API', 'Email APIs', 'AI research tools'],
    deliveryTime: '4-6 weeks',
    support: 'Campaign setup and optimization included'
  },
  {
    id: 6,
    title: 'AI Project Management & Task Automation',
    description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking.',
    icon: Calendar,
    category: 'Project Management',
    features: [
      'AI-powered task prioritization',
      'Automated resource allocation',
      'Progress tracking and analytics',
      'Team collaboration tools',
      'Time tracking and reporting',
      'Risk assessment and alerts',
      'Integration with popular tools',
      'Mobile app for team members'
    ],
    price: 'Starting at $89/month',
    marketPrice: '$150-700/month',
    benefits: [
      'Improve project delivery by 50%',
      'Automated task management',
      'Better resource utilization',
      'Reduced project delays',
      'Enhanced team collaboration',
      'Data-driven project insights'
    ],
    useCases: [
      'Team project management',
      'Task automation and tracking',
      'Resource planning and allocation',
      'Progress monitoring and reporting',
      'Client project delivery',
      'Agile project management'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Jira API', 'Slack API', 'AI optimization'],
    deliveryTime: '4-7 weeks',
    support: 'Setup and team training included'
  },
  {
    id: 7,
    title: 'AI Inventory Management & Optimization',
    description: 'Smart inventory management with AI-powered demand forecasting, automated reordering, and optimization recommendations.',
    icon: Package,
    category: 'Inventory & Supply Chain',
    features: [
      'AI-powered demand forecasting',
      'Automated reorder point calculation',
      'Inventory optimization recommendations',
      'Multi-location inventory tracking',
      'Supplier management and integration',
      'Cost optimization analytics',
      'Barcode scanning and mobile app',
      'Integration with e-commerce platforms'
    ],
    price: 'Starting at $119/month',
    marketPrice: '$200-800/month',
    benefits: [
      'Reduce inventory costs by 30%',
      'Eliminate stockouts and overstock',
      'Automated inventory management',
      'Better demand forecasting',
      'Improved cash flow',
      'Streamlined operations'
    ],
    useCases: [
      'E-commerce inventory management',
      'Retail inventory optimization',
      'Manufacturing inventory control',
      'Multi-location inventory tracking',
      'Supplier management',
      'Cost optimization'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Barcode APIs', 'E-commerce APIs', 'AI forecasting'],
    deliveryTime: '5-8 weeks',
    support: 'Setup and integration included'
  },
  {
    id: 8,
    title: 'AI Customer Support & Helpdesk',
    description: 'Intelligent customer support platform with AI-powered ticket routing, automated responses, and knowledge base management.',
    icon: Headphones,
    category: 'Customer Support',
    features: [
      'AI-powered ticket routing and prioritization',
      'Automated response suggestions',
      'Knowledge base management',
      'Multi-channel support (email, chat, phone)',
      'Customer sentiment analysis',
      'Performance analytics and reporting',
      'Integration with CRM systems',
      'Mobile app for support agents'
    ],
    price: 'Starting at $99/month',
    marketPrice: '$200-900/month',
    benefits: [
      'Reduce response time by 70%',
      'Improve customer satisfaction',
      'Automated ticket management',
      'Better agent productivity',
      'Consistent support quality',
      'Scalable support operations'
    ],
    useCases: [
      'Customer support automation',
      'Helpdesk management',
      'Ticket routing and prioritization',
      'Knowledge base optimization',
      'Multi-channel support',
      'Support analytics and reporting'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Zendesk API', 'Chat integration'],
    deliveryTime: '4-6 weeks',
    support: 'Setup and agent training included'
  },
  {
    id: 9,
    title: 'AI Social Media Management & Analytics',
    description: 'Comprehensive social media management with AI-powered content creation, scheduling, and analytics across all platforms.',
    icon: MessageSquare,
    category: 'Social Media',
    features: [
      'AI-powered content creation and suggestions',
      'Multi-platform posting and scheduling',
      'Hashtag optimization and research',
      'Engagement analytics and insights',
      'Competitor analysis and monitoring',
      'Influencer identification and outreach',
      'Social listening and sentiment analysis',
      'ROI tracking and reporting'
    ],
    price: 'Starting at $79/month',
    marketPrice: '$150-600/month',
    benefits: [
      'Increase engagement by 80%',
      'Save 10+ hours per week',
      'Better content performance',
      'Automated social media management',
      'Improved brand awareness',
      'Data-driven social strategy'
    ],
    useCases: [
      'Social media content management',
      'Brand awareness and engagement',
      'Social media advertising',
      'Influencer marketing',
      'Social listening and monitoring',
      'Competitive analysis'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social Media APIs', 'AI content generation', 'Analytics APIs'],
    deliveryTime: '3-5 weeks',
    support: 'Setup and strategy consultation included'
  },
  {
    id: 10,
    title: 'AI HR Management & Recruitment',
    description: 'Intelligent HR management platform with AI-powered resume screening, candidate matching, and employee analytics.',
    icon: Users,
    category: 'Human Resources',
    features: [
      'AI-powered resume screening and matching',
      'Automated candidate communication',
      'Interview scheduling and coordination',
      'Employee performance analytics',
      'Skills gap analysis and recommendations',
      'Compliance tracking and reporting',
      'Integration with job boards',
      'Mobile app for employees'
    ],
    price: 'Starting at $129/month',
    marketPrice: '$250-1000/month',
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Automated HR processes',
      'Better employee insights',
      'Reduced recruitment costs',
      'Enhanced compliance management'
    ],
    useCases: [
      'Recruitment and hiring',
      'Employee performance management',
      'Skills development and training',
      'HR compliance and reporting',
      'Employee engagement',
      'Talent acquisition'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI matching algorithms', 'Job board APIs', 'Analytics'],
    deliveryTime: '5-8 weeks',
    support: 'Setup and HR training included'
  }
];

// Emerging Technologies Services
export const emergingTechServices = [
  {
    id: 1,
    title: 'Quantum Computing Solutions',
    description: 'Cutting-edge quantum computing applications for optimization, cryptography, and complex problem solving.',
    icon: Cpu,
    category: 'Quantum Computing',
    features: [
      'Quantum algorithm development',
      'Cryptography and security',
      'Optimization problems solving',
      'Quantum machine learning',
      'Quantum simulation',
      'Hybrid classical-quantum systems',
      'Quantum cloud access',
      'Research and development'
    ],
    price: 'Starting at $5,000/month',
    marketPrice: '$10000-50000/month',
    benefits: [
      'Exponential computational power',
      'Revolutionary problem solving',
      'Future-proof technology',
      'Competitive advantage',
      'Research and innovation',
      'Cutting-edge solutions'
    ],
    useCases: [
      'Financial modeling and optimization',
      'Drug discovery and research',
      'Cryptography and security',
      'Supply chain optimization',
      'Machine learning acceleration',
      'Scientific research'
    ],
    technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Rigetti Forest', 'D-Wave', 'Custom quantum algorithms'],
    deliveryTime: '8-16 weeks',
    support: 'Research and development support included'
  },
  {
    id: 2,
    title: '5G Implementation & Edge Computing',
    description: 'Next-generation 5G network implementation with edge computing solutions for ultra-low latency applications.',
    icon: Wifi,
    category: '5G & Edge Computing',
    features: [
      '5G network design and implementation',
      'Edge computing infrastructure',
      'Ultra-low latency applications',
      'IoT device connectivity',
      'Network slicing and optimization',
      'Security and compliance',
      'Performance monitoring',
      'Scalable architecture'
    ],
    price: 'Starting at $3,000/month',
    marketPrice: '$5000-25000/month',
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive IoT connectivity',
      'Enhanced user experience',
      'Future-ready infrastructure',
      'Competitive advantage'
    ],
    useCases: [
      'Autonomous vehicle connectivity',
      'Industrial IoT applications',
      'Real-time gaming and VR',
      'Smart city infrastructure',
      'Telemedicine and remote surgery',
      'Manufacturing automation'
    ],
    technologies: ['5G Core', 'Edge Computing', 'Kubernetes', 'Docker', 'IoT protocols', 'Network slicing'],
    deliveryTime: '6-12 weeks',
    support: 'Network optimization and monitoring included'
  },
  {
    id: 3,
    title: 'Blockchain & Web3 Solutions',
    description: 'Decentralized applications, smart contracts, and blockchain infrastructure for secure and transparent operations.',
    icon: Lock,
    category: 'Blockchain & Web3',
    features: [
      'Smart contract development',
      'DeFi applications',
      'NFT marketplace development',
      'Blockchain infrastructure setup',
      'Cryptocurrency integration',
      'Decentralized identity solutions',
      'Cross-chain interoperability',
      'Security auditing'
    ],
    price: 'Starting at $4,000/month',
    marketPrice: '$8000-40000/month',
    benefits: [
      'Enhanced security and transparency',
      'Decentralized operations',
      'Reduced intermediaries',
      'Immutable records',
      'Global accessibility',
      'Innovation opportunities'
    ],
    useCases: [
      'Supply chain transparency',
      'Digital identity management',
      'Decentralized finance',
      'NFT and digital assets',
      'Smart contracts automation',
      'Cross-border payments'
    ],
    technologies: ['Ethereum', 'Polygon', 'Solana', 'Web3.js', 'Solidity', 'IPFS', 'MetaMask'],
    deliveryTime: '8-20 weeks',
    support: 'Blockchain consultation and auditing included'
  },
  {
    id: 4,
    title: 'Autonomous Systems & Robotics',
    description: 'AI-powered autonomous systems and robotics solutions for industrial automation and intelligent operations.',
    icon: Settings,
    category: 'Autonomous Systems',
    features: [
      'Autonomous vehicle systems',
      'Industrial robotics',
      'Drone and UAV solutions',
      'Autonomous navigation',
      'Computer vision integration',
      'Sensor fusion and processing',
      'Safety and compliance systems',
      'Remote monitoring and control'
    ],
    price: 'Starting at $6,000/month',
    marketPrice: '$12000-60000/month',
    benefits: [
      'Increased operational efficiency',
      'Reduced human error',
      '24/7 autonomous operation',
      'Enhanced safety',
      'Cost reduction',
      'Scalable automation'
    ],
    useCases: [
      'Autonomous vehicle development',
      'Industrial automation',
      'Warehouse robotics',
      'Agricultural automation',
      'Security and surveillance',
      'Delivery and logistics'
    ],
    technologies: ['ROS', 'TensorFlow', 'OpenCV', 'LiDAR', 'Computer Vision', 'Machine Learning', 'IoT'],
    deliveryTime: '12-24 weeks',
    support: 'System integration and maintenance included'
  }
];

// Contact Information
export const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available'
};

// Service Categories
export const serviceCategories = [
  { id: 'ai', name: 'AI Services', icon: Brain, count: aiServices.length },
  { id: 'it', name: 'IT Services', icon: Cloud, count: itServices.length },
  { id: 'micro-saas', name: 'Micro SAAS', icon: Cpu, count: microSaasServices.length },
  { id: 'emerging-tech', name: 'Emerging Tech', icon: Sparkles, count: emergingTechServices.length }
];

// All Services Combined
export const allServices = [
  ...aiServices.map(service => ({ ...service, type: 'ai' })),
  ...itServices.map(service => ({ ...service, type: 'it' })),
  ...microSaasServices.map(service => ({ ...service, type: 'micro-saas' })),
  ...emergingTechServices.map(service => ({ ...service, type: 'emerging-tech' }))
];