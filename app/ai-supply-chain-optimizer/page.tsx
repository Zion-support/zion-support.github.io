import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Supply Chain Optimizer for logistics optimization, inventory management, and supply chain efficiency. Streamline your operations with AI." />
        <meta name="keywords" content="AI supply chain optimizer, logistics AI, inventory optimization, supply chain management, logistics automation, supply chain analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Supply Chain Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered supply chain optimization for logistics efficiency, inventory management, and operational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Logistics Optimization</h2>
                <p className="text-gray-300 mb-4">
                  AI-powered logistics optimization to reduce costs, improve delivery times, and enhance supply chain efficiency.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Route optimization</li>
                  <li>• Delivery scheduling</li>
                  <li>• Warehouse management</li>
                  <li>• Transportation planning</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Inventory Management</h2>
                <p className="text-gray-300 mb-4">
                  Intelligent inventory management with predictive analytics to optimize stock levels and reduce waste.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Demand forecasting</li>
                  <li>• Stock optimization</li>
                  <li>• Reorder automation</li>
                  <li>• Waste reduction</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Supply Chain Mapping</h3>
                  <p className="text-gray-300 text-sm">Complete supply chain visualization and analysis</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
                  <p className="text-gray-300 text-sm">AI-powered risk assessment and mitigation strategies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
                  <p className="text-gray-300 text-sm">Real-time performance monitoring and optimization</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Supply Chain Optimizer
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;