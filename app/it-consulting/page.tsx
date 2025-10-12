'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Shield, Globe, Users, Clock, Star, Brain, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development and technology roadmap planning for your business growth.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Consulting',
      description: 'Expert security assessment, implementation, and ongoing protection for your digital assets.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Migration',
      description: 'Seamless cloud migration services with zero downtime and optimal performance optimization.'
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions to modernize your business processes and systems.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'Team Augmentation',
      description: 'Expert IT professionals to augment your team and accelerate project delivery.'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: 'Process Optimization',
      description: 'Streamline and optimize your IT processes for maximum efficiency and productivity.'
    }
  ]

  const benefits = [
    'Expert IT strategy and planning',
    'Comprehensive security solutions',
    'Cloud migration and optimization',
    'Digital transformation expertise',
    '24/7 technical support',
    'Cost-effective solutions',
    'Proven methodologies',
    'Scalable and flexible approach'
  ]

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Non-profit'
  ]

  return (
    <>
      <Helmet>
        <title>IT Consulting - Zion Tech Group | Expert IT Consulting Services</title>
        <meta name="description" content="Professional IT consulting services by Zion Tech Group. IT strategy, cybersecurity, cloud migration, and digital transformation solutions." />
        <meta name="keywords" content="IT consulting, IT strategy, cybersecurity, cloud migration, digital transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                IT Consulting
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Expert IT consulting services to help you navigate complex technology challenges 
                and achieve your business objectives with confidence.
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Consulting Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT consulting solutions tailored to your business needs
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

        {/* Industries Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We have experience across various industries and sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-300">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Consulting?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional IT consulting services that drive business success
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
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our IT consulting experts help you navigate complex technology challenges 
                  and achieve your business objectives with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
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

export default ITConsultingPage