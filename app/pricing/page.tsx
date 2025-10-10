'use client';
import React from 'react';
import { Check, Star, Zap, Shield, Clock, Users, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

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
        'Basic analytics dashboard',
        'Monthly reports'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=starter'
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
        'Custom workflows'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact?plan=professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full AI suite access',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label solutions',
        'Custom development',
        'Real-time analytics',
        'Dedicated team',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=enterprise'
    }
  ];

  const addOns = [
    {
      name: 'AI Content Generation',
      price: '$500/month',
      description: 'Advanced AI-powered content creation tools'
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$300/month',
      description: 'Comprehensive business intelligence and reporting'
    },
    {
      name: 'AI Customer Support',
      price: '$400/month',
      description: 'Intelligent chatbot and support automation'
    },
    {
      name: 'AI Marketing Automation',
      price: '$600/month',
      description: 'Complete marketing campaign automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transparent <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core AI and IT services with flexible options to scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105' 
                  : 'border-gray-600 hover:border-cyan-400/50'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {plan.cta}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {plan.popular ? 'Get Started' : plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Additional <span className="text-cyan-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                <p className="text-cyan-400 font-bold text-xl mb-3">{addon.price}</p>
                <p className="text-gray-300 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Can I change plans anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times and dedicated account managers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom solutions?</h3>
              <p className="text-gray-300">Yes, our Enterprise plan includes custom development and white-label solutions tailored to your specific business requirements.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for our Starter and Professional plans. Contact us to get started with no commitment.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI and IT solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;