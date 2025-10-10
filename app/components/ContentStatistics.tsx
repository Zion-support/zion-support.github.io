'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

interface StatItem {
  id: number;
  value: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
}

interface ContentStatisticsProps {
  title?: string;
  description?: string;
  stats?: StatItem[];
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  title = "Our Impact",
  description = "Numbers that speak for themselves - see how we're transforming businesses worldwide.",
  stats = [
    {
      id: 1,
      value: 1000,
      label: "Projects Completed",
      icon: Award,
      suffix: "+"
    },
    {
      id: 2,
      value: 500,
      label: "Happy Clients",
      icon: Users,
      suffix: "+"
    },
    {
      id: 3,
      value: 99,
      label: "Success Rate",
      icon: TrendingUp,
      suffix: "%"
    },
    {
      id: 4,
      value: 24,
      label: "Support Hours",
      icon: Zap,
      suffix: "/7"
    }
  ],
  className = ''
}) => {
  const [animatedStats, setAnimatedStats] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, duration / steps);
      });
    };

    // Start animation after a short delay
    const timeout = setTimeout(animateStats, 500);
    return () => clearTimeout(timeout);
  }, [stats]);

  return (
    <div className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.id] || 0;
            
            return (
              <div key={stat.id} className="text-center">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.prefix}{animatedValue}{stat.suffix}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;