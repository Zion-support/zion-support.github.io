'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Server, Shield, Zap, Users, Clock, Target, BarChart3, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DataCenterPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Data Center Design',
      description: 'Comprehensive data center design and architecture solutions for optimal performance.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance management for data centers.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Power & Cooling',
      description: 'Efficient power distribution and cooling systems for maximum uptime and efficiency.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Managed Services',
      description: '24/7 monitoring, maintenance, and support services for your data center infrastructure.'
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-500" />,
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery and business continuity solutions.'
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'Migration Services',
      description: 'Seamless data center migration and consolidation services.'
    }
  ]

  const benefits = [
    'Improved reliability and uptime',
    'Enhanced security and compliance',
    'Reduced operational costs',
    'Scalable and flexible infrastructure',
    'Expert management and support',
    'Disaster recovery and backup'
  ]

  const features = [
    'Redundant Power Systems', 'Advanced Cooling', 'Fire Suppression', 'Access Control', 
    'Environmental Monitoring', 'Network Redundancy', 'Backup Systems', '24/7 Support'
  ]

  return (
    <>
      <Helmet>
        <title>Data Center Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive data center solutions including design, security, power, cooling, and managed services. Enterprise-grade infrastructure solutions." />
        <meta name="keywords" content="data center, infrastructure, server management, colocation, managed services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Data Center
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive data center solutions for enterprise infrastructure. 
              Design, security, power, cooling, and managed services for optimal performance.
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

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Data Center Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive data center solutions designed to meet your infrastructure needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
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
                  Why Choose Our Data Center Solutions?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our data center solutions provide the reliability, security, and performance your business needs. 
                  We design and manage infrastructure that scales with your growth.
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
                <h3 className="text-2xl font-bold text-white mb-6">Data Center Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Server className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
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
                  Ready to Optimize Your Data Center?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our data center experts help you design and manage a robust infrastructure solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore IT Services
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

export default DataCenterPage