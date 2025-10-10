'use client';

import React, { useState, useEffect } from 'react';

const ContentStatistics: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    uptime: 0,
    support: 0,
    tools: 0
  });

  const statistics = [
    {
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-cyan-400'
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: 'text-cyan-400'
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      color: 'text-cyan-400'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Micro SaaS Tools',
      color: 'text-cyan-400'
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    statistics.forEach((stat, index) => {
      const timer = setInterval(() => {
        setCounts(prev => ({
          ...prev,
          [Object.keys(prev)[index]]: Math.min(prev[Object.keys(prev)[index]] + 1, stat.value)
        }));
      }, 50);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className = "py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Numbers that speak for our success and client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;