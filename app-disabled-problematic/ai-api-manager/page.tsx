import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AIAPIManagerPage() {
  const features = [
    {
      title: 'API Management',
      description: 'Comprehensive API management with AI-powered optimization.',
      benefits: [
        'API gateway management',
        'Rate limiting',
        'Authentication & authorization',
        'Monitoring & analytics'
      ]
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing APIs.',
      benefits: [
        'Machine learning endpoints',
        'Natural language processing',
        'Computer vision APIs',
        'Predictive analytics'
      ]
    },
    {
      title: 'Scalable Architecture',
      description: 'Build and manage APIs that scale with your business needs.',
      benefits: [
        'Microservices architecture',
        'Auto-scaling',
        'Load balancing',
        'High availability'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Helmet>
        <title>AI API Manager - Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services to help your business succeed and grow." />
        <meta name="keywords" content="AI API, API management, microservices, API gateway, artificial intelligence" />
      </Helmet>
      
      <Navigation />
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI API Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional AI API management services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our AI API management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}