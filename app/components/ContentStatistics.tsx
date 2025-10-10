'use client';
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Clock, Target, Zap } from 'lucide-react';

interface Statistic {
  id: string;
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ContentStatisticsProps {
  statistics: Statistic[];
  title?: string;
  description?: string;
  showTrends?: boolean;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics,
  title = 'Statistics',
  description = 'Key metrics and performance indicators',
  showTrends = true,
  className = ''
}) => {
  const [animatedStats, setAnimatedStats] = useState<Statistic[]>([]);

  useEffect(() => {
    // Animate statistics on mount
    const timer = setTimeout(() => {
      setAnimatedStats(statistics);
    }, 100);

    return () => clearTimeout(timer);
  }, [statistics]);

  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return 'text-green-400';
      case 'decrease':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="w-4 h-4" />;
      case 'decrease':
        return <TrendingUp className="w-4 h-4 rotate-180" />;
      default:
        return <div className="w-4 h-0.5 bg-gray-400" />;
    }
  };

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animatedStats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                {showTrends && (
                  <div className={`flex items-center space-x-1 ${getChangeColor(stat.changeType)}`}>
                    {getChangeIcon(stat.changeType)}
                    <span className="text-sm font-medium">
                      {stat.change > 0 ? '+' : ''}{stat.change}%
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Section */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">
              {statistics.length}
            </div>
            <div className="text-gray-400 text-sm">Total Metrics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">
              {statistics.filter(s => s.changeType === 'increase').length}
            </div>
            <div className="text-gray-400 text-sm">Improving</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {Math.round(statistics.reduce((acc, stat) => acc + stat.value, 0) / statistics.length)}
            </div>
            <div className="text-gray-400 text-sm">Average Value</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;