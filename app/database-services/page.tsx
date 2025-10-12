'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Database, Server, Shield, Zap, Users, Clock, Target, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DatabaseServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Design scalable, efficient database architectures tailored to your business needs.'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Database Migration',
      description: 'Seamlessly migrate your data to modern database platforms with zero downtime.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Implement enterprise-grade security measures and ensure regulatory compliance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Performance Optimization',
      description: 'Optimize database performance for faster queries and improved user experience.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Database Administration',
      description: '24/7 database monitoring, maintenance, and support services.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.'
    }
  ]

  const benefits = [
    'Improved data performance and reliability',
    'Enhanced security and compliance',
    'Reduced operational costs',
    'Scalable and future-proof solutions',
    'Expert database management',
    '24/7 monitoring and support'
  ]

  const technologies = [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 
    'Oracle', 'SQL Server', 'Cassandra', 'DynamoDB', 'Neo4j'
  ]

  return (
    <>
      <Helmet>
        <title>Database Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive database services including design, migration, optimization, and administration. Expert database solutions for your business needs." />
        <meta name="keywords" content="database services, database design, data migration, database optimization, database administration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Database
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert database solutions to optimize performance, ensure security, and scale your data infrastructure. 
              From design to administration, we've got you covered.
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
                Our Database Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive database solutions designed to meet your specific business requirements.
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
                  Why Choose Our Database Services?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our experienced database experts bring deep technical knowledge and industry best practices 
                  to help you build, optimize, and maintain robust database systems.
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
                <h3 className="text-2xl font-bold text-white mb-6">Technologies We Work With</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <Database className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{tech}</span>
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
                  Ready to Optimize Your Database?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our database experts help you build, optimize, and maintain a robust data infrastructure.
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

export default DatabaseServicesPage