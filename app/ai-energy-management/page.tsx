'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Battery, BarChart, Brain, Target, Users, Globe, ArrowRight, Star, Award, TrendingUp, Settings } from 'lucide-react';

const AIEnergyManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Energy Management Solutions | Zion Tech Group</title>
        <meta name="description" content="Intelligent energy management systems powered by AI. Optimize energy consumption, reduce costs, and achieve sustainability goals with smart energy analytics and automation." />
        <meta name="keywords" content="AI energy management, smart energy, energy optimization, sustainability, energy analytics, smart grid" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-energy-management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Energy Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Optimize energy consumption, reduce costs, and achieve sustainability goals with intelligent 
                AI-powered energy management systems that learn and adapt to your facility's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Smart Energy Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered energy management platform provides comprehensive control and optimization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Energy Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  Continuous monitoring of energy consumption across all systems with detailed analytics and reporting.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Live energy dashboards</li>
                  <li>• Consumption tracking</li>
                  <li>• Peak demand analysis</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Energy Analytics</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered predictions for energy demand, consumption patterns, and optimization opportunities.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Demand forecasting</li>
                  <li>• Usage pattern analysis</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automated energy optimization based on AI algorithms that learn from your usage patterns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Smart load balancing</li>
                  <li>• Automated scheduling</li>
                  <li>• Dynamic optimization</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Energy Efficiency Optimization</h3>
                <p className="text-gray-300 mb-4">
                  Identify and eliminate energy waste with intelligent recommendations and automated adjustments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Waste identification</li>
                  <li>• Efficiency recommendations</li>
                  <li>• Automated adjustments</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Grid Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamless integration with smart grid systems for enhanced energy management capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Grid connectivity</li>
                  <li>• Demand response</li>
                  <li>• Renewable integration</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Sustainability Tracking</h3>
                <p className="text-gray-300 mb-4">
                  Monitor and report on sustainability metrics and carbon footprint reduction achievements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Carbon footprint tracking</li>
                  <li>• Sustainability reporting</li>
                  <li>• Green energy monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Energy Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Achieve significant energy savings and operational efficiency with AI-powered solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">30% Cost Reduction</h3>
                <p className="text-gray-300">Average energy cost savings achieved by our clients</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-time Control</h3>
                <p className="text-gray-300">Instant energy optimization and load management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sustainability Goals</h3>
                <p className="text-gray-300">Achieve your environmental and sustainability targets</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Insights</h3>
                <p className="text-gray-300">Comprehensive analytics and reporting for informed decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Energy Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start reducing energy costs and improving efficiency with our AI-powered energy management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEnergyManagementPage;