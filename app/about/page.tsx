'use client';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading provider of AI and IT solutions, helping businesses 
            transform their operations with cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
