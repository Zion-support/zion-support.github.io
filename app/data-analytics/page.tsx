'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Database, PieChart, CheckCircle, ArrowRight, Zap, Shield, Target, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Create compelling visualizations and interactive dashboards to make your data easily understandable.',
      benefits: ['Interactive charts', 'Real-time updates', 'Custom dashboards', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning algorithms to predict future trends and make data-driven decisions.',
      benefits: ['Forecasting models', 'Pattern recognition', 'Risk assessment', 'Optimization insights']
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Efficiently process and analyze large volumes of data from multiple sources in real-time.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data cleansing', 'ETL pipelines']
    },
    {
      icon: PieChart,
      title: 'Statistical Analysis',
      description: 'Comprehensive statistical analysis to uncover hidden patterns and correlations in your data.',
      benefits: ['Descriptive statistics', 'Hypothesis testing', 'Regression analysis', 'A/B testing']
    }
  ];

  const useCases = [
    'Customer behavior analysis',
    'Sales forecasting',
    'Operational efficiency',
    'Risk management',
    'Marketing optimization',
    'Supply chain analytics',
    'Financial modeling',
    'Performance monitoring'
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics solutions to extract insights and drive business growth through data-driven decisions." />
        <meta name="keywords" content="data analytics, data science, business intelligence, data visualization, predictive analytics, machine learning" />
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Data Analytics</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the power of your data with advanced analytics solutions that drive informed decision-making and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
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
                Our Analytics Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive data analytics solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Common Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                How businesses leverage our analytics solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <span className="text-white text-center">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our analytics solutions can help you extract valuable insights from your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Analytics Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Request Consultation
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DataAnalyticsPage;