import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'
import { CheckCircle, ArrowRight } from 'lucide-react'






const FiveGMonitoringPage = () => {
  
  const services = [
    {
      title: "Service 1"
      description: "Description 1"
    }
    {
      title: "Service 2"
      description: "Description 2"
    }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
        
      <EnhancedSEO 
title="5G Monitoring Services - Zion TechGroup"
        description="Professional 5G monitoring services to ensure optimal network performance andsecurity."
      />
      
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
        
          <h1>
          
            5G Monitoring Services
          </h1>
          <p>
          
            Monitor your 5G network performance with our advanced monitoring solutions.
          </p>
          </div>
        <div className="gridmd:grid-cols-3 gap-8 mb-16">
        
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lgshadow-lgp-8">
              </div><div className="flexitems-centermb-4">
        
                <CheckCircle className="h-8 w-8 text-blue-6 0 0mr-3" />
                <h3>
          
                  {service.title}
  )
                </h3>
                </div>
              <p>
          
                {service.description}
  )
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-centertext-blue-60 0hover:text-blue-8 0 0font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4w-4" />
              </Link>
              </div>
          ))}
  )
        <div className="text-center">
        
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-6 0 0hover:bg-blue-7 0 0"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5w-5" />
          </Link>
      </div>
  )
}
  )
export default FiveG;; Monitoring Page