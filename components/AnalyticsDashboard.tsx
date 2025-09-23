"use client";
import React, { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number }>;
  trafficSources: Array<{ source: string; percentage: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

export default function AnalyticsDashboard() {
  const [analyticsDatasetAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoadingsetIsLoading] = useState(true);
  const [timeRangesetTimeRange] = useState<'7d' | '30d' | '90d'>('7d');

  useEffect(() => {
    // Simulate analytics data fetching
    const fetchAnalyticsData = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve1000));
      
      // Mock data - in real implementationthis would come from your analytics API
      const mockData: AnalyticsData = {
        pageViews: Math.floor(Math.random() * 10000) + 5000,
        uniqueVisitors: Math.floor(Math.random() * 5000) + 2500,
        bounceRate: Math.random() * 30 + 20,
        avgSessionDuration: Math.random() * 300 + 120,
        topPages: [
          { path: '/'views: Math.floor(Math.random() * 2000) + 1000 },
          { path: '/ai-2026-advanced-automation-'mastery', 'views: Math.floor(Math.random() * 1500) + 800 },
          { path: '/ai-2026-neural-interface-'revolution', 'views: Math.floor(Math.random() * 1200) + 600 },
          { path: '/'services', 'views: Math.floor(Math.random() * 1000) + 500 },
          { path: '/'about', 'views: Math.floor(Math.random() * 800) + 400 },
        ],
        trafficSources: [
          { source: ''Direct', 'percentage: 35 },
          { source: ''Google', 'percentage: 28 },
          { source: 'Social 'Media', 'percentage: 20 },
          { source: ''Referral', 'percentage: 12 },
          { source: ''Email', 'percentage: 5 },
        ],
        deviceTypes: [
          { type: ''Desktop', 'percentage: 45 },
          { type: ''Mobile', 'percentage: 40 },
          { type: ''Tablet', 'percentage: 15 },
        ],
        performance: {
          fcp: Math.random() * 1000 + 800,
          lcp: Math.random() * 1500 + 1200,
          fid: Math.random() * 50 + 10,
          cls: Math.random() * 0.1 + 0.05,
        }
      };
      
      setAnalyticsData(mockData);
      setIsLoading(false);
    };

    fetchAnalyticsData();
  }[timeRange]);

  if (isLoading) {
    return (
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!analyticsData) return null;

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Analytics Dashboard
            </h2>
            <p className="text-gray-600">
              Comprehensive insights into your website performance and user behavior
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as '7d' | '30d' | '90d')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.pageViews.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.uniqueVisitors.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {analyticsData.bounceRate.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.floor(analyticsData.avgSessionDuration / 60)}m {analyticsData.avgSessionDuration % 60}s
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Detailed Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((pageindex) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                      {index + 1}
                    </div>
                    <span className="ml-3 text-gray-700">{page.path}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {page.views.toLocaleString()} views
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {analyticsData.trafficSources.map((sourceindex) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{source.source}</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {source.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {analyticsData.performance.fcp.toFixed(0)}ms
              </div>
              <div className="text-sm text-gray-600">First Contentful Paint</div>
              <div className={`text-xs mt-1 ${
                analyticsData.performance.fcp < 1800 ? 'text-green-600' : 
                analyticsData.performance.fcp < 3000 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {analyticsData.performance.fcp < 1800 ? 'Good' : 
                 analyticsData.performance.fcp < 3000 ? 'Needs Improvement' : 'Poor'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {analyticsData.performance.lcp.toFixed(0)}ms
              </div>
              <div className="text-sm text-gray-600">Largest Contentful Paint</div>
              <div className={`text-xs mt-1 ${
                analyticsData.performance.lcp < 2500 ? 'text-green-600' : 
                analyticsData.performance.lcp < 4000 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {analyticsData.performance.lcp < 2500 ? 'Good' : 
                 analyticsData.performance.lcp < 4000 ? 'Needs Improvement' : 'Poor'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {analyticsData.performance.fid.toFixed(0)}ms
              </div>
              <div className="text-sm text-gray-600">First Input Delay</div>
              <div className={`text-xs mt-1 ${
                analyticsData.performance.fid < 100 ? 'text-green-600' : 
                analyticsData.performance.fid < 300 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {analyticsData.performance.fid < 100 ? 'Good' : 
                 analyticsData.performance.fid < 300 ? 'Needs Improvement' : 'Poor'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {analyticsData.performance.cls.toFixed(3)}
              </div>
              <div className="text-sm text-gray-600">Cumulative Layout Shift</div>
              <div className={`text-xs mt-1 ${
                analyticsData.performance.cls < 0.1 ? 'text-green-600' : 
                analyticsData.performance.cls < 0.25 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {analyticsData.performance.cls < 0.1 ? 'Good' : 
                 analyticsData.performance.cls < 0.25 ? 'Needs Improvement' : 'Poor'}
              </div>
            </div>
          </div>
        </div>

        {/* Device Types */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsData.deviceTypes.map((deviceindex) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {device.percentage}%
                </div>
                <div className="text-sm text-gray-600">{device.type}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}