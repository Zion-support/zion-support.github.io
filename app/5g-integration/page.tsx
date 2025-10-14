import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'

const FiveGIntegrationPage = () => {
  const services = [
    {
      title: '5G System Integration',
      description: 'Seamless integration of 5G technology with existing systems.'
    },
    {
      title: 'Security Integration',
      description: 'Comprehensive security integration for 5G networks.'
    },
    {
      title: 'Team Training',
      description: 'Expert training for 5G integration and maintenance.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Integration Services - Zion Tech Group"
        description="Professional 5G integration services to connect your business with next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Integration Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate 5G technology seamlessly with your existing infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FiveGIntegrationPage