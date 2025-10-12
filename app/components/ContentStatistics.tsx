import React, { useState, useEffect } from 'react';
import { Users, Award, CheckCircle, Zap } from 'lucide-react';

'use client';

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
      value: 1200,
      label: 'Active Users',
      icon: Users,
      suffix: '+'
    },
    {
      id: 'projects',
      value: 99.8,
      label: 'Success Rate',
      icon: Award,
      suffix: '%'
    },
    {
      id: 'uptime',
      value: 99.9,
      label: 'Uptime',
      icon: CheckCircle,
      suffix: '%'
    },
    {
      id: 'performance',
      value: 300,
      label: 'Performance Boost',
      icon: Zap,
      suffix: '%'
    }
  ],
  animationDuration = 2000,
  className = '',
}) => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, key: string) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOutCubic;
        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue,
        }));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    stats.forEach(stat => {
      animateValue(0, stat.value, animationDuration, stat.id);
    });
  }, [stats, animationDuration]);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => {
            const animatedValue = animatedValues[stat.id] || 0;
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.prefix}
                  {stat.suffix === '%'
                    ? animatedValue.toFixed(1)
                    : Math.floor(animatedValue).toLocaleString()
                  }
                  {stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;

