import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Management | Zion Tech Group',
  description: 'Professional project management services to help your business grow and succeed.',
  keywords: 'project, management, business solutions, professional services',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Project Management | Zion Tech Group',
    description: 'Professional project management services to help your business grow and succeed.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Project Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional project management services to help your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service is currently under development. Please contact us for more information.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Project Management Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}