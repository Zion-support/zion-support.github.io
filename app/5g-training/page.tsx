import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'

const services = [
  {
    title: '5G Technology Training',
    description: 'Comprehensive training programs to educate your team on 5G technologies and best practices.'
  },
  {
    title: 'Certification Programs',
    description: 'Professional certification programs to validate your team\'s 5G expertise and knowledge.'
  },
  {
    title: 'Hands-on Workshops',
    description: 'Interactive workshops and hands-on training sessions for practical 5G implementation skills.'
  }
]

const FiveGTrainingPage: React.FC = () => {
  return (
    <>
      <EnhancedSEO
        title="5G Training Services - Zion Tech Group"
        description="Expert 5G training services including technology training, certification programs, and hands-on workshops."
        keywords="5G training, technology education, certification programs, workshops, wireless training"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Training Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert 5G training services including technology training, certification programs, and hands-on workshops.
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

export default FiveGTrainingPage