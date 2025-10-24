<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom ML models', 'Data visualization'],
      benefits: ['40% increase in decision speed', '25% cost reduction', '99.9% accuracy'],
      link: '/ai-analytics',
      category: 'analytics'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: 'AI Chatbot & Customer Support',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support and engagement.',
      price: 'Starting at $1,999/month',
      features: ['Natural language processing', 'Multi-language support', 'Integration with CRM', 'Analytics dashboard'],
      benefits: ['80% reduction in support costs', '24/7 availability', '95% customer satisfaction'],
      link: '/ai-chatbot-builder',
      category: 'automation'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing tools.',
      price: 'Starting at $1,499/month',
      features: ['Blog posts & articles', 'Social media content', 'Email campaigns', 'SEO optimization'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO-optimized output'],
      link: '/ai-content-generator',
      category: 'content'
    },
    {
      icon: <Eye className="w-8 h-8 text-orange-400" />,
      title: 'Computer Vision Solutions',
      description: 'Implement image recognition, object detection, and visual analysis systems.',
      price: 'Starting at $3,499/month',
      features: ['Image classification', 'Object detection', 'Facial recognition', 'Quality inspection'],
      benefits: ['Automated visual inspection', 'Real-time processing', 'High accuracy rates'],
      link: '/computer-vision',
      category: 'vision'
    },
    {
      icon: <Mic className="w-8 h-8 text-red-400" />,
      title: 'Speech & Voice AI',
      description: 'Build voice-enabled applications with speech recognition and synthesis.',
      price: 'Starting at $2,499/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      benefits: ['Hands-free operation', 'Accessibility improvements', 'Natural interactions'],
      link: '/ai-voice-assistant',
      category: 'voice'
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-400" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors using machine learning and statistical models.',
      price: 'Starting at $4,999/month',
      features: ['Demand forecasting', 'Risk assessment', 'Customer behavior prediction', 'Market analysis'],
      benefits: ['Improved planning accuracy', 'Risk mitigation', 'Competitive advantage'],
      link: '/predictive-analytics',
      category: 'analytics'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <Globe className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Workflow className="w-5 h-5" /> },
    { id: 'content', name: 'Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'vision', name: 'Vision', icon: <Eye className="w-5 h-5" /> },
    { id: 'voice', name: 'Voice', icon: <Mic className="w-5 h-5" /> }
  ];

  const filteredServices = activeTab === 'overview' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, automation, content generation, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, computer vision, natural language processing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions designed to drive innovation and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Custom AI Solutions</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
=======
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageCircle, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'AI-powered content creation for marketing, documentation, and communication.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Service',
      description: 'Intelligent chatbots and customer service solutions powered by AI.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business and data.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",
      rating: 5
=======
"use client";
import React from "react";
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight } from "lucide-react";

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Decision Making",
        "Real-time Processing"
      ],
      price: "Starting at $5,000"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Intelligent Routing",
        "Error Reduction"
      ],
      price: "Starting at $3,000"
    },
    {
      icon: Target,
      title: "Natural Language Processing",
      description: "Understand and process human language at scale",
      features: [
        "Text Analysis",
        "Sentiment Analysis",
        "Language Translation",
        "Chatbot Development"
      ],
      price: "Starting at $4,000"
    },
    {
      icon: BarChart,
      title: "Computer Vision",
      description: "Extract insights from images and videos",
      features: [
        "Image Recognition",
        "Object Detection",
        "Video Analysis",
        "Quality Control"
      ],
      price: "Starting at $6,000"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and data to understand the best AI approach."
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Our team designs a custom AI solution tailored to your specific requirements."
    },
    {
      step: "3",
      title: "Development & Training",
      description: "We develop and train your AI models using the latest technologies and best practices."
    },
    {
      step: "4",
      title: "Integration & Deployment",
      description: "We integrate the solution into your existing systems and deploy it securely."
    },
    {
      step: "5",
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance and optimize the solution for better results."
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Services - Comprehensive AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare" />
        <meta name="canonical" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <FuturisticBackground>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive AI services. 
                From analytics to automation, we provide cutting-edge AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started
                  <Right className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Our AI Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{service.title}</h3>
                    <p className="text-gray-300 text-sm text-center">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
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
                Join hundreds of companies already using our AI services to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Your AI Journey
                  <Right className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </>
  );
};

export default AiServicesPage;
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Case Studies
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Services Grid */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Monthly subscription</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Expected Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI services to solve your most complex business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering successful AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let our experts help you choose and implement the perfect AI solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Learn About Us
            </Link>
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Us
            </a>
>>>>>>> origin/main
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AiServicesPage;
=======
export default AIServicesPage;
>>>>>>> origin/main
>>>>>>> origin/main
