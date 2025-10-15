import React from 'react';
import { Helmet } from 'react-helmet-async';

const ExpenseTrackerProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Expense Tracker Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced expense tracking solution with AI-powered categorization, receipt scanning, and comprehensive financial reporting." />
        <meta name="keywords" content="expense tracker, financial management, receipt scanning, budget tracking, expense reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/expense-tracker-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Expense Tracker Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your finances with AI-powered expense tracking, receipt scanning, and intelligent budget management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Receipt Scanning</h3>
              <p className="text-gray-300 mb-6">AI-powered receipt scanning with automatic data extraction and categorization.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• OCR technology</li>
                <li>• Auto-categorization</li>
                <li>• Data extraction</li>
                <li>• Cloud storage</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Budgeting</h3>
              <p className="text-gray-300 mb-6">Intelligent budget management with spending alerts and financial insights.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Budget categories</li>
                <li>• Spending alerts</li>
                <li>• Financial insights</li>
                <li>• Goal tracking</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Financial Reports</h3>
              <p className="text-gray-300 mb-6">Comprehensive financial reports and analytics for better decision making.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Monthly reports</li>
                <li>• Tax preparation</li>
                <li>• Export options</li>
                <li>• Visual analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Control of Your Finances?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start tracking your expenses smarter with our AI-powered expense management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackerProPage;