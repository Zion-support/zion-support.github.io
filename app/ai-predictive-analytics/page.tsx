'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart3, Brain, Target, Zap, Shield, Clock, Users, Star, ArrowRight, Database, Cpu, Eye, Globe, Lock } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Forecasting Models',
      description: 'Machine learning models that predict future trends with 95%+ accuracy',
      benefits: ['Time Series Analysis', 'Seasonal Pattern Recognition', 'Anomaly Detection', 'Confidence Intervals']
    },
    {
      icon: Brain,
      title: 'Real-time Predictions',
      description: 'Instant predictions based on live data streams and historical patterns',
      benefits: ['Live Data Processing', 'Stream Analytics', 'Real-time Alerts', 'Dynamic Updates']
    },
    {
      icon: Target,
      title: 'Custom Model Training',
      description: 'Tailored models trained on your specific data and business requirements',
      benefits: ['Custom Algorithms', 'Domain Expertise', 'Data Preprocessing', 'Model Validation']
    },
    {
      icon: Database,
      title: 'Multi-Source Data Integration',
      description: 'Connect and analyze data from multiple sources for comprehensive insights',
      benefits: ['API Integrations', 'Database Connections', 'File Processing', 'Cloud Storage']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'Demand Forecasting',
      description: 'Predict product demand to optimize inventory and reduce stockouts',
      roi: '40% reduction in inventory costs'
    },
    {
      industry: 'Finance',
      application: 'Risk Assessment',
      description: 'Predict credit risk and market volatility for better investment decisions',
      roi: '60% improvement in risk accuracy'
    },
    {
      industry: 'Healthcare',
      application: 'Patient Outcomes',
      description: 'Predict patient health outcomes and treatment effectiveness',
      roi: '35% improvement in patient care'
    },
    {
      industry: 'Manufacturing',
      application: 'Predictive Maintenance',
      description: 'Predict equipment failures before they occur to minimize downtime',
      roi: '50% reduction in maintenance costs'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with predictive analytics',
      features: [
        'Up to 10,000 predictions/month',
        '3 data source connections',
        'Basic forecasting models',
        'Email support',
        'Standard accuracy (85-90%)',
        'Monthly reports'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing businesses with complex data needs',
      features: [
        'Up to 100,000 predictions/month',
        '10 data source connections',
        'Advanced ML models',
        'Priority support',
        'High accuracy (90-95%)',
        'Real-time dashboards',
        'Custom model training',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-scale solution for large enterprises with unlimited requirements',
      features: [
        'Unlimited predictions',
        'Unlimited data sources',
        'Custom AI models',
        '24/7 dedicated support',
        'Maximum accuracy (95%+)',
        'Custom dashboards',
        'White-label solution',
        'On-premise deployment',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI predictive analytics solutions with 95%+ accuracy. Real-time forecasting, custom models, and multi-source data integration for businesses of all sizes." />
        <meta name="keywords" content="AI predictive analytics, machine learning, forecasting, data science, business intelligence, predictive modeling" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI Predictive Analytics</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Predict the Future with
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> AI Analytics</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with advanced AI predictive analytics. Get 95%+ accurate forecasts, 
                real-time insights, and custom models tailored to your industry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive analytics platform combines cutting-edge machine learning with 
                intuitive interfaces to deliver actionable insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI predictive analytics is transforming businesses across industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-purple-400 font-semibold text-sm mb-2">{useCase.industry}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.application}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.roi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/10 hover:border-purple-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border border-purple-500 text-purple-300 hover:bg-purple-500/20'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-2xl p-12 border border-purple-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Predict Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses using AI predictive analytics to make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get Started Today</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;