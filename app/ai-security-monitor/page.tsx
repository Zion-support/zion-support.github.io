'use client';
import React from 'react';
import { Shield, CheckCircle, TrendingUp, AlertTriangle, Eye, Lock } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import PerformanceOptimizer from '../../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../../components/AccessibilityEnhancer';
import SecurityEnhancer from '../../components/SecurityEnhancer';
import Analytics from '../../components/Analytics';

const AISecurityMonitorPage: React.FC = () => {
  const features = [
    'Threat detection',
    'Vulnerability scanning',
    'Incident response',
    'Compliance monitoring',
    'Security analytics',
    '24/7 monitoring'
  ];

  const benefits = [
    'Proactive protection',
    'Faster response',
    'Compliance assurance',
    'Risk reduction'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Security Monitor - Zion Tech Group"
        description="Advanced cybersecurity monitoring with AI-powered threat detection and response. Protect your business with intelligent security monitoring and compliance management."
        keywords={['AI security monitor', 'cybersecurity', 'threat detection', 'security monitoring', 'compliance', 'AI security']}
        canonicalUrl="https://ziontechgroup.com/ai-security-monitor"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6">🛡️</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Security Monitor
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced Cybersecurity with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business with AI-powered cybersecurity monitoring, threat detection, and incident response. 
              Ensure compliance and reduce security risks with intelligent security solutions.
            </p>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Threat Detection</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                  <div className="text-gray-300">Faster Response</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-gray-300">Compliance Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">90%</div>
                  <div className="text-gray-300">Risk Reduction</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Secure Your Business?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Start protecting your business with AI-powered cybersecurity monitoring and threat detection today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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

export default AISecurityMonitorPage;