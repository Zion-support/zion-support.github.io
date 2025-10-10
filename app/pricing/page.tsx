'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,500',
      period: '/month',
      features: [
        'Basic AI Integration',
        'Monthly Strategy Session',
        'Email Support',
        'Basic Analytics Dashboard',
        'Up to 5 Users',
        'Standard Security'
      ],
      popular: false,
      cta: 'Get Started',
      ctaLink: '/contact'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: '$5,000',
      period: '/month',
      features: [
        'Advanced AI Solutions',
        'Weekly Strategy Sessions',
        'Priority Support',
        'Advanced Analytics',
        'Up to 25 Users',
        'Enhanced Security',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      popular: true,
      cta: 'Get Started',
      ctaLink: '/contact'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: 'Custom',
      period: '',
      features: [
        'Full AI Suite',
        'Dedicated Account Manager',
        '24/7 Support',
        'Custom Analytics',
        'Unlimited Users',
        'Enterprise Security',
        'Custom Development',
        'White-label Solutions',
        'SLA Guarantee'
      ],
      popular: false,
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Models',
      description: 'Access to premium AI models and algorithms',
      price: '$500/month per model'
    },
    {
      name: 'Custom Development',
      description: 'Bespoke software solutions for your specific needs',
      price: '$150/hour'
    },
    {
      name: 'Priority Support',
      description: 'Faster response times and dedicated support',
      price: '$1,000/month'
    },
    {
      name: 'Training & Onboarding',
      description: 'Comprehensive training for your team',
      price: '$2,000/session'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs and budget." />
        <meta name="keywords" content="pricing, plans, AI solutions, IT services, cost, subscription" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for powerful AI and IT solutions. Choose the plan that fits your business needs.
            </p>
          </section>

          {/* Pricing Plans */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-gray-800/50 backdrop-blur-sm border rounded-lg p-8 relative ${
                    plan.popular
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.ctaLink}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Add-on Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{addon.price}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
                <p className="text-gray-300">We offer a 14-day free trial for our Starter and Professional plans. No credit card required to get started.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about our pricing? Our team is here to help you choose the right plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PricingPage;