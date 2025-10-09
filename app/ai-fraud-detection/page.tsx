'use client';
import React from 'react';
import { Shield, AlertTriangle, Eye, Zap, BarChart, Lock, Target, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIFraudDetectionPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Detection',
      description: 'Instant fraud detection and prevention in real-time transactions',
      icon: Zap,
      benefits: ['Millisecond response time', 'Live monitoring', 'Instant alerts', 'Auto-blocking']
    },
    {
      title: 'Pattern Recognition',
      description: 'Advanced ML algorithms to identify complex fraud patterns',
      icon: Eye,
      benefits: ['Anomaly detection', 'Behavioral analysis', 'Transaction patterns', 'Risk scoring']
    },
    {
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment for every transaction and user',
      icon: BarChart,
      benefits: ['Dynamic scoring', 'Multi-factor analysis', 'Historical data', 'Predictive modeling']
    },
    {
      title: 'Alert System',
      description: 'Intelligent alerting system with customizable thresholds',
      icon: AlertTriangle,
      benefits: ['Smart notifications', 'Escalation rules', 'Dashboard alerts', 'API integrations']
    }
  ];

  const industries = [
    {
      title: 'Financial Services',
      description: 'Credit card fraud, account takeover, and payment fraud detection',
      icon: Shield,
      impact: '99.9% fraud detection accuracy'
    },
    {
      title: 'E-commerce',
      description: 'Transaction fraud, account abuse, and chargeback prevention',
      icon: Target,
      impact: '60% reduction in chargebacks'
    },
    {
      title: 'Insurance',
      description: 'Claims fraud detection and risk assessment',
      icon: Lock,
      impact: '40% faster claims processing'
    },
    {
      title: 'Healthcare',
      description: 'Medical billing fraud and identity verification',
      icon: Search,
      impact: '50% reduction in fraudulent claims'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI fraud detection solutions with real-time monitoring, pattern recognition, and risk scoring. Protect your business from financial fraud and security threats."
        keywords={['AI fraud detection', 'fraud prevention', 'risk scoring', 'pattern recognition', 'real-time monitoring', 'security AI']}
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
            <p className="text-xl md:text-2xl text-red-400 mb-8 font-medium">
              Advanced Fraud Prevention and Security Monitoring
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Protect your business from financial fraud with our advanced AI-powered detection system. 
              Real-time monitoring, pattern recognition, and intelligent risk scoring to keep your 
              organization secure and compliant.
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
                className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Fraud Detection Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{industry.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{industry.description}</p>
                  <div className="text-red-400 font-semibold text-sm">{industry.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Fraud Detection Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">$1,900<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Real-time monitoring</li>
                  <li>Basic pattern detection</li>
                  <li>Risk scoring</li>
                  <li>Email alerts</li>
                  <li>Standard support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-red-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">$4,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced ML algorithms</li>
                  <li>Custom rule engine</li>
                  <li>API integrations</li>
                  <li>Analytics dashboard</li>
                  <li>Priority support</li>
                  <li>Custom training</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-red-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom fraud platform</li>
                  <li>Multi-channel monitoring</li>
                  <li>24/7 SOC support</li>
                  <li>Dedicated team</li>
                  <li>Compliance reporting</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Secure Your Business?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our fraud detection experts help you protect your organization from financial threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Security Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
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