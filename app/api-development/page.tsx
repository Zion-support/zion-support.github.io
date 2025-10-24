'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Code, Shield, Zap, Globe } from 'lucide-react'

const ApiDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'RESTful APIs',
      description: 'Design and develop clean, RESTful APIs following industry best practices'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built-in security features including authentication, authorization, and data encryption'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and scalability to handle high traffic loads'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'APIs that work seamlessly across web, mobile, and desktop applications'
    }
  ]

  const services = [
    'RESTful API Design & Development',
    'GraphQL API Implementation',
    'Microservices Architecture',
    'API Integration & Migration',
    'API Documentation & Testing',
    'Performance Optimization'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                API Development
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Build robust, scalable APIs that power your applications with our comprehensive
                API development services including RESTful APIs, GraphQL, and microservices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Our API Development Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                    <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default ApiDevelopmentPage
