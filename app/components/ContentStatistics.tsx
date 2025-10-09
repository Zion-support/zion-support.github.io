'use client';

import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      value: '500+',
      label: 'Projects Completed',
      icon: '🚀'
    },
    {
      value: '200+',
      label: 'Happy Clients',
      icon: '😊'
    },
    {
      value: '99.9%',
      label: 'Uptime Guarantee',
      icon: '⚡'
    },
    {
      value: '24/7',
      label: 'Support Available',
      icon: '🛠️'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;