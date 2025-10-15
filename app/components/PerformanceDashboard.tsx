import React from 'react';
import { BarChart3, TrendingUp, Activity, Zap } from 'lucide-react';

interface PerformanceDashboardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  children,
  className = "",
  title,
  description
}) => {
  const performanceMetrics = [
    { name: 'Page Load Time', value: '1.2s', icon: Zap, color: 'text-green-500' },
    { name: 'First Contentful Paint', value: '0.8s', icon: Activity, color: 'text-blue-500' },
    { name: 'Largest Contentful Paint', value: '1.5s', icon: TrendingUp, color: 'text-purple-500' },
    { name: 'Cumulative Layout Shift', value: '0.05', icon: BarChart3, color: 'text-orange-500' }
  ];

  return (
    <div className={`enhanced-component bg-slate-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{metric.name}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </div>
          );
        })}
      </div>
      
      {children}
    </div>
  );
};

export default PerformanceDashboard;
