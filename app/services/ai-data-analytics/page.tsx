import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Data Analytics | Zion Tech Group',
  description: 'Advanced AI-powered data analytics solutions to extract insights and drive data-driven decisions.',
  keywords: 'AI data analytics, machine learning, business intelligence, data insights, predictive analytics'
};

export default function AIDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Data Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered data analytics solutions to extract insights and drive data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
            <p className="text-gray-600">
              Machine learning models to predict trends, customer behavior, and business outcomes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Processing</h3>
            <p className="text-gray-600">
              Process and analyze data in real-time for immediate insights and decision making.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Dashboards</h3>
            <p className="text-gray-600">
              Interactive dashboards and visualizations to make complex data easily understandable.
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