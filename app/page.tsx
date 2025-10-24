"use client"

import React from "react"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react'

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics',
      icon: Brain,
      benefits: [
        'Machine Learning Implementation',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making'
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses',
      icon: BarChart,
      benefits: [
        'Cloud Infrastructure Setup',
        'Cybersecurity Solutions',
        'Digital Transformation',
        '24/7 Technical Support'
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Custom software solutions designed to solve specific business problems with scalable, maintainable applications',
      icon: Target,
      benefits: ['Custom Software Development',
        "Scalable Architecture",
        "Maintenance & Support",
        "Performance Optimization"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT Solutions for Modern Businesses. Transform your operations with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive solutions for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
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