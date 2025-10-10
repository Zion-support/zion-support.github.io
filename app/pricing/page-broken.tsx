'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Up to 5 AI models',
        'Email support',
        'Monthly reporting',
        'Basic analytics dashboard',
        'Standard security features'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Advanced AI consultation',
        'Up to 20 AI models',
        'Priority support',
        'Weekly reporting',
        'Advanced analytics dashboard',
        'Enhanced security features',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
        'Unlimited AI consultation',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Real-time reporting',
        'Custom analytics dashboard',
        'Enterprise security features',
        'Custom integrations',
        'Dedicated team',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, AI solutions, IT services, plans, cost, enterprise" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT solutions with no hidden fees.
          </p>
        </div>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'border-2 border-cyan-500' : 'border border-cyan-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
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

                <div className="text-center">
                  {plan.name === 'Enterprise' ? (
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Contact Sales</span>
                    </Link>
                  ) : (
                    <Link
                      to="/contact"
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                          : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan later?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all our plans. No credit card required to get started.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, our Enterprise plan includes fully customized solutions tailored to your specific business requirements.</p>
            </div>
          </div>
        </div>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default PricingPage;