'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AnalyticsToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'Business Intelligence Dashboard',
      description: 'Real-time analytics and reporting for data-driven decision making.',
      price: '$99/month',
      icon: '📊'
    },
    {
      title: 'Customer Analytics',
      description: 'Track customer behavior and engagement across all touchpoints.',
      price: '$149/month',
      icon: '👥'
    },
    {
      title: 'Marketing Analytics',
      description: 'Comprehensive marketing performance tracking and optimization.',
      price: '$199/month',
      icon: '📈'
    },
    {
      title: 'Financial Analytics',
      description: 'Advanced financial reporting and forecasting tools.',
      price: '$179/month',
      icon: '💰'
    }
  ];

  const features = [
    'Real-time data visualization',
    'Custom dashboard creation',
    'Automated reporting',
    'Data export capabilities',
    'API integration',
    'Mobile-responsive design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Analytics Tools
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful analytics tools to help you understand your data and make informed business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="text-2xl font-bold text-indigo-600 mb-4">{tool.price}</div>
              <a
                href="/contact"
                className="inline-block w-full text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Unlock Your Data?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with a free trial and see how our analytics tools can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsToolsPage;