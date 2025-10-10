'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
=======
import { Brain, BarChart, Target, Zap, CheckCircle, Phone } from 'lucide-react';;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const $1: React.FC = () => {
  const services = [,
    {,
      title: 'Predictive Analytics',
      description: 'Build models that forecast future trends and behaviors with high accuracy',
      features: ['Time Series Forecasting', 'Customer Behavior Prediction', 'Sales Forecasting', 'Risk Assessment'],
      icon: BarChart,
      color: 'text-blue-400'},
    {
      title: 'Custom Model Development',
      description: 'Tailored machine learning models designed for your specific business needs',
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      icon: Brain,
      color: 'text-purple-400'},
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data processing and preparation for machine learning workflows',
      features: ['Data Collection', 'Data Cleaning', 'Feature Extraction', 'Real-time Processing'],
      icon: Zap,
      color: 'text-green-400'},
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of deployed machine learning models',
      features: ['Performance Tracking', 'Drift Detection', 'Model Retraining', 'Alert Systems'],
      icon: Target,
      color: 'text-cyan-400'}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
=======
  return(<>
      <SEOOptimizer;
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and AI infrastructure. Transform your business with data-driven insights."
        keywords={['machine learning', 'predictive analytics', 'AI models', 'data science', 'ML solutions', 'custom AI development']}
        canonicalUrl="https: //ziontechgroup.com/machine-learning",
      />,
      <PerformanceOptimizer;
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
</div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
        <Navigation />

        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Machine Learning Solutions">Machine Learning Solutions</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Advanced AI Models for Business Intelligence</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your business with cutting-edge machine learning solutions. From predictive analytics</p>
              to custom AI models, we help you harness the power of data to drive growth and efficiency.</p>
            </p>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service, index) => (</div>
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Machine Learning Solutions">
              Machine Learning Solutions;</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
=======
          </section>

          {/* Services */})
          <section className="mb-16">)
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services</h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {services.map((service, index) => (</div>
                <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300">,</div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service, index) => (</section>
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text text-center">{service.title}</h3><p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.description}</p><ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
          {/* Benefits */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Why Choose Our ML Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits<ul className="space-y-3">{benefits.map((benefit, index) => (</ul>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
                <div>,</div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3>,
                  <ul className="space-y-3">,
                    {benefits.map((benefit, index) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3><ul className="space-y-3">{benefits.map((benefit, index) => (</ul>
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Our Approach</h3>
                  <div className="space-y-4"></div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Data Analysis<p className="text-sm text-gray-300">Comprehensive analysis of your data landscape</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Model Development<p className="text-sm text-gray-300">Custom ML models tailored to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Deployment<p className="text-sm text-gray-300">Seamless integration and deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Monitoring<p className="text-sm text-gray-300">Continuous monitoring and optimization</p>
                      </div>
                    </div>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2><p className="text-lg text-gray-300 mb-8">Our ML experts are ready to help you build custom models that transform your business.</p>
                Contact us today for a free consultation and discover the potential of your data.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <a;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Get Free Consultation</a>
                >
                  Get Free Consultation;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
                </Phone>
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950;
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;