import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, DollarSign, Receipt, BarChart, Zap, Users } from 'lucide-react';

const ExpenseTrackerPage: React.FC = () => {
  const trackerFeatures = [
    {
      title: 'AI Receipt Scanning',
      description: 'Automatically extract expense data from receipts using advanced OCR technology.',
      icon: '📷',
      benefits: [
        'Instant receipt scanning',
        'Automatic data extraction',
        'Smart categorization',
        'Duplicate detection'
      ]
    },
    {
      title: 'Smart Categorization',
      description: 'AI automatically categorizes expenses based on merchant, amount, and patterns.',
      icon: '🏷️',
      benefits: [
        'Automatic categorization',
        'Custom categories',
        'Learning algorithms',
        'Pattern recognition'
      ]
    },
    {
      title: 'Budget Management',
      description: 'Set budgets and get real-time alerts when approaching limits.',
      icon: '💰',
      benefits: [
        'Budget tracking',
        'Spending alerts',
        'Goal setting',
        'Progress monitoring'
      ]
    },
    {
      title: 'Expense Reporting',
      description: 'Generate comprehensive reports and analytics for better financial insights.',
      icon: '📊',
      benefits: [
        'Detailed reports',
        'Visual analytics',
        'Export capabilities',
        'Trend analysis'
      ]
    },
    {
      title: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with automatic conversion.',
      icon: '🌍',
      benefits: [
        '50+ currencies',
        'Real-time conversion',
        'Exchange rate updates',
        'Multi-currency reports'
      ]
    },
    {
      title: 'Team Collaboration',
      description: 'Share expenses and collaborate with team members on expense management.',
      icon: '👥',
      benefits: [
        'Team expense sharing',
        'Approval workflows',
        'Role-based access',
        'Collaborative reporting'
      ]
    }
  ];

  const expenseTypes = [
    {
      type: 'Business Expenses',
      description: 'Track and manage business-related expenses',
      price: '$0.10 per expense',
      features: ['Receipt scanning', 'Tax categorization', 'Reimbursement tracking', 'Compliance reporting']
    },
    {
      type: 'Personal Expenses',
      description: 'Personal finance tracking and budgeting',
      price: '$0.05 per expense',
      features: ['Personal budgets', 'Spending analysis', 'Goal tracking', 'Financial insights']
    },
    {
      type: 'Travel Expenses',
      description: 'Comprehensive travel expense management',
      price: '$0.15 per expense',
      features: ['Travel receipts', 'Mileage tracking', 'Per diem calculations', 'Travel reports']
    },
    {
      type: 'Project Expenses',
      description: 'Project-specific expense tracking and allocation',
      price: '$0.20 per expense',
      features: ['Project allocation', 'Cost tracking', 'Budget monitoring', 'Project reports']
    },
    {
      type: 'Subscription Tracking',
      description: 'Monitor and manage recurring subscriptions',
      price: '$0.08 per subscription',
      features: ['Subscription monitoring', 'Renewal alerts', 'Cost optimization', 'Usage tracking']
    },
    {
      type: 'Tax Preparation',
      description: 'Tax-ready expense reports and documentation',
      price: '$0.25 per expense',
      features: ['Tax categorization', 'Deduction tracking', 'Tax reports', 'Audit support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$15/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Up to 100 expenses/month',
        'Basic receipt scanning',
        'Simple budgeting',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$39/month',
      description: 'Advanced features for small businesses',
      features: [
        'Up to 1,000 expenses/month',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Up to 5 users',
        'API access',
        'Custom categories'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99/month',
      description: 'Complete expense management for large organizations',
      features: [
        'Unlimited expenses',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Intelligent expense tracking with AI-powered receipt scanning, smart categorization, and automated reporting. Manage your finances effortlessly." />
        <meta name="keywords" content="ai expense tracker, receipt scanning, expense management, budget tracking, financial analytics, expense reporting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Expense Tracker
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent expense tracking with AI-powered receipt scanning, smart categorization, and automated reporting. Manage your finances effortlessly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Currencies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Expense Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackerFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expense Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Expense Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expenseTypes.map((expense, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{expense.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{expense.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{expense.price}</div>
                </div>
                <ul className="space-y-2">
                  {expense.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Expense Tracker?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Receipt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Receipt Scanning</h3>
              <p className="text-gray-300">AI automatically extracts data from receipts with 99% accuracy, saving hours of manual entry.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automated Categorization</h3>
              <p className="text-gray-300">AI learns your spending patterns and automatically categorizes expenses for better organization.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Financial Insights</h3>
              <p className="text-gray-300">Get detailed analytics and insights to make better financial decisions and optimize spending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Expense Tracker Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Simplify Your Expense Management?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI handle the tedious work of expense tracking. Focus on what matters most while we manage your finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpenseTrackerPage;