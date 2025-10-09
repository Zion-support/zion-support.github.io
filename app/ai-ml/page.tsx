'use client';
import React from 'react';
import { Brain, BarChart, Database, Cpu, ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
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
      description: 'Build models that predict future outcomes based on historical data',
      icon: BarChart,
      features: ['Time Series Forecasting', 'Risk Assessment', 'Demand Prediction', 'Customer Behavior Analysis'],
      benefits: ['30% improvement in forecasting accuracy', 'Reduced inventory costs', 'Better decision making']
    },
    {
      title: 'Custom Model Development',
      description: 'Tailored machine learning models for your specific business needs',
      icon: Brain,
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Hyperparameter Tuning'],
      benefits: ['Higher accuracy than off-the-shelf solutions', 'Domain-specific optimization', 'Competitive advantage']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'End-to-end data processing pipelines for ML workflows',
      icon: Database,
      features: ['Data Ingestion', 'Data Cleaning', 'Feature Store', 'Model Serving'],
      benefits: ['Automated data processing', 'Scalable infrastructure', 'Real-time predictions']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of ML models in production',
      icon: Cpu,
      features: ['Performance Tracking', 'Drift Detection', 'A/B Testing', 'Model Retraining'],
      benefits: ['Maintained model performance', 'Early issue detection', 'Continuous improvement']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Recommendation engines, demand forecasting, and customer segmentation',
      results: '40% increase in conversion rates'
    },
    {
      industry: 'Finance',
      description: 'Fraud detection, credit scoring, and algorithmic trading',
      results: '60% reduction in false positives'
    },
    {
      industry: 'Healthcare',
      description: 'Medical diagnosis, drug discovery, and patient monitoring',
      results: '25% improvement in diagnostic accuracy'
    },
    {
      industry: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      results: '35% reduction in downtime'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, data pipelines, and model monitoring for enterprise applications."
        keywords={['machine learning', 'predictive analytics', 'ML models', 'data science', 'AI development']}
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
          <section className="text-center mb-16" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Machine Learning"
              >
                Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Advanced ML Solutions for Enterprise
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your data into actionable insights with our comprehensive machine learning solutions. 
                From predictive analytics to custom model development, we help businesses leverage AI for competitive advantage.
              </p>
            </div>
          </section>

          {/* ML Services Section */}
          <section className="mb-16" aria-labelledby="ml-services-heading">
            <h2 id="ml-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Machine Learning Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              End-to-end machine learning solutions tailored to your business needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
                          <ArrowRight className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0" />
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
          <section className="mb-16" aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Industry Use Cases
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Real-world applications across various industries
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {useCases.map((useCase, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold text-sm">
                      {useCase.results}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our ML Solutions */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our ML Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Data Scientists</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  PhD-level data scientists with 10+ years of experience in machine learning and AI
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Methodology</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Rigorous approach to model development with 95% accuracy on average across projects
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ROI Focused</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Average 300% ROI with measurable business impact and cost savings
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Leverage Machine Learning?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
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