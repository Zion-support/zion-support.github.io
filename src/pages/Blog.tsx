import React from 'react';
import { SEO } from '@/components/SEO';

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Zion AI Marketplace"
        description="Latest insights and updates from the Zion AI Marketplace."
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Blog posts will be available here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}