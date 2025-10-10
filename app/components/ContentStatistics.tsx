'use client';
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface Statistic {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
}

interface ContentStatisticsProps {
  statistics?: Statistic[];
  variant?: 'default' | 'dark' | 'gradient';
  columns?: 2 | 3 | 4;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      value: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      value: '200+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      value: '95%',
      label: 'Success Rate',
      description: 'Projects delivered on time and within budget'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support'
    }
  ],
  variant = 'default',
  columns = 4
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
      default:
        return 'bg-white text-gray-900';
    }
  };

  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <div className={`py-16 px-4 ${getVariantClasses()}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid ${getGridClasses()} gap-8`}>
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              {stat.description && (
                <div className="text-sm opacity-80">{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;
