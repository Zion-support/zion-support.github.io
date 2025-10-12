'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign, Building, BarChart, PieChart, LineChart, Activity } from 'lucide-react';

export default function BusinessIntelligencePage() {
  const biFeatures = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: 'Advanced Analytics',
      description: 'Powerful data analytics with machine learning algorithms for predictive insights.',
      benefits: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,
      title: 'AI-Powered Insights',
      description: 'Intelligent data analysis using AI to uncover hidden patterns and opportunities.',
      benefits: ['Pattern Recognition', 'Anomaly Detection', 'Automated Insights', 'Smart Recommendations']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance for sensitive data.',
      benefits: ['End-to-End Encryption', 'Access Controls', 'Audit Trails', 'GDPR Compliance']
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time for instant decision-making capabilities.',
      benefits: ['Live Data Streams', 'Instant Updates', 'Real-time Alerts', 'Dynamic Dashboards']
    }
  ];

  const biSolutions = [
    {
      category: 'Data Visualization',
      icon: <PieChart className="w-6 h-6 text-cyan-400" />,
      description: 'Interactive dashboards and visualizations that make complex data easy to understand.',
      tools: ['Tableau', 'Power BI', 'Grafana', 'D3.js', 'Chart.js']
    },
    {
      category: 'Data Warehousing',
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      description: 'Centralized data storage and management for efficient querying and analysis.',
      tools: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse', 'Databricks']
    },
    {
      category: 'ETL/ELT Processing',
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      description: 'Extract, transform, and load data from multiple sources into your BI platform.',
      tools: ['Apache Airflow', 'Talend', 'Informatica', 'Fivetran', 'Stitch']
    },
    {
      category: 'Machine Learning',
      icon: <Brain className="w-6 h-6 text-orange-400" />,
      description: 'AI and ML models for predictive analytics and automated insights.',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Kubeflow']
    }
  ];

  const industries = [
    {
      name: 'Retail & E-commerce',
      description: 'Customer analytics, inventory optimization, and sales forecasting.',
      icon: <Package className="w-6 h-6 text-green-400" />,
      useCases: ['Customer Segmentation', 'Demand Forecasting', 'Price Optimization', 'Inventory Management']
    },
    {
      name: 'Financial Services',
      description: 'Risk assessment, fraud detection, and regulatory compliance reporting.',
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      useCases: ['Risk Analytics', 'Fraud Detection', 'Credit Scoring', 'Regulatory Reporting']
    },
    {
      name: 'Healthcare',
      description: 'Patient analytics, treatment outcomes, and operational efficiency.',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      useCases: ['Patient Analytics', 'Treatment Outcomes', 'Resource Optimization', 'Clinical Research']
    },
    {
      name: 'Manufacturing',
      description: 'Production analytics, quality control, and supply chain optimization.',
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      useCases: ['Production Analytics', 'Quality Control', 'Supply Chain', 'Predictive Maintenance']
    }
  ];

  const stats = [
    { number: '150+', label: 'BI Projects Delivered', icon: <Rocket className="w-6 h-6 text-cyan-400" /> },
    { number: '85%', label: 'Faster Decision Making', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '60%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <CheckCircle className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group | Advanced Data Analytics & BI Solutions</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced business intelligence solutions. AI-powered analytics, real-time dashboards, and predictive modeling." />
        <meta name="keywords" content="business intelligence, data analytics, BI solutions, data visualization, predictive analytics, data warehousing, business insights" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Business Intelligence - Zion Tech Group | Advanced Data Analytics & BI Solutions" />
        <meta property="og:description" content="Transform your data into actionable insights with our advanced business intelligence solutions. AI-powered analytics, real-time dashboards, and predictive modeling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/business-intelligence" />
        <meta property="og:image" content="https://ziontechgroup.com/business-intelligence-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Intelligence - Zion Tech Group | Advanced Data Analytics & BI Solutions" />
        <meta name="twitter:description" content="Transform your data into actionable insights with our advanced business intelligence solutions. AI-powered analytics, real-time dashboards, and predictive modeling." />
        <meta name="twitter:image" content="https://ziontechgroup.com/business-intelligence-twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <BarChart className="w-4 h-4" />
              <span>Business Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Transform Data into
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Actionable Insights
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Advanced business intelligence solutions that turn your data into competitive advantages. 
              AI-powered analytics, real-time dashboards, and predictive modeling for smarter decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get BI Solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                View Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our business intelligence solutions deliver measurable impact across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">BI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive business intelligence capabilities powered by AI and modern technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {biFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">BI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                End-to-end business intelligence solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {biSolutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {solution.category}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Specialized business intelligence solutions for different industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Unlock <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Your Data's Potential?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Transform your data into actionable insights that drive business growth. 
                    Get started with our advanced business intelligence solutions today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Get BI Solution</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/demo" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>View Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}