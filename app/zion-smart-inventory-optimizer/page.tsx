import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Package, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  Clock,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

const ZionSmartInventoryOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory Optimizer - AI-Powered Inventory Management</title>
        <meta name="description" content="Optimize your inventory with Zion Smart Inventory Optimizer. AI-driven demand forecasting, automated reordering, and intelligent stock management for maximum efficiency." />
        <meta name="keywords" content="inventory optimization, AI inventory management, demand forecasting, stock management, automated reordering, inventory analytics" />
        <meta property="og:title" content="Zion Smart Inventory Optimizer - AI-Powered Inventory Management" />
        <meta property="og:description" content="Optimize your inventory with Zion Smart Inventory Optimizer. AI-driven demand forecasting, automated reordering, and intelligent stock management." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Smart Inventory Optimizer - AI-Powered Inventory Management" />
        <meta name="twitter:description" content="Optimize your inventory with Zion Smart Inventory Optimizer. AI-driven demand forecasting, automated reordering, and intelligent stock management." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Inventory Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion Smart
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Inventory Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your inventory management with AI-driven optimization, 
                demand forecasting, and automated reordering for maximum efficiency and cost savings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Intelligent Inventory Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage AI to optimize your inventory levels, reduce costs, and improve customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Demand Forecasting</h3>
                <p className="text-gray-300">
                  Predict future demand with 95% accuracy using advanced machine learning algorithms and historical data analysis.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
                <p className="text-gray-300">
                  Monitor inventory performance with comprehensive dashboards and real-time insights into stock levels and trends.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Reordering</h3>
                <p className="text-gray-300">
                  Set up intelligent reorder points and let AI automatically place orders when stock levels reach optimal thresholds.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
                <p className="text-gray-300">
                  Reduce carrying costs and minimize stockouts with intelligent inventory optimization algorithms.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Stockout Prevention</h3>
                <p className="text-gray-300">
                  Proactive alerts and recommendations to prevent stockouts and maintain optimal inventory levels.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">ROI Tracking</h3>
                <p className="text-gray-300">
                  Measure the impact of your inventory optimization with detailed ROI analysis and cost savings reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Smart Inventory Optimizer?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their inventory management with our AI-powered solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduce Inventory Costs by 30%</h3>
                      <p className="text-gray-300">
                        Optimize stock levels and eliminate excess inventory with AI-driven demand forecasting.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Eliminate Stockouts</h3>
                      <p className="text-gray-300">
                        Prevent lost sales and customer dissatisfaction with proactive inventory management.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Automated Workflows</h3>
                      <p className="text-gray-300">
                        Save time with automated reordering, alerts, and inventory optimization recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Insights</h3>
                      <p className="text-gray-300">
                        Make informed decisions with comprehensive analytics and performance metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h3>
                  <p className="text-gray-300 mb-6">
                    Start your free trial and see the difference AI can make in your inventory management.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Inventory Management Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of inventory optimization with Zion Smart Inventory Optimizer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSmartInventoryOptimizerPage;