'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, BarChart, CheckCircle, Zap, Shield, Globe } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Ultra-low latency', 'High-speed connectivity', 'Massive device support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Deploy edge computing solutions to reduce latency and improve response times.',
      benefits: ['Reduced latency', 'Local processing', 'Improved reliability']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures for 5G networks and connected devices.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Threat detection']
    },
    {
      icon: Globe,
      title: 'IoT Integration',
      description: 'Seamless integration with IoT devices and smart city infrastructure.',
      benefits: ['Device management', 'Data collection', 'Automated responses']
    }
  ]

  const pricing = [
    {
      name: 'Basic',
      description: 'Essential 5G implementation',
      price: '$10,000',
      features: ['Network planning', 'Basic security', 'Performance monitoring']
    },
    {
      name: 'Professional',
      description: 'Advanced 5G solutions',
      price: '$25,000',
      features: ['Full implementation', 'Advanced analytics', 'Edge computing', 'IoT integration']
    },
    {
      name: 'Enterprise',
      description: 'Complete 5G ecosystem',
      price: '$50,000',
      features: ['Custom solutions', '24/7 support', 'Security audit', 'Training']
    }
  ]

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group | Next-Gen Connectivity</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services. From network design to IoT integration, we deliver cutting-edge connectivity solutions." />
        <meta name="keywords" content="5G implementation, network design, edge computing, IoT integration, wireless connectivity, mobile networks" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              5G
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Implementation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G connectivity. Our comprehensive implementation 
              services deliver ultra-fast, reliable, and secure wireless solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get 5G Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From network design to IoT integration, we provide end-to-end 5G implementation services 
                that transform your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Implementation Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect 5G implementation package for your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our 5G experts to discuss your implementation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                Start Implementation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FiveGImplementationPage