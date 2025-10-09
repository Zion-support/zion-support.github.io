import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIInvoiceGeneratorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Automated invoice creation, payment tracking, and financial reporting with AI-powered insights." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            AI Invoice Generator
          </h1>
          <p className="text-xl text-cyan-400 mb-8">
            Automated invoicing and payment tracking
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Streamline your billing process with AI-powered invoice generation, 
            automated payment tracking, and financial insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Auto Invoice Creation</h3>
            <p className="text-gray-300 mb-4">
              Generate professional invoices automatically based on your work and time tracking.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $49/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Payment Tracking</h3>
            <p className="text-gray-300 mb-4">
              Track payments, send reminders, and manage overdue accounts automatically.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $39/month</div>
          </div>

          <div className="cyber-card p-6 energy-pulse">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">Financial Analytics</h3>
            <p className="text-gray-300 mb-4">
              Get insights into your revenue, cash flow, and financial performance with AI analytics.
            </p>
            <div className="text-cyan-400 font-bold">Starting at $69/month</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="cyber-button energy-pulse hover:scale-105 transition-all duration-300"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIInvoiceGeneratorPage;