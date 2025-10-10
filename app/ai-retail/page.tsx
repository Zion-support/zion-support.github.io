'use client';
import React from 'react';
import { ShoppingCart, BarChart, Users, Brain, Target, Zap, Shield, Globe } from 'lucide-react';

const AIRetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Retail Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent Retail Operations & Customer Experience
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered retail solutions that optimize inventory, 
            personalize customer experiences, and boost sales by 40%.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <ShoppingCart className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Smart Inventory</h3>
              <p className="text-gray-300">
                AI-powered inventory management that predicts demand, 
                optimizes stock levels, and reduces waste.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Personalization</h3>
              <p className="text-gray-300">
                Personalized shopping experiences with AI-driven 
                product recommendations and targeted offers.
              </p>
            </div>
            <div className="cyber-card p-6">
              <BarChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-300">
                Comprehensive retail analytics with sales insights, 
                customer behavior, and performance metrics.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Demand Forecasting</h3>
              <p className="text-gray-300">
                Machine learning models that predict customer demand 
                and optimize purchasing decisions.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Target className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Price Optimization</h3>
              <p className="text-gray-300">
                Dynamic pricing strategies that maximize revenue 
                while maintaining competitive advantage.
              </p>
            </div>
            <div className="cyber-card p-6">
              <Zap className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Automated retail processes including order processing, 
                customer service, and supply chain management.
              </p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$299/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Basic inventory management</li>
                <li>Up to 1,000 products</li>
                <li>Standard analytics</li>
                <li>Email support</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Advanced AI features</li>
                <li>Up to 10,000 products</li>
                <li>Personalization engine</li>
                <li>Priority support</li>
                <li>Custom integrations</li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>Unlimited products</li>
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
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free retail analysis and see how AI can boost your sales and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button">
              Get Free Analysis
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

export default AIRetailPage;