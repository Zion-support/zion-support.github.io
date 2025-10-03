import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServices: React.FC = () => {
  const services = [
    {
      name: 'RAG Chatbots for Documents',
      price: '$2,000 - $8,000/mo',
      features: ['Secure retrieval', 'Multi-source connectors', 'Guardrails', 'Analytics dashboard'],
      link: 'https://ziontechgroup.com/services/ai-services',
    },
    {
      name: 'Intelligent Document Processing (IDP)',
      price: '$1,500 - $6,000/mo',
      features: ['OCR + layout parsing', 'Entity extraction', 'Validation flows', 'Export to ERP/CRM'],
      link: 'https://ziontechgroup.com/services/ai-services',
    },
    {
      name: 'Predictive Analytics & Forecasting',
      price: '$3,000 - $12,000/mo',
      features: ['Time series analysis', 'Demand forecasting', 'Risk assessment', 'Real-time dashboards'],
      link: 'https://ziontechgroup.com/services/ai-services',
    },
    {
      name: 'Computer Vision Solutions',
      price: '$2,500 - $10,000/mo',
      features: ['Object detection', 'Image classification', 'Quality control', 'Automated inspection'],
      link: 'https://ziontechgroup.com/services/ai-services',
    },
    {
      name: 'Natural Language Processing',
      price: '$1,800 - $7,000/mo',
      features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Content generation'],
      link: 'https://ziontechgroup.com/services/ai-services',
    },
    {
      name: 'AI Workflow Automation',
      price: '$2,200 - $9,000/mo',
      features: ['Process automation', 'Decision trees', 'Integration APIs', 'Monitoring & alerts'],
      link: 'https://ziontechgroup.com/services/ai-services',
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including RAG chatbots, document processing, predictive analytics, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServices;