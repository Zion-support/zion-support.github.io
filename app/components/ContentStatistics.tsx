import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface Statistic {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

interface ContentStatisticsProps {
  statistics: Statistic[];
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  statistics,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {statistics.map((stat) => (
        <div key={stat.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="text-blue-600 mb-4 flex justify-center">
            {stat.icon}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600 mb-2">
            {stat.label}
          </div>
          {stat.trend && (
            <div className="text-green-600 text-sm flex items-center justify-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {stat.trend}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentStatistics;
