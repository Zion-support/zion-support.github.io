'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 299,
      yearlyPrice: 2999,
      features: [
        'Basic AI tools',
        'Email support',
        '5 user accounts',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 799,
      yearlyPrice: 7999,
      features: [
        'Advanced AI tools',
        'Priority support',
        '25 user accounts',
        'Advanced analytics',
        'Custom templates',
        'API access',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'All AI tools',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Custom analytics',
        'White-label options',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      price: 25,
      description: 'Add more team members to your plan'
    },
    {
      name: 'Premium Support',
      price: 199,
      description: 'Priority support with faster response times'
    },
    {
      name: 'Custom Integrations',
      price: 999,
      description: 'Custom integrations with your existing systems'
    },
    {
      name: 'Training Sessions',
      price: 299,
      description: 'One-on-one training for your team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that best fits your business needs with flexible options and no hidden fees." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, business solutions pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Simple, <span className="text-blue-600">Transparent</span> Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that works best for your business
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                No hidden fees, no surprises. Just straightforward pricing for powerful AI and IT solutions 
                that help your business grow.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-12">
                <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`mx-4 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="ml-2 bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                    plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Add-ons & Extras
                </h2>
                <p className="text-xl text-gray-600">
                  Customize your plan with additional services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{addon.name}</h3>
                      <span className="text-2xl font-bold text-blue-600">${addon.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <button className="w-full bg-gray-200 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                      Add to Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to know about our pricing
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Can I change my plan at any time?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                    and we'll prorate any billing differences.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Is there a free trial available?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial for all our plans. No credit card required to get started.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Do you offer custom pricing for large organizations?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer custom pricing and solutions for enterprise customers. Contact our sales team 
                    to discuss your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;