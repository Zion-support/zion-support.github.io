import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Target, 
  TrendingUp, 
  Lock, 
  Settings, 
  Monitor, 
  Code, 
  FileText, 
  Image, 
  Video, 
  Mic, 
  Search, 
  Mail, 
  Calendar, 
  ShoppingCart, 
  Home, 
  Truck, 
  Heart, 
  Building, 
  Sprout, 
  Gamepad2, 
  Camera, 
  HardDrive, 
  Phone, 
  MapPin, 
  Wifi, 
  Laptop, 
  GraduationCap, 
  PieChart, 
  ClipboardList, 
  TreePine, 
  Droplets, 
  Bot,
  Eye,
  MessageSquare,
  Rocket,
  Car,
  Package,
  Trash2
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

// AI-Powered Micro SAAS Services
const aiServices = [
  {
    id: 1,
    title: 'AI Content Generation Studio',
    description: 'Complete AI-powered content creation platform for blogs, social media, and marketing materials with brand voice training.',
    icon: Brain,
    category: 'Content AI',
    price: 'Starting at $89/month',
    features: [
      'Multi-format content generation (blogs, social, email)',
      'Brand voice training and consistency',
      'SEO optimization and keyword integration',
      'Content calendar automation',
      'Multi-language support (50+ languages)',
      'Plagiarism detection and originality scoring',
      'A/B testing for content performance',
      'Team collaboration and approval workflows'
    ],
    benefits: [
      'Increase content output by 500%',
      'Reduce content creation costs by 70%',
      'Improve SEO rankings by 40%',
      'Maintain consistent brand voice across all channels'
    ],
    marketPrice: '$150-300/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Marketing agencies, Content creators, E-commerce brands',
    link: '/services/ai-content-generation-studio'
  },
  {
    id: 2,
    title: 'AI Customer Support Automation',
    description: 'Intelligent chatbot and ticket routing system with sentiment analysis and escalation management.',
    icon: Bot,
    category: 'Customer Service AI',
    price: 'Starting at $199/month',
    features: [
      'Multi-channel support (web, email, social, phone)',
      'Natural language understanding and processing',
      'Sentiment analysis and mood detection',
      'Automatic ticket categorization and routing',
      'Knowledge base integration and learning',
      'Escalation to human agents when needed',
      'Performance analytics and reporting',
      'Integration with CRM and helpdesk systems'
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction scores by 35%',
      'Lower support costs by 60%'
    ],
    marketPrice: '$300-600/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, SaaS companies, Service businesses',
    link: '/services/ai-customer-support-automation'
  },
  {
    id: 3,
    title: 'AI Sales Intelligence Platform',
    description: 'Predictive sales analytics with lead scoring, opportunity identification, and automated follow-up sequences.',
    icon: TrendingUp,
    category: 'Sales AI',
    price: 'Starting at $149/month',
    features: [
      'Lead scoring and qualification automation',
      'Predictive analytics for sales forecasting',
      'Automated email sequences and follow-ups',
      'Competitor analysis and market insights',
      'Sales performance tracking and optimization',
      'Integration with CRM and marketing tools',
      'Real-time deal health monitoring',
      'AI-powered sales coaching recommendations'
    ],
    benefits: [
      'Increase conversion rates by 45%',
      'Reduce sales cycle length by 30%',
      'Improve lead qualification accuracy by 65%',
      'Boost revenue per sales rep by 40%'
    ],
    marketPrice: '$250-500/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Sales teams, B2B companies, Real estate agencies',
    link: '/services/ai-sales-intelligence-platform'
  },
  {
    id: 4,
    title: 'AI Financial Analytics Dashboard',
    description: 'Real-time financial insights with predictive modeling, expense tracking, and investment recommendations.',
    icon: BarChart3,
    category: 'Finance AI',
    price: 'Starting at $179/month',
    features: [
      'Automated expense categorization and tracking',
      'Predictive cash flow analysis',
      'Investment opportunity identification',
      'Fraud detection and risk assessment',
      'Tax optimization recommendations',
      'Financial goal tracking and planning',
      'Multi-currency support and conversion',
      'Integration with banking and accounting systems'
    ],
    benefits: [
      'Reduce financial analysis time by 80%',
      'Improve investment returns by 25%',
      'Detect fraud 3x faster than manual methods',
      'Optimize tax savings by 15-20%'
    ],
    marketPrice: '$300-700/month',
    setupTime: '3-4 weeks',
    targetUsers: 'Small businesses, Financial advisors, Accounting firms',
    link: '/services/ai-financial-analytics-dashboard'
  },
  {
    id: 5,
    title: 'AI Video Content Creator',
    description: 'Automated video production with AI voiceovers, scene generation, and editing for social media and marketing.',
    icon: Video,
    category: 'Video AI',
    price: 'Starting at $129/month',
    features: [
      'AI-generated video scripts and storyboards',
      'Text-to-speech with 100+ voice options',
      'Automated video editing and transitions',
      'Social media format optimization',
      'Background music and sound effects library',
      'Brand template and style consistency',
      'Multi-language voice generation',
      'Analytics and performance tracking'
    ],
    benefits: [
      'Create professional videos in minutes',
      'Reduce video production costs by 85%',
      'Scale content creation 10x faster',
      'Maintain consistent brand presentation'
    ],
    marketPrice: '$200-400/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Content creators, Marketing agencies, E-learning platforms',
    link: '/services/ai-video-content-creator'
  },
  {
    id: 6,
    title: 'AI Email Marketing Optimizer',
    description: 'Intelligent email campaign optimization with send time prediction, subject line testing, and personalization.',
    icon: Mail,
    category: 'Email AI',
    price: 'Starting at $99/month',
    features: [
      'AI-powered subject line generation and testing',
      'Optimal send time prediction per recipient',
      'Dynamic content personalization',
      'A/B testing automation and optimization',
      'Email deliverability optimization',
      'Unsubscribe prediction and prevention',
      'Segmentation and targeting automation',
      'Performance analytics and insights'
    ],
    benefits: [
      'Increase open rates by 40%',
      'Boost click-through rates by 55%',
      'Reduce unsubscribe rates by 30%',
      'Improve email deliverability by 25%'
    ],
    marketPrice: '$150-350/month',
    setupTime: '1-2 weeks',
    targetUsers: 'E-commerce, SaaS companies, Digital marketers',
    link: '/services/ai-email-marketing-optimizer'
  },
  {
    id: 7,
    title: 'AI Inventory Management System',
    description: 'Smart inventory optimization with demand forecasting, automated reordering, and waste reduction.',
    icon: Package,
    category: 'Inventory AI',
    price: 'Starting at $159/month',
    features: [
      'Demand forecasting and trend analysis',
      'Automated reorder point calculations',
      'Supplier performance tracking',
      'Dead stock identification and clearance',
      'Multi-location inventory synchronization',
      'Barcode scanning and mobile app',
      'Integration with POS and e-commerce platforms',
      'Real-time inventory alerts and notifications'
    ],
    benefits: [
      'Reduce inventory costs by 25%',
      'Minimize stockouts by 60%',
      'Eliminate dead stock by 40%',
      'Improve cash flow by 30%'
    ],
    marketPrice: '$250-500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Retailers, E-commerce, Manufacturing, Restaurants',
    link: '/services/ai-inventory-management-system'
  },
  {
    id: 8,
    title: 'AI Social Media Manager',
    description: 'Automated social media posting, engagement, and analytics with content optimization and scheduling.',
    icon: Globe,
    category: 'Social Media AI',
    price: 'Starting at $119/month',
    features: [
      'AI-generated social media content',
      'Optimal posting time optimization',
      'Hashtag research and recommendation',
      'Engagement monitoring and response automation',
      'Competitor analysis and benchmarking',
      'Multi-platform posting and scheduling',
      'Influencer identification and outreach',
      'Performance analytics and ROI tracking'
    ],
    benefits: [
      'Increase social media engagement by 65%',
      'Save 15+ hours per week on social management',
      'Grow follower base by 40%',
      'Improve brand awareness by 50%'
    ],
    marketPrice: '$200-400/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Small businesses, Influencers, Marketing agencies',
    link: '/services/ai-social-media-manager'
  },
  {
    id: 9,
    title: 'AI Meeting Assistant & Transcriber',
    description: 'Intelligent meeting transcription with action item extraction, summary generation, and follow-up automation.',
    icon: Mic,
    category: 'Productivity AI',
    price: 'Starting at $79/month',
    features: [
      'Real-time meeting transcription (95%+ accuracy)',
      'Automatic action item identification',
      'Meeting summary and key points extraction',
      'Speaker identification and attribution',
      'Integration with calendar and video conferencing',
      'Searchable meeting archive',
      'Follow-up email automation',
      'Multi-language support'
    ],
    benefits: [
      'Save 2+ hours per meeting on note-taking',
      'Improve meeting follow-through by 70%',
      'Create searchable knowledge base',
      'Ensure no important details are missed'
    ],
    marketPrice: '$120-250/month',
    setupTime: '1 week',
    targetUsers: 'Remote teams, Consultants, Legal professionals',
    link: '/services/ai-meeting-assistant-transcriber'
  },
  {
    id: 10,
    title: 'AI Website Performance Optimizer',
    description: 'Automated website optimization with speed enhancement, SEO improvements, and user experience analysis.',
    icon: Monitor,
    category: 'Web AI',
    price: 'Starting at $139/month',
    features: [
      'Automated page speed optimization',
      'SEO audit and improvement recommendations',
      'User experience analysis and heatmaps',
      'Mobile responsiveness optimization',
      'Core Web Vitals monitoring and improvement',
      'Image compression and lazy loading',
      'CDN optimization and caching',
      'Performance analytics and reporting'
    ],
    benefits: [
      'Improve page load speed by 60%',
      'Boost SEO rankings by 35%',
      'Increase conversion rates by 25%',
      'Reduce bounce rates by 40%'
    ],
    marketPrice: '$200-450/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Web agencies, E-commerce, SaaS companies',
    link: '/services/ai-website-performance-optimizer'
  }
];

