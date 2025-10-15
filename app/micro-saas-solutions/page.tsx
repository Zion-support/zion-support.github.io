'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ServerIcon,
  LockClosedIcon,
  CogIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  BeakerIcon,
  CommandLineIcon,
  DatabaseIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PhotoIcon,
  BrainIcon,
  CursorArrowRaysIcon,
  ChartPieIcon,
  PresentationChartLineIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  EnvelopeIcon as MailIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
  CloudIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon as WebIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  TagIcon,
  MegaphoneIcon,
  ShareIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  UserIcon,
  KeyIcon,
  ShieldCheckIcon as SecurityIcon,
  WifiIcon,
  SignalIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content using advanced AI models for blogs, social media, and marketing materials.',
      price: '$99/month',
      features: ['Unlimited Content Generation', 'Multiple AI Models', 'Brand Voice Training', 'SEO Optimization', 'Multi-language Support', 'Content Templates'],
      icon: DocumentTextIcon,
      href: '/ai-content-generator-pro',
      category: 'Content & Marketing',
      popular: true,
      trial: '14-day free trial'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with customizable dashboards and automated reporting.',
      price: '$149/month',
      features: ['Real-time Data', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'API Integration', 'Mobile App'],
      icon: ChartBarIcon,
      href: '/smart-analytics-dashboard',
      category: 'Analytics & Data',
      popular: false,
      trial: '7-day free trial'
    },
    {
      title: 'Automated Customer Support',
      description: 'AI-powered chatbot and support ticket management system with 24/7 availability.',
      price: '$199/month',
      features: ['AI Chatbot', 'Ticket Management', 'Multi-language Support', 'Analytics & Insights', 'Integration APIs', 'Custom Branding'],
      icon: ChatBubbleLeftRightIcon,
      href: '/automated-customer-support',
      category: 'Customer Service',
      popular: true,
      trial: '30-day free trial'
    },
    {
      title: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task prioritization and resource allocation.',
      price: '$129/month',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Budget Management'],
      icon: ClipboardDocumentListIcon,
      href: '/project-management-ai',
      category: 'Productivity',
      popular: false,
      trial: '14-day free trial'
    },
    {
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-driven personalization and campaign optimization.',
      price: '$79/month',
      features: ['AI Personalization', 'A/B Testing', 'Campaign Analytics', 'List Management', 'Email Templates', 'Automation Workflows'],
      icon: MailIcon,
      href: '/email-marketing-automation',
      category: 'Marketing',
      popular: false,
      trial: '21-day free trial'
    },
    {
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with optimal posting times and content suggestions.',
      price: '$89/month',
      features: ['Optimal Timing', 'Content Suggestions', 'Multi-platform Support', 'Performance Analytics', 'Hashtag Research', 'Team Collaboration'],
      icon: ShareIcon,
      href: '/social-media-scheduler',
      category: 'Social Media',
      popular: false,
      trial: '14-day free trial'
    },
    {
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant with code generation, debugging, and optimization capabilities.',
      price: '$199/month',
      features: ['Code Generation', 'Debugging Assistance', 'Code Review', 'Documentation Generation', 'Multi-language Support', 'IDE Integration'],
      icon: CodeBracketIcon,
      href: '/ai-code-assistant',
      category: 'Development',
      popular: true,
      trial: '30-day free trial'
    },
    {
      title: 'Smart Inventory Manager',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      price: '$179/month',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Support', 'Integration APIs', 'Mobile App'],
      icon: CubeIcon,
      href: '/smart-inventory-manager',
      category: 'E-commerce',
      popular: false,
      trial: '14-day free trial'
    },
    {
      title: 'AI Image Generator',
      description: 'Create stunning images, logos, and graphics using advanced AI image generation models.',
      price: '$149/month',
      features: ['Image Generation', 'Style Transfer', 'Logo Creation', 'Photo Enhancement', 'Batch Processing', 'API Access'],
      icon: PhotoIcon,
      href: '/ai-image-generator',
      category: 'Design & Media',
      popular: false,
      trial: '7-day free trial'
    },
    {
      title: 'Voice Assistant Builder',
      description: 'Create custom voice assistants with natural language processing and speech recognition.',
      price: '$249/month',
      features: ['Voice Recognition', 'Natural Language Processing', 'Custom Commands', 'Multi-language Support', 'Integration APIs', 'Analytics'],
      icon: MicrophoneIcon,
      href: '/voice-assistant-builder',
      category: 'AI & Automation',
      popular: false,
      trial: '14-day free trial'
    },
    {
      title: 'Smart CRM System',
      description: 'AI-powered customer relationship management with lead scoring and automated follow-ups.',
      price: '$299/month',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Pipeline', 'Customer Insights', 'Integration APIs', 'Mobile App'],
      icon: UserGroupIcon,
      href: '/smart-crm-system',
      category: 'Sales & CRM',
      popular: true,
      trial: '30-day free trial'
    },
    {
      title: 'AI Video Creator',
      description: 'Generate professional videos, animations, and presentations using AI video generation technology.',
      price: '$399/month',
      features: ['Video Generation', 'Animation Creation', 'Voice Synthesis', 'Scene Generation', 'Auto-editing', 'Templates'],
      icon: VideoCameraIcon,
      href: '/ai-video-creator',
      category: 'Design & Media',
      popular: false,
      trial: '7-day free trial'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & Data',
    'Customer Service',
    'Productivity',
    'Marketing',
    'Social Media',
    'Development',
    'E-commerce',
    'Design & Media',
    'AI & Automation',
    'Sales & CRM'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 3 micro SaaS tools',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '5GB storage',
        'Up to 5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited micro SaaS tools',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        '50GB storage',
        'Up to 25 team members',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom micro SaaS development',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'Unlimited storage',
        'Unlimited team members',
        'Advanced security',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months',
      icon: RocketLaunchIcon
    },
    {
      title: 'Cost Effective',
      description: 'Pay only for what you use with flexible pricing models',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise',
      icon: ChartBarIcon
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to keep your business running smoothly',
      icon: ClockIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions designed to solve specific business challenges. From AI content generation to project management, we have the tools you need." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business automation, AI tools, productivity software, business software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, Focused Software Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover our collection of specialized micro SaaS applications designed to solve specific 
              business challenges with precision and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Live Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, focused tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 gradient-text">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS</span> Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized tools designed to solve specific business challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700/50 hover:border-purple-500/50'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-xs text-green-400 font-semibold">
                    {service.trial}
                  </span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                </div>
                <ul className="text-sm text-gray-400 mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Link to={service.href} className="flex items-center">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SaaS <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your micro SaaS needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                tier.popular ? 'border-purple-500 ring-2 ring-purple-500/20 scale-105' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and discover how our micro SaaS solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
            >
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/demo" 
              className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
            >
              View Live Demo
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;