'use client';
import React from 'react';
import { Brain, ArrowRight, CheckCircle, Star, Zap, BarChart, Database, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Build models that predict future outcomes based on historical data',
      icon: BarChart,
      features: ['Sales Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Demand Planning']
    },
    {
      title: 'Custom Model Development',
      description: 'Tailored machine learning models for your specific business needs',
      icon: Brain,
      features: ['Algorithm Selection', 'Model Training', 'Hyperparameter Tuning', 'Performance Optimization']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and model deployment pipelines',
      icon: Database,
      features: ['ETL Processes', 'Real-time Data Processing', 'Model Versioning', 'Automated Retraining']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of deployed models',
      icon: Target,
      features: ['Performance Tracking', 'Drift Detection', 'Automated Alerts', 'Model Updates']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and automated data pipelines. Transform your data into actionable insights."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'custom models', 'data science']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium neon-pulse">
              Transform Your Data into Intelligent Insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our machine learning experts develop custom models and solutions that learn from your data 
              to make accurate predictions, automate decisions, and drive business growth.
            </p>
          </section>

          {/* ML Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our ML Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">
                  PhD-level data scientists with 10+ years of experience in machine learning and AI.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">
                  Our ML models have achieved 95%+ accuracy rates and delivered 300% ROI for clients.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">End-to-End Support</h3>
                <p className="text-gray-300">
                  From data preparation to model deployment and monitoring, we handle everything.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Harness the Power of Machine Learning?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our ML experts today to discuss how machine learning can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIMLPage;