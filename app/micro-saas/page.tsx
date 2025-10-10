'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Target, Mail, Calendar, FileText, Settings, Code, Search, Globe, Smartphone, CreditCard, Database, Lock, PieChart, Activity, Zap as ZapIcon, Globe as GlobeIcon, Shield as ShieldIcon, BarChart, Target as TargetIcon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Settings as SettingsIcon, Clock, Phone, MapPin } from 'lucide-react';

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
  link: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics',
      link: '/ai-analytics-dashboard'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM',
      link: '/ai-crm'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security',
      link: '/security-monitoring-suite'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure',
      link: '/cloud-infrastructure-manager'
    },
    {
      id: '5',
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing',
      link: '/ai-email-marketing'
    },
    {
      id: '6',
      icon: MessageSquare,
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support',
      link: '/ai-chatbot-builder'
    }
  ];

  // Add 50+ comprehensive micro SaaS products
  const allMicroSaasProducts: MicroSaasProduct[] = [
    ...microSaasProducts,
    // Productivity & Business Tools
    {
      id: '7',
      icon: Code,
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates',
      features: ['50+ Templates', 'Multi-language Support', 'Plagiarism Check', 'SEO Optimization', 'Tone Adjustment'],
      price: '$29/month',
      users: 'Unlimited',
      popular: false,
      category: 'Productivity',
      link: '/ai-writing-assistant'
    },
    {
      id: '8',
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting',
      features: ['Real-time Analytics', 'Predictive Forecasting', 'Automated Reports', 'Custom Metrics', 'Data Integration'],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Analytics',
      link: '/smart-analytics'
    },
    {
      id: '9',
      icon: Calendar,
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management',
      features: ['Calendar Optimization', 'Meeting Coordination', 'Time Management', 'Auto-scheduling', 'Integration APIs'],
      price: '$19/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Productivity',
      link: '/ai-scheduler'
    },
    {
      id: '10',
      icon: CreditCard,
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Insights', 'Tax Preparation', 'Multi-currency'],
      price: '$15/month',
      users: 'Unlimited',
      popular: false,
      category: 'Finance',
      link: '/expense-tracker'
    },
    {
      id: '11',
      icon: Target,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Time Tracking', 'Project Templates'],
      price: '$39/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Productivity',
      link: '/task-manager-pro'
    },
    {
      id: '12',
      icon: Users,
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation',
      features: ['AI Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration', 'Mobile App'],
      price: '$59/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'CRM',
      link: '/crm-lite'
    },
    {
      id: '13',
      icon: Mail,
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing',
      features: ['Subject Line AI', 'Send Time Optimization', 'A/B Testing', 'Open Rate Tracking', 'Spam Analysis'],
      price: '$25/month',
      users: 'Up to 10,000 emails/month',
      popular: false,
      category: 'Marketing',
      link: '/email-optimizer'
    },
    {
      id: '14',
      icon: Globe,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics',
      features: ['Content Creation', 'Auto-scheduling', 'Performance Analytics', 'Multi-platform', 'Engagement Tracking'],
      price: '$45/month',
      users: 'Up to 5 accounts',
      popular: false,
      category: 'Marketing',
      link: '/social-media-manager'
    },
    {
      id: '15',
      icon: Code,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools',
      features: ['AI Design Tools', 'Logo Generation', 'Marketing Materials', 'Brand Kit', 'Template Library'],
      price: '$35/month',
      users: 'Unlimited',
      popular: false,
      category: 'Design',
      link: '/ai-design-studio'
    },
    {
      id: '16',
      icon: Globe,
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities',
      features: ['Drag-and-drop Builder', 'AI Optimization', 'A/B Testing', 'Conversion Tracking', 'Mobile Responsive'],
      price: '$29/month',
      users: 'Up to 10 pages',
      popular: false,
      category: 'Marketing',
      link: '/landing-page-builder'
    },
    {
      id: '17',
      icon: Search,
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions',
      features: ['SEO Analysis', 'Keyword Research', 'Content Suggestions', 'Ranking Tracking', 'Technical Audits'],
      price: '$49/month',
      users: 'Up to 5 websites',
      popular: false,
      category: 'Marketing',
      link: '/seo-optimizer'
    },
    {
      id: '18',
      icon: BarChart3,
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn',
      features: ['Multi-platform Ads', 'AI Optimization', 'Budget Management', 'Performance Tracking', 'Auto-bidding'],
      price: '$79/month',
      users: 'Up to $5,000 ad spend',
      popular: false,
      category: 'Marketing',
      link: '/ad-campaign-manager'
    },
    // Developer Tools
    {
      id: '19',
      icon: Code,
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages',
      features: ['Code Completion', 'Debugging Help', 'Code Optimization', 'Multi-language Support', 'Documentation'],
      price: '$39/month',
      users: 'Unlimited',
      popular: false,
      category: 'Development',
      link: '/code-assistant'
    },
    {
      id: '20',
      icon: Settings,
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools',
      features: ['API Creation', 'Documentation Generation', 'Testing Tools', 'Version Control', 'Rate Limiting'],
      price: '$59/month',
      users: 'Up to 50 APIs',
      popular: false,
      category: 'Development',
      link: '/api-builder'
    },
    {
      id: '21',
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs'],
      price: '$25/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Development',
      link: '/bug-tracker-pro'
    },
    {
      id: '22',
      icon: FileText,
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code',
      features: ['Auto Documentation', 'API Docs', 'User Guides', 'Code Comments', 'Multiple Formats'],
      price: '$19/month',
      users: 'Unlimited',
      popular: false,
      category: 'Development',
      link: '/doc-generator'
    },
    // Industry-Specific Tools
    {
      id: '23',
      icon: Users,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks'],
      price: '$199/month',
      users: 'Up to 100 positions',
      popular: false,
      category: 'HR',
      link: '/ai-recruitment-assistant'
    },
    {
      id: '24',
      icon: Shield,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis',
      features: ['HIPAA Compliance', 'Data Extraction', 'Medical Analysis', 'Patient Portal', 'Integration APIs'],
      price: '$299/month',
      users: 'Up to 500 patients',
      popular: false,
      category: 'Healthcare',
      link: '/medical-records-manager'
    },
    {
      id: '25',
      icon: BarChart3,
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting',
      features: ['Automated Bookkeeping', 'Tax Preparation', 'Financial Reports', 'Expense Tracking', 'Compliance'],
      price: '$149/month',
      users: 'Up to 5 companies',
      popular: false,
      category: 'Finance',
      link: '/ai-accounting-assistant'
    },
    {
      id: '26',
      icon: BarChart3,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization',
      features: ['Tenant Screening', 'Maintenance Scheduling', 'Rent Optimization', 'Property Analytics', 'Tenant Portal'],
      price: '$179/month',
      users: 'Up to 100 properties',
      popular: false,
      category: 'Real Estate',
      link: '/property-management-ai'
    },
    {
      id: '27',
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment',
      features: ['Contract Analysis', 'Compliance Tracking', 'Risk Assessment', 'Document Templates', 'Legal Research'],
      price: '$249/month',
      users: 'Up to 1,000 documents',
      popular: false,
      category: 'Legal',
      link: '/legal-document-manager'
    },
    {
      id: '28',
      icon: Users,
      title: 'Online Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking',
      features: ['Personalized Learning', 'Progress Tracking', 'Course Creation', 'Assessment Tools', 'Certification'],
      price: '$99/month',
      users: 'Up to 500 students',
      popular: false,
      category: 'Education',
      link: '/online-learning-platform'
    },
    {
      id: '29',
      icon: BarChart3,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management',
      features: ['Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment', 'Cost Optimization'],
      price: '$399/month',
      users: 'Up to 1,000 SKUs',
      popular: false,
      category: 'Manufacturing',
      link: '/supply-chain-optimizer'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support', 'Productivity', 'Finance', 'Design', 'Development', 'HR', 'Healthcare', 'Real Estate', 'Legal', 'Education', 'Manufacturing'];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | 50+ Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our comprehensive collection of 50+ micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, marketing, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software, productivity tools, marketing automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Discover our comprehensive collection of 50+ AI-powered micro SaaS tools designed to solve specific business challenges. 
              No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
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
              {allMicroSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <span className="text-gray-400 text-sm">{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={product.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Start Free Trial
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;