'use client';
import React from 'react';
import { Database, BarChart, Shield, Zap, HardDrive, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DatabasePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Database Services - Zion Tech Group"
        description="Comprehensive database services including design, optimization, and management. Optimize your data infrastructure with our database expertise and AI-powered tuning."
        keywords={['database services', 'database optimization', 'data management', 'database design', 'data analytics', 'database consulting']}
        canonicalUrl="https://ziontechgroup.com/database"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Database Services
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium neon-pulse">
              Optimize Your Data Infrastructure
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our database services help you design, optimize, and manage your data infrastructure 
              with AI-powered tuning, security hardening, and real-time analytics capabilities.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Database Design</h3>
                <p className="text-gray-300">Custom database architecture and schema design for optimal performance and scalability</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance Tuning</h3>
                <p className="text-gray-300">AI-powered database optimization for maximum performance and efficiency</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Hardening</h3>
                <p className="text-gray-300">Comprehensive security measures to protect your sensitive data</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Database?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our database experts help you build a robust, high-performance data infrastructure.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Database Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DatabasePage;