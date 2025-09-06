import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Development | Zion Tech Group',
  description: 'Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies.',
};

export default function ResearchPage() {
  const metrics = [
    {
      metric: 'Patents Filed',
      value: '25+',
      description: 'Intellectual property protecting our innovations'
    },
    {
      metric: 'Research Papers',
      value: '50+',
      description: 'Published in top-tier conferences and journals'
    },
    {
      metric: 'R&D Investment',
      value: '$10M+',
      description: 'Annual investment in research and development'
    },
    {
      metric: 'Innovation Labs',
      value: '5',
      description: 'Global research facilities'
    }
  ];

  const researchAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Advanced AI research including machine learning, deep learning, and neural networks.',
      icon: '🤖'
    },
    {
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum algorithms and quantum machine learning research.',
      icon: '⚛️'
    },
    {
      title: 'Blockchain Technology',
      description: 'Next-generation blockchain solutions and decentralized systems.',
      icon: '⛓️'
    },
    {
      title: 'Edge Computing',
      description: 'Distributed computing and edge AI optimization research.',
      icon: '🌐'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation through cutting-edge research in AI, quantum computing, and emerging technologies.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{area.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Our Research?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn more about our research initiatives and how they can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}