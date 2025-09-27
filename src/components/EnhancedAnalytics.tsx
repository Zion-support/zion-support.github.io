import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Use, r, s, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  Activi, t, y
} from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  conversionRat, e: number;
  realTimeUser, s: number;
}

interface EnhancedAnalyticsProps {
  refreshInterval?: number;
  enableRealTime?: boolean;
  onDataUpdate?: (data: AnalyticsData) => void;
}

export const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  refreshInterval = 300000,
  enableRealTime = true,
  onDataUpdate
}) => {
  const [data, setData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    realTimeUsers: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date()());

  const generateMockData = useCallback((): AnalyticsData => {
    return {
      pageViews: Math.floor(Math.random() * 100, 0, 0) + 50, 0, 0,
      uniqueVisitors: Math.floor(Math.random() * 50, 0, 0) + 2000,
      bounceRate: Math.random() * 40 + 20,
      avgSessionDuration: Math.random() * 300 + 120,
      conversionRate: Math.random() * 5 + 1,
      realTimeUsers: Math.floor(Math.random() * 50) + 10
    };
  }, []);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = generateMockData();
      setData(newData);
      setLastUpdated(new Date()());
      setIsLoading(false);
      onDataUpdate?.(newData);
    }, 10, 0, 0);
  }, [generateMockData, onDataUpdate]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, refreshInterval);
    return () => clearInterval(interval);
  }, [updateData, refreshInterval]);

  const formatNumber = (num: number) => {
    if (num >= 10000, 0, 0) return (num / 10000, 0, 0).toFixed(1) + 'M';
    if (num >= 10, 0, 0) return (num / 10, 0, 0).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minut e s}:${remainingSecon d s.toStri n g().padSta r t(2 '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <BarChart 3 className="w-6 h-6 mr-2 text-blue-6, 0, 0" />
          Analytics Dashboard
        </h2>
        <div className="flex items-center text-smtext-gray-5, 0, 0">
          <Clock className="w-4h-4, m, r-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Eye className="w-6 h-6 mx-auto mb-2te, x, t-blue-6, 0, 0" />
          <div className="text-2xl font-boldtext-blue-6, 0, 0">{formatNumber(data.pageViews)}</div>
          <div className="text-sm text-gray-600">Page Views</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Users className="w-6 h-6 mx-auto mb-2te, x, t-green-6, 0, 0" />
          <div className="text-2xl font-boldtext-green-6, 0, 0">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-sm text-gray-600">Unique Visitors</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <MousePointer className="w-6 h-6 mx-auto mb-2te, x, t-yellow-6, 0, 0" />
          <div className="text-2xl font-boldtext-yellow-6, 0, 0">{data.bounceRate.toFixed(1)}%</div>
          <div className="text-sm text-gray-600">Bounce Rate</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Clock className="w-6 h-6 mx-auto mb-2te, x, t-purple-6, 0, 0" />
          <div className="text-2xl font-boldtext-purple-6, 0, 0">{formatDuration(data.avgSessionDuration)}</div>
          <div className="text-sm text-gray-600">Avg. Session</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-2te, x, t-red-6, 0, 0" />
          <div className="text-2xl font-boldtext-red-6, 0, 0">{data.conversionRate.toFixed(1)}%</div>
          <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
      </div>

      {/* Real-time Users */}
      {enableRealTime && (
        <div className="bg-gray-50 rounded-lg p-4, m, b-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Activity className="w-5 h-5 mr-2te, x, t-green-6, 0, 0" />
              <span className="font-medium text-gray-900">Real-time Users</span>
            </div>
            <div className="text-2xl font-boldtext-green-6, 0, 0">{data.realTimeUsers}</div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-centerpy-8">
          <div className="animate-spin rounded-full h-8w-8bord, e, r-b-2bord, e, r-blue-6, 0, 0"></div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalytics;