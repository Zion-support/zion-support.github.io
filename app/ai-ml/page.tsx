'use client';
import React from 'react';
import { Brain, TrendingUp, BarChart, Target, Database, Zap } from 'lucide-react';
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
      description: 'Forecast future trends and behaviors with advanced machine learning models',
      icon: TrendingUp,
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift']
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored ML models for your specific business requirements',
      icon: Brain,
      features: ['Algorithm Selection', 'Model Training', 'Hyperparameter Tuning', 'Performance Optimization'],
      benefits: ['90% accuracy', 'Faster processing', 'Custom solutions']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and preparation for ML workflows',
      icon: Database,
      features: ['Data Ingestion', 'ETL Processes', 'Data Validation', 'Real-time Processing'],
      benefits: ['80% automation', 'Real-time insights', 'Data quality assurance']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of deployed ML models',
      icon: BarChart,
      features: ['Performance Tracking', 'Drift Detection', 'Model Retraining', 'Alert Systems'],
      benefits: ['99.9% uptime', 'Proactive maintenance', 'Continuous improvement']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, data pipelines, and model monitoring. Transform your data into actionable insights."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'custom models', 'data pipelines', 'model monitoring']}
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
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our machine learning solutions help you unlock the power of your data with advanced algorithms, 
              predictive analytics, and intelligent automation that drives real business value.
            </p>
          </section>

          {/* ML Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
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

          {/* ML Process */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Machine Learning Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">1. Data Analysis</h3>
                <p className="text-gray-300">Comprehensive analysis of your data to identify patterns and opportunities.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">2. Model Development</h3>
                <p className="text-gray-300">Custom ML model development tailored to your specific business needs.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">3. Training & Testing</h3>
                <p className="text-gray-300">Rigorous training and testing to ensure optimal model performance.</p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">4. Deployment</h3>
                <p className="text-gray-300">Seamless deployment with continuous monitoring and optimization.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our ML experts help you build intelligent solutions that transform your data into competitive advantages.
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