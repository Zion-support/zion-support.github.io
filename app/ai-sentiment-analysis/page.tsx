'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Heart, Smile, Frown, BarChart, Users, Cpu, Target, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const AiSentimentAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotion Detection',
      description: 'Advanced AI models that accurately identify emotions and sentiment in text, voice, and video'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Instant sentiment analysis with comprehensive reporting and trend visualization'
    },
    {
      icon: Brain,
      title: 'Multi-modal Analysis',
      description: 'Analyze sentiment across text, audio, video, and social media content'
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Train specialized models for your industry and specific use cases'
    }
  ];

  const capabilities = [
    'Text sentiment analysis in 100+ languages',
    'Voice emotion recognition and analysis',
    'Facial expression and emotion detection',
    'Social media sentiment monitoring',
    'Real-time sentiment scoring and classification',
    'Custom sentiment model training',
    'API integration for seamless workflow',
    'Batch processing for large datasets',
    'Sentiment trend analysis and reporting',
    'Multi-channel sentiment aggregation'
  ];

  const useCases = [
    {
      title: 'Customer Feedback',
      description: 'Analyze customer reviews, surveys, and feedback to improve products and services',
      icon: MessageCircle
    },
    {
      title: 'Social Media Monitoring',
      description: 'Track brand sentiment and public opinion across social media platforms',
      icon: Globe
    },
    {
      title: 'Market Research',
      description: 'Understand consumer sentiment and market trends for strategic planning',
      icon: TrendingUp
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor employee satisfaction and engagement through internal communications',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Sentiment Analysis | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sentiment analysis solutions for text, voice, and video content. Understand emotions and opinions with cutting-edge machine learning technology." />
        <meta name="keywords" content="AI sentiment analysis, emotion detection, text analysis, voice emotion, social media monitoring, customer feedback analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Sentiment Analysis
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Understand emotions, opinions, and sentiment across all your content with our advanced AI-powered analysis platform. 
              Transform customer feedback, social media, and communications into actionable insights.
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
              Why Choose Our AI Sentiment Analysis?
            </h2>
            <p className="text-xl text-gray-300">
              Our sentiment analysis solutions deliver accurate, real-time emotion detection and insights.
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
              Comprehensive sentiment analysis features powered by cutting-edge AI technology.
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
              Discover how AI sentiment analysis transforms different industries.
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Understand Sentiment?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our experts to discuss your sentiment analysis needs and get a customized solution.
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

export default AiSentimentAnalysisPage;