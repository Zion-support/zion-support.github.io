'use client';
import React from 'react';

const TutorialsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Tutorials</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn how to use our AI and IT solutions with step-by-step tutorials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
