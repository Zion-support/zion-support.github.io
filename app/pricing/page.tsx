'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail, Zap, Shield, Brain } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 AI models',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        'Monthly reports'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI consultation',
        'Up to 25 AI models',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Weekly reports',
        'Custom AI training',
        'API access'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large organizations with complex AI requirements',
      features: [
        'Dedicated AI consultant',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Custom integrations',
        'Enterprise analytics',
        'Real-time reports',
        'Custom AI development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const microSaasPlans = [
    {
      name: 'AI Project Manager',
      price: '$79',
      period: '/month',
      description: 'AI-powered project management solution',
      features: [
        'Up to 25 team members',
        'AI task prioritization',
        'Predictive analytics',
        'Automated workflows',
        'Team collaboration',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'AI Social Media Manager',
      price: '$149',
      period: '/month',
      description: 'AI-powered social media management',
      features: [
        'Up to 10 social accounts',
        'AI content generation',
        'Smart scheduling',
        'Analytics dashboard',
        'Team collaboration',
        'White-label options'
      ],
      popular: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'AI Email Marketing',
      price: '$99',
      period: '/month',
      description: 'AI-powered email marketing automation',
      features: [
        'Up to 25,000 subscribers',
        'AI content generation',
        'Smart segmentation',
        'Automated workflows',
        'A/B testing',
        'Advanced analytics'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Voice Assistant Platform',
      price: '$299',
      period: '/month',
      description: 'AI-powered voice assistant for customer service',
      features: ['Natural language processing', 'Multi-language support', '24/7 availability']
    },
    {
      name: 'AI Cloud Infrastructure',
      price: '$599',
      period: '/month',
      description: 'AI-optimized cloud infrastructure management',
      features: ['Auto-scaling', 'Cost optimization', 'Performance monitoring']
    },
    {
      name: 'AI Predictive Maintenance',
      price: '$199',
      period: '/month',
      description: 'AI-powered equipment maintenance prediction',
      features: ['Predictive analytics', 'Equipment monitoring', 'Maintenance scheduling']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs. Flexible options for startups to enterprises." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, enterprise AI, micro SaaS pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI and IT services with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI & IT Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to scale with your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-500/40 scale-105 shadow-2xl shadow-cyan-500/25' 
                  : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Specialized AI-powered tools for specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-pink-500/40 scale-105 shadow-2xl shadow-pink-500/25' 
                  : 'border-pink-500/20 hover:border-pink-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Enhance your solution with our specialized AI services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-cyan-400">{addon.price}</span>
                  <span className="text-gray-300 ml-2">{addon.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">
                Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us to discuss your needs.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes 24/7 dedicated support.
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Choose your plan and start transforming your business with AI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;