import React from 'react';
import { Helmet } from 'react-helmet-async';

const SmartInvoiceGeneratorProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Smart Invoice Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered invoice generation system with automated billing, payment tracking, and financial management for businesses." />
        <meta name="keywords" content="invoice generator, automated billing, payment tracking, financial management, business tools" />
        <link rel="canonical" href="https://ziontechgroup.com/smart-invoice-generator-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                Smart Invoice Generator <span className="text-emerald-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered invoice generation system with automated billing, payment tracking, and financial management for businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Automated Invoice Generation</h3>
                <p className="text-gray-300 mb-4">
                  Generate professional invoices automatically based on your business rules and customer data.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Template customization</li>
                  <li>• Automated calculations</li>
                  <li>• Tax handling</li>
                  <li>• Multi-currency support</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Payment Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Track payments, send reminders, and manage your accounts receivable efficiently.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Payment status tracking</li>
                  <li>• Automated reminders</li>
                  <li>• Payment analytics</li>
                  <li>• Integration with payment gateways</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Professional Templates</h4>
                  <p className="text-gray-300">Customizable invoice templates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Financial Analytics</h4>
                  <p className="text-gray-300">Comprehensive financial insights</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Automation</h4>
                  <p className="text-gray-300">Fully automated billing process</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with Smart Invoice Generator Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartInvoiceGeneratorProPage;