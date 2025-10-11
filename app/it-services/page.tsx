'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Star, CheckCircle, Shield, Database, Network, Code, Cloud, Server, Settings, Users, Clock, DollarSign } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  const itServices = [
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment, penetration testing, and compliance consulting.',
      features: ['Security assessment', 'Penetration testing', 'Compliance consulting', 'Incident response'],
      pricing: 'Starting at $150/hour',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and 24/7 monitoring services.',
      features: ['Database design', 'Performance optimization', 'Migration services', '24/7 monitoring'],
      pricing: 'Starting at $200/hour',
      popular: false,
      category: 'Data'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and maintenance for enterprise environments.',
      features: ['Network design', 'Implementation', 'Maintenance', 'Security hardening'],
      pricing: 'Starting at $175/hour',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Solutions',
      description: 'Cloud migration, optimization, and management across AWS, Azure, and GCP platforms.',
      features: ['Cloud migration', 'Cost optimization', 'Multi-cloud strategy', 'DevOps integration'],
      pricing: 'Starting at $250/hour',
      popular: true,
      category: 'Cloud'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Software Development',
      description: 'Custom software development, API integration, and system modernization services.',
      features: ['Custom development', 'API integration', 'Legacy modernization', 'Quality assurance'],
      pricing: 'Starting at $125/hour',
      popular: false,
      category: 'Development'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-400" />,
      title: 'IT Support & Maintenance',
      description: '24/7 IT support, system maintenance, and help desk services for your organization.',
      features: ['24/7 support', 'System maintenance', 'Help desk', 'Remote assistance'],
      pricing: 'Starting at $100/hour',
      popular: false,
      category: 'Support'
    }
  ]

  const itCapabilities = [
    {
      icon: <Shield className="w-12 h-12 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.'
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      title: 'Cloud Computing',
      description: 'Cloud migration, optimization, and management across all major cloud platforms.'
    },
    {
      icon: <Database className="w-12 h-12 text-blue-400" />,
      title: 'Data Management',
      description: 'Database design, optimization, and data analytics solutions for better insights.'
    },
    {
      icon: <Network className="w-12 h-12 text-orange-400" />,
      title: 'Network Solutions',
      description: 'Complete network infrastructure design, implementation, and maintenance.'
    },
    {
      icon: <Code className="w-12 h-12 text-green-400" />,
      title: 'Software Development',
      description: 'Custom software development and system integration services.'
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-400" />,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology consulting for digital transformation.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions and consulting services to keep your technology infrastructure secure and optimized. Starting at $100/hour." />
        <meta name="keywords" content="IT services, cybersecurity, cloud computing, database management, network infrastructure, software development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  Professional IT Solutions
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  IT Services & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive IT solutions and consulting services to keep your technology infrastructure 
                  secure, optimized, and running smoothly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="/contact"
                    className="group bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    Get IT Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    View Services
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">15+</div>
                    <div className="text-gray-300">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT expertise across all major technology domains to solve your business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Service Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive IT service packages designed for different business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 relative ${service.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                    <div className="text-gray-400 text-sm">per hour</div>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                  Get a free IT consultation and discover how our services can improve your technology infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Free IT Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}