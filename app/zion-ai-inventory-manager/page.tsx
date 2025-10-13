import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiInventoryManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory management solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Inventory Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Optimize your inventory with AI-powered demand forecasting, automated reordering, 
            and intelligent stock management.
          </p>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using Zion AI Inventory Manager to optimize their supply chain. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}