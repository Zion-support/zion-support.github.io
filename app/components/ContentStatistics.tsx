import React from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

interface ContentStatisticsProps {
  className?: string;
}

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className = '' }) => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      value: '10,000+',
      label: 'Happy Clients'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      value: '99.9%',
      label: 'Uptime'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      value: '50+',
      label: 'Awards Won'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      value: '25+',
      label: 'Countries'
    }
  ];

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
        <p className="text-gray-300">Numbers that speak for themselves</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentStatistics;