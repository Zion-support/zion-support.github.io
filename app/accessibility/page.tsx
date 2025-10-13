import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility information for Zion Tech Group website" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessibility
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We are committed to making our website accessible to all users.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              We strive to ensure that our website is accessible to all users, including those with disabilities.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode</li>
              <li>Text size adjustment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}