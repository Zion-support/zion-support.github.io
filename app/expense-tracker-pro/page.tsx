import React from 'react';
import SEOHead from '../components/SEOHead';
// No icon imports needed for this component

const ExpenseTrackerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Expense Tracker Pro - Zion Tech Group"
        description="Advanced expense tracking with AI-powered categorization, receipt scanning, and financial insights."
        keywords="expense tracker, financial management, receipt scanning, AI categorization, expense analytics"
        canonicalUrl="https://ziontechgroup.com/expense-tracker-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Expense Tracker Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced expense tracking with AI-powered categorization, receipt scanning, and financial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Receipt Scanning</h3>
                    <p className="text-gray-400">Automatically extract data from receipts using OCR and AI technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Smart Categorization</h3>
                    <p className="text-gray-400">AI automatically categorizes expenses and learns from your patterns.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Budget Management</h3>
                    <p className="text-gray-400">Set budgets, track spending, and get alerts when approaching limits.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Financial Insights</h3>
                    <p className="text-gray-400">Get detailed reports and insights on your spending patterns and trends.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-emerald-400 mb-2">$79/mo</div>
                <div className="text-gray-400 line-through">$119/mo</div>
                <div className="text-sm text-emerald-400">Limited Time Offer</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Expenses</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Receipt Scanning</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Categorization</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Budget Tracking</span>
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Export & Reports</span>
                  <span className="text-emerald-400">✓</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackerProPage;