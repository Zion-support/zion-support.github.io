<<<<<<< HEAD
'use client';
import React from 'react';

const MicroSaasPage: React.FC = () => {
<<<<<<< HEAD
=======
  const products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: Star,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: Zap,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', '24/7 SOC Support'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: Clock,
      category: 'Content',
      popular: false
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Customer Segmentation', 'Sales Forecasting', 'Integration Hub'],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Better lead qualification', 'Automated follow-ups', 'Data-driven insights'],
      icon: Star,
      category: 'CRM',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and automated reporting.',
      features: ['AI Resource Allocation', 'Predictive Timeline Management', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Improved project success rate', 'Better resource utilization', 'Reduced project delays', 'Automated reporting'],
      icon: Clock,
      category: 'Project Management',
      popular: false
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaigns.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Segmentation', 'Deliverability Optimization', 'Performance Analytics'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 40%', 'Automated campaigns', 'Better personalization', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: Shield,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'Custom Integrations'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      icon: Clock,
      category: 'Automation',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and automated posting.',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Hashtag Research', 'Engagement Analytics', 'Competitor Analysis', 'Content Calendar'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Increase engagement by 60%', 'Automated posting', 'Better content strategy', 'Time savings'],
      icon: Star,
      category: 'Social Media',
      popular: false
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      features: ['AI Auto-editing', 'Smart Cut Detection', 'Automated Subtitles', 'Color Correction', 'Audio Enhancement', 'Multi-format Export'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 70% editing time', 'Professional quality', 'Automated features', 'Easy to use'],
      icon: Zap,
      category: 'Video',
      popular: false
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translations and real-time language processing.',
      features: ['100+ Languages', 'Context-aware Translation', 'Real-time Processing', 'Document Translation', 'Voice Translation', 'API Integration'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Accurate translations', 'Real-time processing', 'Multiple formats', 'API integration'],
      icon: Shield,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis.',
      features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Code Quality Metrics', 'Best Practice Suggestions', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Reduce bugs by 50%', 'Improve code quality', 'Security enhancement', 'Team learning'],
      icon: Clock,
      category: 'Development',
      popular: false
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with sentiment analysis and behavioral insights.',
      features: ['Sentiment Analysis', 'Behavioral Tracking', 'Customer Segmentation', 'Churn Prediction', 'Lifetime Value Analysis', 'Real-time Dashboards'],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: ['Better customer understanding', 'Churn prevention', 'Personalized experiences', 'Data-driven decisions'],
      icon: Star,
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, drafting, and response suggestions.',
      features: ['Smart Email Sorting', 'AI Draft Suggestions', 'Priority Classification', 'Auto-responses', 'Email Analytics', 'Calendar Integration'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Save 2 hours daily', 'Better email organization', 'Faster responses', 'Reduced email stress'],
      icon: Zap,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups.',
      features: ['Automated Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Calendar Integration', 'Follow-up Automation', 'Team Collaboration'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Better meeting efficiency', 'Automated follow-ups', 'Improved accountability', 'Time savings'],
      icon: Shield,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization.',
      features: ['Keyword Research', 'Content Optimization', 'Competitor Analysis', 'Rank Tracking', 'Technical SEO Audit', 'Performance Monitoring'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase organic traffic', 'Better search rankings', 'Automated optimization', 'Competitive advantage'],
      icon: Clock,
      category: 'SEO',
      popular: false
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality management.',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Format Standardization', 'Quality Scoring', 'Error Reporting'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Improve data quality', 'Reduce errors', 'Automated cleaning', 'Better analytics'],
      icon: Star,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment with automated legal document processing.',
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Automated Summaries', 'Legal Database Integration'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster contract review', 'Risk reduction', 'Compliance assurance', 'Time savings'],
      icon: Zap,
      category: 'Legal',
      popular: false
    }
  ];
  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'ZionChat AI',
      description: 'Enterprise-grade AI customer support platform with multilingual capabilities',
      features: [
        'Advanced AI chatbot with 95% accuracy rate',
        'Live chat integration with human handoff',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and emotion detection',
        'Ticket management and escalation system',
        'Knowledge base integration',
        'Voice and video chat support',
        'CRM integration (Salesforce, HubSpot, etc.)',
        'Custom AI model training',
        'Advanced analytics and reporting'
      ],
      price: '$79/month',
      originalPrice: '$149/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Communication',
      link: 'https://ziontechgroup.com/chat-ai',
      marketPrice: '$200-500/month',
      savings: '60% off market rate'
    },
    {
      id: '3',
      icon: Shield,
  const benefits = [
    'Quick setup and deployment (under 5 minutes)',
    'Scalable pricing plans with no hidden fees',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing systems',
    'White-label solutions available',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'Dedicated account management'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-400" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-400" />, value: '100%', label: 'Secure & Compliant' },
    { icon: <Zap className="w-8 h-8 text-orange-400" />, value: '2min', label: 'Setup Time' },
    { icon: <Award className="w-8 h-8 text-yellow-400" />, value: '4.9/5', label: 'Customer Rating' },
    { icon: <Rocket className="w-8 h-8 text-pink-400" />, value: '10x', label: 'Faster Deployment' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap } from 'lucide-react'

<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain } from 'lucide-react';
=======
<<<<<<< HEAD
=======
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';
=======
import { CheckCircle, ArrowRight, Zap, Star, Users, Shield, Cloud, BarChart3 } from 'lucide-react'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9

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
>>>>>>> origin/main
>>>>>>> origin/main

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
<<<<<<< HEAD
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
<<<<<<< HEAD
      users: 'Up to 50 users'
=======
      users: 'Up to 50 users',
>>>>>>> origin/main
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
<<<<<<< HEAD
      users: 'Up to 100 users'
=======
      users: 'Up to 100 users',
>>>>>>> origin/main
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
<<<<<<< HEAD
      users: 'Up to 200 users'
=======
      users: 'Up to 200 users',
>>>>>>> origin/main
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
<<<<<<< HEAD
      users: 'Unlimited users'
=======
      users: 'Unlimited users',
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Affordable AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - affordable, scalable AI and IT tools designed for growing businesses. Start with low monthly costs." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, AI tools, affordable software, subscription software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Micro
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}SaaS
              </span>
              {' '}Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable, scalable AI and IT tools designed for growing businesses. 
              Start with low monthly costs and scale as you grow.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Compare Plans</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-white font-semibold">Features</th>
                    <th className="pb-4 text-white font-semibold text-center">AI Analytics</th>
                    <th className="pb-4 text-white font-semibold text-center">CRM</th>
                    <th className="pb-4 text-white font-semibold text-center">Security Suite</th>
                    <th className="pb-4 text-white font-semibold text-center">Cloud Manager</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr>
                    <td className="py-3 text-gray-300">Users</td>
                    <td className="py-3 text-gray-300 text-center">Up to 50</td>
                    <td className="py-3 text-gray-300 text-center">Up to 100</td>
                    <td className="py-3 text-gray-300 text-center">Up to 200</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">Storage</td>
                    <td className="py-3 text-gray-300 text-center">100GB</td>
                    <td className="py-3 text-gray-300 text-center">500GB</td>
                    <td className="py-3 text-gray-300 text-center">1TB</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">API Access</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-gray-300">24/7 Support</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the micro SaaS solution that fits your business needs. 
              Start with a free trial and scale as you grow.
