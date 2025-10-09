'use client';
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { BarChart3, Brain, TrendingUp, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react';
=======
import { BarChart, Brain, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Users, Clock, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/website-audit-and-update-with-deployment-572b

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting that predicts future trends and outcomes with 95% accuracy',
      benefits: ['Revenue forecasting', 'Demand prediction', 'Risk assessment']
    },
    {
      icon: BarChart3,
      title: 'Real-time Insights',
      description: 'Get instant insights from your data with advanced visualization and reporting',
      benefits: ['Live dashboards', 'Custom reports', 'Automated alerts']
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business intelligence and strategic insights',
      benefits: ['Performance metrics', 'Competitive analysis', 'Market trends']
=======
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track KPIs and performance metrics with advanced analytics and benchmarking.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Benchmarking', 'Performance alerts']
>>>>>>> cursor/website-audit-and-update-with-deployment-572b
    }
  ];

  const analyticsTypes = [
    {
<<<<<<< HEAD
      title: 'Customer Analytics',
      description: 'Understand customer behavior, preferences, and lifetime value',
      icon: Users,
      metrics: ['Customer segmentation', 'Churn prediction', 'Lifetime value analysis']
    },
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial analysis and forecasting capabilities',
      icon: TrendingUp,
      metrics: ['Revenue analysis', 'Cost optimization', 'Profit forecasting']
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations with data-driven insights and recommendations',
      icon: Zap,
      metrics: ['Process optimization', 'Resource allocation', 'Efficiency metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Analytics Dashboard
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of your data with our advanced AI analytics platform. 
              Get real-time insights, predictive analytics, and actionable business intelligence 
              that drives growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Analytics Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced AI Analytics Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform combines machine learning, data visualization, 
              and business intelligence to deliver insights that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends.',
      icon: TrendingUp,
      metrics: ['Revenue tracking', 'Sales forecasting', 'Pipeline analysis', 'Conversion rates']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure marketing campaign effectiveness and ROI.',
      icon: Target,
      metrics: ['Campaign performance', 'Lead generation', 'Customer acquisition', 'ROI analysis']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences.',
      icon: Users,
      metrics: ['Customer segmentation', 'Behavior analysis', 'Retention rates', 'Lifetime value']
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial health and profitability.',
      icon: BarChart,
      metrics: ['Revenue analysis', 'Cost tracking', 'Profit margins', 'Cash flow']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 dashboards',
        'Basic AI insights',
        'Standard reports',
        'Email support',
        '1,000 data points/month',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 dashboards',
        'Advanced AI insights',
        'Custom reports',
        'Priority support',
        '10,000 data points/month',
        'Advanced integrations',
        'API access',
        'Custom metrics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited dashboards',
        'Full AI suite',
        'White-label reports',
        '24/7 dedicated support',
        'Unlimited data points',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Facebook Ads', icon: '📱' },
    { name: 'Google Ads', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI-Powered Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our intelligent analytics platform. Make data-driven decisions with AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg">
                View Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-gray-300">Everything you need to understand your business data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> cursor/website-audit-and-update-with-deployment-572b
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Analytics Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer insights to financial forecasting, our AI analytics covers every aspect of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {metric}
                    </li>
=======
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverage</h2>
            <p className="text-xl text-gray-300">Track every aspect of your business with specialized analytics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-1">
                  {type.metrics.map((metric, idx) => (
                    <li key={idx} className="text-sm text-gray-400">• {metric}</li>
>>>>>>> cursor/website-audit-and-update-with-deployment-572b
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Analytics?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-300">Make informed decisions based on real-time data and AI predictions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                    <p className="text-gray-300">Bank-level security with full compliance and data protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-Time Processing</h3>
                    <p className="text-gray-300">Get instant insights with real-time data processing and analysis</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready for Advanced Analytics?</h3>
              <p className="text-gray-300 mb-6">
                Transform your data into competitive advantage with our AI-powered analytics platform. 
                Get started with a free consultation.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Start Your Analytics Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let valuable insights hide in your data. Our AI analytics platform 
            will help you discover patterns, predict trends, and make smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
=======
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-300">Connect with your favorite tools and platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="cyber-card p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using AI analytics to make smarter decisions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-572b
    </div>
  );
};

<<<<<<< HEAD
export default AIAnalyticsPage;
=======
export default AIAnalyticsPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-572b
