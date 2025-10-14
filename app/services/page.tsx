import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Professional technology services and solutions" />
        <meta name="keywords" content="services, technology, solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">AI Solutions</h3>
                <p className="text-blue-700">Advanced artificial intelligence services and solutions.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Cybersecurity</h3>
                <p className="text-green-700">Comprehensive security solutions for your digital assets.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Cloud Solutions</h3>
                <p className="text-purple-700">Scalable cloud infrastructure and management services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;