=======
=======
      id: 'analytics-dashboard',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business metrics',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-platform integration',
        'Automated alerts',
        'Export capabilities'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'appointment-scheduler',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Smart scheduling system with automated reminders and calendar sync',
      features: [
        'Calendar integration',
        'Automated reminders',
        'Time zone handling',
        'Custom booking forms',
        'Payment processing'
      ],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Scheduling'
    },
    {
      id: 'chat-analytics',
      icon: '💬',
      title: 'Chat Analytics',
      description: 'Advanced analytics for your chat and messaging platforms',
      features: [
        'Message sentiment analysis',
        'Response time tracking',
        'Customer satisfaction metrics',
        'Team performance insights',
        'Custom dashboards'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Analytics'
    },
    {
      id: 'content-generator',
      icon: '✍️',
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing',
      features: [
        'AI content generation',
        'Multiple content types',
        'SEO optimization',
        'Brand voice customization',
        'Content calendar'
      ],
      price: '$49/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Content'
    },
    {
      id: 'document-processor',
      icon: '📄',
      title: 'Document Processor',
      description: 'Automated document processing and data extraction tool',
      features: [
        'OCR text extraction',
        'Data validation',
        'Batch processing',
        'Custom templates',
        'API integration'
      ],
      price: '$59/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'email-marketing',
      icon: '📧',
      title: 'Email Marketing',
      description: 'Complete email marketing solution with automation and analytics',
      features: [
        'Drag-and-drop editor',
        'Email automation',
        'A/B testing',
        'Subscriber management',
        'Detailed analytics'
      ],
      price: '$39/month',
      users: 'Up to 5,000 contacts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Simple and effective expense tracking for individuals and small teams',
      features: [
        'Receipt scanning',
        'Category management',
        'Expense reports',
        'Budget tracking',
        'Team collaboration'
      ],
      price: '$15/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: 'inventory-management',
      icon: '📦',
      title: 'Inventory Management',
      description: 'Streamlined inventory tracking and management system',
      features: [
        'Stock level monitoring',
        'Low stock alerts',
        'Supplier management',
        'Purchase orders',
        'Reporting dashboard'
      ],
      price: '$45/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Inventory'
    },
    {
      id: 'lead-scoring',
      icon: '🎯',
      title: 'Lead Scoring',
      description: 'Intelligent lead scoring and qualification system',
      features: [
        'Behavioral tracking',
        'Scoring algorithms',
        'Lead nurturing',
        'CRM integration',
        'Performance analytics'
      ],
      price: '$35/month',
      users: 'Up to 7 users',
      popular: false,
      category: 'Sales'
    },
    {
      id: 'seo-optimizer',
      icon: '🔍',
      title: 'SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization tool',
      features: [
        'Keyword research',
        'Site audit',
        'Competitor analysis',
        'Content optimization',
        'Rank tracking'
      ],
      price: '$29/month',
      users: 'Up to 3 websites',
      popular: false,
      category: 'SEO'
    },
    {
      id: 'social-manager',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'All-in-one social media management and scheduling platform',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Engagement tracking',
        'Hashtag research',
        'Team collaboration'
      ],
      price: '$25/month',
      users: 'Up to 5 accounts',
      popular: false,
      category: 'Social Media'
    },
    {
      id: 'support-bot',
      icon: '🤖',
      title: 'Support Bot',
      description: 'AI-powered customer support chatbot with natural language processing',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Knowledge base integration',
        'Escalation to humans',
        'Analytics dashboard'
      ],
      price: '$49/month',
      users: 'Unlimited',
      popular: true,
      category: 'Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(microSaasProducts.map(product => product.category)))];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our pre-built solutions and easy integration.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all our services.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our cloud-based infrastructure.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: 'Scalable',
      description: 'Grow with your business - easily upgrade or add more features as needed.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ];
