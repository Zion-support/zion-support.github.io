import React from 'react';
import { SEO } from '@/components/SEO';

export default function CategoryDetail() {
  return (
    <>
      <SEO
        title="Category Detail | Zion AI Marketplace"
        description="Browse services in this category."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Category Detail</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Category services will be listed here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}