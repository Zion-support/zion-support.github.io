'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Building, Zap, Globe, Shield, Clock, BarChart, Users, Settings, Brain, Activity, Wifi, Camera, Car } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const SmartCityInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: "Smart Infrastructure",
      description: "Intelligent city infrastructure with IoT sensors and real-time monitoring systems"
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Smart grid optimization and renewable energy integration for sustainable cities"
    },
    {
      icon: Globe,
      title: "IoT Integration",
      description: "Comprehensive IoT platform connecting all city systems and services"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Advanced security systems with AI-powered threat detection and response"
    },
    {
      icon: Clock,
      title: "Real-time Analytics",
      description: "Live data processing and analytics for informed decision making"
    },
    {
      icon: BarChart,
      title: "Citizen Services",
      description: "Digital services and platforms for improved citizen engagement"
    }
  ];

  const solutions = [
    {
      title: "Smart Transportation",
      description: "Intelligent traffic management, autonomous vehicles, and public transit optimization",
      icon: "🚗",
      features: ["Traffic Optimization", "Autonomous Vehicles", "Public Transit", "Parking Management"]
    },
    {
      title: "Environmental Monitoring",
      description: "Air quality monitoring, waste management, and sustainability tracking",
      icon: "🌱",
      features: ["Air Quality", "Waste Management", "Water Quality", "Noise Monitoring"]
    },
    {
      title: "Public Safety",
      description: "AI-powered surveillance, emergency response, and crime prevention",
      icon: "🛡️",
      features: ["Video Analytics", "Emergency Response", "Crime Prevention", "Crowd Management"]
    },
    {
      title: "Energy & Utilities",
      description: "Smart grid management, water systems, and utility optimization",
      icon: "⚡",
      features: ["Smart Grid", "Water Management", "Street Lighting", "Waste Collection"]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      value: "30%",
      description: "Reduced operational costs through intelligent automation"
    },
    {
      title: "Energy Savings",
      value: "40%",
      description: "Improved energy efficiency and renewable integration"
    },
    {
      title: "Response Time",
      value: "50%",
      description: "Faster emergency response and service delivery"
    },
    {
      title: "Citizen Satisfaction",
      value: "85%",
      description: "Higher citizen satisfaction with digital services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Smart City Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your city with intelligent infrastructure, IoT integration, and data analytics. 
            Build sustainable, efficient, and citizen-friendly urban environments.
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
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-400">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-400">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Infrastructure Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive smart city solutions designed for modern urban environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of urban life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{solution.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our smart city implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology for successful smart city deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300 text-sm">Comprehensive city infrastructure analysis and planning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Design</h3>
              <p className="text-gray-300 text-sm">Custom smart city architecture and solution design</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Deploy</h3>
              <p className="text-gray-300 text-sm">Phased implementation with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Optimize</h3>
              <p className="text-gray-300 text-sm">Continuous monitoring and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart City Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible solutions for cities of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Small City</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$6,800/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic IoT infrastructure
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Traffic management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Citizen portal
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Metropolitan</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$15,000/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Full IoT platform
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  AI-powered services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mega City</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Complete ecosystem
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Build Your Smart City?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your city with intelligent infrastructure and citizen-focused solutions. 
            Start your smart city journey today.
          </p>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Planning
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartCityInfrastructurePage;