'use client';
import React from 'react';
import { Shield, AlertTriangle, Target, BarChart, Zap, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIFraudDetectionPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Detection',
      description: 'Detect fraudulent activities as they happen with millisecond response times',
      icon: Zap,
      benefits: ['Millisecond response', 'Real-time monitoring', 'Instant alerts']
    },
    {
      title: 'Pattern Recognition',
      description: 'Identify complex fraud patterns using advanced machine learning algorithms',
      icon: Target,
      benefits: ['Complex patterns', 'ML algorithms', 'Adaptive learning']
    },
    {
      title: 'Risk Scoring',
      description: 'Generate risk scores for transactions and user activities',
      icon: BarChart,
      benefits: ['Risk assessment', 'Scoring algorithms', 'Decision support']
    },
    {
      title: 'Alert System',
      description: 'Comprehensive alert system with multiple notification channels',
      icon: AlertTriangle,
      benefits: ['Multi-channel alerts', 'Customizable rules', 'Escalation management']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Fraud Detection - Zion Tech Group"
        description="Advanced AI-powered fraud detection solutions with real-time monitoring, pattern recognition, and risk scoring. Protect your business from fraudulent activities."
        keywords={['fraud detection', 'AI security', 'risk management', 'fraud prevention', 'security monitoring', 'fraud analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-fraud-detection"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Fraud Detection
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business from fraudulent activities with our advanced AI-powered fraud detection system. 
              Real-time monitoring, pattern recognition, and risk scoring to keep you secure.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,900/month</div>
            <p className="text-gray-300">Advanced fraud detection and prevention</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Fraud Detection Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-red-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Secure Your Business with AI Fraud Detection</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our fraud detection system achieves 99.9% accuracy and reduces false positives by 85%. 
                Protect your business with the most advanced fraud prevention technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Secure Your Business
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