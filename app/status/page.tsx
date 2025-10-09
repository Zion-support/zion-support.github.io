'use client';
import React from 'react';
import { Settings, CheckCircle, ArrowRight, Star, Zap, Shield, Target, BarChart, Users, Clock, DollarSign, TrendingUp, Cloud, Database, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const StatusPage: React.FC = () => {
  const features = [
    { title: 'Enterprise-Grade Infrastructure', description: 'Scalable and secure IT infrastructure solutions', icon: Settings },
    { title: '24/7 Monitoring', description: 'Round-the-clock system monitoring and support', icon: Clock },
    { title: 'Advanced Security', description: 'Comprehensive security and compliance solutions', icon: Shield },
    { title: 'Expert Support', description: 'Dedicated technical support team', icon: Users }
  ];

  const benefits = [
    { metric: '99.9%', label: 'Uptime Guarantee', icon: TrendingUp },
    { metric: '50%', label: 'Cost Reduction', icon: DollarSign },
    { metric: '24/7', label: 'Support', icon: Clock },
    { metric: '100%', label: 'Satisfaction', icon: Star }
  ];

  return (
    <>
      <SEOOptimizer
        title="System Status - Zion Tech Group"
        description="Monitor the real-time status of all Zion Tech Group services and systems."
        keywords={['system status, service status, uptime, system health, service monitoring']}
        canonicalUrl="https://ziontechgroup.com/status"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="System Status">
              System Status
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Real-Time Service Status
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Monitor the real-time status of all Zion Tech Group services and systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{benefit.metric}</div>
                  <div className="text-sm text-gray-300">{benefit.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our experts help you build a robust, scalable, and secure IT environment.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Now
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StatusPage;