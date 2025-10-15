'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ArrowTrendingDownIcon,
  EyeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowPathIcon,
  CalendarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface AnalyticsData {
  revenue: {
    current: number;
    previous: number;
    change: number;
  };
  users: {
    current: number;
    previous: number;
    change: number;
  };
  sessions: {
    current: number;
    previous: number;
    change: number;
  };
  conversion: {
    current: number;
    previous: number;
    change: number;
  };
  topPages: Array<{
    page: string;
    views: number;
    change: number;
  }>;
  trafficSources: Array<{
    source: string;
    percentage: number;
    visitors: number;
  }>;
  deviceStats: Array<{
    device: string;
    percentage: number;
    sessions: number;
  }>;
  hourlyData: Array<{
    hour: string;
    visitors: number;
    revenue: number;
  }>;
}

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<AnalyticsData>({
    revenue: { current: 0, previous: 0, change: 0 },
    users: { current: 0, previous: 0, change: 0 },
    sessions: { current: 0, previous: 0, change: 0 },
    conversion: { current: 0, previous: 0, change: 0 },
    topPages: [],
    trafficSources: [],
    deviceStats: [],
    hourlyData: []
  });
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setData({
          revenue: { current: 125430, previous: 98750, change: 27.0 },
          users: { current: 15420, previous: 12890, change: 19.6 },
          sessions: { current: 45680, previous: 38920, change: 17.4 },
          conversion: { current: 3.2, previous: 2.8, change: 14.3 },
          topPages: [
            { page: '/dashboard', views: 12540, change: 12.5 },
            { page: '/products', views: 9870, change: -3.2 },
            { page: '/pricing', views: 7650, change: 8.7 },
            { page: '/about', views: 5430, change: 15.3 },
            { page: '/contact', views: 3210, change: -1.8 }
          ],
          trafficSources: [
            { source: 'Organic Search', percentage: 45.2, visitors: 6980 },
            { source: 'Direct', percentage: 28.7, visitors: 4430 },
            { source: 'Social Media', percentage: 15.3, visitors: 2360 },
            { source: 'Email', percentage: 7.8, visitors: 1205 },
            { source: 'Referral', percentage: 3.0, visitors: 445 }
          ],
          deviceStats: [
            { device: 'Desktop', percentage: 52.3, sessions: 23890 },
            { device: 'Mobile', percentage: 38.7, sessions: 17680 },
            { device: 'Tablet', percentage: 9.0, sessions: 4110 }
          ],
          hourlyData: [
            { hour: '00:00', visitors: 120, revenue: 450 },
            { hour: '01:00', visitors: 80, revenue: 320 },
            { hour: '02:00', visitors: 60, revenue: 180 },
            { hour: '03:00', visitors: 40, revenue: 120 },
            { hour: '04:00', visitors: 50, revenue: 150 },
            { hour: '05:00', visitors: 70, revenue: 210 },
            { hour: '06:00', visitors: 150, revenue: 450 },
            { hour: '07:00', visitors: 280, revenue: 840 },
            { hour: '08:00', visitors: 450, revenue: 1350 },
            { hour: '09:00', visitors: 680, revenue: 2040 },
            { hour: '10:00', visitors: 890, revenue: 2670 },
            { hour: '11:00', visitors: 950, revenue: 2850 },
            { hour: '12:00', visitors: 820, revenue: 2460 },
            { hour: '13:00', visitors: 750, revenue: 2250 },
            { hour: '14:00', visitors: 880, revenue: 2640 },
            { hour: '15:00', visitors: 920, revenue: 2760 },
            { hour: '16:00', visitors: 850, revenue: 2550 },
            { hour: '17:00', visitors: 780, revenue: 2340 },
            { hour: '18:00', visitors: 650, revenue: 1950 },
            { hour: '19:00', visitors: 520, revenue: 1560 },
            { hour: '20:00', visitors: 480, revenue: 1440 },
            { hour: '21:00', visitors: 420, revenue: 1260 },
            { hour: '22:00', visitors: 350, revenue: 1050 },
            { hour: '23:00', visitors: 200, revenue: 600 }
          ]
        });
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, [timeRange]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? (
      <ArrowTrendingUpIcon className="w-4 h-4 text-green-400" />
    ) : (
      <ArrowTrendingDownIcon className="w-4 h-4 text-red-400" />
    );
  };

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-400' : 'text-red-400';
  };

  return (
    <>
      <SEOHead 
        title="Analytics Dashboard Pro - Business Intelligence & Data Visualization | Zion Tech Group"
        description="Comprehensive business analytics platform with real-time insights, predictive analytics, and custom reporting. Transform your data into actionable business intelligence."
        keywords="business analytics, data visualization, business intelligence, real-time analytics, predictive analytics, custom reporting, KPI dashboard"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Analytics Dashboard Pro
                  </span>
                </h1>
                <p className="text-gray-300">Real-time business intelligence and data visualization</p>
              </div>
              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
                <button
                  onClick={() => window.location.reload()}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <CurrencyDollarIcon className="w-6 h-6 text-white" />
                  </div>
                  {getChangeIcon(data.revenue.change)}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {loading ? '...' : formatCurrency(data.revenue.current)}
                </div>
                <div className="text-sm text-gray-400 mb-1">Total Revenue</div>
                <div className={`text-sm ${getChangeColor(data.revenue.change)}`}>
                  {loading ? '...' : `${data.revenue.change > 0 ? '+' : ''}${data.revenue.change}%`} vs last period
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  {getChangeIcon(data.users.change)}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {loading ? '...' : formatNumber(data.users.current)}
                </div>
                <div className="text-sm text-gray-400 mb-1">Active Users</div>
                <div className={`text-sm ${getChangeColor(data.users.change)}`}>
                  {loading ? '...' : `${data.users.change > 0 ? '+' : ''}${data.users.change}%`} vs last period
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  {getChangeIcon(data.sessions.change)}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {loading ? '...' : formatNumber(data.sessions.current)}
                </div>
                <div className="text-sm text-gray-400 mb-1">Sessions</div>
                <div className={`text-sm ${getChangeColor(data.sessions.change)}`}>
                  {loading ? '...' : `${data.sessions.change > 0 ? '+' : ''}${data.sessions.change}%`} vs last period
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <TrendingUpIcon className="w-6 h-6 text-white" />
                  </div>
                  {getChangeIcon(data.conversion.change)}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {loading ? '...' : `${data.conversion.current}%`}
                </div>
                <div className="text-sm text-gray-400 mb-1">Conversion Rate</div>
                <div className={`text-sm ${getChangeColor(data.conversion.change)}`}>
                  {loading ? '...' : `${data.conversion.change > 0 ? '+' : ''}${data.conversion.change}%`} vs last period
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hourly Traffic Chart */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-6">Hourly Traffic</h3>
                <div className="h-64 flex items-end justify-between gap-1">
                  {data.hourlyData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-500 to-cyan-500 rounded-t"
                        style={{ height: `${(item.visitors / 1000) * 200}px` }}
                      ></div>
                      <div className="text-xs text-gray-400 mt-2 transform -rotate-45 origin-left">
                        {item.hour}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Peak traffic: {Math.max(...data.hourlyData.map(d => d.visitors))} visitors at {data.hourlyData.find(d => d.visitors === Math.max(...data.hourlyData.map(d => d.visitors)))?.hour}
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  {data.trafficSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                        <span className="text-gray-300">{source.source}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-24 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 w-12 text-right">{source.percentage}%</span>
                        <span className="text-sm text-gray-400 w-16 text-right">{formatNumber(source.visitors)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Analytics */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Pages */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-6">Top Pages</h3>
                <div className="space-y-4">
                  {data.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 w-6">#{index + 1}</span>
                        <span className="text-gray-300">{page.page}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">{formatNumber(page.views)} views</span>
                        <span className={`text-sm ${page.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {page.change > 0 ? '+' : ''}{page.change}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Statistics */}
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-6">Device Statistics</h3>
                <div className="space-y-4">
                  {data.deviceStats.map((device, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                        <span className="text-gray-300">{device.device}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-24 bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 w-12 text-right">{device.percentage}%</span>
                        <span className="text-sm text-gray-400 w-16 text-right">{formatNumber(device.sessions)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Analytics Features</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUpIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
                <p className="text-gray-300">Live data updates and real-time insights to make informed decisions instantly.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">AI-powered predictions and forecasting to anticipate trends and opportunities.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Reports</h3>
                <p className="text-gray-300">Create and schedule custom reports tailored to your business needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Analytics Plan</span>
              </h2>
              <p className="text-xl text-gray-300">Powerful analytics for businesses of all sizes</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$99<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Up to 10 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Basic dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Standard reports
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$299<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Up to 50 data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Advanced dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Custom reports
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$799<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Unlimited data sources
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    White-label dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    AI-powered insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    24/7 dedicated support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transform Your Data Into Business Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and discover the power of advanced analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsDashboard;