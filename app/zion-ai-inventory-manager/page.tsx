'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAIInventoryManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Inventory Manager | Zion Tech Group</title>
        <meta name="description" content="Professional AI Inventory Manager services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Inventory Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered inventory management solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Tracking</h3>
            <p className="text-gray-300 mb-4">
              Advanced inventory tracking and management capabilities.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Real-time monitoring</li>
              <li>• Automated alerts</li>
              <li>• Predictive analytics</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI Optimization</h3>
            <p className="text-gray-300 mb-4">
              Intelligent inventory optimization and demand forecasting.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Demand prediction</li>
              <li>• Stock optimization</li>
              <li>• Cost reduction</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Integration</h3>
            <p className="text-gray-300 mb-4">
              Seamless integration with your existing systems.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• ERP integration</li>
              <li>• API connectivity</li>
              <li>• Custom workflows</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our AI experts are ready to help you optimize your inventory management.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}