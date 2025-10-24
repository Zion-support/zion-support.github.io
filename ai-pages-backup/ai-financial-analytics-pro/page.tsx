'use client';
import Link from 'next/link';
import { Brain, BarChart3, Shield, Target, Zap, Globe, DollarSign, Calculator, Activity, TrendingUp, Lock, Building2, Database, FileText, CreditCard, Wallet, ArrowRight, CheckCircle, Star, Sparkles, PieChart } from 'lucide-react';
export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />
      title: title,
  description: description,
  benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    }
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />
      title: title,
  description: description,
  benefits: ['Live data feeds', 'Instant alerts', 'Real-time KPIs', 'Dynamic reporting']
    }
    {
      icon: <Shield className="w-8 h-8 text-green-400" />
      title: title,
  description: description,
  benefits: ['256-bit encryption', 'SOC 2 compliance', 'GDPR ready', 'Audit trails']
    }
    {
      icon: <Target className="w-8 h-8 text-orange-400" />
      title: title,
  description: description,
  benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    }
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />
      title: title,
  description: description,
  benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    }
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />
      title: title,
  description: description,
  benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']};
  ];
  const analyticsTypes = [
    {
      category: category,
  icon: <DollarSign className="w-6 h-6 text-green-400" />
      items: [
        'Revenue forecasting'
        'Sales performance tracking'
        'Customer lifetime value'
        'Revenue optimization'
        'Market share analysis'
      ]
    }
    {
      category: category,
  icon: <Calculator className="w-6 h-6 text-blue-400" />
      items: [
        'Cost center analysis'
        'Budget variance tracking'
        'Expense categorization'
        'Spend optimization'
        'Vendor performance'
      ]
    }
    {
      category: category,
  icon: <Activity className="w-6 h-6 text-purple-400" />
      items: [
        'Cash flow forecasting'
        'Working capital analysis'
        'Liquidity management'
        'Payment optimization'
        'Credit risk assessment'
      ]
    }
    {
      category: category,
  icon: <TrendingUp className="w-6 h-6 text-yellow-400" />
      items: [
        'Portfolio performance'
        'Risk-return analysis'
        'Asset allocation'
        'Investment tracking'
        'ROI calculations'
      ]
    }
    {
      category: category,
  icon: <Lock className="w-6 h-6 text-red-400" />
      items: [
        'Regulatory compliance'
        'Audit trail management'
        'Financial controls'
        'Risk monitoring'
        'Documentation'
      ]
    }
    {
      category: category,
  icon: <Brain className="w-6 h-6 text-cyan-400" />
      items: [
        'Financial forecasting'
        'Scenario planning'
        'Risk modeling'
        'Market predictions'
        'Trend analysis'
      ]
    };
  ];
  const pricingPlans = [
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false,
  cta: 'Start Free Trial'
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: true,
  cta: 'Get Started'
    }
    {
      name: name,
  price: price,
  period: period,
  description: description,
  features: features,
  popular: false,
  cta: 'Contact Sales'
    };
  ];
  const testimonials = [
    {
      name: name,
  company: company,
  role: role,
  content: content,
  rating: 5,
  avatar: avatar,
  results: '35% faster financial reporting'
    }
    {
      name: name,
  company: company,
  role: role,
  content: content,
  rating: 5,
  avatar: avatar,
  results: '95% forecast accuracy'
    }
    {
      name: name,
  company: company,
  role: role,
  content: content,
  rating: 5,
  avatar: avatar,
  results: '20+ hours saved weekly'
    };
  ];
  const stats = [
    { number: '500+', label: 'Financial Institutions', icon: <Building2 className="w-6 h-6" /> }
    { number: '1M+', label: 'Transactions Analyzed', icon: <Database className="w-6 h-6" /> }
    { number: '99.9%', label: 'Data Accuracy', icon: <Shield className="w-6 h-6" /> }
    { number: '50%', label: 'Faster Reporting', icon: <Zap className="w-6 h-6" /> };
  ];
  const integrations = [
    { name: 'QuickBooks', icon: <Calculator className="w-6 h-6" />, category: 'Accounting' }
    { name: 'Xero', icon: <FileText className="w-6 h-6" />, category: 'Accounting' }
    { name: 'SAP', icon: <Database className="w-6 h-6" />, category: 'ERP' }
    { name: 'Oracle', icon: <Building2 className="w-6 h-6" />, category: 'ERP' }
    { name: 'Salesforce', icon: <TrendingUp className="w-6 h-6" />, category: 'CRM' }
    { name: 'HubSpot', icon: <Target className="w-6 h-6" />, category: 'CRM' }
    { name: 'Stripe', icon: <CreditCard className="w-6 h-6" />, category: 'Payments' }
    { name: 'PayPal', icon: <Wallet className="w-6 h-6" />, category: 'Payments' };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Financial Analytics{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your financial analysis with AI-powered insights, real-time analytics
            and predictive modeling. Make smarter financial decisions with advanced intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              View All AI Services
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            ✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </div>
        </div>
        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Features</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI Financial Analytics Pro leverages cutting-edge machine learning 
              to provide unprecedented insights into your financial data.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Analytics Types Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Analytics</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cover every aspect of your financial operations with our comprehensive analytics suite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{type.category}</h3>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        {/* Integrations Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial systems and tools for a unified analytics experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 text-center group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.category}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Flexible pricing plans designed to meet your financial analytics needs at any scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join hundreds of finance professionals who trust AI Financial Analytics Pro.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-cyan-400 text-sm font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-3">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="text-cyan-400 font-semibold text-sm">
                    Result: {testimonial.results}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Free Trial
                <Sparkles className="w-8 h-8" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <PieChart className="w-8 h-8" />
              </Link>
            </div>
            <div className="mt-8 text-white/80 text-sm">
              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
import React from 'react';

import { ArrowRight } from 'lucide-react';

export default function AiFinancialAnalyticsProPage() {
  return (
    <>
      <title>AiFinancialAnalyticsPro - Zion Tech Group</title>
        <meta name="description" content="Professional aifinancialanalyticspro services by Zion Tech Group." />
      
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">AiFinancialAnalyticsPro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional aifinancialanalyticspro services by Zion Tech Group.</p>
          
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