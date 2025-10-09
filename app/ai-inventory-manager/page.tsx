'use client';
import React from 'react';
import { Package, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIInventoryManagerPage: React.FC = () => {
  const features = [
    'Demand Forecasting',
    'Stock Optimization',
    'Reorder Alerts',
    'Analytics Dashboard',
    'Inventory Tracking',
    'Cost Optimization',
    'Supplier Management',
    'Automated Reporting'
  ];

  const benefits = [
    '30% inventory reduction',
    '99% stock accuracy',
    'Zero stockouts',
    '50% cost savings'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Inventory Manager - Zion Tech Group"
        description="AI-powered inventory management system with demand forecasting, stock optimization, and automated reorder alerts to optimize your supply chain."
        keywords={['AI inventory manager', 'inventory optimization', 'demand forecasting', 'stock management', 'supply chain', 'inventory tracking']}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-manager"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Inventory Manager
            </h1>
            <p className="text-xl text-orange-400 mb-8 font-medium">
              Optimize Your Supply Chain with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our AI inventory manager uses machine learning to predict demand, optimize stock levels, 
              and automate reorder processes, reducing costs and preventing stockouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Inventory Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{benefit.split(' ')[0]}</div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic Forecasting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Stock Tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Reorder Alerts
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center ring-2 ring-orange-400">
                <div className="bg-orange-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced Forecasting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Cost Optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Analytics Dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Supplier Management
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Contact Us</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our AI inventory manager help you reduce costs and prevent stockouts.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Inventory Analysis
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIInventoryManagerPage;