import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="AI Supply Chain Optimizer - Zion Tech Group"
        description="AI-powered supply chain optimization for inventory management, demand forecasting, logistics optimization, and supply chain analytics."
        keywords="AI supply chain optimizer, inventory management, demand forecasting, logistics optimization, supply chain analytics, operations management"
        canonicalUrl="https://ziontechgroup.com/ai-supply-chain-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Supply Chain Optimizer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Demand Forecasting</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Predictive demand analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Seasonal trend identification
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Market demand prediction
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Customer behavior analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Risk factor assessment
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Inventory Optimization</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Optimal stock level calculation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Reorder point optimization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  ABC analysis and categorization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Safety stock optimization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Dead stock identification
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Supply Chain Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">Inventory Management</h3>
                <p className="text-gray-300">Optimize inventory levels and reduce carrying costs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Logistics Optimization</h3>
                <p className="text-gray-300">Streamline transportation and distribution networks.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Performance Analytics</h3>
                <p className="text-gray-300">Monitor and analyze supply chain performance metrics.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-supply-chain-optimizer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
            >
              Optimize Supply Chain
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;