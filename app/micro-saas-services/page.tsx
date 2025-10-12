'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Settings,
  Brain,
  Database,
  Smartphone,
  Wifi,
  Lock,
  Camera,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Calendar
} from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, lead scoring, and automated follow-ups',
      price: '$99/month',
      features: ['Lead scoring & qualification', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Custom dashboards', 'Mobile app'],
      icon: Users,
      path: '/ai-crm',
      category: 'Customer Management',
      rating: 4.8,
      reviews: 156,
      freeTrial: '14 days'
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights, custom dashboards, and predictive analytics',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time monitoring', 'API integration'],
      icon: BarChart3,
      path: '/smart-analytics',
      category: 'Analytics',
      rating: 4.9,
      reviews: 203,
      freeTrial: '30 days'
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications with comprehensive reporting',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting', 'CI/CD integration', 'Parallel execution'],
      icon: Cpu,
      path: '/ai-automated-testing',
      category: 'Quality Assurance',
      rating: 4.7,
      reviews: 134,
      freeTrial: '7 days'
    },
    {
      name: 'Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization, SEO tools, and multi-language support',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'User management', 'Template library'],
      icon: FileText,
      path: '/ai-content-management',
      category: 'Content Management',
      rating: 4.6,
      reviews: 98,
      freeTrial: '14 days'
    },
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and comprehensive analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'Template builder', 'List segmentation'],
      icon: Mail,
      path: '/ai-email-marketing',
      category: 'Marketing',
      rating: 4.8,
      reviews: 187,
      freeTrial: '14 days'
    },
    {
      name: 'Social Media Manager',
      description: 'AI-powered social media management with content suggestions, scheduling, and engagement analytics',
      price: '$89/month',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Scheduling tools', 'Influencer tracking'],
      icon: MessageSquare,
      path: '/ai-social-media-manager',
      category: 'Social Media',
      rating: 4.7,
      reviews: 145,
      freeTrial: '7 days'
    },
    {
      name: 'Project Management Hub',
      description: 'AI-enhanced project management with smart task assignment, progress tracking, and resource optimization',
      price: '$119/month',
      features: ['Smart task assignment', 'Progress tracking', 'Resource optimization', 'Team collaboration', 'Time tracking', 'Budget management'],
      icon: TrendingUp,
      path: '/ai-project-management',
      category: 'Project Management',
      rating: 4.8,
      reviews: 167,
      freeTrial: '14 days'
    },
    {
      name: 'Customer Support Bot',
      description: 'Intelligent customer support automation with multi-channel support and sentiment analysis',
      price: '$159/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Knowledge base', 'Ticket management', 'Live chat integration', 'Performance analytics'],
      icon: MessageSquare,
      path: '/ai-customer-support',
      category: 'Customer Support',
      rating: 4.9,
      reviews: 234,
      freeTrial: '14 days'
    },
    {
      name: 'Financial Analytics Tool',
      description: 'AI-powered financial analysis with forecasting, budgeting, and investment insights',
      price: '$179/month',
      features: ['Financial forecasting', 'Budget planning', 'Investment insights', 'Risk analysis', 'Compliance reporting', 'Custom reports'],
      icon: BarChart3,
      path: '/ai-financial-analytics',
      category: 'Finance',
      rating: 4.8,
      reviews: 112,
      freeTrial: '30 days'
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, active: true },
    { name: 'Customer Management', count: microSaasServices.filter(s => s.category === 'Customer Management').length, active: false },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: 'Quality Assurance', count: microSaasServices.filter(s => s.category === 'Quality Assurance').length, active: false },
    { name: 'Content Management', count: microSaasServices.filter(s => s.category === 'Content Management').length, active: false },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length, active: false },
    { name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length, active: false },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length, active: false },
    { name: 'Customer Support', count: microSaasServices.filter(s => s.category === 'Customer Support').length, active: false },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, active: false }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process and pre-built templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection for your business'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Grow with confidence - our solutions scale seamlessly as your business expands'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses getting started',
      features: ['Up to 5 users', 'Basic features', 'Email support', '5GB storage', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['Up to 25 users', 'Advanced features', 'Priority support', '50GB storage', 'Premium integrations', 'Custom reports'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited users', 'All features', '24/7 phone support', 'Unlimited storage', 'Custom integrations', 'Dedicated account manager'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Powerful Business Solutions</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including CRM, analytics, testing, content management, email marketing, and project management. Streamline your business processes." />
        <meta name="keywords" content="micro SAAS, business software, CRM, analytics, testing, content management, email marketing, project management, customer support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, scalable micro SAAS platforms designed to streamline your business processes, 
                enhance productivity, and drive growth across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS platforms are designed to deliver maximum value with minimal complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include free trials and no setup fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-green-500/50 bg-green-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-green-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Free trial: {service.freeTrial}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover how our micro SAAS solutions can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { ArrowRight, Brain } from 'lucide-react';



const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing tools.',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Build intelligent chatbots for customer support and engagement.',
      features: ['Custom chatbot creation', 'Multi-channel support', 'Analytics dashboard', 'Easy integration'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics and insights for your business.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Export reports'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Automate and optimize your email marketing campaigns.',
      features: ['Email automation', 'A/B testing', 'Personalization', 'Performance tracking'],
      pricing: 'Starting at $25/month',
      link: '/ai-email-assistant',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Generate and qualify leads with AI-powered tools.',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration'],
      pricing: 'Starting at $59/month',
      link: '/ai-lead-generation',
      popular: false
    },
    {
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      title: 'AI Document Processor',
      description: 'Automate document processing and data extraction.',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Batch processing'],
      pricing: 'Starting at $35/month',
      link: '/ai-document-processor',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management and project organization.',
      features: ['Smart scheduling', 'Priority management', 'Team collaboration', 'Progress tracking'],
      pricing: 'Starting at $19/month',
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial management.',
      features: ['Receipt scanning', 'Expense categorization', 'Budget tracking', 'Financial reports'],
      pricing: 'Starting at $15/month',
      link: '/ai-expense-tracker',
      popular: false
    },
    {
      icon: <Calendar className="w-8 h-8 text-teal-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management and scheduling.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time blocking', 'Integration sync'],
      pricing: 'Starting at $18/month',
      link: '/ai-smart-calendar'
    },
    {
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      title: 'AI Climate Solutions',
      description: 'Environmental monitoring and sustainability solutions powered by AI.',
      features: ['Carbon tracking', 'Sustainability goals', 'Impact reporting', 'Green recommendations'],
      pricing: 'Starting at $35/month',
      link: '/ai-climate-solutions-pro',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security.',
      features: ['Password generation', 'Security monitoring', 'Breach alerts', 'Multi-device sync'],
      pricing: 'Starting at $12/month',
      link: '/ai-password-manager',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and financial document management.',
      features: ['Template library', 'Automated calculations', 'Payment tracking', 'Tax compliance'],
      pricing: 'Starting at $22/month',
      link: '/ai-invoice-generator',
      popular: true
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'AI Tools' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS services. AI-powered tools and solutions for modern businesses." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI-powered micro SaaS applications designed to solve specific business challenges and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Focused solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4 text-sm">
                  {service.pricing}
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Trusted by Thousands of Users
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered micro SaaS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasServicesPage;