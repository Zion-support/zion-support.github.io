import React, { Suspense } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnhancedSEO from '../components/EnhancedSEO'
const FiveGMigrationPage = () => {
  const services = [
    {
      title: '5G Migration Planning',
      description: 'Strategic planning for migrating from legacy networks to 5G.',
    },
    {
      title: 'Security Migration',
      description: 'Secure migration of security protocols to 5G infrastructure.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training for 5G migration and new technology adoption.',
    }
  ]

  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEO 
title="5G Migration Services - Zion Tech Group"
        description="Expert 5G migration services to transition your business to next-generation wireless technology."
      />
      
      <div className="containermx-autopx-4py-16">
        <div className="text-centermb-16">
          <h1 className="text-4xlfont-boldtext-gray-900mb-6">
            5G Migration Services
          </h1>
          <p className="text-xltext-gray-600max-w-3xlmx-auto">
            Migrate to 5G technology with minimal disruption using our proven migration strategies.
          </p>
        </div>

        <div className="gridmd:grid-cols-3gap-8mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lgshadow-lgp-8">
              <div className="flexitems-centermb-4">
                <CheckCircle className="h-8w-8text-blue-600mr-3" />
                <h3 className="text-xlfont-semiboldtext-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600mb-6">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flexitems-centertext-blue-600hover:text-blue-800font-medium"
              >
                Learn More
                <ArrowRight className="ml-2h-4w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-flexitems-centerpx-8py-3borderborder-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-600hover:bg-blue-700"
          >
            Get Started Today
            <ArrowRight className="ml-2h-5w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FiveGMigrationPage