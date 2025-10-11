'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Brain, Shield, Zap, Target } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Cybersecurity', 'Data Protection', 'Compliance', 'Risk Management']
    },
    {
      icon: Zap,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions for modern business needs.',
      benefits: ['Cloud Migration', 'DevOps', 'Microservices', 'Containerization']
    },
    {
      icon: Target,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern enterprises. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, software development, enterprise technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI & IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions to drive your business forward
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default HomePage