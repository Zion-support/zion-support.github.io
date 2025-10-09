'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Cpu, BarChart, PieChart, Target, Users, Award, Star, ArrowRight, Zap, Shield, Globe, Database, Cloud, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, TrendingDown, Activity, Lock, Smartphone, Code, MessageSquare, Eye, Mic, Cube, DollarSign, Scale, Package, Headphones, Truck, Smile, FileCheck, Lightbulb, Atom, Wifi, Leaf, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIQuantumPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for optimization, cryptography, and complex problem solving',
      benefits: ['Exponential speedup', 'Quantum supremacy', 'Breakthrough solutions']
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning for pattern recognition and data analysis',
      benefits: ['Quantum advantage', 'Faster training', 'Better accuracy']
    },
    {
      icon: Shield,
      title: 'Quantum Cryptography',
      description: 'Unbreakable quantum encryption and secure communication protocols',
      benefits: ['Unhackable security', 'Quantum key distribution', 'Future-proof encryption']
    },
    {
      icon: Cpu,
      title: 'Quantum Simulation',
      description: 'Simulate complex quantum systems for research and development',
      benefits: ['Molecular modeling', 'Material science', 'Drug discovery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Research',
      price: '$5,000/month',
      description: 'For academic and research institutions',
      features: [
        'Basic quantum access',
        'Standard algorithms',
        'Research support',
        'Documentation',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000/month',
      description: 'For large corporations with advanced needs',
      features: [
        'Full quantum suite',
        'Custom algorithms',
        'Dedicated support',
        'Training programs',
        'Priority access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Government',
      price: '$50,000/month',
      description: 'For government agencies and defense contractors',
      features: [
        'Unlimited access',
        'Classified algorithms',
        'Security clearance',
        'Dedicated infrastructure',
        '24/7 support',
        'Custom development',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantum Research Director, MIT',
      content: 'Zion Tech Group\'s quantum AI platform has revolutionized our research. We achieved quantum advantage in optimization problems that were previously impossible.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, QuantumCorp',
      content: 'The quantum machine learning capabilities are incredible. We\'re seeing 1000x speedup in our data processing tasks.',
      rating: 5
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of Research, PharmaTech',
      content: 'Quantum simulation has accelerated our drug discovery process by years. The molecular modeling capabilities are unmatched.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Quantum AI Computing - Next-Generation Quantum Intelligence | Zion Tech Group"
        description="Revolutionary quantum AI computing solutions for optimization, cryptography, and complex problem solving. Achieve quantum advantage with our cutting-edge platform. Starting at $5,000/month."
        keywords={['quantum AI', 'quantum computing', 'quantum algorithms', 'quantum machine learning', 'quantum cryptography', 'quantum simulation']}
        canonicalUrl="https://ziontechgroup.com/ai-quantum"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Atom className="w-4 h-4" />
                Next-Generation Quantum AI
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                Quantum AI Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum computing with AI to solve the world's most complex problems. 
                Achieve quantum advantage and breakthrough solutions that were previously impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Quantum Journey
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000x</div>
                <div className="text-gray-300">Speedup</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">Unbreakable</div>
                <div className="text-gray-300">Security</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">Future</div>
                <div className="text-gray-300">Ready</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Quantum AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of quantum computing combined with artificial intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Quantum AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum AI is transforming industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Drug Discovery</h3>
                <p className="text-gray-300">Accelerate pharmaceutical research with quantum molecular simulation and AI-powered drug design.</p>
              </div>
              
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Climate Modeling</h3>
                <p className="text-gray-300">Model complex climate systems and optimize renewable energy solutions with quantum computing.</p>
              </div>
              
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300">Develop unbreakable quantum encryption and secure communication protocols for the future.</p>
              </div>
              
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Modeling</h3>
                <p className="text-gray-300">Optimize portfolio management and risk assessment with quantum-enhanced algorithms.</p>
              </div>
              
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300">Optimize supply chains and production processes with quantum optimization algorithms.</p>
              </div>
              
              <div className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Aerospace</h3>
                <p className="text-gray-300">Design advanced materials and optimize flight paths with quantum simulation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Quantum Computing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing power that matches your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in Quantum AI Computing ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Quantum AI Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading researchers and organizations trust our quantum AI platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join the quantum computing revolution and unlock solutions to the world's most complex problems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quantum AI Computing Inquiry"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Quantum Journey
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIQuantumPage;