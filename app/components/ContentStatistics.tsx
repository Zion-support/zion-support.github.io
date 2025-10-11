'use client'
import React, { useState, useEffect } from 'react'
import { TrendingUp, Users, Eye, Clock, Star, MessageCircle } from 'lucide-react'

interface StatItem {
  id: string;
  label: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  showTrends?: boolean;
  refreshInterval?: number;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats,
  showTrends = true,
  refreshInterval = 30000
}) => {
  const [currentStats, setCurrentStats] = useState<StatItem[]>([]);

  const defaultStats: StatItem[] = [
    {
      id: '1',
      label: 'Total Views',
      value: 125430,
      change: 12.5,
      icon: <Eye className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      id: '2',
      label: 'Active Users',
      value: 8932,
      change: 8.3,
      icon: <Users className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      id: '3',
      label: 'Engagement Rate',
      value: 78.5,
      change: -2.1,
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      id: '4',
      label: 'Avg. Read Time',
      value: 4.2,
      change: 5.7,
      icon: <Clock className="w-6 h-6" />,
      color: 'text-yellow-400'
    },
    {
      id: '5',
      label: 'Content Rating',
      value: 4.8,
      change: 0.3,
      icon: <Star className="w-6 h-6" />,
      color: 'text-orange-400'
    },
    {
      id: '6',
      label: 'Comments',
      value: 2341,
      change: 15.2,
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'text-cyan-400'
    }
  ];

  useEffect(() => {
    setCurrentStats(stats || defaultStats);
  }, [stats]);

  useEffect(() => {
    if (!refreshInterval) return;

    const timer = setInterval(() => {
      setCurrentStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 10) - 5,
          change: stat.change + (Math.random() * 2) - 1
        }))
      );
    }, refreshInterval);

    return () => clearInterval(timer);
  }, [refreshInterval]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentStats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.color}`}>
              {stat.icon}
            </div>
            {showTrends && (
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                stat.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                <TrendingUp className={`w-4 h-4 ${
                  stat.change < 0 ? 'rotate-180' : ''
                }`} />
                {Math.abs(stat.change).toFixed(1)}%
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-white">
              {stat.value.toLocaleString()}
              {stat.label.includes('Rate') && '%'}
              {stat.label.includes('Time') && ' min'}
            </div>
            <div className="text-gray-300 text-sm">
              {stat.label}
            </div>
          </div>

          {showTrends && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>vs last period</span>
                <span className={stat.change >= 0 ? 'text-green-400' : 'text-red-400'}>
                  {stat.change >= 0 ? '+' : ''}{stat.change.toFixed(1)}%
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentStatistics;