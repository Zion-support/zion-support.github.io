'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Network, Settings, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
      category: 'Infrastructure',
      features: ['AWS/Azure/GCP migration', 'Data migration', 'Application modernization', 'Cost optimization'],
      pricing: 'Starting at $299/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      category: 'Security',
      features: ['Threat detection', 'Vulnerability assessment', 'Security monitoring', 'Incident response'],
      pricing: 'Starting at $199/month'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance.',
      category: 'Infrastructure',
      features: ['Server setup', 'Network monitoring', 'Performance optimization', '24/7 support'],
      pricing: 'Starting at $299/month'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Services',
      description: 'Database design, optimization, and administration services.',
      category: 'Data',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services'],
      pricing: 'Starting at $149/month'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development.',
      category: 'Development',
      features: ['iOS/Android apps', 'Cross-platform solutions', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $399/month'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Software',
      description: 'Tailored software solutions for your specific business needs.',
      category: 'Development',
      features: ['Custom development', 'API integration', 'Legacy modernization', 'Quality assurance'],
      pricing: 'Starting at $499/month'
    }
  ]

  const categories = ['All', 'Infrastructure', 'Security', 'Data', 'Development']

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const benefits = [
    'Reduced IT costs and improved efficiency',
    'Enhanced security and compliance',
    'Scalable and future-proof solutions',
    'Expert guidance and support',
    'Faster implementation and deployment',
    'Ongoing maintenance and optimization'
  ]

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and custom software development." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, infrastructure management, software development, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to transform your business. From cloud migration to cybersecurity, 
              we provide the technology solutions you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our IT Services?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our experienced IT professionals bring deep technical expertise and industry best practices 
                  to help you build, optimize, and maintain robust technology systems.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      01
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                      <p className="text-gray-300">Analyze your current IT infrastructure and identify areas for improvement.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      02
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Strategy</h4>
                      <p className="text-gray-300">Develop a comprehensive IT strategy tailored to your business needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      03
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                      <p className="text-gray-300">Execute the plan with minimal disruption to your business operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our IT experts help you build, optimize, and maintain a robust technology infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ITServicesPage