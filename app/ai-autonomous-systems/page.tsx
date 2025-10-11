'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Zap, Shield, Globe, Cpu } from 'lucide-react'

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent decision-making and autonomous operation capabilities.',
      benefits: ['Machine learning', 'Decision making', 'Pattern recognition', 'Predictive analytics']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and performance monitoring.',
      benefits: ['Real-time monitoring', 'Performance analytics', 'Data visualization', 'Predictive insights']
    },
    {
      icon: Zap,
      title: 'Autonomous Operation',
      description: 'Fully autonomous systems that operate independently with minimal human intervention.',
      benefits: ['Independent operation', 'Self-healing', 'Adaptive behavior', 'Continuous learning']
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Built-in safety mechanisms and security protocols to ensure reliable and secure operation.',
      benefits: ['Safety protocols', 'Security measures', 'Risk mitigation', 'Compliance standards']
    },
    {
      icon: Globe,
      title: 'Scalable Deployment',
      description: 'Deploy autonomous systems across multiple environments and scales with ease.',
      benefits: ['Multi-environment', 'Horizontal scaling', 'Cloud deployment', 'Edge computing']
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Process data locally with edge computing capabilities for faster response times.',
      benefits: ['Local processing', 'Low latency', 'Offline capability', 'Real-time response']
    }
  ]

  const benefits = [
    'Increase operational efficiency by 85%',
    'Reduce human intervention by 90%',
    'Improve decision accuracy by 95%',
    'Scale operations without proportional costs'
  ]

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group | Intelligent Automation Solutions</title>
        <meta name="description" content="Cutting-edge autonomous systems powered by advanced AI technology. Self-operating solutions that adapt, learn, and optimize performance independently." />
        <meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous technology, AI solutions, intelligent automation, self-operating systems" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge autonomous systems powered by advanced AI technology. Self-operating solutions that adapt, learn, and optimize performance independently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Autonomous Features
              </h2>
              <p className="text-xl text-gray-300">
                Intelligent systems that operate independently and adapt to changing conditions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your operations with intelligent automation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 text-white">✓</div>
                  </div>
                  <p className="text-gray-300 text-lg font-medium">{benefit}</p>
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
                Ready to Deploy Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI autonomous systems can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIAutonomousSystemsPage