'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Eye, Video, Play, BarChart, Users, Cpu, Target, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const AiVideoAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Video Analysis',
      description: 'Advanced computer vision algorithms for instant video content analysis and object detection'
    },
    {
      icon: Video,
      title: 'Multi-format Support',
      description: 'Support for all major video formats including MP4, AVI, MOV, and streaming protocols'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning models that understand context, emotions, and content patterns'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting on video performance and engagement metrics'
    }
  ];

  const capabilities = [
    'Real-time object detection and tracking',
    'Facial recognition and emotion analysis',
    'Scene classification and content moderation',
    'Motion detection and activity recognition',
    'Text extraction from video frames',
    'Quality assessment and enhancement recommendations',
    'Automated video summarization',
    'Custom model training for specific use cases',
    'API integration for seamless workflow',
    'Scalable cloud processing infrastructure'
  ];

  const useCases = [
    {
      title: 'Security & Surveillance',
      description: 'Monitor security cameras with intelligent threat detection and alert systems',
      icon: Shield
    },
    {
      title: 'Content Moderation',
      description: 'Automatically detect inappropriate content in user-generated videos',
      icon: CheckSquare
    },
    {
      title: 'Marketing Analytics',
      description: 'Analyze video ads and content for engagement and effectiveness metrics',
      icon: TrendingUp
    },
    {
      title: 'Healthcare Monitoring',
      description: 'Assist in medical video analysis for diagnostic and treatment purposes',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Video Analysis | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered video analysis solutions with real-time object detection, facial recognition, and content insights. Transform your video data into actionable intelligence." />
        <meta name="keywords" content="AI video analysis, computer vision, video processing, object detection, facial recognition, video analytics, machine learning" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Video Analysis
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your video content into actionable insights with our advanced AI-powered video analysis platform. 
              Real-time processing, intelligent detection, and comprehensive analytics for any industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Video Analysis?
            </h2>
            <p className="text-xl text-gray-300">
              Our video analysis solutions deliver unmatched performance, accuracy, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive video analysis features powered by cutting-edge AI technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300">
              Discover how AI video analysis transforms different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Analyze Your Videos?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our experts to discuss your video analysis needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiVideoAnalysisPage;