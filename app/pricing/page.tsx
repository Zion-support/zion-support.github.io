'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
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
        'Custom AI Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      price: '$500/month',
      description: 'Access to premium AI models and algorithms'
    },
    {
      name: 'Extended Support',
      price: '$1,000/month',
      description: '24/7 phone and chat support with dedicated account manager'
    },
    {
      name: 'Custom Integrations',
      price: '$2,000/month',
      description: 'Integration with your existing systems and workflows'
    },
    {
      name: 'Training & Consulting',
      price: '$1,500/day',
      description: 'On-site training and consulting services'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent <span>Pricing</span>
            </h1>
            <p>Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star>Most Popular
                      </Star>span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span>{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2>Add-on Services</h2>
              <p>Enhance your plan with additional services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addOn, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <h3>{addOn.name}</h3>
                  <p>{addOn.price}</p>
                  <p>{addOn.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3>Can I change my plan anytime?</h3>
                <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              <div>
                <h3>Is there a setup fee?</h3>
                <p>No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs based on requirements.</p>
              </div>
              <div>
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards, bank transfers, and can arrange custom billing for Enterprise customers.</p>
              </div>
              <div>
                <h3>Do you offer refunds?</h3>
                <p>We offer a 30-day money-back guarantee for all plans. Enterprise customers have custom terms based on their agreement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2>Ready to Get Started?</h2>
            <p>Choose your plan and start transforming your business with AI and IT solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Zap>Start Free Trial
              </Zap>button>
              <button>Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
