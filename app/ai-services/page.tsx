'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, MessageSquare, BarChart, Eye, Mic, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI that understands and responds to customer queries naturally.',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Seamless Integration']
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Insights', 'Automated Reporting', 'Custom Dashboards']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos using advanced computer vision.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis']
    },
    {
      icon: Mic,
      title: 'Voice AI Solutions',
      description: 'Build voice-enabled applications with speech recognition and synthesis capabilities.',
      features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support']
    },
    {
      icon: FileText,
      title: 'Document AI',
      description: 'Automate document processing and extraction with intelligent document analysis.',
      features: ['Document Classification', 'Text Extraction', 'Form Processing', 'Data Validation']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom machine learning models tailored to your specific business needs.',
      features: ['Custom Models', 'Model Training', 'Performance Optimization', 'Continuous Learning']
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Improved Accuracy',
    '24/7 Availability',
    'Scalable Solutions',
    'Real-time Insights'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, data analytics, computer vision, and machine learning. Transform your business with our AI expertise." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, data analytics, computer vision, machine learning, NLP" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI services designed to meet your specific business needs and objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of AI-powered solutions that deliver real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to implementing AI solutions that ensures success and maximizes value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">Understand your business needs and identify AI opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Create a custom AI solution architecture tailored to your requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">Build and train AI models using cutting-edge technologies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">Deploy and monitor AI solutions with ongoing support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you achieve your business goals and drive innovation.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Started with AI
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIServicesPage;