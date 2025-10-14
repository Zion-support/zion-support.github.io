import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'

const services = [
  {
    title: '5G Scalability Planning',
    description: 'Strategic planning for scalable 5G network architecture that grows with your business.'
  },
  {
    title: 'Capacity Management',
    description: 'Intelligent capacity management to handle increasing 5G network demands and traffic.'
  },
  {
    title: 'Growth Optimization',
    description: 'Optimize your 5G infrastructure for seamless growth and expansion capabilities.'
  }
]

const FiveGScalabilityPage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="5G Scalability Services - Zion Tech Group"
        description="Expert 5G scalability planning and capacity management services to support your business growth."
        keywords="5G scalability, capacity management, network growth, scalable architecture, wireless scaling"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Scalability Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert 5G scalability planning and capacity management services to support your business growth.
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

export default FiveGScalabilityPage