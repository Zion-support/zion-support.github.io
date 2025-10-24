import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
// Note: These components are not available in this context

export default function AdvertisingBannerPage() {
  return (
    <>
      <Helmet>
        <title>Advertising Banner - Zion Tech Group</title>
        <meta name="description" content="Create effective advertising banners with our AI-powered tools." />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Advertising Banner
            </h1>
            <p className="text-gray-300 mb-8">
              This page is under construction.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}