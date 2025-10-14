'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Micro SaaS Solutions - Zion Tech Group",
    "description": "Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and specialized software services.",
    "url": "https://ziontechgroup.com/micro-saas-solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and brand voice customization.',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'Brand Voice Customization',
        'SEO Optimization',
        'Plagiarism Detection',
        'Team Collaboration',
        'API Integration',
        'Analytics Dashboard'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', '5 templates', 'Basic support'] },
        professional: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Priority support', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'White-label'] }
      },
      icon: DocumentTextIcon,
      category: 'Content Creation',
      marketPrice: '$29-199/month',
      link: '/ai-content-generator'
    },
    {
      id: 'social-media-scheduler',
      title: 'Social Media Scheduler AI',
      description: 'Intelligent social media management with AI-powered optimal posting times, hashtag suggestions, and performance analytics.',
      features: [
        'AI Optimal Timing',
        'Hashtag Suggestions',
        'Visual Content Creation',
        'Cross-platform Posting',
        'Analytics & Insights',
        'Team Management',
        'Content Calendar',
        'Auto-responder'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['3 social accounts', '50 posts/month', 'Basic analytics'] },
        professional: { price: 49, period: 'month', features: ['10 social accounts', 'Unlimited posts', 'Advanced analytics', 'Team features'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited accounts', 'White-label', 'Custom integrations', 'Dedicated support'] }
      },
      icon: GlobeAltIcon,
      category: 'Social Media',
      marketPrice: '$19-99/month',
      link: '/social-media-scheduler'
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation Suite',
      description: 'Complete email marketing solution with AI-driven segmentation, personalized campaigns, and advanced automation workflows.',
      features: [
        'AI Segmentation',
        'Personalized Campaigns',
        'Automation Workflows',
        'A/B Testing',
        'Advanced Analytics',
        'Template Library',
        'CRM Integration',
        'Deliverability Optimization'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['1,000 contacts', '5,000 emails/month', 'Basic templates'] },
        professional: { price: 65, period: 'month', features: ['10,000 contacts', 'Unlimited emails', 'Advanced automation', 'A/B testing'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited contacts', 'White-label', 'Custom integrations', 'Dedicated IP'] }
      },
      icon: DevicePhoneMobileIcon,
      category: 'Email Marketing',
      marketPrice: '$25-149/month',
      link: '/email-marketing-automation'
    },
    {
      id: 'project-management-ai',
      title: 'AI Project Management Hub',
      description: 'Intelligent project management with AI-powered task prioritization, resource allocation, and predictive analytics.',
      features: [
        'AI Task Prioritization',
        'Resource Allocation',
        'Predictive Analytics',
        'Time Tracking',
        'Team Collaboration',
        'Gantt Charts',
        'Risk Assessment',
        'Performance Metrics'
      ],
      pricing: {
        starter: { price: 15, period: 'month', features: ['5 projects', '10 team members', 'Basic features'] },
        professional: { price: 45, period: 'month', features: ['Unlimited projects', '50 team members', 'Advanced features', 'Integrations'] },
        enterprise: { price: 89, period: 'month', features: ['Unlimited everything', 'Custom fields', 'API access', 'Priority support'] }
      },
      icon: ChartBarIcon,
      category: 'Project Management',
      marketPrice: '$15-89/month',
      link: '/project-management-ai'
    },
    {
      id: 'customer-support-chatbot',
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff.',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'Custom Branding',
        'Analytics Dashboard',
        'API Integration'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['1,000 conversations', 'Basic AI', 'Email support'] },
        professional: { price: 89, period: 'month', features: ['10,000 conversations', 'Advanced AI', 'Phone support', 'Custom training'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited conversations', 'Custom AI models', 'Dedicated support', 'White-label'] }
      },
      icon: UserGroupIcon,
      category: 'Customer Support',
      marketPrice: '$39-199/month',
      link: '/customer-support-chatbot'
    },
    {
      id: 'inventory-management-ai',
      title: 'AI Inventory Management System',
      description: 'Smart inventory management with predictive analytics, automated reordering, and real-time tracking across multiple channels.',
      features: [
        'Predictive Analytics',
        'Automated Reordering',
        'Multi-channel Sync',
        'Real-time Tracking',
        'Demand Forecasting',
        'Supplier Management',
        'Barcode Scanning',
        'Reporting Dashboard'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['1,000 SKUs', 'Basic analytics', 'Email support'] },
        professional: { price: 75, period: 'month', features: ['10,000 SKUs', 'Advanced analytics', 'API access', 'Phone support'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited SKUs', 'Custom integrations', 'Dedicated support', 'White-label'] }
      },
      icon: ServerIcon,
      category: 'Inventory Management',
      marketPrice: '$35-149/month',
      link: '/inventory-management-ai'
    },
    {
      id: 'financial-analytics-dashboard',
      title: 'AI Financial Analytics Dashboard',
      description: 'Comprehensive financial analytics platform with AI-powered insights, forecasting, and automated reporting for businesses.',
      features: [
        'AI Financial Insights',
        'Automated Forecasting',
        'Real-time Reporting',
        'Expense Tracking',
        'Revenue Analytics',
        'Cash Flow Management',
        'Tax Preparation',
        'Multi-currency Support'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['Basic analytics', '5 bank accounts', 'Email support'] },
        professional: { price: 99, period: 'month', features: ['Advanced analytics', 'Unlimited accounts', 'API access', 'Phone support'] },
        enterprise: { price: 199, period: 'month', features: ['Custom analytics', 'White-label', 'Dedicated support', 'Custom integrations'] }
      },
      icon: CurrencyDollarIcon,
      category: 'Financial Analytics',
      marketPrice: '$49-199/month',
      link: '/financial-analytics-dashboard'
    },
    {
      id: 'hr-management-suite',
      title: 'AI HR Management Suite',
      description: 'Complete human resources management with AI-powered recruitment, employee analytics, and automated workflows.',
      features: [
        'AI Recruitment',
        'Employee Analytics',
        'Automated Workflows',
        'Performance Tracking',
        'Payroll Integration',
        'Time & Attendance',
        'Benefits Management',
        'Compliance Monitoring'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['25 employees', 'Basic features', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['100 employees', 'Advanced features', 'API access', 'Phone support'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited employees', 'Custom features', 'Dedicated support', 'White-label'] }
      },
      icon: UserGroupIcon,
      category: 'HR Management',
      marketPrice: '$29-129/month',
      link: '/hr-management-suite'
    }
  ];

  const categories = [
    'Content Creation',
    'Social Media',
    'Email Marketing',
    'Project Management',
    'Customer Support',
    'Inventory Management',
    'Financial Analytics',
    'HR Management'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and specialized software services with competitive pricing." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, software solutions, SaaS pricing, business software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools, automation platforms, and specialized software services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, specialized software solutions designed to solve specific business challenges with AI-powered intelligence and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions that address specific business needs with cutting-edge AI and automation technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              All Categories
            </button>
            {categories.map((category) => (
              <button key={category} className="px-6 py-2 bg-slate-700 text-gray-300 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-purple-400">
                      ${service.pricing.starter.price}
                      <span className="text-sm text-gray-400">/{service.pricing.starter.period}</span>
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link 
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-4 py-2 border border-purple-500 text-purple-300 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent, competitive pricing with no hidden fees. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $15-49<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic features included
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $49-99<span className="text-lg text-gray-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  All starter features
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced integrations
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-white">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 mr-3" />
                  API access
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">
                $99-199<span className="text-lg text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  All professional features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited usage
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to discuss your specific needs and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}