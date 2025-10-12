import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';
import { CheckCircle, Star, ArrowRight, Brain, Cloud, Shield, Zap, Users, DollarSign, Clock, Globe, Settings, BarChart, Target, Sparkles } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const aiServices = [
    {
      name: 'AI Content Generation Pro',
      price: { monthly: 199, yearly: 1990 },
      description: 'Advanced AI content creation with 50+ templates',
      features: ['50K words/month', '50+ templates', 'Multi-language support', 'SEO optimization', 'Brand voice training'],
      popular: true
    },
    {
      name: 'AI Analytics Dashboard Pro',
      price: { monthly: 299, yearly: 2990 },
      description: 'Comprehensive business intelligence and analytics',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API access', 'White-label options'],
      popular: false
    },
    {
      name: 'AI Cybersecurity Suite Pro',
      price: { monthly: 499, yearly: 4990 },
      description: 'Advanced threat detection and security monitoring',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Compliance reporting', '24/7 support'],
      popular: false
    },
    {
      name: 'AI Meeting Assistant',
      price: { monthly: 79, yearly: 790 },
      description: 'Intelligent meeting management and transcription',
      features: ['Real-time transcription', 'Meeting summaries', 'Action items', 'Video analysis', 'Smart scheduling'],
      popular: true
    },
    {
      name: 'AI Fraud Detector',
      price: { monthly: 299, yearly: 2990 },
      description: 'Advanced fraud detection and risk assessment',
      features: ['Real-time detection', 'Behavioral analysis', 'Risk scoring', 'Custom rules', 'API integration'],
      popular: false
    },
    {
      name: 'AI Energy Manager',
      price: { monthly: 199, yearly: 1990 },
      description: 'Smart energy optimization and monitoring',
      features: ['Energy monitoring', 'Cost optimization', 'Carbon tracking', 'Predictive maintenance', 'Automated controls'],
      popular: false
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure Management',
      price: { monthly: 999, yearly: 9990 },
      description: 'Complete cloud infrastructure setup and management',
      features: ['AWS/Azure/GCP setup', 'Auto-scaling', 'Security hardening', 'Cost optimization', '24/7 monitoring'],
      popular: true
    },
    {
      name: 'Advanced Cybersecurity',
      price: { monthly: 1499, yearly: 14990 },
      description: 'Enterprise-grade security solutions',
      features: ['Penetration testing', 'Security audits', 'Compliance management', 'Incident response', 'Training programs'],
      popular: false
    },
    {
      name: 'Custom Software Development',
      price: { monthly: 2499, yearly: 24990 },
      description: 'Tailored software solutions for your business',
      features: ['Custom development', 'API integration', 'Database design', 'Testing & QA', 'Maintenance & support'],
      popular: false
    },
    {
      name: 'DevOps & CI/CD',
      price: { monthly: 799, yearly: 7990 },
      description: 'Automated deployment and infrastructure management',
      features: ['CI/CD pipelines', 'Container orchestration', 'Monitoring setup', 'Backup strategies', 'Disaster recovery'],
      popular: true
    }
  ];

  const microSaasServices = [
    {
      name: 'Zion Analytics Pro',
      price: { monthly: 99, yearly: 990 },
      description: 'Business intelligence platform',
      features: ['Advanced analytics', 'Custom dashboards', 'Data visualization', 'Export options', 'API access'],
      popular: true
    },
    {
      name: 'Zion Chat AI',
      price: { monthly: 49, yearly: 490 },
      description: 'AI-powered customer support',
      features: ['24/7 availability', 'Multi-language', 'Custom training', 'Integration options', 'Analytics'],
      popular: false
    },
    {
      name: 'Zion Security Shield',
      price: { monthly: 149, yearly: 1490 },
      description: 'Cybersecurity monitoring platform',
      features: ['Real-time monitoring', 'Threat detection', 'Incident alerts', 'Compliance reports', 'Security audits'],
      popular: false
    },
    {
      name: 'Zion Content Studio',
      price: { monthly: 79, yearly: 790 },
      description: 'AI content creation platform',
      features: ['Content generation', 'Templates library', 'Brand consistency', 'SEO optimization', 'Multi-format export'],
      popular: true
    },
    {
      name: 'Zion Supply Chain Optimizer',
      price: { monthly: 799, yearly: 7990 },
      description: 'AI-powered supply chain management',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Cost analysis'],
      popular: false
    },
    {
      name: 'Zion AI Energy Manager',
      price: { monthly: 199, yearly: 1990 },
      description: 'Smart energy optimization',
      features: ['Energy monitoring', 'Cost optimization', 'Carbon tracking', 'Predictive maintenance', 'Automated controls'],
      popular: false
    }
  ];

  const emergingTechServices = [
    {
      name: 'AI Holographic Workspace',
      price: { monthly: 599, yearly: 5990 },
      description: 'Immersive 3D workspace environment',
      features: ['3D displays', 'Gesture controls', 'Spatial computing', 'Virtual collaboration', 'AI assistant'],
      popular: true
    },
    {
      name: '5G Implementation',
      price: { monthly: 1999, yearly: 19990 },
      description: 'Next-generation connectivity solutions',
      features: ['5G network setup', 'Edge computing', 'IoT integration', 'Performance optimization', 'Security implementation'],
      popular: false
    },
    {
      name: 'Quantum Computing Solutions',
      price: { monthly: 4999, yearly: 49990 },
      description: 'Quantum computing applications',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research support', 'Custom development'],
      popular: false
    }
  ];

  const getPrice = (service: any) => {
    return billingCycle === 'monthly' ? service.price.monthly : service.price.yearly;
  };

  const getSavings = (service: any) => {
    const monthlyTotal = service.price.monthly * 12;
    const yearlyPrice = service.price.yearly;
    return Math.round(((monthlyTotal - yearlyPrice) / monthlyTotal) * 100);
  };

  return (
    <Layout
      title="Pricing - Zion Tech Group AI & IT Solutions"
      description="Transparent pricing for all our AI services, IT solutions, and micro SAAS products. Choose the plan that fits your business needs and budget."
      keywords="pricing, AI services pricing, IT services cost, micro SAAS pricing, enterprise solutions, business software pricing"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                <DollarSign className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Transparent Pricing</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Choose from our comprehensive range of AI services, IT solutions, and micro SAAS products. 
                All plans include our core features with no hidden fees.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <div className="bg-slate-800/50 rounded-lg p-1 flex">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                      billingCycle === 'yearly'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                      Save up to 20%
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 ${
                    service.popular 
                      ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">${getPrice(service)}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm mt-2">
                        Save {getSavings(service)}% with yearly billing
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IT Services</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology infrastructure and development solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {itServices.map((service, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    service.popular 
                      ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(service)}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm mt-2">
                        Save {getSavings(service)}% with yearly billing
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Micro SAAS</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use business tools with AI and automation capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 ${
                    service.popular 
                      ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white">${getPrice(service)}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm mt-2">
                        Save {getSavings(service)}% with yearly billing
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'border border-green-500 text-green-400 hover:bg-green-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Tech Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Emerging Technologies</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technology solutions for the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {emergingTechServices.map((service, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                    service.popular 
                      ? 'border-orange-500/50 shadow-lg shadow-orange-500/25' 
                      : 'border-gray-700/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">${getPrice(service)}</span>
                      <span className="text-gray-400 ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm mt-2">
                        Save {getSavings(service)}% with yearly billing
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                      : 'border border-orange-500 text-orange-400 hover:bg-orange-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our team to discuss custom solutions and enterprise pricing. We're here to help you choose the perfect plan for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                    Contact Sales
                  </button>
                  <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;