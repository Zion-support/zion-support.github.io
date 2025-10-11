'use client';
import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
}

const ContentStatistics: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      change: '+25%',
      changeType: 'positive'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      change: '+0.1%',
      changeType: 'positive'
    },
    {
      icon: Award,
      value: '50+',
      label: 'Awards Won',
      change: '+5',
      changeType: 'positive'
    },
    {
      icon: Zap,
      value: '2.5s',
      label: 'Avg Response Time',
      change: '-0.3s',
      changeType: 'positive'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we're making a difference for businesses worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-cyan-400">
                  <stat.icon className="h-8 w-8" />
                </div>
                <span className={'text-sm font-semibold ' + (
                  stat.changeType === 'positive' ? 'text-green-400' : 
                  stat.changeType === 'negative' ? 'text-red-400' : 
                  'text-gray-400'
                )}>
                  {stat.change}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;