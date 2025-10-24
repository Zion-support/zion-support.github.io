import React from 'react';
import Link from 'next/link';
import { DollarSign, CheckCircle, ArrowRight, Users, BarChart, Zap, Target, Settings } from 'lucide-react';

const AIExpenseTrackerPage = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'AI Expense Categorization',
      description: 'Automatically categorize expenses using AI technology for accurate tracking.',
      benefits: ['Smart Categorization', 'Receipt Scanning', 'Automatic Entry', 'Error Detection'],
    },
    {
      icon: BarChart,
      title: 'Expense Analytics',
      description: 'Get detailed insights and analytics about your spending patterns.',
      benefits: ['Spending Trends', 'Category Analysis', 'Budget Tracking', 'Reports'],
    },
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Track expenses in real-time with instant notifications and updates.',
      benefits: ['Instant Updates', 'Mobile Sync', 'Cloud Backup', 'Offline Mode'],
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set and manage budgets with AI-powered recommendations.',
      benefits: ['Budget Alerts', 'Spending Limits', 'Goal Setting', 'Progress Tracking'],
    },
  ];

  const expenseTypes = [
    'Business Expenses',
    'Personal Expenses',
    'Travel Expenses',
    'Meal Expenses',
    'Office Supplies',
    'Utilities',
  ];

  const benefits = [
    'Save Time',
    'Accurate Tracking',
    'Better Budgeting',
    'Tax Preparation',
    'Expense Reports',
    'Mobile Access',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Expense Tracker</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Track and manage your expenses with AI-powered automation. Get insights, 
              save time, and make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Tracking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI technology that makes expense tracking effortless and accurate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expense Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track various types of expenses with intelligent categorization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expenseTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-900">{type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Expense Tracker?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your expense tracking with AI-powered automation and insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Track Your Expenses?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start using AI-powered expense tracking to better manage your finances.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Tracking
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIExpenseTrackerPage;