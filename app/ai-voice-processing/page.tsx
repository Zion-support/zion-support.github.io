'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Mic, Volume2, Brain, Zap, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, Headphones, MessageSquare, Play } from 'lucide-react';

const AIVoiceProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Convert speech to text with high accuracy in multiple languages.',
      benefits: ['Multi-language Support', 'Real-time Processing', 'Noise Cancellation', 'Accent Adaptation']
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Generate natural-sounding speech from text with various voice options.',
      benefits: ['Natural Voices', 'Emotion Control', 'Speed Adjustment', 'Custom Voice Training']
    },
    {
      icon: Brain,
      title: 'Voice Analysis',
      description: 'Analyze voice patterns for emotion, sentiment, and speaker identification.',
      benefits: ['Emotion Detection', 'Sentiment Analysis', 'Speaker Verification', 'Voice Biometrics']
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build intelligent voice assistants and chatbots with natural conversation flow.',
      benefits: ['Context Understanding', 'Multi-turn Conversations', 'Intent Recognition', 'Response Generation']
    }
  ];

  const useCases = [
    {
      title: 'Voice Assistants',
      description: 'Create intelligent voice assistants for customer service and automation',
      icon: Headphones,
      results: ['24/7 availability', 'Natural conversations', 'Multi-language support', 'Reduced wait times']
    },
    {
      title: 'Call Center Automation',
      description: 'Automate call routing, transcription, and customer service',
      icon: Phone,
      results: ['80% faster call processing', '100% call transcription', 'Improved customer satisfaction', 'Cost reduction']
    },
    {
      title: 'Accessibility Solutions',
      description: 'Help people with disabilities through voice-controlled interfaces',
      icon: Users,
      results: ['Improved accessibility', 'Voice navigation', 'Hands-free operation', 'Inclusive design']
    },
    {
      title: 'Content Creation',
      description: 'Generate audio content, podcasts, and voiceovers automatically',
      icon: Play,
      results: ['Faster content production', 'Consistent quality', 'Multiple voice options', 'Cost efficiency']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Voice-enabled medical records, patient communication, and diagnostics',
      icon: '🏥'
    },
    {
      name: 'Education',
      description: 'Interactive learning, language training, and accessibility tools',
      icon: '🎓'
    },
    {
      name: 'Finance',
      description: 'Voice banking, fraud detection, and customer service automation',
      icon: '💰'
    },
    {
      name: 'Automotive',
      description: 'In-car voice assistants, hands-free controls, and navigation',
      icon: '🚗'
    },
    {
      name: 'Retail',
      description: 'Voice shopping, customer support, and inventory management',
      icon: '🛒'
    },
    {
      name: 'Entertainment',
      description: 'Voice-controlled games, content creation, and interactive media',
      icon: '🎮'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 minutes/month',
        'Basic voice models',
        'Email support',
        'Standard API access',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 minutes/month',
        'Advanced voice models',
        'Priority support',
        'Custom voice training',
        'Real-time processing',
        'Advanced analytics',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited minutes',
        'Custom voice development',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantees',
        'Custom training programs',
        'Dedicated account manager'
      ]
    }
  ];

  const stats = [
    { number: '99%', label: 'Speech Accuracy' },
    { number: '50ms', label: 'Response Time' },
    { number: '100+', label: 'Languages Supported' },
    { number: '24/7', label: 'Real-time Processing' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Processing - Zion Tech Group"
        description="Advanced AI voice processing with 99% accuracy. Speech recognition, text-to-speech, voice analysis, and conversational AI solutions for every industry."
        keywords={['AI voice processing', 'speech recognition', 'text-to-speech', 'voice AI', 'conversational AI', 'voice assistants']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-processing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Voice Processing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform speech into intelligence with advanced voice AI technology
              </p>
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-cyan-400" />
                  <span>99% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>50ms Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>100+ Languages</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Voice AI Features
              </h2>
              <p className="text-xl text-gray-400">
                Powerful voice processing capabilities for every application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400">
                See how voice AI transforms different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400">
                Voice AI solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-400">
                Flexible pricing for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.name === 'Professional'
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/25'
                      : 'border-gray-700 hover:border-cyan-400'
                  }`}
                >
                  {plan.name === 'Professional' && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.name === 'Professional'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Hear the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with advanced voice AI technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIVoiceProcessingPage;