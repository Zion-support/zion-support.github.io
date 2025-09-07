import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function TrainingPage() {
  return (
    <Layout
      title="Training - Zion Tech Group"
      description="Training programs and courses."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Training programs and courses. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're developing comprehensive training programs. 
              Check back soon for training courses and materials.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}