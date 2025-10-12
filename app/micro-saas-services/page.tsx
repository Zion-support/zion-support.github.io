import React from 'react'
import { ArrowRight, Smartphone, Database, Shield, Code, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSAASServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart Scheduling', 'Priority AI', 'Team Collaboration', 'Progress Tracking']
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with AI-powered categorization and insights.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Financial Reports']
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure Storage', 'Password Generation', 'Security Alerts', 'Multi-Device Sync']
    },
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates and customization.',
      features: ['Template Library', 'Auto Calculations', 'Client Management', 'Payment Tracking']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Affordable, powerful micro applications designed for small businesses. 
            Get enterprise-level functionality without the complexity.
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
              Our Micro SAAS Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, powerful tools that solve specific business problems without overwhelming complexity.
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
            Ready to Simplify Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which micro SAAS solutions can help streamline your operations.
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
