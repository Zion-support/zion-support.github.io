'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Eye, BarChart, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your business needs.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for chatbots, sentiment analysis, and text processing.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Text Classification', 'Language Translation']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and quality control.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Quality Inspection']
    },
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Intelligent data analysis and business intelligence solutions.',
      features: ['Data Visualization', 'Predictive Modeling', 'Anomaly Detection', 'Trend Analysis']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline your operations.',
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Task Scheduling']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI automation solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, artificial intelligence" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Implement AI?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business. 
              Our experts will help you identify the best AI solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesPage;