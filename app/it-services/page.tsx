'use client'
import React, { useState } from 'react';
import { Helmet  } from 'react-helmet-async';
import { Cloud, Code, Shield, Database, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses.',
      category: 'cloud',
      icon: Cloud,
      features: ['AWS, Azure, GCP expertise', 'Scalable infrastructure', 'Cost optimization', 'Security compliance']
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      category: 'development',
      icon: Code,
      features: ['React, Next.js, Vue.js', 'Mobile-first design', 'Performance optimization', 'SEO friendly']
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      category: 'security',
      icon: Shield,
      features: ['Threat assessment', 'Security monitoring', 'Compliance management', 'Incident response']
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Optimize data storage and retrieval with custom database solutions.',
      category: 'database',
      icon: Database,
      features: ['SQL & NoSQL databases', 'Data modeling', 'Performance tuning', 'Backup & recovery']
    },
    {
      id: 5,
      title: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with automation tools.',
      category: 'devops',
      icon: Users,
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring & logging']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'development', name: 'Web Development' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud architecture, web development, cybersecurity, database design, and DevOps. Modern technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud architecture, web development, cybersecurity, database design, DevOps, technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Modern technology solutions to power your business. From cloud architecture to cybersecurity, we provide comprehensive IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help you build a robust, scalable technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your IT Transformation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
;
export default ItServicesPage