// IT Services and Solutions
const itServices = [
  {
    id: 1,
    title: 'Cloud Migration & Optimization',
    description: 'Complete cloud infrastructure migration with cost optimization and performance enhancement.',
    icon: Cloud,
    category: 'Cloud Services',
    price: 'Starting at $2,500/month',
    features: [
      'AWS, Azure, and GCP migration expertise',
      'Cost optimization and resource right-sizing',
      'Security and compliance implementation',
      'Disaster recovery and backup solutions',
      'Performance monitoring and optimization',
      '24/7 cloud infrastructure management',
      'Multi-cloud strategy implementation',
      'Legacy system integration'
    ],
    benefits: [
      'Reduce cloud costs by 30-40%',
      'Improve system performance by 50%',
      'Enhance security posture significantly',
      'Achieve 99.9% uptime guarantee'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Mid to large enterprises, Growing startups',
    link: '/services/cloud-migration-optimization'
  },
  {
    id: 2,
    title: 'Cybersecurity Assessment & Implementation',
    description: 'Comprehensive security audit with threat detection, vulnerability assessment, and security framework implementation.',
    icon: Shield,
    category: 'Cybersecurity',
    price: 'Starting at $1,800/month',
    features: [
      'Security risk assessment and audit',
      'Penetration testing and vulnerability scanning',
      'Security framework implementation (ISO 27001, NIST)',
      'Incident response planning and testing',
      'Security awareness training programs',
      'Compliance monitoring and reporting',
      '24/7 security monitoring and alerting',
      'Security policy development and implementation'
    ],
    benefits: [
      'Reduce security incidents by 80%',
      'Achieve compliance with major standards',
      'Protect against 99% of known threats',
      'Improve security posture significantly'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'All business sizes, Regulated industries',
    link: '/services/cybersecurity-assessment-implementation'
  },
  {
    id: 3,
    title: 'DevOps Automation & CI/CD Pipeline',
    description: 'Complete DevOps transformation with automated deployment, testing, and infrastructure management.',
    icon: Settings,
    category: 'DevOps',
    price: 'Starting at $2,200/month',
    features: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (IaC) setup',
      'Automated testing and quality assurance',
      'Container orchestration (Kubernetes, Docker)',
      'Monitoring and logging implementation',
      'Deployment automation and rollback capabilities',
      'Team training and best practices',
      'Performance optimization and scaling'
    ],
    benefits: [
      'Reduce deployment time by 90%',
      'Improve code quality and reliability',
      'Enable faster feature delivery',
      'Reduce manual errors by 95%'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '4-6 weeks',
    targetUsers: 'Software companies, Tech startups, Enterprises',
    link: '/services/devops-automation-cicd-pipeline'
  },
  {
    id: 4,
    title: 'Database Optimization & Management',
    description: 'Database performance tuning, optimization, and management with backup and recovery solutions.',
    icon: Database,
    category: 'Database Services',
    price: 'Starting at $1,500/month',
    features: [
      'Database performance analysis and tuning',
      'Query optimization and indexing',
      'Backup and disaster recovery setup',
      'Database security and access control',
      'Monitoring and alerting systems',
      'Database migration and consolidation',
      '24/7 database administration',
      'Capacity planning and scaling'
    ],
    benefits: [
      'Improve database performance by 60%',
      'Reduce query response time by 70%',
      'Ensure 99.9% data availability',
      'Optimize storage costs by 40%'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'E-commerce, SaaS companies, Enterprises',
    link: '/services/database-optimization-management'
  },
  {
    id: 5,
    title: 'IT Infrastructure Monitoring & Management',
    description: '24/7 infrastructure monitoring with proactive issue detection and automated resolution.',
    icon: Monitor,
    category: 'Infrastructure',
    price: 'Starting at $1,200/month',
    features: [
      '24/7 infrastructure monitoring',
      'Proactive issue detection and alerting',
      'Automated incident response',
      'Performance optimization and tuning',
      'Capacity planning and scaling',
      'Security monitoring and threat detection',
      'Compliance reporting and auditing',
      'Custom dashboard and reporting'
    ],
    benefits: [
      'Reduce downtime by 80%',
      'Improve system reliability by 90%',
      'Lower operational costs by 35%',
      'Enable proactive issue resolution'
    ],
    marketPrice: '$2,000-4,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'All business sizes, Managed service providers',
    link: '/services/it-infrastructure-monitoring-management'
  }
];

// Business Automation Micro SAAS
const businessAutomation = [
  {
    id: 1,
    title: 'Workflow Automation Platform',
    description: 'No-code workflow automation for business processes with integration capabilities and analytics.',
    icon: Zap,
    category: 'Workflow Automation',
    price: 'Starting at $99/month',
    features: [
      'Drag-and-drop workflow builder',
      '500+ app integrations (Zapier, Slack, Salesforce)',
      'Custom automation triggers and actions',
      'Team collaboration and approval workflows',
      'Analytics and performance tracking',
      'Mobile app for monitoring and control',
      'API access for custom integrations',
      'White-label options for agencies'
    ],
    benefits: [
      'Reduce manual work by 70%',
      'Improve process efficiency by 50%',
      'Eliminate human errors in routine tasks',
      'Scale operations without additional staff'
    ],
    marketPrice: '$150-300/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Small to medium businesses, Agencies',
    link: '/services/workflow-automation-platform'
  },
  {
    id: 2,
    title: 'Document Management & E-Signature',
    description: 'Complete document lifecycle management with e-signature, version control, and collaboration features.',
    icon: FileText,
    category: 'Document Management',
    price: 'Starting at $79/month',
    features: [
      'Document storage and organization',
      'E-signature collection and management',
      'Version control and change tracking',
      'Team collaboration and commenting',
      'Template library and customization',
      'Compliance and audit trails',
      'Mobile app for on-the-go access',
      'Integration with popular business tools'
    ],
    benefits: [
      'Reduce document processing time by 80%',
      'Eliminate paper-based workflows',
      'Improve compliance and audit readiness',
      'Enhance team collaboration efficiency'
    ],
    marketPrice: '$120-250/month',
    setupTime: '1 week',
    targetUsers: 'Legal firms, Real estate, HR departments',
    link: '/services/document-management-esignature'
  },
  {
    id: 3,
    title: 'Project Management & Collaboration',
    description: 'Advanced project management with team collaboration, time tracking, and resource management.',
    icon: ClipboardList,
    category: 'Project Management',
    price: 'Starting at $89/month',
    features: [
      'Kanban boards and Gantt charts',
      'Team collaboration and communication',
      'Time tracking and resource management',
      'Budget tracking and cost management',
      'File sharing and document collaboration',
      'Mobile app for remote teams',
      'Integration with 100+ business tools',
      'Custom reporting and analytics'
    ],
    benefits: [
      'Improve project delivery by 40%',
      'Increase team productivity by 35%',
      'Reduce project overruns by 50%',
      'Enhance client communication and transparency'
    ],
    marketPrice: '$150-350/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Agencies, Consultants, Remote teams',
    link: '/services/project-management-collaboration'
  },
  {
    id: 4,
    title: 'Customer Relationship Management (CRM)',
    description: 'Comprehensive CRM with sales pipeline management, customer communication, and analytics.',
    icon: Users,
    category: 'CRM',
    price: 'Starting at $69/month',
    features: [
      'Contact and lead management',
      'Sales pipeline and opportunity tracking',
      'Email marketing and communication tools',
      'Task and activity management',
      'Reporting and analytics dashboard',
      'Mobile app for sales teams',
      'Integration with email and calendar',
      'Custom fields and automation rules'
    ],
    benefits: [
      'Increase sales by 30%',
      'Improve customer retention by 25%',
      'Reduce sales cycle length by 20%',
      'Enhance customer service quality'
    ],
    marketPrice: '$100-300/month',
    setupTime: '1-2 weeks',
    targetUsers: 'Sales teams, Small businesses, Service providers',
    link: '/services/customer-relationship-management-crm'
  },
  {
    id: 5,
    title: 'HR Management & Payroll System',
    description: 'Complete HR solution with employee management, payroll processing, and benefits administration.',
    icon: Users,
    category: 'HR Management',
    price: 'Starting at $149/month',
    features: [
      'Employee database and profiles',
      'Time tracking and attendance management',
      'Payroll processing and tax calculations',
      'Benefits administration and enrollment',
      'Performance review and goal tracking',
      'Recruitment and applicant tracking',
      'Compliance reporting and documentation',
      'Employee self-service portal'
    ],
    benefits: [
      'Reduce HR administrative time by 60%',
      'Eliminate payroll errors by 95%',
      'Improve employee satisfaction by 30%',
      'Ensure compliance with labor laws'
    ],
    marketPrice: '$200-500/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Small to medium businesses, HR departments',
    link: '/services/hr-management-payroll-system'
  }
];

export default function EnhancedServices2025() {
  const [activeTab, setActiveTab] = useState('ai-services');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...aiServices.map(service => ({ ...service, type: 'AI Services' })),
    ...itServices.map(service => ({ ...service, type: 'IT Services' })),
    ...businessAutomation.map(service => ({ ...service, type: 'Business Automation' }))
  ];

  const filteredServices = allServices.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tabs = [
    { id: 'ai-services', label: 'AI Services', count: aiServices.length },
    { id: 'it-services', label: 'IT Services', count: itServices.length },
    { id: 'business-automation', label: 'Business Automation', count: businessAutomation.length },
    { id: 'all', label: 'All Services', count: allServices.length }
  ];

  const getServicesByTab = (tabId) => {
    switch (tabId) {
      case 'ai-services':
        return aiServices;
      case 'it-services':
        return itServices;
      case 'business-automation':
        return businessAutomation;
      default:
        return filteredServices;
    }
  };

  const currentServices = activeTab === 'all' ? filteredServices : getServicesByTab(activeTab);

  return (
    <>
      <Head>
        <title>Enhanced Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI-powered micro SAAS services, IT solutions, and business automation tools. Real services with competitive pricing and proven results." />
        <meta name="keywords" content="AI services, micro SAAS, IT services, business automation, cloud solutions, cybersecurity, workflow automation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enhanced{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Services 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real, innovative micro SAAS services, IT solutions, and AI-powered tools 
                designed to transform your business with competitive pricing and proven results.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">Get Started Today</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-indigo-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                        <service.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <span className="text-sm text-indigo-600 font-medium">{service.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-green-600">{service.price}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Setup: {service.setupTime} • Target: {service.targetUsers}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-indigo-600 font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-green-600">
                            <TrendingUp className="w-4 h-4 mr-1 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={service.link}
                        className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors text-center font-medium"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our innovative services today. Contact us for a free consultation 
              and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}