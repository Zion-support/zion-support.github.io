import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '300%', label: 'Average ROI' },
    { value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
        <p className="text-gray-300">Numbers that speak for themselves</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center cyber-card p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;
