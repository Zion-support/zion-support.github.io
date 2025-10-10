'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Eye, Users, Clock, Star } from 'lucide-react';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Advanced AI-powered analytics that provide real-time insights and predictions.',
      benefits: ['Real-time processing', 'Predictive analytics', 'Data visualization', 'Performance monitoring']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that discover patterns and generate actionable insights.',
      benefits: ['Pattern recognition', 'Predictive modeling', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: Target,
      title: 'Business Intelligence',
      description: 'Comprehensive business intelligence solutions for data-driven decision making.',
      benefits: ['Executive dashboards', 'KPI tracking', 'Trend analysis', 'Strategic planning']
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Monitor and analyze business performance with advanced metrics and reporting.',
      benefits: ['Performance metrics', 'ROI analysis', 'Efficiency tracking', 'Optimization insights']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources for comprehensive analysis.',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes', 'Data quality assurance']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced machine learning models.',
      benefits: ['Trend forecasting', 'Risk prediction', 'Demand planning', 'Scenario analysis']
    }
  ];

  const benefits = [
    'Increase data accuracy by 95%',
    'Improve decision-making by 80%',
    'Reduce analysis time by 70%',
    'Increase revenue by 40%',
    'Enable real-time insights',
    'Automate reporting',
    'Scale analytics operations',
    'Enhance business performance'
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights and strategic recommendations',
      icon: '📊'
    },
    {
      title: 'Marketing Analytics',
      description: 'Analyze marketing campaigns and customer behavior for better ROI',
      icon: '📈'
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and identify growth opportunities',
      icon: '💰'
    },
    {
      title: 'Operations Analytics',
      description: 'Optimize operations and improve efficiency with data-driven insights',
      icon: '⚙️'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences for better engagement',
      icon: '👥'
    },
    {
      title: 'Risk Analytics',
      description: 'Identify and mitigate business risks with predictive analytics',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group | Advanced Analytics Solutions</title>
        <meta name="description" content="Advanced AI data analytics solutions with real-time insights, predictive analytics, and business intelligence. Transform your data into actionable insights with intelligent analytics." />
        <meta name="keywords" content="AI data analytics, business intelligence, predictive analytics, data insights, analytics AI, data visualization" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Data Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI data analytics solutions with real-time insights, predictive analytics, 
              and business intelligence. Transform your data into actionable insights with intelligent analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
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
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent data analytics powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business with intelligent data analytics
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
                Why Choose Our Data Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of organizations using our AI Data Analytics
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIDataAnalyticsPage;