import React from 'react';
import SEO from '@/components/SEO';

export default function AnalyticsPage() {
  return (
    <div>
      <SEO
        title="Analytics - Zion Holdings"
        description="Advanced analytics and data insights"
      />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Analytics</h1>
          <p className="text-xl text-gray-300">
            Advanced analytics and data insights for your business.
          </p>
        </div>
      </div>
    </div>
  );
}