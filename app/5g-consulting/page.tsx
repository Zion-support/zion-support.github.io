import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page5gConsultingPage: React.FC = () => {
  const services = [
    {
      title: 'Expert 5g Consulting Solutions',
      description: 'Professional 5g consulting services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored 5g consulting implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your 5g consulting needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Consulting Services - Zion Tech Group"
        description="Expert 5G consulting services to help your business leverage next-generation wireless technology."
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            5G Consulting Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for your 5G transformation journey
          </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">;
          {services.map((service, index) => (
            <div key={index} className="bg-whiterounded-lgshadow-lgp-6">
              <h3 className="text-xl font-semibold text-gray-900mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5gConsultingPage;
