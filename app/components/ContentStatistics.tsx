'use client';
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  id: string;
  value: number;
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = [],
  title = "Our Impact",
  subtitle = "Numbers that speak for themselves",
  className = ""
}) => {
  const defaultStats: StatItem[] = [
    {
      id: '1',
      value: 1000,
      label: 'Projects Completed',
      description: 'Successfully delivered projects',
      suffix: '+'
    },
    {
      id: '2',
      value: 500,
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide',
      suffix: '+'
    },
    {
      id: '3',
      value: 50,
      label: 'Team Members',
      description: 'Expert professionals',
      suffix: '+'
    },
    {
      id: '4',
      value: 99,
      label: 'Success Rate',
      description: 'Project success rate',
      suffix: '%'
    }
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter
                    start={0}
                    end={stat.value}
                    duration={2000}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                {stat.description && (
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;