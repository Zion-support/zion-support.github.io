import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className = '' }) => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      label: 'Active Users',
      value: '10,000+',
      change: '+12%'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      label: 'Growth Rate',
      value: '25%',
      change: '+5%'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
      label: 'Revenue',
      value: '$2.5M',
      change: '+18%'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      label: 'Analytics',
      value: '99.9%',
      change: '+2%'
    }
  ];

  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-6">Analytics Dashboard</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-2">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-300">{stat.label}</div>
            <div className="text-xs text-green-400">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;