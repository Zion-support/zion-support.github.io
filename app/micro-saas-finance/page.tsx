'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasFinancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Finance - Zion Tech Group</title>
        <meta name="description" content="Financial management micro SaaS solution. Track expenses, manage budgets, and get AI-powered financial insights for your business." />
        <meta name="keywords" content="micro SaaS finance, financial management, expense tracking, budget management, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Finance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your finances with an intelligent financial management platform 
              that provides insights, automates processes, and helps you make better financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Expense Management</h2>
              <p className="text-gray-300 mb-6">
                Automatically track and categorize expenses with AI-powered receipt scanning, 
                smart categorization, and automated expense reporting.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered receipt scanning</li>
                <li>• Automated expense categorization</li>
                <li>• Smart budget alerts</li>
                <li>• Expense approval workflows</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Financial Analytics</h2>
              <p className="text-gray-300 mb-6">
                Get comprehensive financial insights with AI-powered analytics, 
                forecasting, and reporting that help you understand your financial health.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered financial forecasting</li>
                <li>• Cash flow analysis</li>
                <li>• Profit and loss insights</li>
                <li>• Custom financial reports</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
              Manage Your Finances
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasFinancePage;