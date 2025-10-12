'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Database, Shield, Zap, Cloud, Users, BarChart3, Cpu, Lock } from 'lucide-react'

const DatabasePage: React.FC = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Design and implement scalable database solutions tailored to your business needs.',
      features: ['Schema Design', 'Performance Optimization', 'Scalability Planning', 'Migration Support'],
      price: 'Starting at $199/hour'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Database Migration',
      description: 'Seamlessly migrate your databases to cloud platforms with zero downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Performance Tuning', 'Post-Migration Support'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Database Security',
      description: 'Implement comprehensive security measures to protect your data.',
      features: ['Access Control', 'Encryption', 'Audit Logging', 'Compliance Support'],
      price: 'Starting at $249/hour'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Database Performance Tuning',
      description: 'Optimize your database performance for maximum efficiency.',
      features: ['Query Optimization', 'Index Tuning', 'Resource Monitoring', 'Performance Reports'],
      price: 'Starting at $179/hour'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Database Administration',
      description: 'Comprehensive database administration and maintenance services.',
      features: ['24/7 Monitoring', 'Backup & Recovery', 'Updates & Patches', 'Health Checks'],
      price: 'Starting at $399/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Database Automation',
      description: 'Automate routine database tasks and improve operational efficiency.',
      features: ['Automated Backups', 'Scheduled Maintenance', 'Alert Systems', 'Custom Scripts'],
      price: 'Starting at $149/hour'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: 'Improved Performance',
      description: 'Optimize database performance and reduce query response times by up to 80%'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enhanced Security',
      description: 'Protect your data with enterprise-grade security measures and compliance'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Scalability',
      description: 'Scale your database infrastructure to handle growing data volumes'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Expert Support',
      description: 'Get 24/7 support from certified database professionals'
    }
  ]

  const technologies = [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle', 'SQL Server', 'DynamoDB'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Database Services - Zion Tech Group"
        description="Expert database services including design, migration, optimization, and administration. Secure, scalable, and high-performance database solutions."
        keywords="database services, database design, database migration, database optimization, database administration, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Database <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert database services to design, optimize, and manage your data infrastructure. 
            Secure, scalable, and high-performance database solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Database Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our certified database professionals deliver secure, scalable, and high-performance solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/5">
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
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have expertise in a wide range of database technologies and platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <p className="text-gray-300 text-sm font-medium">{tech}</p>
              </div>
            ))}
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
                Let's discuss how our database services can help improve your data infrastructure and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DatabasePage
