'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI solutions',
        'Email support',
        '5 API calls per month',
        'Standard security',
        'Basic analytics',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        '100 API calls per month',
        'Enhanced security',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
        '24/7 monitoring'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI solutions',
        'Dedicated support',
        'Unlimited API calls',
        'Enterprise security',
        'Custom analytics',
        'White-label options',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Support',
      description: '24/7 support and monitoring worldwide'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, enterprise pricing, subscription plans" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    {plan.cta}
                    <ArrowRight className="inline-block ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All our plans include these powerful features to help your business succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-purple-500 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for our Professional plan. No credit card required to get started.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-300">
                  Yes, our Enterprise plan includes custom solutions tailored to your specific business needs. Contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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