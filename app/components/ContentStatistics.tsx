'use client';

import React from 'react';

const ContentStatistics: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered AI and IT solutions'
    },
    {
      number: '10,000+',
      label: 'Happy Clients',
      description: 'Businesses transformed with our solutions'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable and secure infrastructure'
    },
    {
      number: '24/7',
      label: 'Expert Support',
      description: 'Round-the-clock technical assistance'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card hologram-card p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStatistics;
