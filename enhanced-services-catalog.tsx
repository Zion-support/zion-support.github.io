import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  Network, 
  Server, 
  BarChart3, 
  Settings, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Users,
  Database,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Cpu,
  FileText,
  Camera,
  Mic,
  Eye,
  Heart,
  ShoppingCart,
  CreditCard,
  Building,
  Wrench,
  Layers,
  GitBranch,
  Container,
  Key,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Activity,
  Zap as Lightning,
  Package,
  Bot,
  Workflow,
  BrainCircuit,
  Sparkles,
  CircuitBoard,
  Cpu as Processor,
  Database as DataStorage,
  Network as NetworkIcon,
  Cloud as CloudIcon,
  Shield as SecurityIcon,
  BarChart3 as AnalyticsIcon,
  Settings as ConfigIcon,
  Zap as PerformanceIcon,
  Monitor as DisplayIcon,
  Search as SearchIcon,
  MessageSquare as ChatIcon,
  CheckCircle as SuccessIcon,
  ArrowRight as ArrowIcon,
  DollarSign as MoneyIcon,
  Users as TeamIcon,
  Database as DataIcon,
  Globe as WorldIcon,
  Smartphone as MobileIcon,
  Lock as SecurityLockIcon,
  TrendingUp as GrowthIcon,
  Target as GoalIcon,
  Clock as TimeIcon,
  Star as RatingIcon,
  Phone as PhoneIcon,
  Mail as EmailIcon,
  MapPin as LocationIcon,
  Rocket as LaunchIcon,
  Cpu as ChipIcon,
  FileText as DocumentIcon,
  Camera as CameraIcon,
  Mic as MicrophoneIcon,
  Eye as VisionIcon,
  Heart as HealthIcon,
  ShoppingCart as CartIcon,
  CreditCard as PaymentIcon,
  Building as OfficeIcon,
  Wrench as ToolIcon,
  Layers as StackIcon,
  GitBranch as VersionIcon,
  Container as ContainerIcon,
  Key as AccessIcon,
  AlertTriangle as WarningIcon,
  CheckSquare as CheckboxIcon,
  PieChart as ChartIcon,
  Activity as ActivityIcon
} from 'lucide-react';

