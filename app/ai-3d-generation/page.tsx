import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Zap, Shield, Users, Globe } from 'lucide-react'

export default function Ai3DGenerationPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast 3D generation with real-time preview and optimization.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.',
    },
    {
      icon: Users,
      title: 'Collaborative Tools',
      description: 'Team collaboration features for seamless workflow management.',
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-based infrastructure that scales with your business needs.',
    },
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
  ]

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses" />
        <meta name="keywords" content="AI, 3D generation, artificial intelligence, business solutions" />
      </Helmet>
      
      <section className="relative min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI 3D Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered 3D generation solution for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300">Advanced AI technology that drives results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Our AI 3D Generation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of AI-driven 3D generation that transforms your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <p className="text-white text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}