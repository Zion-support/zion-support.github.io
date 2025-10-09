'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Lock, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFraudDetectionPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI fraud detection solutions with real-time monitoring, pattern recognition, risk scoring, and alert systems. Protect your business from fraudulent activities."
        keywords={['AI fraud detection', 'fraud prevention', 'risk scoring', 'pattern recognition', 'security AI', 'fraud monitoring']}
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Advanced Security Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business from fraudulent activities with our advanced AI-powered fraud detection system. 
              Real-time monitoring, pattern recognition, and intelligent risk scoring keep you one step ahead.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Detection Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time Detection</h3>
                <p className="text-gray-300">Instant fraud detection and prevention</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Pattern Recognition</h3>
                <p className="text-gray-300">Identify suspicious patterns and behaviors</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Risk Scoring</h3>
                <p className="text-gray-300">Advanced risk assessment and scoring</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our fraud detection experts today to discuss how AI can protect your business from fraudulent activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300">
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

export default AIFraudDetectionPage;