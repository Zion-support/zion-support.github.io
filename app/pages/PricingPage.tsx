import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckIcon, 
  XMarkIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        'Basic AI Chatbot',
        'Email Support',
        'Up to 1,000 interactions/month',
        'Standard Analytics',
        'Basic Integration',
        'Mobile App Access'
      ],
      limitations: [
        'Limited Customization',
        'No Advanced Analytics',
        'No Priority Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 799,
      yearlyPrice: 7990,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Up to 10,000 interactions/month',
        'Advanced Analytics Dashboard',
        'Custom Integrations',
        'API Access',
        'Team Collaboration',
        'Custom Branding',
        'Advanced Security'
      ],
      limitations: [
        'No White-label Option',
        'Limited Custom Development'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 1999,
      yearlyPrice: 19990,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited Interactions',
        'Enterprise Analytics',
        'Custom Development',
        'White-label Solution',
        'Advanced Security & Compliance',
        'Dedicated Account Manager',
        'Custom Training',
        'SLA Guarantee'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Access to specialized AI models for specific use cases',
      price: 99
    },
    {
      name: 'Custom Development',
      description: 'Bespoke features and integrations tailored to your needs',
      price: 150
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support channels',
      price: 199
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and business intelligence features',
      price: 149
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs and budget." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core features with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="bg-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                      billingCycle === 'yearly'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
                  </button>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 ${
                      plan.popular
                        ? 'border-purple-500 scale-105'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-white">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-gray-400 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-white">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-start">
                            <XMarkIcon className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                          : 'border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Add-ons & Extensions</h2>
                <p className="text-gray-300">Enhance your plan with additional features and services</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">${addon.price}</span>
                      <button className="text-purple-400 hover:text-purple-300 font-medium">
                        Add to Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Is there a free trial available?</h3>
                  <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Do you offer custom pricing for large organizations?</h3>
                  <p className="text-gray-300">Yes, we offer custom pricing and enterprise solutions for organizations with specific requirements. Contact us to discuss your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
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