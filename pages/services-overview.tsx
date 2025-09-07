import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function ServicesOverviewPage() {
  return (
    <Layout
      title="Services Overview - Zion Tech Group"
      description="Overview of all our services and solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Services Overview</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Overview of all our services and solutions. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're preparing a comprehensive overview of all our services. 
              Check back soon for detailed service information.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}