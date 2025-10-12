import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg text-gray-300 mb-8">Join our innovative team.</p>
        </div>
      </div>
    </>
  );
}