'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Calendar, 
  Filter,
  Search,
  Edit3,
  Trash2,
  Brain,
  Sparkles,
  Target,
  AlertCircle,
  CheckCircle,
  CreditCard,
  ShoppingCart,
  Car,
  Home,
  Utensils,
  Gamepad2,
  BookOpen,
  Heart,
  Briefcase
} from 'lucide-react';

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  type: 'income' | 'expense';
  aiInsights?: string[];
  recurring?: boolean;
  tags?: string[];
}

const categories = [
  { name: 'Food & Dining', icon: <Utensils className="w-5 h-5" />, color: 'text-orange-400' },
  { name: 'Transportation', icon: <Car className="w-5 h-5" />, color: 'text-blue-400' },
  { name: 'Housing', icon: <Home className="w-5 h-5" />, color: 'text-green-400' },
  { name: 'Entertainment', icon: <Gamepad2 className="w-5 h-5" />, color: 'text-purple-400' },
  { name: 'Education', icon: <BookOpen className="w-5 h-5" />, color: 'text-cyan-400' },
  { name: 'Healthcare', icon: <Heart className="w-5 h-5" />, color: 'text-red-400' },
  { name: 'Work', icon: <Briefcase className="w-5 h-5" />, color: 'text-yellow-400' },
  { name: 'Shopping', icon: <ShoppingCart className="w-5 h-5" />, color: 'text-pink-400' },
  { name: 'Other', icon: <DollarSign className="w-5 h-5" />, color: 'text-gray-400' }
];

export default function AIExpenseTrackerPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    category: 'Food & Dining',
    date: new Date().toISOString().split('T')[0],
    description: '',
    type: 'expense' as 'income' | 'expense',
    recurring: false,
    tags: ''
  });
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAIInsights, setShowAIInsights] = useState(false);

  // Load expenses from localStorage
  useEffect(() => {
    const savedExpenses = localStorage.getItem('ai-expense-tracker');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem('ai-expense-tracker', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (newExpense.title.trim() && newExpense.amount) {
      const expense: Expense = {
        id: Date.now().toString(),
        title: newExpense.title,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        date: newExpense.date,
        description: newExpense.description,
        type: newExpense.type,
        recurring: newExpense.recurring,
        tags: newExpense.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        aiInsights: generateAIInsights(newExpense.title, newExpense.amount, newExpense.category, newExpense.type)
      };
      setExpenses([...expenses, expense]);
      setNewExpense({
        title: '',
        amount: '',
        category: 'Food & Dining',
        date: new Date().toISOString().split('T')[0],
        description: '',
        type: 'expense',
        recurring: false,
        tags: ''
      });
    }
  };

  const generateAIInsights = (title: string, amount: string, category: string, type: string): string[] => {
    const insights = [];
    const amountNum = parseFloat(amount);
    
    // Spending pattern insights
    if (type === 'expense') {
      if (amountNum > 100) {
        insights.push('This is a high-value transaction. Consider if this aligns with your budget goals.');
      }
      
      if (category === 'Food & Dining' && amountNum > 50) {
        insights.push('Consider meal planning to reduce dining expenses.');
      }
      
      if (category === 'Entertainment' && amountNum > 30) {
        insights.push('Look for free or low-cost entertainment alternatives.');
      }
      
      if (title.toLowerCase().includes('subscription')) {
        insights.push('Review if this subscription is still needed. Consider annual billing for discounts.');
      }
    } else {
      if (amountNum > 1000) {
        insights.push('Great income! Consider investing or saving a portion.');
      }
    }
    
    // Budget recommendations
    const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
    const monthlyBudget = 3000; // Example budget
    
    if (totalExpenses + amountNum > monthlyBudget * 0.8) {
      insights.push('You\'re approaching 80% of your monthly budget. Consider reducing discretionary spending.');
    }
    
    return insights.slice(0, 3);
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesFilter = filter === 'all' || expense.type === filter;
    const matchesSearch = expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory;
    
    return matchesFilter && matchesSearch && matchesCategory;
  });

  // Calculate statistics
  const totalIncome = expenses.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
  const netIncome = totalIncome - totalExpenses;
  const monthlyBudget = 3000;
  const budgetUsed = (totalExpenses / monthlyBudget) * 100;

  // Category breakdown
  const categoryBreakdown = categories.map(cat => {
    const categoryExpenses = expenses.filter(e => e.category === cat.name && e.type === 'expense');
    const total = categoryExpenses.reduce((sum, e) => sum + e.amount, 0);
    return { ...cat, total, count: categoryExpenses.length };
  }).filter(cat => cat.total > 0);

  return (
    <>
      <Helmet>
        <title>AI Expense Tracker - Smart Financial Management | Zion Tech Group</title>
        <meta name="description" content="Take control of your finances with our AI-powered expense tracker. Smart insights, budget management, and financial analytics. Free to use." />
        <meta name="keywords" content="AI expense tracker, financial management, budget tracking, smart insights, personal finance, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">AI Expense Tracker</h1>
                <p className="text-xl text-gray-300">Smart financial management powered by AI</p>
              </div>
            </div>
          </div>

          {/* Financial Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-gray-300">Total Income</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">${totalIncome.toFixed(2)}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <TrendingDown className="w-6 h-6 text-red-400 mr-2" />
                  <span className="text-gray-300">Total Expenses</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">${totalExpenses.toFixed(2)}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-cyan-400 mr-2" />
                  <span className="text-gray-300">Net Income</span>
                </div>
              </div>
              <div className={`text-3xl font-bold ${netIncome >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${netIncome.toFixed(2)}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <PieChart className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-gray-300">Budget Used</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">{budgetUsed.toFixed(1)}%</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className={`h-2 rounded-full ${budgetUsed > 80 ? 'bg-red-400' : budgetUsed > 60 ? 'bg-yellow-400' : 'bg-green-400'}`}
                  style={{ width: `${Math.min(budgetUsed, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Add Expense Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Plus className="w-6 h-6 mr-3 text-green-400" />
              Add Transaction
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newExpense.title}
                  onChange={(e) => setNewExpense({...newExpense, title: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., Grocery shopping, Salary, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <select
                  value={newExpense.type}
                  onChange={(e) => setNewExpense({...newExpense, type: e.target.value as 'income' | 'expense'})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description (Optional)</label>
                <textarea
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Add details about this transaction..."
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newExpense.tags}
                  onChange={(e) => setNewExpense({...newExpense, tags: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., urgent, business, personal"
                />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={newExpense.recurring}
                    onChange={(e) => setNewExpense({...newExpense, recurring: e.target.checked})}
                    className="mr-2"
                  />
                  <label htmlFor="recurring" className="text-sm text-gray-300">Recurring transaction</label>
                </div>
              </div>
            </div>
            
            <button
              onClick={addExpense}
              className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Transaction
            </button>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'income', 'expense'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as any)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterType
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* AI Insights Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowAIInsights(!showAIInsights)}
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {showAIInsights ? 'Hide' : 'Show'} AI Insights
            </button>
          </div>

          {/* Category Breakdown */}
          {categoryBreakdown.length > 0 && (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <PieChart className="w-6 h-6 mr-2 text-purple-400" />
                Spending by Category
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryBreakdown.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center">
                      <div className={category.color}>{category.icon}</div>
                      <span className="text-white ml-3">{category.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">${category.total.toFixed(2)}</div>
                      <div className="text-gray-400 text-sm">{category.count} transactions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transactions List */}
          <div className="space-y-4">
            {filteredExpenses.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No transactions found</h3>
                <p className="text-gray-400">Add your first transaction to get started!</p>
              </div>
            ) : (
              filteredExpenses.map((expense) => (
                <div key={expense.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`p-3 rounded-lg ${expense.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        {expense.type === 'income' ? (
                          <TrendingUp className="w-6 h-6 text-green-400" />
                        ) : (
                          <TrendingDown className="w-6 h-6 text-red-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{expense.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                            expense.type === 'income' ? 'bg-green-400/20 text-green-400' : 'bg-red-400/20 text-red-400'
                          }`}>
                            {expense.type === 'income' ? 'Income' : 'Expense'}
                          </span>
                          <span className="px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs font-medium flex items-center">
                            {categories.find(cat => cat.name === expense.category)?.icon}
                            <span className="ml-1">{expense.category}</span>
                          </span>
                          {expense.recurring && (
                            <span className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs font-medium">
                              Recurring
                            </span>
                          )}
                        </div>
                        
                        <div className="text-2xl font-bold text-white mb-2">
                          {expense.type === 'income' ? '+' : '-'}${expense.amount.toFixed(2)}
                        </div>
                        
                        {expense.description && (
                          <p className="text-gray-300 mb-3">{expense.description}</p>
                        )}
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(expense.date).toLocaleDateString()}
                          </div>
                          {expense.tags && expense.tags.length > 0 && (
                            <div className="flex items-center">
                              <span className="mr-1">Tags:</span>
                              {expense.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs mr-1">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* AI Insights */}
                        {showAIInsights && expense.aiInsights && expense.aiInsights.length > 0 && (
                          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Brain className="w-4 h-4 text-purple-400 mr-2" />
                              <span className="text-sm font-medium text-purple-300">AI Insights</span>
                            </div>
                            <ul className="space-y-1">
                              {expense.aiInsights.map((insight, index) => (
                                <li key={index} className="text-sm text-purple-200 flex items-start">
                                  <Sparkles className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                                  {insight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-8 border border-green-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">AI Expense Tracker Pro</h2>
              <p className="text-xl text-gray-300 mb-8">Unlock advanced financial insights and unlimited tracking</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Free Plan</h3>
                  <div className="text-3xl font-bold text-green-400 mb-4">$0<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Up to 100 transactions</li>
                    <li>✓ Basic AI insights</li>
                    <li>✓ 9 categories</li>
                    <li>✓ Local storage</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Pro Plan</h3>
                  <div className="text-3xl font-bold text-white mb-4">$7.99<span className="text-lg text-white/70">/month</span></div>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ Unlimited transactions</li>
                    <li>✓ Advanced AI insights</li>
                    <li>✓ Custom categories</li>
                    <li>✓ Cloud sync</li>
                    <li>✓ Budget alerts</li>
                    <li>✓ Export reports</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">$19.99<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Everything in Pro</li>
                    <li>✓ Team collaboration</li>
                    <li>✓ API access</li>
                    <li>✓ Custom AI models</li>
                    <li>✓ Priority support</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 mr-4">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help with Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-8">Our financial experts are here to help you achieve your goals</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300"
              >
                Email Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}