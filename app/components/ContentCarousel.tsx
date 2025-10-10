'use client';
import React from 'react';

const ContentCarousel: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Featured Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">AI Predictive Maintenance</h3>
          <p className="text-gray-300 text-sm">Prevent equipment failures with AI</p>
        </div>
        <div className="bg-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Cloud Migration</h3>
          <p className="text-gray-300 text-sm">Seamless cloud infrastructure</p>
        </div>
        <div className="bg-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity Suite</h3>
          <p className="text-gray-300 text-sm">Comprehensive security solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;