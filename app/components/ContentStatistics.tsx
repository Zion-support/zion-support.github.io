'use client';

import React, { useState, useEffect } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

const ContentStatistics: React.FC = () => {
  const [stats] = useState<StatItem[]>([
    { label: 'Projects Completed', value: 500, suffix: '+' },
    { label: 'Happy Clients', value: 150, suffix: '+' },
    { label: 'Years Experience', value: 10, suffix: '+' },
    { label: 'Team Members', value: 50, suffix: '+' }
  ]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-cyan-500 mb-2">
            <AnimatedCounter end={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ContentStatistics;