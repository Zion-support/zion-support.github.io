'use client';
import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const MachineLearningPage: React.FC = () => {
  const services = [
    {
      title: 'Predictive Analytics',
      description: 'Build models that forecast future trends and behaviors with high accuracy',
      features: ['Time Series Forecasting', 'Customer Behavior Prediction', 'Sales Forecasting', 'Risk Assessment'],
      icon: BarChart,
      color: 'text-blue-400'
    },
    {
      title: 'Custom Model Development',
      description: 'Tailored machine learning models designed for your specific business needs',
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data processing and preparation for machine learning workflows',
      features: ['Data Collection', 'Data Cleaning', 'Feature Extraction', 'Real-time Processing'],
      icon: Zap,
      color: 'text-green-400'
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of deployed machine learning models',
      features: ['Performance Tracking', 'Drift Detection', 'Model Retraining', 'Alert Systems'],
      icon: Target,
      color: 'text-cyan-400'
    }
  ];

  const benefits = [
    'Predict future trends with 95% accuracy',
    'Reduce operational costs by 40%',
    'Improve decision-making speed by 60%',
    'Automate complex business processes',
    'Gain competitive advantage through data insights'
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and AI infrastructure. Transform your business with data-driven insights."
        keywords={['machine learning', 'predictive analytics', 'AI models', 'data science', 'ML solutions', 'custom AI development']}
        canonicalUrl="https://ziontechgroup.com/machine-learning"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Machine Learning Solutions">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Advanced AI Models for Business Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge machine learning solutions. From predictive analytics 
              to custom AI models, we help you harness the power of data to drive growth and efficiency.
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text text-center">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Why Choose Our ML Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Our Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Data Analysis</h4>
                        <p className="text-sm text-gray-300">Comprehensive analysis of your data landscape</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-white">Model Development</h4>
                        <p className="text-sm text-gray-300">Custom ML models tailored to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Deployment</h4>
                        <p className="text-sm text-gray-300">Seamless integration and deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-white">Monitoring</h4>
                        <p className="text-sm text-gray-300">Continuous monitoring and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Harness the Power of Machine Learning?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our ML experts are ready to help you build custom models that transform your business. 
                Contact us today for a free consultation and discover the potential of your data.
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
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
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

export default MachineLearningPage;