>>>>>>> origin/main
>>>>>>> origin/main

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

>>>>>>> main
  return (
<<<<<<< HEAD
    <>
  </>
      <Helmet>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

=======
<<<<<<< HEAD
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Micro SAAS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use business tools with AI and automation.
          </p>
<<<<<<< HEAD
        </div>
      </div>
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Explore Tools
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Pricing
            </button>
=======
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to streamline your business operations. Analytics, scheduling, content generation, and more." />
        <meta name="keywords" content="micro SaaS, business tools, analytics dashboard, appointment scheduler, content generator, productivity tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready-to-use business tools that solve specific problems and boost productivity. No complex setup, just instant value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Products
              </a>
              <a
                href="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
              </a>
            </div>
>>>>>>> origin/main
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
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300 text-sm">{benefit}</p>
      {/* Featured Products */}
      {popularProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Tools</h2>
              <p className="text-xl text-gray-300">Our most popular micro SaaS solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group ${
                  tool.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{tool.price}</span>
                        {tool.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <span className="bg-gray-700 px-2 py-1 rounded">{tool.category}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Try Now
                    </button>
                  </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-medium">Popular</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-white mb-6">{product.price}</div>

                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                    Try Free Trial
                  </button>
=======
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </section>
    </>
      )}

      {/* All Products */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  {product.popular && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.category}</p>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-white mb-4">{product.price}</div>

                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )}
=======
>>>>>>> origin/main
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Micro SaaS Products
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {product.popular && (
                    <div className="flex items-center mb-3">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-yellow-600">Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{product.users}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      {product.price}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Link
                      to={`/micro-saas/${product.id}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your free trial today and experience the power of our micro SaaS solutions.
>>>>>>> origin/main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
=======
      </section>
>>>>>>> main
    </div>
>>>>>>> origin/main
>>>>>>> origin/main
  );
};
<<<<<<< HEAD
=======
const MicroSaaSPage: React.FC = () => {
  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Built-in analytics and monitoring',
    'Custom branding options',
    'API integration capabilities',
    'Multi-tenant support',
    'Automated billing and subscriptions',
    '24/7 technical support'
  ]

<<<<<<< HEAD
export default MicroSaasPage;
=======
<<<<<<< HEAD
export default MicroSaasPage;
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our pre-built micro-SaaS platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in weeks, not months.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Zap className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9

export default MicroSaaSPage
>>>>>>> origin/main
>>>>>>> origin/main
