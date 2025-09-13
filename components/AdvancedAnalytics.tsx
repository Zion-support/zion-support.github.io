'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
  conversionRate: number;
  topPages: Array<{ page: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ device: string; percentage: number }>;
}

export default function AdvancedAnalytics() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: []
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate analytics data loading
    const loadAnalyticsData = () => {
      setAnalyticsData({
        pageViews: Math.floor(Math.random() * 100000) + 50000,
        uniqueVisitors: Math.floor(Math.random() * 50000) + 25000,
        avgSessionDuration: Math.random() * 5 + 2,
        bounceRate: Math.random() * 30 + 20,
        conversionRate: Math.random() * 15 + 5,
        topPages: [
          { page: '/ai-2025-ultimate-breakthrough-revolution', views: 15420 },
          { page: '/case-studies/ai-2025-global-transformation-breakthrough', views: 12850 },
          { page: '/blog/ai-2025-revolutionary-trends-predictions', views: 11230 },
          { page: '/', views: 9850 },
          { page: '/services', views: 7650 }
        ],
        trafficSources: [
          { source: 'Organic Search', percentage: 45 },
          { source: 'Direct', percentage: 25 },
          { source: 'Social Media', percentage: 15 },
          { source: 'Referral', percentage: 10 },
          { source: 'Email', percentage: 5 }
        ],
        deviceTypes: [
          { device: 'Desktop', percentage: 60 },
          { device: 'Mobile', percentage: 35 },
          { device: 'Tablet', percentage: 5 }
        ]
      });
    };

    loadAnalyticsData();

    // Show analytics after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-4 right-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm z-40"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-gray-800">Analytics Dashboard</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 text-xs"
        >
          ✕
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center p-2 bg-blue-50 rounded">
          <div className="text-lg font-bold text-blue-600">
            {analyticsData.pageViews.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">Page Views</div>
        </div>
        <div className="text-center p-2 bg-green-50 rounded">
          <div className="text-lg font-bold text-green-600">
            {analyticsData.uniqueVisitors.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">Unique Visitors</div>
        </div>
        <div className="text-center p-2 bg-purple-50 rounded">
          <div className="text-lg font-bold text-purple-600">
            {analyticsData.avgSessionDuration.toFixed(1)}m
          </div>
          <div className="text-xs text-gray-500">Avg. Session</div>
        </div>
        <div className="text-center p-2 bg-orange-50 rounded">
          <div className="text-lg font-bold text-orange-600">
            {analyticsData.conversionRate.toFixed(1)}%
          </div>
          <div className="text-xs text-gray-500">Conversion</div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Top Pages</h4>
        <div className="space-y-1">
          {analyticsData.topPages.slice(0, 3).map((page, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-600 truncate flex-1 mr-2">
                {page.page.split('/').pop() || 'Home'}
              </span>
              <span className="text-gray-800 font-medium">
                {page.views.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Traffic Sources</h4>
        <div className="space-y-1">
          {analyticsData.trafficSources.map((source, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-600">{source.source}</span>
              <span className="text-gray-800 font-medium">{source.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Device Types */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Device Types</h4>
        <div className="space-y-1">
          {analyticsData.deviceTypes.map((device, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <span className="text-gray-600">{device.device}</span>
              <span className="text-gray-800 font-medium">{device.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Indicator */}
      <div className="pt-3 border-t">
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-600">Performance Score</span>
          <div className="flex items-center">
            <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
              <div 
                className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                style={{ width: '85%' }}
              ></div>
            </div>
            <span className="text-green-600 font-medium">85%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}