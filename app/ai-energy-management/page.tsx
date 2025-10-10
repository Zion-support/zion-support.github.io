'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, BarChart, Brain, Target, Users, Globe, Shield } from 'lucide-react';

const AIEnergyManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Energy Management Solutions | Zion Tech Group</title>
        <meta name="description" content="Intelligent energy management systems powered by AI. Optimize energy consumption, reduce costs, and achieve sustainability goals with smart energy analytics." />
        <meta name="keywords" content="AI energy management, smart energy, energy optimization, sustainability AI, energy analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-energy-management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Energy Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize energy consumption with AI-powered smart energy management systems. 
                Reduce costs, improve efficiency, and achieve your sustainability goals.
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
              Smart Energy Management Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Smart Grid Optimization</h3>
                <p className="text-gray-300">
                  AI algorithms optimize energy distribution across your grid, 
                  reducing waste and improving overall efficiency.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  Forecast energy demand and optimize consumption patterns 
                  to minimize costs and environmental impact.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
                <p className="text-gray-300">
                  Automated energy management systems that adapt to usage patterns 
                  and optimize performance in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Energy Transformation
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our energy management experts to learn how AI can optimize 
              your energy consumption and reduce costs.
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

export default AIEnergyManagementPage;