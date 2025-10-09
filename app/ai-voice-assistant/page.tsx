'use client';
import React from 'react';
import { Mic, Volume2, Brain, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding context, intent, and complex queries in multiple languages.',
      benefits: ['Multi-language support', 'Context awareness', 'Intent recognition']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning Integration',
      description: 'Continuously learning AI that adapts to user preferences and improves response accuracy over time.',
      benefits: ['Adaptive learning', 'Personalized responses', 'Continuous improvement']
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: 'Voice Synthesis',
      description: 'High-quality text-to-speech with natural intonation, emotion, and multiple voice options.',
      benefits: ['Natural voice generation', 'Emotion detection', 'Custom voice training']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Ultra-low latency voice processing for seamless, natural conversations and instant responses.',
      benefits: ['<100ms response time', 'Real-time streaming', 'Concurrent processing']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Deploy intelligent voice assistants for 24/7 customer support with human-like interactions.',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      metrics: '95% customer satisfaction, 60% cost reduction'
    },
    {
      title: 'Healthcare Applications',
      description: 'Voice-enabled medical assistants for patient care, appointment scheduling, and health monitoring.',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      metrics: 'HIPAA compliant, 40% efficiency gain'
    },
    {
      title: 'Smart Home Integration',
      description: 'Control IoT devices, manage schedules, and provide information through voice commands.',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      metrics: '50+ device integrations, 99.9% uptime'
    },
    {
      title: 'Business Productivity',
      description: 'Voice-powered meeting assistants, note-taking, and task management for enhanced productivity.',
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      metrics: '30% productivity increase, 2x faster task completion'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 voice interactions/month',
        '2 voice channels',
        'Basic NLP processing',
        'Email support',
        'Standard voice quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 voice interactions/month',
        '10 voice channels',
        'Advanced NLP with context awareness',
        'Priority support',
        'High-quality voice synthesis',
        'Custom voice training',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited voice interactions',
        'Unlimited voice channels',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Premium voice quality',
        'Custom voice development',
        'Advanced analytics & reporting',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Voice Assistant
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Intelligent Voice-Powered Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Transform your business with our advanced AI voice assistant technology. 
              Featuring natural language processing, real-time voice synthesis, and machine learning 
              capabilities that adapt to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Mic className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Voice Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with AI Voice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses already using our AI voice assistant technology 
              to improve customer experience, increase efficiency, and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center"
              >
                <Mic className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIVoiceAssistantPage;