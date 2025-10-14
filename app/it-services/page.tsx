'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Server, Shield, Database, Smartphone, Wifi, ArrowRight, CheckCircle } from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance and ongoing management.',
      icon: Cloud,
      features: [
        'AWS, Azure, and GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        '24/7 monitoring and support'
      ],
      price: 'Starting at $2,000/month'
    },
    {
      id: 2,
      title: 'Server Infrastructure',
      description: 'Robust server solutions designed for scalability, security, and high availability.',
      icon: Server,
      features: [
        'Custom server configurations',
        'Load balancing and clustering',
        'Backup and disaster recovery',
        'Performance optimization'
      ],
      price: 'Starting at $1,500/month'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your business from evolving threats.',
      icon: Shield,
      features: [
        'Security audits and assessments',
        'Firewall and intrusion detection',
        'Employee security training',
        'Incident response planning'
      ],
      price: 'Starting at $1,800/month'
    },
    {
      id: 4,
      title: 'Database Management',
      description: 'Optimize and secure your data with our database administration and management services.',
      icon: Database,
      features: [
        'Database design and optimization',
        'Data migration and backup',
        'Performance tuning',
        'Security and compliance'
      ],
      price: 'Starting at $1,200/month'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: Smartphone,
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      id: 6,
      title: 'Network Infrastructure',
      description: 'Reliable and secure network solutions for businesses of all sizes.',
      icon: Wifi,
      features: [
        'Network design and implementation',
        'Wireless solutions',
        'VPN and remote access',
        'Network monitoring'
      ],
      price: 'Starting at $1,000/month'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Complete Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, server infrastructure, cybersecurity, database management, and more." />
        <meta name="keywords" content="IT services, cloud migration, server infrastructure, cybersecurity, database management, mobile development, network solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete technology infrastructure solutions designed to support your business growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <button className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support to keep your systems running smoothly.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
                <p className="text-gray-300">Infrastructure that grows with your business needs and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Effective</h3>
                <p className="text-gray-300">Optimized solutions that deliver maximum value for your investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
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

export default ItServicesPage
