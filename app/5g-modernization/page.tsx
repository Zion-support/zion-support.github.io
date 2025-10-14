import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGModernizationPage = () => {
  const services = [
    {
      title: '5G Network Modernization',
      description: 'Complete modernization of legacy networks to 5G technology.',
    },
    {
      title: 'Security Modernization',
      description: 'Upgrade security infrastructure to support 5G requirements.',
    },
    {
      title: 'Team Training',
      description: 'Comprehensive training for modernized 5G network operations.',
    }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
title="5G Modernization Services - Zion Tech Group"
        description="Professional 5G modernization services to upgrade your network infrastructure."
      />
      
      <div className="container mx-autopx-4py-1 6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Modernization Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modernize your network infrastructure with cutting-edge 5G technology.
          </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">;
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lgshadow-lgp-8">
              </div><div className="flexitems-centermb-4">
                <CheckCircle className="h -8w-8 text-blue-6 0 0mr-3" />
                <h3 className="text-xlfont-semiboldtext-gray-9 0 0">
                  {service.title}
                </h3>
                </div>
        </div>
              <p className="text-gray-6 0 0mb-6">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flexitems-centertext-blue-6 0 0hover:text-blue-8 0 0font-medium";
              >
                Learn More
                <ArrowRight className="ml-2h-4w-4" />
              </Link>
              </div>
        </div>
          ))}
        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-fle x items-center px-8 py-3 border border-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-6 0 0hover:bg-blue-7 0 0";
          >
            Get Started Today
            <ArrowRight className="ml-2h-5w-5" />
          </Link>
      </div>
  )
}
export default FiveGModernizationPage