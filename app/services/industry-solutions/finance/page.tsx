import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'AI-powered financial solutions and fintech services for modern businesses.',
};

export default function FinanceSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Finance Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered financial solutions and fintech services designed for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Financial Analytics</h3>
            <p className="text-gray-300 mb-4">
              Advanced analytics for financial data and insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Risk Assessment</li>
              <li>• Fraud Detection</li>
              <li>• Market Analysis</li>
              <li>• Investment Insights</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Payment Solutions</h3>
            <p className="text-gray-300 mb-4">
              Secure and efficient payment processing systems.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Payment Gateways</li>
              <li>• Mobile Payments</li>
              <li>• Cryptocurrency</li>
              <li>• Compliance</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Trading Platforms</h3>
            <p className="text-gray-300 mb-4">
              Advanced trading platforms and tools.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Algorithmic Trading</li>
              <li>• Real-time Data</li>
              <li>• Portfolio Management</li>
              <li>• Risk Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

