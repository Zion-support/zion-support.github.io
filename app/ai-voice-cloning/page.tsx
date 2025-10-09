'use client';
import React from 'react';

import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    'High-fidelity voice synthesis with 99.9% accuracy',
    'Real-time voice cloning in under 30 seconds',
    'Multi-language support (50+ languages)',
    'Emotion and tone control capabilities',
    'Custom voice training with minimal samples',
    'API integration for seamless deployment',
    'Voice aging and gender transformation',
    'Batch processing for multiple voices',
    'Privacy-compliant voice data handling',
    'Real-time voice conversion'
  ];

  const benefits = [
    'Create personalized voice assistants for your brand',
    'Improve accessibility with custom voice options',
    'Reduce voice actor costs by 90%',
    'Enable 24/7 multilingual customer support',
    'Enhance user experience with familiar voices',
    'Scale voice content production instantly',
    'Maintain brand consistency across all touchpoints',
    'Enable voice personalization for users'
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Deploy AI agents with your brand voice for consistent customer interactions',
      icon: '🎧'
    },
    {
      title: 'Content Creation',
      description: 'Generate voiceovers for videos, podcasts, and presentations',
      icon: '🎬'
    },
    {
      title: 'Accessibility',
      description: 'Create custom voices for visually impaired users',
      icon: '♿'
    },
    {
      title: 'Education',
      description: 'Develop personalized learning experiences with familiar voices',
      icon: '📚'
    },
    {
      title: 'Entertainment',
      description: 'Create unique character voices for games and media',
      icon: '🎮'
    },
    {
      title: 'Marketing',
      description: 'Produce consistent brand voice across all marketing materials',
      icon: '📢'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
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
>>>>>>> origin/main
  ];

  const pricing = [
    {
<<<<<<< HEAD
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 voice clones',
        '10,000 characters/month',
        'Basic emotion control',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 voice clones',
        '50,000 characters/month',
        'Advanced emotion control',
        'Priority support',
        'Custom integrations',
        'Real-time processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited voice clones',
        'Unlimited characters',
        'Full emotion & tone control',
        'Dedicated support',
        'Custom model training',
        'White-label solution',
        'SLA guarantee'
      ],
=======
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
>>>>>>> origin/main
      popular: false
    }
  ];

<<<<<<< HEAD
  const technologies = [
    'Tacotron 2', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning',
    'Custom Neural Networks', 'Deep Learning', 'Signal Processing',
    'Text-to-Speech Synthesis', 'Voice Conversion', 'Audio Processing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Cloning & Synthesis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice cloning technology for creating realistic voice clones and personalized speech systems. Starting at $299/month." />
        <meta name="keywords" content="voice cloning, voice synthesis, text to speech, AI voice, voice AI, speech technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Voice Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Voice Cloning & Synthesis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create realistic voice clones and personalized speech systems with our cutting-edge AI technology. 
            Transform text into natural-sounding speech that matches any voice.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">30s</div>
            <div className="text-gray-300">Clone Time</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Voice Cloning Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Voice Cloning?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            <span>AI Voice Technology</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Voice Cloning & Synthesis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create realistic voice clones and personalized speech systems with our advanced AI voice synthesis technology. 
            Perfect for voice assistants, content creation, and accessibility solutions.
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
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Advanced Voice Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our Voice AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-300 text-sm">
                    Transform your voice applications with cutting-edge AI technology that delivers natural, 
                    human-like speech synthesis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Use Cases & Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                <p className="text-gray-300 text-sm">
                  Perfect for creating engaging voice content and improving user accessibility.
                </p>
              </div>
            ))}
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
>>>>>>> origin/main
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
<<<<<<< HEAD
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Voice Cloning Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Clone Your Voice?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI voice cloning technology and create personalized speech systems for your business.
=======
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Tacotron 2', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning', 'Custom Neural Networks', 'TTS APIs'].map((tech, index) => (
              <div key={index} className="cyber-card p-4 text-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Voice Experiences?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our AI voice cloning technology and how it can transform your applications.
>>>>>>> origin/main
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
<<<<<<< HEAD
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
=======
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
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default AIVoiceCloningPage;
=======
export default AIVoiceCloningPage;
>>>>>>> origin/main
