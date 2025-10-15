import React from 'react';
import SEOHead from '../components/SEOHead';
import { ChartBarIcon, CpuChipIcon, DatabaseIcon, TrendingUpIcon, EyeIcon, CogIcon } from '@heroicons/react/24/outline';

const DataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time with your business data.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that discover patterns and predict trends.'
    },
    {
      icon: DatabaseIcon,
      title: 'Data Integration',
      description: 'Connect all your data sources for a unified view of your business.'
    },
    {
      icon: TrendingUpIcon,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make data-driven decisions with confidence.'
    },
    {
      icon: EyeIcon,
      title: 'Visualization',
      description: 'Beautiful charts and graphs that make complex data easy to understand.'
    },
    {
      icon: CogIcon,
      title: 'Custom Reports',
      description: 'Automated reporting tailored to your specific business needs.'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Data Analytics Solutions - Zion Tech Group"
        description="Transform your data into actionable insights with our advanced analytics solutions. Real-time dashboards, AI-powered insights, and predictive analytics."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Data Analytics Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with our advanced analytics platform. 
                Make data-driven decisions that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our comprehensive analytics platform provides everything you need to understand and optimize your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start making data-driven decisions today. Contact us for a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataAnalyticsPage;
