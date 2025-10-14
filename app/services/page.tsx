import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group services page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
          <p className="text-xl text-gray-600">
            Welcome to our services page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
