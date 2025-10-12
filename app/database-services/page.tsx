'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Cpu, Lock, BarChart3 } from 'lucide-react'

const DatabaseServicesPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Design & Architecture',
      description: 'Custom database solutions designed for optimal performance, scalability, and reliability'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized database configurations for lightning-fast queries and real-time data processing'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption, access controls, and compliance standards'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Advanced data analytics and reporting solutions for business intelligence and insights'
    }
  ]

  const benefits = [
    'Improved data performance and query speed',
    'Enhanced data security and compliance',
    'Scalable database architecture',
    '24/7 database monitoring and support',
    'Data backup and disaster recovery',
    'Database migration and modernization',
    'Cost-effective database solutions',
    'Expert database administration'
  ]

  const services = [
    {
      title: 'Database Design',
      description: 'Custom database architecture and schema design for optimal performance',
      features: ['Schema optimization', 'Indexing strategies', 'Data modeling', 'Performance tuning']
    },
    {
      title: 'Database Migration',
      description: 'Seamless migration between database platforms and cloud environments',
      features: ['Data migration', 'Schema conversion', 'Application compatibility', 'Zero downtime migration']
    },
    {
      title: 'Database Administration',
      description: 'Comprehensive database management and maintenance services',
      features: ['Performance monitoring', 'Backup management', 'Security updates', 'Capacity planning']
    },
    {
      title: 'Cloud Database Solutions',
      description: 'Cloud-native database solutions for scalability and cost optimization',
      features: ['AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'Database as a Service']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Services | Zion Tech Group</title>
        <meta name="description" content="Professional database services by Zion Tech Group. Database design, migration, administration, and cloud solutions for your business." />
        <meta name="keywords" content="database services, database design, database migration, database administration, cloud databases, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Database
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data infrastructure with our comprehensive database services. 
              From design to migration, we deliver high-performance database solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Database Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our database experts deliver unmatched performance, security, and scalability for your data infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Database Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive database solutions tailored to your specific business needs and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Optimize Your Data Infrastructure
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our database services deliver measurable improvements in performance, security, and cost-effectiveness for your data infrastructure.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <Cpu className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Optimize?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our database experts to discuss your data infrastructure needs and discover how our solutions can improve performance.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Database Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our database services to improve performance, security, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Your Database Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DatabaseServicesPage