'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasInventoryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Inventory - Zion Tech Group</title>
        <meta name="description" content="Inventory management micro SaaS solution. Track stock, optimize inventory levels, and automate reordering with AI-powered insights." />
        <meta name="keywords" content="micro SaaS inventory, inventory management, stock tracking, supply chain, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Inventory
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your inventory management with intelligent tracking, automated reordering, 
              and AI-powered demand forecasting that reduces costs and prevents stockouts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">Smart Inventory Tracking</h2>
              <p className="text-gray-300 mb-6">
                Monitor your inventory in real-time with barcode scanning, automated updates, 
                and intelligent alerts that keep you informed about stock levels.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time inventory tracking</li>
                <li>• Barcode and QR code scanning</li>
                <li>• Automated stock level alerts</li>
                <li>• Multi-location inventory management</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">AI Demand Forecasting</h2>
              <p className="text-gray-300 mb-6">
                Predict future demand with AI-powered forecasting that analyzes historical data, 
                seasonal trends, and market conditions to optimize your inventory levels.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered demand prediction</li>
                <li>• Automated reorder suggestions</li>
                <li>• Seasonal trend analysis</li>
                <li>• Cost optimization insights</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300">
              Optimize Your Inventory
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasInventoryPage;