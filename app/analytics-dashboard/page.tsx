import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ChartBarIcon, TrendingUpIcon, EyeIcon, UsersIcon, ClockIcon, DollarSignIcon } from '@heroicons/react/24/outline';

const AnalyticsDashboardPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  const metrics = [
    { name: 'Total Revenue', value: '$2,847,392', change: '+12.5%', changeType: 'positive' },
    { name: 'Active Users', value: '45,678', change: '+8.2%', changeType: 'positive' },
    { name: 'Conversion Rate', value: '3.24%', change: '+0.5%', changeType: 'positive' },
    { name: 'Page Views', value: '1,234,567', change: '-2.1%', changeType: 'negative' },
  ];

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setIsLoading(true);
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <SEOHead 
        title="Business Analytics Pro - Zion Tech Group"
        description="Comprehensive business intelligence and analytics platform with real-time insights and reporting. Make data-driven decisions with confidence."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Business Analytics Pro
                </h1>
                <p className="text-gray-300">Real-time insights and comprehensive reporting</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <select
                  value={selectedPeriod}
                  onChange={(e) => handlePeriodChange(e.target.value)}
                  className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{metric.name}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                    <div className={`text-sm font-semibold ${
                      metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUpIcon className="w-6 h-6 mr-3 text-purple-400" />
                  Revenue Trend
                </h3>
                <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ChartBarIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">Interactive chart would be here</p>
                    <p className="text-sm text-gray-500">Revenue data for {selectedPeriod}</p>
                  </div>
                </div>
              </div>

              {/* User Activity Chart */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <UsersIcon className="w-6 h-6 mr-3 text-purple-400" />
                  User Activity
                </h3>
                <div className="h-64 bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <UsersIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400">User activity chart would be here</p>
                    <p className="text-sm text-gray-500">Active users over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Analytics */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Top Pages */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <EyeIcon className="w-6 h-6 mr-3 text-purple-400" />
                  Top Pages
                </h3>
                <div className="space-y-3">
                  {['Home', 'Services', 'About', 'Contact', 'Blog'].map((page, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{page}</span>
                      <span className="text-sm text-gray-400">{Math.floor(Math.random() * 10000).toLocaleString()} views</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion Funnel */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <DollarSignIcon className="w-6 h-6 mr-3 text-purple-400" />
                  Conversion Funnel
                </h3>
                <div className="space-y-3">
                  {[
                    { step: 'Visitors', count: '100,000', percentage: '100%' },
                    { step: 'Leads', count: '5,000', percentage: '5%' },
                    { step: 'Opportunities', count: '500', percentage: '1%' },
                    { step: 'Customers', count: '50', percentage: '0.1%' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{item.step}</span>
                      <div className="text-right">
                        <span className="text-sm text-gray-400">{item.count}</span>
                        <span className="text-xs text-gray-500 ml-2">({item.percentage})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-time Stats */}
              <div className="bg-slate-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ClockIcon className="w-6 h-6 mr-3 text-purple-400" />
                  Real-time Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Online Now</span>
                    <span className="text-green-400 font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Page Views Today</span>
                    <span className="text-blue-400 font-semibold">45,678</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">New Visitors</span>
                    <span className="text-purple-400 font-semibold">2,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bounce Rate</span>
                    <span className="text-orange-400 font-semibold">32.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how our analytics can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;
