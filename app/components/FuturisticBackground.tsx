'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';

const FuturisticBackground: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FuturisticBackground - Zion Tech Group</title>
        <meta name="description" content="Advanced futuristic background solutions powered by AI technology." />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section>
          <div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Futuristic Background
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced futuristic background solutions for modern applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FuturisticBackground;