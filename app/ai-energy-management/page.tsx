'use client';
import React from 'react';
import { Zap, Battery, BarChart, Settings, Brain, Target, Users, Globe } from 'lucide-react';

const AIEnergyManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Energy Management
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Energy Optimization & Smart Grid Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered energy management systems that reduce costs by 40%, 
            optimize consumption patterns, and enable sustainable energy operations.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Load Balancing</h3>
              <p className="text-gray-300">
                AI-driven load balancing that optimizes energy distribution across 
                your infrastructure for maximum efficiency.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Battery className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-gray-300">
                Machine learning models that predict energy consumption patterns 
                and optimize usage for cost savings.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300">
                Comprehensive energy monitoring dashboard with real-time insights 
                and automated reporting.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automated Controls</h3>
              <p className="text-gray-300">
                Smart automation that adjusts energy systems based on demand, 
                weather, and usage patterns.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Carbon Footprint</h3>
              <p className="text-gray-300">
                AI-powered carbon footprint tracking and optimization for 
                sustainable energy management.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Grid Integration</h3>
              <p className="text-gray-300">
                Seamless integration with smart grids and renewable energy sources 
                for optimal energy mix.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cost Reduction</h3>
              <p className="text-gray-300 mb-4">
                Reduce energy costs by up to 40% through intelligent optimization 
                and predictive analytics.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Smart demand response</li>
                <li>• Peak shaving strategies</li>
                <li>• Load optimization</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300 mb-4">
                Achieve your sustainability goals with AI-driven renewable energy 
                integration and carbon reduction.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Renewable energy optimization</li>
                <li>• Carbon footprint tracking</li>
                <li>• Green energy procurement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic energy monitoring</li>
                <li>Up to 5 sites</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$599/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced AI optimization</li>
                <li>Up to 25 sites</li>
                <li>Predictive analytics</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited sites</li>
                <li>Custom AI models</li>
                <li>Full analytics suite</li>
                <li>24/7 dedicated support</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Energy Usage?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free energy audit and see how AI can reduce your energy costs and carbon footprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Energy Audit
            </a>
            <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIEnergyManagementPage;