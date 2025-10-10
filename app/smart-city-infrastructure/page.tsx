'use client';

import React from 'react';
import { ArrowRight, Building, Zap, Globe, Shield, Users, BarChart, CheckCircle, Star, Brain, Code, Palette, Camera, Smartphone, Laptop, Monitor, Wifi, Car, Lightbulb, Droplets, Trash2, TreePine } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Intelligent building management with automated climate control, energy optimization, and predictive maintenance'
    },
    {
      icon: Zap,
      title: 'Smart Grid',
      description: 'Advanced energy distribution network with real-time monitoring and automated load balancing'
    },
    {
      icon: Globe,
      title: 'IoT Integration',
      description: 'Comprehensive sensor network connecting all city infrastructure for real-time data collection'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security protecting critical city infrastructure from cyber threats'
    },
    {
      icon: Users,
      title: 'Citizen Services',
      description: 'Digital platforms for citizen engagement, service delivery, and government transparency'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'AI-powered analytics for urban planning, traffic optimization, and resource management'
    }
  ];

  const solutions = [
    {
      title: 'Smart Transportation',
      description: 'Intelligent traffic management, autonomous vehicle integration, and public transit optimization',
      icon: '🚗',
      benefits: ['Reduced congestion', 'Lower emissions', 'Improved safety', 'Real-time updates']
    },
    {
      title: 'Energy Management',
      description: 'Smart grid technology with renewable energy integration and demand response systems',
      icon: '⚡',
      benefits: ['Energy efficiency', 'Cost savings', 'Renewable integration', 'Grid stability']
    },
    {
      title: 'Water & Waste',
      description: 'Smart water management, waste collection optimization, and environmental monitoring',
      icon: '💧',
      benefits: ['Water conservation', 'Waste reduction', 'Environmental protection', 'Cost optimization']
    },
    {
      title: 'Public Safety',
      description: 'AI-powered surveillance, emergency response systems, and predictive policing',
      icon: '🛡️',
      benefits: ['Crime prevention', 'Faster response', 'Resource optimization', 'Community safety']
    }
  ];

  const pricingTiers = [
    {
      name: 'Smart District',
      price: '$50,000',
      period: '/month',
      description: 'Complete smart infrastructure for a city district',
      features: [
        'Up to 10,000 residents',
        'Basic IoT sensors',
        'Smart lighting',
        'Traffic management',
        'Waste optimization',
        '24/7 monitoring'
      ],
      popular: false
    },
    {
      name: 'Smart City',
      price: '$150,000',
      period: '/month',
      description: 'Comprehensive smart city solution for mid-size cities',
      features: [
        'Up to 100,000 residents',
        'Advanced IoT network',
        'Smart grid integration',
        'Public safety systems',
        'Citizen engagement platform',
        'Data analytics dashboard',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Mega City',
      price: '$500,000',
      period: '/month',
      description: 'Full-scale smart city infrastructure for large metropolitan areas',
      features: [
        'Unlimited residents',
        'Complete IoT ecosystem',
        'AI-powered management',
        'Advanced security',
        'Multi-modal transportation',
        'Environmental monitoring',
        'Dedicated support team',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Smart City Infrastructure Solutions - Urban Technology | Zion Tech Group"
        description="Comprehensive smart city infrastructure solutions with IoT integration, smart grid technology, and AI-powered urban management systems."
        keywords="smart city, urban infrastructure, IoT solutions, smart grid, traffic management, citizen services, urban planning"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Smart City Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your city into a connected, intelligent, and sustainable urban environment. 
            Our comprehensive smart city solutions optimize resources, improve citizen services, and enhance quality of life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
              <div className="text-gray-400">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
              <div className="text-gray-400">Traffic Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">25%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Citizen Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Infrastructure Components</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive smart city infrastructure designed to optimize urban living and resource management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integrated solutions that transform urban infrastructure into intelligent, connected systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart City Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable smart city solutions designed for cities of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' 
                  : 'border-gray-700/50'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Build the City of Tomorrow
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Partner with us to transform your city into a smart, sustainable, and connected urban environment. 
            Join the smart city revolution and improve the lives of your citizens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartCityInfrastructurePage;