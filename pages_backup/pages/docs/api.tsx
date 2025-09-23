import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="API Documentation - Zion Tech Group"
      description="API documentation for Zion Tech Group services"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">API Documentation</h1>
          <p className="text-xl text-gray-600">This is a placeholder for the API documentation.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;