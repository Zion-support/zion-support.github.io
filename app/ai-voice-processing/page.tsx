'use client';
import React from 'react';
import { Mic, Volume2, Headphones, MessageSquare, Zap, Target, BarChart, Users, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Advanced Speech Recognition',
      description: 'Convert speech to text with 99% accuracy in multiple languages and accents.'
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech Synthesis',
      description: 'Natural-sounding voice generation with customizable voices and emotions.'
    },
    {
      icon: Headphones,
      title: 'Real-time Audio Processing',
      description: 'Process audio streams in real-time for live applications and services.'
    },
    {
      icon: MessageSquare,
      title: 'Voice Command Processing',
      description: 'Understand and execute voice commands with natural language processing.'
    }
  ];

  const benefits = [
    '99% speech recognition accuracy',
    'Multi-language support',
    'Real-time processing',
    'Custom voice training',
    'API integration ready',
    'Scalable cloud deployment'
  ];

  const useCases = [
    {
      title: 'Voice Assistants & Chatbots',
      description: 'Create intelligent voice assistants that understand and respond naturally.',
      icon: MessageSquare
    },
    {
      title: 'Call Center Automation',
      description: 'Automate customer service with voice recognition and response systems.',
      icon: Headphones
    },
    {
      title: 'Accessibility Solutions',
      description: 'Help people with disabilities through voice-controlled interfaces.',
      icon: Mic
    },
    {
      title: 'Voice Analytics',
      description: 'Analyze customer calls for insights and quality improvement.',
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Voice Processing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with advanced voice AI technology. Our voice processing solutions 
              deliver 99% accuracy in speech recognition and natural voice synthesis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Start Voice AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Voice Processing Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge voice AI technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Voice Processing?</h2>
            <p className="text-xl text-gray-300">Proven technology that delivers results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Voice Processing Applications</h2>
            <p className="text-xl text-gray-300">Transform your business with voice intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Hear with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Unlock the power of voice intelligence with our advanced voice processing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              Start Voice Processing
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoiceProcessingPage;