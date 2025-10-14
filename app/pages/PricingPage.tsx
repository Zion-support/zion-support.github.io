import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      price: { monthly: 2500, yearly: 25000 },
      icon: CpuChipIcon,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Basic AI Solutions',
        'IT Support (8x5)',
        'Cloud Infrastructure Setup',
        'Basic Security Monitoring',
        'Email Support',
        'Monthly Reports'
      ],
      limitations: [
        'Limited AI Models',
        'Basic Analytics',
        'Standard Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses that need comprehensive technology solutions',
      price: { monthly: 5000, yearly: 50000 },
      icon: ServerIcon,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Advanced AI Solutions',
        'IT Support (24x7)',
        'Full Cloud Management',
        'Advanced Security Suite',
        'Priority Support',
        'Weekly Reports',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      limitations: [
        'Limited Custom Development',
        'Standard SLA'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations with complex requirements',
      price: { monthly: 10000, yearly: 100000 },
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Custom AI Solutions',
        'Dedicated IT Team',
        'Multi-Cloud Architecture',
        'Enterprise Security',
        'Dedicated Support',
        'Real-time Monitoring',
        'Custom Development',
        'SLA Guarantee',
        'Training & Consulting',
        'Compliance Management'
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Access to premium AI models and algorithms',
      price: { monthly: 1000, yearly: 10000 }
    },
    {
      name: 'Extended Support',
      description: '24/7 phone and chat support with faster response times',
      price: { monthly: 500, yearly: 5000 }
    },
    {
      name: 'Custom Development',
      description: 'Bespoke software development and integrations',
      price: { monthly: 2000, yearly: 20000 }
    },
    {
      name: 'Training & Consulting',
      description: 'Team training and strategic consulting services',
      price: { monthly: 1500, yearly: 15000 }
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Yes, we offer custom pricing for enterprise clients with specific requirements. Contact us for a personalized quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'Setup fees vary by plan. Starter and Professional plans include basic setup, while Enterprise plans may have custom setup requirements.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all plans.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 17% discount for annual billing on all plans, which is already reflected in our yearly pricing.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our Starter, Professional, or Enterprise plans to fit your business needs." />
        <meta name="keywords" content="pricing, plans, AI pricing, IT services pricing, cloud pricing, enterprise pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our core AI and IT solutions 
                with no hidden fees or surprises.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                  <span className="ml-2 text-sm text-green-400">Save 17%</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                      plan.popular
                        ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20'
                        : 'border-slate-700 hover:border-purple-400'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-white">
                          ${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-2">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center text-gray-500">
                          <XMarkIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          {limitation}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                          : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Add-on Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your plan with additional services tailored to your specific needs
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addOns.map((addOn, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{addOn.name}</h3>
                        <p className="text-gray-300 text-sm">{addOn.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${addOn.price[billingCycle as keyof typeof addOn.price].toLocaleString()}
                        </div>
                        <div className="text-gray-400 text-sm">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </div>
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 border border-purple-400 text-purple-300 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                      Add to Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about our pricing and plans
                </p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg border border-slate-700">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose your plan and start transforming your business with our AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Contact Sales
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;