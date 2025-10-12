'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Cpu, Network, Wifi, Database } from 'lucide-react'

const IOTEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Edge Computing',
      description: 'Intelligent edge processing with machine learning capabilities for real-time decision making'
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Sub-millisecond response times for critical IoT applications and real-time control systems'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Comprehensive security protocols protecting data at the edge with encryption and access controls'
    },
    {
      icon: Network,
      title: 'Distributed Processing',
      description: 'Distributed computing architecture for scalable IoT solutions across multiple edge locations'
    }
  ]

  const benefits = [
    'Reduced latency and improved response times',
    'Enhanced data privacy and security',
    'Reduced bandwidth usage and costs',
    'Improved reliability and uptime',
    'Real-time data processing and analytics',
    'Scalable edge infrastructure',
    'Cost-effective IoT solutions',
    'Easy integration with existing systems'
  ]

  const services = [
    {
      title: 'Smart Manufacturing',
      description: 'Edge computing solutions for industrial IoT and smart factory automation',
      features: ['Real-time monitoring', 'Predictive maintenance', 'Quality control', 'Process optimization']
    },
    {
      title: 'Smart Cities',
      description: 'Edge infrastructure for smart city applications and urban IoT management',
      features: ['Traffic management', 'Environmental monitoring', 'Public safety', 'Energy optimization']
    },
    {
      title: 'Healthcare IoT',
      description: 'Edge computing for medical devices and healthcare monitoring systems',
      features: ['Patient monitoring', 'Medical device integration', 'Data analytics', 'Emergency response']
    },
    {
      title: 'Retail Analytics',
      description: 'Edge-based analytics for retail environments and customer experience optimization',
      features: ['Customer behavior analysis', 'Inventory management', 'Loss prevention', 'Personalized experiences']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IoT Edge Computing Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced IoT edge computing solutions by Zion Tech Group. Real-time processing, AI-powered analytics, and distributed computing for IoT applications." />
        <meta name="keywords" content="IoT edge computing, edge analytics, real-time processing, distributed computing, smart manufacturing, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IoT <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Edge Computing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IoT infrastructure with powerful edge computing solutions. 
              Process data locally, reduce latency, and enable real-time decision making at the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Edge Computing Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our edge computing platform delivers unmatched performance, security, and scalability for your IoT applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions tailored to your specific industry and use case requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unlock the Power of Edge Computing
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our edge computing solutions deliver measurable improvements in performance, efficiency, and cost-effectiveness for your IoT infrastructure.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <Cpu className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Deploy?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our edge computing experts to discuss your IoT requirements and discover how our solutions can optimize your infrastructure.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IoT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join leading companies using our edge computing solutions to achieve faster processing, better security, and reduced costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Your Edge Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IOTEdgeComputingPage