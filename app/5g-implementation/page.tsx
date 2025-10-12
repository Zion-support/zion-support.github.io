'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, CheckCircle, Zap, Globe, Smartphone, Server } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Complete 5G network architecture and infrastructure design.',
      features: ['Network planning', 'Coverage optimization', 'Capacity planning', 'Interference management']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Ultra-Fast Connectivity',
      description: 'Deploy ultra-fast 5G networks with speeds up to 10+ Gbps.',
      features: ['High-speed data', 'Low latency', 'Massive connectivity', 'Edge computing']
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'IoT Integration',
      description: 'Connect millions of IoT devices with 5G technology.',
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Automation']
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing',
      description: 'Deploy edge computing solutions for ultra-low latency applications.',
      features: ['Edge servers', 'Local processing', 'Real-time analytics', 'Reduced latency']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G implementation services. Ultra-fast connectivity and IoT solutions for modern businesses." />
        <meta name="keywords" content="5G implementation, ultra-fast connectivity, IoT, edge computing, network design" />
      </Helmet>
      
      <Navigation />
      
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">5G Implementation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our 5G Solutions</h2>
            <p className="text-xl text-gray-300">Transform your business with cutting-edge 5G technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
