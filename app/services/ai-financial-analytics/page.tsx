import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Financial Analytics | Zion Tech Group',
  description: 'AI-powered financial analytics and forecasting solutions for better financial decision making.',
  keywords: 'AI financial analytics, financial forecasting, risk analysis, investment insights, financial modeling'
};

export default function AIFinancialAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Financial Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered financial analytics and forecasting solutions for better financial decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Assessment</h3>
            <p className="text-gray-600">
              Advanced risk modeling and assessment using AI to identify potential financial risks.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Forecasting</h3>
            <p className="text-gray-600">
              Accurate financial forecasting and trend analysis using machine learning algorithms.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Optimization</h3>
            <p className="text-gray-600">
              AI-driven portfolio optimization and investment strategy recommendations.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}