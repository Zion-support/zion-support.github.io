'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop a comprehensive AI roadmap.',
      features: ['AI readiness assessment', 'Strategic planning', 'Technology selection', 'Implementation roadmap']
    },
    {
      icon: Zap,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      features: ['Custom ML models', 'Data preprocessing', 'Model training', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
      features: ['Security auditing', 'Compliance frameworks', 'Risk assessment', 'Threat monitoring']
    },
    {
      icon: Globe,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      features: ['Text analysis', 'Chatbot development', 'Language translation', 'Sentiment analysis']
    },
    {
      icon: Brain,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions powered by advanced computer vision algorithms.',
      features: ['Image recognition', 'Object detection', 'Video analysis', 'Visual search']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate business processes with intelligent AI-powered workflows.',
      features: ['Process automation', 'Workflow optimization', 'Intelligent routing', 'Decision automation']
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and AI automation solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI automation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our AI experts to discuss how our solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Contact AI Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiServicesPage;
