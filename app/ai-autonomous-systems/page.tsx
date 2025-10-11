'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Cpu, Zap, Shield, BarChart, Globe } from 'lucide-react'

const AIAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Intelligent Decision Making',
      description: 'AI-powered autonomous systems that make intelligent decisions in real-time.',
      benefits: ['Real-time processing', 'Adaptive algorithms', 'Context awareness', 'Predictive capabilities']
    },
    {
      icon: Zap,
      title: 'Self-Adapting Systems',
      description: 'Systems that learn and adapt to changing conditions and requirements.',
      benefits: ['Machine learning', 'Continuous improvement', 'Dynamic optimization', 'Self-healing capabilities']
    },
    {
      icon: Shield,
      title: 'Safety & Reliability',
      description: 'Built-in safety mechanisms and fail-safe systems for autonomous operations.',
      benefits: ['Safety protocols', 'Redundancy systems', 'Error handling', 'Compliance standards']
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Comprehensive monitoring and analytics for autonomous system performance.',
      benefits: ['Real-time metrics', 'Performance tracking', 'Predictive maintenance', 'Optimization insights']
    },
    {
      icon: Globe,
      title: 'Scalable Infrastructure',
      description: 'Scalable autonomous systems that can grow with your business needs.',
      benefits: ['Horizontal scaling', 'Cloud integration', 'Distributed systems', 'Global deployment']
    }
  ]

  const benefits = [
    'Increase operational efficiency by 80%',
    'Reduce human error and intervention needs',
    'Enable 24/7 autonomous operations',
    'Improve safety and reliability standards',
    'Scale operations without proportional staff increases',
    'Accelerate innovation and development cycles'
  ]

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI solutions. Self-driving vehicles, smart manufacturing, and autonomous infrastructure for the future." />
        <meta name="keywords" content="AI autonomous systems, self-driving, smart manufacturing, autonomous infrastructure, intelligent automation" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems that operate independently and intelligently. 
              From self-driving vehicles to smart manufacturing, the future is autonomous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Autonomous Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities for building intelligent autonomous systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Autonomous Solutions?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive autonomous innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your autonomous system needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIAutonomousSystemsPage