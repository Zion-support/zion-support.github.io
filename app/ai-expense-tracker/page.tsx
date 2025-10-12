import React, { useState } from 'react';
import { CheckCircle, ArrowRight, DollarSign, TrendingUp, PieChart, Calendar, Receipt, Camera, Upload, Filter, Download, Plus, Edit, Trash2, Target, AlertCircle, BarChart3, Smartphone, CreditCard, ShoppingCart, Car, Home, Utensils } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIExpenseTrackerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Grocery Shopping',
      amount: 85.50,
      category: 'Food',
      date: '2024-01-15',
      paymentMethod: 'Credit Card',
      receipt: 'receipt_001.jpg',
      tags: ['grocery', 'weekly']
    },
    {
      id: 2,
      description: 'Gas Station',
      amount: 45.20,
      category: 'Transportation',
      date: '2024-01-14',
      paymentMethod: 'Debit Card',
      receipt: null,
      tags: ['fuel', 'car']
    },
    {
      id: 3,
      description: 'Coffee Shop',
      amount: 12.75,
      category: 'Food',
      date: '2024-01-14',
      paymentMethod: 'Mobile Payment',
      receipt: null,
      tags: ['coffee', 'breakfast']
    }
  ]);

  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0],
    paymentMethod: 'Credit Card',
    tags: ''
  });

  const categories = [
    { name: 'Food', icon: <Utensils className="w-4 h-4" />, color: 'bg-red-500', amount: 98.25 },
    { name: 'Transportation', icon: <Car className="w-4 h-4" />, color: 'bg-blue-500', amount: 45.20 },
    { name: 'Shopping', icon: <ShoppingCart className="w-4 h-4" />, color: 'bg-green-500', amount: 0 },
    { name: 'Bills', icon: <Home className="w-4 h-4" />, color: 'bg-purple-500', amount: 0 },
    { name: 'Entertainment', icon: <Smartphone className="w-4 h-4" />, color: 'bg-yellow-500', amount: 0 }
  ];

  const features = [
    {
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: 'Receipt Scanning',
      description: 'AI-powered receipt scanning automatically extracts expense details from photos'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: 'Smart Categorization',
      description: 'AI automatically categorizes expenses and learns from your spending patterns'
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-500" />,
      title: 'Visual Analytics',
      description: 'Beautiful charts and insights to understand your spending habits'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: 'Budget Tracking',
      description: 'Set budgets and get alerts when you approach your limits'
    },
    {
      icon: <Calendar className="w-6 h-6 text-red-500" />,
      title: 'Expense Reports',
      description: 'Generate detailed reports for tax purposes or expense reimbursements'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-500" />,
      title: 'Mobile App',
      description: 'Track expenses on the go with our intuitive mobile application'
    }
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: ['Up to 50 expenses/month', 'Basic categorization', 'Simple reports', 'Mobile app'],
      popular: false
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      features: ['Unlimited expenses', 'AI categorization', 'Receipt scanning', 'Advanced analytics', 'Budget tracking'],
      popular: true
    },
    {
      name: 'Business',
      price: '$19',
      period: '/month',
      features: ['Everything in Pro', 'Team collaboration', 'Expense approval', 'Custom reports', 'API access'],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The receipt scanning feature is a game-changer. I can just take a photo and it handles everything else.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Small Business Owner',
      content: 'Finally found an expense tracker that actually works. The AI categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'Accountant',
      content: 'The reporting features make tax season so much easier. Highly recommended for professionals.',
      rating: 5
    }
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthlyBudget = 2000;
  const budgetUsed = (totalExpenses / monthlyBudget) * 100;

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const expense = {
      id: expenses.length + 1,
      description: newExpense.description,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      date: newExpense.date,
      paymentMethod: newExpense.paymentMethod,
      receipt: null,
      tags: newExpense.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    setExpenses([...expenses, expense]);
    setNewExpense({
      description: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
      paymentMethod: 'Credit Card',
      tags: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Track your expenses effortlessly with our AI-powered expense tracker. Receipt scanning, smart categorization, and detailed analytics." />
        <meta name="keywords" content="expense tracker, AI expense management, receipt scanning, budget tracking, financial management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Expense Tracker
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Track your expenses effortlessly with AI-powered receipt scanning, 
            smart categorization, and detailed analytics. Take control of your finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your expenses intelligently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Expense Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track and analyze your spending in real-time
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8">
              {['overview', 'expenses', 'analytics', 'budgets'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Total Expenses</p>
                        <p className="text-2xl font-bold text-white">${totalExpenses.toFixed(2)}</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">This Month</p>
                        <p className="text-2xl font-bold text-white">${totalExpenses.toFixed(2)}</p>
                      </div>
                      <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Budget Used</p>
                        <p className="text-2xl font-bold text-white">{budgetUsed.toFixed(1)}%</p>
                      </div>
                      <Target className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Categories</p>
                        <p className="text-2xl font-bold text-white">{categories.length}</p>
                      </div>
                      <PieChart className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                </div>

                {/* Budget Progress */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Monthly Budget Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Used: ${totalExpenses.toFixed(2)}</span>
                      <span className="text-gray-300">Budget: ${monthlyBudget}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(budgetUsed, 100)}%` }}
                      ></div>
                    </div>
                    {budgetUsed > 80 && (
                      <p className="text-yellow-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        You're approaching your budget limit
                      </p>
                    )}
                  </div>
                </div>

                {/* Recent Expenses */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Expenses</h3>
                  <div className="space-y-3">
                    {expenses.slice(0, 3).map((expense) => (
                      <div key={expense.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <Receipt className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">{expense.description}</p>
                            <p className="text-gray-400 text-sm">{expense.category} • {expense.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-semibold">${expense.amount.toFixed(2)}</p>
                          <p className="text-gray-400 text-sm">{expense.paymentMethod}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Expenses Tab */}
            {activeTab === 'expenses' && (
              <div className="space-y-6">
                {/* Add Expense Form */}
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Add New Expense</h3>
                  <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                      <input
                        type="text"
                        value={newExpense.description}
                        onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="What did you buy?"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                      <select
                        value={newExpense.category}
                        onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {categories.map((category) => (
                          <option key={category.name} value={category.name} className="bg-gray-800">
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                      <input
                        type="date"
                        value={newExpense.date}
                        onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                      <select
                        value={newExpense.paymentMethod}
                        onChange={(e) => setNewExpense({...newExpense, paymentMethod: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="Credit Card" className="bg-gray-800">Credit Card</option>
                        <option value="Debit Card" className="bg-gray-800">Debit Card</option>
                        <option value="Cash" className="bg-gray-800">Cash</option>
                        <option value="Mobile Payment" className="bg-gray-800">Mobile Payment</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Expense
                      </button>
                    </div>
                  </form>
                </div>

                {/* Expenses List */}
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">All Expenses</h3>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Filter className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {expenses.map((expense) => (
                      <div key={expense.id} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <Receipt className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">{expense.description}</p>
                            <p className="text-gray-400 text-sm">{expense.category} • {expense.paymentMethod} • {expense.date}</p>
                            {expense.tags.length > 0 && (
                              <div className="flex space-x-1 mt-1">
                                {expense.tags.map((tag, index) => (
                                  <span key={index} className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-white font-semibold">${expense.amount.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-white transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Breakdown */}
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Spending by Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                            <span className="text-gray-300">{category.name}</span>
                          </div>
                          <span className="text-white font-semibold">${category.amount.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Trend */}
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Monthly Trend</h3>
                    <div className="h-32 flex items-end space-x-2">
                      {[1200, 1500, 1800, 143.45].map((amount, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-purple-600 to-pink-600 rounded-t flex-1"
                          style={{ height: `${(amount / 2000) * 100}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start tracking your expenses with our affordable pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                    : 'border-2 border-white text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Take Control of Your Finances
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already saving money and making better financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIExpenseTrackerPage;