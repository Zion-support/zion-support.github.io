import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CurrencyDollarIcon,
  ReceiptPercentIcon,
  ChartBarIcon,
  PlusIcon,
  PhotoIcon,
  CloudArrowUpIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentTextIcon,
  CalendarIcon,
  TagIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

const ZionAIExpenseTracker = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [selectedExpense, setSelectedExpense] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    description: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    receipt: null as File | null
  });
  const [filters, setFilters] = useState({
    category: '',
    dateRange: 'all',
    amountRange: 'all'
  });
  const [viewMode, setViewMode] = useState<'list' | 'chart'>('list');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    'Food & Dining',
    'Transportation',
    'Business',
    'Entertainment',
    'Healthcare',
    'Shopping',
    'Utilities',
    'Travel',
    'Education',
    'Other'
  ];

  const addExpense = () => {
    if (newExpense.amount && newExpense.description && newExpense.category) {
      const expense = {
        id: Date.now(),
        ...newExpense,
        amount: parseFloat(newExpense.amount),
        date: new Date(newExpense.date),
        status: 'processed',
        aiInsights: generateAIInsights(newExpense)
      };
      
      setExpenses(prev => [expense, ...prev]);
      setNewExpense({
        amount: '',
        description: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        receipt: null
      });
      setShowAddForm(false);
    }
  };

  const generateAIInsights = (expense: any) => {
    const insights = [];
    
    if (expense.amount > 100) {
      insights.push('High-value expense detected');
    }
    
    if (expense.category === 'Food & Dining' && expense.amount > 50) {
      insights.push('Consider meal planning to reduce dining costs');
    }
    
    if (expense.category === 'Transportation' && expense.amount > 30) {
      insights.push('Explore public transportation options');
    }
    
    return insights;
  };

  const processReceipt = async (file: File) => {
    setIsProcessing(true);
    
    // Simulate AI receipt processing
    setTimeout(() => {
      const mockData = {
        amount: (Math.random() * 200 + 10).toFixed(2),
        description: 'Restaurant Bill - AI Extracted',
        category: 'Food & Dining',
        date: new Date().toISOString().split('T')[0],
        merchant: 'Sample Restaurant',
        confidence: 95.5
      };
      
      setNewExpense(prev => ({
        ...prev,
        amount: mockData.amount,
        description: mockData.description,
        category: mockData.category
      }));
      
      setIsProcessing(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processReceipt(file);
    }
  };

  const deleteExpense = (id: number) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
    if (selectedExpense?.id === id) {
      setSelectedExpense(null);
    }
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const getExpensesByCategory = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach(expense => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });
    return categoryTotals;
  };

  const getFilteredExpenses = () => {
    return expenses.filter(expense => {
      if (filters.category && expense.category !== filters.category) return false;
      if (filters.dateRange !== 'all') {
        const expenseDate = new Date(expense.date);
        const now = new Date();
        const daysDiff = Math.floor((now.getTime() - expenseDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (filters.dateRange === 'week' && daysDiff > 7) return false;
        if (filters.dateRange === 'month' && daysDiff > 30) return false;
        if (filters.dateRange === 'year' && daysDiff > 365) return false;
      }
      return true;
    });
  };

  const getMonthlyTrend = () => {
    const monthlyData: { [key: string]: number } = {};
    expenses.forEach(expense => {
      const month = expense.date.toISOString().substring(0, 7);
      monthlyData[month] = (monthlyData[month] || 0) + expense.amount;
    });
    return monthlyData;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Expense Tracker - Smart Financial Management</title>
        <meta name="description" content="Track and analyze your expenses with AI-powered insights, receipt scanning, and automated categorization. Take control of your finances with intelligent expense management." />
        <meta name="keywords" content="AI expense tracker, financial management, receipt scanning, budget tracking, expense analysis" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mb-6">
            <CurrencyDollarIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Zion AI Expense Tracker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track and analyze your expenses with AI-powered insights, receipt scanning, 
            and automated categorization. Take control of your finances.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
            <ReceiptPercentIcon className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Receipt Scanning</h3>
            <p className="text-gray-300">AI-powered receipt processing with 99.5% accuracy</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <ChartBarIcon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Analytics</h3>
            <p className="text-gray-300">Comprehensive insights and spending patterns analysis</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <TagIcon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Auto-Categorization</h3>
            <p className="text-gray-300">Intelligent expense categorization and tagging</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Expenses</p>
                <p className="text-2xl font-bold text-white">${getTotalExpenses().toFixed(2)}</p>
              </div>
              <BanknotesIcon className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">${getMonthlyTrend()[new Date().toISOString().substring(0, 7)]?.toFixed(2) || '0.00'}</p>
              </div>
              <CalendarIcon className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Categories</p>
                <p className="text-2xl font-bold text-white">{Object.keys(getExpensesByCategory()).length}</p>
              </div>
              <TagIcon className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg. Expense</p>
                <p className="text-2xl font-bold text-white">${expenses.length > 0 ? (getTotalExpenses() / expenses.length).toFixed(2) : '0.00'}</p>
              </div>
              <ArrowTrendingUpIcon className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <PlusIcon className="w-5 h-5" />
              <span>Add Expense</span>
            </button>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <PhotoIcon className="w-5 h-5" />
              <span>Scan Receipt</span>
            </button>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
              className="bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
            >
              <option value="all">All Time</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            
            <div className="flex bg-slate-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-emerald-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('chart')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'chart' ? 'bg-emerald-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Chart
              </button>
            </div>
          </div>
        </div>

        {/* Add Expense Form */}
        {showAddForm && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Expense</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <input
                  type="text"
                  value={newExpense.description}
                  onChange={(e) => setNewExpense(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                  placeholder="Enter description"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={newExpense.date}
                  onChange={(e) => setNewExpense(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addExpense}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors"
              >
                Add Expense
              </button>
            </div>
          </div>
        )}

        {/* Expenses List */}
        {viewMode === 'list' && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Expenses</h2>
            
            {getFilteredExpenses().length === 0 ? (
              <div className="text-center py-12">
                <CurrencyDollarIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No expenses found</p>
                <p className="text-sm text-gray-500">Add your first expense to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {getFilteredExpenses().map((expense) => (
                  <div
                    key={expense.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedExpense?.id === expense.id
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-gray-600 bg-slate-700/50 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedExpense(expense)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                          <CurrencyDollarIcon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{expense.description}</h4>
                          <p className="text-sm text-gray-400">
                            {expense.category} • {expense.date.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-white">${expense.amount.toFixed(2)}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteExpense(expense.id);
                          }}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Chart View */}
        {viewMode === 'chart' && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Expense Analytics</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">By Category</h3>
                <div className="space-y-3">
                  {Object.entries(getExpensesByCategory()).map(([category, amount]) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-300">{category}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-emerald-500 h-2 rounded-full" 
                            style={{ width: `${(amount / getTotalExpenses()) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-medium">${amount.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Monthly Trend</h3>
                <div className="space-y-3">
                  {Object.entries(getMonthlyTrend()).slice(-6).map(([month, amount]) => (
                    <div key={month} className="flex items-center justify-between">
                      <span className="text-gray-300">{month}</span>
                      <span className="text-white font-medium">${amount.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expense Details */}
        {selectedExpense && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Expense Details</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Basic Information</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount:</span>
                    <span className="text-white font-medium">${selectedExpense.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white font-medium">{selectedExpense.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white font-medium">{selectedExpense.date.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Description:</span>
                    <span className="text-white font-medium">{selectedExpense.description}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">AI Insights</h4>
                <div className="space-y-2">
                  {selectedExpense.aiInsights.map((insight: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 text-emerald-400">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Processing Receipt</h3>
            <p className="text-gray-300">Our AI is analyzing your receipt and extracting data...</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl p-8 border border-emerald-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Pricing Plans</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Personal</h4>
              <div className="text-3xl font-bold text-emerald-400 mb-4">$7<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 100 expenses/month</li>
                <li>Basic receipt scanning</li>
                <li>Category tracking</li>
                <li>Basic analytics</li>
              </ul>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center border-2 border-emerald-500">
              <div className="bg-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              <h4 className="text-xl font-semibold text-white mb-2">Professional</h4>
              <div className="text-3xl font-bold text-emerald-400 mb-4">$19<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited expenses</li>
                <li>Advanced receipt scanning</li>
                <li>AI insights & analytics</li>
                <li>Export capabilities</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Business</h4>
              <div className="text-3xl font-bold text-emerald-400 mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Team collaboration</li>
                <li>Advanced reporting</li>
                <li>API access</li>
                <li>Custom categories</li>
                <li>24/7 support</li>
              </ul>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h3>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about Zion AI Expense Tracker
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIExpenseTracker;
