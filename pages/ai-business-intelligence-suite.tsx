import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIBusinessIntelligenceSuite: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Business Intelligence Suite - Zion Tech Group</title>
        <meta name="description" content="Transform data into actionable insights with AI-powered analytics" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Business Intelligence Suite</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform data into actionable insights with our advanced AI-powered business intelligence platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Advanced analytics that automatically processes and analyzes your business data.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Real-time data processing</li>
              <li>• Predictive analytics</li>
              <li>• Trend analysis</li>
              <li>• Performance metrics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Visualization</h3>
            <p className="text-gray-600 mb-4">
              Create interactive dashboards and visualizations that make data easy to understand.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Interactive dashboards</li>
              <li>• Custom charts</li>
              <li>• Real-time updates</li>
              <li>• Mobile responsive</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
            <p className="text-gray-600 mb-4">
              Get AI-powered recommendations and insights to drive business growth.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Automated insights</li>
              <li>• Recommendation engine</li>
              <li>• Anomaly detection</li>
              <li>• Growth opportunities</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl px-8 py-6 text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">$299</div>
          <div className="text-blue-200 text-lg mb-4">per month</div>
          <div className="text-gray-300 mb-6">21-day free trial</div>
          <a href="/contact" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl inline-block">
            Start Free Trial
          </a>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Transform Your Data</h2>
          <p className="text-lg text-gray-700 mb-6">
            Unlock the power of your data with our AI-powered business intelligence suite.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </a>
            <a href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIBusinessIntelligenceSuite;