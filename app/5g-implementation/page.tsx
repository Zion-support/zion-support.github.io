import React from 'react'
import { CheckCircle, ArrowRight, Wifi, Zap, Globe, Cpu } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G Network Design',
      description: 'Complete 5G network architecture and infrastructure design',
      features: ['Network planning', 'Coverage optimization', 'Capacity planning', 'Interference analysis'],
      price: 'Starting at $15,000'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: '5G Deployment',
      description: 'End-to-end 5G network deployment and implementation',
      features: ['Site preparation', 'Equipment installation', 'Testing & validation', 'Go-live support'],
      price: 'Starting at $50,000'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Optimization',
      description: 'Performance optimization and network tuning for maximum efficiency',
      features: ['Performance monitoring', 'Parameter tuning', 'Capacity optimization', 'QoS management'],
      price: 'Starting at $5,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      title: '5G Applications',
      description: 'Develop and deploy 5G-enabled applications and services',
      features: ['IoT solutions', 'Edge computing', 'AR/VR applications', 'Real-time analytics'],
      price: 'Starting at $25,000'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G implementation services including network design, deployment, optimization, and application development." />
        <meta name="keywords" content="5G implementation, 5G network, 5G deployment, 5G optimization, 5G applications" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              5G Implementation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete 5G implementation services for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Deploy 5G?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how 5G can transform your business operations and enable new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your 5G Journey
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FiveGImplementationPage
