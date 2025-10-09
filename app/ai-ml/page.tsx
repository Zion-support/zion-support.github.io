'use client';
import React from 'react';
import { Brain, BarChart, TrendingUp, Database, Cpu, Target, CheckCircle, ArrowRight, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIMLPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
      features: ['Sales Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Demand Planning'],
      icon: TrendingUp
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored ML models specific to your business needs and data',
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      icon: Brain
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and preparation for ML workflows',
      features: ['ETL Processes', 'Data Validation', 'Real-time Processing', 'Quality Monitoring'],
      icon: Database
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of deployed ML models',
      features: ['Performance Tracking', 'Drift Detection', 'Automated Retraining', 'Alert Systems'],
      icon: BarChart
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'Recommendation Systems',
      benefit: '35% increase in conversion rates',
      description: 'Personalized product recommendations based on user behavior and preferences'
    },
    {
      industry: 'Finance',
      application: 'Fraud Detection',
      benefit: '90% reduction in false positives',
      description: 'Real-time fraud detection using anomaly detection algorithms'
    },
    {
      industry: 'Healthcare',
      application: 'Diagnostic Assistance',
      benefit: '25% faster diagnosis',
      description: 'AI-powered medical image analysis and diagnostic support'
    },
    {
      industry: 'Manufacturing',
      application: 'Predictive Maintenance',
      benefit: '40% reduction in downtime',
      description: 'Predict equipment failures before they occur to prevent costly breakdowns'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and AI automation. Transform your data into actionable insights."
        keywords={['machine learning', 'predictive analytics', 'ML models', 'data science', 'AI automation', 'custom algorithms']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Machine Learning"
              >
                Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI Solutions for Data-Driven Decisions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your data into powerful insights with our machine learning solutions. From predictive analytics 
                to custom model development, we help businesses make smarter decisions using cutting-edge AI technology.
              </p>
            </div>
          </section>

          {/* ML Services */}
          <section className="mb-16" aria-labelledby="ml-services-heading">
            <h2 id="ml-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Machine Learning Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive ML solutions designed to extract maximum value from your data
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {mlServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
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

          {/* Use Cases */}
          <section className="mb-16" aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white neon-text">{useCase.industry}</h3>
                      <p className="text-cyan-400 text-sm">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-green-400 font-semibold text-sm">
                    Result: {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Machine Learning Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Starter</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$1,500/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic ML model development</li>
                  <li>Data preprocessing</li>
                  <li>Model training & validation</li>
                  <li>Basic monitoring</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-cyan-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$3,500/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced ML model development</li>
                  <li>Custom algorithm implementation</li>
                  <li>Real-time model deployment</li>
                  <li>Advanced monitoring & alerting</li>
                  <li>Monthly model optimization</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom ML platform development</li>
                  <li>Multiple model deployment</li>
                  <li>24/7 monitoring & support</li>
                  <li>Dedicated ML team</li>
                  <li>Custom integrations</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Harness the Power of Machine Learning?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our ML experts analyze your data and develop custom machine learning solutions 
                that will transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free ML Consultation
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

export default AIMLPage;