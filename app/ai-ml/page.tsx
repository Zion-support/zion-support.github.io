'use client';
import React from 'react';
import { Brain, BarChart, TrendingUp, CheckCircle, Star, Users, Award, Zap, Database, Cpu, Target, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIMLPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with advanced ML models',
      features: ['Sales Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Demand Planning'],
      benefits: ['30% better predictions', 'Reduced uncertainty', 'Data-driven decisions']
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored ML models for your specific business needs',
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      benefits: ['Higher accuracy', 'Domain-specific solutions', 'Scalable models']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data processing and model training pipelines',
      features: ['ETL Processes', 'Data Validation', 'Automated Training', 'Model Deployment'],
      benefits: ['Faster processing', 'Reduced errors', 'Automated workflows']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of ML models',
      features: ['Performance Tracking', 'Drift Detection', 'Auto-retraining', 'Alert Systems'],
      benefits: ['Maintained accuracy', 'Proactive updates', 'Reliable performance']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'Recommendation Systems',
      result: '35% increase in conversion rates',
      description: 'Personalized product recommendations based on user behavior and preferences'
    },
    {
      industry: 'Finance',
      application: 'Fraud Detection',
      result: '99.5% fraud detection accuracy',
      description: 'Real-time fraud detection using advanced anomaly detection algorithms'
    },
    {
      industry: 'Healthcare',
      application: 'Diagnostic Assistance',
      result: '40% faster diagnosis',
      description: 'AI-powered medical image analysis and diagnostic support systems'
    },
    {
      industry: 'Manufacturing',
      application: 'Predictive Maintenance',
      result: '60% reduction in downtime',
      description: 'Predict equipment failures before they occur using sensor data analysis'
    }
  ];

  const stats = [
    { label: 'Models Deployed', value: '200+', icon: Brain },
    { label: 'Accuracy Improvement', value: '40%', icon: TrendingUp },
    { label: 'Processing Speed', value: '10x', icon: Zap },
    { label: 'Cost Reduction', value: '50%', icon: Target }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and automated data pipelines. Transform your data into actionable insights."
        keywords={['machine learning', 'predictive analytics', 'ML models', 'data science', 'artificial intelligence', 'custom ML development']}
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
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Transform Your Data into Intelligent Insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our machine learning solutions help businesses unlock the power of their data through 
              predictive analytics, custom model development, and automated intelligence systems.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ML Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Machine Learning Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our ML Development Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Data Analysis', description: 'Analyze your data and identify patterns', icon: Database },
                { step: '2', title: 'Model Design', description: 'Design and select appropriate algorithms', icon: Cpu },
                { step: '3', title: 'Training & Testing', description: 'Train models and validate performance', icon: BarChart },
                { step: '4', title: 'Deployment', description: 'Deploy and monitor in production', icon: Zap }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our ML experts help you build intelligent systems that transform your business.
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