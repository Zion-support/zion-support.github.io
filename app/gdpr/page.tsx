'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Users, Clock, Star, Zap, Globe, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const GDPRPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'GDPR Compliance Assessment',
      description: 'Comprehensive assessment of your current data protection practices and GDPR compliance status.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection Implementation',
      description: 'Implementation of robust data protection measures and privacy controls to ensure GDPR compliance.'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Privacy Impact Assessments',
      description: 'Conducting privacy impact assessments to identify and mitigate data protection risks.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Breach Response Planning',
      description: 'Development of data breach response plans and procedures to meet GDPR requirements.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Staff Training',
      description: 'Comprehensive GDPR training programs for your staff to ensure ongoing compliance.'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'Data Mapping & Inventory',
      description: 'Complete data mapping and inventory services to understand your data processing activities.'
    }
  ]

  const benefits = [
    'Full GDPR compliance',
    'Reduced regulatory risk',
    'Enhanced data protection',
    'Improved customer trust',
    'Expert legal guidance',
    'Ongoing compliance support',
    'Custom compliance solutions',
    'Regular compliance audits'
  ]

  const gdprPrinciples = [
    'Lawfulness, fairness and transparency',
    'Purpose limitation',
    'Data minimisation',
    'Accuracy',
    'Storage limitation',
    'Integrity and confidentiality',
    'Accountability',
    'Data subject rights'
  ]

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group | Data Protection Solutions</title>
        <meta name="description" content="GDPR compliance services by Zion Tech Group. Data protection, privacy assessments, and compliance solutions for your business." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy, compliance solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                GDPR Compliance
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Ensure your business is fully compliant with GDPR regulations. 
                Our expert team provides comprehensive data protection and privacy solutions.
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our GDPR Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive GDPR compliance solutions for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GDPR Principles Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">GDPR Principles</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                The core principles that guide GDPR compliance
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gdprPrinciples.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our GDPR Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive GDPR compliance solutions that protect your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(4).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
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
                  Ready to Ensure GDPR Compliance?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Protect your business with our comprehensive GDPR compliance solutions. 
                  Get expert guidance that keeps you compliant and protects your customers' data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Compliance Assessment
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GDPRPage