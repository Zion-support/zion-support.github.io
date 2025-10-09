'use client';
import React from 'react';
import { Receipt, TrendingUp, CheckCircle, Star, ArrowRight, Users, Clock, DollarSign, Shield, Sparkles, Smartphone, CreditCard, Target, BarChart } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ExpenseTracker: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered receipt scanning and automatic expense categorization',
      benefits: ['Instant data extraction', 'Automatic categorization', 'OCR technology']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Comprehensive spending insights and budget tracking with visual reports',
      benefits: ['Spending trends', 'Budget alerts', 'Custom reports']
    },
    {
      icon: CreditCard,
      title: 'Bank Integration',
      description: 'Connect all your bank accounts and credit cards for automatic transaction sync',
      benefits: ['Real-time sync', 'Multi-account support', 'Secure connections']
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set spending limits and get intelligent alerts to stay on track',
      benefits: ['Smart alerts', 'Category budgets', 'Goal tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: 9,
      period: 'month',
      description: 'Perfect for individual expense tracking',
      features: [
        'Up to 5 accounts',
        'Basic receipt scanning',
        'Standard reports',
        'Email support',
        'Mobile app access',
        '30-day free trial'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 29,
      period: 'month',
      description: 'Ideal for small businesses and teams',
      features: [
        'Up to 25 accounts',
        'Advanced receipt scanning',
        'Team collaboration',
        'Priority support',
        'Custom categories',
        'Advanced reports',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited accounts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'Full API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      role: 'Small Business Owner',
      company: 'Thompson Consulting',
      content: 'Expense Tracker saved me 10+ hours per month on bookkeeping. The receipt scanning is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Finance Manager',
      company: 'GrowthCorp',
      content: 'Our team expenses are now 100% tracked and categorized automatically. It\'s a game-changer for our business.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Freelancer',
      company: 'Independent',
      content: 'Finally, a expense tracker that actually works. The budget alerts help me stay on track with my spending.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Expense Tracker - AI-Powered Financial Management | Zion Tech Group"
        description="Track expenses effortlessly with AI-powered receipt scanning and automatic categorization. Budget management and financial insights. Starting at $9/month."
        keywords={['expense tracker', 'receipt scanning', 'budget management', 'financial tracking', 'expense categorization', 'money management']}
        canonicalUrl="https://ziontechgroup.com/expense-tracker"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Expense Management</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                Expense Tracker
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Take control of your finances with our AI-powered expense tracker. 
                Automatic receipt scanning, smart categorization, and intelligent budget management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">Hours Saved Per Month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
                <div className="text-gray-300">Receipt Scan Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
                <div className="text-gray-300">Receipts Processed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Smart Expense Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to track, categorize, and manage your expenses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Affordable Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your expense tracking needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Trusted by Thousands</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how Expense Tracker is helping people manage their finances better
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Control of Your Finances?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience effortless expense tracking
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a 
                  href="tel:+13024640950" 
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpenseTracker;