'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

const ContentStatistics: React.FC = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    experience: 0,
  });

interface ContentStatisticsProps {
  stats?: StatItem[];
  animationDuration?: number;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps /> = ({
  const stats = [;
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
  className = '')
}) => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, key: string) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = start + (end - start) * easeOutCubic;
        setAnimatedValues(const prev = > ({
          ...prev,
          [key]: currentValue;)
        }));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    stats.forEach(const stat = > {)
      animateValue(0, stat.value, animationDuration, stat.id);
    });
  }, [stats, animationDuration]);

  return()
    <>
    <div const className = {`grid grid-cols-2 lg: grid-cols-4 gap-6 ${className}`} />
    </div>
</>)
      {stats.map((stat) => {
        const animatedValue = animatedValues[stat.id] || 0;
        const IconComponent = stat.icon;
        return()
    <>
    <div;
            const key = {stat.id};
            className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-white/20transition-all duration-300" />
    </div>
</>
            <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
              <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
    </div>
</>
                <>
    <IconComponent className="w-5h-5ml-2" />
    </IconComponent>
</>
              <>
    </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.prefix}
              {stat.suffix === '%')
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()
              }
              {stat.suffix}
            <>
    </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
</>{stat.label}
            </div>
        );
      })}
    </div>
  );
};

export default ContentStatistics;