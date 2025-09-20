import React from 'react'
import Link from 'next/link'
import { Brain, Code, Shield, Cloud, Users, Zap } from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software development and web applications'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and threat protection'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic technology consulting and digital transformation'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Process automation and workflow optimization'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of AI and technology solutions. Transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <Icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  )
}