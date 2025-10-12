import React, { useEffect } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className = '' }) => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      label: 'Active Users',
      value: '12,345',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      label: 'Revenue',
      value: '$45,678',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      label: 'Growth',
      value: '23.5%',
      change: '+5%',
      changeType: 'positive' as const
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      label: 'Analytics',
      value: '98.2%',
      change: '+2%',
      changeType: 'positive' as const
    }
  ];

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-6">Analytics Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              {stat.icon}
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;