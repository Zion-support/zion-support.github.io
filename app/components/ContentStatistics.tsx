import React from 'react';

export default function ContentStatistics() {
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-300 text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}