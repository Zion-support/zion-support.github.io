'use client';
import React from 'react';
import { Rocket, Zap, Shield, ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Brain, Cpu, Lightbulb } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FutureTechnologiesPage: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Emerging Technologies',
      description: 'Cutting-edge technologies that will shape the future',
      benefits: ['Quantum computing', 'Neural interfaces', 'Advanced robotics', 'Space technology']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Next-generation AI and machine learning technologies',
      benefits: ['AGI development', 'Neural networks', 'Deep learning', 'Cognitive computing']
    },
    {
      icon: Cpu,
      title: 'Advanced Computing',
      description: 'Revolutionary computing technologies and architectures',
      benefits: ['Quantum processors', 'Neuromorphic chips', 'Edge computing', 'Distributed systems']
    },
    {
      icon: Target,
      title: 'Biotechnology',
      description: 'Breakthrough biotechnology and life sciences innovations',
      benefits: ['Gene editing', 'Synthetic biology', 'Personalized medicine', 'Bioinformatics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced cybersecurity and privacy protection technologies',
      benefits: ['Quantum encryption', 'Zero-trust security', 'AI security', 'Privacy preservation']
    },
    {
      icon: Zap,
      title: 'Energy Innovation',
      description: 'Revolutionary energy technologies and sustainability solutions',
      benefits: ['Fusion energy', 'Advanced batteries', 'Smart grids', 'Carbon capture']
    }
  ];

  const technologies = [
    {
      title: 'Quantum Computing',
      description: 'Revolutionary computing power for complex problem solving',
      icon: Cpu
    },
    {
      title: 'Artificial General Intelligence',
      description: 'Human-level AI capabilities and reasoning',
      icon: Brain
    },
    {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces and neural prosthetics',
      icon: Target
    },
    {
      title: 'Space Technology',
      description: 'Advanced space exploration and colonization technologies',
      icon: Rocket
    }
  ];

  const applications = [
    {
      title: 'Scientific Research',
      description: 'Breakthrough research and discovery applications',
      icon: Lightbulb
    },
    {
      title: 'Healthcare Innovation',
      description: 'Revolutionary medical and healthcare technologies',
      icon: Shield
    },
    {
      title: 'Space Exploration',
      description: 'Advanced space exploration and colonization',
      icon: Rocket
    },
    {
      title: 'Environmental Solutions',
      description: 'Climate change and environmental protection technologies',
      icon: Target
    }
  ];

  const pricingTiers = [
    {
      name: 'Future Explorer',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for exploring emerging technologies and trends',
      features: [
        'Technology research',
        'Trend analysis',
        'Email support',
        'Monthly reports',
        'Basic consulting'
      ],
      popular: false
    },
    {
      name: 'Future Innovator',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for companies developing future technologies',
      features: [
        'Advanced research',
        'Custom development',
        'Priority support',
        'Weekly updates',
        'Technology transfer',
        'IP protection'
      ],
      popular: true
    },
    {
      name: 'Future Leader',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for leading future technology development',
      features: [
        'Dedicated research team',
        'Custom technology development',
        '24/7 support',
        'Real-time collaboration',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Future Technologies</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Next-Generation
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {' '}Technologies
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Explore the cutting-edge technologies that will shape tomorrow. 
                  From quantum computing to neural interfaces, we're building the future today.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Innovation Project
                </button>
                <button className="cyber-button-outline inline-flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Portfolio
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free technology assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Future trend analysis</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Future Technology Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive future technology solutions powered by cutting-edge research and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the cutting-edge technologies that will define the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((technology, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{technology.title}</h3>
                <p className="text-gray-300">{technology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Future Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how future technologies will transform our world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="cyber-card group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your future technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card relative ${tier.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'cyber-button-outline'
                }`}>
                  {tier.name === 'Future Leader' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the future technology revolution and create breakthrough solutions that will define tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Innovation Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FutureTechnologiesPage;