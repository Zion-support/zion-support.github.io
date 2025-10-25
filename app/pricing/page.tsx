'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Perfect for small businesses getting started with AI',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      popular: false,
      features: [
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        'Up to 5 users',
        'Basic Integration'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 5999, yearly: 59999 },
      description: 'Ideal for growing businesses with advanced needs',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      popular: true,
      features: [
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        'Enhanced Security',
        'Up to 25 users',
        'Advanced Integration',
        'Custom AI Models',
        'API Access'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 9999, yearly: 99999 },
      description: 'Complete solution for large organizations',
      icon: Shield,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      popular: false,
      features: [
        'Unlimited AI Content Generation',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited Users',
        'Full Integration Suite',
        'Custom AI Development',
        'White-label Solutions',
        'Dedicated Account Manager'
      ]
    }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.id === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: Target, value: '300%', label: 'Average ROI' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for optimal performance.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security to protect your data and operations.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions designed specifically for your business needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, and digital transformation. Choose the plan that fits your business needs."
        keywords={["pricing","AI services","IT consulting","business solutions","digital transformation"]}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI and IT services with no hidden fees.
            </p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="mb-12">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              <button
                onClick={() => setBillingPeriod('month')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'month'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('year')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'year'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${plan.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingPeriod])}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact our team to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;