'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Simple automation setup',
        'Email support',
        'Monthly reporting',
        'Up to 5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI solutions',
        'Custom development',
        'Priority support',
        'Weekly reporting',
        'Up to 25 users',
        'API access',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Fully customized AI solutions',
        'Dedicated team',
        '24/7 support',
        'Real-time monitoring',
        'Unlimited users',
        'White-label options',
        'On-site training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions from Zion Tech Group." />
      </Helmet>
      
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
                Simple, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transparent</span> Pricing
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Choose the plan that fits your business needs. All plans include our core AI and IT services.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-500/50 scale-105 shadow-2xl shadow-cyan-500/25'
                      : 'border-white/10 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
                  <p className="text-gray-300">Yes, our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss which plan is right for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricingPage;