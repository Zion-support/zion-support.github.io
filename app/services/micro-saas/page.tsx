import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Code, 
  MessageSquare, 
  TrendingUp, 
  Globe, 
  Heart, 
  ShoppingCart, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Rocket,
  Award,
  Building,
  CreditCard,
  Database,
  Shield,
  BarChart3,
  FileText,
  Smartphone,
  Laptop,
  Monitor,
  Settings,
  PieChart,
  Activity,
  Eye,
  Mic,
  Lock,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  AlertTriangle,
  CheckSquare,
  Globe as World,
  Users as Team,
  Building as Office,
  Heart as Health,
  ShoppingCart as Cart,
  CreditCard as Payment
} from 'lucide-react';

export default function MicroSaaSPage() {
  const title = 'Micro SaaS Solutions — Zion Tech Group';
  const description = 'Production-ready micro SaaS applications including AI customer support, cloud cost optimization, content localization, healthcare scheduling, e-commerce analytics, and team collaboration. Fast deployment with proven ROI.';

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
        'Custom training on your business data',
        'Voice and text support capabilities',
        '24/7 availability with human handoff'
      ],
      pricing: '$1,200 - $8,500/month',
      delivery: '2-4 weeks',
      category: 'Customer Experience',
      benefits: 'Reduce support costs by 60%, improve response time by 80%',
      marketPrice: '$2,000 - $15,000/month',
      link: '/services/micro-saas/ai-customer-support',
      useCases: ['Customer Support', 'Sales Assistance', 'Technical Support', 'FAQ Automation'],
      technologies: ['GPT', 'BERT', 'Dialogflow', 'Rasa', 'WebRTC', 'NLP']
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
        'ROI tracking and savings validation',
        'Cost allocation and chargeback',
        'Reserved instance optimization'
      ],
      pricing: '$299 - $2,500/month',
      delivery: '1-2 weeks',
      category: 'FinOps',
      benefits: 'Average 35% cloud cost reduction, ROI within 3 months',
      marketPrice: '$500 - $5,000/month',
      link: '/services/micro-saas/cloud-cost-optimization',
      useCases: ['Cost Management', 'Budget Planning', 'Resource Optimization', 'Financial Reporting'],
      technologies: ['AWS Cost Explorer', 'Azure Cost Management', 'GCP Billing', 'Terraform', 'CloudWatch']
    },
    {
      name: 'AI-Powered Lead Scoring Engine',
      description: 'Intelligent lead qualification and scoring using machine learning algorithms',
      icon: BarChart3,
      features: [
        'Behavioral pattern analysis and scoring',
        'Predictive lead conversion modeling',
        'Real-time lead prioritization',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Custom scoring models and thresholds'
      ],
      pricing: '$499 - $2,999/month',
      delivery: '2-3 weeks',
      category: 'Sales Intelligence',
      marketPrice: '$1,000-5,000/month',
      benefits: 'Increase conversion rates by 35-60%'
    },
    {
      name: 'Smart Inventory Management System',
      description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
      icon: Database,
      features: [
        'Demand forecasting using ML algorithms',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier integration and PO automation',
        'Dead stock identification and liquidation'
      ],
      pricing: '$799 - $4,999/month',
      delivery: '3-4 weeks',
      category: 'Supply Chain',
      marketPrice: '$1,500-8,000/month',
      benefits: 'Reduce inventory costs by 25-45%'
    },
    {
      name: 'Employee Wellness & Productivity Tracker',
      description: 'Comprehensive employee wellness monitoring with productivity insights and burnout prevention',
      icon: Users,
      features: [
        'Workload and stress level monitoring',
        'Productivity pattern analysis',
        'Burnout risk assessment and alerts',
        'Wellness program recommendations',
        'Anonymous reporting and analytics'
      ],
      pricing: '$399 - $2,499/month',
      delivery: '2-3 weeks',
      category: 'HR Tech',
      marketPrice: '$800-4,000/month',
      benefits: 'Reduce turnover by 30% and increase productivity by 20%'
    },
    {
      name: 'Automated Social Media Content Scheduler',
      description: 'AI-powered social media management with content optimization and engagement analytics',
      icon: MessageSquare,
      features: [
        'AI-generated content suggestions',
        'Optimal posting time recommendations',
        'Cross-platform content adaptation',
        'Engagement analytics and ROI tracking',
        'Hashtag optimization and trending analysis'
      ],
      pricing: '$199 - $1,299/month',
      delivery: '1-2 weeks',
      category: 'Marketing Automation',
      marketPrice: '$300-2,500/month',
      benefits: 'Increase engagement by 50-80%'
    },
    {
      name: 'Smart Contract Management Platform',
      description: 'AI-powered contract lifecycle management with risk assessment and compliance monitoring',
      icon: FileText,
      features: [
        'Contract template generation and customization',
        'Risk assessment and clause analysis',
        'Automated renewal and expiration alerts',
        'Compliance monitoring and reporting',
        'Digital signature integration'
      ],
      pricing: '$899 - $5,999/month',
      delivery: '3-5 weeks',
      category: 'Legal Tech',
      marketPrice: '$1,500-10,000/month',
      benefits: 'Reduce contract processing time by 70%'
    },
    {
      name: 'Real-Time Customer Feedback Analytics',
      description: 'Advanced sentiment analysis and customer feedback processing across all channels',
      icon: BarChart3,
      features: [
        'Multi-channel feedback collection',
        'Real-time sentiment analysis',
        'Trend identification and alerting',
        'Competitor comparison analysis',
        'Actionable insights and recommendations'
      ],
      pricing: '$299 - $1,999/month',
      delivery: '2-3 weeks',
      category: 'Customer Intelligence',
      marketPrice: '$500-3,500/month',
      benefits: 'Improve customer satisfaction by 25-40%'
    },
    {
      name: 'Automated Financial Reporting Suite',
      description: 'AI-powered financial reporting and analysis with predictive insights',
      icon: BarChart3,
      features: [
        'Automated report generation',
        'Financial forecasting and modeling',
        'Anomaly detection and fraud prevention',
        'Regulatory compliance reporting',
        'Executive dashboard and KPI tracking'
      ],
      pricing: '$1,299 - $7,999/month',
      delivery: '3-6 weeks',
      category: 'FinTech',
      marketPrice: '$2,000-15,000/month',
      benefits: 'Reduce reporting time by 80% and improve accuracy'
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
        'Analytics and performance tracking',
        'Multi-format support (web, mobile, docs)',
        'Brand consistency across languages'
      ],
      pricing: '$399 - $3,200/month',
      delivery: '2-3 weeks',
      category: 'Globalization',
      benefits: 'Reduce localization costs by 70%, faster time-to-market',
      marketPrice: '$800 - $8,000/month',
      link: '/services/micro-saas/content-localization',
      useCases: ['Global Expansion', 'Content Translation', 'SEO Optimization', 'Brand Consistency'],
      technologies: ['Neural MT', 'GPT', 'SEO Tools', 'CMS Integration', 'Analytics', 'Workflow Automation']
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
        'HIPAA compliance and security',
        'Provider availability management',
        'Billing and payment integration'
      ],
      pricing: '$599 - $4,500/month',
      delivery: '3-5 weeks',
      category: 'Healthcare',
      benefits: 'Reduce no-shows by 40%, improve patient satisfaction',
      marketPrice: '$1,200 - $12,000/month',
      link: '/services/micro-saas/healthcare-scheduling',
      useCases: ['Medical Practices', 'Dental Offices', 'Mental Health', 'Telemedicine'],
      technologies: ['HIPAA Compliance', 'Telemedicine APIs', 'Payment Processing', 'Calendar Integration']
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
        'Custom reporting and alerts',
        'A/B testing and optimization',
        'Revenue forecasting'
      ],
      pricing: '$199 - $1,800/month',
      delivery: '1-3 weeks',
      category: 'E-commerce',
      benefits: 'Increase conversion rates by 25%, optimize inventory',
      marketPrice: '$400 - $6,000/month',
      link: '/services/micro-saas/ecommerce-analytics',
      useCases: ['Online Retail', 'Marketplace Sellers', 'Dropshipping', 'Subscription Business'],
      technologies: ['Google Analytics', 'Shopify API', 'WooCommerce', 'BigQuery', 'Data Visualization']
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
        'Custom workflows and automation',
        'Team performance analytics',
        'Knowledge management system'
      ],
      pricing: '$299 - $2,200/month',
      delivery: '2-4 weeks',
      category: 'Productivity',
      benefits: 'Improve team productivity by 30%, reduce communication overhead',
      marketPrice: '$500 - $8,000/month',
      link: '/services/micro-saas/team-collaboration',
      useCases: ['Remote Teams', 'Project Management', 'Document Collaboration', 'Team Communication'],
      technologies: ['WebRTC', 'Real-time Collaboration', 'Project Management APIs', 'Document Processing']
    },
    {
      name: 'AI-Powered Email Marketing Platform',
      description: 'Intelligent email campaigns with personalization, automation, and analytics',
      icon: Mail,
      features: [
        'AI-driven personalization',
        'Automated campaign workflows',
        'A/B testing and optimization',
        'Advanced segmentation',
        'Deliverability optimization',
        'Real-time analytics and reporting',
        'Integration with CRM systems',
        'Compliance and privacy controls'
      ],
      pricing: '$199 - $1,500/month',
      delivery: '1-3 weeks',
      category: 'Marketing',
      benefits: 'Increase email engagement by 45%, improve deliverability',
      marketPrice: '$400 - $5,000/month',
      link: '/services/micro-saas/email-marketing',
      useCases: ['E-commerce', 'SaaS', 'Content Marketing', 'Lead Generation'],
      technologies: ['AI Personalization', 'Email APIs', 'Analytics', 'CRM Integration', 'Compliance Tools']
    },
    {
      name: 'Inventory Management System',
      description: 'Smart inventory tracking with demand forecasting and automated reordering',
      icon: Database,
      features: [
        'Real-time inventory tracking',
        'Demand forecasting and analytics',
        'Automated reorder points',
        'Multi-location management',
        'Supplier integration',
        'Barcode scanning support',
        'Cost optimization',
        'Reporting and analytics'
      ],
      pricing: '$299 - $2,000/month',
      delivery: '2-4 weeks',
      category: 'Inventory',
      benefits: 'Reduce stockouts by 60%, optimize inventory costs',
      marketPrice: '$600 - $8,000/month',
      link: '/services/micro-saas/inventory-management',
      useCases: ['Retail', 'Manufacturing', 'Distribution', 'E-commerce'],
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Barcode APIs', 'Supply Chain Integration']
      marketPrice: '$1000-4000/month',
      benefits: 'Make data-driven decisions 24/7 from anywhere'
    },
    {
      name: 'AI Social Media Manager',
      description: 'Intelligent social media automation and content optimization platform',
      icon: MessageSquare,
      features: [
        'AI-powered content generation and scheduling',
        'Cross-platform posting and analytics',
        'Hashtag optimization and trend analysis',
        'Engagement automation and response management',
        'ROI tracking and performance insights'
      ],
      pricing: '$399 - $2,499/month',
      delivery: '2-3 weeks',
      category: 'Social Media',
      marketPrice: '$800-4000/month',
      benefits: 'Increase social engagement by 150% with 50% less effort'
    },
    {
      name: 'Blockchain Invoice Tracker',
      description: 'Decentralized invoice management and payment tracking system',
      icon: Database,
      features: [
        'Blockchain-based invoice verification',
        'Smart contract automation',
        'Cryptocurrency payment integration',
        'Fraud prevention and audit trails',
        'Multi-currency support and conversion'
      ],
      pricing: '$699 - $4,999/month',
      delivery: '3-5 weeks',
      category: 'Blockchain',
      marketPrice: '$1500-8000/month',
      benefits: 'Eliminate payment disputes and reduce processing time by 80%'
    },
    {
      name: 'AI Customer Support Bot',
      description: 'Advanced chatbot with natural language processing and human handoff',
      icon: Users,
      features: [
        'Multi-language conversational AI',
        'Context-aware responses and learning',
        'Seamless human agent escalation',
        'Integration with CRM and ticketing systems',
        'Performance analytics and optimization'
      ],
      pricing: '$599 - $3,999/month',
      delivery: '2-4 weeks',
      category: 'Customer Support',
      marketPrice: '$1200-6000/month',
      benefits: 'Handle 85% of inquiries automatically with 95% satisfaction'
    },
    {
      name: 'IoT Device Management Platform',
      description: 'Comprehensive IoT device monitoring and management solution',
      icon: Zap,
      features: [
        'Real-time device monitoring and alerts',
        'Remote device configuration and updates',
        'Data analytics and predictive maintenance',
        'Multi-protocol support (MQTT, CoAP, HTTP)',
        'Security management and access control'
      ],
      pricing: '$1,299 - $7,999/month',
      delivery: '4-8 weeks',
      category: 'IoT',
      marketPrice: '$2500-12000/month',
      benefits: 'Reduce device downtime by 70% with proactive maintenance'
    },
    {
      name: 'AI-Powered Inventory Optimizer',
      description: 'Intelligent inventory management with demand forecasting',
      icon: BarChart3,
      features: [
        'AI-driven demand forecasting',
        'Automated reorder point optimization',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Integration with ERP and POS systems'
      ],
      pricing: '$899 - $5,999/month',
      delivery: '3-6 weeks',
      category: 'Supply Chain',
      marketPrice: '$1800-9000/month',
      benefits: 'Reduce inventory costs by 30% while improving stock availability'
    },
    {
      name: 'Voice-Controlled Meeting Assistant',
      description: 'AI-powered meeting transcription, summarization, and action item tracking',
      icon: Mic,
      features: [
        'Real-time meeting transcription',
        'AI-generated meeting summaries',
        'Action item extraction and tracking',
        'Voice command integration',
        'Calendar and CRM synchronization'
      ],
      pricing: '$299 - $1,999/month',
      delivery: '2-3 weeks',
      category: 'Productivity',
      marketPrice: '$600-3000/month',
      benefits: 'Save 5+ hours weekly on meeting management and follow-ups'
    },
    {
      name: 'AI Legal Document Analyzer',
      description: 'Intelligent contract analysis and legal document review platform',
      icon: FileText,
      features: [
        'Contract clause analysis and risk assessment',
        'Legal precedent matching',
        'Compliance checking and reporting',
        'Automated contract generation',
        'Integration with legal databases'
      ],
      pricing: '$1,599 - $9,999/month',
      delivery: '4-8 weeks',
      category: 'Legal Tech',
      marketPrice: '$3000-15000/month',
      benefits: 'Reduce contract review time by 90% with 99% accuracy'
    },
    {
      name: 'Quantum-Safe Password Manager',
      description: 'Next-generation password management with quantum-resistant encryption',
      icon: Shield,
      features: [
        'Quantum-resistant encryption algorithms',
        'Biometric authentication support',
        'Cross-platform synchronization',
        'Breach monitoring and alerts',
        'Team password sharing and management'
      ],
      pricing: '$199 - $1,299/month',
      delivery: '2-4 weeks',
      category: 'Cybersecurity',
      marketPrice: '$400-2000/month',
      benefits: 'Future-proof security with quantum-safe encryption'
    },
    {
      name: 'AI-Powered Learning Management System',
      description: 'Intelligent educational platform with personalized learning paths',
      icon: Users,
      features: [
        'AI-driven personalized learning recommendations',
        'Automated assessment and grading',
        'Progress tracking and analytics',
        'Multi-modal content support',
        'Gamification and engagement tools'
      ],
      pricing: '$999 - $6,999/month',
      delivery: '4-10 weeks',
      category: 'EdTech',
      marketPrice: '$2000-10000/month',
      benefits: 'Improve learning outcomes by 40% with personalized education'
    },
    {
      name: 'Sustainable Business Analytics Platform',
      description: 'ESG tracking and sustainability reporting automation platform',
      icon: BarChart3,
      features: [
        'Carbon footprint tracking and reporting',
        'ESG metrics monitoring and analysis',
        'Sustainability goal setting and tracking',
        'Regulatory compliance reporting',
        'Stakeholder communication tools'
      ],
      pricing: '$799 - $4,999/month',
      delivery: '3-6 weeks',
      category: 'Sustainability',
      marketPrice: '$1500-7500/month',
      benefits: 'Streamline ESG reporting and improve sustainability scores by 35%'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Micro SaaS Deployed', value: '150+', icon: Code },
    { label: 'Average ROI', value: '280%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Deployment Time', value: '3 weeks', icon: Clock }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Scheduling, patient management, telemedicine' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Analytics, inventory, customer support' },
    { name: 'SaaS', icon: Code, description: 'Analytics, user management, billing' },
    { name: 'Finance', icon: CreditCard, description: 'Cost optimization, compliance, reporting' },
    { name: 'Education', icon: Users, description: 'Learning management, collaboration' },
    { name: 'Real Estate', icon: Building, description: 'Property management, lead tracking' }
  ];

  const benefits = [
    {
      title: 'Fast Deployment',
      description: 'Most micro SaaS solutions deployed in 1-4 weeks',
      icon: Rocket,
      details: ['Pre-built components', 'Cloud-native architecture', 'Automated deployment', 'Quick customization']
    },
    {
      title: 'Cost Effective',
      description: '50% lower development costs compared to custom solutions',
      icon: DollarSign,
      details: ['Reusable components', 'Efficient development', 'Lower maintenance', 'Scalable pricing']
    },
    {
      title: 'Proven ROI',
      description: 'Average 280% ROI within 6 months',
      icon: TrendingUp,
      details: ['Quick implementation', 'Immediate value', 'Measurable results', 'Ongoing optimization']
    },
    {
      title: 'Ongoing Support',
      description: '24/7 support with regular updates and enhancements',
      icon: Shield,
      details: ['Technical support', 'Feature updates', 'Security patches', 'Performance optimization']
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services/micro-saas`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Micro SaaS Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Production-Ready Micro SaaS
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
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
                    <stat.icon className="h-12 w-12 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
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
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-orange-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
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
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
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

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS solutions are tailored for specific industry needs and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver production-ready micro SaaS solutions with proven methodologies and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Micro SaaS?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom micro SaaS solution tailored to your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-orange-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-orange-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-orange-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Free Micro SaaS Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Business requirements analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Solution architecture design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Development timeline and pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>ROI projections and success metrics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}