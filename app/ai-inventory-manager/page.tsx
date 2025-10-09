'use client';
import React from 'react';
import { Package, TrendingUp, BarChart, AlertCircle, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIInventoryManagerPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Inventory Manager - Zion Tech Group"
        description="AI-powered inventory management with demand forecasting, stock optimization, reorder alerts, and analytics dashboard. Optimize your inventory with intelligent automation."
        keywords={['AI inventory manager', 'demand forecasting', 'stock optimization', 'inventory automation', 'supply chain AI', 'inventory analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-manager"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Inventory Manager
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium">
              Intelligent Inventory Optimization
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Optimize your inventory with AI-powered demand forecasting and stock management. 
              Reduce costs, prevent stockouts, and maximize efficiency with intelligent automation.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Inventory Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Demand Forecasting</h3>
                <p className="text-gray-300">Predict future demand with AI algorithms</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Package className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Stock Optimization</h3>
                <p className="text-gray-300">Optimize inventory levels automatically</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Reorder Alerts</h3>
                <p className="text-gray-300">Smart reorder notifications and automation</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Inventory?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our inventory AI experts today to discuss your supply chain optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIInventoryManagerPage;