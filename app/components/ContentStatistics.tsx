'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, CheckCircle, Award, Globe, Zap, Shield, Brain } from 'lucide-react';

interface Statistic {
  id: string;
  icon: React.ComponentType<any>;
  value: number;
  label: string;
  description: string;
  color: string;
}

const ContentStatistics: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({});

  const statistics: Statistic[] = [
    {
      id: 'clients',
      icon: Users,
      value: 10000,
      label: 'Happy Clients',
      description: 'Businesses transformed worldwide',
      color: 'text-blue-400'
    },
    {
      id: 'projects',
      icon: CheckCircle,
      value: 50000,
      label: 'Projects Completed',
      description: 'Successful implementations',
      color: 'text-green-400'
    },
    {
      id: 'uptime',
      icon: Zap,
      value: 99.9,
      label: 'Uptime',
      description: 'Reliable service delivery',
      color: 'text-yellow-400'
    },
    {
      id: 'countries',
      icon: Globe,
      value: 50,
      label: 'Countries',
      description: 'Global presence',
      color: 'text-purple-400'
    },
    {
      id: 'security',
      icon: Shield,
      value: 100,
      label: 'Security Score',
      description: 'Enterprise-grade security',
      color: 'text-red-400'
    },
    {
      id: 'innovation',
      icon: Brain,
      value: 95,
      label: 'Innovation Index',
      description: 'Cutting-edge technology',
      color: 'text-cyan-400'
    }
  ];

  const animateValue = (start: number, end: number, duration: number, key: string) => {
    const startTime = performance.now();
    const isDecimal = end % 1 !== 0;
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (end - start) * easeOutCubic;
      
      setAnimatedStats(prev => ({
        ...prev,
        [key]: isDecimal ? Math.round(currentValue * 10) / 10 : Math.round(currentValue)
      }));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    statistics.forEach((stat, index) => {
      const timer = setTimeout(() => {
        animateValue(0, stat.value, 2000, stat.id);
      }, index * 200);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const formatValue = (value: number, label: string) => {
    if (label.includes('Uptime') || label.includes('Score') || label.includes('Index')) {
      return `${value}%`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K+`;
    }
    return value.toString();
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses worldwide achieve their goals with our innovative solutions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {formatValue(animatedStats[stat.id] || 0, stat.label)}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our solutions are trusted by Fortune 500 companies, startups, and organizations across various industries worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;