import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function EnterprisePage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Custom enterprise solutions for large organizations."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom enterprise solutions for large organizations. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're developing comprehensive enterprise solutions tailored to your organization's needs. 
              Contact us to learn more about our enterprise offerings.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}