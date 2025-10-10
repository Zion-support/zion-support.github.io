'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Users, Building } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  icon: React.ComponentType<any>;
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
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
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard SLA'
      ],
      popular: false,
      cta: 'Get Started',
      icon: Users
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
        'Up to 25 users',
        '99.9% SLA',
        'Dedicated Account Manager',
        'Custom Integrations'
      ],
      popular: true,
      cta: 'Start Free Trial',
      icon: Building
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI Suite',
        'White-label Solutions',
        '24/7 Premium Support',
        'Real-time Monitoring',
        'Custom Analytics',
        'Unlimited users',
        '99.99% SLA',
        'Dedicated Team',
        'On-premise Deployment',
        'Custom Training',
        'Compliance Support'
      ],
      popular: false,
      cta: 'Contact Sales',
      icon: Shield
    }
  ];

  const addOns = [
    {
      name: 'AI Model Training',
      price: '$5,000',
      description: 'Custom AI model training for your specific use case'
    },
    {
      name: 'Data Migration',
      price: '$3,000',
      description: 'Complete data migration and system integration'
    },
    {
      name: 'Training & Support',
      price: '$2,000',
      description: 'Comprehensive training for your team'
    },
    {
      name: 'Custom Development',
      price: '$150/hour',
      description: 'Additional custom development services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, enterprise software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No Setup Fees
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Cancel Anytime
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                30-Day Free Trial
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'
                      : 'border-slate-700 hover:border-slate-600'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300">
                Enhance your solution with these optional add-ons
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                  <p className="text-gray-400 text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 30-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What support is included?
                </h3>
                <p className="text-gray-400">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-400">
                  Yes, our Enterprise plan includes custom development and white-label solutions tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Start Free Trial
                <Zap className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;