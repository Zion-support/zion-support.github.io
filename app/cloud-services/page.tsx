import React from 'react'
import { ArrowRight, Cloud, Server, Shield, Database, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CloudServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions']
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure tailored to your business needs.',
      features: ['Auto Scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Cloud Security',
      description: 'Secure your cloud environment with comprehensive security solutions and monitoring.',
      features: ['Identity Management', 'Data Encryption', 'Security Monitoring', 'Compliance']
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Cloud Data Management',
      description: 'Optimize your data storage and processing with cloud-native data solutions.',
      features: ['Data Lakes', 'Data Warehousing', 'Real-time Analytics', 'Backup Solutions']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Scale your business with our comprehensive cloud solutions. From migration to management, 
            we help you leverage the power of the cloud.
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
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cloud solutions designed to modernize your infrastructure and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud services can transform your business infrastructure.
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
