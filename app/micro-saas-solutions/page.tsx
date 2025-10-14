'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 1,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice customization.',
      price: '$299/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support (25+ languages)',
        'SEO optimization tools',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard',
        'API access',
        'Priority support'
      ],
      category: 'Content Creation',
      icon: DocumentTextIcon,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      trialDays: 14,
      setupFee: '$199'
    },
    {
      id: 2,
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence platform with predictive analytics, custom reporting, and automated insights.',
      price: '$199/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom report builder',
        'Automated insights',
        'Data integration (50+ sources)',
        'Mobile app access',
        'White-label options',
        'Team collaboration tools',
        'Export capabilities',
        '24/7 monitoring'
      ],
      category: 'Analytics',
      icon: ChartBarIcon,
      gradient: 'from-cyan-500 to-blue-500',
      popular: false,
      trialDays: 7,
      setupFee: '$99'
    },
    {
      id: 3,
      title: 'Automated Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing, multi-channel support, and seamless human handoff.',
      price: '$149/month',
      features: [
        'Natural language processing',
        'Multi-channel support (web, email, social)',
        'Human handoff capabilities',
        'Knowledge base integration',
        'Sentiment analysis',
        'Custom conversation flows',
        'Analytics and reporting',
        'Multi-language support',
        'API integration',
        'Training and onboarding'
      ],
      category: 'Customer Support',
      icon: UserGroupIcon,
      gradient: 'from-green-500 to-emerald-500',
      popular: false,
      trialDays: 10,
      setupFee: '$149'
    },
    {
      id: 4,
      title: 'Project Management Suite',
      description: 'Comprehensive project management platform with AI-powered task prioritization, team collaboration, and resource optimization.',
      price: '$249/month',
      features: [
        'AI-powered task prioritization',
        'Team collaboration tools',
        'Resource optimization',
        'Time tracking and reporting',
        'Gantt charts and timelines',
        'File sharing and storage',
        'Integration with 100+ tools',
        'Mobile applications',
        'Custom workflows',
        'Advanced reporting'
      ],
      category: 'Project Management',
      icon: CogIcon,
      gradient: 'from-yellow-500 to-orange-500',
      popular: true,
      trialDays: 21,
      setupFee: '$199'
    },
    {
      id: 5,
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-driven personalization, A/B testing, and comprehensive analytics.',
      price: '$179/month',
      features: [
        'AI-driven personalization',
        'Advanced A/B testing',
        'Behavioral triggers',
        'Email template builder',
        'List segmentation',
        'Deliverability optimization',
        'Comprehensive analytics',
        'Integration with CRM systems',
        'Compliance tools (GDPR, CAN-SPAM)',
        'Dedicated account manager'
      ],
      category: 'Marketing',
      icon: EnvelopeIcon,
      gradient: 'from-pink-500 to-rose-500',
      popular: false,
      trialDays: 14,
      setupFee: '$99'
    },
    {
      id: 6,
      title: 'Cybersecurity Monitoring',
      description: 'Real-time security monitoring platform with threat detection, vulnerability scanning, and incident response automation.',
      price: '$399/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Incident response automation',
        'Compliance monitoring',
        'Security awareness training',
        'Penetration testing',
        '24/7 security operations center',
        'Custom security policies',
        'Integration with existing tools',
        'Monthly security reports'
      ],
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-pink-500',
      popular: true,
      trialDays: 7,
      setupFee: '$299'
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'Analytics',
    'Customer Support',
    'Project Management',
    'Marketing',
    'Cybersecurity'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SaaS solutions designed to solve specific business challenges. From AI content generation to cybersecurity monitoring, we have the tools you need." />
        <meta name="keywords" content="micro SaaS, business software, AI tools, analytics, project management, customer support, cybersecurity" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive suite of micro SaaS solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <SparklesIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                Micro SaaS Solutions
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Innovation</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of micro SaaS solutions designed to solve specific business challenges. 
              From AI-powered content generation to advanced cybersecurity monitoring, we have the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-400">{service.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: {service.setupFee} • {service.trialDays}-day free trial
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 5 && (
                        <li className="text-sm text-purple-400">
                          +{service.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center transform hover:scale-105"
                    >
                      Start Free Trial
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="border border-slate-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-center"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We can create a custom micro SaaS solution tailored to your specific business needs. 
              Our team of experts will work with you to design, develop, and deploy the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Discuss Your Project
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <PhoneIcon className="w-6 h-6 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                  <span>ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;