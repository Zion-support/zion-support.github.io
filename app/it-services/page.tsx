import React from 'react'
import { ArrowRight, Shield, Server, Database, Code, Cloud, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions']
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance']
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      title: 'Infrastructure Management',
      description: 'Optimize your IT infrastructure with our comprehensive management and monitoring services.',
      features: ['Server Management', 'Network Monitoring', 'Performance Optimization', '24/7 Support']
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Data Management',
      description: 'Secure and optimize your data with our advanced data management and analytics solutions.',
      features: ['Database Design', 'Data Backup', 'Data Analytics', 'Data Security']
    },
    {
      icon: <Code className="w-6 h-6 text-red-500" />,
      title: 'Custom Development',
      description: 'Build custom software solutions tailored to your specific business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide complete IT solutions that keep your business 
            running smoothly and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions designed to support your business operations and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can improve your business operations and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
