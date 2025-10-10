'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Target, ArrowRight } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your business needs',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing']
    },
    {
      icon: Zap,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development']
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'Image and video analysis for business applications',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Control']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and custom AI solutions for your business." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, artificial intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-cyan-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Harness AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can transform your business. Contact our experts for a free consultation.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;