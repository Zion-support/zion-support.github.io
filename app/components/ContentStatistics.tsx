'use client';
import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

interface StatItem {
  id: string;
  value: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  animationDuration?: number;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = [
    {
      id: 'users',
      value: 10000,
      label: 'Active Users',
      icon: Users,
      suffix: '+'
    },
    {
      id: 'growth',
      value: 150,
      label: 'Growth Rate',
      icon: TrendingUp,
      suffix: '%'
    },
    {
      id: 'awards',
      value: 25,
      label: 'Industry Awards',
      icon: Award
    },
    {
      id: 'countries',
      value: 50,
      label: 'Countries Served',
      icon: Globe
    }
  ],
  animationDuration = 2000,
  className = ''
}) => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  useEffect(() => {
    const animateValue = (key: string, endValue: number) => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / animationDuration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);
        
        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue
        }));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    };

    stats.forEach(stat => {
      animateValue(stat.id, stat.value);
    });
  }, [stats, animationDuration]);

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        const animatedValue = animatedValues[stat.id] || 0;
        
        return (
          <div key={stat.id} className="text-center">
            <div className="flex justify-center mb-2">
              <IconComponent className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.prefix || ''}{animatedValue.toLocaleString()}{stat.suffix || ''}
            </div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentStatistics;