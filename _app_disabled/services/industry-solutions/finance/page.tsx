// import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'Professional finance solutions for your business needs.',
  keywords: 'finance, solutions, business, technology',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Finance Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional finance solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-4">Financial Planning</h3>
            <p className="text-gray-300">Comprehensive financial planning and analysis solutions.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300">Advanced financial analytics and reporting tools.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">Security</h3>
            <p className="text-gray-300">Secure financial data management and compliance.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our finance solutions can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
