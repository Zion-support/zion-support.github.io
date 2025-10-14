import React from 'react';
import { Helmet } from 'react-helmet-async';

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO
        title="5G Monitoring - Zion Tech Group"
        description="Professional 5G monitoring services by Zion Tech Group. Expert solutions for your business needs."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Monitoring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for your 5g monitoring transformation journey
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
  );
};

export default FiveGMonitoringPage;
