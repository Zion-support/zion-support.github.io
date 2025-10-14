import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGModernizationPage = () => {
  const services = [
    { title: '5 G Network Modernization', description: 'Complete modernization of legacy networks to 5 G technology.' },
    { title: 'Security Modernization', description: 'Upgrade security infrastructure to support 5 G requirements.' },
    {
      title: 'Team Training',
      description: 'Comprehensive training for modernized 5 G network operations.'
    }
  ];

  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEOtitle="5G Modernization Services - Zion Tech Group"
        description="Professional5 G modernization services to upgrade your network infrastructure."
      />
      
      <div className="container mx-autopx-4 py-16">
        <div className="text-centermb-16">
          <h1 className="text-4 xlfont-bold text-gray-900 mb-6">
            5 G Modernization Services
          </h1>
          <p className="text-xltext-gray-600 max-w-3 xl mx-auto">
            Modernize your network infrastructure with cutting-edge 5 G technology.
          </p>
        </div>
        
        <div className="gridmd:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <divkey={index} className="bg-whiterounded-lgshadow-lg p-8">
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
  );
};
export default FiveGModernizationPage