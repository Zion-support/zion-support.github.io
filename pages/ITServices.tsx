import React from 'react';
import Layout from '../components/Layout';

export default function ITServicesPage() {
  return (
    <Layout title="IT Services - Zion Tech Group" description="Comprehensive IT services and solutions">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive IT services and solutions for modern businesses
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive IT services to help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}