export default function EnhancedServicesCatalog() {
  const title = 'Comprehensive Services Catalog — Zion Tech Group';
  const description = 'Production-ready micro SaaS, AI, and IT solutions with transparent pricing, fast delivery, and proven ROI. Contact us for custom solutions.';

  const microSaaSServices = [
    {
      name: 'AI-Powered Customer Support Automation',
      description: 'Intelligent chatbot with sentiment analysis, ticket routing, and escalation management',
      icon: MessageSquare,
      features: [
        'Natural language processing with 95% accuracy',
        'Multi-channel support (web, email, social media)',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Real-time analytics and performance metrics',
        'Custom training on your business data'
      ],
      pricing: '$1,200 - $8,500/month',
      delivery: '2-4 weeks',
      category: 'Customer Experience',
      benefits: 'Reduce support costs by 60%, improve response time by 80%',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/micro-saas/ai-customer-support'
    },
    {
      name: 'Cloud Cost Optimization Platform',
      description: 'Automated cloud cost monitoring, rightsizing, and savings recommendations',
      icon: TrendingUp,
      features: [
        'Real-time cost anomaly detection',
        'Automated rightsizing recommendations',
        'Budget alerts and forecasting',
        'Multi-cloud support (AWS, Azure, GCP)',
        'Executive dashboards and reports',
        'ROI tracking and savings validation'
      ],
      pricing: '$299 - $2,500/month',
      delivery: '1-2 weeks',
      category: 'FinOps',
      benefits: 'Average 35% cloud cost reduction, ROI within 3 months',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/cloud-cost-optimization'
    },
    {
      name: 'AI Content Localization Suite',
      description: 'Automated translation, localization, and SEO optimization for global markets',
      icon: Globe,
      features: [
        'Neural machine translation with tone control',
        'Cultural adaptation and localization',
        'SEO optimization for target markets',
        'Content workflow management',
        'Quality assurance and human review',
        'Analytics and performance tracking'
      ],
      pricing: '$399 - $3,200/month',
      delivery: '2-3 weeks',
      category: 'Globalization',
      benefits: 'Reduce localization costs by 70%, faster time-to-market',
      marketPrice: '$800 - $8,000/month',
      link: '/services/micro-saas/content-localization'
    },
    {
      name: 'Healthcare Appointment Scheduling System',
      description: 'Smart scheduling with patient management, reminders, and telemedicine integration',
      icon: Heart,
      features: [
        'Intelligent appointment scheduling',
        'Patient portal and self-service options',
        'Automated reminders and notifications',
        'Telemedicine integration',
        'Insurance verification',
        'HIPAA compliance and security'
      ],
      pricing: '$599 - $4,500/month',
      delivery: '3-5 weeks',
      category: 'Healthcare',
      benefits: 'Reduce no-shows by 40%, improve patient satisfaction',
      marketPrice: '$1,200 - $12,000/month',
      link: '/services/micro-saas/healthcare-scheduling'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Real-time analytics, conversion tracking, and customer behavior insights',
      icon: ShoppingCart,
      features: [
        'Real-time sales and conversion tracking',
        'Customer journey analysis',
        'Inventory management integration',
        'Marketing campaign performance',
        'Predictive analytics for demand',
        'Custom reporting and alerts'
      ],
      pricing: '$199 - $1,800/month',
      delivery: '1-3 weeks',
      category: 'E-commerce',
      benefits: 'Increase conversion rates by 25%, optimize inventory',
      marketPrice: '$400 - $6,000/month',
      link: '/services/micro-saas/ecommerce-analytics'
    },
    {
      name: 'Remote Team Collaboration Hub',
      description: 'Integrated workspace with project management, communication, and productivity tools',
      icon: Users,
      features: [
        'Project management and task tracking',
        'Video conferencing and chat',
        'Document collaboration',
        'Time tracking and productivity metrics',
        'Integration with popular tools',
        'Custom workflows and automation'
      ],
      pricing: '$299 - $2,200/month',
      delivery: '2-4 weeks',
      category: 'Productivity',
      benefits: 'Improve team productivity by 30%, reduce communication overhead',
      marketPrice: '$500 - $8,000/month',
      link: '/services/micro-saas/team-collaboration'
    },
    {
      name: 'AI-Powered Lead Generation Engine',
      description: 'Automated lead scoring, qualification, and nurturing with predictive analytics',
      icon: Target,
      features: [
        'AI-driven lead scoring and qualification',
        'Automated email sequences and nurturing',
        'Social media lead generation',
        'CRM integration and data enrichment',
        'Predictive analytics for conversion',
        'Real-time lead alerts and notifications'
      ],
      pricing: '$499 - $3,800/month',
      delivery: '2-3 weeks',
      category: 'Sales & Marketing',
      benefits: 'Increase qualified leads by 150%, improve conversion rates by 40%',
      marketPrice: '$800 - $12,000/month',
      link: '/services/micro-saas/lead-generation'
    },
    {
      name: 'Smart Inventory Management System',
      description: 'AI-powered inventory optimization with demand forecasting and automated reordering',
      icon: Package,
      features: [
        'Demand forecasting with 95% accuracy',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier management and integration',
        'Cost optimization recommendations',
        'Real-time inventory analytics'
      ],
      pricing: '$399 - $2,800/month',
      delivery: '3-4 weeks',
      category: 'Supply Chain',
      benefits: 'Reduce inventory costs by 25%, eliminate stockouts',
      marketPrice: '$600 - $10,000/month',
      link: '/services/micro-saas/inventory-management'
    },
    {
      name: 'AI Document Processing Suite',
      description: 'Intelligent document extraction, classification, and workflow automation',
      icon: FileText,
      features: [
        'OCR with 99% accuracy for any document type',
        'Intelligent data extraction and validation',
        'Document classification and routing',
        'Workflow automation and approval processes',
        'Integration with existing systems',
        'Compliance and audit trail management'
      ],
      pricing: '$299 - $2,200/month',
      delivery: '2-3 weeks',
      category: 'Document Management',
      benefits: 'Reduce processing time by 80%, eliminate manual errors',
      marketPrice: '$500 - $8,000/month',
      link: '/services/micro-saas/document-processing'
    },
    {
      name: 'Smart Energy Management Platform',
      description: 'AI-driven energy monitoring, optimization, and cost reduction for buildings',
      icon: Zap,
      features: [
        'Real-time energy consumption monitoring',
        'AI-powered optimization recommendations',
        'Predictive maintenance for equipment',
        'Carbon footprint tracking',
        'Cost analysis and savings reports',
        'Integration with smart building systems'
      ],
      pricing: '$199 - $1,500/month',
      delivery: '2-3 weeks',
      category: 'Sustainability',
      benefits: 'Reduce energy costs by 30%, improve sustainability metrics',
      marketPrice: '$400 - $6,000/month',
      link: '/services/micro-saas/energy-management'
    },
    {
      name: 'AI-Powered Fraud Detection System',
      description: 'Real-time fraud detection with machine learning for financial transactions',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Machine learning fraud detection models',
        'Risk scoring and alert systems',
        'Integration with payment processors',
        'Customizable rules and thresholds',
        'Comprehensive fraud analytics'
      ],
      pricing: '$899 - $6,500/month',
      delivery: '3-5 weeks',
      category: 'Security',
      benefits: 'Reduce fraud losses by 85%, improve transaction approval rates',
      marketPrice: '$1,500 - $25,000/month',
      link: '/services/micro-saas/fraud-detection'
    },
    {
      name: 'Smart Contract Management Platform',
      description: 'AI-powered contract analysis, risk assessment, and lifecycle management',
      icon: FileText,
      features: [
        'Automated contract analysis and extraction',
        'Risk assessment and compliance checking',
        'Contract lifecycle management',
        'Renewal and expiration tracking',
        'Integration with legal systems',
        'Performance monitoring and analytics'
      ],
      pricing: '$599 - $4,200/month',
      delivery: '3-4 weeks',
      category: 'Legal Tech',
      benefits: 'Reduce contract review time by 70%, minimize legal risks',
      marketPrice: '$1,000 - $15,000/month',
      link: '/services/micro-saas/contract-management'
    },
    {
      name: 'AI Customer Behavior Analytics',
      description: 'Advanced customer insights with predictive analytics and personalization',
      icon: BarChart3,
      features: [
        'Customer journey mapping and analysis',
        'Predictive behavior modeling',
        'Personalization engine for recommendations',
        'Churn prediction and prevention',
        'Customer lifetime value optimization',
        'Real-time behavioral insights'
      ],
      pricing: '$399 - $3,200/month',
      delivery: '2-4 weeks',
      category: 'Analytics',
      benefits: 'Increase customer retention by 35%, boost revenue per customer',
      marketPrice: '$800 - $12,000/month',
      link: '/services/micro-saas/customer-analytics'
    }
  ];

  const aiServices = [
    {
      name: 'Computer Vision for Quality Control',
      description: 'AI-powered visual inspection for manufacturing, retail, and healthcare',
      icon: Eye,
      features: [
        'Real-time defect detection with 99.5% accuracy',
        'Custom model training for specific use cases',
        'Integration with existing production lines',
        'Automated reporting and analytics',
        'Edge deployment for low latency',
        'Continuous learning and improvement'
      ],
      pricing: '$3,500 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Computer Vision',
      benefits: 'Reduce defects by 90%, improve quality consistency',
      marketPrice: '$5,000 - $50,000/month',
      link: '/services/ai-services/computer-vision'
    },
    {
      name: 'Natural Language Processing Platform',
      description: 'Advanced NLP for document analysis, sentiment, and content generation',
      icon: FileText,
      features: [
        'Document classification and extraction',
        'Sentiment analysis and emotion detection',
        'Content generation and summarization',
        'Multi-language support',
        'Custom model fine-tuning',
        'API integration and deployment'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'NLP',
      benefits: 'Automate 80% of document processing, improve accuracy',
      marketPrice: '$3,000 - $30,000/month',
      link: '/services/ai-services/nlp-platform'
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'Machine learning models for forecasting, risk assessment, and optimization',
      icon: BarChart3,
      features: [
        'Time series forecasting',
        'Risk assessment and scoring',
        'Demand prediction and optimization',
        'Real-time model monitoring',
        'A/B testing and experimentation',
        'Custom algorithm development'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Predictive Analytics',
      benefits: 'Improve forecasting accuracy by 60%, reduce risks',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/predictive-analytics'
    },
    {
      name: 'Voice Recognition & Speech Analytics',
      description: 'Advanced speech processing for call centers, meetings, and accessibility',
      icon: Mic,
      features: [
        'Real-time speech-to-text transcription',
        'Speaker identification and diarization',
        'Sentiment analysis from voice',
        'Call center analytics and insights',
        'Multi-language support',
        'Custom vocabulary and training'
      ],
      pricing: '$1,500 - $12,000/month',
      delivery: '3-5 weeks',
      category: 'Speech Processing',
      benefits: 'Improve call center efficiency by 50%, better customer insights',
      marketPrice: '$2,500 - $25,000/month',
      link: '/services/ai-services/voice-recognition'
    },
    {
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud prevention for financial services and e-commerce',
      icon: Shield,
      features: [
        'Real-time transaction monitoring',
        'Behavioral analysis and anomaly detection',
        'Machine learning model training',
        'Risk scoring and decision automation',
        'False positive reduction',
        'Compliance and audit trails'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Security',
      benefits: 'Reduce fraud losses by 85%, improve customer trust',
      marketPrice: '$8,000 - $60,000/month',
      link: '/services/ai-services/fraud-detection'
    },
    {
      name: 'Autonomous Document Processing',
      description: 'End-to-end document workflow automation with AI intelligence',
      icon: FileText,
      features: [
        'Intelligent document classification',
        'Data extraction and validation',
        'Workflow automation and routing',
        'Quality assurance and human review',
        'Integration with business systems',
        'Compliance and audit capabilities'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Document AI',
      benefits: 'Process documents 10x faster, reduce errors by 95%',
      marketPrice: '$4,000 - $35,000/month',
      link: '/services/ai-services/document-processing'
    },
    {
      name: 'AI-Powered Autonomous Agents',
      description: 'Intelligent agents for business process automation and decision making',
      icon: Bot,
      features: [
        'Multi-agent orchestration and coordination',
        'Natural language task understanding',
        'Autonomous decision making and execution',
        'Learning and adaptation capabilities',
        'Integration with business systems',
        'Human-in-the-loop oversight'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-12 weeks',
      category: 'Autonomous Systems',
      benefits: 'Automate 80% of routine tasks, improve operational efficiency',
      marketPrice: '$8,000 - $70,000/month',
      link: '/services/ai-services/autonomous-agents'
    },
    {
      name: 'Quantum-Enhanced AI Computing',
      description: 'Next-generation AI powered by quantum computing for complex optimization',
      icon: CircuitBoard,
      features: [
        'Quantum machine learning algorithms',
        'Complex optimization problem solving',
        'Quantum neural networks',
        'Hybrid classical-quantum processing',
        'Advanced cryptography and security',
        'Research and development partnership'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '8-16 weeks',
      category: 'Quantum AI',
      benefits: 'Solve previously intractable problems, exponential speedup',
      marketPrice: '$25,000 - $200,000/month',
      link: '/services/ai-services/quantum-ai'
    },
    {
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning for pharmaceutical research and drug development',
      icon: Heart,
      features: [
        'Molecular property prediction',
        'Drug-target interaction modeling',
        'Clinical trial optimization',
        'Adverse effect prediction',
        'Patent analysis and IP research',
        'Regulatory compliance support'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'Healthcare AI',
      benefits: 'Accelerate drug discovery by 5x, reduce development costs',
      marketPrice: '$20,000 - $150,000/month',
      link: '/services/ai-services/drug-discovery'
    },
    {
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and automation',
      icon: Network,
      features: [
        'Demand forecasting and planning',
        'Supplier risk assessment',
        'Route optimization and logistics',
        'Inventory management automation',
        'Sustainability and ESG tracking',
        'Real-time supply chain visibility'
      ],
      pricing: '$4,500 - $25,000/month',
      delivery: '6-10 weeks',
      category: 'Supply Chain AI',
      benefits: 'Reduce supply chain costs by 30%, improve resilience',
      marketPrice: '$7,000 - $50,000/month',
      link: '/services/ai-services/supply-chain-ai'
    },
    {
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection and response with machine learning',
      icon: Shield,
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence and analysis',
        'Automated incident response',
        'Zero-trust security architecture',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-12 weeks',
      category: 'Cybersecurity AI',
      benefits: 'Detect threats 10x faster, reduce false positives by 90%',
      marketPrice: '$10,000 - $80,000/month',
      link: '/services/ai-services/cybersecurity-ai'
    },
    {
      name: 'AI-Powered Climate Analytics',
      description: 'Environmental monitoring and climate change prediction with AI',
      icon: Globe,
      features: [
        'Climate data analysis and modeling',
        'Carbon footprint tracking and optimization',
        'Renewable energy optimization',
        'Environmental risk assessment',
        'Sustainability reporting automation',
        'ESG compliance monitoring'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '6-10 weeks',
      category: 'Climate AI',
      benefits: 'Improve sustainability metrics, reduce environmental impact',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/climate-analytics'
    },
    {
      name: 'AI-Powered Financial Trading Platform',
      description: 'Algorithmic trading and portfolio management with machine learning',
      icon: TrendingUp,
      features: [
        'Algorithmic trading strategies',
        'Risk management and portfolio optimization',
        'Market sentiment analysis',
        'High-frequency trading algorithms',
        'Regulatory compliance monitoring',
        'Performance analytics and reporting'
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '10-16 weeks',
      category: 'FinTech AI',
      benefits: 'Improve trading performance, reduce risk exposure',
      marketPrice: '$15,000 - $120,000/month',
      link: '/services/ai-services/financial-trading'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Migration & Architecture',
      description: 'Complete cloud transformation with modern architecture and best practices',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture',
        'Legacy system modernization',
        'Container orchestration (Kubernetes)',
        'Microservices architecture design',
        'Performance optimization',
        'Cost optimization and monitoring'
      ],
      pricing: '$8,000 - $75,000/project',
      delivery: '8-20 weeks',
      category: 'Cloud Services',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability',
      marketPrice: '$15,000 - $150,000/project',
      link: '/services/it-services/cloud-migration'
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with monitoring and security integration',
      icon: GitBranch,
      features: [
        'Automated CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring and alerting',
        'Security scanning and compliance',
        'Performance optimization'
      ],
      pricing: '$5,000 - $35,000/project',
      delivery: '4-12 weeks',
      category: 'DevOps',
      benefits: 'Deploy 5x faster, reduce deployment failures by 90%',
      marketPrice: '$10,000 - $70,000/project',
      link: '/services/it-services/devops-pipeline'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security assessment, implementation, and compliance management',
      icon: Lock,
      features: [
        'Security assessment and penetration testing',
        'Compliance framework implementation (SOC 2, HIPAA, GDPR)',
        'Security monitoring and incident response',
        'Identity and access management',
        'Data protection and encryption',
        'Security training and awareness'
      ],
      pricing: '$3,000 - $50,000/project',
      delivery: '4-16 weeks',
      category: 'Security',
      benefits: 'Achieve compliance faster, reduce security risks',
      marketPrice: '$6,000 - $100,000/project',
      link: '/services/it-services/cybersecurity'
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Modern data platform with real-time processing and advanced analytics',
      icon: Database,
      features: [
        'Data lake and warehouse design',
        'Real-time data processing',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Machine learning data preparation',
        'Data governance and quality'
      ],
      pricing: '$6,000 - $45,000/project',
      delivery: '6-18 weeks',
      category: 'Data Services',
      benefits: 'Unlock data insights, improve decision-making',
      marketPrice: '$12,000 - $90,000/project',
      link: '/services/it-services/data-engineering'
    },
    {
      name: 'Platform Engineering',
      description: 'Internal developer platform with golden paths and self-service capabilities',
      icon: Layers,
      features: [
        'Developer portal and self-service tools',
        'Golden path templates and standards',
        'Multi-tenant infrastructure',
        'GitOps and automated deployments',
        'Monitoring and observability',
        'Security and compliance automation'
      ],
      pricing: '$10,000 - $60,000/project',
      delivery: '8-20 weeks',
      category: 'Platform Engineering',
      benefits: 'Accelerate development by 3x, improve consistency',
      marketPrice: '$20,000 - $120,000/project',
      link: '/services/it-services/platform-engineering'
    },
    {
      name: 'Observability & Monitoring',
      description: 'Comprehensive monitoring solution with logs, metrics, traces, and alerting',
      icon: Activity,
      features: [
        'Unified observability platform',
        'Application performance monitoring',
        'Infrastructure monitoring',
        'Log aggregation and analysis',
        'Distributed tracing',
        'Intelligent alerting and incident management'
      ],
      pricing: '$2,000 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'Monitoring',
      benefits: 'Reduce MTTR by 70%, improve system reliability',
      marketPrice: '$4,000 - $50,000/project',
      link: '/services/it-services/observability'
    },
    {
      name: 'Edge Computing Infrastructure',
      description: 'Distributed computing infrastructure for low-latency applications',
      icon: Network,
      features: [
        'Edge node deployment and management',
        'Content delivery network optimization',
        'IoT device connectivity and management',
        'Real-time data processing at edge',
        '5G network integration',
        'Edge security and compliance'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '6-12 weeks',
      category: 'Edge Computing',
      benefits: 'Reduce latency by 80%, improve user experience',
      marketPrice: '$10,000 - $80,000/project',
      link: '/services/it-services/edge-computing'
    },
    {
      name: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications and blockchain infrastructure development',
      icon: Key,
      features: [
        'Smart contract development and auditing',
        'DeFi protocol development',
        'NFT marketplace creation',
        'Blockchain integration services',
        'Cryptocurrency wallet development',
        'Web3 application architecture'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '8-16 weeks',
      category: 'Blockchain',
      benefits: 'Enable decentralized solutions, improve transparency',
      marketPrice: '$15,000 - $120,000/project',
      link: '/services/it-services/blockchain'
    },
    {
      name: 'API Gateway & Microservices',
      description: 'Enterprise API management with microservices architecture',
      icon: Server,
      features: [
        'API gateway design and implementation',
        'Microservices architecture patterns',
        'Service mesh implementation',
        'API security and authentication',
        'Rate limiting and throttling',
        'API analytics and monitoring'
      ],
      pricing: '$4,000 - $30,000/project',
      delivery: '4-10 weeks',
      category: 'API Management',
      benefits: 'Improve scalability, enhance developer experience',
      marketPrice: '$8,000 - $60,000/project',
      link: '/services/it-services/api-gateway'
    },
    {
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive backup, recovery, and business continuity planning',
      icon: Shield,
      features: [
        'Multi-region backup strategies',
        'Automated disaster recovery testing',
        'Business continuity planning',
        'Data replication and synchronization',
        'Recovery time objective optimization',
        'Compliance and audit support'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '4-8 weeks',
      category: 'Business Continuity',
      benefits: 'Minimize downtime, ensure business resilience',
      marketPrice: '$6,000 - $50,000/project',
      link: '/services/it-services/disaster-recovery'
    },
    {
      name: 'IT Infrastructure Automation',
      description: 'Infrastructure as Code with automated provisioning and management',
      icon: Settings,
      features: [
        'Infrastructure as Code (IaC) implementation',
        'Automated provisioning and scaling',
        'Configuration management',
        'Infrastructure monitoring and alerting',
        'Cost optimization automation',
        'Compliance and security automation'
      ],
      pricing: '$4,000 - $35,000/project',
      delivery: '4-12 weeks',
      category: 'Infrastructure Automation',
      benefits: 'Reduce manual errors, improve efficiency',
      marketPrice: '$8,000 - $70,000/project',
      link: '/services/it-services/infrastructure-automation'
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic technology consulting for digital business transformation',
      icon: Rocket,
      features: [
        'Digital strategy and roadmap development',
        'Technology stack modernization',
        'Process automation and optimization',
        'Change management and training',
        'ROI analysis and measurement',
        'Continuous improvement programs'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '6-20 weeks',
      category: 'Digital Transformation',
      benefits: 'Accelerate digital adoption, improve competitiveness',
      marketPrice: '$10,000 - $100,000/project',
      link: '/services/it-services/digital-transformation'
    },
    {
      name: 'Compliance & Governance Solutions',
      description: 'Regulatory compliance and governance framework implementation',
      icon: CheckSquare,
      features: [
        'SOC 2, HIPAA, GDPR compliance',
        'Audit trail and documentation',
        'Risk assessment and management',
        'Policy development and implementation',
        'Training and awareness programs',
        'Continuous compliance monitoring'
      ],
      pricing: '$3,000 - $40,000/project',
      delivery: '4-16 weeks',
      category: 'Compliance',
      benefits: 'Achieve compliance faster, reduce audit risks',
      marketPrice: '$6,000 - $80,000/project',
      link: '/services/it-services/compliance'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Average ROI', value: '340%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Average Delivery Time', value: '4 weeks', icon: Clock }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Production-Ready Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Services Catalog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Micro SaaS Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Production-ready micro SaaS applications that solve real business problems with fast deployment and transparent pricing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6 lg:p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-orange-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-orange-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">AI Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions that drive real business results with proven ROI and fast implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6 lg:p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">IT Services & Solutions</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade IT services and infrastructure solutions with modern architecture and best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6 lg:p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-green-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom proposal tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-blue-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fast delivery with proven methodologies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Production-ready solutions with ongoing support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Expert team with 10+ years experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}