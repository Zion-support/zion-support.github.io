'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Volume2, Headphones, MessageSquare, Zap, Shield, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Sparkles, Brain, Waveform } from 'lucide-react';

const AIVoiceProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Convert speech to text with 99% accuracy in 100+ languages',
      benefits: ['Real-time Transcription', 'Multi-language Support', 'Noise Cancellation', 'Speaker Identification']
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Generate natural-sounding speech from text with human-like voices',
      benefits: ['Natural Voices', 'Emotion Control', 'Speed Adjustment', 'Multiple Accents']
    },
    {
      icon: Headphones,
      title: 'Voice Analysis',
      description: 'Analyze voice characteristics, emotions, and speaker verification',
      benefits: ['Emotion Detection', 'Speaker Verification', 'Voice Cloning', 'Sentiment Analysis']
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build intelligent voice assistants and chatbots with natural conversations',
      benefits: ['Voice Commands', 'Context Understanding', 'Multi-turn Dialogues', 'Intent Recognition']
    }
  ];

  const useCases = [
    {
      title: 'Voice Assistants',
      description: 'Build intelligent voice assistants for customer service and automation',
      price: '$1,799/month',
      features: ['Voice Commands', 'Natural Conversations', 'Multi-language Support', 'Integration APIs']
    },
    {
      title: 'Call Center Automation',
      description: 'Automate call center operations with AI-powered voice processing',
      price: '$2,299/month',
      features: ['Call Transcription', 'Sentiment Analysis', 'Auto-routing', 'Quality Monitoring']
    },
    {
      title: 'Voice Analytics',
      description: 'Analyze customer calls and interactions for business insights',
      price: '$1,999/month',
      features: ['Call Analytics', 'Customer Insights', 'Performance Metrics', 'Trend Analysis']
    },
    {
      title: 'Accessibility Solutions',
      description: 'Voice-enabled applications for accessibility and inclusion',
      price: '$1,499/month',
      features: ['Screen Reading', 'Voice Navigation', 'Audio Descriptions', 'Multi-modal Support']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting with voice AI',
      features: [
        'Up to 10,000 minutes/month',
        '5 voice models',
        'Basic transcription',
        'Email support',
        'Standard accuracy (95%)',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Advanced voice processing for growing businesses',
      features: [
        'Up to 100,000 minutes/month',
        'Unlimited voice models',
        'Advanced transcription',
        'Priority support',
        'High accuracy (98%)',
        'Full API access',
        'Custom voices',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Comprehensive voice AI solution for large organizations',
      features: [
        'Unlimited minutes',
        'Unlimited models',
        'Premium transcription',
        '24/7 dedicated support',
        'Maximum accuracy (99%)',
        'Full API access',
        'Custom voice training',
        'Advanced analytics',
        'White-label options',
        'Dedicated infrastructure'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Voice Processing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice processing solutions with speech recognition, text-to-speech, and conversational AI. Starting at $999/month." />
        <meta name="keywords" content="ai voice processing, speech recognition, text to speech, voice ai, conversational ai, voice analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="text-white font-medium">AI-Powered Voice Processing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Hear the
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform speech into intelligence with our advanced AI voice processing platform. 
            Build voice assistants, automate conversations, and unlock the power of spoken language.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">50ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">API Availability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Voice Processing Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Voice AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Voice AI Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-cyan-400">{useCase.price}</span>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${useCase.title}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                  >
                    Get Started
                  </a>
                </div>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Voice AI Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Voice AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level encryption and compliance with industry standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time Processing</h3>
              <p className="text-gray-300">Ultra-fast voice processing with minimal latency</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">World-class AI engineers and voice specialists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Integration</h3>
              <p className="text-gray-300">Simple APIs and SDKs for seamless integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Hear the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with AI voice processing today and transform your business with intelligent voice solutions.
          </p>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceProcessingPage;