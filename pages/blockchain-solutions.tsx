import React from 'react';
<<<<<<< HEAD

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </div>
  );
}
=======
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blockchain Solutions - Zion Tech Group',
  description: 'Professional blockchain solutions services to help your business grow and succeed.',
  keywords: 'blockchain solutions, business solutions, professional services'
};

export default function BlockchainSolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional blockchain solutions services to help your business grow and succeed.
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 text-center">
          This page is currently under development. Please contact us for more information.
        </p>
      </div>
      <div className="text-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Inquiry"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9b09
