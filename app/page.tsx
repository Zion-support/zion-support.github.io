import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Leading provider of AI, cloud, cybersecurity, and digital transformation solutions
        </p>
        <div className="space-y-4">
          <a
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-colors font-semibold text-lg"
          >
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}