import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Machine Learning',
      description: 'Custom ML models for predictive analytics and automation.',
      icon: '🤖'
    },
    {
      title: 'Natural Language Processing',
      description: 'AI-powered text analysis and language understanding.',
      icon: '💬'
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition and visual data processing solutions.',
      icon: '👁️'
    },
    {
      title: 'AI Chatbots',
      description: 'Intelligent conversational agents for customer support.',
      icon: '💭'
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting for business decisions.',
      icon: '📊'
    },
    {
      title: 'AI Automation',
      description: 'Automate repetitive tasks with intelligent workflows.',
      icon: '⚡'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, chatbots, and predictive analytics for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement AI?</h2>
            <p className="text-xl mb-6">
              Let's discuss how AI can transform your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;