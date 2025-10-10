'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Shield } from 'lucide-react';

interface Statistic {
  id: number;
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

const ContentStatistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics: Statistic[] = [
    {
      id: 1,
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      trend: 'up',
      change: '+25%'
    },
    {
      id: 2,
      icon: Zap,
      value: '99.9%',
      label: 'Uptime',
      trend: 'stable',
      change: '0%'
    },
    {
      id: 3,
      icon: TrendingUp,
      value: '500%',
      label: 'ROI Increase',
      trend: 'up',
      change: '+150%'
    },
    {
      id: 4,
      icon: Shield,
      value: '100%',
      label: 'Security Score',
      trend: 'stable',
      change: '0%'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              By the Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our solutions are making a real difference for businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 mb-2">{stat.label}</div>
              <div className={`flex items-center justify-center space-x-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 
                stat.trend === 'down' ? 'text-red-400' : 
                'text-gray-400'
              }`}>
                <span>{stat.change}</span>
                {stat.trend === 'up' && <TrendingUp className="w-4 h-4" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;