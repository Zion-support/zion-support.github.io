'use client';
import React from 'react';
import { Database, Zap, Shield, Wrench, BarChart, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DatabasePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, optimization, management, backup & recovery, and security hardening. Expert database solutions for enterprise applications."
        keywords={['database services', 'database design', 'performance tuning', 'backup recovery', 'database security', 'data management']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Database Services
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium">
              Expert Database Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Optimize your data infrastructure with our comprehensive database services. 
              From design to security, we ensure your databases perform at peak efficiency.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Database Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Database Design</h3>
                <p className="text-gray-300">Custom database architecture and design</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Tuning</h3>
                <p className="text-gray-300">Optimize database performance and speed</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Hardening</h3>
                <p className="text-gray-300">Advanced database security implementation</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Database?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our database experts today to discuss how we can optimize your data infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
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

export default DatabasePage;