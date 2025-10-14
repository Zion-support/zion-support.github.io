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
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
Page
          </h1>442
          <p className="text-xl text-gray-600 mb-8">
            Professional page solutions tailored to your business needs.
          </p>529
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Expert Solutions
              </h3>829
              <p className="text-blue-700">
                Our team of experts delivers cutting-edge page solutions.
              </p>955
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Custom Implementation
              </h3>1193
              <p className="text-green-700">
                Tailored page implementations for your specific requirements.
              </p>1325
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                24/7 Support
              </h3>1570
              <p className="text-purple-700">
                Round-the-clock support for all your page needs.
              </p>1694
            </div>
          </div>
          <div className="mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>1893
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

