'use client';
import React from 'react';
import { Calculator, FileText, TrendingUp, Shield, Clock, CheckCircle, BarChart3, Receipt } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Accounting Assistant
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Intelligent accounting automation powered by AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Streamline your accounting processes with our AI-powered assistant. 
            Automate bookkeeping, expense tracking, and financial reporting while ensuring accuracy and compliance.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Calculator className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Bookkeeping</h3>
              <p className="text-gray-300">
                AI-powered transaction categorization, reconciliation, and journal entry generation.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Receipt className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Expense Management</h3>
              <p className="text-gray-300">
                Automated receipt processing, expense categorization, and approval workflows.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <FileText className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Financial Reporting</h3>
              <p className="text-gray-300">
                Automated generation of P&L statements, balance sheets, and cash flow reports.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Financial Analytics</h3>
              <p className="text-gray-300">
                AI-powered insights, trend analysis, and predictive financial modeling.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Tax Compliance</h3>
              <p className="text-gray-300">
                Automated tax calculations, form generation, and compliance monitoring.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <BarChart3 className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Dashboard & Insights</h3>
              <p className="text-gray-300">
                Real-time financial dashboards with customizable KPIs and alerts.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Accounting Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">For Small Businesses</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  90% reduction in manual data entry
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time financial insights
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Automated tax preparation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Cost-effective solution
                </li>
              </ul>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">For Accounting Firms</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Handle 3x more clients
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Improved accuracy and compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Automated client reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Scalable operations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">QuickBooks</div>
              <p className="text-gray-300 text-sm">Full integration</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Xero</div>
              <p className="text-gray-300 text-sm">Seamless sync</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Sage</div>
              <p className="text-gray-300 text-sm">Real-time updates</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">FreshBooks</div>
              <p className="text-gray-300 text-sm">Automated sync</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 1,000 transactions</li>
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard reporting</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center border-2 border-cyan-500">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Up to 10,000 transactions</li>
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
                <li>Tax preparation</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited transactions</li>
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>White-label options</li>
                <li>Custom compliance</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Automate Your Accounting?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using our AI accounting assistant to streamline their financial processes and improve accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Demo
            </a>
            <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIAccountingAssistantPage;