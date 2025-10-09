'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Lock, TrendingDown, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFraudDetectionPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI-powered fraud detection and prevention solutions. Protect your business from financial fraud with real-time monitoring and intelligent threat detection."
        keywords={['AI fraud detection', 'fraud prevention', 'threat detection', 'security AI', 'fraud monitoring', 'risk assessment']}
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium neon-pulse">
              Protect Your Business with Intelligent Security
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our AI-powered fraud detection systems use machine learning to identify suspicious patterns, 
              prevent fraudulent transactions, and protect your business from financial losses in real-time.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time Detection</h3>
                <p className="text-gray-300">Monitor transactions and activities in real-time to catch fraud as it happens</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Pattern Recognition</h3>
                <p className="text-gray-300">Identify complex fraud patterns that traditional systems might miss</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Risk Scoring</h3>
                <p className="text-gray-300">Assign risk scores to transactions and users based on behavioral analysis</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our fraud detection experts help you implement intelligent security solutions for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Fraud Detection Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIFraudDetectionPage;