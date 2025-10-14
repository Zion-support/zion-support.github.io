import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGConsultingPage = () => {
  const services = [
    {
      title: '5 G Strategy Development',
      description: 'Comprehensive 5 G implementation strategies tailored to your business needs.',
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation for 5 G network implementation.',
    },
    {
      title: 'Team Training',
      description: 'Expert training for your team on 5 G technologies and best practices.',
    }
  ];
  return (
    <div className="min-h-screenbg-gray-50">
      <EnhancedSEOtitle="5G Consulting Services - Zion Tech Group"
        description="Expert5 G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className="container mx-autopx-4 py-16">
        <div className="text-centermb-16">
          <h1 className="text-4 xlfont-boldtext-gray-900 mb-6">
            5 G Consulting Services
          </h1>
          <p className="text-xltext-gray-600 max-w-3xl mx-auto">
            Expert guidance for your 5 G transformation journey
          </p>
          </div>
        </div>
        <div className="gridmd:grid-cols-3 gap-8mb-16">;
          {services.map((service, index) => (
            <divkey={index} className="bg-whiterounded-lgshadow-lgp-6">
              <h3 className="text-xlfont-semiboldtext-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link to="/contact" 
                className="inline-flexitems-centertext-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4h-4" />
              </Link>
            </div>
          ))}
        <div className="text-center">
          <Link to="/contact" 
            className="inline-flexitems-centerbg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
  };
export default FiveGConsultingPage