import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function NewsPage() {
  return (
    <Layout
      title="News - Zion Tech Group"
      description="Latest news and updates from Zion Tech Group."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news and updates from Zion Tech Group. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're working on a news section to keep you updated on our latest developments. 
              Check back soon for news and updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}