'use client';
import React from 'react';
import { Brain, BarChart, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  const features = [
    'Custom Model Development',
    'Predictive Analytics',
    'Data Pipeline Setup',
    'Model Monitoring & Optimization',
    'Real-time Inference',
    'A/B Testing Framework',
    'Model Versioning',
    'Performance Metrics Dashboard'
  ];

  const benefits = [
    '40% improvement in prediction accuracy',
    '60% reduction in manual data processing',
    '85% faster decision making',
    '90% cost savings on data analysis'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales with 95% accuracy using historical data and market trends',
      icon: '📈'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Identify at-risk customers and implement retention strategies',
      icon: '👥'
    },
    {
      title: 'Demand Planning',
      description: 'Optimize inventory levels and reduce stockouts with demand forecasting',
      icon: '📦'
    },
    {
      title: 'Fraud Detection',
      description: 'Detect fraudulent transactions in real-time with 99.9% accuracy',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Custom machine learning models for predictive analytics, data insights, and automated decision-making. Transform your data into actionable intelligence."
        keywords={['machine learning', 'ML models', 'predictive analytics', 'data science', 'AI consulting', 'custom ML solutions']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium">
              Transform Your Data Into Intelligent Insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our machine learning solutions help you build custom models that learn from your data, 
              make accurate predictions, and automate complex decision-making processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.split(' ')[0]}</div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Common Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic ML Model Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Data Pipeline Setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Monthly Model Updates
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center ring-2 ring-purple-400">
                <div className="bg-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$3,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced ML Models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Real-time Inference
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    A/B Testing Framework
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Performance Monitoring
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">Custom<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom ML Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Team
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Integrations
                  </li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Contact Us</a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Harness the Power of Machine Learning?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our ML experts help you build intelligent solutions that transform your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
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