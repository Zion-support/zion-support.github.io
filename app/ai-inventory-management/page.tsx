'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, CheckCircle, Star, Zap, Brain, Target, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const AIInventoryManagement: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Inventory Management - Smart Stock Optimization | Zion Tech Group"
        description="Revolutionary AI-powered inventory management system. Predict demand, optimize stock levels, reduce waste by 70%. Starting at $299/month. Call (302) 464-0950."
        keywords={['AI inventory management', 'smart inventory', 'stock optimization', 'demand forecasting', 'inventory AI']}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
                AI Inventory Management
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
                Smart Stock Optimization & Demand Forecasting
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your inventory management with AI-powered demand forecasting and stock optimization. 
                Reduce waste by 70%, increase turnover by 200%, and eliminate stockouts with our intelligent 
                inventory management platform.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
                  <div className="text-sm text-gray-300">Waste Reduction</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">200%</div>
                  <div className="text-sm text-gray-300">Turnover Increase</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="cyber-card hologram-card p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2M+</div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              AI-Powered Inventory Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Demand Forecasting</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />AI-powered demand prediction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Seasonal trend analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />External factor consideration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time adjustments</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">⚡</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Reordering</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Automatic reorder points</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Supplier optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Bulk order recommendations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Lead time management</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Analytics Dashboard</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time inventory tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Performance metrics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Cost analysis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom reports</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Stock Optimization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Optimal stock levels</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />ABC analysis automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Dead stock identification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Space utilization</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔗</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">System Integrations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />ERP system integration</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />POS system sync</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Supplier portals</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />E-commerce platforms</li>
                </ul>
              </div>

              <div className="quantum-card p-6 energy-pulse">
                <div className="text-4xl mb-4 text-center">🔒</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Data encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Access controls</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Audit trails</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Compliance reporting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Up to 1,000 SKUs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Basic AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Email support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Standard integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Up to 10,000 SKUs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Advanced AI features</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Priority support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom integrations</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Get Started</a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$1,299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Unlimited SKUs</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Full AI suite</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />White-label solution</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />24/7 phone support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Inventory?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Join thousands of businesses using our AI Inventory Management to reduce costs and improve efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  📧 kleber@ziontechgroup.com
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

export default AIInventoryManagement;