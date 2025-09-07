import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function DocsPage() {
  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Guides, API docs, and best practices."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides, API docs, and best practices. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're working on comprehensive documentation for our services and APIs. 
              Check back soon for detailed guides and best practices.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}