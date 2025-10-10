'use client';
import React from 'react';

const ContentStatistics: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">$50M+</div>
          <div className="text-gray-300">Annual Savings Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
          <div className="text-gray-300">Process Automation</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
          <div className="text-gray-300">Average ROI</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
          <div className="text-gray-300">Expert Support</div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;