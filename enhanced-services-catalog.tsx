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
  Zap as Lightning
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
      name: 'Healthcare Appointment Scheduling Platform',
      description: 'Complete appointment management system with telemedicine integration and patient portal',
      icon: Heart,
      features: [
        'Online appointment booking and management',
        'Telemedicine video consultation integration',
        'Patient portal with medical history access',
        'Automated reminders and notifications',
        'Insurance verification and billing integration',
        'HIPAA-compliant data security'
      ],
      pricing: '$299 - $2,999/month',
      delivery: '3-6 weeks',
      category: 'Healthcare',
      benefits: 'Reduce no-shows by 40%, improve patient satisfaction by 60%',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/healthcare-scheduling'
    },
    {
      name: 'AI Content Generation Suite',
      description: 'Automated content creation for blogs, social media, and marketing campaigns',
      icon: FileText,
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing campaign automation',
        'SEO optimization and keyword research',
        'Brand voice consistency training',
        'Content calendar and scheduling'
      ],
      pricing: '$199 - $1,999/month',
      delivery: '1-3 weeks',
      category: 'Content Marketing',
      benefits: 'Increase content output by 300%, improve SEO rankings',
      marketPrice: '$300 - $3,000/month',
      link: '/services/micro-saas/ai-content-generation'
    },
    {
      name: 'Remote Work Collaboration Hub',
      description: 'Integrated platform combining video conferencing, project management, and team communication',
      icon: Users,
      features: [
        'HD video conferencing with screen sharing',
        'Project management and task tracking',
        'Team chat and file sharing',
        'Time tracking and productivity analytics',
        'Integration with popular business tools',
        'Mobile app for on-the-go access'
      ],
      pricing: '$99 - $999/month',
      delivery: '2-4 weeks',
      category: 'Remote Work',
      benefits: 'Improve team productivity by 45%, reduce meeting overhead',
      marketPrice: '$150 - $1,500/month',
      link: '/services/micro-saas/remote-collaboration'
    },
    {
      name: 'E-commerce Analytics Dashboard',
      description: 'Advanced analytics platform for online stores with AI-powered insights and recommendations',
      icon: ShoppingCart,
      features: [
        'Real-time sales and revenue tracking',
        'Customer behavior analysis and segmentation',
        'Inventory management and demand forecasting',
        'Marketing campaign performance tracking',
        'AI-powered product recommendations',
        'Custom reporting and alerts'
      ],
      pricing: '$149 - $1,499/month',
      delivery: '2-3 weeks',
      category: 'E-commerce',
      benefits: 'Increase conversion rates by 25%, optimize inventory costs',
      marketPrice: '$250 - $2,500/month',
      link: '/services/micro-saas/ecommerce-analytics'
    },
    {
      name: 'AI-Powered Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and behavioral triggers',
      icon: Mail,
      features: [
        'Behavioral trigger automation',
        'Advanced segmentation and personalization',
        'A/B testing and optimization',
        'Deliverability monitoring and optimization',
        'ROI tracking and analytics',
        'Integration with CRM and e-commerce platforms'
      ],
      pricing: '$79 - $799/month',
      delivery: '1-2 weeks',
      category: 'Email Marketing',
      benefits: 'Increase open rates by 40%, boost conversion rates by 60%',
      marketPrice: '$120 - $1,200/month',
      link: '/services/micro-saas/email-automation'
    },
    {
      name: 'Financial Planning & Budgeting Tool',
      description: 'Personal and business financial management with AI-powered insights and forecasting',
      icon: CreditCard,
      features: [
        'Automated expense tracking and categorization',
        'Budget creation and monitoring',
        'Financial goal setting and tracking',
        'Investment portfolio analysis',
        'Tax optimization recommendations',
        'Multi-currency support and reporting'
      ],
      pricing: '$29 - $299/month',
      delivery: '2-4 weeks',
      category: 'FinTech',
      benefits: 'Improve financial health, reduce unnecessary expenses by 30%',
      marketPrice: '$50 - $500/month',
      link: '/services/micro-saas/financial-planning'
    },
    {
      name: 'AI-Powered Inventory Management',
      description: 'Smart inventory tracking with demand forecasting, automated reordering, and optimization',
      icon: Database,
      features: [
        'Real-time inventory tracking across multiple locations',
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Supplier management and procurement',
        'Cost optimization and waste reduction',
        'Integration with POS and e-commerce systems'
      ],
      pricing: '$199 - $1,999/month',
      delivery: '3-5 weeks',
      category: 'Inventory Management',
      benefits: 'Reduce stockouts by 70%, optimize inventory costs by 35%',
      marketPrice: '$300 - $3,000/month',
      link: '/services/micro-saas/inventory-management'
    },
    {
      name: 'Social Media Management Platform',
      description: 'Comprehensive social media management with AI content optimization and scheduling',
      icon: Globe,
      features: [
        'Multi-platform posting and scheduling',
        'AI-powered content optimization',
        'Engagement tracking and analytics',
        'Influencer collaboration tools',
        'Social listening and sentiment analysis',
        'Team collaboration and approval workflows'
      ],
      pricing: '$99 - $999/month',
      delivery: '2-3 weeks',
      category: 'Social Media',
      benefits: 'Increase engagement by 50%, save 20 hours per week',
      marketPrice: '$150 - $1,500/month',
      link: '/services/micro-saas/social-media-management'
    },
    {
      name: 'AI-Powered Lead Generation System',
      description: 'Automated lead identification, qualification, and nurturing with AI scoring',
      icon: Target,
      features: [
        'Automated lead identification and scoring',
        'Multi-channel lead capture forms',
        'Behavioral tracking and qualification',
        'Automated follow-up sequences',
        'CRM integration and data enrichment',
        'ROI tracking and conversion analytics'
      ],
      pricing: '$299 - $2,999/month',
      delivery: '3-4 weeks',
      category: 'Lead Generation',
      benefits: 'Increase qualified leads by 200%, improve conversion rates by 45%',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/lead-generation'
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
      name: 'AI-Powered Code Generation & Review',
      description: 'Automated code generation, review, and optimization for faster development',
      icon: Code,
      features: [
        'Natural language to code generation',
        'Automated code review and optimization',
        'Bug detection and security vulnerability scanning',
        'Code documentation generation',
        'Performance optimization suggestions',
        'Integration with popular IDEs and version control'
      ],
      pricing: '$1,999 - $15,999/month',
      delivery: '3-6 weeks',
      category: 'Development Tools',
      benefits: 'Reduce development time by 60%, improve code quality by 80%',
      marketPrice: '$3,000 - $25,000/month',
      link: '/services/ai-services/code-generation'
    },
    {
      name: 'AI-Powered Cybersecurity Platform',
      description: 'Advanced threat detection, incident response, and security automation',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Automated incident response and remediation',
        'Behavioral analysis and anomaly detection',
        'Security policy enforcement and compliance',
        'Penetration testing and vulnerability assessment',
        'Security awareness training and simulation'
      ],
      pricing: '$3,999 - $25,999/month',
      delivery: '4-8 weeks',
      category: 'Cybersecurity',
      benefits: 'Reduce security incidents by 90%, improve response time by 75%',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/cybersecurity'
    },
    {
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and risk mitigation',
      icon: Network,
      features: [
        'Demand forecasting and inventory optimization',
        'Supplier risk assessment and monitoring',
        'Route optimization and logistics planning',
        'Cost optimization and waste reduction',
        'Supply chain visibility and tracking',
        'Risk mitigation and contingency planning'
      ],
      pricing: '$4,999 - $30,999/month',
      delivery: '6-12 weeks',
      category: 'Supply Chain',
      benefits: 'Reduce supply chain costs by 25%, improve efficiency by 40%',
      marketPrice: '$8,000 - $50,000/month',
      link: '/services/ai-services/supply-chain'
    },
    {
      name: 'AI-Powered HR & Talent Management',
      description: 'Intelligent recruitment, employee engagement, and performance management',
      icon: Users,
      features: [
        'Automated resume screening and candidate matching',
        'Employee engagement and sentiment analysis',
        'Performance prediction and career development',
        'Bias detection and diversity optimization',
        'Workforce planning and succession management',
        'Employee retention and satisfaction analytics'
      ],
      pricing: '$2,999 - $20,999/month',
      delivery: '4-8 weeks',
      category: 'Human Resources',
      benefits: 'Improve hiring quality by 50%, reduce turnover by 35%',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/ai-services/hr-management'
    },
    {
      name: 'AI-Powered Marketing Automation',
      description: 'Comprehensive marketing automation with personalization and optimization',
      icon: Target,
      features: [
        'Customer journey mapping and automation',
        'Personalized content and product recommendations',
        'Multi-channel campaign orchestration',
        'A/B testing and optimization',
        'Customer lifetime value prediction',
        'Marketing ROI tracking and attribution'
      ],
      pricing: '$2,499 - $18,999/month',
      delivery: '4-8 weeks',
      category: 'Marketing',
      benefits: 'Increase conversion rates by 65%, improve customer lifetime value by 40%',
      marketPrice: '$4,000 - $30,000/month',
      link: '/services/ai-services/marketing-automation'
    },
    {
      name: 'AI-Powered Quality Assurance',
      description: 'Automated testing, quality control, and defect detection across all industries',
      icon: CheckSquare,
      features: [
        'Automated test case generation and execution',
        'Visual and functional testing automation',
        'Performance and load testing',
        'Defect prediction and prevention',
        'Quality metrics and reporting',
        'Continuous integration and deployment'
      ],
      pricing: '$1,999 - $15,999/month',
      delivery: '3-6 weeks',
      category: 'Quality Assurance',
      benefits: 'Reduce testing time by 70%, improve defect detection by 85%',
      marketPrice: '$3,000 - $25,000/month',
      link: '/services/ai-services/quality-assurance'
    },
    {
      name: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review, contract analysis, and compliance monitoring',
      icon: FileText,
      features: [
        'Contract analysis and risk assessment',
        'Legal document review and summarization',
        'Compliance monitoring and reporting',
        'Legal research and case law analysis',
        'Document comparison and version control',
        'Automated legal workflow management'
      ],
      pricing: '$3,999 - $25,999/month',
      delivery: '4-8 weeks',
      category: 'Legal Tech',
      benefits: 'Reduce document review time by 80%, improve accuracy by 90%',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/legal-analysis'
    },
    {
      name: 'AI-Powered Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment optimization',
      icon: Building,
      features: [
        'Automated property valuation and appraisal',
        'Market trend analysis and forecasting',
        'Investment opportunity identification',
        'Risk assessment and portfolio optimization',
        'Property management automation',
        'Tenant screening and lease management'
      ],
      pricing: '$2,999 - $20,999/month',
      delivery: '4-8 weeks',
      category: 'Real Estate',
      benefits: 'Improve investment returns by 30%, reduce analysis time by 75%',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/ai-services/real-estate'
    },
    {
      name: 'AI-Powered Energy Management',
      description: 'Smart energy optimization, consumption monitoring, and sustainability analytics',
      icon: Zap,
      features: [
        'Energy consumption monitoring and optimization',
        'Renewable energy integration and management',
        'Carbon footprint tracking and reduction',
        'Predictive maintenance for energy systems',
        'Energy cost optimization and forecasting',
        'Sustainability reporting and compliance'
      ],
      pricing: '$3,999 - $25,999/month',
      delivery: '4-8 weeks',
      category: 'Energy Management',
      benefits: 'Reduce energy costs by 35%, improve sustainability metrics by 50%',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/ai-services/energy-management'
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
      name: 'Blockchain Development & Integration',
      description: 'Custom blockchain solutions, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration with existing systems',
        'Cryptocurrency wallet and exchange development',
        'Supply chain transparency solutions',
        'Identity verification and authentication systems'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'Blockchain',
      benefits: 'Increase transparency and security, reduce transaction costs by 60%',
      marketPrice: '$12,000 - $80,000/month',
      link: '/services/it-services/blockchain-development'
    },
    {
      name: 'IoT Solutions & Edge Computing',
      description: 'Internet of Things platform development with edge computing capabilities',
      icon: Cpu,
      features: [
        'IoT device integration and management',
        'Edge computing infrastructure setup',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'Predictive maintenance and monitoring',
        'Integration with cloud platforms'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '6-12 weeks',
      category: 'IoT',
      benefits: 'Improve operational efficiency by 45%, reduce maintenance costs by 50%',
      marketPrice: '$10,000 - $65,000/month',
      link: '/services/it-services/iot-solutions'
    },
    {
      name: 'Microservices Architecture & API Development',
      description: 'Scalable microservices architecture with comprehensive API management',
      icon: Layers,
      features: [
        'Microservices architecture design and implementation',
        'API gateway and management platform',
        'Service mesh and communication protocols',
        'API documentation and testing automation',
        'Rate limiting and security policies',
        'Performance monitoring and optimization'
      ],
      pricing: '$7,000 - $45,000/month',
      delivery: '6-14 weeks',
      category: 'Microservices',
      benefits: 'Improve scalability by 300%, reduce development time by 40%',
      marketPrice: '$11,000 - $70,000/month',
      link: '/services/it-services/microservices-architecture'
    },
    {
      name: 'Mobile App Development (iOS/Android)',
      description: 'Native and cross-platform mobile application development',
      icon: Smartphone,
      features: [
        'Native iOS and Android app development',
        'Cross-platform development (React Native, Flutter)',
        'App store optimization and deployment',
        'Push notifications and analytics integration',
        'Offline functionality and data synchronization',
        'App security and performance optimization'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-16 weeks',
      category: 'Mobile Development',
      benefits: 'Increase user engagement by 60%, improve app store rankings',
      marketPrice: '$6,000 - $40,000/month',
      link: '/services/it-services/mobile-development'
    },
    {
      name: 'Web Application Development',
      description: 'Modern web applications with responsive design and advanced functionality',
      icon: Monitor,
      features: [
        'Progressive Web App (PWA) development',
        'Single Page Application (SPA) development',
        'Responsive design and mobile optimization',
        'Performance optimization and SEO',
        'User authentication and authorization',
        'Third-party integrations and APIs'
      ],
      pricing: '$3,500 - $22,000/month',
      delivery: '4-12 weeks',
      category: 'Web Development',
      benefits: 'Improve user experience by 70%, increase conversion rates by 40%',
      marketPrice: '$5,500 - $35,000/month',
      link: '/services/it-services/web-development'
    },
    {
      name: 'Database Design & Optimization',
      description: 'Database architecture, optimization, and migration services',
      icon: Database,
      features: [
        'Database architecture design and planning',
        'Performance tuning and optimization',
        'Database migration and modernization',
        'Backup and disaster recovery solutions',
        'Data security and compliance implementation',
        'Monitoring and maintenance automation'
      ],
      pricing: '$2,500 - $18,000/month',
      delivery: '3-8 weeks',
      category: 'Database',
      benefits: 'Improve query performance by 80%, reduce downtime by 95%',
      marketPrice: '$4,000 - $30,000/month',
      link: '/services/it-services/database-optimization'
    },
    {
      name: 'Network Security & Infrastructure',
      description: 'Comprehensive network security and infrastructure management',
      icon: Shield,
      features: [
        'Network security assessment and implementation',
        'Firewall configuration and management',
        'VPN and remote access solutions',
        'Network monitoring and intrusion detection',
        'Security policy development and enforcement',
        'Compliance auditing and reporting'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '3-8 weeks',
      category: 'Network Security',
      benefits: 'Reduce security incidents by 85%, improve network performance by 50%',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/it-services/network-security'
    },
    {
      name: 'IT Consulting & Digital Transformation',
      description: 'Strategic IT consulting and digital transformation roadmap development',
      icon: Building,
      features: [
        'IT strategy development and planning',
        'Digital transformation roadmap creation',
        'Technology stack evaluation and selection',
        'Process optimization and automation',
        'Change management and training',
        'ROI analysis and performance measurement'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'IT Consulting',
      benefits: 'Improve operational efficiency by 40%, reduce IT costs by 30%',
      marketPrice: '$3,500 - $25,000/month',
      link: '/services/it-services/it-consulting'
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
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