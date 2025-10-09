'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    'High-quality voice synthesis',
    'Real-time voice cloning',
    'Multiple language support',
    'Emotion and tone control',
    'Custom voice training',
    'API integration',
    'Batch processing',
    'Voice authentication',
    'Text-to-speech conversion',
    'Voice morphing capabilities',
    'Noise reduction',
    'Voice enhancement',
    'Multi-speaker support',
    'Voice privacy protection',
    'Cloud-based processing',
    'Marketing campaigns',
    'Entertainment industry'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small projects',
      features: [
        '5 voice models',
        '1,000 minutes/month',
        'Basic emotions',
        'Standard quality',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: [
        '20 voice models',
        '5,000 minutes/month',
        'All emotions',
        'High quality',
        'Priority support',
        'Custom training',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'For large organizations',
      features: [
        'Unlimited voice models',
        'Unlimited synthesis',
        'All emotions',
        'Premium quality',
        'Custom training',
        'Priority support'
      ],
      popular: false
    }
  ];

  const technologies = [
    'Tacotron 2', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning',
    'Neural Vocoder', 'Speaker Embedding', 'Voice Conversion',
    'Text-to-Speech', 'Speech Synthesis', 'Voice Authentication'
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Create personalized voice assistants for customer support',
      icon: '🎧'
    },
    {
      title: 'Content Creation',
      description: 'Generate voiceovers for videos, podcasts, and presentations',
      icon: '🎬'
    },
    {
      title: 'Accessibility',
      description: 'Help people with speech impairments communicate',
      icon: '♿'
    },
    {
      title: 'Entertainment',
      description: 'Create unique character voices for games and media',
      icon: '🎮'
    },
    {
      title: 'Education',
      description: 'Develop interactive learning experiences with custom voices',
      icon: '📚'
    },
    {
      title: 'Marketing',
      description: 'Create personalized marketing messages and advertisements',
      icon: '📢'
    }

import { CheckCircle, Star, Phone, Mail, MapPin, Mic, Volume2, Languages, Zap, Shield, Clock } from 'lucide-react';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    'High-quality voice synthesis',
    'Emotion control and modulation',
    'Multi-language support',
    'Real-time voice conversion',
    'Custom voice training',
    'API integration',
    'Privacy protection',
    'Batch processing'
  ];

  const benefits = [
    'Create personalized voice assistants',
    'Improve accessibility for users',
    'Enhance user experience',
    'Reduce voice production costs',
    'Enable multilingual content',
    'Maintain brand consistency'
  ];

  const useCases = [
    'Personalized voice assistants',
    'Audiobook narration',
    'Podcast production',
    'E-learning content',
    'Customer service automation',
    'Accessibility solutions',
    'Marketing campaigns',
    'Entertainment industry'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99/month',
      features: ['Up to 5 voice models', '10 hours of synthesis', 'Basic emotions', 'Standard quality'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$299/month',
      features: ['Up to 20 voice models', '50 hours of synthesis', 'Advanced emotions', 'High quality', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$999/month',
      features: ['Unlimited voice models', 'Unlimited synthesis', 'All emotions', 'Premium quality', 'Custom training', 'Priority support'],
      popular: false
    }
  ];

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Voice Cloning - Advanced Speech Synthesis | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our cutting-edge AI voice cloning technology. Create realistic, personalized voices for customer service, content creation, and more." />
        <meta name="keywords" content="AI voice cloning, speech synthesis, voice generation, text-to-speech, voice AI, voice technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-cloning" />
      </Helmet>

      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4" />
              <span>AI Voice Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Voice Cloning
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create realistic, personalized voices with our advanced AI voice cloning technology. 
              Perfect for customer service, content creation, and interactive applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button-outline inline-flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Voice Cloning Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI voice cloning technology offers cutting-edge capabilities for creating realistic, personalized voices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI voice cloning can transform your business across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">per month</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies Used
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our voice cloning solution is built with state-of-the-art AI technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Voice Experiences?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our AI voice cloning technology and how it can transform your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIVoiceCloningPage;


}