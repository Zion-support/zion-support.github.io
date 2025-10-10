'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Real-time Analytics',
        'API Integration',
        'Training & Documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Development',
        'Dedicated Support Team',
        'On-premise Deployment',
        'Advanced Security',
        '24/7 Monitoring',
        'Custom Integrations',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'AI Voice Assistant',
      price: '$299/month',
      description: 'Custom voice assistant for your business'
    },
    {
      name: 'Predictive Maintenance',
      price: '$599/month',
      description: 'AI-powered equipment monitoring'
    },
    {
      name: 'Supply Chain Optimization',
      price: '$899/month',
      description: 'Intelligent supply chain management'
    },
    {
      name: '5G Implementation',
      price: '$2,999/month',
      description: 'Ultra-fast 5G network deployment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Additional Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your solution with our specialized AI and IT services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{addon.price}</div>
                  <button className="w-full py-2 px-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to discuss your specific needs and get a custom quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Get Custom Quote
                </button>
                <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;