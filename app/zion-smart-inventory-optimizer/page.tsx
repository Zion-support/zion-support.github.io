import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionSmartInventoryOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI-Powered Inventory Management | Zion Tech Group</title>
        <meta name="description" content="Optimize your inventory with Zion Smart Inventory Optimizer. AI-powered demand forecasting, automated reordering, and intelligent stock management for maximum efficiency." />
        <meta name="keywords" content="inventory optimization, AI inventory management, demand forecasting, stock optimization, inventory analytics, supply chain AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Zion Smart Inventory Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered inventory management solution that optimizes stock levels, predicts demand, and automates reordering for maximum efficiency and cost savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Demand Forecasting</h3>
              <p className="text-gray-300">
                Advanced AI algorithms predict future demand patterns with high accuracy to optimize inventory levels.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Automated Reordering</h3>
              <p className="text-gray-300">
                Intelligent reorder point calculations and automated purchase order generation to prevent stockouts.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">
                Minimize carrying costs while maintaining optimal service levels through smart inventory strategies.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Start Optimizing Your Inventory
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionSmartInventoryOptimizerPage;