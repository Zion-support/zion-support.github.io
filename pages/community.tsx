import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community - Zion Tech Group',
  description: 'Professional Community services to help your business grow and succeed.',
  keywords: 'Community, business solutions, professional services'
};

export default function communityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Community
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional Community services to help your business grow and succeed.
        </p>
      </div>
    </div>
  );
}
