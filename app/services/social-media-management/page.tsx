import React from 'react';

export const metadata = {
  title: 'Social Media Management | Zion Tech Group',
  description: 'Professional social media management solutions for modern businesses. Transform your operations with our advanced social media management technology.'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Social Media Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional social media management solutions for modern businesses. Transform your operations with our advanced social media management technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 1</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 1.1</li>
              <li>• Feature 1.2</li>
              <li>• Feature 1.3</li>
              <li>• Feature 1.4</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 2</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 2.1</li>
              <li>• Feature 2.2</li>
              <li>• Feature 2.3</li>
              <li>• Feature 2.4</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature 3</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Feature 3.1</li>
              <li>• Feature 3.2</li>
              <li>• Feature 3.3</li>
              <li>• Feature 3.4</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our social media management can help your business
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}