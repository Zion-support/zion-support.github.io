'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Star, ArrowRight, Zap, Shield, Users, CheckCircle, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, yearly: 9999 },
      features: [
        'Basic AI consultation',
        'Simple automation setup',
        'Email support',
        'Basic analytics dashboard',
        'Up to 5 users',
        'Monthly reports'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with complex needs',
      price: { monthly: 2999, yearly: 29999 },
      features: [
        'Advanced AI solutions',
        'Custom automation workflows',
        'Priority support',
        'Advanced analytics',
        'Up to 25 users',
        'Weekly reports',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      icon: Shield
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations',
      price: { monthly: 9999, yearly: 99999 },
      features: [
        'Full AI suite',
        'Custom AI model development',
        '24/7 dedicated support',
        'Real-time analytics',
        'Unlimited users',
        'Daily reports',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training'
      ],
      popular: false,
      icon: Users
    }
  ];

  const addOns = [
    {
      name: 'Additional Users',
      description: 'Add more team members to your plan',
      price: { monthly: 50, yearly: 500 },
      per: 'per user/month'
    },
    {
      name: 'Advanced Analytics',
      description: 'Enhanced reporting and insights',
      price: { monthly: 200, yearly: 2000 },
      per: 'per month'
    },
    {
      name: 'Custom Integrations',
      description: 'Connect with your existing tools',
      price: { monthly: 500, yearly: 5000 },
      per: 'per integration'
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support',
      price: { monthly: 300, yearly: 3000 },
      per: 'per month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, plans, AI services, IT services, subscription" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT services with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20'
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        ${plan.price[billingCycle].toLocaleString()}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Add-ons & Extensions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional features and services tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addOn.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{addOn.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${addOn.price[billingCycle].toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-1 text-sm">{addOn.per}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial available?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for all plans. No credit card required to get started.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team for more information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PricingPage;