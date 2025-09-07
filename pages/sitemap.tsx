import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Site navigation and structure."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Site navigation and structure. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're organizing our site structure. 
              Check back soon for a comprehensive sitemap.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}