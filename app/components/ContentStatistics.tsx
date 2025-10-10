'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Zap, Shield, Star, Award, Target } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});

  const statistics: Statistic[] = [
    {
      id: '1',
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 companies trust our solutions',
      icon: <Users className="w-8 h-8" />,
      color: 'text-cyan-400',
      trend: 'up',
      change: '+25% this year'
    },
    {
      id: '2',
      value: '$50M+',
      label: 'Cost Savings Delivered',
      description: 'Total savings achieved for our clients',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'text-green-400',
      trend: 'up',
      change: '+40% this quarter'
    },
    {
      id: '3',
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service with SLA guarantee',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-purple-400',
      trend: 'stable',
      change: 'Consistent performance'
    },
    {
      id: '4',
      value: '24/7',
      label: 'Expert Support',
      description: 'Round-the-clock technical assistance',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-yellow-400',
      trend: 'stable',
      change: 'Always available'
    },
    {
      id: '5',
      value: '50+',
      label: 'Countries Served',
      description: 'Global presence and local support',
      icon: <Globe className="w-8 h-8" />,
      color: 'text-blue-400',
      trend: 'up',
      change: '+5 new markets'
    },
    {
      id: '6',
      value: '95%',
      label: 'Client Satisfaction',
      description: 'Customer satisfaction rating',
      icon: <Star className="w-8 h-8" />,
      color: 'text-pink-400',
      trend: 'up',
      change: '+3% this year'
    },
    {
      id: '7',
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for clients',
      icon: <Award className="w-8 h-8" />,
      color: 'text-indigo-400',
      trend: 'up',
      change: '+50% improvement'
    },
    {
      id: '8',
      value: '1000+',
      label: 'Projects Completed',
      description: 'Successful implementations',
      icon: <Target className="w-8 h-8" />,
      color: 'text-orange-400',
      trend: 'up',
      change: '+200 this year'
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      statistics.forEach((stat) => {
        const numericValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        if (!isNaN(numericValue)) {
          let current = 0;
          const increment = numericValue / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            setAnimatedStats(prev => ({
              ...prev,
              [stat.id]: Math.floor(current)
            }));
          }, 50);
        }
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, [statistics]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
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
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real implementations. See how we've helped businesses transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-800/50 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                {stat.icon}
              </div>
              
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.id in animatedStats ? animatedStats[stat.id] : stat.value}
                {stat.value.includes('%') && '%'}
                {stat.value.includes('$') && '$'}
                {stat.value.includes('+') && '+'}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-300 text-sm mb-3">
                {stat.description}
              </p>
              
              <div className="flex items-center justify-center gap-2">
                {getTrendIcon(stat.trend)}
                <span className={`text-sm ${getTrendColor(stat.trend)}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let us help you achieve similar results with our AI and IT solutions.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;