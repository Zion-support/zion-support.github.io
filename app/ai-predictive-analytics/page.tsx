'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, TrendingUp, BarChart, Target, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Clock, Users, Award, Globe, Database, Cpu, Eye, BarChart3, PieChart, LineChart, Activity } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced ML Models',
      description: 'State-of-the-art machine learning algorithms for accurate predictions',
      details: ['Deep Learning Networks', 'Ensemble Methods', 'Time Series Analysis', 'Anomaly Detection']
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live data processing and instant insights for immediate decision making',
      details: ['Stream Processing', 'Real-time Dashboards', 'Live Alerts', 'Instant Notifications']
    },
    {
      icon: Target,
      title: 'Custom Predictions',
      description: 'Tailored predictive models for your specific business needs and industry',
      details: ['Industry-specific Models', 'Custom Algorithms', 'Business Logic Integration', 'Domain Expertise']
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Maximize returns with data-driven insights and predictive recommendations',
      details: ['Revenue Forecasting', 'Cost Optimization', 'Risk Assessment', 'Performance Metrics']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      icon: Globe,
      applications: ['Demand Forecasting', 'Customer Lifetime Value', 'Inventory Optimization', 'Price Optimization'],
      roi: '340%'
    },
    {
      industry: 'Finance',
      icon: BarChart,
      applications: ['Credit Risk Assessment', 'Fraud Detection', 'Market Prediction', 'Portfolio Optimization'],
      roi: '280%'
    },
    {
      industry: 'Healthcare',
      icon: Shield,
      applications: ['Patient Risk Stratification', 'Drug Discovery', 'Treatment Optimization', 'Resource Planning'],
      roi: '420%'
    },
    {
      industry: 'Manufacturing',
      icon: Cpu,
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning'],
      roi: '380%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with predictive analytics',
      features: [
        'Up to 10,000 data points',
        '3 predictive models',
        'Basic dashboards',
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
      description: 'Advanced analytics for growing businesses with complex data needs',
      features: [
        'Up to 100,000 data points',
        'Unlimited predictive models',
        'Advanced dashboards & visualizations',
        'Priority support',
        'High accuracy (90-95%)',
        'Real-time analytics',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large enterprises with mission-critical analytics',
      features: [
        'Unlimited data points',
        'Unlimited predictive models',
        'Custom dashboards & reports',
        '24/7 dedicated support',
        'Maximum accuracy (95-99%)',
        'Real-time & batch processing',
        'Full API access',
        'White-label solutions',
        'On-premise deployment',
        'Custom model development'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Data Science',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s predictive analytics platform increased our forecast accuracy by 40% and helped us reduce inventory costs by $2M annually.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'FinanceFlow',
      content: 'The AI-powered risk assessment models have been game-changing for our lending business. We\'ve seen a 60% reduction in bad loans.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Medical Officer',
      company: 'HealthFirst Medical',
      content: 'Patient outcome predictions have improved our treatment protocols significantly. The ROI has been exceptional.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI predictive analytics solutions with 95%+ accuracy. Real-time insights, custom ML models, and industry-specific predictions. Starting at $299/month." />
        <meta name="keywords" content="predictive analytics, machine learning, AI predictions, data science, forecasting, business intelligence, real-time analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Predictive Analytics</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Predict the Future with
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Analytics
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into powerful predictions with our advanced AI analytics platform. 
            Achieve 95%+ accuracy in forecasting and make data-driven decisions that drive growth.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%+</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$2M+</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Predictive Analytics Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{useCase.roi}</span>
                  <span className="text-gray-300 ml-2">Average ROI</span>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Predict Your Success?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of companies using our AI predictive analytics to make smarter decisions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Predictive Analytics Demo Request"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPredictiveAnalyticsPage;