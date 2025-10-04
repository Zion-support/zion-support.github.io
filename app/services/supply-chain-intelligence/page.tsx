import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Supply Chain Intelligence - Zion Tech Group',
  description: 'Advanced AI-powered supply chain optimization, demand forecasting, inventory management, and logistics intelligence solutions.',
  keywords: 'supply chain AI, logistics optimization, demand forecasting, inventory management, supply chain intelligence',
  robots: {
    index: true,
    follow: true,
  },
};

export default function SupplyChainIntelligence() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Supply Chain Intelligence</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your supply chain with AI-powered intelligence. Optimize demand forecasting, 
          inventory management, and logistics operations for maximum efficiency and cost savings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Demand Forecasting</h3>
          <p className="text-gray-600 mb-4">
            Predict demand patterns with 95% accuracy using advanced machine learning algorithms and external data sources.
          </p>
          <Link to="/case-studies/supply-chain-transformation-2026" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Inventory Optimization</h3>
          <p className="text-gray-600 mb-4">
            Optimize inventory levels across your entire supply network with real-time demand and supply balancing.
          </p>
          <Link to="/case-studies/ai-supply-chain-optimization-2026" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Route Optimization</h3>
          <p className="text-gray-600 mb-4">
            Minimize transportation costs and delivery times with AI-powered route planning and logistics optimization.
          </p>
          <Link to="/services/ai-autonomous-operations" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Management</h3>
          <p className="text-gray-600 mb-4">
            Identify and mitigate supply chain risks with predictive analytics and scenario planning.
          </p>
          <Link to="/services/ai-cybersecurity-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Vendor Management</h3>
          <p className="text-gray-600 mb-4">
            Optimize vendor relationships and supplier performance with AI-driven analytics and scoring.
          </p>
          <Link to="/services/ai-business-intelligence-2025" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
          <p className="text-gray-600 mb-4">
            Monitor supply chain performance in real-time with comprehensive dashboards and alerting systems.
          </p>
          <Link to="/services/ai-data-analytics" className="text-blue-600 hover:text-blue-800 font-medium">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Supply Chain Intelligence Platform</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Capabilities</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Multi-tier demand forecasting with external factors</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Dynamic inventory optimization across all channels</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>End-to-end supply chain visibility and tracking</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-semibold">✓</span>
                </span>
                <span>Automated exception management and resolution</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Machine learning-powered demand sensing</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>What-if scenario analysis and simulation</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Sustainability and carbon footprint tracking</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-blue-600 text-sm font-semibold">✓</span>
                </span>
                <span>Integration with ERP and WMS systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
            <p className="text-gray-600 text-sm">Analyze current supply chain processes and identify optimization opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
            <p className="text-gray-600 text-sm">Connect existing systems and establish data pipelines for real-time insights</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Training</h3>
            <p className="text-gray-600 text-sm">Train AI models on historical data and establish baseline performance metrics</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
            <p className="text-gray-600 text-sm">Continuously improve AI models and expand optimization capabilities</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Improvements</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Forecast Accuracy</span>
              <span className="text-green-600 font-semibold">+95%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Inventory Reduction</span>
              <span className="text-green-600 font-semibold">-30%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Transportation Costs</span>
              <span className="text-green-600 font-semibold">-25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Order Fulfillment Time</span>
              <span className="text-green-600 font-semibold">-40%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Supply Chain Visibility</span>
              <span className="text-green-600 font-semibold">+100%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Integration</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Sources</h3>
              <p className="text-gray-600 text-sm">ERP, WMS, TMS, IoT sensors, weather, economic indicators</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Technologies</h3>
              <p className="text-gray-600 text-sm">Machine Learning, Deep Learning, Time Series Analysis, NLP</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platform</h3>
              <p className="text-gray-600 text-sm">AWS, Azure, Google Cloud with edge computing capabilities</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Visualization</h3>
              <p className="text-gray-600 text-sm">Real-time dashboards, mobile apps, API integrations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Optimize Your Supply Chain?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join industry leaders who have transformed their supply chains with AI intelligence. 
          Get a personalized assessment of your supply chain optimization opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Supply Chain Assessment
          </Link>
          <Link to="/case-studies/supply-chain-transformation-2026" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Supply Chain Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}