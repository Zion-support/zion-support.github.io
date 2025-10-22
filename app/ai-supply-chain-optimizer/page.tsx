<<<<<<< HEAD
import React from 'react';
import SEOHead from '../components/SEOHead';

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function AiSupplyChainOptimizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Supply Chain Optimizer | Zion Tech Group</title>
        <meta name="description" content="Professional ai supply chain optimizer solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Ai Supply Chain Optimizer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ai supply chain optimizer solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with ai supply chain optimizer?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
