import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Eye, Clock } from 'lucide-react';

interface ContentStatisticsProps {
  stats: Array<{
    id: string;
    label: string;
    value: number;
    unit?: string;
    icon?: React.ReactNode;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: number;
  }>;
  animated?: boolean;
  duration?: number;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats,
  animated = true,
  duration = 2000
}) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);

  useEffect(() => {
    if (!animated) {
      setAnimatedValues(stats.map(stat => stat.value));
      return;
    }

    const startTime = Date.now();
    const startValues = stats.map(() => 0);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      
      const newValues = stats.map(stat => Math.round(stat.value * easedProgress));
      setAnimatedValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [stats, animated, duration]);

  const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default:
        return null;
    }
  };

  const getTrendColor = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {stat.icon && (
                <div className="p-2 bg-blue-100 rounded-lg">
                  {stat.icon}
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {animatedValues[index]?.toLocaleString() || stat.value.toLocaleString()}
                    {stat.unit && <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>}
                  </span>
                  {stat.trend && stat.trendValue && (
                    <div className={`flex items-center space-x-1 ${getTrendColor(stat.trend)}`}>
                      {getTrendIcon(stat.trend)}
                      <span className="text-sm font-medium">
                        {stat.trendValue > 0 ? '+' : ''}{stat.trendValue}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentStatistics;