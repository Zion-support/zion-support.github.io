import React from 'react';
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Navigation - Zion Tech Group"
      description="Navigation component"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Navigation</h1>
          <p className="text-xl text-gray-600">Navigation component page</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;