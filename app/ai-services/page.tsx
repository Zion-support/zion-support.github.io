import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Globe, Database, Code, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials',
      icon: <Code className="w-8 h-8" />,
      features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'Product Descriptions'],
      path: '/ai-content-generator'
    },
    {
      title: 'AI Chatbot Solutions',
      description: 'Intelligent conversational AI for customer support and engagement',
      icon: <Brain className="w-8 h-8" />,
      features: ['24/7 Support', 'Multi-language', 'Custom Training', 'Analytics'],
      path: '/ai-chatbot-builder'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Advanced data visualization and business intelligence',
      icon: <Database className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'API Integration'],
      path: '/ai-analytics-dashboard'
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management and automated responses',
      icon: <Zap className="w-8 h-8" />,
      features: ['Smart Sorting', 'Auto-Responses', 'Sentiment Analysis', 'Scheduling'],
      path: '/ai-email-assistant'
    },
    {
      title: 'AI Voice Solutions',
      description: 'Voice recognition and synthesis for applications',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Speech-to-Text', 'Text-to-Speech', 'Voice Commands', 'Multi-language'],
      path: '/ai-voice-assistant'
    },
    {
      title: 'AI Automation Suite',
      description: 'Complete workflow automation using artificial intelligence',
      icon: <Globe className="w-8 h-8" />,
      features: ['Process Automation', 'Workflow Optimization', 'Integration', 'Monitoring'],
      path: '/ai-automation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, content generation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From content generation to advanced analytics, we provide comprehensive AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our AI experts help you implement the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}