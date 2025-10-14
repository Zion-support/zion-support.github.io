import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'





const FiveGMigrationPage = () => {
  
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
title="5G Migration Services - Zion TechGroup"
        description="Expert 5G migration services to transition your business to next-generation wirelesstechnology."
      />
      
      <div className="containermx-auto px-4 py-16">
        
        <div className="text-center mb-16">
        
          <h1>
          
            5G Migration Services
          </h1>
          <p>
          
            Migrate to 5G technology with minimal disruption using our proven migration strategies.
          </p>
        </div>

        <div className="gridmd:grid-cols-3 gap-8 mb-16">
        
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lg shadow-lg p-8">
              <div className="flexitems-center mb-4">
        
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
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
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
  )
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
  )
  }
  )
export default FiveG;; Migration Page