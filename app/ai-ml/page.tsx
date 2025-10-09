'use client';
import React, { useState, useEffect } from 'react';
import { Brain, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Camera, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, Cpu, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIMLPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const mlSolutions = [
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
      icon: TrendingUp,
      features: ['Demand Forecasting', 'Customer Behavior Prediction', 'Risk Assessment', 'Sales Forecasting'],
      benefits: ['30% better predictions', 'Reduced uncertainty', 'Data-driven decisions', 'Competitive advantage']
    },
    {
      title: 'Custom Model Development',
      description: 'Build tailored machine learning models for your specific business needs',
      icon: Code,
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      benefits: ['Higher accuracy', 'Domain-specific insights', 'Scalable solutions', 'Custom requirements']
    },
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data collection, processing, and preparation for ML workflows',
      icon: Database,
      features: ['Data Ingestion', 'ETL Processes', 'Data Validation', 'Real-time Processing'],
      benefits: ['Automated workflows', 'Data quality assurance', 'Reduced manual work', 'Scalable processing']
    },
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and maintenance of deployed machine learning models',
      icon: Activity,
      features: ['Performance Tracking', 'Drift Detection', 'Automated Retraining', 'Alert Systems'],
      benefits: ['Maintained accuracy', 'Proactive maintenance', 'Reduced downtime', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,200',
      period: '/month',
      description: 'Perfect for small businesses getting started with ML',
      features: [
        'Basic predictive models',
        'Standard data processing',
        'Email support',
        'Monthly model updates',
        'Basic analytics dashboard'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,500',
      period: '/month',
      description: 'Ideal for growing businesses with complex ML needs',
      features: [
        'Advanced ML algorithms',
        'Custom model development',
        'Priority support',
        'Weekly model updates',
        'Advanced analytics dashboard',
        'API integration',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive ML solution for large enterprises',
      features: [
        'Full ML pipeline setup',
        'Custom algorithm development',
        '24/7 dedicated support',
        'Real-time model updates',
        'Enterprise analytics suite',
        'Full API access',
        'Advanced monitoring & alerting',
        'Dedicated ML engineer',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and data pipeline setup. Transform your data into actionable insights with our ML expertise."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'custom models', 'data pipeline', 'artificial intelligence', 'ML algorithms', 'model development']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Machine Learning Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Advanced machine learning solutions including predictive analytics, custom model development, and data pipeline setup.',
          serviceType: 'Machine Learning Services',
          areaServed: 'US',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://ziontechgroup.com/ai-ml',
            servicePhone: '+1-302-464-0950'
          }
        }}
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
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="Machine Learning"
              >
                Machine Learning
              </h1>
              <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Transform Your Data into Intelligent Insights
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leverage the power of machine learning to predict trends, automate decisions, and unlock hidden patterns in your data. 
                Our ML solutions are designed to drive business growth and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* ML Solutions Section */}
          <section className="mb-16" aria-labelledby="ml-solutions-heading">
            <h2 id="ml-solutions-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Machine Learning Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive machine learning services tailored to your business needs
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {mlSolutions.map((solution, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Choose the perfect machine learning solution for your business
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Machine Learning Plan`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our ML Solutions */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Machine Learning Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert ML Team</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team of data scientists and ML engineers have years of experience in building and deploying production-ready machine learning models.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We've helped businesses achieve 30% better predictions, 50% faster insights, and 40% cost reduction through our ML solutions.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bank-level security and compliance for your data and models with SOC 2 Type II certification and advanced encryption.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Harness the Power of Machine Learning?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
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
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
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