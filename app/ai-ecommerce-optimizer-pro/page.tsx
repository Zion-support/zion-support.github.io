'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users, Send, Target, Globe, DollarSign, Clock, Star, Activity, Lock, FileText, CreditCard, Database, Building2, Sparkles, PieChart } from 'lucide-react';

// Icon mapping for serialization
const iconMap = {
  Zap,
  BarChart3,
  Shield,
  Users,
  Target,
  Globe,
  DollarSign,
  Clock,
  Star,
  Activity,
  Lock,
  FileText,
  CreditCard,
  Database,
  Building2,
  Sparkles,
  PieChart,
  Send,
  CheckCircle,
  ArrowRight
};

const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: 'Zap',
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.'
    },
    {
      icon: 'BarChart3',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.'
    },
    {
      icon: 'Shield',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: 'Users',
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 1,000 products',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 10,000 products',
        'Advanced AI optimization',
        'Comprehensive analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Premium AI optimization',
        'Advanced analytics & reporting',
        '24/7 dedicated support',
        'Full API access',
        'Custom development',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Increase conversion rates by up to 40%',
    'Reduce cart abandonment by 35%',
    'Improve customer lifetime value by 50%',
    'Automate pricing optimization',
    'Enhance product recommendations',
    'Streamline inventory management'
  ];

  const stats = [
    { number: '500+', label: 'E-commerce Stores', icon: 'Building2' },
    { number: '40%', label: 'Average Conversion Increase', icon: 'Target' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: 'Shield' },
    { number: '24/7', label: 'Support Available', icon: 'Clock' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            AI E-commerce Optimizer Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your e-commerce business with AI-powered optimization, advanced analytics, 
            and intelligent automation that drives growth and maximizes revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.number}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your e-commerce performance and drive growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <IconComponent className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20'
                    : 'border-slate-700 hover:border-cyan-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose AI E-commerce Optimizer Pro?
              </h2>
              <p className="text-gray-300 mb-8">
                Our platform combines advanced AI technology with deep e-commerce expertise to deliver 
                measurable results that drive growth and maximize your online revenue.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sign Up</h4>
                    <p className="text-gray-300 text-sm">Create your account and connect your e-commerce platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Configure</h4>
                    <p className="text-gray-300 text-sm">Set up your optimization preferences and goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Optimize</h4>
                    <p className="text-gray-300 text-sm">Let AI optimize your store and watch your sales grow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your E-commerce?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful e-commerce businesses already using AI E-commerce Optimizer Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEcommerceOptimizerProPage;