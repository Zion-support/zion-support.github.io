'use client';
import React, { useState, useEffect } from 'react';
import { Mic, Brain, Zap, CheckCircle, Star, ArrowRight, Target, Mail, Phone, MapPin, Globe, BarChart, AlertCircle, Volume2, Headphones, MessageSquare, Settings, Shield, Clock } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and complex conversational patterns.',
      benefits: ['95% accuracy in voice recognition', 'Multi-language support', 'Context-aware responses']
    },
    {
      icon: Mic,
      title: 'Voice Recognition',
      description: 'State-of-the-art voice recognition technology that works in noisy environments.',
      benefits: ['Real-time voice processing', 'Noise cancellation', 'Speaker identification']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'AI-powered automation that can perform complex tasks through voice commands.',
      benefits: ['Task automation', 'Workflow integration', 'Smart scheduling']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on voice interactions and user behavior patterns.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 voice interactions/day',
        'Basic NLP capabilities',
        'Standard voice recognition',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 1,000 voice interactions/day',
        'Advanced NLP capabilities',
        'Premium voice recognition',
        'Priority support',
        'API integration',
        'Advanced analytics',
        'Custom voice training',
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
        'Unlimited voice interactions',
        'Enterprise NLP features',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        'SSO integration',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'CTO',
      company: 'VoiceTech Solutions',
      content: 'AI Voice Assistant has revolutionized our customer service. Response time improved by 60% and customer satisfaction is at an all-time high.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Director',
      company: 'Smart Home Corp',
      content: 'The natural language processing is incredible. Our customers can speak naturally and the AI understands perfectly.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'CEO',
      company: 'Automation Plus',
      content: 'We integrated the voice assistant into our workflow and productivity increased by 40%. It\'s like having a super-smart assistant.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </a>
            <a href="/contact" className="cyber-button">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-4 py-2 mb-6">
            <Mic className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-400 font-medium">AI Voice Assistant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent Voice Assistant
          </h1>
          <p className="text-xl text-indigo-400 mb-8 font-medium">
            AI-Powered Voice Recognition & Natural Language Processing
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with AI voice technology that understands, responds, and automates 
            tasks through natural conversation. Boost productivity by 40% with intelligent voice interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#pricing" className="cyber-button w-full sm:w-auto text-center">
              Start Free Trial
            </a>
            <a href="#demo" className="cyber-button w-full sm:w-auto text-center" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Watch Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
              <div className="text-gray-300">Voice Recognition Accuracy</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Response Time</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Advanced Voice Intelligence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" id="pricing">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                      : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Customer Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Voice AI Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join industry leaders using AI voice technology to transform their business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved. | 
            <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a> | 
            <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 ml-2">(302) 464-0950</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIVoiceAssistantPage;