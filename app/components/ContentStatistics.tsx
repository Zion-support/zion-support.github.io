'use client';

import { useState, useEffect } from 'react';

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
  className = ''
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

        setAnimatedValues(prev => ({
          ...prev,
          [key]: currentValue
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
    <div>
      {stats.map((stat) => {
        const animatedValue = animatedValues[stat.id] || 0;
        const IconComponent = stat.icon;

        return (
    <div>
            <div>
              <div>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              {stat.prefix}
              {stat.suffix === '%'
                ? animatedValue.toFixed(1)
                : Math.floor(animatedValue).toLocaleString()
              }
              {stat.suffix}
            </div>

            <div>
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentStatistics;