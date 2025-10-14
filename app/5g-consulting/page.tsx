import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'
const FiveGConsultingPage = () => {
  const services = [
    {
      title: '5G Strategy Development',
      description: 'Comprehensive 5G implementation strategies tailored to your business needs.',
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation for 5G network implementation.',
    },
    {
      title: 'Team Training',
      description: 'Expert training for your team on 5G technologies and best practices.',
    }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-1 6">
        <div className="text-center mb-16">
          <h1 className="text-4 xl font-bold text-gray-900 mb-6">
            5G Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
            Expert guidance for your 5G transformation journey</p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lgshadow-lgp-6">
              <h3 className="text-xlfont-semibold text-gray-9 0 0 mb-4">
                {service.title}</h3>
              <p className="text-gray-6 0 0 mb-4">
                {service.description}</p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
          ))}
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
    </div>
  )
}
export default FiveGConsultingPage
</EnhancedSEO>
</div>
</div>
</div>
</div>
</div>