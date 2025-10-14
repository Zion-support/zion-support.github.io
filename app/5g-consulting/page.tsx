import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGConsultingPage = () => {
  const services = [
    {
      title: '5G Strategy Development',
      description: 'Comprehensive 5G implementation strategies tailored to your business needs.'
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation for 5G network implementation.'
    },
    {
      title: 'Team Training',
      description: 'Expert training for your team on 5G technologies and best practices.'
    }
  ];
  return (
    <div className=" min-h-screenbg-gray-50">
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className=" contain e r mx-autopx-4py-16">
        <div className=" text-centermb-16">
          <h1 className=" text-4xlfont-boldtext-gray-900mb-6">
            5G Consulting Services
          </h1>
          <p className=" text-xltext-gray-600max-w-3xlmx-auto">
            Expert guidance for your 5G transformation journey
          </p>
          </div>
        </div>
        <div className=" gridmd:grid-cols-3gap-8mb-16">;
          {services.map((service, index) => (
            <div key={index} className=" bg-whiterounded-lgshadow-lgp-6">
              <h3 className=" text-xlfont-semiboldtext-gray-900mb-4">
                {service.title}
              </h3>
              <p className=" text-gray-600mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flexitems-centertext-blue-600hover:text-blue-800font-medium";
              >
                Learn More
                <ArrowRight className=" ml-2w-4h-4" />
              </Link>
              </div>
        </div>
          ))}
        <div className=" text-center">
          <Link 
            to="/contact" 
            className=" inline-fle x items-center bg-blue-600hover:bg-blue-700text-whitefont-semiboldpy-3px-6rounded-lgtransition-colors";
          >
            Get Started
            <ArrowRight className=" ml-2w-5h-5" />
          </Link>
      </div>
    </div>
  );
};
export default FiveGConsultingPage