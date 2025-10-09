'use client';
import React from 'react';
import { Shield, AlertTriangle, BarChart, Zap, Eye, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIFraudDetectionPage: React.FC = () => {
  const fraudServices = [
    {
      title: 'Real-time Detection',
      description: 'Instant fraud detection and prevention with advanced AI algorithms',
      icon: Zap,
      features: ['Millisecond Response', 'Pattern Recognition', 'Anomaly Detection', 'Risk Scoring'],
      benefits: ['99.9% fraud detection', 'Real-time alerts', 'Reduced false positives']
    },
    {
      title: 'Pattern Recognition',
      description: 'Identify complex fraud patterns and behaviors across multiple data sources',
      icon: Eye,
      features: ['Behavioral Analysis', 'Transaction Patterns', 'Network Analysis', 'Temporal Patterns'],
      benefits: ['Advanced pattern detection', 'Multi-dimensional analysis', 'Adaptive learning']
    },
    {
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment and scoring for all transactions and activities',
      icon: BarChart,
      features: ['Dynamic Scoring', 'Multi-factor Analysis', 'Risk Categories', 'Threshold Management'],
      benefits: ['Accurate risk assessment', 'Customizable thresholds', 'Real-time updates']
    },
    {
      title: 'Alert System',
      description: 'Intelligent alerting system with automated response and escalation',
      icon: AlertTriangle,
      features: ['Smart Alerts', 'Automated Response', 'Escalation Rules', 'Notification Management'],
      benefits: ['Reduced alert fatigue', 'Automated responses', 'Customizable rules']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI fraud detection solutions with real-time monitoring, pattern recognition, and risk scoring. Protect your business from sophisticated fraud attacks."
        keywords={['AI fraud detection', 'fraud prevention', 'risk scoring', 'pattern recognition', 'real-time monitoring']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Protect Your Business with Advanced AI Security
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our AI fraud detection solutions use advanced machine learning to identify and prevent 
              sophisticated fraud attacks in real-time, protecting your business and customers.
            </p>
          </section>

          {/* Fraud Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fraudServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our fraud detection experts help you implement advanced AI security solutions that protect your business from evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Security Consultation
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

export default AIFraudDetectionPage;