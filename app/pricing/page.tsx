'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 AI Chatbots',
        'Standard Templates',
        'Mobile App Access'
      ],
      ctaText: 'Start Free Trial',
      ctaLink: '/contact',
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Everything in Starter',
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Unlimited AI Chatbots',
        'Custom Integrations',
        'API Access',
        'Team Collaboration Tools',
        'Advanced AI Models'
      ],
      ctaText: 'Start Free Trial',
      ctaLink: '/contact',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited AI Content Generation',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom AI Model Training',
        'White-label Solutions',
        'On-premise Deployment',
        'SLA Guarantee',
        'Custom Integrations'
      ],
      ctaText: 'Contact Sales',
      ctaLink: '/contact',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400 scale-105'
                      : 'bg-gray-800/50 border border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.ctaLink}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white hover:from-blue-500 hover:to-purple-500'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-6">
                Need a custom solution? We're here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;