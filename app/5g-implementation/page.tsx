'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Smartphone, Cpu, Shield } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function FiveGImplementationPage() {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Comprehensive 5G network architecture and infrastructure design.',
      features: ['Network Planning', 'Site Survey', 'Coverage Analysis', 'Capacity Planning'],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: '5G Deployment',
      description: 'End-to-end 5G network deployment and implementation services.',
      features: ['Equipment Installation', 'Configuration', 'Testing', 'Optimization'],
      pricing: 'Starting at $10,000/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing',
      description: '5G edge computing solutions for ultra-low latency applications.',
      features: ['Edge Servers', 'Content Delivery', 'IoT Integration', 'Real-time Processing'],
      pricing: 'Starting at $3,500/month'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: '5G Applications',
      description: 'Custom 5G applications and use case development.',
      features: ['AR/VR Apps', 'IoT Solutions', 'Smart City', 'Industrial Automation'],
      pricing: 'Starting at $4,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'Network Slicing',
      description: '5G network slicing for dedicated virtual networks.',
      features: ['Slice Design', 'Resource Allocation', 'QoS Management', 'Monitoring'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: '5G Security',
      description: 'Comprehensive security solutions for 5G networks.',
      features: ['Threat Protection', 'Encryption', 'Access Control', 'Compliance'],
      pricing: 'Starting at $3,000/month'
    }
  ]

  const benefits = [
    {
      title: 'Ultra-Fast Speeds',
      description: 'Experience speeds up to 10 Gbps with 5G technology.',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Low Latency',
      description: 'Achieve ultra-low latency of 1ms for real-time applications.',
      icon: <Wifi className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Massive IoT',
      description: 'Connect millions of devices per square kilometer.',
      icon: <Globe className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Edge Computing',
      description: 'Process data at the edge for faster response times.',
      icon: <Cpu className="w-6 h-6 text-orange-500" />
    }
  ]

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, public safety, and environmental monitoring.',
      icon: <Globe className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery, telemedicine, and patient monitoring.',
      icon: <Shield className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Manufacturing',
      description: 'Industrial automation, predictive maintenance, and quality control.',
      icon: <Cpu className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Entertainment',
      description: 'AR/VR experiences, live streaming, and gaming.',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current infrastructure and 5G readiness.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Design 5G network architecture and deployment strategy.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy 5G infrastructure and configure services.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Monitor performance and optimize network efficiency.'
    }
  ]

  const stats = [
    { number: '10+', label: 'Gbps Speeds' },
    { number: '1ms', label: 'Latency' },
    { number: '1M+', label: 'Devices/km²' },
    { number: '99.9%', label: 'Reliability' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G implementation services including network design, deployment, and optimization." />
        <meta name="keywords" content="5G implementation, 5G network, edge computing, IoT, network slicing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our 5G Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                  <a
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose 5G?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              5G Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our 5G Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for 5G?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G can transform your business and enable new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free 5G Consultation
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
