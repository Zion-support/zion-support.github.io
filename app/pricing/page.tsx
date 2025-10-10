'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Analytics',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Real-time Monitoring',
        'Up to 25 Users',
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
        'Custom AI Development',
        'Dedicated Support Team',
        '24/7 Monitoring',
        'Unlimited Users',
        'Custom Integrations',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT solutions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-700/50 p-8 rounded-lg ${
                plan.popular ? 'ring-2 ring-cyan-500 bg-slate-700/70' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-700/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-300">
                We offer a 14-day free trial for our Professional plan. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                What support do you provide?
              </h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support and phone support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-300">
                Yes, our Enterprise plan includes custom development and tailored solutions for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;