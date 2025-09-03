import React from "react";
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react";

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className = "" }) => {
  const metrics = [
    { label: "Page Views", value: "12,345", icon: Eye, change: "+12%" },
    { label: "Unique Visitors", value: "8,901", icon: Users, change: "+8%" },
    { label: "Bounce Rate", value: "34%", icon: TrendingUp, change: "-5%" },
    { label: "Avg. Session", value: "2m 34s", icon: BarChart3, change: "+15%" }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-lg border p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Analytics Overview</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5 text-gray-600" />
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;