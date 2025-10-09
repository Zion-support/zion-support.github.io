'use client';
import React from 'react';
import Link from 'next/link';
import { Check, Star, Zap, Shield, Clock, Users, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI automation tools',
        'Email support',
        'Up to 5 users',
        'Standard integrations',
        'Basic analytics',
        'Monthly reports'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact'
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Up to 25 users',
        'Custom integrations',
        'Advanced analytics',
        'Weekly reports',
        'Dedicated account manager',
        'Training sessions'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom AI development',
        '24/7 dedicated support',
        'Unlimited users',
        'Full customization',
        'Real-time analytics',
        'Daily reports',
        'Dedicated team',
        'On-site training',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }
  ];

  const addOns = [
    {
      name: 'AI Content Generation',
      price: '$500/month',
      description: 'Advanced AI-powered content creation tools'
    },
    {
      name: 'Custom Integrations',
      price: '$1,000/setup',
      description: 'Connect with your existing business systems'
    },
    {
      name: 'Priority Support',
      price: '$300/month',
      description: 'Faster response times and dedicated support'
    },
    {
      name: 'Training & Onboarding',
      price: '$2,000/session',
      description: 'Comprehensive training for your team'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core AI and IT services with no hidden fees.
          </p>
          <div className="flex items-center justify-center space-x-4 text-cyan-400">
            <Shield className="w-5 h-5" />
            <span>30-day money-back guarantee</span>
            <Clock className="w-5 h-5 ml-4" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-gray-700 hover:border-cyan-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      {plan.cta}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-cyan-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 inline ml-2" />
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
            <h2 className="text-4xl font-bold text-white mb-4">Add-on Services</h2>
            <p className="text-gray-300 text-xl">Enhance your plan with additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{addon.price}</p>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-xl">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom billing for enterprise clients.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for Starter and Professional plans. Enterprise plans may include custom setup costs based on requirements.</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-300">Yes, we offer 10% discount for annual billing on all plans. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your specific needs and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </Link>
            <Link
              href="mailto:kleber@ziontechgroup.com"
              className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
