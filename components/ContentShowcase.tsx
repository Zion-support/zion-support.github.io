import React from 'react';

export default function ContentShowcase() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Latest Content & Resources
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Stay ahead with our latest AI insights, case studies, and implementation guides.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">AI Implementation Guide</h3>
          <p className="text-gray-600">Step-by-step guide to implementing AI in your organization.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Case Study: Manufacturing</h3>
          <p className="text-gray-600">How we helped a Fortune 500 company save $25M with AI.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Micro SaaS Best Practices</h3>
          <p className="text-gray-600">Learn how to build and scale successful SaaS applications.</p>
        </div>
      </div>
    </div>
  );
}