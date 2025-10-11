'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Zap, Shield, Globe, Cpu, Network } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Ultra-low latency', 'High-speed connectivity', 'Massive device support', 'Network slicing']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical communications.',
      benefits: ['1ms latency', 'Real-time processing', 'Critical communications', 'Industrial automation']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for 5G networks and connected devices.',
      benefits: ['End-to-end encryption', 'Network security', 'Device authentication', 'Privacy protection']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Worldwide 5G network deployment with seamless roaming and connectivity.',
      benefits: ['Global deployment', 'Seamless roaming', 'International standards', 'Multi-carrier support']
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed computing infrastructure for faster processing and reduced latency.',
      benefits: ['Edge processing', 'Local data handling', 'Reduced latency', 'Improved performance']
    },
    {
      icon: Network,
      title: 'IoT Integration',
      description: 'Comprehensive IoT device management and connectivity solutions for smart ecosystems.',
      benefits: ['Device management', 'Smart connectivity', 'Data analytics', 'Ecosystem integration']
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network design, ultra-low latency, IoT connectivity, wireless infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Advanced 5G Features
              </h2>
              <p className="text-xl text-gray-300">
                Cutting-edge 5G technology for the next generation of connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Implement 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your 5G implementation needs and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FiveGImplementationPage