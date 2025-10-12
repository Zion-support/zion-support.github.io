'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.',
      link: '/cybersecurity'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.',
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Blockchain Solutions',
      description: 'Build decentralized applications with our smart contracts and Web3 development services.',
      link: '/blockchain-solutions'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Micro SaaS Tools',
      description: 'Powerful micro SaaS applications designed to boost productivity and streamline operations.',
      link: '/micro-saas-services'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G solutions for ultra-fast connectivity and IoT applications.',
      link: '/5g-implementation'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud migration, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud migration, digital transformation, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Advanced AI</span>
            <br />
            and IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive growth, enhance security, 
            and streamline operations for businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using our solutions to drive growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}