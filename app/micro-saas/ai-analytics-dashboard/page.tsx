'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Users, DollarSign, Eye, MousePointer, Calendar, Download, RefreshCw, Settings, Filter, Download as DownloadIcon } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    visitors: 0,
    pageViews: 0,
    conversionRate: 0,
    revenue: 0,
    bounceRate: 0,
    avgSessionDuration: 0
  });

  const periods = [
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  const metrics = [
    {
      title: 'Total Visitors',
      value: dashboardData.visitors.toLocaleString(),
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Page Views',
      value: dashboardData.pageViews.toLocaleString(),
      change: '+8.2%',
      trend: 'up',
      icon: Eye,
      color: 'text-green-400'
    },
    {
      title: 'Conversion Rate',
      value: `${dashboardData.conversionRate}%`,
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      title: 'Revenue',
      value: `$${dashboardData.revenue.toLocaleString()}`,
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-yellow-400'
    },
    {
      title: 'Bounce Rate',
      value: `${dashboardData.bounceRate}%`,
      change: '-3.2%',
      trend: 'down',
      icon: MousePointer,
      color: 'text-red-400'
    },
    {
      title: 'Avg. Session',
      value: `${dashboardData.avgSessionDuration}m`,
      change: '+1.8m',
      trend: 'up',
      icon: Calendar,
      color: 'text-cyan-400'
    }
  ];

  const chartData = [
    { name: 'Mon', visitors: 1200, pageViews: 3400, revenue: 2400 },
    { name: 'Tue', visitors: 1900, pageViews: 4200, revenue: 3200 },
    { name: 'Wed', visitors: 3000, pageViews: 5600, revenue: 4800 },
    { name: 'Thu', visitors: 2800, pageViews: 5100, revenue: 4100 },
    { name: 'Fri', visitors: 1890, pageViews: 3800, revenue: 2900 },
    { name: 'Sat', visitors: 2390, pageViews: 4300, revenue: 3500 },
    { name: 'Sun', visitors: 3490, pageViews: 6200, revenue: 5200 }
  ];

  const topPages = [
    { page: '/home', views: 12400, visitors: 8900, bounceRate: '32%' },
    { page: '/products', views: 8900, visitors: 6200, bounceRate: '28%' },
    { page: '/about', views: 5600, visitors: 4200, bounceRate: '45%' },
    { page: '/contact', views: 3400, visitors: 2800, bounceRate: '38%' },
    { page: '/blog', views: 2100, visitors: 1800, bounceRate: '52%' }
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 45, percentage: 45, color: 'bg-blue-500' },
    { source: 'Direct', visitors: 25, percentage: 25, color: 'bg-green-500' },
    { source: 'Social Media', visitors: 15, percentage: 15, color: 'bg-purple-500' },
    { source: 'Email', visitors: 10, percentage: 10, color: 'bg-yellow-500' },
    { source: 'Referral', visitors: 5, percentage: 5, color: 'bg-red-500' }
  ];

  useEffect(() => {
    generateMockData();
  }, [selectedPeriod]);

  const generateMockData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const baseData = {
        '24h': { visitors: 1200, pageViews: 3400, conversionRate: 3.2, revenue: 2400, bounceRate: 32, avgSessionDuration: 2.5 },
        '7d': { visitors: 8900, pageViews: 25600, conversionRate: 3.8, revenue: 18900, bounceRate: 28, avgSessionDuration: 3.2 },
        '30d': { visitors: 45600, pageViews: 128900, conversionRate: 4.1, revenue: 98700, bounceRate: 25, avgSessionDuration: 3.8 },
        '90d': { visitors: 134500, pageViews: 389200, conversionRate: 4.5, revenue: 298400, bounceRate: 22, avgSessionDuration: 4.2 }
      };
      
      setDashboardData(baseData[selectedPeriod as keyof typeof baseData]);
      setIsLoading(false);
    }, 1000);
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Metric,Value,Change\n" +
      "Total Visitors," + dashboardData.visitors + ",+12.5%\n" +
      "Page Views," + dashboardData.pageViews + ",+8.2%\n" +
      "Conversion Rate," + dashboardData.conversionRate + "%,+2.1%\n" +
      "Revenue,$" + dashboardData.revenue + ",+15.3%\n" +
      "Bounce Rate," + dashboardData.bounceRate + "%,-3.2%\n" +
      "Avg Session," + dashboardData.avgSessionDuration + "m,+1.8m";
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `analytics-${selectedPeriod}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Real-time Business Intelligence</title>
        <meta name="description" content="Get real-time insights into your business performance with our AI-powered analytics dashboard. Track visitors, conversions, revenue, and more." />
        <meta name="keywords" content="analytics dashboard, business intelligence, data visualization, real-time analytics, AI analytics, Zion Tech Group" />
      </Helmet>

      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AI Analytics Dashboard</h1>
                <p className="text-gray-400">Real-time business intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-slate-700 border border-slate-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              <button
                onClick={generateMockData}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 text-white rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportData}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <DownloadIcon className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visitors Chart */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Visitors & Page Views</h3>
            <div className="space-y-4">
              {chartData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-gray-300">{day.name}</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white">{day.visitors.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-white">{day.pageViews.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Revenue Trend</h3>
            <div className="space-y-4">
              {chartData.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-gray-300">{day.name}</div>
                  <div className="flex items-center gap-4">
                    <div className="text-white font-medium">${day.revenue.toLocaleString()}</div>
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                        style={{ width: `${(day.revenue / 6000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Top Pages</h3>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <div className="text-white font-medium">{page.page}</div>
                    <div className="text-sm text-gray-400">{page.visitors.toLocaleString()} visitors</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">{page.views.toLocaleString()} views</div>
                    <div className="text-sm text-gray-400">{page.bounceRate} bounce rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">{source.source}</span>
                    <span className="text-white font-medium">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`${source.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-cyan-400" />
            AI-Powered Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Performance Alert</h4>
                <p className="text-gray-300">Your conversion rate has improved by 2.1% this week. This is likely due to the new landing page design implemented on Tuesday.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Optimization Suggestion</h4>
                <p className="text-gray-300">Consider adding more engaging content to your /blog page. It has a 52% bounce rate, which is above average.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Trend Analysis</h4>
                <p className="text-gray-300">Weekend traffic shows 15% higher engagement rates. Consider scheduling important content releases for Saturday-Sunday.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Revenue Forecast</h4>
                <p className="text-gray-300">Based on current trends, you're on track to increase revenue by 18% next month if current growth patterns continue.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Deeper Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Unlock the full power of AI-driven analytics with our advanced dashboard features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalyticsDashboardPage;