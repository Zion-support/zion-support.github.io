'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ]

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes.',
      icon: Target,
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for self-driving cars.',
      icon: CheckCircle,
      benefits: ['Vehicle-to-vehicle communication', 'Traffic optimization', 'Safety systems', 'Route planning']
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery and telemedicine applications.',
      icon: Brain,
      benefits: ['Remote surgery', 'Telemedicine', 'Patient monitoring', 'Medical imaging']
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for urban management.',
      icon: PieChart,
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring']
    }
  ]

  const values = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and requirements.',
      details: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Security audit']
    },
    {
      step: '02',
      title: 'Infrastructure Design',
      description: 'Custom 5G network architecture tailored to your needs.',
      details: ['Core network design', 'RAN planning', 'Backhaul solutions', 'Edge computing setup']
    },
    {
      step: '03',
      title: 'Deployment',
      description: 'Professional installation and configuration of 5G equipment.',
      details: ['Equipment installation', 'Network configuration', 'Testing and validation', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for peak performance.',
      details: ['Performance monitoring', 'Network optimization', 'Capacity management', 'Security updates']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced 5G Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge 5G technology for next-generation applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your industry with 5G-powered solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to 5G network deployment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{value.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 mb-4">{value.description}</p>
                  <ul className="space-y-1">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-400">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how 5G can transform your business operations and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your 5G Journey
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default FiveGImplementationPage