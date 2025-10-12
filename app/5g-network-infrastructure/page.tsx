import React from 'react'
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Wifi, Radio, Network, Shield, BarChart3, Globe, CheckCircle, Zap, Cpu, Database } from 'lucide-react';

export default function FiveGNetworkInfrastructurePage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Core Network',
      description: 'Deploy advanced 5G core network infrastructure with cloud-native architecture and network slicing capabilities.',
    },
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: 'RAN Infrastructure',
      description: 'Implement 5G Radio Access Network (RAN) with massive MIMO and beamforming technologies.',
    },
    {
      icon: <Network className="w-8 h-8 text-purple-500" />,
      title: 'Network Slicing',
      description: 'Create dedicated network slices for different services and applications with guaranteed performance.',
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security framework for 5G networks with end-to-end encryption and threat protection.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Network Management',
      description: 'Advanced network management and orchestration with AI-powered optimization and monitoring.',
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'Edge Computing',
      description: 'Deploy edge computing infrastructure to reduce latency and enable real-time applications.',
    }
  ]

  const applications = [
    'Smart cities',
    'Industrial IoT',
    'Autonomous vehicles',
    'Remote healthcare',
    'Augmented reality',
    'Virtual reality',
    'Smart manufacturing',
    'Connected agriculture'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Deploy advanced 5G network infrastructure with cloud-native architecture, network slicing, and edge computing capabilities." />
        <meta name="keywords" content="5G, network infrastructure, RAN, core network, network slicing, edge computing, IoT, smart cities" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy cutting-edge 5G network infrastructure with cloud-native architecture,
              network slicing, and edge computing capabilities for next-generation applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
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
              Advanced 5G Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G network infrastructure solutions designed for performance,
              scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powering Next-Gen Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G infrastructure enables a wide range of innovative applications
              and use cases across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-700/50 rounded-lg p-4 hover:bg-slate-600/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy 5G Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your 5G network infrastructure requirements
            and get started with a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}