'use client';
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface Statistic {
  id: string;
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  trend?: 'up' | 'down' | 'neutral';
  change?: string;
}

interface ContentStatisticsProps {
  statistics: Statistic[];
  title?: string;
  description?: string;
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics,
  title = "Our Impact",
  description = "Numbers that speak for themselves",
  className = ""
}) => {
  const defaultStats: Statistic[] = [
    {
      id: '1',
      value: '500+',
      label: 'Projects Completed',
      icon: Award,
      trend: 'up',
      change: '+25%'
    },
    {
      id: '2',
      value: '10K+',
      label: 'Happy Clients',
      icon: Users,
      trend: 'up',
      change: '+15%'
    },
    {
      id: '3',
      value: '99.9%',
      label: 'Uptime',
      icon: Clock,
      trend: 'up',
      change: '+0.1%'
    },
    {
      id: '4',
      value: '50%',
      label: 'Cost Reduction',
      icon: TrendingUp,
      trend: 'up',
      change: '+10%'
    }
  ];

  const statsToShow = statistics || defaultStats;

  return (
    <div className={`py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsToShow.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              {stat.icon && (
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              )}
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-600 mb-2">
                {stat.label}
              </div>
              
              {stat.trend && stat.change && (
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  stat.trend === 'up' 
                    ? 'bg-green-100 text-green-800' 
                    : stat.trend === 'down'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <TrendingUp className={`w-4 h-4 mr-1 ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`} />
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;