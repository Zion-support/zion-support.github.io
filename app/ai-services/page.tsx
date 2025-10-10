'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced ML algorithms and neural networks for complex pattern recognition and predictive modeling.',
      benefits: ['Custom model development', 'Deep learning frameworks', 'Predictive analytics', 'Automated model training', 'Real-time inference', 'Model optimization', 'A/B testing for models', 'Continuous learning systems']
    },
    {
      icon: BarChart,
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent analytics platform that transforms raw data into actionable business insights.',
      benefits: ['Automated data analysis', 'Predictive forecasting', 'Anomaly detection', 'Custom dashboards', 'Natural language queries', 'Automated reporting', 'Data visualization', 'ROI optimization']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text understanding, generation, and human-AI interaction.',
      benefits: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot development', 'Document processing', 'Content generation', 'Voice recognition', 'Conversational AI']
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Processing',
      description: 'AI-powered visual recognition and image analysis for various business applications.',
      benefits: ['Object detection', 'Facial recognition', 'OCR and document scanning', 'Quality inspection', 'Medical imaging', 'Autonomous vehicles', 'Augmented reality', 'Video analytics']
    },
    {
      icon: Zap,
      title: 'AI Automation & RPA',
      description: 'Intelligent process automation that mimics human actions to streamline business operations.',
      benefits: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Calendar management', 'Invoice processing', 'Customer onboarding', 'Compliance monitoring']
    },
    {
      icon: Shield,
      title: 'AI Security & Fraud Detection',
      description: 'Advanced AI security solutions for threat detection, fraud prevention, and risk management.',
      benefits: ['Real-time threat detection', 'Fraud pattern recognition', 'Behavioral analysis', 'Risk assessment', 'Security monitoring', 'Compliance automation', 'Incident response', 'Threat intelligence']
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI consulting to identify opportunities and plan your AI transformation journey.',
      price: 'Starting at $5,000/month',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Vendor evaluation', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'AI Solution Development',
      description: 'End-to-end AI solution development with our expert team of AI engineers and data scientists.',
      price: 'Starting at $15,000/project',
      features: ['Custom AI model development', 'Data pipeline creation', 'API development', 'Integration services', 'Testing and validation']
    },
    {
      icon: TrendingUp,
      title: 'AI Model Optimization',
      description: 'Optimize your existing AI systems for better performance, accuracy, and efficiency.',
      price: 'Starting at $3,000/month',
      features: ['Performance analysis', 'Model fine-tuning', 'Hyperparameter optimization', 'A/B testing', 'Continuous monitoring']
    },
    {
      icon: Target,
      title: 'AI Training & Education',
      description: 'Comprehensive training programs to upskill your team in AI technologies and best practices.',
      price: 'Starting at $2,500/session',
      features: ['Custom training programs', 'Hands-on workshops', 'Certification courses', 'Ongoing support', 'Team mentoring']
    },
    {
      icon: Brain,
      title: 'AI Data Services',
      description: 'Complete data preparation, cleaning, and annotation services for AI model training.',
      price: 'Starting at $1,500/month',
      features: ['Data collection', 'Data cleaning', 'Data annotation', 'Quality assurance', 'Data governance']
    },
    {
      icon: BarChart,
      title: 'AI Analytics & Insights',
      description: 'Advanced AI-powered analytics to extract meaningful insights from your business data.',
      price: 'Starting at $4,000/month',
      features: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbot solutions for customer service, sales, and internal operations.',
      price: 'Starting at $8,000/project',
      features: ['Natural language processing', 'Multi-channel support', 'Integration capabilities', 'Analytics dashboard', 'Continuous learning']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Custom computer vision applications for image recognition, quality control, and automation.',
      price: 'Starting at $12,000/project',
      features: ['Object detection', 'Image classification', 'OCR solutions', 'Quality inspection', 'Real-time processing']
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Better decision making with data insights',
    'Automated repetitive tasks',
    'Enhanced customer experience',
    'Cost reduction through automation',
    'Scalable AI solutions',
    '24/7 AI-powered support',
    'Continuous learning and improvement'
  ];

  const stats = [
    { icon: Brain, value: '95%', label: 'Accuracy Rate' },
    { icon: Zap, value: '10x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting. Transform your business with our AI expertise." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;