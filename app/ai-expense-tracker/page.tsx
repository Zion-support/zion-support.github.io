import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  BarChart3, 
  Calendar, 
  Tag, 
  CreditCard, 
  Wallet, 
  Target, 
  AlertCircle,
  CheckCircle,
  Brain,
  Zap,
  Filter,
  Download,
  Upload,
  Settings,
  Eye,
  Edit3,
  Trash2,
  Star
} from 'lucide-react';

interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  paymentMethod: string;
  tags: string[];
  isRecurring: boolean;
  recurringType?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  notes?: string;
}

interface Budget {
  category: string;
  limit: number;
  spent: number;
  color: string;
}

const AIExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    'food', 'transportation', 'entertainment', 'shopping', 'utilities', 
    'healthcare', 'education', 'travel', 'subscriptions', 'other'
  ];

  const paymentMethods = ['cash', 'credit card', 'debit card', 'bank transfer', 'digital wallet'];

  const [newExpense, setNewExpense] = useState({
    amount: '',
    description: '',
    category: 'food',
    date: new Date().toISOString().split('T')[0],
    paymentMethod: 'credit card',
    tags: [] as string[],
    isRecurring: false,
    recurringType: 'monthly' as const,
    notes: ''
  });

  // Sample data
  useEffect(() => {
    const sampleExpenses: Expense[] = [
      {
        id: '1',
        amount: 45.50,
        description: 'Grocery shopping',
        category: 'food',
        date: '2024-01-15',
        paymentMethod: 'credit card',
        tags: ['grocery', 'weekly'],
        isRecurring: true,
        recurringType: 'weekly',
        notes: 'Weekly grocery run'
      },
      {
        id: '2',
        amount: 12.99,
        description: 'Netflix subscription',
        category: 'subscriptions',
        date: '2024-01-01',
        paymentMethod: 'credit card',
        tags: ['streaming', 'entertainment'],
        isRecurring: true,
        recurringType: 'monthly'
      },
      {
        id: '3',
        amount: 85.00,
        description: 'Gas station',
        category: 'transportation',
        date: '2024-01-14',
        paymentMethod: 'debit card',
        tags: ['fuel', 'car'],
        isRecurring: false
      },
      {
        id: '4',
        amount: 25.00,
        description: 'Coffee shop',
        category: 'food',
        date: '2024-01-13',
        paymentMethod: 'digital wallet',
        tags: ['coffee', 'work'],
        isRecurring: false
      }
    ];

    const sampleBudgets: Budget[] = [
      { category: 'food', limit: 500, spent: 0, color: '#3b82f6' },
      { category: 'transportation', limit: 300, spent: 0, color: '#10b981' },
      { category: 'entertainment', limit: 200, spent: 0, color: '#f59e0b' },
      { category: 'subscriptions', limit: 100, spent: 0, color: '#ef4444' }
    ];

    setExpenses(sampleExpenses);
    setBudgets(sampleBudgets);
  }, []);

  const calculateTotals = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const thisMonth = expenses.filter(expense => {
      const expenseDate = new Date(expense.date);
      const now = new Date();
      return expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear();
    }).reduce((sum, expense) => sum + expense.amount, 0);
    
    return { total, thisMonth };
  };

  const getCategoryTotals = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach(expense => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });
    return categoryTotals;
  };

  const getTopCategories = () => {
    const categoryTotals = getCategoryTotals();
    return Object.entries(categoryTotals)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const addExpense = () => {
    if (!newExpense.amount || !newExpense.description) return;

    const expense: Expense = {
      id: Date.now().toString(),
      amount: parseFloat(newExpense.amount),
      description: newExpense.description,
      category: newExpense.category,
      date: newExpense.date,
      paymentMethod: newExpense.paymentMethod,
      tags: newExpense.tags,
      isRecurring: newExpense.isRecurring,
      recurringType: newExpense.recurringType,
      notes: newExpense.notes
    };

    setExpenses(prev => [...prev, expense]);
    setNewExpense({
      amount: '',
      description: '',
      category: 'food',
      date: new Date().toISOString().split('T')[0],
      paymentMethod: 'credit card',
      tags: [],
      isRecurring: false,
      recurringType: 'monthly',
      notes: ''
    });
    setShowAddForm(false);
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const generateAIInsights = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      const categoryTotals = getCategoryTotals();
      const topCategory = Object.entries(categoryTotals).sort(([,a], [,b]) => b - a)[0];
      const total = calculateTotals().total;
      
      const insights = [
        `Your top spending category is ${topCategory[0]} with $${topCategory[1].toFixed(2)}`,
        `You've spent $${total.toFixed(2)} total this period`,
        `Consider setting a budget for ${topCategory[0]} to control spending`,
        `You have ${expenses.filter(e => e.isRecurring).length} recurring expenses`,
        `Average expense amount: $${(total / expenses.length).toFixed(2)}`
      ];
      
      setAiInsights(insights);
      setIsAnalyzing(false);
    }, 2000);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(expenses, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'expenses.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const filteredExpenses = expenses.filter(expense => 
    filterCategory === 'all' || expense.category === filterCategory
  );

  const { total, thisMonth } = calculateTotals();
  const topCategories = getTopCategories();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold cyber-text mb-4">
              AI Expense Tracker
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Smart expense tracking with AI-powered insights and budget management
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="futuristic-card text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">${total.toFixed(2)}</div>
              <div className="text-gray-400">Total Spent</div>
            </div>
            <div className="futuristic-card text-center">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">${thisMonth.toFixed(2)}</div>
              <div className="text-gray-400">This Month</div>
            </div>
            <div className="futuristic-card text-center">
              <CreditCard className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{expenses.length}</div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div className="futuristic-card text-center">
              <Target className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {expenses.filter(e => e.isRecurring).length}
              </div>
              <div className="text-gray-400">Recurring</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        {/* Controls */}
        <div className="futuristic-card mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="all">All Time</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Expense
              </button>
              <button
                onClick={generateAIInsights}
                disabled={isAnalyzing}
                className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
              >
                <Brain className="w-4 h-4 mr-2" />
                {isAnalyzing ? 'Analyzing...' : 'AI Insights'}
              </button>
              <button
                onClick={exportData}
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        {aiInsights.length > 0 && (
          <div className="futuristic-card mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Spending Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800 rounded-lg">
                  <Zap className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add Expense Form */}
          {showAddForm && (
            <div className="lg:col-span-3 futuristic-card mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Expense</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      step="0.01"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense(prev => ({ ...prev, amount: e.target.value }))}
                      className="w-full pl-10 pr-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <input
                    type="text"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="What did you buy?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="capitalize">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                  <select
                    value={newExpense.paymentMethod}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, paymentMethod: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    {paymentMethods.map(method => (
                      <option key={method} value={method} className="capitalize">
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Recurring</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newExpense.isRecurring}
                        onChange={(e) => setNewExpense(prev => ({ ...prev, isRecurring: e.target.checked }))}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-300">Recurring</span>
                    </label>
                    {newExpense.isRecurring && (
                      <select
                        value={newExpense.recurringType}
                        onChange={(e) => setNewExpense(prev => ({ ...prev, recurringType: e.target.value as any }))}
                        className="px-2 py-1 bg-slate-800 border border-gray-600 rounded text-white text-sm"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    )}
                  </div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                  <textarea
                    value={newExpense.notes}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    rows={2}
                    placeholder="Additional notes..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addExpense}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
                >
                  Add Expense
                </button>
              </div>
            </div>
          )}

          {/* Top Categories */}
          <div className="futuristic-card">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-cyan-400" />
              Top Categories
            </h3>
            <div className="space-y-3">
              {topCategories.map(([category, amount], index) => (
                <div key={category} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-gray-300 capitalize">{category}</span>
                  </div>
                  <span className="text-white font-semibold">${amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Expenses */}
          <div className="lg:col-span-2 futuristic-card">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
              Recent Expenses
            </h3>
            <div className="space-y-3">
              {filteredExpenses.slice(0, 10).map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-white font-medium">{expense.description}</h4>
                      <span className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded-full capitalize">
                        {expense.category}
                      </span>
                      {expense.isRecurring && (
                        <span className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full">
                          Recurring
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {new Date(expense.date).toLocaleDateString()} • {expense.paymentMethod}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">${expense.amount.toFixed(2)}</span>
                    <button
                      onClick={() => deleteExpense(expense.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {filteredExpenses.length === 0 && (
          <div className="text-center py-12">
            <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No expenses found</h3>
            <p className="text-gray-500">Start tracking your expenses by adding your first transaction</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIExpenseTracker;