'use client';
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security monitoring. Protect your business from cyber threats with our expert team."
        keywords={['cybersecurity', 'security solutions', 'threat detection', 'vulnerability assessment', 'security monitoring', 'cyber protection']}
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium neon-pulse">
              Protect Your Business from Cyber Threats
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our comprehensive cybersecurity solutions protect your business from evolving cyber threats 
              with advanced threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Threat Detection</h3>
                <p className="text-gray-300">Advanced threat detection systems that identify and respond to cyber attacks in real-time</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Hardening</h3>
                <p className="text-gray-300">Strengthen your systems and networks against potential security vulnerabilities</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">Continuous security monitoring and incident response to keep your business protected</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our cybersecurity experts help you build a robust security posture for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Security Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CybersecurityPage;