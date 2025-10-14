import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGDeploymentPage = () => {
  const services = [
    {
      title: '5 G Network Deployment',
      description: 'Complete 5 G network infrastructure deployment and configuration.',
    },
    {
      title: 'Security Implementation',
      description: 'Advanced security measures for 5 G network protection.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training for your team on 5 G deployment best practices.',
    }]
  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEOtitle="5G Deployment Services - Zion Tech Group"
        description="Professional5 G deployment services to implement next-generation wireless networks."
      />
      
      <div className="container mx-autopx-4 py-16">
        <div className="text-centermb-16">
          <h1 className="text-4 xlfont-boldtext-gray-900 mb-6">
            5 G Deployment Services
          </h1>
          <p className="text-xltext-gray-600 max-w-3xl mx-auto">
            Deploy 5 G networks with confidence using our proven deployment methodologies.
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

export default FiveGDeploymentPage