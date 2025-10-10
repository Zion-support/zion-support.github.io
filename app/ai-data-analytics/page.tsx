'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, TrendingUp, Database, PieChart, Target, Users, Clock, DollarSign, Search, Filter, Download, Share2, Eye, Settings, AlertCircle } from 'lucide-react';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Get instant insights with real-time data processing and visualization that updates as your business changes.',
      benefits: ['Live data streaming', 'Instant updates', 'Real-time dashboards', 'Performance monitoring']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Forecast future trends, customer behavior, and business outcomes using advanced machine learning models.',
      benefits: ['Trend forecasting', 'Customer prediction', 'Risk assessment', 'Revenue forecasting']
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Automatically segment your customers and data using AI to identify patterns and opportunities.',
      benefits: ['Customer segmentation', 'Behavioral analysis', 'Pattern recognition', 'Opportunity identification']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources including CRM, ERP, social media, and web analytics.',
      benefits: ['Multi-source integration', 'Data unification', 'Automated ETL', 'Data quality assurance']
    },
    {
      icon: PieChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that make complex data easy to understand and act upon.',
      benefits: ['Custom dashboards', 'Interactive visualizations', 'Drill-down capabilities', 'Mobile responsive']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI automatically identifies anomalies, trends, and opportunities in your data without manual analysis.',
      benefits: ['Anomaly detection', 'Auto-generated reports', 'Smart alerts', 'Insight recommendations']
    }
  ];

  const benefits = [
    'Increase data accuracy by 95%',
    'Reduce analysis time by 80%',
    'Improve decision making by 300%',
    'Save 50+ hours per week',
    'Identify hidden opportunities',
    'Predict future trends',
    'Automate reporting',
    'Scale analytics operations'
  ];

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline analysis, and revenue forecasting',
      icon: '📈'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, lifetime value, and churn prediction',
      icon: '👥'
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure campaign performance, ROI analysis, and attribution modeling',
      icon: '📊'
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial health, budget analysis, and cost optimization',
      icon: '💰'
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations, resource allocation, and efficiency metrics',
      icon: '⚙️'
    },
    {
      title: 'Risk Analytics',
      description: 'Identify risks, fraud detection, and compliance monitoring',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics. Real-time dashboards, predictive analytics, and automated insights for better business decisions." />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data visualization, AI insights, data analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Data Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered analytics. 
                Real-time dashboards, predictive analytics, and automated insights for better business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Analytics Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Powerful AI-driven analytics tools that transform raw data into actionable business insights
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
                  Analytics Applications
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  From sales to operations, our AI analytics solutions serve diverse business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our AI Analytics?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Experience the future of data analysis with our revolutionary AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Join thousands of businesses already using our AI Analytics solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIDataAnalyticsPage;