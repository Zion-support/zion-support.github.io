'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Receipt, BarChart, Target, CheckCircle, Zap, Brain, Settings, Globe, Clock, Shield, TrendingUp, Star, DollarSign, PieChart, Activity, FileText, Database, Building2, CreditCard, Wallet, Lock, Sparkles, Smartphone, Camera, Upload } from 'lucide-react';

const AiExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-cyan-400" />
      title: title,
  description: description,
  benefits: ['Instant data extraction', 'Multi-language support', 'Automatic categorization', 'Duplicate detection']
    }
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />
      title: title,
  description: description,
  benefits: ['Smart categorization', 'Learning algorithms', 'Custom rules', 'Pattern recognition']
    }
    {
      icon: <BarChart className="w-8 h-8 text-green-400" />
      title: title,
  description: description,
  benefits: ['Spending trends', 'Budget alerts', 'Cost optimization', 'ROI analysis']
    }
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />
      title: title,
  description: description,
  benefits: ['Auto-approval rules', 'Policy compliance', 'Workflow automation', 'Exception handling']
    };
  ];

  const useCases = [
    {
      title: title,
  description: description,
  icon: <Globe className="w-6 h-6 text-blue-400" />
      benefits: ['Per diem tracking', 'Mileage logging', 'Receipt management', 'Policy compliance']
    }
    {
      title: title,
  description: description,
  icon: <Building2 className="w-6 h-6 text-green-400" />
      benefits: ['Team budgets', 'Approval workflows', 'Expense policies', 'Reporting']
    }
    {
      title: title,
  description: description,
  icon: <Target className="w-6 h-6 text-purple-400" />
      benefits: ['Project allocation', 'Cost tracking', 'Budget monitoring', 'Client billing']
    }
    {
      title: title,
  description: description,
  icon: <Wallet className="w-6 h-6 text-yellow-400" />
      benefits: ['Personal budgets', 'Spending insights', 'Goal tracking', 'Financial planning']
    };
  ];

  const pricing = [
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: true
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false
    };
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', icon: <Target className="w-6 h-6" /> }
    { number: '80%', label: 'Time Saved', icon: <Clock className="w-6 h-6" /> }
    { number: '50K+', label: 'Receipts Processed', icon: <Receipt className="w-6 h-6" /> }
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> };
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Expense <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tracker</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize expense management with AI-powered automation, smart categorization, and intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI expense tracker comes with everything you need to manage expenses efficiently and gain valuable insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Use Case
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Whether you&apos;re managing personal finances or corporate expenses, our AI expense tracker adapts to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your expense management needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                  : 'border-white/10 hover:border-cyan-400/50'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Expense Management?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and experience the power of AI-driven expense tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )};

export default AiExpenseTrackerPage
import { ArrowRight } from 'lucide-react';

export default function AiExpenseTrackerPage() {
  return (
    <>
      <title>AiExpenseTracker - Zion Tech Group</title>
        <meta name="description" content="Professional aiexpensetracker services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">AiExpenseTracker</h1>
          <p className="text-lg text-gray-300 mb-8">Professional aiexpensetracker services by Zion Tech Group.</p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
</>;
  )}
