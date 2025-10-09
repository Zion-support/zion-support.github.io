'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Play, Download, Upload, Settings, Users, Shield, Zap, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, DollarSign, Clock, Award, TrendingUp, BarChart, Globe, Lock, Headphones, Volume2, Waveform } from 'lucide-react';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'High-Fidelity Voice Synthesis',
      description: 'Create natural-sounding voice clones with 99.9% accuracy using advanced neural networks',
      benefits: ['Real-time voice generation', 'Emotion and tone control', 'Multiple language support', 'Custom voice training']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with voice authentication and anti-spoofing protection',
      benefits: ['Voice biometric authentication', 'Anti-deepfake detection', 'Encrypted voice data', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Ultra-fast voice synthesis with sub-100ms latency for live applications',
      benefits: ['Live streaming support', 'Real-time conversations', 'Low latency processing', 'Scalable infrastructure']
    },
    {
      icon: Users,
      title: 'Multi-Voice Management',
      description: 'Manage unlimited voice profiles with advanced organization and search capabilities',
      benefits: ['Voice library management', 'Team collaboration', 'Version control', 'Usage analytics']
    }
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate voiceovers for videos, podcasts, and audiobooks',
      icon: Headphones,
      examples: ['YouTube videos', 'Podcast episodes', 'E-learning content', 'Marketing materials']
    },
    {
      title: 'Customer Service',
      description: 'Create personalized AI assistants with custom voices',
      icon: Users,
      examples: ['IVR systems', 'Chatbots', 'Virtual assistants', 'Call center automation']
    },
    {
      title: 'Accessibility',
      description: 'Help people with speech impairments communicate naturally',
      icon: Volume2,
      examples: ['Text-to-speech', 'Communication aids', 'Assistive technology', 'Voice restoration']
    },
    {
      title: 'Entertainment',
      description: 'Create unique character voices for games and media',
      icon: Play,
      examples: ['Video games', 'Animation', 'Virtual reality', 'Interactive media']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        'Up to 5 voice profiles',
        '10 hours of voice generation/month',
        'Standard quality (44.1kHz)',
        'Basic security features',
        'Email support',
        'API access included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 voice profiles',
        '50 hours of voice generation/month',
        'High quality (48kHz)',
        'Advanced security features',
        'Priority support',
        'Custom voice training',
        'Team collaboration tools',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited voice profiles',
        'Unlimited voice generation',
        'Studio quality (96kHz)',
        'Enterprise security',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Voice Cloning - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice cloning technology with enterprise-grade security. Create natural-sounding voice clones for content creation, customer service, and accessibility applications." />
        <meta name="keywords" content="AI voice cloning, voice synthesis, text-to-speech, voice AI, voice technology, speech synthesis, voice generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Waveform className="w-4 h-4" />
            <span>AI Voice Technology</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Voice Cloning
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create natural-sounding voice clones with cutting-edge AI technology. Perfect for content creation, customer service, accessibility, and entertainment applications.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Voice Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">&lt;100ms</div>
              <div className="text-gray-300">Latency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Voice Cloning Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced Voice Cloning Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
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
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-400">
                      • {example}
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
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
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
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Voice Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI voice cloning technology today and experience the future of voice synthesis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceCloningPage;
