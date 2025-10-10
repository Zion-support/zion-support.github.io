'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Eye, Brain, BarChart, Zap, Target, Shield, Play, TrendingUp } from 'lucide-react';

const AiVideoAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Advanced Video Recognition',
      description: 'AI-powered video analysis that can identify objects, people, actions, and scenes with high accuracy.',
      benefits: ['Object detection', 'Facial recognition', 'Action recognition', 'Scene classification']
    },
    {
      icon: Brain,
      title: 'Intelligent Content Analysis',
      description: 'Automatically analyze video content for sentiment, topics, and key moments.',
      benefits: ['Sentiment analysis', 'Content categorization', 'Key moment detection', 'Topic extraction']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Process and analyze video streams in real-time with instant insights and alerts.',
      benefits: ['Live processing', 'Instant alerts', 'Real-time metrics', 'Stream analysis']
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Automatically process large volumes of video content with minimal human intervention.',
      benefits: ['Batch processing', 'Automated workflows', 'Scalable processing', 'Efficient resource usage']
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Train custom AI models for specific video analysis tasks and industry requirements.',
      benefits: ['Custom training', 'Industry-specific models', 'Fine-tuned accuracy', 'Specialized analysis']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security and privacy protection for sensitive video content.',
      benefits: ['Data encryption', 'Privacy controls', 'Secure processing', 'Compliance support']
    }
  ];

  const benefits = [
    'Reduce manual video review time by 80%',
    'Improve content discovery and searchability',
    'Enhance security monitoring and surveillance',
    'Automate content moderation and compliance',
    'Gain valuable insights from video data'
  ];

  return (
    <>
      <Helmet>
        <title>AI Video Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered video analysis solutions for security, content moderation, and business intelligence. Real-time processing and intelligent insights." />
        <meta name="keywords" content="AI video analysis, video recognition, content analysis, surveillance, video processing, computer vision" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Video Analysis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Intelligent Video Processing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your video content with advanced AI analysis. Detect objects, analyze behavior, 
                and extract valuable insights from video data in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Video Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI video analysis platform provides comprehensive tools for processing, 
                analyzing, and extracting insights from video content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Video Analysis?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven video analysis with measurable business benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Video Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI video analysis platform and unlock the power of intelligent video processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiVideoAnalysisPage;
