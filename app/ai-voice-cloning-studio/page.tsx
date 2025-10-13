import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, ArrowRight, CheckCircle, Star, Cloud, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Volume2, Play, Download, Upload, Zap, Globe, Smartphone, Activity } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIVoiceCloningStudio = () => {
  const features = [
    'High-Quality Voice Synthesis',
    'Multi-Language Support',
    'Emotion & Tone Control',
    'Real-time Voice Generation',
    'Custom Voice Training',
    'API Integration',
    'Batch Processing',
    'Voice Cloning from Samples',
    'Text-to-Speech Conversion',
    'Voice Customization',
    'Audio Format Support',
    'Cloud Processing'
  ];

  const pricingTiers = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 hours of voice generation',
        'Basic voice models',
        'Standard quality',
        'Email support',
        '1 user account',
        'MP3/WAV export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professional use',
      features: [
        '50 hours of voice generation',
        'Premium voice models',
        'High quality synthesis',
        'Priority support',
        'Up to 5 user accounts',
        'Multiple format export',
        'Custom voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited voice generation',
        'Enterprise voice models',
        'Ultra-high quality',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const voiceFeatures = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Voice Cloning',
      description: 'Create realistic voice clones from just a few minutes of audio samples.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Text-to-Speech',
      description: 'Convert any text to natural-sounding speech with multiple voice options.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Real-time Generation',
      description: 'Generate voice content in real-time for live applications and streaming.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Language',
      description: 'Support for 50+ languages with native pronunciation and accents.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Training',
      description: 'Train custom voice models with your own voice samples and data.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Emotion Control',
      description: 'Control emotion, tone, and speaking style for more expressive voice generation.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    'Podcast Production',
    'Audiobook Creation',
    'Video Voiceovers',
    'E-learning Content',
    'Accessibility Services',
    'Gaming Characters',
    'Virtual Assistants',
    'Marketing Content'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Voice Cloning Studio - Professional Voice Synthesis | Zion Tech Group"
        description="Create realistic voice clones and high-quality text-to-speech with our AI Voice Cloning Studio. Multi-language support, custom training, and API integration. Starting at $29/month."
        keywords="voice cloning, text to speech, voice synthesis, AI voice, voice generation, voice training, TTS, voiceover"
        canonical="https://ziontechgroup.com/ai-voice-cloning-studio"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Mic className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI Voice Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              AI Voice Cloning Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create realistic voice clones and high-quality text-to-speech with our advanced AI technology. 
            Multi-language support, custom training, and professional-grade voice synthesis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Listen to Demo
              <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Voice Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">&lt;2s</div>
              <div className="text-gray-300 text-sm">Generation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Voice Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI technology for creating realistic voice clones and natural-sounding speech.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Voice Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for professional voice generation and cloning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From content creation to accessibility, our voice technology serves diverse needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-center"
              >
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors font-semibold">
                  {useCase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Voice Generation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your voice generation needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular 
                    ? 'border-purple-500/50 shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Creating Amazing Voices
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of creators and businesses using AI Voice Cloning Studio to 
            create professional voice content. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Plans
              <Mic className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceCloningStudio;