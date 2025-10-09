'use client';
import React from 'react';
import { Brain, BarChart, TrendingUp, Database, Cpu, Target, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIMLPage: React.FC = () => {
  const features = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
      icon: TrendingUp,
      benefits: ['Sales forecasting', 'Demand prediction', 'Risk assessment', 'Market analysis']
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored ML models specifically designed for your business needs',
      icon: Brain,
      benefits: ['Custom algorithms', 'Domain-specific models', 'Performance optimization', 'Continuous learning']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and preparation for ML workflows',
      icon: Database,
      benefits: ['Real-time data ingestion', 'Data cleaning', 'Feature engineering', 'Model training automation']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of deployed ML models',
      icon: Shield,
      benefits: ['Performance tracking', 'Drift detection', 'Automatic retraining', 'Alert systems']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'Recommendation Systems',
      description: 'Increase sales by 35% with personalized product recommendations',
      icon: Target
    },
    {
      industry: 'Finance',
      application: 'Fraud Detection',
      description: 'Reduce false positives by 60% while maintaining 99.9% accuracy',
      icon: Shield
    },
    {
      industry: 'Healthcare',
      application: 'Diagnostic Assistance',
      description: 'Improve diagnostic accuracy by 40% with AI-powered medical imaging',
      icon: Brain
    },
    {
      industry: 'Manufacturing',
      application: 'Predictive Maintenance',
      description: 'Reduce downtime by 50% with intelligent equipment monitoring',
      icon: Cpu
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Custom machine learning models for predictive analytics, recommendation systems, fraud detection, and business intelligence. Expert ML consulting and implementation."
        keywords={['machine learning', 'ML models', 'predictive analytics', 'AI consulting', 'data science', 'ML implementation']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium">
              Custom ML Models for Predictive Analytics and Business Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your data into actionable insights with our advanced machine learning solutions. 
              From predictive analytics to recommendation systems, we build custom ML models that drive 
              real business value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get ML Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Machine Learning Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
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

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{useCase.industry}</h3>
                  <h4 className="text-purple-400 font-semibold mb-3">{useCase.application}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Machine Learning Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Starter</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic ML model development</li>
                  <li>Data preprocessing</li>
                  <li>Model training & validation</li>
                  <li>Basic monitoring</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-purple-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$3,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced ML model development</li>
                  <li>Custom algorithm design</li>
                  <li>Real-time data processing</li>
                  <li>Advanced monitoring & alerts</li>
                  <li>Priority support</li>
                  <li>Model optimization</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom ML platform</li>
                  <li>Multiple model deployment</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated ML team</li>
                  <li>Custom integrations</li>
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
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our ML experts help you identify opportunities and build custom models that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your ML Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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

export default AIMLPage;