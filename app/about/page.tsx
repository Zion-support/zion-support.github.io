import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide cutting-edge AI and IT solutions." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in AI-powered solutions and digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
