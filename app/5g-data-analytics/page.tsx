import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Wifi, Database, TrendingUp, Zap, Globe } from 'lucide-react';

const FiveGDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Process and analyze massive amounts of data in real-time with 5G speed.',
      benefits: ['Instant insights', 'Live dashboards', 'Real-time monitoring', 'Immediate alerts']
    },
    {
      icon: Wifi,
      title: 'High-Speed Data Processing',
      description: 'Leverage 5G speeds to process large datasets faster than ever before.',
      benefits: ['10x faster processing', 'Low latency', 'High bandwidth', 'Efficient data transfer']
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Handle massive datasets with 5G-powered analytics infrastructure.',
      benefits: ['Petabyte scale', 'Distributed processing', 'Cloud integration', 'Scalable architecture']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Use 5G speed to run complex predictive models and forecasting.',
      benefits: ['ML model training', 'Predictive modeling', 'Forecasting', 'Trend analysis']
    },
    {
      icon: Zap,
      title: 'Edge Computing Analytics',
      description: 'Process data at the edge with 5G-enabled edge computing solutions.',
      benefits: ['Edge processing', 'Reduced latency', 'Local analytics', 'Distributed intelligence']
    },
    {
      icon: Globe,
      title: 'Global Data Insights',
      description: 'Analyze data from multiple locations and sources with 5G connectivity.',
      benefits: ['Multi-location data', 'Global insights', 'Cross-border analytics', 'Unified reporting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Data Analytics - High-Speed Data Processing | Zion Tech Group</title>
        <meta name="description" content="Transform your data analytics with 5G-powered solutions. Real-time processing, big data analytics, and edge computing capabilities." />
        <meta name="keywords" content="5G data analytics, real-time analytics, big data, edge computing, data processing, 5G technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              5G Data
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data analytics with 5G-powered solutions. 
              Real-time processing, big data analytics, and edge computing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              5G Data Analytics Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our 5G-powered data analytics solutions and process data at unprecedented speeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your 5G Analytics Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGDataAnalyticsPage;