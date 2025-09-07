import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Our security practices and compliance."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security practices and compliance. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're preparing detailed information about our security practices. 
              Check back soon for security documentation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}