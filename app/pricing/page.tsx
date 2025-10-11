'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Analytics',
        'Email Support',
        '5 User Accounts',
        'Basic Reporting',
        'Standard Security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Analytics',
        'Priority Support',
        '25 User Accounts',
        'Advanced Reporting',
        'Enhanced Security',
        'API Access',
        'Custom Integrations'
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
        '24/7 Dedicated Support',
        'Unlimited Users',
        'Custom Reporting',
        'Enterprise Security',
        'Full API Access',
        'Custom Development',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumb items={[{ label: 'Pricing' }]} />
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. 
              All plans include our core AI and IT solutions with flexible scaling options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Can I change plans anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial?</h3>
                <p className="text-gray-300">
                  We offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">What support is included?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Are there setup fees?</h3>
                <p className="text-gray-300">
                  No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;