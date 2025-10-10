'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Eye, Zap, Globe, Shield, Clock, BarChart, Users, Settings, Brain, Activity, Cpu, Target, Database } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const DigitalTwinPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Digital Twin Creation",
      description: "Create accurate digital replicas of physical assets and systems"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live monitoring and synchronization with physical counterparts"
    },
    {
      icon: Globe,
      title: "Simulation Engine",
      description: "Advanced simulation capabilities for testing and optimization"
    },
    {
      icon: Shield,
      title: "Predictive Analytics",
      description: "AI-powered predictions and insights for proactive decision making"
    },
    {
      icon: Clock,
      title: "Historical Analysis",
      description: "Comprehensive historical data analysis and trend identification"
    },
    {
      icon: BarChart,
      title: "Performance Optimization",
      description: "Continuous optimization recommendations and performance insights"
    }
  ];

  const applications = [
    {
      title: "Manufacturing",
      description: "Digital twins of production lines, equipment, and entire factories",
      icon: "🏭",
      features: ["Production Optimization", "Predictive Maintenance", "Quality Control", "Supply Chain"]
    },
    {
      title: "Smart Cities",
      description: "Urban infrastructure monitoring and optimization",
      icon: "🏙️",
      features: ["Traffic Management", "Energy Grid", "Water Systems", "Public Services"]
    },
    {
      title: "Healthcare",
      description: "Patient monitoring, medical devices, and hospital operations",
      icon: "🏥",
      features: ["Patient Care", "Medical Devices", "Hospital Operations", "Treatment Planning"]
    },
    {
      title: "Energy & Utilities",
      description: "Power plants, renewable energy systems, and grid management",
      icon: "⚡",
      features: ["Power Generation", "Grid Management", "Renewable Energy", "Distribution"]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      value: "25%",
      description: "Reduced operational costs through predictive maintenance"
    },
    {
      title: "Efficiency Gain",
      value: "40%",
      description: "Improved operational efficiency and performance"
    },
    {
      title: "Downtime Reduction",
      value: "60%",
      description: "Significant reduction in unplanned downtime"
    },
    {
      title: "Decision Speed",
      value: "3x",
      description: "Faster decision making with real-time insights"
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
            Digital Twin Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Digital twin technology for real-time monitoring and simulation of physical assets. 
            Optimize performance, predict failures, and make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
              <div className="text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-400">Downtime Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-gray-400">Decision Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced digital twin capabilities for comprehensive asset management and optimization.
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

      {/* Applications Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital twin solutions across diverse industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{application.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{application.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {application.features.map((feature, featureIndex) => (
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
              Measurable results from our digital twin implementations.
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
              Our systematic approach to successful digital twin deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Data Collection</h3>
              <p className="text-gray-300 text-sm">Comprehensive data gathering from physical assets and systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Model Creation</h3>
              <p className="text-gray-300 text-sm">Building accurate digital replicas with advanced modeling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Integration</h3>
              <p className="text-gray-300 text-sm">Real-time synchronization and monitoring setup</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300 text-sm">Continuous improvement and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible solutions for digital twin implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,800/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Up to 5 digital twins
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Email support
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
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$7,500/mo</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Up to 25 digital twins
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Predictive analytics
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
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Unlimited digital twins
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Full platform access
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
                  White-label solutions
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
            Ready to Create Your Digital Twin?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your operations with digital twin technology. 
            Get started with a free consultation today.
          </p>
          
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalTwinPlatformPage;