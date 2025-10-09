'use client';
import React, { useState } from 'react';
import { DollarSign, TrendingUp, PieChart, Receipt, Target, Zap, CheckCircle, Star, ArrowRight, Brain, Shield, Smartphone, CreditCard, BarChart3, Phone } from 'lucide-react';
import Link from 'next/link';

const ExpenseTracker: React.FC = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddExpense = async () => {
    setIsAdding(true);
    // Simulate adding expense
    setTimeout(() => {
      setIsAdding(false);
      setExpenseAmount('');
      setExpenseCategory('');
      alert('Expense added successfully!');
    }, 1000);
  };

  const features = [
    {
      icon: Receipt,
      title: "Smart Receipt Scanning",
      description: "AI-powered receipt scanning with automatic categorization"
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "Beautiful charts and graphs to understand your spending patterns"
    },
    {
      icon: Target,
      title: "Budget Management",
      description: "Set budgets and get alerts when you're approaching limits"
    },
    {
      icon: CreditCard,
      title: "Bank Integration",
      description: "Connect your bank accounts for automatic transaction import"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Track expenses on the go with our mobile application"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade security"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 9,
      period: "month",
      description: "Perfect for personal use",
      features: [
        "Unlimited expenses",
        "Basic categories",
        "Monthly reports",
        "Mobile app",
        "Email support",
        "1 bank account"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: 19,
      period: "month",
      description: "Ideal for professionals",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Custom categories",
        "Receipt scanning",
        "Priority support",
        "5 bank accounts",
        "Budget alerts",
        "Export to Excel"
      ],
      popular: true
    },
    {
      name: "Business",
      price: 49,
      period: "month",
      description: "For small businesses",
      features: [
        "Everything in Premium",
        "Team collaboration",
        "Multi-user access",
        "Advanced reporting",
        "API access",
        "Unlimited accounts",
        "Custom integrations",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  const sampleExpenses = [
    { category: 'Food & Dining', amount: 45.50, date: 'Today', color: 'text-red-400' },
    { category: 'Transportation', amount: 23.75, date: 'Yesterday', color: 'text-blue-400' },
    { category: 'Shopping', amount: 89.99, date: '2 days ago', color: 'text-purple-400' },
    { category: 'Entertainment', amount: 15.00, date: '3 days ago', color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              AI-Powered Expense Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Expense Tracker
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Take control of your finances with our intelligent expense tracker. 
              AI-powered categorization, smart budgeting, and beautiful analytics to help you save more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demo" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                <DollarSign className="w-5 h-5 mr-2" />
                Try Tracker
              </Link>
              <Link href="#pricing" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
                <Target className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Track Your Expenses</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Add Expense Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-xl font-semibold mb-6 text-orange-400">Add New Expense</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                  <input
                    type="number"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-orange-400 focus:outline-none"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={expenseCategory}
                    onChange={(e) => setExpenseCategory(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-orange-400 focus:outline-none"
                  >
                    <option value="">Select category</option>
                    <option value="food">Food & Dining</option>
                    <option value="transport">Transportation</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="utilities">Utilities</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                </div>
                <button 
                  onClick={handleAddExpense}
                  disabled={isAdding || !expenseAmount || !expenseCategory}
                  className="w-full cyber-button"
                >
                  {isAdding ? 'Adding...' : 'Add Expense'}
                </button>
              </div>
            </div>

            {/* Recent Expenses */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-xl font-semibold mb-6 text-orange-400">Recent Expenses</h3>
              <div className="space-y-4">
                {sampleExpenses.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div>
                      <div className="font-medium text-white">{expense.category}</div>
                      <div className="text-sm text-gray-400">{expense.date}</div>
                    </div>
                    <div className={`font-bold ${expense.color}`}>
                      ${expense.amount}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Monthly Summary */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                <h4 className="font-semibold text-white mb-2">This Month</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Total Spent:</span>
                  <span className="text-orange-400 font-bold">$1,234.56</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Budget Remaining:</span>
                  <span className="text-green-400 font-bold">$765.44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Expense Management</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to track, analyze, and optimize your spending
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your financial tracking needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
              plan.popular 
                ? 'border-orange-400 shadow-2xl shadow-orange-500/20' 
                : 'border-gray-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'cyber-button'
                  : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-12 text-center border border-orange-500/20">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our expense tracker to manage their money better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              <DollarSign className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;