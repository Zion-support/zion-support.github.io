import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Welcome to Zion Tech Group</h1>
            <p className="text-gray-300 text-xl mb-12">Advanced AI and IT Solutions for Modern Businesses</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300">Cutting-edge artificial intelligence services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
                <p className="text-gray-300">Comprehensive IT infrastructure and support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
                <p className="text-gray-300">Scalable cloud computing and migration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
