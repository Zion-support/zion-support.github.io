import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics: React.FC = () => {
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

  return null; // Analytics component doesn't render anything
};

export default Analytics;
import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

interface AnalyticsProps {
  className?: string;
}

export default function Analytics({ className = '' }: AnalyticsProps) {
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
      label: 'Growth Rate',
      value: '23.5%',
      change: '+2.1%',
      changeType: 'positive' as const
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      label: 'Conversion',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'negative' as const
    }
  ];

  return (
    <div className={`analytics-dashboard ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
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
  return (
    <div>Analytics Component</div>
  );
};

export default Analytics;
