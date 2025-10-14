import React, { Suspense } from 'react';
import EnhancedSEO from '../components/EnhancedSEO'
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiveGMonitoringPage = () => {
  const services = [
    {
      title: &apos;5G Network Monitoring&apos;,
      description: &apos;Real-time monitoring and analysis of 5G network performance.&apos;
    },
    {
      title: &apos;Security Monitoring&apos;,
      description: &apos;Advanced security monitoring and threat detection for 5G networks.&apos;
    },
    {
      title: &apos;Team Training&apos;,
      description: &apos;Comprehensive training for 5G network monitoring and management.&apos;
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
title="5G Monitoring Services - Zion Tech Group"
        description="Professional 5G monitoring services to ensure optimal network performance and security."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Monitoring Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your 5G network performance with our advanced monitoring solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flexitems-center mb-4">
                <CheckCircle className="h-8w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started Today
            <ArrowRight className="ml-2h-5 w-5" />
          </Link>
        </div>
      </div>
</div>
  )
}

export default FiveGMonitoringPage
