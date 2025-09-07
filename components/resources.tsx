import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-300 mb-4">
              Comprehensive guides and API documentation for all our services.
            </p>
            <Link href="/docs" className="text-blue-400 hover:text-blue-300">
              View Documentation →
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tutorials</h2>
            <p className="text-gray-300 mb-4">
              Step-by-step tutorials to help you get started quickly.
            </p>
            <Link href="/tutorials" className="text-blue-400 hover:text-blue-300">
              Browse Tutorials →
            </Link>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <p className="text-gray-300 mb-4">
              Get help from our support team and community.
            </p>
            <Link href="/support" className="text-blue-400 hover:text-blue-300">
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}