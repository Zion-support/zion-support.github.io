import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Dashboard | Zion Tech Group',
  description: 'Comprehensive AI-powered analytics dashboard for data visualization and business intelligence.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
            <p className="text-gray-300 mb-4">
              Monitor your business metrics in real-time with intelligent dashboards.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Live Data Visualization</li>
              <li>• Custom Metrics</li>
              <li>• Alert Systems</li>
              <li>• Performance Tracking</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Predictive Analytics</h3>
            <p className="text-gray-300 mb-4">
              Leverage AI to predict future trends and make data-driven decisions.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Machine Learning Models</li>
              <li>• Trend Analysis</li>
              <li>• Forecasting</li>
              <li>• Risk Assessment</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Custom Reports</h3>
            <p className="text-gray-300 mb-4">
              Generate comprehensive reports tailored to your business needs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Automated Reports</li>
              <li>• Custom Dashboards</li>
              <li>• Data Export</li>
              <li>• Scheduled Delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
