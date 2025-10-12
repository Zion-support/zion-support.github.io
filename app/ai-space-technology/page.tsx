'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Target, Shield, Database, Clock, Users, Award, Star, TrendingUp, Globe, Lock, Settings, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, Sparkles, Cpu, Rocket, Satellite } from 'lucide-react';

const AISpaceTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Autonomous Space Navigation',
      description: 'AI-powered autonomous navigation systems for spacecraft, satellites, and space exploration missions',
      benefits: ['Autonomous flight control', 'Collision avoidance', 'Mission optimization', 'Real-time decision making']
    },
    {
      icon: Satellite,
      title: 'Satellite Constellation Management',
      description: 'Intelligent management of satellite constellations for optimal coverage and communication',
      benefits: ['Orbital optimization', 'Communication routing', 'Resource management', 'Predictive maintenance']
    },
    {
      icon: Globe,
      title: 'Earth Observation AI',
      description: 'Advanced AI for analyzing satellite imagery and Earth observation data for various applications',
      benefits: ['Climate monitoring', 'Disaster prediction', 'Agricultural insights', 'Urban planning']
    },
    {
      icon: Shield,
      title: 'Space Security Systems',
      description: 'AI-powered security systems for protecting space assets and detecting threats',
      benefits: ['Threat detection', 'Asset protection', 'Cyber security', 'Incident response']
    }
  ];

  const applications = [
    {
      title: 'Space Exploration',
      description: 'AI systems for autonomous space exploration missions and planetary research',
      price: '$50,000/month',
      icon: Rocket
    },
    {
      title: 'Satellite Communications',
      description: 'Intelligent satellite communication networks for global connectivity',
      price: '$25,000/month',
      icon: Wifi
    },
    {
      title: 'Space Mining',
      description: 'AI-powered systems for asteroid mining and space resource extraction',
      price: '$100,000/month',
      icon: Package
    },
    {
      title: 'Space Tourism',
      description: 'AI systems for space tourism operations and passenger safety',
      price: '$75,000/month',
      icon: Users
    }
  ];

  const pricing = [
    {
      name: 'Space Starter',
      price: '$10,000',
      period: '/month',
      description: 'Basic space AI for small satellite operations',
      features: [
        'Basic navigation AI',
        'Simple mission control',
        'Standard support',
        'Basic documentation',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Space Professional',
      price: '$35,000',
      period: '/month',
      description: 'Advanced space AI for commercial space operations',
      features: [
        'Advanced navigation systems',
        'Constellation management',
        'Priority support',
        'Full documentation',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Space Enterprise',
      price: '$150,000',
      period: '/month',
      description: 'Full-scale space AI for enterprise space missions',
      features: [
        'Custom space algorithms',
        'Mission-critical systems',
        '24/7 dedicated support',
        'Custom documentation',
        'Full API access',
        'White-label solutions',
        'Dedicated space team'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Space Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI space technology for autonomous navigation, satellite management, and space exploration missions." />
        <meta name="keywords" content="space AI, satellite AI, space technology, autonomous navigation, space exploration, satellite management" />
        <meta property="og:title" content="AI Space Technology Solutions | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI space technology for autonomous navigation and space exploration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-space-technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Space Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI technology for space exploration, satellite management, and autonomous 
                space operations. Push the boundaries of what's possible in space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Launch Your Space Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Space Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our space AI technology combines advanced artificial intelligence with space engineering 
                to enable autonomous space operations and exploration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the transformative applications of AI in space technology and exploration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4">
                      <application.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                    <p className="text-gray-300 mb-4">{application.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{application.price}</div>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space AI Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect space AI solution for your mission requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`bg-gray-800 rounded-xl p-8 h-full ${plan.popular ? 'border-2 border-purple-500' : 'border border-gray-700'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Reach for the Stars?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our space technology experts to discuss how AI can power your space missions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Space Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISpaceTechnologyPage;