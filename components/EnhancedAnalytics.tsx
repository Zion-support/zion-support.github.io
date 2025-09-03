import React, { useEffect, useState, useCallback } from 'react';
import { BarChart3, Users, Eye, MousePointer, TrendingUp } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: string;
  topPages: { page: string; views: number }[];
  trafficSources: { source: string; percentage: number }[];
}

interface EnhancedAnalyticsProps {
  className?: string;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ className = "" }) => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 12345,
    uniqueVisitors: 8901,
    bounceRate: 34,
    avgSessionDuration: "2m 34s",
    topPages: [
      { page: "/", views: 5432 },
      { page: "/services", views: 3210 },
      { page: "/about", views: 1876 },
      { page: "/contact", views: 987 }
    ],
    trafficSources: [
      { source: "Direct", percentage: 45 },
      { source: "Google", percentage: 30 },
      { source: "Social", percentage: 15 },
      { source: "Referral", percentage: 10 }
    ]
  });

  const [isLoading, setIsLoading] = useState(false);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  const metrics = [
    { label: "Page Views", value: data.pageViews.toLocaleString(), icon: Eye, color: "blue" },
    { label: "Unique Visitors", value: data.uniqueVisitors.toLocaleString(), icon: Users, color: "green" },
    { label: "Bounce Rate", value: `${data.bounceRate}%`, icon: TrendingUp, color: "orange" },
    { label: "Avg. Session", value: data.avgSessionDuration, icon: MousePointer, color: "purple" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-100 text-blue-600";
      case "green": return "bg-green-100 text-green-600";
      case "orange": return "bg-orange-100 text-orange-600";
      case "purple": return "bg-purple-100 text-purple-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border ${className}`}>
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Enhanced Analytics</h3>
              <p className="text-sm text-gray-600">Comprehensive website analytics</p>
            </div>
          </div>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-500">+12%</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Top Pages */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h4>
          <div className="space-y-3">
            {data.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-900">{page.page}</span>
                <span className="text-blue-600 font-semibold">{page.views.toLocaleString()} views</span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h4>
          <div className="space-y-3">
            {data.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-900">{source.source}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAnalytics;