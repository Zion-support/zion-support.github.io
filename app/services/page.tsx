import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services from Zion Tech Group" />
        <meta name="keywords" content="services, AI, IT, solutions, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
            <p className="text-white text-lg mb-8">Comprehensive AI and IT solutions for modern businesses</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">AI Solutions</h3>
                <p className="text-gray-600">Advanced artificial intelligence services including machine learning and predictive analytics.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Comprehensive security solutions to protect your digital assets and infrastructure.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-600">Scalable cloud solutions and infrastructure management for optimal performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;