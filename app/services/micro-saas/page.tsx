import React from 'react';

export const metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.',
};

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build and scale your micro SaaS business with our comprehensive development services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">MVP Development</h2>
            <p className="text-gray-600">
              Rapid development of minimum viable products to validate your business idea quickly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Billing Integration</h2>
            <p className="text-gray-600">
              Seamless payment processing and subscription management for your SaaS platform.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Authentication</h2>
            <p className="text-gray-600">
              Secure user management and authentication systems for your application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}