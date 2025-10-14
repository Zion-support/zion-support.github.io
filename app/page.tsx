'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      href: '/ai-solutions'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      href: '/cybersecurity'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses.',
      href: '/cloud-infrastructure'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services for your organization.',
      href: '/digital-transformation'
    }
  ]

  const features = [
    'Advanced AI & Machine Learning',
    'Enterprise-Grade Security',
    'Scalable Cloud Solutions',
    '24/7 Expert Support',
    'Custom Development',
    'Data Analytics & Insights'
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, machine learning, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Advanced AI Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Leading provider of cutting-edge AI, cybersecurity, and cloud infrastructure solutions 
                that drive innovation and growth for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovative technology and expert implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our AI and technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage