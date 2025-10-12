'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Rocket, Target, Globe, Code, Database, Smartphone, Lock, Wifi, MessageCircle, ShoppingCart, Box, Monitor, Link as LinkIcon, Server, Calendar, CheckSquare, Workflow, Mic, Eye, Heart, DollarSign, Package, Settings, Video, FileText, Car, Plane, Ship, Truck, Bot, Cpu as CpuIcon, Wifi as WifiIcon } from 'lucide-react';

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Car,
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems.',
      benefits: ['Computer Vision', 'Path Planning', 'Collision Avoidance', 'Real-time Decision Making']
    },
    {
      icon: Bot,
      title: 'Robotic Process Automation',
      description: 'Intelligent robots that automate complex manufacturing and service operations.',
      benefits: ['Precision Manufacturing', 'Quality Control', '24/7 Operations', 'Adaptive Learning']
    },
    {
      icon: Plane,
      title: 'Autonomous Drones',
      description: 'AI-powered drones for delivery, surveillance, and inspection with autonomous flight capabilities.',
      benefits: ['Autonomous Navigation', 'Payload Management', 'Weather Adaptation', 'Mission Planning']
    },
    {
      icon: Ship,
      title: 'Maritime Autonomy',
      description: 'Self-navigating ships and underwater vehicles for ocean exploration and cargo transport.',
      benefits: ['Ocean Navigation', 'Weather Prediction', 'Cargo Optimization', 'Environmental Monitoring']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Fully automated production lines with intelligent quality control and predictive maintenance.',
      icon: Package,
      benefits: ['Smart Production', 'Quality Assurance', 'Predictive Maintenance', 'Supply Chain Optimization']
    },
    {
      title: 'Logistics & Transportation',
      description: 'Autonomous delivery systems and smart transportation networks for efficient goods movement.',
      icon: Truck,
      benefits: ['Route Optimization', 'Fleet Management', 'Delivery Automation', 'Traffic Intelligence']
    },
    {
      title: 'Agriculture',
      description: 'Autonomous farming equipment and AI-powered crop management for precision agriculture.',
      icon: Globe,
      benefits: ['Precision Farming', 'Crop Monitoring', 'Automated Harvesting', 'Resource Optimization']
    },
    {
      title: 'Healthcare',
      description: 'Autonomous medical devices and robotic surgery systems for enhanced patient care.',
      icon: Heart,
      benefits: ['Surgical Robotics', 'Patient Monitoring', 'Medication Management', 'Diagnostic Assistance']
    }
  ];

  const pricing = [
    {
      name: 'Autonomous Consulting',
      price: '$10,000',
      period: '/month',
      description: 'Strategic planning and implementation of autonomous systems',
      features: [
        'Autonomy Readiness Assessment',
        'Technology Architecture Design',
        'Safety & Compliance Planning',
        'Pilot Program Development',
        'ROI Analysis',
        'Implementation Roadmap'
      ],
      popular: false
    },
    {
      name: 'Autonomous Development',
      price: '$25,000',
      period: '/month',
      description: 'Custom autonomous system development and deployment',
      features: [
        'Custom AI Algorithms',
        'Sensor Integration',
        'Control System Development',
        'Testing & Validation',
        'Safety Certification',
        '24/7 Support'
      ],
      popular: true
    },
    {
      name: 'Autonomous Enterprise',
      price: '$75,000',
      period: '/month',
      description: 'Complete autonomous infrastructure and fleet management',
      features: [
        'Full Autonomous Fleet',
        'Central Command Center',
        'Advanced Analytics',
        'Predictive Maintenance',
        'Dedicated Support Team',
        'Training & Certification'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Safety Record' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Operation' },
    { number: '100+', label: 'Autonomous Vehicles' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Systems Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous systems for vehicles, robots, drones, and smart infrastructure. Transform your operations with self-operating intelligent systems." />
        <meta name="keywords" content="autonomous systems, AI robots, self-driving vehicles, autonomous drones, robotic automation, smart infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16 relative">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                  🤖 Next-Generation Autonomous AI
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                AI Autonomous
                <span className="block text-6xl md:text-8xl mt-2">Systems</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Deploy intelligent autonomous systems that operate independently, make real-time decisions, 
                and adapt to changing environments. Revolutionize your operations with self-operating AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Autonomous Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous AI <span className="text-cyan-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Self-operating intelligent systems that make decisions, adapt, and perform complex tasks autonomously.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-purple-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with autonomous systems designed for specific operational needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Systems <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the autonomous solution that fits your operational requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-400/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
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
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
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
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Autonomous Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your operations with intelligent autonomous systems that work 24/7, 
                make smart decisions, and adapt to changing conditions. Get started with a free assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Autonomous Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free autonomous assessment • ✓ No obligation • ✓ 30-day autonomous operation guarantee</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AIAutonomousSystemsPage;
