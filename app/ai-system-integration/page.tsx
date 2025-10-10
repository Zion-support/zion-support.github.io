'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Zap, Shield, Database, Cloud, CheckCircle, ArrowRight, Users, BarChart, Globe, Cpu, Link } from 'lucide-react';

export default function AISystemIntegrationPage() {
  const features = [
    {
      icon: Settings,
      title: 'Seamless Integration',
      description: 'Connect disparate systems with intelligent integration solutions'
    },
    {
      icon: Zap,
      title: 'Real-time Synchronization',
      description: 'Keep all systems in sync with real-time data flow and updates'
    },
    {
      icon: Shield,
      title: 'Secure Connections',
      description: 'Enterprise-grade security for all system integrations'
    },
    {
      icon: Database,
      title: 'Data Harmonization',
      description: 'Unify data from multiple sources into a single, coherent system'
    }
  ];

  const services = [
    {
      title: 'API Integration',
      description: 'Connect systems through secure and efficient API integrations',
      icon: Link
    },
    {
      title: 'Database Integration',
      description: 'Unify data from multiple databases and data sources',
      icon: Database
    },
    {
      title: 'Cloud Integration',
      description: 'Seamlessly integrate cloud and on-premises systems',
      icon: Cloud
    },
    {
      title: 'Legacy System Integration',
      description: 'Modernize and integrate legacy systems with new technologies',
      icon: Settings
    },
    {
      title: 'Third-party Integrations',
      description: 'Connect with popular business tools and platforms',
      icon: Globe
    },
    {
      title: 'Custom Integration Solutions',
      description: 'Tailored integration solutions for unique business requirements',
      icon: Cpu
    }
  ];

  const benefits = [
    'Reduced manual data entry',
    'Improved data accuracy',
    'Enhanced operational efficiency',
    'Real-time data visibility',
    'Cost savings through automation',
    'Better decision making'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services powered by AI. Connect, synchronize, and optimize your business systems." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI System Integration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect and synchronize your business systems with intelligent integration solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Integration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use AI-powered tools to create seamless, efficient, and secure system integrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Integration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive system integration solutions for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of System Integration
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business operations with seamless system integration
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Integration Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Analysis & Planning</h4>
                    <p className="text-gray-300">Assess your current systems and requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Design & Architecture</h4>
                    <p className="text-gray-300">Create integration architecture and data flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Implementation</h4>
                    <p className="text-gray-300">Develop and deploy integration solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Testing & Optimization</h4>
                    <p className="text-gray-300">Test, monitor, and optimize performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Integrate Your Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you connect and optimize your business systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Start Integration Project
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}