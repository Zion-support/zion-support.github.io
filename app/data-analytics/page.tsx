'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, Database, CheckCircle, ArrowRight, Phone, Mail, Brain, Zap, Target } from 'lucide-react';

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable insights with our powerful analytics platform'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that automatically discover patterns and trends in your data'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Dashboards',
      description: 'Live dashboards that update in real-time to keep you informed of key metrics'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes to make data-driven business decisions'
    }
  ];

  const analyticsTypes = [
    'Business Intelligence & Reporting',
    'Customer Analytics & Segmentation',
    'Sales Performance Analytics',
    'Marketing Campaign Analysis',
    'Financial Data Analysis',
    'Operational Efficiency Metrics',
    'Risk Assessment & Management',
    'Supply Chain Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Analytics | Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics services by Zion Tech Group. Transform your data into actionable insights with AI-powered analytics and real-time dashboards." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, predictive analytics, data insights, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Data
              </span>
              <br />
              <span className="text-white">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced analytics platform. 
              AI-powered analysis, real-time dashboards, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center">
                Get Analytics
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
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
              Why Choose Our Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our analytics platform delivers powerful insights with AI-powered analysis and real-time visualization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics across all aspects of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;
