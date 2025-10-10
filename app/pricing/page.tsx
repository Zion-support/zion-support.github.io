'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions.',
      features: [
        'Basic AI Analytics',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Security Monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses that need comprehensive solutions.',
      features: [
        'Advanced AI Solutions',
        'Full Cloud Management',
        'Priority Support',
        'Weekly Reports',
        'Advanced Security Suite',
        'Custom Integrations',
        '24/7 Monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex needs.',
      features: [
        'Custom AI Development',
        'Multi-Cloud Strategy',
        'Dedicated Support Team',
        'Real-time Analytics',
        'Enterprise Security',
        'Custom Integrations',
        'SLA Guarantees',
        'On-site Support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing | Zion Tech Group</title>
        <meta name="description" content="Choose the perfect AI and IT solution plan for your business. Flexible pricing options with no hidden fees. Start your transformation today." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, business plans, enterprise solutions" />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or surprise charges.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                } hover:scale-105 transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                  at the beginning of your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Is there a setup fee?
                </h3>
                <p className="text-gray-300">
                  No setup fees for Starter and Professional plans. Enterprise plans may 
                  include setup costs depending on the complexity of your requirements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  What support do you provide?
                </h3>
                <p className="text-gray-300">
                  We provide email support for Starter plans, priority support for Professional 
                  plans, and dedicated support teams for Enterprise customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-300">
                  Yes, our Enterprise plan includes custom AI development and tailored solutions 
                  to meet your specific business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with Zion Tech Group today and see the difference 
              our AI and IT solutions can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;