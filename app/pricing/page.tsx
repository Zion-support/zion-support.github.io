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
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Training',
      price: '$500',
      description: 'Extra training sessions for your team'
    },
    {
      name: 'Priority Support',
      price: '$1,000',
      description: '24/7 priority support and faster response times'
    },
    {
      name: 'Custom Integrations',
      price: '$2,500',
      description: 'Custom integrations with your existing systems'
    },
    {
      name: 'Advanced Analytics',
      price: '$800',
      description: 'Enhanced analytics and reporting capabilities'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:border-cyan-400/50 ${
                  plan.popular 
                    ? 'border-cyan-400/50 scale-105' 
                    : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400/10 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Add-on Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">{addOn.price}</p>
                  <p className="text-gray-300 text-sm">{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Are there any setup fees?</h3>
                <p className="text-gray-300">No setup fees for any of our plans. You only pay the monthly subscription fee.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change plans anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">What's included in Enterprise pricing?</h3>
                <p className="text-gray-300">Enterprise pricing is custom based on your specific needs. Contact our sales team for a personalized quote.</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-300">Yes, we offer up to 20% discount for annual billing. Contact us for more details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-xl hover:bg-cyan-300 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;