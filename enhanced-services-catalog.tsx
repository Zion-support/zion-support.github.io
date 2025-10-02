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
      name: 'AI-Powered Code Review & Security Scanner',
      description: 'Automated code analysis, vulnerability detection, and security compliance checking',
      icon: Shield,
      features: [
        'Real-time vulnerability scanning across 50+ languages',
        'AI-powered code quality analysis and suggestions',
        'Automated security compliance checking (SOC2, GDPR, HIPAA)',
        'Integration with GitHub, GitLab, and Bitbucket',
        'Custom security rules and policy enforcement',
        'Detailed remediation recommendations'
      ],
      pricing: '$499 - $3,500/month',
      delivery: '1-2 weeks',
      category: 'DevSecOps',
      benefits: 'Reduce security vulnerabilities by 85%, accelerate compliance by 70%',
      marketPrice: '$800 - $6,000/month',
      link: '/services/micro-saas/ai-code-security'
    },
    {
      name: 'AI-Driven Predictive Maintenance Platform',
      description: 'IoT sensor data analysis for predictive equipment maintenance and failure prevention',
      icon: Activity,
      features: [
        'Real-time IoT sensor data processing',
        'Machine learning failure prediction models',
        'Automated maintenance scheduling and alerts',
        'Integration with existing ERP and CMMS systems',
        'Cost optimization and resource planning',
        'Custom dashboard and reporting'
      ],
      pricing: '$899 - $5,500/month',
      delivery: '3-5 weeks',
      category: 'Industrial IoT',
      benefits: 'Reduce unplanned downtime by 60%, lower maintenance costs by 40%',
      marketPrice: '$1,500 - $10,000/month',
      link: '/services/micro-saas/predictive-maintenance'
    },
    {
      name: 'AI-Powered Fraud Detection & Risk Management',
      description: 'Real-time fraud detection, risk scoring, and compliance monitoring for financial services',
      icon: AlertTriangle,
      features: [
        'Real-time transaction monitoring and analysis',
        'Advanced fraud pattern recognition',
        'Risk scoring and customer profiling',
        'Regulatory compliance monitoring (AML, KYC)',
        'Custom rule engine and machine learning models',
        'Integration with banking and payment systems'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '4-6 weeks',
      category: 'FinTech',
      benefits: 'Reduce fraud losses by 75%, improve compliance efficiency by 80%',
      marketPrice: '$2,500 - $15,000/month',
      link: '/services/micro-saas/fraud-detection'
    },
    {
      name: 'AI-Enhanced Supply Chain Optimization',
      description: 'Demand forecasting, inventory optimization, and supply chain risk management',
      icon: Network,
      features: [
        'AI-powered demand forecasting with 90%+ accuracy',
        'Dynamic inventory optimization algorithms',
        'Supply chain risk assessment and mitigation',
        'Real-time supplier performance monitoring',
        'Integration with ERP and WMS systems',
        'Cost optimization and sustainability tracking'
      ],
      pricing: '$1,200 - $7,500/month',
      delivery: '3-4 weeks',
      category: 'Supply Chain',
      benefits: 'Reduce inventory costs by 30%, improve forecast accuracy by 85%',
      marketPrice: '$2,000 - $12,000/month',
      link: '/services/micro-saas/supply-chain-ai'
    },
    {
      name: 'AI-Powered Document Intelligence Platform',
      description: 'Automated document processing, data extraction, and intelligent document management',
      icon: FileText,
      features: [
        'OCR and intelligent data extraction from any document type',
        'Natural language processing for document understanding',
        'Automated workflow and approval processes',
        'Integration with existing document management systems',
        'Custom document classification and routing',
        'Compliance and audit trail management'
      ],
      pricing: '$699 - $4,500/month',
      delivery: '2-3 weeks',
      category: 'Document Management',
      benefits: 'Reduce document processing time by 80%, improve accuracy by 95%',
      marketPrice: '$1,200 - $8,000/month',
      link: '/services/micro-saas/document-intelligence'
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
      name: 'Generative AI & Content Creation Platform',
      description: 'AI-powered content generation, copywriting, and creative asset production',
      icon: Rocket,
      features: [
        'Automated blog posts, articles, and marketing copy',
        'AI-generated images, videos, and multimedia content',
        'Personalized content for different audiences and channels',
        'Brand voice consistency and tone management',
        'SEO optimization and content performance tracking',
        'Integration with CMS and marketing automation tools'
      ],
      pricing: '$899 - $6,500/month',
      delivery: '2-3 weeks',
      category: 'Content Marketing',
      benefits: 'Increase content production by 500%, reduce content costs by 60%',
      marketPrice: '$1,500 - $12,000/month',
      link: '/services/ai-services/generative-content'
    },
    {
      name: 'AI-Powered Sales Intelligence & CRM Enhancement',
      description: 'Intelligent lead scoring, sales forecasting, and customer relationship optimization',
      icon: TrendingUp,
      features: [
        'AI-powered lead scoring and qualification',
        'Sales forecasting with 90%+ accuracy',
        'Customer behavior analysis and churn prediction',
        'Automated follow-up and nurturing sequences',
        'Integration with Salesforce, HubSpot, and Pipedrive',
        'Real-time sales performance analytics and insights'
      ],
      pricing: '$1,200 - $8,000/month',
      delivery: '3-4 weeks',
      category: 'Sales Automation',
      benefits: 'Increase conversion rates by 45%, improve sales forecasting accuracy by 90%',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/ai-services/sales-intelligence'
    },
    {
      name: 'AI-Driven Healthcare Diagnostics & Treatment Planning',
      description: 'Medical AI for diagnosis assistance, treatment recommendations, and patient monitoring',
      icon: Heart,
      features: [
        'Medical image analysis (X-rays, MRIs, CT scans)',
        'Symptom analysis and preliminary diagnosis',
        'Drug interaction checking and treatment optimization',
        'Patient risk assessment and monitoring',
        'HIPAA-compliant data processing and storage',
        'Integration with EHR and healthcare management systems'
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '6-10 weeks',
      category: 'Healthcare AI',
      benefits: 'Improve diagnostic accuracy by 85%, reduce misdiagnosis by 60%',
      marketPrice: '$5,000 - $35,000/month',
      link: '/services/ai-services/healthcare-diagnostics'
    },
    {
      name: 'AI-Enhanced E-commerce Personalization Engine',
      description: 'Personalized shopping experiences, product recommendations, and dynamic pricing',
      icon: ShoppingCart,
      features: [
        'AI-powered product recommendations with 95% accuracy',
        'Dynamic pricing optimization and A/B testing',
        'Personalized search and filtering',
        'Customer journey optimization and conversion tracking',
        'Integration with Shopify, WooCommerce, and Magento',
        'Real-time personalization and performance analytics'
      ],
      pricing: '$1,500 - $9,500/month',
      delivery: '3-5 weeks',
      category: 'E-commerce',
      benefits: 'Increase conversion rates by 65%, boost average order value by 40%',
      marketPrice: '$2,500 - $18,000/month',
      link: '/services/ai-services/ecommerce-personalization'
    },
    {
      name: 'AI-Powered Cybersecurity & Threat Detection',
      description: 'Advanced threat detection, incident response, and security automation',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection and user monitoring',
        'Automated incident response and remediation',
        'Security compliance monitoring and reporting',
        'Integration with SIEM and security tools',
        'Custom threat intelligence and model training'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '4-6 weeks',
      category: 'Cybersecurity',
      benefits: 'Reduce security incidents by 80%, improve response time by 90%',
      marketPrice: '$3,500 - $20,000/month',
      link: '/services/ai-services/cybersecurity-ai'
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
      name: 'Blockchain & Web3 Development',
      description: 'Smart contracts, DeFi protocols, and Web3 application development',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi protocol design and implementation',
        'NFT marketplace and token development',
        'Cross-chain integration and bridges',
        'Web3 frontend and wallet integration',
        'Security auditing and testing'
      ],
      pricing: '$8,000 - $80,000/project',
      delivery: '6-20 weeks',
      category: 'Blockchain',
      benefits: 'Launch Web3 products faster, ensure security compliance',
      marketPrice: '$15,000 - $150,000/project',
      link: '/services/it-services/blockchain-development'
    },
    {
      name: 'IoT & Edge Computing Solutions',
      description: 'Internet of Things device integration, edge computing, and real-time data processing',
      icon: Cpu,
      features: [
        'IoT device integration and management',
        'Edge computing architecture design',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'Cloud connectivity and data synchronization',
        'Custom IoT dashboard and monitoring'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '4-12 weeks',
      category: 'IoT',
      benefits: 'Connect devices seamlessly, process data at the edge',
      marketPrice: '$10,000 - $80,000/project',
      link: '/services/it-services/iot-solutions'
    },
    {
      name: 'API Development & Integration',
      description: 'RESTful APIs, GraphQL, and third-party integrations with comprehensive documentation',
      icon: Code,
      features: [
        'RESTful API design and development',
        'GraphQL schema design and implementation',
        'Third-party API integrations',
        'API documentation and testing',
        'Rate limiting and security implementation',
        'API versioning and lifecycle management'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'API Development',
      benefits: 'Accelerate integrations, improve developer experience',
      marketPrice: '$6,000 - $50,000/project',
      link: '/services/it-services/api-development'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern architecture',
      icon: Smartphone,
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Progressive Web App (PWA) development',
        'App store optimization and deployment',
        'Push notifications and offline capabilities',
        'Performance optimization and testing'
      ],
      pricing: '$5,000 - $60,000/project',
      delivery: '6-16 weeks',
      category: 'Mobile Development',
      benefits: 'Launch mobile apps faster, reach wider audience',
      marketPrice: '$10,000 - $120,000/project',
      link: '/services/it-services/mobile-development'
    },
    {
      name: 'Legacy System Modernization',
      description: 'Modernize legacy applications with microservices, cloud migration, and API integration',
      icon: Wrench,
      features: [
        'Legacy application assessment and planning',
        'Microservices architecture migration',
        'Database modernization and optimization',
        'API-first integration approach',
        'Cloud migration and containerization',
        'Performance optimization and monitoring'
      ],
      pricing: '$10,000 - $100,000/project',
      delivery: '8-24 weeks',
      category: 'Modernization',
      benefits: 'Extend system lifespan, improve performance and scalability',
      marketPrice: '$20,000 - $200,000/project',
      link: '/services/it-services/legacy-modernization'
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