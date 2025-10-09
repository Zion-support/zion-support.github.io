'use client';
import React from 'react';
import { FileText, Shield, CheckCircle, ArrowRight, Clock, Users, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const CookiesPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Cookie Policy - Zion Tech Group"
        description="Information about how we use cookies and similar technologies on our website."
        keywords={['cookie policy, cookies, privacy, data collection, website tracking']}
        canonicalUrl="https://ziontechgroup.com/cookies"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Cookie Policy">
              Cookie Policy
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Our Cookie Usage & Privacy Information
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Information about how we use cookies and similar technologies on our website.
            </p>
          </section>

          {/* Content Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-300">
                <h2 className="text-2xl font-bold text-white mb-6 neon-text">Introduction</h2>
                <p className="text-lg leading-relaxed mb-6">
                  This document outlines the terms and conditions for using Zion Tech Group's services and website.
                  By accessing our services, you agree to be bound by these terms.
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6 neon-text">Last Updated</h2>
                <p className="text-lg leading-relaxed mb-6">
                  This document was last updated on {new Date().toLocaleDateString()}.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;