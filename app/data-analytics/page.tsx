'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Target, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DataAnalyticsPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced BI solutions.',
      benefits: ['Interactive dashboards', 'Custom reports', 'Data visualization', 'KPI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict future trends and make data-driven decisions.',
      benefits: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Performance optimization']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Create compelling visual representations of your data for better understanding.',
      benefits: ['Interactive charts', 'Real-time updates', 'Custom themes', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Performance Metrics',
      description: 'Track and measure key performance indicators to optimize business operations.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Progress reports', 'Alert systems']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive data analytics services. BI, predictive analytics, and data visualization." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Data Analytics</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our comprehensive analytics solutions. Make informed decisions with data-driven intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Analytics Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data analytics services to help you understand your business better.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <service.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
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
      </main>
      
      <Footer />
    </>
  );
};

export default DataAnalyticsPage;