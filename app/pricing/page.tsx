'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Check, Star, Zap, Shield, Users, Building } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      features: [
        'Basic AI Services',
        'Email Support',
        'Standard Analytics',
        'Up to 1,000 API calls/month',
        'Basic Documentation',
        'Community Support'
      ],
      limitations: [
        'Limited to 2 users',
        'Basic reporting only',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      features: [
        'All AI Services',
        'Priority Support',
        'Advanced Analytics',
        'Up to 10,000 API calls/month',
        'Full Documentation',
        'Phone & Email Support',
        'Custom Integrations',
        'Advanced Reporting'
      ],
      limitations: [
        'Up to 10 users',
        'Business hours support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      icon: <Building className="w-8 h-8 text-purple-500" />,
      features: [
        'All AI & IT Services',
        '24/7 Dedicated Support',
        'Custom Analytics',
        'Unlimited API calls',
        'Custom Documentation',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Advanced Security',
        'SLA Guarantee',
        'On-site Training',
        'Custom Development'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional API Calls',
      price: '$0.10 per 1,000 calls',
      description: 'Extra API calls beyond your plan limit'
    },
    {
      name: 'Priority Support',
      price: '$299/month',
      description: '24/7 priority support with guaranteed response times'
    },
    {
      name: 'Custom Integrations',
      price: '$1,999 one-time',
      description: 'Custom integration development for your specific needs'
    },
    {
      name: 'Training & Onboarding',
      price: '$499/day',
      description: 'On-site training and team onboarding sessions'
    },
    {
      name: 'Dedicated Infrastructure',
      price: '$2,999/month',
      description: 'Dedicated cloud infrastructure for enhanced performance'
    },
    {
      name: 'Compliance & Security',
      price: '$1,499/month',
      description: 'Advanced security features and compliance monitoring'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT services.
            </p>
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center text-gray-500">
                        <span className="w-5 h-5 mr-3 flex-shrink-0">•</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Add-on Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{addon.price}</div>
                  <p className="text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                  <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my API limits?</h3>
                  <p className="text-gray-600">We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional API calls as needed.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing for large organizations?</h3>
                  <p className="text-gray-600">Yes, our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored quote.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
                  <p className="text-gray-600">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today or contact us for a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
