import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGIntegrationPage = () => {
  const services = [
    {
      title: '5 G System Integration',
      description: 'Seamless integration of 5 G technology with existing systems.',
    },
    {
      title: 'Security Integration',
      description: 'Comprehensive security integration for 5 G networks.',
    },
    {
      title: 'Team Training',
      description: 'Expert training for 5 G integration and maintenance.',
    }]
  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEOtitle="5G Integration Services - Zion Tech Group"
        description="Professional5 G integration services to connect your business with next-generation wireless technology."
      />
      
      <div className="container mx-autopx-4 py-16">
        <div className="text-centermb-16">
          <h1 className="text-4 xlfont-boldtext-gray-900 mb-6">
            5 G Integration Services
          </h1>
          <p className="text-xltext-gray-600 max-w-3xl mx-auto">
            Integrate 5 G technology seamlessly with your existing infrastructure.
          </p>
        </div>

        <div className="gridmd:grid-cols-3 gap-8mb-16">
          {services.map((service, index) => (
            <divkey={index} className="bg-whiterounded-lgshadow-lgp-8">
              <div className="flexitems-centermb-4">
                <CheckCircle className="h-8 w-8text-blue-600 mr-3" />
                <h3 className="text-xlfont-semiboldtext-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link to="/contact" 
                className="inline-flexitems-centertext-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact"
            className="inline-flexitems-centerpx-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
  };

export default FiveGIntegrationPage