import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Analytics Dashboard | Zion Tech Group',
  description: 'Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time visualization, predictive analytics, and automated reporting.',
  keywords: 'AI analytics, dashboard, data visualization, business intelligence, predictive analytics',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI-Powered Analytics Dashboard | Zion Tech Group',
    description: 'Transform your data into actionable insights with our AI-powered analytics dashboard.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Analytics Dashboard | Zion Tech Group',
    description: 'Transform your data into actionable insights with our AI-powered analytics dashboard.',
  },
};

export default function AIAnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI-Powered Analytics Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Real-time Data Visualization</h3>
                  <p className="text-gray-600">Interactive charts and graphs that update in real-time</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Predictive Analytics</h3>
                  <p className="text-gray-600">AI-powered forecasting and trend analysis</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Automated Reporting</h3>
                  <p className="text-gray-600">Generate comprehensive reports automatically</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Custom Dashboards</h3>
                  <p className="text-gray-600">Tailored dashboards for your specific needs</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Decisions</h3>
                <p className="text-gray-600">Make informed decisions based on comprehensive data analysis</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Savings</h3>
                <p className="text-gray-600">Automate data processing and report generation</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solution</h3>
                <p className="text-gray-600">Grows with your business and data requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}