'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CogIcon,
  EyeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      icon: DocumentTextIcon,
      gradient: 'from-blue-500 to-purple-500',
      pricing: {
        starter: 29,
        pro: 79,
        enterprise: 199
      },
      features: ['Unlimited content', '50+ languages', 'SEO optimization', 'Brand voice training'],
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard Pro',
      description: 'Business intelligence with AI-powered insights and real-time dashboards',
      icon: ChartBarIcon,
      gradient: 'from-green-500 to-teal-500',
      pricing: {
        starter: 49,
        pro: 149,
        enterprise: 399
      },
      features: ['Real-time dashboards', 'AI insights', 'Custom reports', '100+ integrations'],
      popular: false
    },
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI prioritization and team collaboration',
      icon: CogIcon,
      gradient: 'from-orange-500 to-red-500',
      pricing: {
        starter: 19,
        pro: 49,
        enterprise: 129
      },
      features: ['AI prioritization', 'Team collaboration', 'Time tracking', 'Custom workflows'],
      popular: false
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Pro',
      description: 'Advanced customer support automation with AI chatbots and ticket management',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-500 to-pink-500',
      pricing: {
        starter: 39,
        pro: 99,
        enterprise: 249
      },
      features: ['AI chatbots', 'Ticket management', 'Multi-channel', 'Sentiment analysis'],
      popular: false
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager Pro',
      description: 'Intelligent inventory management with demand forecasting and automation',
      icon: CogIcon,
      gradient: 'from-indigo-500 to-blue-500',
      pricing: {
        starter: 59,
        pro: 149,
        enterprise: 349
      },
      features: ['Demand forecasting', 'Auto reordering', 'Multi-location', 'Cost optimization'],
      popular: false
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager Pro',
      description: 'Comprehensive social media management with AI content creation and scheduling',
      icon: GlobeAltIcon,
      gradient: 'from-cyan-500 to-blue-500',
      pricing: {
        starter: 39,
        pro: 89,
        enterprise: 199
      },
      features: ['Multi-platform', 'AI content', 'Optimal timing', 'Engagement tracking'],
      popular: false
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker Pro',
      description: 'Smart expense management with AI categorization and automated reporting',
      icon: CurrencyDollarIcon,
      gradient: 'from-emerald-500 to-green-500',
      pricing: {
        starter: 15,
        pro: 35,
        enterprise: 79
      },
      features: ['Receipt scanning', 'AI categorization', 'Automated reporting', 'Tax preparation'],
      popular: false
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with intelligent code completion and debugging',
      icon: CogIcon,
      gradient: 'from-violet-500 to-purple-500',
      pricing: {
        starter: 29,
        pro: 69,
        enterprise: 149
      },
      features: ['Code completion', 'Bug detection', 'Multi-language', 'IDE integration'],
      popular: false
    },
    {
      id: 'ai-translator',
      name: 'AI Translator Pro',
      description: 'Professional AI translation service with support for 100+ languages',
      icon: GlobeAltIcon,
      gradient: 'from-rose-500 to-pink-500',
      pricing: {
        starter: 25,
        pro: 59,
        enterprise: 129
      },
      features: ['100+ languages', 'Context-aware', 'Real-time', 'Document translation'],
      popular: false
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator Pro',
      description: 'Revolutionary AI video creation platform with advanced editing capabilities',
      icon: EyeIcon,
      gradient: 'from-amber-500 to-orange-500',
      pricing: {
        starter: 49,
        pro: 119,
        enterprise: 299
      },
      features: ['Text-to-video', 'AI voice', 'HD/4K output', 'Brand customization'],
      popular: false
    },
    {
      id: 'ai-legal-assistant',
      name: 'AI Legal Assistant Pro',
      description: 'Intelligent legal research and document analysis with compliance checking',
      icon: ShieldCheckIcon,
      gradient: 'from-slate-500 to-gray-500',
      pricing: {
        starter: 199,
        pro: 499,
        enterprise: 1299
      },
      features: ['Contract analysis', 'Legal research', 'Compliance checking', 'Risk assessment'],
      popular: false
    },
    {
      id: 'ai-medical-assistant',
      name: 'AI Medical Assistant Pro',
      description: 'Advanced medical AI platform for diagnosis support and patient management',
      icon: UserGroupIcon,
      gradient: 'from-red-500 to-pink-500',
      pricing: {
        starter: 299,
        pro: 799,
        enterprise: 1999
      },
      features: ['Symptom analysis', 'Diagnosis support', 'Patient management', 'HIPAA compliance'],
      popular: false
    }
  ];

  const aiServices = [
    {
      id: 'ai-development',
      name: 'AI Development Services',
      description: 'Custom AI solutions tailored to your business needs',
      icon: CogIcon,
      gradient: 'from-purple-500 to-pink-500',
      pricing: {
        basic: 5000,
        pro: 15000,
        enterprise: 50000
      },
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Custom AI Solutions'],
      popular: true
    },
    {
      id: 'ai-chatbot-pro',
      name: 'Zion AI Chatbot Pro',
      description: 'Advanced conversational AI chatbot with natural language understanding',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-blue-500 to-cyan-500',
      pricing: {
        basic: 199,
        pro: 499,
        enterprise: 1299
      },
      features: ['Natural Language Understanding', 'Multi-language Support', 'Voice Integration', 'Analytics Dashboard'],
      popular: false
    },
    {
      id: 'ai-document-analyzer',
      name: 'Zion AI Document Analyzer Pro',
      description: 'Intelligent document processing and analysis platform',
      icon: DocumentTextIcon,
      gradient: 'from-green-500 to-emerald-500',
      pricing: {
        basic: 299,
        pro: 799,
        enterprise: 1999
      },
      features: ['OCR Technology', 'NLP Processing', 'Data Extraction', 'Automated Analysis'],
      popular: false
    }
  ];

  const itSolutions = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: GlobeAltIcon,
      gradient: 'from-blue-500 to-cyan-500',
      pricing: {
        basic: 2000,
        pro: 8000,
        enterprise: 25000
      },
      features: ['Cloud Migration', 'Infrastructure Management', 'Security Implementation', '24/7 Monitoring'],
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom web applications and e-commerce solutions',
      icon: CogIcon,
      gradient: 'from-purple-500 to-pink-500',
      pricing: {
        basic: 3000,
        pro: 12000,
        enterprise: 35000
      },
      features: ['Custom Development', 'E-commerce Solutions', 'Mobile Responsive', 'SEO Optimization'],
      popular: false
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: EyeIcon,
      gradient: 'from-indigo-500 to-purple-500',
      pricing: {
        basic: 5000,
        pro: 15000,
        enterprise: 40000
      },
      features: ['Native Development', 'Cross-platform', 'App Store Optimization', 'Push Notifications'],
      popular: false
    }
  ];

  const tabs = [
    { id: 'micro-saas', name: 'Micro SaaS Solutions', count: microSaasServices.length },
    { id: 'ai-services', name: 'AI Services', count: aiServices.length },
    { id: 'it-solutions', name: 'IT Solutions', count: itSolutions.length }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'micro-saas':
        return microSaasServices;
      case 'ai-services':
        return aiServices;
      case 'it-solutions':
        return itSolutions;
      default:
        return microSaasServices;
    }
  };

  const getPricingRange = (services: any[]) => {
    const allPrices = services.flatMap(service => Object.values(service.pricing));
    const min = Math.min(...allPrices);
    const max = Math.max(...allPrices);
    return { min, max };
  };

  const currentServices = getCurrentServices();
  const pricingRange = getPricingRange(currentServices);

  return (
    <>
      <SEOHead 
        title="Pricing - Zion Tech Group AI & IT Solutions"
        description="Transparent pricing for our AI services, IT solutions, and micro SaaS applications. Choose the perfect plan for your business needs with flexible pricing options."
        keywords="pricing, AI services pricing, IT solutions pricing, micro saas pricing, business software pricing, technology services cost"
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Simple, Transparent Pricing
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Choose the perfect plan for your business needs. All plans include a 14-day free trial with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <Link to="/contact"
                  className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <a href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Pricing Range */}
              <div className="max-w-2xl mx-auto px-4">
                <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      ${pricingRange.min.toLocaleString()} - ${pricingRange.max.toLocaleString()}
                    </div>
                    <div className="text-gray-300">
                      Starting from ${pricingRange.min.toLocaleString()} per month
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                      {currentServices.length} {activeTab === 'micro-saas' ? 'Micro SaaS Solutions' : activeTab === 'ai-services' ? 'AI Services' : 'IT Solutions'} available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {activeTab === 'micro-saas' ? 'Micro SaaS Solutions' : activeTab === 'ai-services' ? 'AI Services' : 'IT Solutions'}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                {activeTab === 'micro-saas' 
                  ? 'Choose from our comprehensive collection of AI-powered micro SaaS solutions designed to solve specific business challenges.'
                  : activeTab === 'ai-services'
                  ? 'Advanced AI services and solutions to transform your business with cutting-edge artificial intelligence.'
                  : 'Comprehensive IT solutions and services to build, secure, and optimize your technology infrastructure.'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentServices.map((service, index) => (
                <div key={service.id}
                  className={`group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden ${
                    service.popular 
                      ? 'border-purple-500 shadow-purple-500/20' 
                      : 'border-slate-700 hover:border-purple-500 hover:shadow-purple-500/20'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                          ${service.pricing.starter}
                        </div>
                        <div className="text-sm text-gray-400">starting from</div>
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Pricing Tiers */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-3 text-sm">Pricing Tiers:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Starter:</span>
                          <span className="text-white font-semibold">${service.pricing.starter.toLocaleString()}/mo</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Professional:</span>
                          <span className="text-white font-semibold">${service.pricing.pro.toLocaleString()}/mo</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Enterprise:</span>
                          <span className="text-white font-semibold">${service.pricing.enterprise.toLocaleString()}/mo</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-3 text-sm">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Link to={`/contact?service=${service.id}`}
                        className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        Get Started
                      </Link>
                      <Link to={`/${service.id}`}
                        className="block w-full border border-purple-400 text-purple-300 text-center py-2 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Need a <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Custom Solution</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We offer custom enterprise solutions tailored to your specific business requirements and scale.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
                  <p className="text-gray-300 mb-6">
                    For large organizations with complex requirements, we offer custom enterprise solutions with:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Custom development and integration</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Dedicated support and SLA</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>White-label and on-premise options</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Advanced security and compliance</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Custom training and onboarding</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg p-8 mb-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Contact Sales</h4>
                    <p className="text-purple-100 mb-4">Get a custom quote for your enterprise needs</p>
                    <div className="text-3xl font-bold text-white mb-2">Custom Pricing</div>
                    <div className="text-purple-100">Based on your requirements</div>
                  </div>
                  <Link to="/contact"
                    className="block w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer free trials?</h3>
                <p className="text-gray-300">Yes! All our micro SaaS solutions and AI services come with a 14-day free trial. No credit card required to get started.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan later?</h3>
                <p className="text-gray-300">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-300">No setup fees for any of our services. You only pay the monthly or annual subscription fee.</p>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes! Save up to 20% when you choose annual billing instead of monthly billing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Choose your perfect plan and start your free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a></p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;