'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Code, Database, Smartphone, Globe, Lock, Settings, Calendar, FileText, Mail, Target, DollarSign, Heart, Box, Monitor, Link as LinkIcon, Server, Cpu, Sparkles, Award, Clock, CheckSquare, Zap as Lightning, Globe as World, Database as DataIcon, Smartphone as Mobile, Lock as Security, Settings as Config, Calendar as Schedule, FileText as Document, Mail as Email, Target as Goal, DollarSign as Money, Heart as Health, Box as Package, Monitor as Screen, LinkIcon as Connect, Server as Host, Cpu as Processor, Sparkles as Magic, Award as Trophy, Clock as Time, CheckSquare as Done } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
  benefits: string[];
  marketPrice: string;
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: MicroSaasProduct[] = [
    // AI-Powered Business Tools
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.',
      features: [
        'Real-time data visualization with 50+ chart types',
        'AI-powered predictive analytics and forecasting',
        'Custom report generation and scheduling',
        'Email alerts and notifications system',
        'Multi-platform integration (Salesforce, HubSpot, Google Analytics)',
        'Advanced filtering and segmentation',
        'White-label reporting capabilities',
        'REST API access for custom integrations',
        'Mobile-responsive dashboards',
        'Data export in multiple formats (PDF, Excel, CSV)'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics',
      benefits: ['Increase data insights by 300%', 'Reduce reporting time by 80%', 'Improve decision-making speed'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with intelligent chatbots, live chat, and automated ticket management.',
      features: [
        'AI chatbot with natural language processing',
        'Live chat support with agent handoff',
        'Automated ticket routing and prioritization',
        'Multi-language support (50+ languages)',
        'Sentiment analysis and mood tracking',
        'Knowledge base integration',
        'Advanced analytics and reporting',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Custom bot training and responses',
        '24/7 automated support capabilities'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Communication',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 90%', 'Increase customer satisfaction'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-customer-support-suite'
    },
    {
      id: '3',
      icon: Shield,
      title: 'AI Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with AI-powered threat detection, compliance management, and incident response.',
      features: [
        'Real-time threat detection and alerting',
        'Automated security vulnerability scans',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Incident response automation',
        'Security dashboard and analytics',
        'Penetration testing tools',
        '24/7 security monitoring',
        'Custom security policies',
        'Integration with existing security tools',
        'Detailed security reports and recommendations'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security',
      benefits: ['Prevent 99.9% of security breaches', 'Reduce compliance costs by 70%', 'Automate security monitoring'],
      marketPrice: '$599/month',
      link: 'https://ziontechgroup.com/ai-security-monitor'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'AI Cloud Backup Enterprise',
      description: 'Intelligent cloud backup solution with AI-powered data deduplication, disaster recovery, and compliance features.',
      features: [
        'Automated daily backups with AI optimization',
        'Cross-platform sync and version control',
        'Disaster recovery with 99.9% uptime',
        'AES-256 encryption for data security',
        'Incremental backup technology',
        'Point-in-time recovery capabilities',
        'Compliance features (GDPR, HIPAA)',
        'Bandwidth throttling and scheduling',
        'Multi-cloud storage support',
        'Real-time backup monitoring'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Storage',
      benefits: ['Reduce backup costs by 50%', 'Ensure 99.9% data recovery', 'Automate backup management'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-cloud-backup'
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'AI Performance Tracker Plus',
      description: 'Advanced application performance monitoring with AI-powered insights, error tracking, and optimization recommendations.',
      features: [
        'Real-time performance monitoring',
        'AI-powered error detection and alerting',
        'Uptime monitoring with SLA tracking',
        'Performance optimization recommendations',
        'Custom alert management system',
        'Interactive dashboards and reports',
        'API and database monitoring',
        'Mobile app performance tracking',
        'Load testing and capacity planning',
        'Integration with popular development tools'
      ],
      price: '$99/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring',
      benefits: ['Improve app performance by 40%', 'Reduce downtime by 85%', 'Optimize resource usage'],
      marketPrice: '$399/month',
      link: 'https://ziontechgroup.com/ai-performance-tracker'
    },
    {
      id: '6',
      icon: Brain,
      title: 'AI Workflow Automation Pro',
      description: 'Intelligent business process automation with AI-powered workflow optimization and 500+ integrations.',
      features: [
        'Visual workflow builder with drag-and-drop',
        'AI-powered process optimization',
        '500+ pre-built integrations',
        'Custom automation workflows',
        'Process mining and analytics',
        'Exception handling and notifications',
        'Team collaboration tools',
        'Mobile app for workflow management',
        'Advanced reporting and insights',
        'Enterprise-grade security and compliance'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI',
      benefits: ['Automate 90% of repetitive tasks', 'Reduce process time by 70%', 'Increase team productivity'],
      marketPrice: '$799/month',
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: '7',
      icon: Mail,
      title: 'AI Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization, A/B testing, and advanced analytics.',
      features: [
        'AI-powered email personalization',
        'Advanced segmentation and targeting',
        'A/B testing and optimization',
        'Email template library (100+ templates)',
        'Advanced analytics and reporting',
        'CRM integration capabilities',
        'Compliance tools (GDPR, CAN-SPAM)',
        'Automated email sequences',
        'Subject line optimization',
        'Send time optimization'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase email open rates by 45%', 'Boost conversion rates by 60%', 'Automate email campaigns'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      id: '8',
      icon: Globe,
      title: 'AI Social Media Manager',
      description: 'Complete social media management with AI content generation, scheduling, and performance analytics.',
      features: [
        'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
        'AI content generation and optimization',
        'Smart post scheduling and optimization',
        'Advanced analytics and insights',
        'Hashtag research and optimization',
        'Engagement tracking and monitoring',
        'Team collaboration tools',
        'Brand monitoring and reputation management',
        'Influencer identification and outreach',
        'Social media ROI tracking'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Marketing',
      benefits: ['Increase social engagement by 80%', 'Save 10 hours per week', 'Improve brand visibility'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-social-media-manager'
    },
    {
      id: '9',
      icon: DollarSign,
      title: 'AI Expense Tracker Pro',
      description: 'Advanced expense management with AI-powered categorization, receipt scanning, and financial reporting.',
      features: [
        'OCR receipt scanning and processing',
        'AI-powered expense categorization',
        'Automated expense reporting',
        'Budget tracking and alerts',
        'Approval workflow management',
        'Integration with accounting software',
        'Mobile app with offline capabilities',
        'Compliance and audit features',
        'Multi-currency support',
        'Advanced financial analytics'
      ],
      price: '$39/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Finance',
      benefits: ['Reduce expense processing time by 75%', 'Improve financial accuracy', 'Automate expense management'],
      marketPrice: '$149/month',
      link: 'https://ziontechgroup.com/ai-expense-tracker'
    },
    {
      id: '10',
      icon: Calendar,
      title: 'AI Appointment Scheduler Plus',
      description: 'Smart appointment scheduling with AI optimization, automated reminders, and multi-timezone support.',
      features: [
        'Calendar integration (Google, Outlook, Apple)',
        'AI scheduling optimization',
        'Automated reminder system',
        'Payment processing integration',
        'Video conferencing integration',
        'Multi-timezone support',
        'Custom booking forms and pages',
        'Analytics and reporting dashboard',
        'Team scheduling capabilities',
        'Mobile app for on-the-go management'
      ],
      price: '$49/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Scheduling',
      benefits: ['Reduce no-shows by 50%', 'Optimize scheduling efficiency', 'Automate appointment management'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-appointment-scheduler'
    },
    {
      id: '11',
      icon: FileText,
      title: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and SEO optimization.',
      features: [
        'Blog post generation with SEO optimization',
        'Social media content creation',
        'Email campaign generation',
        'SEO content optimization',
        'Brand voice customization',
        'Content calendar management',
        'Plagiarism checking and originality',
        'Multi-language content generation',
        'Content performance analytics',
        'Team collaboration features'
      ],
      price: '$79/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Content',
      benefits: ['Create content 10x faster', 'Improve SEO rankings', 'Maintain consistent brand voice'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: '12',
      icon: Target,
      title: 'AI Lead Generation Suite',
      description: 'Complete lead generation and management system with AI-powered scoring and automated follow-ups.',
      features: [
        'AI-powered lead scoring and qualification',
        'Automated lead capture forms',
        'Email sequence automation',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Lead tracking and analytics',
        'Conversion optimization tools',
        'A/B testing for lead generation',
        'Automated follow-up sequences',
        'Lead source attribution',
        'ROI tracking and reporting'
      ],
      price: '$129/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Sales',
      benefits: ['Increase lead quality by 65%', 'Boost conversion rates by 40%', 'Automate lead nurturing'],
      marketPrice: '$499/month',
      link: 'https://ziontechgroup.com/ai-lead-generation'
    },
    {
      id: '13',
      icon: Search,
      title: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO analysis and optimization with AI-powered recommendations and competitor analysis.',
      features: [
        'AI-powered keyword research and analysis',
        'Comprehensive site audit and recommendations',
        'Competitor analysis and benchmarking',
        'Content optimization suggestions',
        'Rank tracking and monitoring',
        'Technical SEO analysis',
        'Link building tools and strategies',
        'Performance monitoring and reporting',
        'Local SEO optimization',
        'Schema markup generation'
      ],
      price: '$89/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'SEO',
      benefits: ['Improve search rankings by 200%', 'Increase organic traffic by 150%', 'Optimize SEO strategy'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-seo-optimizer'
    },
    {
      id: '14',
      icon: BarChart3,
      title: 'AI Survey Builder Pro',
      description: 'Advanced survey creation and analysis with AI-powered insights and automated reporting.',
      features: [
        'Drag-and-drop survey builder',
        'AI question suggestions and optimization',
        'Advanced analytics and insights',
        'Custom themes and branding',
        'Multi-channel distribution',
        'Response tracking and management',
        'Data export in multiple formats',
        'Integration with popular tools',
        'Advanced reporting and visualization',
        'Team collaboration features'
      ],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Research',
      benefits: ['Create surveys 5x faster', 'Improve response rates by 40%', 'Get actionable insights'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-survey-builder'
    },
    {
      id: '15',
      icon: CheckSquare,
      title: 'AI Project Management Pro',
      description: 'Intelligent project management with AI-powered task optimization, team collaboration, and resource planning.',
      features: [
        'AI-powered task prioritization',
        'Team collaboration and communication',
        'Resource planning and allocation',
        'Time tracking and productivity analytics',
        'Progress monitoring and reporting',
        'Integration with popular tools',
        'Mobile app for project management',
        'Custom workflows and automation',
        'Risk assessment and mitigation',
        'Client portal and reporting'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Management',
      benefits: ['Increase team productivity by 50%', 'Reduce project delays by 60%', 'Improve project success rates'],
      marketPrice: '$399/month',
      link: 'https://ziontechgroup.com/ai-project-management'
    },
    // Additional AI-Powered Tools
    {
      id: '16',
      icon: Code,
      title: 'AI Code Assistant Pro',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: [
        'Intelligent code completion and suggestions',
        'Automated debugging and error detection',
        'Code optimization recommendations',
        'Multi-language support (Python, JavaScript, Java, C++, etc.)',
        'Code review and quality analysis',
        'Documentation generation',
        'Refactoring suggestions',
        'Security vulnerability detection',
        'Integration with popular IDEs',
        'Team collaboration features'
      ],
      price: '$39/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Development',
      benefits: ['Write code 3x faster', 'Reduce bugs by 70%', 'Improve code quality'],
      marketPrice: '$199/month',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      id: '17',
      icon: Database,
      title: 'AI Database Optimizer',
      description: 'Intelligent database performance optimization with AI-powered query analysis and recommendations.',
      features: [
        'AI-powered query optimization',
        'Performance monitoring and analysis',
        'Automated index recommendations',
        'Query performance insights',
        'Database health monitoring',
        'Capacity planning and scaling',
        'Security vulnerability detection',
        'Backup and recovery optimization',
        'Multi-database support',
        'Integration with popular databases'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Database',
      benefits: ['Improve database performance by 60%', 'Reduce query time by 80%', 'Optimize resource usage'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-database-optimizer'
    },
    {
      id: '18',
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.',
      features: [
        'Drag-and-drop app builder',
        'AI-powered design suggestions',
        'Native iOS and Android apps',
        'Real-time preview and testing',
        'App store deployment automation',
        'Push notification management',
        'Analytics and user tracking',
        'Custom branding and themes',
        'Integration with popular services',
        'Team collaboration tools'
      ],
      price: '$149/month',
      users: 'Up to 10 users',
      popular: false,
      category: 'Development',
      benefits: ['Build apps 5x faster', 'Reduce development costs by 70%', 'No coding required'],
      marketPrice: '$599/month',
      link: 'https://ziontechgroup.com/ai-mobile-app-builder'
    },
    {
      id: '19',
      icon: Heart,
      title: 'AI Health Monitor',
      description: 'Personal health monitoring with AI-powered insights, symptom tracking, and wellness recommendations.',
      features: [
        'AI-powered health analysis',
        'Symptom tracking and monitoring',
        'Wellness recommendations',
        'Medication reminders',
        'Health goal tracking',
        'Integration with wearables',
        'Doctor appointment scheduling',
        'Health report generation',
        'Emergency contact alerts',
        'Privacy and security compliance'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Health',
      benefits: ['Improve health outcomes', 'Prevent health issues', 'Track wellness goals'],
      marketPrice: '$99/month',
      link: 'https://ziontechgroup.com/ai-health-monitor'
    },
    {
      id: '20',
      icon: Settings,
      title: 'AI IT Helpdesk Pro',
      description: 'Intelligent IT support with AI-powered ticket routing, automated solutions, and knowledge management.',
      features: [
        'AI-powered ticket routing and prioritization',
        'Automated solution suggestions',
        'Knowledge base management',
        'Self-service portal',
        'SLA monitoring and reporting',
        'Integration with IT tools',
        'Mobile app for technicians',
        'Asset management integration',
        'Change management workflows',
        'Performance analytics'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'IT Support',
      benefits: ['Reduce resolution time by 60%', 'Improve customer satisfaction', 'Automate IT support'],
      marketPrice: '$299/month',
      link: 'https://ziontechgroup.com/ai-it-helpdesk'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Scheduling', 'Content', 'Sales', 'SEO', 'Research', 'Management', 'Development', 'Database', 'Health', 'IT Support'];

  const benefits = [
    'Quick setup and deployment (5 minutes)',
    'Scalable pricing plans for any business size',
    '24/7 customer support and technical assistance',
    'Regular feature updates and improvements',
    'Enterprise-grade security and compliance',
    'Easy integration with existing tools',
    'Free trial and money-back guarantee',
    'Comprehensive documentation and training',
    'API access for custom integrations',
    'White-label options available'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '50K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime SLA' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 20+ AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of 20+ micro SaaS solutions powered by AI. From analytics to automation, find the perfect tool for your business needs. Starting at $29/month." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring, workflow automation" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our collection of 20+ AI-powered micro SaaS tools designed to solve specific business problems. 
              Quick setup, affordable pricing, powerful features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {selectedCategory === 'All' ? 'All Micro SaaS Products' : `${selectedCategory} Products`}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group ${product.popular ? 'ring-2 ring-purple-500 shadow-2xl shadow-purple-500/25' : ''}`}>
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold text-white">{product.price}</span>
                        <div className="text-sm text-gray-400 line-through">{product.marketPrice}</div>
                      </div>
                      <div className="text-sm text-gray-400">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.slice(0, 6).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 6 && (
                      <li className="text-gray-400 text-sm">
                        +{product.features.length - 6} more features
                      </li>
                    )}
                  </ul>

                  <div className="space-y-4">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <h4 className="text-green-400 font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="text-green-300 text-sm">• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Start Free Trial
                      </a>
                      <button className="w-full py-2 px-6 rounded-lg font-medium transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                        Learn More
                      </button>
                    </div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <Zap className="inline-block mr-2 w-5 h-5" />
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  View All Plans
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;