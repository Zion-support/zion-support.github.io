'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Leading AI and IT Solutions Provider
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            We are a cutting-edge technology company specializing in AI solutions, cloud infrastructure, and digital transformation services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
