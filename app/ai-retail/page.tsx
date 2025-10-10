'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Users, BarChart, Clock, CheckCircle, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, Store, TrendingUp, Package, CreditCard, Star } from 'lucide-react';

const AIRetailPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Retail Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered retail solutions for inventory management, customer analytics, personalized shopping, and retail automation. Transform your retail business with artificial intelligence." />
        <meta name="keywords" content="AI retail, retail AI, inventory management, customer analytics, personalized shopping, retail automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-retail" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your retail business with AI-powered solutions for inventory management, customer analytics, personalized shopping experiences, and automated retail operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Retail Assessment
                </button>
                <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Success Stories
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
                AI Retail Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered retail platform provides comprehensive solutions for modern retail operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Inventory Management</h3>
                <p className="text-gray-300 mb-6">
                  AI-powered inventory optimization with demand forecasting, automated reordering, and stock level optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Demand forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Automated reordering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Stock optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Customer Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Advanced customer behavior analysis with purchase patterns, preferences, and lifetime value prediction.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Customer segmentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Purchase pattern analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Lifetime value prediction
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Personalized Shopping</h3>
                <p className="text-gray-300 mb-6">
                  AI-driven personalized product recommendations and customized shopping experiences for each customer.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Product recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Personalized offers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Dynamic pricing
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Store Operations</h3>
                <p className="text-gray-300 mb-6">
                  Intelligent store management with staff scheduling, layout optimization, and customer flow analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Staff scheduling optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Layout optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Customer flow analysis
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Payment & Checkout</h3>
                <p className="text-gray-300 mb-6">
                  Streamlined checkout processes with fraud detection, payment optimization, and mobile payment integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Fraud detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Payment optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Mobile payment integration
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Sales Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive sales analytics with performance tracking, trend analysis, and revenue optimization insights.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Sales performance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Trend analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                    Revenue optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Retail Transformation Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI retail solutions deliver measurable improvements in sales, efficiency, and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">35%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sales Increase</h3>
                <p className="text-gray-300">Average increase in retail sales</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">50%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Inventory Reduction</h3>
                <p className="text-gray-300">Reduction in excess inventory</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Customer Satisfaction</h3>
                <p className="text-gray-300">Customer satisfaction score</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-gray-300">Operational cost reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading retailers already using AI to increase sales, improve efficiency, and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Retail Assessment
              </button>
              <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRetailPage;