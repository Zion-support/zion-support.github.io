import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help and Support</title>
        <meta name="description" content="Get help and support for our AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Support</h1>
            <p className="text-xl text-gray-300 mb-12">Get help and support for our solutions</p>
          </div>
        </div>
      </div>
    </>
  );
}