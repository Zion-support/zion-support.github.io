import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-white/80 mb-8">
            AI & Technology Solutions for the Future
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. 
            Expert consulting and implementation services.
          </p>
        </div>
      </div>
    </div>
  );
}