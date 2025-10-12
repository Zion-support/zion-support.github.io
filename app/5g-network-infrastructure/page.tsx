import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { ArrowRight } from 'lucide-react'

export default function FiveGNetworkInfrastructurePage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Core Network',
      description: 'Deploy advanced 5G core network infrastructure with cloud-native architecture and network slicing capabilities.'
    },
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: 'RAN Infrastructure',
      description: 'Implement 5G Radio Access Network (RAN) with massive MIMO and beamforming technologies.'
    },
    {
      icon: <Network className="w-8 h-8 text-purple-500" />,
      title: 'Network Slicing',
      description: 'Create dedicated network slices for different services and applications with guaranteed performance.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Security & Compliance',
      description: 'Comprehensive security framework for 5G networks with end-to-end encryption and threat protection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Network Management',
      description: 'Advanced network management and orchestration with AI-powered optimization and monitoring.'
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      title: 'Edge Computing',
      description: 'Deploy edge computing infrastructure to reduce latency and enable real-time applications.'
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
        <meta name="description" content="Professional 5g network infrastructure services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">5G Network Infrastructure</h1>
        <p className="text-lg text-gray-300 mb-8">Professional 5g network infrastructure services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}