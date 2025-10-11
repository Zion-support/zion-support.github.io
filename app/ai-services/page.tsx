'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Shield, Cloud, ArrowRight, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'automation', name: 'AI Automation' },
    { id: 'analytics', name: 'AI Analytics' }
  ];

  const services = [
    {
      id: 1,
      name: 'Machine Learning Model Development',
      category: 'machine-learning',
      description: 'Custom ML models tailored to your specific business needs and data.',
      features: [
        'Custom model training',
        'Data preprocessing',
        'Model optimization',
        'Performance monitoring',
        'Continuous learning'
      ],
      benefits: [
        'Improved decision making',
        'Automated processes',
        'Cost reduction',
        'Scalable solutions'
      ],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      icon: Brain,
      popular: true
    },
    {
      id: 2,
      name: 'Natural Language Processing',
      category: 'nlp',
      description: 'Advanced text analysis, sentiment analysis, and language understanding solutions.',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Chatbot development'
      ],
      benefits: [
        'Better customer insights',
        'Automated content analysis',
        'Multilingual support',
        'Enhanced user experience'
      ],
      price: 'Starting at $3,500',
      duration: '3-6 weeks',
      icon: Zap,
      popular: false
    },
    {
      id: 3,
      name: 'Computer Vision Solutions',
      category: 'computer-vision',
      description: 'Image and video analysis, object detection, and visual recognition systems.',
      features: [
        'Object detection',
        'Image classification',
        'Facial recognition',
        'Video analysis',
        'Quality inspection'
      ],
      benefits: [
        'Automated visual inspection',
        'Enhanced security',
        'Quality control',
        'Real-time monitoring'
      ],
      price: 'Starting at $4,500',
      duration: '5-10 weeks',
      icon: Shield,
      popular: false
    },
    {
      id: 4,
      name: 'AI-Powered Automation',
      category: 'automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Document processing',
        'Data extraction',
        'Task scheduling'
      ],
      benefits: [
        'Increased efficiency',
        'Reduced manual work',
        'Faster processing',
        'Error reduction'
      ],
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      icon: Cloud,
      popular: true
    },
    {
      id: 5,
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      description: 'Comprehensive analytics platform with AI-powered insights and predictions.',
      features: [
        'Real-time analytics',
        'Predictive modeling',
        'Data visualization',
        'Custom reports',
        'Alert systems'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive insights',
        'Performance monitoring',
        'Competitive advantage'
      ],
      price: 'Starting at $6,000',
      duration: '6-12 weeks',
      icon: Brain,
      popular: false
    },
    {
      id: 6,
      name: 'AI Chatbot Development',
      category: 'nlp',
      description: 'Intelligent conversational AI for customer service and support.',
      features: [
        'Natural conversations',
        'Multi-language support',
        'Integration capabilities',
        'Learning from interactions',
        '24/7 availability'
      ],
      benefits: [
        'Improved customer service',
        'Reduced support costs',
        'Faster response times',
        'Scalable support'
      ],
      price: 'Starting at $3,000',
      duration: '3-5 weeks',
      icon: Zap,
      popular: true
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation solutions." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation and efficiency.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                    service.popular ? 'border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20' : 'border border-gray-700 hover:border-cyan-500/50'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Features</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Price</span>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">{service.duration}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600">
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300">Try selecting a different category.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your AI needs and create a custom solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Start Your AI Journey
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AiServicesPage;
