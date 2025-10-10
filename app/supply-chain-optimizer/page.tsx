'use client';
import React from 'react';
import { Truck, BarChart, Users, Zap, Settings, Shield, Target, Globe } from 'lucide-react';

const SupplyChainOptimizerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Supply Chain Optimizer
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Supply Chain Management & Optimization
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced supply chain optimization platform that streamlines operations, 
            reduces costs, and improves efficiency with AI-driven insights and automation.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Truck className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Logistics Management</h3>
              <p className="text-gray-300">
                Comprehensive logistics management with 
                route optimization and delivery tracking.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
              <p className="text-gray-300">
                Advanced supply chain analytics with 
                performance metrics and optimization insights.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Vendor Management</h3>
              <p className="text-gray-300">
                Complete vendor management with supplier 
                performance tracking and relationship tools.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Settings className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Inventory Control</h3>
              <p className="text-gray-300">
                Intelligent inventory management with 
                demand forecasting and stock optimization.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated supply chain processes with 
                smart workflows and decision support.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Shield className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">
                Comprehensive risk management with 
                threat detection and mitigation strategies.
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
                Reduce supply chain costs by up to 30% with 
                AI-optimized processes and resource allocation.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Route optimization</li>
                <li>• Inventory optimization</li>
                <li>• Resource allocation</li>
              </ul>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Improve supply chain efficiency with 
                automated processes and intelligent insights.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated workflows</li>
                <li>• Smart scheduling</li>
                <li>• Predictive analytics</li>
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
              <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic supply chain management</li>
                <li>Up to 10 suppliers</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced supply chain management</li>
                <li>Up to 100 suppliers</li>
                <li>AI-powered insights</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Global Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Full supply chain suite</li>
                <li>Unlimited suppliers</li>
                <li>Advanced analytics</li>
                <li>24/7 dedicated support</li>
                <li>Custom reporting</li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free supply chain assessment and see how we can improve your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Assessment
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

export default SupplyChainOptimizerPage;