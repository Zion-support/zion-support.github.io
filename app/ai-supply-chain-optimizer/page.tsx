import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered supply chain optimization for logistics, inventory management, and demand forecasting. Streamline your supply chain operations." />
        <meta name="keywords" content="AI supply chain optimizer, logistics AI, inventory management, demand forecasting, supply chain automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Supply Chain Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your supply chain operations with AI-powered logistics management. 
              Reduce costs, improve efficiency, and enhance visibility across your entire supply network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-4">Inventory Optimization</h3>
              <p className="text-gray-300">
                Optimize inventory levels and reduce carrying costs with AI-powered demand forecasting.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-white mb-4">Logistics Planning</h3>
              <p className="text-gray-300">
                Plan optimal routes, schedules, and transportation modes for maximum efficiency.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Demand Forecasting</h3>
              <p className="text-gray-300">
                Predict future demand with high accuracy using machine learning and historical data.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">
                Identify and mitigate supply chain risks with AI-powered risk assessment tools.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Tracking</h3>
              <p className="text-gray-300">
                Monitor shipments and inventory in real-time with comprehensive visibility tools.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">
                Reduce operational costs through intelligent optimization of resources and processes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Optimize Your Supply Chain?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
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

export default AISupplyChainOptimizerPage;