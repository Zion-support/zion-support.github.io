import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered supply chain optimization for inventory management, demand forecasting, logistics optimization, and supply chain analytics. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, inventory management, demand forecasting, logistics AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Supply Chain Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your supply chain with AI-powered demand forecasting, 
              inventory management, and logistics optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Supply Chain Management
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Supply Chain Optimizer uses machine learning to analyze 
                demand patterns, optimize inventory levels, and streamline logistics 
                operations for maximum efficiency and cost savings.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Demand forecasting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Inventory optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Logistics planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Risk assessment
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Dashboard</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">95%</div>
                    <div className="text-sm text-gray-300">Forecast Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">23%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Demand Planning</h3>
              <p className="text-gray-300">
                AI-powered demand forecasting to optimize inventory and production planning.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Inventory Management</h3>
              <p className="text-gray-300">
                Smart inventory optimization to reduce carrying costs and stockouts.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Logistics Optimization</h3>
              <p className="text-gray-300">
                Route optimization and logistics planning for efficient delivery operations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Optimize Your Supply Chain
            </h2>
            <p className="text-gray-300 mb-8">
              Join leading companies using our AI Supply Chain Optimizer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;