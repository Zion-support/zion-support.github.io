import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function MicroSAAS() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for modern businesses."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative micro SaaS solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored micro SaaS applications for specific business needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Rapid Deployment</h3>
              <p className="text-gray-600 mb-4">
                Quick and efficient deployment of micro SaaS solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600 mb-4">
                Built to scale with your business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}