'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Key, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Services - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and incident response. Protect your business from cyber threats."
        keywords={['cybersecurity', 'threat detection', 'security monitoring', 'vulnerability assessment', 'incident response', 'cyber protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Services
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Advanced Security Protection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business from cyber threats with our comprehensive cybersecurity solutions. 
              From threat detection to incident response, we keep your data and systems secure.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Threat Detection</h3>
                <p className="text-gray-300">Advanced threat detection and prevention</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Monitoring</h3>
                <p className="text-gray-300">24/7 security monitoring and alerting</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Vulnerability Assessment</h3>
                <p className="text-gray-300">Comprehensive security vulnerability analysis</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our cybersecurity experts today to discuss how we can protect your business from cyber threats.
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

export default CybersecurityPage;