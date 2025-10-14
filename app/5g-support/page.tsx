import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'

const services = [
  {
    title: '5G Technical Support',
    description: '24/7 technical support and troubleshooting for all your 5G network issues and challenges.'
  },
  {
    title: 'Expert Consultation',
    description: 'Access to 5G experts for consultation and guidance on complex technical decisions.'
  },
  {
    title: 'Maintenance Services',
    description: 'Regular maintenance and updates to keep your 5G network running at peak performance.'
  }
]

const FiveGSupportPage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="5G Support Services - Zion Tech Group"
        description="Comprehensive 5G support services including technical support, consultation, and maintenance for your network."
        keywords="5G support, technical support, 5G consultation, network maintenance, wireless support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Support Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G support services including technical support, consultation, and maintenance for your network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FiveGSupportPage