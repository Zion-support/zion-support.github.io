'use client';

import React from 'react';
import { Database, BarChart, Zap, Target, CheckCircle, ArrowRight, Brain, Activity, Globe, Shield, Clock, Award, Monitor, PieChart, TrendingUp, HardDrive, Settings, Users, Lock, Cpu } from 'lucide-react';
import SEOHead from '../../src/components/SEOHead';

const DataWarehousePage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Enterprise Data Lake',
      description: 'Comprehensive data lake solution for storing and processing massive amounts of structured and unstructured data.',
      benefits: ['Petabyte-scale storage', 'Multi-format support', 'Real-time ingestion']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics Engine',
      description: 'Powerful analytics engine with AI-powered insights, predictive modeling, and automated reporting.',
      benefits: ['AI-powered insights', 'Predictive analytics', 'Automated reporting']
    },
    {
      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Stream processing capabilities for real-time data analysis and instant decision making.',
      benefits: ['Stream processing', 'Real-time analytics', 'Instant insights']
    },
    {
      icon: Target,
      title: 'Data Quality Management',
      description: 'Automated data quality checks, cleansing, and validation to ensure data accuracy and reliability.',
      benefits: ['Data validation', 'Quality scoring', 'Automated cleansing']
    },
    {
      icon: Settings,
      title: 'ETL/ELT Automation',
      description: 'Automated data extraction, transformation, and loading processes with intelligent scheduling.',
      benefits: ['Automated ETL/ELT', 'Intelligent scheduling', 'Error handling']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security features including encryption, access controls, and compliance management.',
      benefits: ['End-to-end encryption', 'Role-based access', 'Compliance ready']
    }
  ];

  const services = [
    {
      title: 'Data Lake Setup',
      description: 'Complete data lake implementation with storage, processing, and analytics capabilities.',
      price: '$25,000/mo',
      features: ['Data lake setup', 'ETL pipelines', 'Basic analytics', 'Security implementation']
    },
    {
      title: 'Data Warehouse Migration',
      description: 'Migration from legacy data warehouses to modern cloud-based solutions.',
      price: '$35,000/mo',
      features: ['Migration planning', 'Data migration', 'Performance optimization', 'Testing & validation']
    },
    {
      title: 'Advanced Analytics Platform',
      description: 'Comprehensive analytics platform with AI-powered insights and predictive modeling.',
      price: '$45,000/mo',
      features: ['AI analytics', 'Predictive modeling', 'Real-time processing', 'Custom dashboards']
    },
    {
      title: 'Complete Data Solution',
      description: 'End-to-end data management solution with lake, warehouse, and analytics.',
      price: '$75,000/mo',
      features: ['Full data solution', 'AI optimization', '24/7 support', 'Custom development']
    }
  ];

  const stats = [
    { number: '10PB+', label: 'Data Processed', icon: Database },
    { number: '99.9%', label: 'Data Accuracy', icon: Shield },
    { number: '< 1s', label: 'Query Response', icon: Zap },
    { number: '1000+', label: 'Concurrent Users', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead 
        title="Data Lake & Warehouse Solutions | Zion Tech Group"
        description="Enterprise data lake and warehouse solutions with AI-powered analytics, real-time processing, and advanced data management. Transform your data into actionable insights."
        keywords="data lake, data warehouse, enterprise data, analytics platform, data processing, ETL, data management, business intelligence"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Lake & Warehouse Solutions
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Enterprise data lake and warehouse solutions with AI-powered analytics, 
            real-time processing, and advanced data management. Transform your data 
            into actionable insights and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Data Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 font-semibold py-4 px-8 rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Management Features</h2>
            <p className="text-xl text-gray-300">Advanced data lake and warehouse capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-indigo-400/20 rounded-xl p-8 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-400/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Services</h2>
            <p className="text-xl text-gray-300">Comprehensive data management and analytics solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-indigo-400/20 rounded-xl p-8 hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-400/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-indigo-400 mb-6">{service.price}</div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get a comprehensive data assessment and discover how our data lake and 
            warehouse solutions can unlock the value in your data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Get Data Assessment
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 font-semibold py-4 px-8 rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
              Contact Data Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataWarehousePage;