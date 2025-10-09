'use client';
import React from 'react';

import Link from 'next/link';

const ExpenseTrackerPage: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning that automatically extracts expense data, categorizes transactions, and creates detailed reports.',
      benefit: 'Save 8+ hours per month'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your spending patterns with interactive charts, budget tracking, and financial forecasting.',
      benefit: 'Reduce expenses by 25%'
    },
    {
      icon: Brain,
      title: 'AI Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns and preferences.',
      benefit: '99% accurate categorization'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up automated expense approval workflows, reimbursement processes, and compliance checks.',
      benefit: 'Process expenses 5x faster'
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Create and track budgets with AI-powered alerts and recommendations for better financial control.',
      benefit: 'Stay within budget 90% of the time'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with tax regulations and company policies with automated checks and audit trails.',
      benefit: '100% compliance guarantee'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited receipts',
        'Basic AI categorization',
        'Expense reports',
        'Mobile app access',
        'Email support',
        '1 year data retention'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10 users',
        'Advanced AI features',
        'Team collaboration',
        'Custom categories',
        'Priority support',
        'API access',
        'Advanced reporting',
        '2 years data retention'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        'Custom workflows',
        'Advanced integrations',
        'Dedicated support',
        'White-label options',
        'Unlimited data retention',
        'Custom compliance rules'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: '📊', description: 'Accounting software' },
    { name: 'Xero', icon: '💰', description: 'Cloud accounting' },
    { name: 'Sage', icon: '📈', description: 'Business management' },
    { name: 'Stripe', icon: '💳', description: 'Payment processing' },
    { name: 'PayPal', icon: '💸', description: 'Online payments' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      company: 'Small Business Owner',
      role: 'CEO',
      content: 'Expense Tracker saved me 10 hours per month on bookkeeping. The AI categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'Marketing Agency',
      role: 'Finance Manager',
      content: 'Our expense processing time dropped from 2 days to 2 hours. The automated workflows are game-changing.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The compliance features ensure we never miss a tax deduction. Our accountant loves the detailed reports.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <Receipt className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Expense Tracker
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Smart Financial Management
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your expense management with AI-powered receipt scanning, automated categorization, 
            and intelligent financial insights. Save time, reduce errors, and gain complete control 
            over your business finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
            <div className="text-white font-semibold mb-2">Hours Saved</div>
            <div className="text-gray-300 text-sm">Per month on expense management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
            <div className="text-white font-semibold mb-2">Accuracy</div>
            <div className="text-gray-300 text-sm">In AI categorization</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">25%</div>
            <div className="text-white font-semibold mb-2">Cost Reduction</div>
            <div className="text-gray-300 text-sm">Through better expense control</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">5x</div>
            <div className="text-white font-semibold mb-2">Faster Processing</div>
            <div className="text-gray-300 text-sm">With automated workflows</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful Expense Management Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Integrates with Your Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-300 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Your Expenses?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using AI Expense Tracker to streamline financial 
            management and gain better control over their spending.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ExpenseTrackerPage;