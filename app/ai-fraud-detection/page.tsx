'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Zap, BarChart, Lock, Users, TrendingDown, Phone } from 'lucide-react';
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
      title: 'Real-time Fraud Detection',
      description: 'Instant detection of fraudulent activities using advanced AI algorithms',
      icon: Zap,
      price: '$1,900/month',
      features: ['Real-time Monitoring', 'Instant Alerts', 'Pattern Recognition', 'Risk Scoring'],
      color: 'text-red-400'
    },
    {
      title: 'Transaction Analysis',
      description: 'Comprehensive analysis of transactions to identify suspicious patterns',
      icon: BarChart,
      price: '$1,200/month',
      features: ['Transaction Monitoring', 'Anomaly Detection', 'Behavioral Analysis', 'Risk Assessment'],
      color: 'text-blue-400'
    },
    {
      title: 'Identity Verification',
      description: 'Advanced identity verification and authentication systems',
      icon: Users,
      price: '$1,500/month',
      features: ['Biometric Verification', 'Document Analysis', 'Liveness Detection', 'Multi-factor Auth'],
      color: 'text-green-400'
    },
    {
      title: 'Credit Card Fraud Prevention',
      description: 'Specialized protection against credit card fraud and chargebacks',
      icon: Lock,
      price: '$1,800/month',
      features: ['Card Verification', 'Chargeback Prevention', 'Merchant Protection', 'PCI Compliance'],
      color: 'text-purple-400'
    },
    {
      title: 'Account Takeover Protection',
      description: 'Prevent unauthorized access to user accounts and data',
      icon: Shield,
      price: '$1,600/month',
      features: ['Login Monitoring', 'Device Fingerprinting', 'Behavioral Biometrics', 'Suspicious Activity Detection'],
      color: 'text-cyan-400'
    },
    {
      title: 'Insurance Fraud Detection',
      description: 'Detect and prevent insurance fraud with AI-powered analysis',
      icon: AlertTriangle,
      price: '$2,000/month',
      features: ['Claim Analysis', 'Document Verification', 'Pattern Recognition', 'Risk Profiling'],
      color: 'text-orange-400'
    },
    {
      title: 'AML Compliance',
      description: 'Anti-Money Laundering compliance and monitoring solutions',
      icon: Eye,
      price: '$1,700/month',
      features: ['Transaction Monitoring', 'Sanctions Screening', 'KYC Verification', 'Regulatory Reporting'],
      color: 'text-yellow-400'
    },
    {
      title: 'Fraud Analytics Dashboard',
      description: 'Comprehensive dashboard for fraud monitoring and analytics',
      icon: TrendingDown,
      price: '$800/month',
      features: ['Real-time Dashboards', 'Custom Reports', 'Trend Analysis', 'Performance Metrics'],
      color: 'text-gray-400'
    }
  ];

  const benefits = [
    {
      title: '99.9% Accuracy',
      description: 'Our AI models achieve 99.9% accuracy in fraud detection',
      icon: '🎯'
    },
    {
      title: 'Real-time Protection',
      description: 'Instant fraud detection and prevention in real-time',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce fraud losses by up to 90% with our solutions',
      icon: '💰'
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance with industry regulations',
      icon: '✅'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection Services - Zion Tech Group"
        description="Advanced AI-powered fraud detection and prevention services. Protect your business from fraud with real-time monitoring, transaction analysis, and identity verification."
        keywords={['AI fraud detection', 'fraud prevention', 'transaction monitoring', 'identity verification', 'AML compliance', 'fraud analytics']}
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
      >
        <div></div>
      </AccessibilityEnhancer>
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Advanced Fraud Prevention & Detection
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business from fraud with our cutting-edge AI-powered detection systems. 
              Real-time monitoring, advanced analytics, and instant alerts to keep your business secure.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI Fraud Detection?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Fraud Detection Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {fraudServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Industry Applications */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Industry Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Financial Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Credit Card Fraud Prevention</li>
                    <li>• Account Takeover Protection</li>
                    <li>• Money Laundering Detection</li>
                    <li>• Identity Verification</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">E-commerce</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Payment Fraud Prevention</li>
                    <li>• Chargeback Protection</li>
                    <li>• Fake Account Detection</li>
                    <li>• Transaction Monitoring</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Insurance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Claims Fraud Detection</li>
                    <li>• Document Verification</li>
                    <li>• Risk Assessment</li>
                    <li>• Policy Validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Protect Your Business from Fraud
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Don&apos;t let fraud damage your business. Our AI-powered fraud detection systems 
                provide real-time protection and help you stay ahead of emerging threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Security Audit
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
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