import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Our Services - AI, Quantum Computing & Automation Solutions',
  description: 'Comprehensive technology services including AI implementation, quantum computing solutions, intelligent automation, and digital transformation consulting.',
  keywords: ['AI services', 'quantum computing', 'automation', 'digital transformation', 'technology consulting', 'AI implementation'],
  openGraph: {
    title: 'Our Services - AI, Quantum Computing & Automation Solutions',
    description: 'Comprehensive technology services for enterprise transformation.',
    type: 'website',
    url: 'https://ziontechgroup.com/services'
  }
}

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions 2025',
      description: 'Next-generation artificial intelligence technologies and implementations for enterprise transformation.',
      href: '/ai-2025',
      icon: '🤖',
      features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Natural Language Processing']
    },
    {
      title: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions for complex problem-solving and optimization.',
      href: '/ai-2026-quantum-neural-fusion',
      icon: '⚛️',
      features: ['Quantum Algorithms', 'Optimization', 'Cryptography', 'Simulation']
    },
    {
      title: 'Intelligent Automation',
      description: 'Smart automation systems that streamline operations and increase efficiency.',
      href: '/automation',
      icon: '⚙️',
      features: ['Process Automation', 'Workflow Optimization', 'RPA', 'Smart Systems']
    },
    {
      title: 'Business Transformation',
      description: 'Complete digital transformation strategies and implementation services.',
      href: '/ai-2025-ultimate-business-transformation',
      icon: '🚀',
      features: ['Strategy Consulting', 'Implementation', 'Change Management', 'ROI Optimization']
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your organization\'s AI readiness and recommendations.',
      href: '/tools/ai-readiness-assessment',
      icon: '📊',
      features: ['Current State Analysis', 'Gap Assessment', 'Roadmap Planning', 'Risk Evaluation']
    },
    {
      title: 'ROI Calculator Tools',
      description: 'Advanced tools to calculate and optimize your technology investment returns.',
      href: '/tools/ai-roi-calculator',
      icon: '💰',
      features: ['Investment Analysis', 'ROI Projections', 'Cost Optimization', 'Value Assessment']
    }
  ]

  const categories = ['All', 'AI', 'Quantum Computing', 'Automation', 'Ethics', 'Digital Transformation', 'Machine Learning']

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation journey and drive unprecedented business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className="bg-gray-800/50 hover:bg-gray-700/50 p-8 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation and maximum value delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300">Understanding your business needs and current technology landscape.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-300">Developing a comprehensive roadmap tailored to your objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-300">Executing the solution with precision and continuous monitoring.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-gray-300">Continuous improvement and optimization for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us Today
            </Link>
            <Link
              href="/tools/ai-readiness-assessment"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Assess Your Readiness
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}