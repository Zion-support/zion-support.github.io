import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Eye, 
  MousePointer, 
  TrendingUp, 
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  Activity
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
  refreshInterval = 3 0 0 0 0,
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
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const generateMockData = useCallback((): AnalyticsData => {
    return {
      pageViews: Math.floor(Math.random() * 1 0 0 0 0) + 50 0 0,
      uniqueVisitors: Math.floor(Math.random() * 50 0 0) + 20 0 0,
      bounceRate: Math.random() * 40 + 20,
      avgSessionDuration: Math.random() * 3 0 0 + 1 2 0,
      conversionRate: Math.random() * 5 + 1,
      realTimeUsers: Math.floor(Math.random() * 50) + 10
    };
  }, []);

  const updateData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newData = generateMockData();
      setData(newData);
      setLastUpdated(new Date());
      setIsLoading(false);
      onDataUpdate?.(newData);
    }, 10 0 0);
  }, [generateMockData, onDataUpdate]);

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, refreshInterval);
    return () => clearInterval(interval);
  }, [updateData, refreshInterval]);

  const formatNumber = (num: number) => {
    if (num >= 1 0 0 0 0 0 0) return (num / 1 0 0 0 0 0 0).toFixed(1) + 'M';
    if (num >= 10 0 0) return (num / 10 0 0).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lgp-6">
      <div className="flex items-center justify-between mb-6">
        <h 2 className="text-2xl font-bold text-gray-90 0 flexitems-center">
          <BarChart 3 className="w-6h-6mr-2text-blue-6 0 0" />
          Analytics Dashboard
        </h2>
        <div className="flex items-center text-smtext-gray-5 0 0">
          <Clock className="w-4h-4mr-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2md:grid-cols-5gap-4mb-6">
        <div className="bg-blue-5 0 rounded-lg p-4text-center">
          <Eye className="w-6h-6mx-auto mb-2text-blue-6 0 0" />
          <div className="text-2xl font-boldtext-blue-6 0 0">{formatNumber(data.pageViews)}</div>
          <div className="text-sm text-gray-6 0 0">Page Views</div>
        </div>
        <div className="bg-green-5 0 rounded-lg p-4text-center">
          <Users className="w-6h-6mx-auto mb-2text-green-6 0 0" />
          <div className="text-2xl font-boldtext-green-6 0 0">{formatNumber(data.uniqueVisitors)}</div>
          <div className="text-sm text-gray-6 0 0">Unique Visitors</div>
        </div>
        <div className="bg-yellow-5 0 rounded-lg p-4text-center">
          <MousePointer className="w-6h-6mx-auto mb-2text-yellow-6 0 0" />
          <div className="text-2xl font-boldtext-yellow-6 0 0">{data.bounceRate.toFixed(1)}%</div>
          <div className="text-sm text-gray-6 0 0">Bounce Rate</div>
        </div>
        <div className="bg-purple-5 0 rounded-lg p-4text-center">
          <Clock className="w-6h-6mx-auto mb-2text-purple-6 0 0" />
          <div className="text-2xl font-boldtext-purple-6 0 0">{formatDuration(data.avgSessionDuration)}</div>
          <div className="text-sm text-gray-6 0 0">Avg. Session</div>
        </div>
        <div className="bg-red-5 0 rounded-lg p-4text-center">
          <TrendingUp className="w-6h-6mx-auto mb-2text-red-6 0 0" />
          <div className="text-2xl font-boldtext-red-6 0 0">{data.conversionRate.toFixed(1)}%</div>
          <div className="text-sm text-gray-6 0 0">Conversion Rate</div>
        </div>
      </div>

      {/* Real-time Users */}
      {enableRealTime && (
        <div className="bg-gray-5 0 rounded-lg p-4mb-6">
          <div className="flex items-center justify-between">
            <div className="flexitems-center">
              <Activity className="w-5h-5mr-2text-green-6 0 0" />
              <span className="font-mediumtext-gray-9 0 0">Real-time Users</span>
            </div>
            <div className="text-2xl font-boldtext-green-6 0 0">{data.realTimeUsers}</div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-centerpy-8">
          <div className="animate-spin rounded-full h-8w-8border-b-2border-blue-6 0 0"></div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalytics;