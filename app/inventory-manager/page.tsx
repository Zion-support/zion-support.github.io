import React from 'react';
import { Helmet } from 'react-helmet-async';

const InventoryManagerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced inventory management system with AI-powered forecasting, automated reordering, and real-time tracking capabilities." />
        <meta name="keywords" content="inventory management, stock tracking, supply chain, forecasting, automation, warehouse" />
        <link rel="canonical" href="https://ziontechgroup.com/inventory-manager" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Inventory Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your inventory with AI-powered forecasting, automated reordering, and real-time tracking across all channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Forecasting</h3>
              <p className="text-gray-300 mb-6">Predict demand patterns and optimize stock levels with machine learning algorithms.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Demand forecasting</li>
                <li>• Seasonal analysis</li>
                <li>• Trend prediction</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Automated Reordering</h3>
              <p className="text-gray-300 mb-6">Set up automatic reorder points and streamline your procurement process.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Auto reorder points</li>
                <li>• Supplier integration</li>
                <li>• Purchase orders</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Tracking</h3>
              <p className="text-gray-300 mb-6">Monitor inventory levels across multiple locations with live updates and alerts.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Live inventory levels</li>
                <li>• Multi-location sync</li>
                <li>• Movement tracking</li>
                <li>• Alert system</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Streamline your inventory management with our AI-powered solution and reduce costs while improving efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagerPage;