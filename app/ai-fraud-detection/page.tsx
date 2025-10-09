'use client';
import React from 'react';
import { Shield, Eye, AlertTriangle, BarChart, Zap, Lock, Target, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFraudDetectionPage: React.FC = () => {
  const fraudServices = [
    {
      title: 'Real-time Detection',
      description: 'AI-powered fraud detection that identifies threats in real-time',
      icon: Eye,
      features: ['Instant Analysis', 'Pattern Recognition', 'Behavioral Analysis', 'Risk Scoring']
    },
    {
      title: 'Pattern Recognition',
      description: 'Advanced algorithms that identify fraudulent patterns and anomalies',
      icon: Brain,
      features: ['Machine Learning Models', 'Anomaly Detection', 'Historical Analysis', 'Predictive Modeling']
    },
    {
      title: 'Risk Scoring',
      description: 'Comprehensive risk assessment and scoring for all transactions',
      icon: BarChart,
      features: ['Dynamic Scoring', 'Multi-factor Analysis', 'Threshold Management', 'Custom Rules']
    },
    {
      title: 'Alert System',
      description: 'Intelligent alerting system that notifies you of potential fraud',
      icon: AlertTriangle,
      features: ['Smart Notifications', 'Escalation Rules', 'Dashboard Alerts', 'Mobile Notifications']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI fraud detection solutions with real-time monitoring, pattern recognition, and risk scoring. Protect your business from fraudulent activities."
        keywords={['AI fraud detection', 'fraud prevention', 'risk scoring', 'pattern recognition', 'real-time monitoring', 'security']}
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-red-400 mb-8 font-medium">
              Protect Your Business from Fraud
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Advanced AI-powered fraud detection that identifies and prevents fraudulent activities in real-time. 
              Protect your business with cutting-edge machine learning and behavioral analysis.
            </p>
          </section>

          {/* Fraud Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fraudServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Fraud Detection?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced AI</h3>
                <p className="text-gray-300">State-of-the-art machine learning models that adapt and learn from new fraud patterns.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Protection</h3>
                <p className="text-gray-300">Instant fraud detection that stops threats before they can cause damage.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Analytics</h3>
                <p className="text-gray-300">Detailed insights and reporting to help you understand and prevent fraud.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Protect Your Business?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our fraud detection experts help you build a robust defense against fraudulent activities. 
              Get a free security assessment and discover how we can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIFraudDetectionPage;