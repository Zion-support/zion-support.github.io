import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description: 'Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.',
  keywords: 'AI customer insights, customer analytics, behavior analysis, data insights',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Customer Insights | Zion Tech Group',
    description: 'Transform customer data into actionable insights with AI-powered analytics.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Insights | Zion Tech Group',
    description: 'Transform customer data into actionable insights with AI-powered analytics.',
  },
};

export default function AICustomerInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Customer Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform customer data into actionable insights with AI-powered analytics. Understand customer behavior, preferences, and trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavior Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyze customer behavior patterns and preferences using advanced AI.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Purchase patterns</li>
              <li>• Engagement metrics</li>
              <li>• Preference tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Predict customer actions and optimize your strategies accordingly.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Churn prediction</li>
              <li>• Lifetime value</li>
              <li>• Next best action</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Insights</h3>
            <p className="text-gray-600 mb-4">
              Get real-time customer insights to make immediate decisions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Live dashboards</li>
              <li>• Instant alerts</li>
              <li>• Dynamic reports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}