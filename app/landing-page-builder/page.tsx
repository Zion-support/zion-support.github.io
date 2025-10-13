import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function LandingPageBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="Create high-converting landing pages with our builder platform" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Landing Page Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create high-converting landing pages with our builder platform
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}