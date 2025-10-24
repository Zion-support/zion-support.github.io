<<<<<<< HEAD
=======
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight  } from "lucide-react";
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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

<<<<<<< HEAD
=======
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
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
    }
  ];

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
    }
  ];

const AiServices = () => {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  return (
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
<<<<<<< HEAD
          </div>
=======

export default AiServicesPage;          </div>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </div>
      </section>

      {/* Services Grid */}
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
<<<<<<< HEAD
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
=======
      <section className='py-20 px-4 bg-white/5'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='text-center mb-16'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our AI solutions can transform your business operations.
=======
      <section className='py-20 px-4'></section>
        <div className='max-w-4xl mx-auto text-center'></div>
          <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI solutions can transform your business operations.
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
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
          </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AIServicesPage;
=======
export default AIServicesPage;

export default AiServicesPage;>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80

export default AIServicesPage;
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
