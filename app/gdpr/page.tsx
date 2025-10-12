import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Lock, Eye, FileText, Users, AlertTriangle, Database, Globe } from 'lucide-react'

export default function GDPRPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Data Protection Compliance',
      description: 'Ensure full GDPR compliance with comprehensive data protection measures and privacy controls.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Privacy by Design',
      description: 'Implement privacy by design principles in all systems and processes from the ground up.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Data Subject Rights',
      description: 'Enable data subjects to exercise their rights including access, rectification, and erasure.'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Documentation & Records',
      description: 'Maintain comprehensive records of processing activities and compliance documentation.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Staff Training',
      description: 'Provide comprehensive GDPR training for all staff members and data processors.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: 'Breach Management',
      description: 'Implement robust data breach detection, reporting, and response procedures.'
    }
  ]

  const services = [
    'GDPR compliance audit',
    'Privacy impact assessments',
    'Data mapping and inventory',
    'Consent management',
    'Data retention policies',
    'Breach response planning',
    'Staff training programs',
    'Ongoing compliance monitoring'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance Services - Zion Tech Group</title>
        <meta name="description" content="Professional GDPR compliance services including data protection, privacy by design, and regulatory compliance solutions." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy, regulatory compliance, data security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GDPR
              </span>
              <br />
              <span className="text-white">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ensure full GDPR compliance with our comprehensive data protection and privacy services. 
              Protect your business and build trust with customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GDPR Compliance Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive GDPR compliance solutions to protect your business and customer data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our GDPR Services
              </h2>
              <p className="text-xl text-gray-300">
                Complete GDPR compliance solutions for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ensure GDPR Compliance?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business with our comprehensive GDPR compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}