import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Package, Brain, BarChart3, Zap, CheckCircle, Star, TrendingUp } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const ZionSmartInventoryOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI-Powered Inventory Management</title>
        <meta name="description" content="Optimize your inventory with Zion Smart Inventory Optimizer. AI-powered demand forecasting, automated reordering, and intelligent stock management for maximum efficiency." />
        <meta name="keywords" content="inventory optimization, AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics" />
      </Helmet>
      <EnhancedSEO 
        title="Zion Smart Inventory Optimizer - AI-Powered Inventory Management"
        description="Optimize your inventory with Zion Smart Inventory Optimizer. AI-powered demand forecasting, automated reordering, and intelligent stock management for maximum efficiency."
        keywords="inventory optimization, AI inventory management, demand forecasting, stock optimization, automated reordering, inventory analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Smart Inventory Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your inventory management with AI-powered optimization. Reduce costs, prevent stockouts, 
                and maximize efficiency with intelligent demand forecasting and automated reordering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Inventory Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI algorithms to optimize your inventory levels, reduce costs, and improve customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">AI Demand Forecasting</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Predict future demand with machine learning algorithms that analyze historical data, seasonality, and market trends.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Historical data analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Seasonal pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Market trend integration
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Automated Reordering</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Set up intelligent reorder points and quantities that automatically trigger purchase orders when needed.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Smart reorder points
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Optimal order quantities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Supplier integration
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Inventory Analytics</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Get comprehensive insights into your inventory performance with detailed analytics and reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Turnover analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    ABC analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cost optimization
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Performance Optimization</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Continuously optimize your inventory levels to minimize costs while maintaining service levels.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cost minimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Service level optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Stockout prevention
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Package className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Multi-Location Support</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Manage inventory across multiple warehouses and locations with centralized optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Multi-warehouse management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Cross-location transfers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Centralized reporting
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-pink-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Real-time Monitoring</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Monitor your inventory in real-time with alerts and notifications for critical events.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Low stock alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Overstock warnings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Performance dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Inventory?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion Smart Inventory Optimizer to reduce costs and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartInventoryOptimizerPage;