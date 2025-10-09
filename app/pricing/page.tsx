'use client';
import React, { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Up to 5 users',
        'Basic AI services',
        'Email support',
        'Standard security',
        '5GB storage',
        'Basic analytics'
      ],
      popular: false,
      icon: Zap
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Up to 25 users',
        'Advanced AI services',
        'Priority support',
        'Enhanced security',
        '50GB storage',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: { monthly: 999, yearly: 9990 },
      features: [
        'Unlimited users',
        'Full AI suite',
        '24/7 dedicated support',
        'Enterprise security',
        'Unlimited storage',
        'Custom analytics',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      icon: Shield
    }
  ];

  const addOns = [
    {
      name: 'Additional Storage',
      price: { monthly: 10, yearly: 100 },
      description: 'Per 10GB per month'
    },
    {
      name: 'Premium Support',
      price: { monthly: 50, yearly: 500 },
      description: 'Priority support and faster response times'
    },
    {
      name: 'Custom Development',
      price: { monthly: 200, yearly: 2000 },
      description: 'Custom features and integrations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI services 
              with no hidden fees or surprise charges.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
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
              <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                Yearly
                <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Add-on Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addOn, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold mb-2">{addOn.name}</h3>
                <p className="text-gray-400 mb-4">{addOn.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">
                  ${billingCycle === 'monthly' ? addOn.price.monthly : addOn.price.yearly}
                  <span className="text-gray-400 text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about our pricing and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">
                Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Choose your plan and start transforming your business with AI today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;