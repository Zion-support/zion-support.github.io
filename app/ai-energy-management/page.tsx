'use client';
import React from 'react';
import { Zap, Battery, TrendingUp, Settings, BarChart, Leaf } from 'lucide-react';

const AIEnergyManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Energy Management
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Intelligent energy management solutions that optimize consumption, reduce costs, and promote sustainability.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Smart Grid Integration</h3>
            <p className="text-gray-300">
              Seamless integration with smart grid systems for optimal energy distribution and management.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Battery className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Battery Optimization</h3>
            <p className="text-gray-300">
              AI-powered battery management systems that extend lifespan and optimize charging cycles.
            </p>
          </div>

          <div className="cyber-card p-6">
            <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
            <p className="text-gray-300">
              Advanced analytics to predict energy consumption patterns and optimize usage strategies.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Settings className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Automated Controls</h3>
            <p className="text-gray-300">
              Intelligent automation systems that adjust energy usage based on real-time conditions.
            </p>
          </div>

          <div className="cyber-card p-6">
            <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real-time Monitoring</h3>
            <p className="text-gray-300">
              Comprehensive monitoring dashboard with real-time energy usage and cost tracking.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Leaf className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Sustainability Focus</h3>
            <p className="text-gray-300">
              Green energy solutions that reduce carbon footprint and promote environmental sustainability.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cost Reduction</h3>
              <p className="text-gray-300 mb-4">
                Reduce energy costs by up to 30% through intelligent optimization and predictive management.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Smart load balancing</li>
                <li>• Peak demand management</li>
                <li>• Automated energy trading</li>
              </ul>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Environmental Impact</h3>
              <p className="text-gray-300 mb-4">
                Contribute to a sustainable future with AI-driven green energy solutions.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Carbon footprint reduction</li>
                <li>• Renewable energy integration</li>
                <li>• Waste energy recovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Energy Transformation Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations in revolutionizing their energy management with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-3 text-center"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIEnergyManagementPage;