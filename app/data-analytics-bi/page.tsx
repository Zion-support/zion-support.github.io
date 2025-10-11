'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Database, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DataAnalyticsBIPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for business intelligence.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis to predict future outcomes.',
      benefits: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Growth predictions']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs to make complex data easy to understand.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Mobile responsive']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for unified insights.',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes', 'API connections']
    }
  ];

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Improve operational efficiency by 40%',
    'Reduce reporting time by 80%',
    'Gain competitive advantage through insights',
    'Scale analytics as your business grows'
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics & BI - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced analytics and business intelligence solutions." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, predictive analytics, BI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Data Analytics & BI
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive analytics and business intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Analytics Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful analytics tools designed to help you make better business decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Analytics Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the benefits of implementing our data analytics and BI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you unlock the power of your data with our advanced analytics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Analytics Journey
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DataAnalyticsBIPage;