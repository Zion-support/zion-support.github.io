import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Box, Zap } from 'lucide-react'

const Ai3DGenerationPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for 3D generation.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization for 3D projects.',
    },
    {
      icon: Box,
      title: '3D Modeling',
      description: 'Create stunning 3D models with AI assistance and automated optimization.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast 3D generation and rendering with advanced AI acceleration.',
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
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses. Create stunning 3D models with intelligent automation and real-time processing." />
        <meta name="keywords" content="AI, 3D generation, artificial intelligence, business solutions, 3D modeling, automation" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-teal-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI 3D Generation?</h2>
            <p className="text-xl text-gray-300">Transform your business with intelligent 3D solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Technology</h3>
              <p className="text-gray-300 mb-4">
                Our AI 3D generation platform combines cutting-edge machine learning algorithms with advanced 3D processing capabilities to deliver unprecedented results.
              </p>
              <p className="text-gray-300">
                From automated model creation to real-time optimization, we provide the tools you need to stay ahead in the competitive 3D market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your 3D Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our AI experts to discuss how our 3D generation solution can revolutionize your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ai3DGenerationPage