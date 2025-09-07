import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure and migration services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Advanced security solutions to protect your business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Modernize your business with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}