import React from 'react';
import { Users, Zap, Award, TrendingUp } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface ContentStatisticsProps {
  stats?: StatItem[];
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({
  stats = [
    {
      value: "500+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "text-blue-400",
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: <Zap className="w-8 h-8" />,
      color: "text-green-400",
    },
    {
      value: "50+",
      label: "Awards Won",
      icon: <Award className="w-8 h-8" />,
      color: "text-yellow-400",
    },
    {
      value: "40%",
      label: "Cost Savings",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-purple-400",
    },
  ],
  className = "",
}) => {
  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentStatistics;