import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const SmartExpenseTrackerPage: React.FC = () => {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (expense.amount && expense.category && expense.description) {
      setExpenses([...expenses, { ...expense, id: Date.now() }]);
      setExpense({ amount: '', category: '', description: '', date: new Date().toISOString().split('T')[0] });
    }
  };

  const categories = [
    'Food & Dining',
    'Transportation',
    'Business',
    'Entertainment',
    'Healthcare',
    'Shopping',
    'Utilities',
    'Travel',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Zion Smart Expense Tracker - AI-Powered Financial Management</title>
        <meta name="description" content="Intelligent expense tracking with AI-powered categorization, receipt scanning, and financial insights. Streamline your business and personal finances." />
        <meta name="keywords" content="expense tracker, AI financial management, receipt scanning, budget tracking, expense categorization, financial analytics" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold neon-text mb-8 floating">
              Zion Smart Expense Tracker
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="neon-text-green">AI-powered</span> expense tracking with intelligent categorization and financial insights
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button glow-border pulse-neon">
                Start Free Trial
              </button>
              <button className="neon-button glow-border pulse-neon-slow" style={{background: 'linear-gradient(135deg, #00ff41 0%, #00f5ff 100%)', borderColor: '#00ff41'}}>
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="futuristic-card p-8 floating">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold neon-text-green mb-4">AI Receipt Scanning</h3>
              <p className="text-gray-300 mb-6">
                Automatically scan and process receipts with advanced OCR technology and AI-powered data extraction.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Mobile receipt capture</li>
                <li>• OCR text recognition</li>
                <li>• Automatic data extraction</li>
                <li>• Smart categorization</li>
                <li>• Cloud storage</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-delayed">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold neon-text-purple mb-4">Smart Categorization</h3>
              <p className="text-gray-300 mb-6">
                AI automatically categorizes your expenses and learns from your spending patterns for better accuracy.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Machine learning categorization</li>
                <li>• Custom category rules</li>
                <li>• Pattern recognition</li>
                <li>• Manual override options</li>
                <li>• Category analytics</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-slow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold neon-text-pink mb-4">Financial Analytics</h3>
              <p className="text-gray-300 mb-6">
                Get detailed insights into your spending habits with comprehensive reports and trend analysis.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Spending trend analysis</li>
                <li>• Budget vs actual reports</li>
                <li>• Category breakdowns</li>
                <li>• Monthly/yearly summaries</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
          </div>

          {/* Expense Tracker Tool */}
          <div className="futuristic-card p-12 mb-20">
            <h2 className="text-4xl font-bold neon-text mb-8 text-center">Track Your Expenses</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Amount</label>
                  <input 
                    type="number" 
                    value={expense.amount}
                    onChange={(e) => setExpense({...expense, amount: e.target.value})}
                    placeholder="Enter amount..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Category</label>
                  <select 
                    value={expense.category} 
                    onChange={(e) => setExpense({...expense, category: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  >
                    <option value="">Select category...</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Description</label>
                  <input 
                    type="text" 
                    value={expense.description}
                    onChange={(e) => setExpense({...expense, description: e.target.value})}
                    placeholder="Enter description..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Date</label>
                  <input 
                    type="date" 
                    value={expense.date}
                    onChange={(e) => setExpense({...expense, date: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <button 
                  onClick={handleAddExpense}
                  className="w-full neon-button glow-border pulse-neon"
                >
                  Add Expense
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold neon-text-purple mb-4">Recent Expenses</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {expenses.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No expenses added yet</p>
                  ) : (
                    expenses.map((exp, index) => (
                      <div key={exp.id || index} className="futuristic-card p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white font-medium">{exp.description}</p>
                            <p className="text-gray-400 text-sm">{exp.category}</p>
                            <p className="text-gray-500 text-xs">{exp.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-neon-green font-bold">${exp.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold neon-text-purple mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-green mb-4">Personal</h3>
                <div className="text-4xl font-bold neon-text-green mb-4">$19<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 100 receipts/month</li>
                  <li>• Basic categorization</li>
                  <li>• Monthly reports</li>
                  <li>• Mobile app access</li>
                  <li>• Email support</li>
                </ul>
                <button className="w-full neon-button">Get Started</button>
              </div>
              
              <div className="futuristic-card p-8 glow-border">
                <div className="text-center mb-4">
                  <span className="neon-text-pink font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Business</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$49<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 500 receipts/month</li>
                  <li>• AI categorization</li>
                  <li>• Advanced analytics</li>
                  <li>• Team collaboration</li>
                  <li>• Priority support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                  Get Started
                </button>
              </div>
              
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$99<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited receipts</li>
                  <li>• Custom AI models</li>
                  <li>• API integration</li>
                  <li>• White-label solution</li>
                  <li>• Dedicated support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #ff0080 0%, #ff6b00 100%)', borderColor: '#ff0080'}}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="futuristic-card p-12 text-center holographic">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Simplify Your Expense Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses and individuals using our AI-powered expense tracker to streamline their finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="neon-button glow-border pulse-neon">
                Start Free Trial
              </button>
              <div className="text-gray-300">
                <p className="font-semibold">Call: <span className="neon-text-green">+1 302 464 0950</span></p>
                <p className="font-semibold">Email: <span className="neon-text-purple">kleber@ziontechgroup.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartExpenseTrackerPage;