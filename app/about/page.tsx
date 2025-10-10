'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
        <p className="text-xl text-gray-300">
          We are a leading provider of AI and IT solutions, helping businesses transform their operations with cutting-edge technology.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
