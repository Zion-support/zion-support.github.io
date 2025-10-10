'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, Zap, Target, Shield, Heart } from 'lucide-react';

const AiSentimentAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotion Detection',
      description: 'Advanced AI algorithms that accurately detect emotions and sentiment in text, voice, and video content.',
      benefits: ['Multi-modal analysis', 'Real-time processing', 'High accuracy', 'Context understanding']
    },
    {
      icon: Brain,
      title: 'Natural Language Understanding',
      description: 'Deep learning models that understand context, sarcasm, and nuanced emotional expressions.',
      benefits: ['Context awareness', 'Sarcasm detection', 'Cultural sensitivity', 'Language support']
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Process and analyze sentiment in real-time for live applications and customer interactions.',
      benefits: ['Live processing', 'Instant insights', 'Stream analysis', 'Low latency']
    },
    {
      icon: Target,
      title: 'Custom Models',
      description: 'Train custom sentiment analysis models for your specific industry and use cases.',
      benefits: ['Industry-specific training', 'Custom classification', 'Domain adaptation', 'Fine-tuned accuracy']
    }
  ];

  const benefits = [
    'Improve customer satisfaction by 40%',
    'Reduce response time to negative feedback',
    'Enhance brand monitoring and reputation management',
    'Automate customer service routing based on sentiment',
    'Gain valuable insights from customer feedback'
  ];

  return (
    <>
      <Helmet>
        <title>AI Sentiment Analysis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered sentiment analysis solutions for customer feedback, social media monitoring, and brand reputation management." />
        <meta name="keywords" content="AI sentiment analysis, emotion detection, customer feedback, social media monitoring, brand reputation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sentiment Analysis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Emotion Detection & Analysis
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Understand customer emotions and sentiment with our advanced AI-powered analysis. 
                Perfect for customer service, social media monitoring, and brand reputation management.
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

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Sentiment Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI sentiment analysis platform provides comprehensive tools for understanding 
                emotions and sentiment across multiple channels and content types.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Sentiment Analysis?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of emotion detection with measurable business benefits.
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

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Understand Your Customers?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI sentiment analysis platform and unlock valuable customer insights.
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

export default AiSentimentAnalysisPage;
