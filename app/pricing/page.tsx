'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'Basic AI Solutions',
        'Email Support',
        '5 User Accounts',
        'Basic Analytics',
        'Standard Security'
      ],
      limitations: [
        'Limited AI Models',
        'No Phone Support',
        'Basic Customization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        '25 User Accounts',
        'Advanced Analytics',
        'Enhanced Security',
        'Custom Integrations',
        'Training Sessions'
      ],
      limitations: [
        'Limited Custom Development'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Unlimited User Accounts',
        'Custom Analytics',
        'Enterprise Security',
        'Full Customization',
        'Dedicated Account Manager',
        'On-site Training',
        'Custom Development'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Access to premium AI models and algorithms',
      price: 199
    },
    {
      name: 'Priority Support',
      description: '24/7 priority support with faster response times',
      price: 99
    },
    {
      name: 'Custom Development',
      description: 'Custom features and integrations for your business',
      price: 299
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Flexible pricing plans for Zion Tech Group's AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT solutions 
            with no hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li key={limitationIndex} className="flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-ons</h2>
            <p className="text-xl text-gray-600">
              Enhance your plan with additional features and services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addOn.name}</h3>
                <p className="text-gray-600 mb-4">{addOn.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${addOn.price}/month</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer custom pricing for large organizations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing and solutions for large enterprises. Contact our sales team for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your plan and start transforming your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;