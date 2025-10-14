import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGTrainingPage = () => {
  const services = [
    {
      title: '5G Training Strategy',
      description: 'Comprehensive 5g training strategies tailored to your business needs.',
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation for 5g training implementation.',
    },
    {
      title: 'Team Training',
      description: 'Expert training for your team on 5g training technologies and best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO
        title="5G Training - Zion Tech Group"
        description="Professional 5G training services by Zion Tech Group. Expert solutions for your business needs."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for your 5g training transformation journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FiveGTrainingPage;
