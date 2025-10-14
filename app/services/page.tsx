import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Our comprehensive AI and IT services. From AI development to cloud solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and IT services designed to meet your unique business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;