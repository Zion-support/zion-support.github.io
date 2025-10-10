'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Mic, Volume2, Play, BarChart, Users, Cpu, Target, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Workflow, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const AiSpeechSynthesisPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Generation',
      description: 'High-quality text-to-speech with human-like intonation and emotion'
    },
    {
      icon: Volume2,
      title: 'Multiple Voice Options',
      description: 'Diverse voice profiles including different languages, accents, and speaking styles'
    },
    {
      icon: Brain,
      title: 'AI-Powered Processing',
      description: 'Advanced neural networks for realistic speech synthesis and voice cloning'
    },
    {
      icon: Play,
      title: 'Real-time Generation',
      description: 'Instant voice synthesis with low latency for live applications'
    }
  ];

  const capabilities = [
    'Multi-language text-to-speech synthesis',
    'Voice cloning and customization',
    'Emotional tone and expression control',
    'SSML (Speech Synthesis Markup Language) support',
    'Batch processing for large volumes',
    'Real-time streaming audio generation',
    'Custom voice model training',
    'API integration and SDK support',
    'High-quality audio output formats',
    'Scalable cloud infrastructure'
  ];

  const useCases = [
    {
      title: 'Accessibility',
      description: 'Convert text content to speech for visually impaired users and accessibility compliance',
      icon: Users
    },
    {
      title: 'Content Creation',
      description: 'Generate voiceovers for videos, podcasts, and multimedia content',
      icon: Play
    },
    {
      title: 'Customer Service',
      description: 'Create natural-sounding voice responses for IVR systems and chatbots',
      icon: MessageCircle
    },
    {
      title: 'Education',
      description: 'Develop interactive learning materials with natural voice narration',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Speech Synthesis | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered speech synthesis solutions with natural voice generation, multi-language support, and voice cloning capabilities." />
        <meta name="keywords" content="AI speech synthesis, text-to-speech, voice generation, voice cloning, TTS, speech technology, AI voice" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Speech Synthesis
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform text into natural, human-like speech with our advanced AI-powered synthesis technology. 
              Create engaging voice experiences for any application or platform.
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
              Why Choose Our AI Speech Synthesis?
            </h2>
            <p className="text-xl text-gray-300">
              Our speech synthesis solutions deliver natural, high-quality voice generation.
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
              Comprehensive speech synthesis features powered by cutting-edge AI technology.
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
              Discover how AI speech synthesis transforms different industries.
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Natural Speech?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our experts to discuss your speech synthesis needs and get a customized solution.
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

export default AiSpeechSynthesisPage;