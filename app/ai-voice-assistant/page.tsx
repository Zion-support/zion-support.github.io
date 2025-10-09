'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Mic, Phone, MessageSquare, Zap, CheckCircle, Star, ArrowRight, Brain, Volume2, Headphones, Settings, Shield, Globe, Clock, Users, TrendingUp } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Recognition',
      description: 'Advanced speech-to-text with 99.5% accuracy in 50+ languages',
      price: 'Included'
    },
    {
      icon: Brain,
      title: 'AI Conversation Engine',
      description: 'Context-aware conversations with memory and learning capabilities',
      price: 'Included'
    },
    {
      icon: Phone,
      title: 'Multi-Channel Support',
      description: 'Phone, web, mobile app, and API integration',
      price: 'Included'
    },
    {
      icon: Volume2,
      title: 'Custom Voice Synthesis',
      description: 'Create unique brand voices with emotional tone control',
      price: '+$99/month'
    },
    {
      icon: Headphones,
      title: 'Real-time Translation',
      description: 'Instant translation in 100+ languages during conversations',
      price: '+$199/month'
    },
    {
      icon: Settings,
      title: 'Advanced Customization',
      description: 'Custom workflows, integrations, and business logic',
      price: '+$299/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic voice recognition',
        'Email & phone support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI conversation engine',
        'Custom voice synthesis',
        'Priority support',
        'Advanced analytics & reporting',
        'API access',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'Real-time translation',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'Advanced security & compliance',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Handle 80% of customer inquiries automatically with intelligent routing',
      icon: MessageSquare,
      savings: 'Save $50K+ annually'
    },
    {
      title: 'Sales Qualification',
      description: 'Qualify leads 24/7 with intelligent conversation flows',
      icon: TrendingUp,
      savings: 'Increase conversions by 40%'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Automate booking with natural language understanding',
      icon: Clock,
      savings: 'Reduce no-shows by 60%'
    },
    {
      title: 'Order Processing',
      description: 'Process orders via voice with payment integration',
      icon: Shield,
      savings: 'Process 3x faster than forms'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice Solutions</title>
        <meta name="description" content="Advanced AI voice assistant with natural conversation, multi-language support, and custom voice synthesis. Starting at $199/month. Transform customer interactions." />
        <meta name="keywords" content="AI voice assistant, voice AI, conversational AI, voice recognition, speech synthesis, customer service automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain-effect">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text-enhanced cyber-text glitch">
              AI Voice Assistant
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Voice Solutions for Modern Business
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform customer interactions with our advanced AI voice assistant. Natural conversations, 
              multi-language support, and seamless integration across all channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Demo
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300">Voice Recognition Accuracy</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card-advanced p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <div className="text-cyan-400 font-semibold">{feature.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="quantum-card p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                      <div className="text-green-400 font-semibold mb-2">{useCase.savings}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced p-8 relative ${plan.popular ? 'border-2 border-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies already using our AI voice assistant to improve customer satisfaction and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button-enhanced inline-flex items-center text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIVoiceAssistantPage;