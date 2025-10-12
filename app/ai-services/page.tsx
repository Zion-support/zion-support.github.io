'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart, MessageCircle, Target, DollarSign, Settings, TrendingUp, Globe, Database, Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiServices = [
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials using advanced natural language processing.',
      features: ['Natural language processing', 'Content optimization', 'Multi-language support', 'SEO integration'],
      price: 'Starting at $299/month',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and actionable insights.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      price: 'Starting at $499/month',
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Chatbot Solutions',
      description: 'Intelligent customer service chatbots with natural language understanding.',
      features: ['24/7 availability', 'Multi-channel support', 'Custom training', 'Analytics'],
      price: 'Starting at $199/month',
      icon: MessageCircle,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Document Processing',
      description: 'Automated document analysis, extraction, and processing using computer vision.',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Batch processing'],
      price: 'Starting at $399/month',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis to drive business decisions.',
      features: ['Machine learning models', 'Trend forecasting', 'Risk assessment', 'Custom algorithms'],
      price: 'Starting at $599/month',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Intelligent threat detection and security monitoring systems.',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Security analytics'],
      price: 'Starting at $799/month',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to save time and resources.'
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: 'Better Decision Making',
      description: 'Get data-driven insights to make informed business decisions.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized and responsive customer service.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, analytics, chatbots, and predictive modeling. Expert AI solutions by Zion Tech Group." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, analytics, chatbots, predictive modeling" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services to transform your business with artificial intelligence solutions." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to predictive analytics, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve real business challenges and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions deliver measurable results and transform how you do business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;