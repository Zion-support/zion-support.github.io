'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Volume2, Headphones, MessageSquare, Phone, Music, CheckCircle, ArrowRight, Star, Clock, Zap, Brain, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiVoiceSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: Mic,
      title: 'AI Speech Recognition',
      description: 'Convert speech to text with 99% accuracy in multiple languages',
      features: ['Multi-language support', 'Real-time processing', 'Noise cancellation', 'Custom vocabulary']
    },
    {
      icon: Volume2,
      title: 'AI Text-to-Speech',
      description: 'Generate natural-sounding speech from text with emotional expression',
      features: ['Natural voices', 'Emotion control', 'Multiple languages', 'Custom voice training']
    },
    {
      icon: Headphones,
      title: 'AI Voice Analytics',
      description: 'Analyze voice patterns for sentiment, emotion, and health insights',
      features: ['Sentiment analysis', 'Emotion detection', 'Health monitoring', 'Voice biometrics']
    },
    {
      icon: MessageSquare,
      title: 'AI Voice Assistants',
      description: 'Build intelligent voice assistants for your applications',
      features: ['Conversational AI', 'Voice commands', 'Integration APIs', 'Custom responses']
    }
  ];

  const benefits = [
    '99% speech recognition accuracy',
    'Support for 50+ languages',
    'Real-time voice processing',
    'Custom voice model training',
    'Seamless API integration',
    '24/7 voice processing'
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'AI-powered voice support with natural conversation flow',
      icon: MessageSquare
    },
    {
      title: 'Healthcare',
      description: 'Voice-based patient monitoring and health analysis',
      icon: Headphones
    },
    {
      title: 'Education',
      description: 'Interactive voice learning and language training',
      icon: Volume2
    },
    {
      title: 'Accessibility',
      description: 'Voice interfaces for users with disabilities',
      icon: Mic
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice solutions including speech recognition, text-to-speech, voice analytics, and voice assistants." />
        <meta name="keywords" content="AI voice solutions, speech recognition, text-to-speech, voice analytics, voice assistants" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Voice Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your applications with cutting-edge AI voice technology. 
                From speech recognition to voice assistants, we provide comprehensive voice AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Request Demo
                </a>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-slate-800/50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our AI Voice Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <useCase.icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Add Voice to Your Applications?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our AI voice experts help you implement cutting-edge voice solutions 
                  that will enhance user experience and accessibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiVoiceSolutionsPage;