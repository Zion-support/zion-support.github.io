'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Zap, Shield, Globe, Cpu } from 'lucide-react'

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for 3D generation.',
      benefits: ['Machine learning models', 'Intelligent automation', 'Smart recommendations', 'Predictive analytics']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and performance metrics.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom reports']
    },
    {
      icon: Zap,
      title: 'Lightning Fast Processing',
      description: 'High-performance 3D generation with optimized algorithms and GPU acceleration.',
      benefits: ['GPU acceleration', 'Optimized algorithms', 'Fast processing', 'Efficient resource usage']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, access controls, and compliance standards.',
      benefits: ['End-to-end encryption', 'Access controls', 'Compliance standards', 'Data protection']
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture that scales globally with high availability and reliability.',
      benefits: ['Global deployment', 'High availability', 'Auto-scaling', 'Multi-region support']
    },
    {
      icon: Cpu,
      title: 'Advanced Processing',
      description: 'Cutting-edge processing capabilities with AI-driven optimization and automation.',
      benefits: ['AI optimization', 'Automated workflows', 'Smart processing', 'Intelligent routing']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases'
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses. Transform your ideas into stunning 3D models with cutting-edge artificial intelligence technology." />
        <meta name="keywords" content="AI 3D generation, artificial intelligence, 3D modeling, business solutions, AI technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered 3D generation solution for modern businesses. Transform your ideas into stunning 3D models with cutting-edge artificial intelligence technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology that drives results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI 3D Generation?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent 3D generation technology</p>
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
                Ready to Transform Your 3D Generation Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how our AI 3D generation solution can revolutionize your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
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

export default AI3DGenerationPage