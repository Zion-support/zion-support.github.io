'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, TrendingUp, Cpu, Clock, Workflow
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MessageCircle className="w-5 h-5 ml-2" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.',
      price: 'Starting at $1,999/month',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Eye className="w-5 h-5 ml-2" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image analysis and recognition capabilities for various business applications.',
      price: 'Starting at $3,999/month',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Automated Tagging'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mic className="w-5 h-5 ml-2" />,
      title: 'Speech & Voice Processing',
      description: 'Convert speech to text, text to speech, and voice command processing.',
      price: 'Starting at $2,499/month',
      features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FileText className="w-5 h-5 ml-2" />,
      title: 'Document Processing & OCR',
      description: 'Automated document analysis, extraction, and intelligent data processing.',
      price: 'Starting at $1,799/month',
      features: ['OCR Technology', 'Document Classification', 'Data Extraction', 'Automated Workflows'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Users className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Customer Service',
      description: 'Enhance customer experience with intelligent support and personalized interactions.',
      price: 'Starting at $2,299/month',
      features: ['Sentiment Analysis', 'Automated Responses', 'Customer Insights', '24/7 Support'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Increase sales by 40% with AI-powered product recommendations and personalized shopping experiences.',
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      metrics: ['40% increase in sales', '60% improvement in engagement', '25% higher conversion rates']
    },
    {
      title: 'Healthcare Diagnostics',
      description: 'Improve diagnostic accuracy by 35% with AI-powered medical image analysis and patient data insights.',
      icon: <Heart className="w-6 h-6 text-red-400" />,
      metrics: ['35% better accuracy', '50% faster diagnosis', '30% cost reduction']
    },
    {
      title: 'Financial Fraud Detection',
      description: 'Reduce fraud losses by 80% with real-time AI monitoring and anomaly detection systems.',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      metrics: ['80% fraud reduction', '99.9% accuracy rate', 'Real-time detection']
    },
    {
      title: 'Manufacturing Quality Control',
      description: 'Achieve 99.5% quality accuracy with AI-powered visual inspection and defect detection.',
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      metrics: ['99.5% accuracy', '70% faster inspection', '90% cost savings']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities for maximum impact.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your specific business goals.',
      icon: <Target className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build and train custom AI models using your data and business requirements.',
      icon: <Cpu className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Deployment & Optimization',
      description: 'Deploy AI solutions and continuously optimize for better performance.',
      icon: <Zap className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From machine learning to computer vision, we deliver cutting-edge AI solutions that drive growth and innovation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, natural language processing, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {' '}That Transform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your entire business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Real-World Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;