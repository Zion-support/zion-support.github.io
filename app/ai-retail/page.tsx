'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, BarChart, Brain, Target, Users, Globe, Shield } from 'lucide-react';

const AIRetailPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Retail Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform retail with AI-powered solutions. Personalized shopping experiences, inventory optimization, demand forecasting, and intelligent customer analytics." />
        <meta name="keywords" content="AI retail, retail AI, personalized shopping, inventory optimization, retail analytics, smart retail" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-retail" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Retail
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize retail with AI-powered personalization, inventory optimization, 
                and intelligent customer analytics for enhanced shopping experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI Retail Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <ShoppingCart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Shopping</h3>
                <p className="text-gray-300">
                  AI-powered recommendation engines that create personalized shopping 
                  experiences tailored to each customer's preferences.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Inventory Optimization</h3>
                <p className="text-gray-300">
                  Smart inventory management that predicts demand, optimizes stock levels, 
                  and reduces waste through AI analytics.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Customer Analytics</h3>
                <p className="text-gray-300">
                  Advanced customer behavior analysis that provides insights into 
                  shopping patterns and preferences for better decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Retail Business
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our retail AI experts to learn how our solutions can 
              enhance customer experience and boost sales.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRetailPage;