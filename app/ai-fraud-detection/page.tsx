'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Lock, CheckCircle, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIFraudDetectionPage: React.FC = () => {
  const fraudServices = [
    {
      title: 'Real-time Detection',
      description: 'Instant fraud detection using advanced machine learning algorithms',
      features: ['Millisecond Response', 'Pattern Recognition', 'Anomaly Detection', 'Risk Scoring'],
      icon: Eye
    },
    {
      title: 'Pattern Recognition',
      description: 'Identify complex fraud patterns across multiple data sources',
      features: ['Behavioral Analysis', 'Transaction Patterns', 'Network Analysis', 'Temporal Patterns'],
      icon: Shield
    },
    {
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment for every transaction and user',
      features: ['Dynamic Scoring', 'Multi-factor Analysis', 'Historical Data', 'Real-time Updates'],
      icon: AlertTriangle
    },
    {
      title: 'Alert System',
      description: 'Intelligent alerting system with customizable thresholds',
      features: ['Smart Notifications', 'Escalation Rules', 'Dashboard Integration', 'Mobile Alerts'],
      icon: Lock
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI fraud detection solutions with real-time monitoring, pattern recognition, and risk scoring. Protect your business from financial fraud with cutting-edge technology."
        keywords={['AI fraud detection', 'fraud prevention', 'risk scoring', 'pattern recognition', 'financial security', 'fraud monitoring']}
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="AI Fraud Detection"
              >
                AI Fraud Detection
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Advanced AI for Financial Security
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Protect your business from financial fraud with our advanced AI detection system. 
                Real-time monitoring, pattern recognition, and risk scoring to keep your assets secure.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="fraud-services-heading">
            <h2 id="fraud-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Fraud Detection Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive fraud prevention solutions powered by advanced AI
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {fraudServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Secure Your Business?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our fraud detection experts help you implement a comprehensive security system 
                that protects your business from financial fraud and cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Security Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
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