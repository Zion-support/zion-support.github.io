'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield } from 'lucide-react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology',
      price: '$29/month',
      users: 'Up to 5 users',
      features: ['AI-powered content creation', 'Multiple content types', 'SEO optimization', 'Brand voice customization']
    },
    {
      name: 'Data Analytics Dashboard',
      description: 'Real-time analytics and insights for your business',
      price: '$49/month',
      users: 'Up to 10 users',
      features: ['Real-time data visualization', 'Custom reports', 'API integration', 'Automated alerts']
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization']
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';
interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}
const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics and predictive insights',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Predictive analytics',
        'Email alerts and notifications',
        'Multi-platform integration',
        'Advanced filtering options',
        'White-label reporting',
        'API access'
      ],
      price: '$49/month',
      title: 'Business Intelligence Dashboard',
      description: 'Advanced analytics and reporting platform with real-time data visualization and AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'Custom report builder with drag-and-drop interface',
        'AI-powered predictive analytics and forecasting',
        'Multi-platform integration (Salesforce, HubSpot, Google Analytics)',
        'Automated email reports and alerts',
        'White-label customization options',
        'Advanced filtering and drill-down capabilities',
        'Mobile-responsive dashboard'
      ],
      price: '$89/month',
      users: 'Up to 10 users',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom dashboard builder with drag-and-drop interface',
        'Advanced data connectors (Salesforce, HubSpot, Google Analytics)',
        'Automated report generation and email delivery',
        'Multi-tenant architecture for agencies',
        'API access for custom integrations',
        'White-label solution available'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot and live chat',
      features: [
        'AI chatbot with NLP',
        'Live chat support',
        'Ticket management system',
        'Multi-language support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Analytics and reporting',
        'CRM integration'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      description: 'Complete customer support solution with AI chatbot, live chat, and ticket management',
      features: [
        'Advanced AI chatbot with natural language processing',
        'Live chat with real-time translation (50+ languages)',
        'Intelligent ticket routing and prioritization',
        'Knowledge base with AI-powered search',
        'Customer satisfaction tracking and analytics',
        'Integration with CRM systems',
        'Multi-channel support (email, chat, social media)',
        'Customizable chat widgets and themes'
      ],
      price: '$149/month',
      users: 'Up to 25 users',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      features: [
        'GPT-4 powered conversational AI with custom training',
        'Multi-channel support (Web, WhatsApp, SMS, Email)',
        'Advanced sentiment analysis and emotion detection',
        'Automated ticket routing and escalation',
        'Live agent handoff with context preservation',
        'Multi-language support (50+ languages)',
        'Advanced analytics and conversation insights',
        'CRM integration and lead qualification'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with threat detection and compliance',
      features: [
        'Real-time threat detection',
        'Automated security scans',
        'Compliance reporting (SOC2, GDPR)',
        'Incident response tools',
        'Security dashboard',
        'Vulnerability assessment',
        'Penetration testing',
        '24/7 monitoring'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      title: 'Enterprise Security Monitor',
      description: 'Comprehensive cybersecurity monitoring with threat detection and compliance management',
      features: [
        'Real-time threat detection and response',
        'Automated vulnerability scanning and patching',
        'SOC 2, GDPR, and HIPAA compliance reporting',
        'Advanced incident response automation',
        'Security awareness training modules',
        'Dark web monitoring and breach detection',
        'Custom security policies and rules',
        '24/7 security operations center support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection and automated response',
      features: [
        'AI-powered threat detection and behavioral analysis',
        'Real-time security monitoring across all endpoints',
        'Automated incident response and remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Penetration testing and vulnerability assessments',
        'Security awareness training platform',
        'Dark web monitoring and breach detection',
        '24/7 SOC (Security Operations Center) support'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Backup Enterprise',
      description: 'Comprehensive cloud backup with disaster recovery and version control',
      features: [
        'Automated daily backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Encrypted storage (AES-256)',
        'Incremental backups',
        'Point-in-time recovery',
        'Compliance features'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      title: 'Smart Cloud Backup Pro',
      description: 'Intelligent cloud backup with disaster recovery and business continuity features',
      features: [
        'Automated incremental and full backups',
        'Cross-platform sync with conflict resolution',
        'Version control with 90-day retention',
        'Disaster recovery with RTO < 4 hours',
        'End-to-end encryption (AES-256)',
        'Compliance with GDPR and HIPAA',
        'Bandwidth throttling and scheduling',
        'Real-time backup monitoring and alerts'
      ],
      price: '$79/month',
      users: 'Up to 50 users',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization',
      features: [
        'AI-optimized backup scheduling and deduplication',
        'Cross-cloud backup (AWS, Azure, GCP, OneDrive)',
        'Instant disaster recovery with RTO < 15 minutes',
        'Advanced version control and file history',
        'End-to-end encryption with zero-knowledge architecture',
        'Compliance and audit trail reporting',
        'Automated testing and recovery validation',
        'Global CDN for fast data access'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Performance Tracker Plus',
      description: 'Advanced application performance monitoring with AI-powered insights',
      features: [
        'Performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring',
        'Performance insights',
        'Alert management',
        'Custom dashboards',
        'API monitoring',
        'Mobile app monitoring'
      ],
      price: '$99/month',
      title: 'Application Performance Monitor',
      description: 'Advanced APM solution with real-time monitoring, error tracking, and performance optimization',
      features: [
        'Real-time performance monitoring and alerting',
        'Distributed tracing and error tracking',
        'Uptime monitoring with global checkpoints',
        'AI-powered performance insights and recommendations',
        'Custom dashboards and reporting',
        'Integration with popular development tools',
        'SLA monitoring and reporting',
        'Mobile app performance tracking'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations',
      features: [
        'Real-time APM with distributed tracing',
        'AI-powered performance anomaly detection',
        'Automated optimization recommendations',
        'Error tracking and crash reporting',
        'Uptime monitoring with global checkpoints',
        'Performance budget tracking and alerts',
        'Custom metrics and business KPIs',
        'Integration with CI/CD pipelines'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered workflow optimization',
      features: [
        'Workflow automation',
        'AI-powered insights',
        'Task scheduling',
        'Integration capabilities',
        'Custom AI models',
        'Process mining',
        'Exception handling',
        'Performance analytics'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models and workflow optimization',
      features: [
        'No-code workflow builder with AI assistance',
        'Custom AI model training and deployment',
        'Advanced task automation and scheduling',
        'Integration with 500+ business applications',
        'Document processing and data extraction',
        'Predictive analytics and decision support',
        'Multi-tenant workspace management',
        'Advanced reporting and analytics dashboard'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization',
      features: [
        'Email automation workflows',
        'AI-powered personalization',
        'A/B testing',
        'Advanced segmentation',
        'Email templates',
        'Analytics and reporting',
        'CRM integration',
        'Compliance tools'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation and personalization',
      features: [
        'AI-powered email content generation and optimization',
        'Advanced customer segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and automated campaigns',
        'Advanced analytics and ROI tracking',
        'Email deliverability optimization',
        'GDPR compliance and consent management',
        'Integration with major e-commerce platforms'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management with AI content generation and scheduling',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Support'
    }
  ];
return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions;
  </
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
      name: 'Customer Support Bot',
      description: 'Intelligent chatbot for customer service automation',
      price: '$39/month',
      users: 'Up to 8 users',
      features: ['Natural language processing', 'Multi-language support', 'Integration with CRM', 'Analytics dashboard']
    }
  ];

  const benefits = [
    'Quick deployment and setup',
    'Scalable architecture',
    'Regular updates and improvements',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI and automation." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, software as a service, productivity tools" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused solutions that solve specific business problems with AI and automation.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];
      category: 'Marketing'
    },
    {
      id: '9',
      icon: '💰',
      title: 'Expense Tracker Pro',
      description: 'Advanced expense management with AI-powered categorization and reporting',
      features: [
        'Receipt scanning (OCR)',
        'AI categorization',
        'Expense reporting',
        'Budget tracking',
        'Approval workflows',
        'Integration with accounting',
        'Mobile app',
        'Compliance features'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '10',
      icon: '📅',
      title: 'Appointment Scheduler Plus',
      description: 'Smart appointment scheduling with AI optimization and automated reminders',
      features: [
        'Calendar integration',
        'AI scheduling optimization',
        'Automated reminders',
        'Payment processing',
        'Video conferencing',
        'Multi-timezone support',
        'Custom booking forms',
        'Analytics dashboard'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: '11',
      icon: '📝',
      title: 'Content Generator AI',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar',
        'Plagiarism checking',
        'Multi-language support'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content'
    },
    {
      id: '12',
      icon: '🎯',
      title: 'Lead Generation Suite',
      description: 'Complete lead generation and management system with AI-powered scoring',
      features: [
        'Lead capture forms',
        'AI lead scoring',
        'Email sequences',
        'CRM integration',
        'Lead tracking',
        'Conversion analytics',
        'A/B testing',
        'Automated follow-ups'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: '13',
      icon: '🔍',
      title: 'SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization with AI-powered recommendations',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'AI content optimization',
        'Rank tracking',
        'Technical SEO',
        'Link building tools',
        'Performance monitoring'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'SEO'
    },
    {
      id: '14',
      icon: '📊',
      title: 'Survey Builder Pro',
      description: 'Advanced survey creation and analysis with AI-powered insights',
      features: [
        'Drag-and-drop builder',
        'AI question suggestions',
        'Advanced analytics',
        'Custom themes',
        'Multi-channel distribution',
        'Response tracking',
        'Data export',
        'Integration capabilities'
      ],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Research'
    },
    {
      id: '15',
      icon: '🏢',
      title: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task optimization and team collaboration',
      features: [
        'Task management',
        'AI task prioritization',
        'Team collaboration',
        'Time tracking',
        'Resource planning',
        'Progress analytics',
        'Integration capabilities',
        'Mobile app'
      description: 'Intelligent business process automation with AI-powered decision making and custom workflows',
      features: [
        'Visual workflow builder with 200+ integrations',
        'AI-powered decision making and routing',
        'Document processing and data extraction',
        'Email and calendar automation',
        'Custom AI model training and deployment',
        'Advanced analytics and reporting',
        'Multi-tenant architecture',
        'API access and webhook support'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Management'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Scheduling', 'Content', 'Sales', 'SEO', 'Research', 'Management'];
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-powered personalization and automation',
      features: [
        'AI-powered email personalization and optimization',
        'Advanced segmentation and targeting',
        'A/B testing with statistical significance',
        'Behavioral triggers and drip campaigns',
        'Landing page builder with conversion tracking',
        'Advanced analytics and ROI reporting',
        'GDPR and CAN-SPAM compliance tools',
        'Integration with 50+ platforms'
      ],
      price: '$99/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Financial Analytics Pro',
      description: 'Comprehensive financial management and analytics platform for businesses',
      features: [
        'Real-time financial dashboard and reporting',
        'Automated expense tracking and categorization',
        'Invoice generation and payment processing',
        'Tax preparation and compliance tools',
        'Cash flow forecasting and budgeting',
        'Multi-currency support and conversion',
        'Integration with accounting software',
        'Financial KPI tracking and alerts'
      ],
      price: '$149/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management platform with AI-powered content creation and scheduling',
      features: [
        'AI-powered content creation and optimization',
        'Multi-platform posting and scheduling',
        'Social media analytics and reporting',
        'Influencer identification and outreach',
        'Hashtag research and trending topics',
        'Social listening and sentiment analysis',
        'Team collaboration and approval workflows',
        'White-label client management'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '10',
      icon: '📋',
      title: 'Project Management Suite',
      description: 'Advanced project management with AI-powered resource allocation and progress tracking',
      features: [
        'AI-powered project planning and resource allocation',
        'Gantt charts and timeline visualization',
        'Team collaboration and communication tools',
        'Time tracking and productivity analytics',
        'Risk assessment and mitigation planning',
        'Custom workflows and automation',
        'Integration with 100+ tools',
        'Mobile app for on-the-go management'
      ],
      price: '$119/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '11',
      icon: '🎯',
      title: 'Lead Generation Engine',
      description: 'AI-powered lead generation and qualification platform with automated outreach',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated email and LinkedIn outreach',
        'Lead database with 50M+ contacts',
        'Intent data and behavioral tracking',
        'A/B testing for outreach campaigns',
        'CRM integration and lead routing',
        'Compliance with GDPR and CAN-SPAM',
        'Advanced analytics and ROI tracking'
      ],
      price: '$179/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '12',
      icon: '🔍',
      title: 'SEO Optimization Tool',
      description: 'Comprehensive SEO platform with AI-powered optimization and competitor analysis',
      features: [
        'AI-powered keyword research and optimization',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Content optimization suggestions',
        'Local SEO management and optimization',
        'Rank tracking and SERP monitoring',
        'Link building and outreach tools',
        'White-label reporting and dashboards'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Productivity', 'Sales'];
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform',
      features: [
        'AI-powered expense categorization and reconciliation',
        'Automated invoice processing and approval workflows',
        'Real-time financial reporting and forecasting',
        'Tax compliance and preparation assistance',
        'Multi-currency support and exchange rate tracking',
        'Integration with banks and payment processors',
        'Advanced fraud detection and prevention',
        'Custom financial dashboards and KPIs'
      ],
      price: '$179/month',
      users: 'Up to 35 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '👥',
      title: 'Zion HR Management',
      description: 'Comprehensive human resources management with AI-powered insights and automation',
      features: [
        'AI-powered candidate screening and matching',
        'Employee onboarding and offboarding automation',
        'Performance management and review cycles',
        'Time tracking and attendance management',
        'Benefits administration and enrollment',
        'Learning management system (LMS)',
        'Employee engagement surveys and analytics',
        'Compliance tracking and reporting'
      ],
      price: '$159/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'HR'
    },
    {
      id: '10',
      icon: '🛒',
      title: 'Zion E-commerce AI',
      description: 'AI-powered e-commerce platform with advanced personalization and optimization',
      features: [
        'AI-powered product recommendations',
        'Dynamic pricing optimization',
        'Inventory management and demand forecasting',
        'Customer behavior analysis and segmentation',
        'Automated marketing campaigns',
        'Multi-channel selling (web, mobile, social)',
        'Advanced analytics and reporting',
        'Integration with major payment gateways'
      ],
      price: '$249/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'E-commerce'
    },
    {
      id: '11',
      icon: '📱',
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and optimization',
      features: [
        'Drag-and-drop app builder with AI assistance',
        'Cross-platform development (iOS, Android)',
        'AI-powered UI/UX design recommendations',
        'Real-time preview and testing',
        'App store optimization and publishing',
        'Push notifications and analytics',
        'Backend integration and API management',
        'White-label app development'
      ],
      price: '$189/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development'
    },
    {
      id: '12',
      icon: '🌐',
      title: 'Zion SEO Optimizer',
      description: 'AI-powered SEO optimization platform with advanced keyword research and content optimization',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization and suggestions',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and tracking',
        'Local SEO optimization',
        'Link building and outreach automation',
        'Ranking tracking and reporting',
        'Integration with Google Search Console'
      ],
      price: '$119/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'SEO'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'HR', 'E-commerce', 'Development', 'SEO'];

  const benefits = [
    'Quick setup and deployment',
    'Scalable pricing plans',
    '24/7 customer support',
    'Regular feature updates',
    'Secure and reliable',
    'Easy integration'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];
  return (
    <React.Fragment>

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions;
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready-to-use business tools that solve specific problems. Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular;
  </
                    </div>
                  )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Products`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${product.popular ? 'ring-2 ring-blue-500' : ''} hover:scale-105`}>
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                      Start Free Trial;
  </
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      Learn More;
  </

                  <div className="text-center">
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial;
  </
                <Link
                  to="/pricing"
className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  View All Plans;
  </
              </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-2xl font-bold text-white mb-1">{product.price}</div>
                    <div className="text-sm text-gray-400">{product.users}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Our Micro SaaS?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              View All Plans;
  </
          </div>
        </section>
      </main>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect micro SaaS solution for your business needs.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold flex items-center mx-auto">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MicroSaasPage;
  </button>
  </Link>
  </Link>
  </button>
  </button>
  </div>
  </h1>
  </div>
  </div>
  </h1>
  </div>
  </section>
  </div>

export default MicroSaasPage;
