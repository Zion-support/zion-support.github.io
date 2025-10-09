'use client';
import React from 'react';
import { Brain, BarChart, Target, Zap, Database, TrendingUp, Shield, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  const mlServices = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
      icon: BarChart,
      features: ['Sales Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Market Analysis']
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored ML models for your specific business requirements',
      icon: Brain,
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and model deployment pipelines',
      icon: Database,
      features: ['ETL Processes', 'Real-time Data Processing', 'Model Versioning', 'Automated Retraining']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of deployed ML models',
      icon: Shield,
      features: ['Performance Tracking', 'Drift Detection', 'Alert Systems', 'Model Updates']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and automated data pipelines. Transform your data into actionable insights."
        keywords={['machine learning', 'predictive analytics', 'ML models', 'data science', 'AI consulting', 'custom algorithms']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium">
              Transform Data into Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Leverage the power of machine learning to unlock insights from your data, 
              predict future outcomes, and automate complex decision-making processes.
            </p>
          </section>

          {/* ML Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mlServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our ML Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Data-Driven Insights</h3>
                <p className="text-gray-300">Extract meaningful patterns and predictions from your data to drive better business decisions.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Automated Intelligence</h3>
                <p className="text-gray-300">Reduce manual analysis and automate complex decision-making processes with intelligent algorithms.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-300">Tailored ML models designed specifically for your business needs and industry requirements.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our ML experts help you build intelligent systems that transform your data into competitive advantages. 
              Get a free consultation and discover the potential of machine learning for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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

export default AIMLPage;