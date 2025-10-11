'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Database, Settings, ArrowRight, CheckCircle } from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Services',
      description: 'Comprehensive cloud migration, management, and optimization services.',
      features: [
        'Cloud migration strategy',
        'Infrastructure as Code',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      price: 'Starting at $299/month',
      icon: Cloud
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats.',
      features: [
        'Security assessment',
        'Threat monitoring',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
      price: 'Starting at $499/month',
      icon: Shield
    },
    {
      id: 3,
      title: 'Data Management',
      description: 'Complete data solutions including storage, analytics, and governance.',
      features: [
        'Data architecture design',
        'ETL/ELT processes',
        'Data warehousing',
        'Business intelligence',
        'Data governance'
      ],
      price: 'Starting at $399/month',
      icon: Database
    },
    {
      id: 4,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with DevOps practices.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure automation',
        'Container orchestration',
        'Monitoring & logging',
        'Performance optimization'
      ],
      price: 'Starting at $599/month',
      icon: Settings
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete technology infrastructure solutions to power your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">What's Included</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment and setup to get you up and running fast</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">Grow with confidence as your business expands</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help streamline your operations and drive growth.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ItServicesPage