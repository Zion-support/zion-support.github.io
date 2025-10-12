'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Zap, Award, Globe, Clock } from 'lucide-react';

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<any>;
  color: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

const RealTimeStats: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>([
    {
      id: 'active-users',
      label: 'Active Users',
      value: 1247,
      suffix: '',
      icon: Users,
      color: 'text-blue-400',
      trend: 'up',
      change: 12.5
    },
    {
      id: 'ai-processes',
      label: 'AI Processes Running',
      value: 89,
      suffix: '',
      icon: Zap,
      color: 'text-purple-400',
      trend: 'up',
      change: 8.2
    },
    {
      id: 'projects-completed',
      label: 'Projects Completed Today',
      value: 23,
      suffix: '',
      icon: Award,
      color: 'text-green-400',
      trend: 'up',
      change: 15.3
    },
    {
      id: 'global-reach',
      label: 'Countries Served',
      value: 47,
      suffix: '',
      icon: Globe,
      color: 'text-cyan-400',
      trend: 'stable',
      change: 0
    },
    {
      id: 'uptime',
      label: 'System Uptime',
      value: 99.9,
      suffix: '%',
      icon: Clock,
      color: 'text-yellow-400',
      trend: 'stable',
      change: 0
    },
    {
      id: 'performance',
      label: 'Performance Score',
      value: 98,
      suffix: '/100',
      icon: TrendingUp,
      color: 'text-pink-400',
      trend: 'up',
      change: 2.1
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => {
          // Simulate small random changes
          const change = (Math.random() - 0.5) * 0.1;
          const newValue = Math.max(0, stat.value + change);
          
          return {
            ...stat,
            value: Math.round(newValue * 100) / 100
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↗';
      case 'down':
        return '↘';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-400';
      case 'down':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Live System Statistics</h3>
        <div className="flex items-center text-green-400 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          Live
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className={`bg-gray-800 rounded-lg p-4 border border-gray-700 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComponent className={`w-5 h-5 ${stat.color}`} />
                <div className="flex items-center text-xs">
                  <span className={getTrendColor(stat.trend)}>
                    {getTrendIcon(stat.trend)}
                  </span>
                  <span className={`ml-1 ${getTrendColor(stat.trend)}`}>
                    {stat.change > 0 ? '+' : ''}{stat.change}%
                  </span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Statistics updated every 2 seconds • Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default RealTimeStats;