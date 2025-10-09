'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 999, yearly: 9999 },
      icon: Zap,
      color: 'cyan',
      features: [
        'AI Project Manager',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 Team Members',
        '10GB Storage',
        'Basic AI Content Generation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses that need advanced AI solutions',
      price: { monthly: 2999, yearly: 29999 },
      icon: Brain,
      color: 'purple',
      features: [
        'All Starter Features',
        'AI Social Media Manager',
        'Advanced Analytics',
        'Priority Support',
        '25 Team Members',
        '100GB Storage',
        'AI Customer Support Bot',
        'Custom AI Workflows',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete AI solution for large organizations',
      price: { monthly: 9999, yearly: 99999 },
      icon: Shield,
      color: 'green',
      features: [
        'All Professional Features',
        'Custom AI Development',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Unlimited Team Members',
        'Unlimited Storage',
        'White-label Solutions',
        'Advanced Security',
        'Custom Integrations',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const microSaasPricing = [
    {
      name: 'AI Project Manager',
      price: 99,
      description: 'Intelligent project planning and management',
      features: ['AI-powered planning', 'Task automation', 'Progress tracking', 'Team collaboration']
    },
    {
      name: 'AI Social Media Manager',
      price: 149,
      description: 'Automated social media management',
      features: ['Content generation', 'Auto-posting', 'Analytics', 'Multi-platform']
    },
    {
      name: 'AI Analytics Dashboard',
      price: 199,
      description: 'AI-powered business intelligence',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Data visualization']
    },
    {
      name: 'AI Customer Support Bot',
      price: 129,
      description: '24/7 AI customer support',
      features: ['24/7 support', 'NLP processing', 'Learning AI', 'Multi-language']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-500 to-blue-600',
      purple: 'from-purple-500 to-pink-600',
      green: 'from-green-500 to-emerald-600'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI services 
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">300% ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All plans include our core AI services with different levels of features and support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 rounded-2xl p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(plan.color)} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                      </span>
                      <span className="text-gray-400 text-lg">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Micro SAAS Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Individual AI tools that you can add to any plan or use standalone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasPricing.map((product, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 cyber-card hover:bg-slate-900/70 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">${product.price}/month</div>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full cyber-button py-2 px-4 text-sm">
                    Add to Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about our pricing and services.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-semibold text-white mb-4">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-semibold text-white mb-4">Do you offer custom solutions?</h3>
                <p className="text-gray-300">
                  Absolutely! Our Enterprise plan includes custom AI development, and we also offer 
                  completely custom solutions for unique business needs.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-semibold text-white mb-4">What's included in support?</h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support, 
                  and Enterprise includes 24/7 phone support and a dedicated account manager.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 cyber-card">
                <h3 className="text-xl font-semibold text-white mb-4">Is there a free trial?</h3>
                <p className="text-gray-300">
                  Yes! We offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Choose your plan and start transforming your business with AI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}