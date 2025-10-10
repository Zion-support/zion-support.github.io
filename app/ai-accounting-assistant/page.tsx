'use client';
import React from 'react';
import { BarChart, Calculator, Shield, Settings, Users, Zap, Target, Clock } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Accounting Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Financial Management & Accounting
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered accounting platform that automates financial processes, 
            provides insights, and ensures compliance with accounting standards.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Financial Analytics</h3>
              <p className="text-gray-300">
                Comprehensive financial analytics with 
                insights, trends, and performance metrics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Calculator className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Bookkeeping</h3>
              <p className="text-gray-300">
                AI-powered bookkeeping with automatic 
                transaction categorization and reconciliation.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-gray-300">
                Ensure compliance with accounting standards 
                and tax regulations with automated checks.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Invoice Management</h3>
              <p className="text-gray-300">
                Automated invoice generation, processing, 
                and payment tracking with AI insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Expense Tracking</h3>
              <p className="text-gray-300">
                Intelligent expense tracking with 
                receipt scanning and categorization.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Reporting</h3>
              <p className="text-gray-300">
                Automated financial reporting with 
                customizable dashboards and insights.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-gray-300 mb-4">
                Save up to 15 hours per week with automated 
                accounting processes and AI assistance.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated bookkeeping</li>
                <li>• Smart categorization</li>
                <li>• Auto-reconciliation</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Accuracy</h3>
              <p className="text-gray-300 mb-4">
                Improve accuracy and reduce errors with 
                AI-powered validation and compliance checks.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Error detection</li>
                <li>• Compliance validation</li>
                <li>• Data accuracy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic accounting features</li>
                <li>Up to 1,000 transactions</li>
                <li>Standard reporting</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced accounting features</li>
                <li>Up to 10,000 transactions</li>
                <li>AI-powered insights</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full accounting suite</li>
                <li>Unlimited transactions</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Accounting?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free accounting assessment and see how we can improve your financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIAccountingAssistantPage;