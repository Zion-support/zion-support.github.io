import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionsmartexpensetrackerPage() {
  const [expense, setExpense] = useState({
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const categories = [
    'Meals & Entertainment',
    'Travel',
    'Office Supplies',
    'Software & Subscriptions',
    'Marketing',
    'Professional Services',
    'Utilities',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.amount && expense.category && expense.description) {
      const newExpense = {
        ...expense,
        id: Date.now(),
        amount: parseFloat(expense.amount)
      };
      setExpenses([...expenses, newExpense]);
      setTotalExpenses(totalExpenses + newExpense.amount);
      setExpense({
        amount: '',
        category: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const features = [
    'Receipt OCR scanning and data extraction',
    'Automatic expense categorization using AI',
    'Real-time expense tracking and reporting',
    'Team collaboration and approval workflows',
    'Integration with accounting software',
    'Mobile app for on-the-go expense entry',
    'Custom expense policies and rules',
    'Detailed analytics and insights'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: ['100 receipts/month', 'Basic categorization', 'Email support', 'Standard reports'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: ['500 receipts/month', 'AI categorization', 'Priority support', 'Advanced analytics', 'Team management'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: ['Unlimited receipts', 'Custom integrations', 'Dedicated support', 'White-label solution', 'API access'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Intelligent expense management with OCR scanning, AI categorization, and automated reporting. Streamline your business expense tracking." />
        <meta name="keywords" content="expense tracker, receipt scanning, expense management, OCR, business expenses, financial tracking" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart Expense Tracker
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                Intelligent expense management with OCR scanning, AI categorization, and automated reporting. Streamline your business expense tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our Expense Tracker</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Add an expense to see how our smart categorization works.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={expense.amount}
                        onChange={(e) => setExpense({...expense, amount: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        value={expense.category}
                        onChange={(e) => setExpense({...expense, category: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select category</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      value={expense.description}
                      onChange={(e) => setExpense({...expense, description: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter expense description"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={expense.date}
                      onChange={(e) => setExpense({...expense, date: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Add Expense
                  </button>
                </form>

                {expenses.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Expenses</h3>
                    <div className="space-y-2">
                      {expenses.slice(-5).reverse().map((exp) => (
                        <div key={exp.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium">{exp.description}</span>
                            <span className="text-sm text-gray-500 ml-2">({exp.category})</span>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${exp.amount.toFixed(2)}</div>
                            <div className="text-sm text-gray-500">{exp.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total Expenses:</span>
                        <span className="text-2xl font-bold text-green-600">${totalExpenses.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Expense Management Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered expense tracker makes managing business expenses simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your expense tracking needs. All plans include our core features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-green-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Expense Management?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start tracking expenses smarter today. Contact us for a free consultation and demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
