'use client';
import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Zion Tech Group?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
          <div className="text-gray-300">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
          <div className="text-gray-300">Uptime Guarantee</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
          <div className="text-gray-300">Support Available</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
          <div className="text-gray-300">Expert Team Members</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;