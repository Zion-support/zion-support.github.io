import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Zap, Users, BarChart3, Shield, Code } from 'lucide-react'

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Modern Web Applications',
      description: 'Build responsive, fast, and scalable web applications using the latest technologies and frameworks.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'High Performance',
      description: 'Optimized for speed and performance with modern development practices and best practices.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'User Experience Focus',
      description: 'Intuitive and engaging user interfaces that provide exceptional user experiences.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'Analytics & SEO',
      description: 'Built-in analytics, SEO optimization, and performance monitoring for maximum visibility.'
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance features and regular security audits.'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Scalable Architecture',
      description: 'Future-proof architecture that scales with your business and handles growing traffic.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Create powerful web applications with our web development services. Modern, responsive, and scalable web solutions." />
        <meta name="keywords" content="web development, web applications, responsive design, modern web development, web solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Web Development Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create powerful web applications that engage users and drive business growth. 
              Modern, responsive, and scalable web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build successful web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your vision into a powerful web application that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}