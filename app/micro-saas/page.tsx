'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, BarChart, MessageSquare, FileText, ArrowRight, CheckCircle, Star } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology',
      price: '$29/month',
      users: 'Up to 5 users',
      features: ['AI Writing Assistant', 'Content Templates', 'SEO Optimization', 'Multi-language Support']
    },
    {
      name: 'Analytics Dashboard',
      description: 'Comprehensive business analytics and reporting solution',
      price: '$49/month',
      users: 'Up to 10 users',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'API Integration']
    },
    {
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots without coding knowledge',
      price: '$39/month',
      users: 'Up to 3 chatbots',
      features: ['Drag-and-drop Builder', 'Multi-channel Support', 'Analytics', 'Custom Integrations']
    },
    {
      name: 'Document Processor',
      description: 'Automated document processing and data extraction',
      price: '$59/month',
      users: 'Up to 20 users',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'Cloud Storage']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, productivity tools, SaaS solutions" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven tools designed to streamline your business operations 
              and boost productivity. Start small, scale big.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{product.price}</div>
                    <div className="text-gray-300 text-sm">{product.users}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300">Leverage advanced AI technology for better results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Scalable</h3>
                <p className="text-gray-300">Start small and grow with your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Easy to Use</h3>
                <p className="text-gray-300">Intuitive interfaces that require no technical expertise</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;