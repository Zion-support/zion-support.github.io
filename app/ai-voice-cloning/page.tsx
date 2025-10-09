'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, CheckCircle, ArrowRight, Star, TrendingUp, Users, Target, Zap, Brain, Volume2, Clock, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'High-Quality Voice Cloning',
      description: 'Create realistic voice clones with 99% accuracy and natural intonation'
    },
    {
      icon: Volume2,
      title: 'Multiple Voice Options',
      description: 'Choose from a library of professional voices or clone your own'
    },
    {
      icon: Clock,
      title: 'Real-Time Synthesis',
      description: 'Generate voice content instantly with real-time processing'
    },
    {
      icon: Target,
      title: 'API Integration',
      description: 'Seamlessly integrate voice cloning into your applications'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate voice content in multiple languages and accents'
    },
    {
      icon: Users,
      title: 'Custom Voice Training',
      description: 'Train custom voice models for your specific needs'
    }
  ];

  const benefits = [
    '99% voice accuracy and naturalness',
    'Multiple languages and accents',
    'Real-time voice generation',
    '60% cost savings on voice production',
    'Unlimited voice content generation',
    'Professional quality output'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        'Up to 10 voice clones',
        'Basic voice quality',
        'Standard languages',
        'Email support',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$259',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 50 voice clones',
        'High-quality voice synthesis',
        'Multiple languages',
        'Priority support',
        'Custom voice training',
        'Advanced API features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$519',
      period: '/month',
      description: 'For large organizations and production companies',
      features: [
        'Unlimited voice clones',
        'Premium voice quality',
        'All languages and accents',
        '24/7 dedicated support',
        'White-label options',
        'Advanced integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Most Popular AI Solution</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Voice Cloning">
              AI Voice Cloning
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Create Realistic Voice Clones with AI
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your content creation with AI-powered voice cloning technology. 
              Generate natural-sounding voice content with 99% accuracy in multiple languages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <Link 
                to="/contact" 
                className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to create realistic voice content with AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <div className="cyber-card p-8">
            <h2 id="benefits-heading" className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your voice cloning needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Voice Content?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of creators already using AI Voice Cloning to produce professional voice content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="flex items-center justify-center space-x-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIVoiceCloningPage;