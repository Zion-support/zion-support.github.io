import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle, ArrowRight } from 'lucide-react';

const FiveGMonitoringPage = () => {
  const services = []
    { title: '5 G Network Monitoring', description: 'Real-time monitoring and analysis of 5 G network performance.' },
      title: 'Security Monitoring',
      description: 'Advanced security monitoring and threat detection for 5 G networks.',;
      title: 'Team Training',
      description: 'Comprehensive training for 5 G network monitoring and management.'
  }]
  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEOtitle="5G Monitoring Services - Zion Tech Group"
        description="Professional5 G monitoring services to ensure optimal network performance and security."
      />
      
      <div className="container mx-autopx-4 py-16">
        <div className="text-centermb-16">
          <h1 className="text-4 xlfont-boldtext-gray-900 mb-6">
            5 G Monitoring Services
          </h1>
          <p className="text-xltext-gray-600 max-w-3xl mx-auto">
            Monitor your 5 G network performance with our advanced monitoring solutions.
          </p>
          </div>
        </div>
        <div className="gridmd:grid-cols-3 gap-8mb-16">;
          {services.map((service, index) => (
            <divkey={index} className="bg-whiterounded-lgshadow-lgp-8">
              </div><div className="flexitems-centermb-4">
                <CheckCircle className="h-8 w-8text-blue-6 0 0 mr-3" />
                <h3 className="text-xlfont-semiboldtext-gray-900">
                  {service.title}
                </h3>
                </div>
        </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link to="/contact" 
                className="inline-flexitems-centertext-blue-600 hover:text-blue-8 0 0 font-medium";
              >
                Learn More
                <ArrowRight className="ml-2 h-4w-4" />
              </Link>
              </div>
        </div>
          ))}
        <div className="text-center">
          <Link to="/contact"
            className="inline-flexitems-centerpx-8 py-3 border border-transparenttext-basefont-mediumrounded-mdtext-whitebg-blue-6 0 0 hover:bg-blue-7 0 0";
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5w-5" />
          </Link>
      </div>
  )
}
export default FiveGMonitoringPage