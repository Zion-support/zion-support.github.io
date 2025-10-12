import React, { useEffect } from 'react';
import { TrendingUp, Users, Eye, MousePointer } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
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
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      value: '12.5K',
      label: 'Page Views',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      value: '3.2K',
      label: 'Unique Visitors',
      change: '+8%',
      changeType: 'positive' as const
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      value: '2.1K',
      label: 'Sessions',
      change: '+15%',
      changeType: 'positive' as const
    },
    {
      icon: <MousePointer className="w-6 h-6 text-green-400" />,
      value: '4.2%',
      label: 'Conversion Rate',
      change: '+3%',
      changeType: 'positive' as const
    }
  ];

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-6">Analytics Overview</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              {stat.icon}
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}