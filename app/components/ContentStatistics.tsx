'use client';
import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-8 mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Impact</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;