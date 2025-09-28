import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart3, TrendingUp, Users, Eye, MousePointer, Clock, Globe, Smartphone, Monitor } from 'lucide-react';

interface AdvancedAnalyticsDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedAnalyticsDashboard: React.FC<AdvancedAnalyticsDashboardProps> = ({ isVisible, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    realTimeUsers: 0,
    userEngagement: 0
  });

  useEffect(() => {
    if (isVisible) {
      const fetchAnalytics = () => {
        setAnalyticsData({
          pageViews: Math.floor(Math.random() * 50000) + 10000,
          uniqueVisitors: Math.floor(Math.random() * 25000) + 5000,
          bounceRate: parseFloat((Math.random() * 30 + 20).toFixed(1)),
          avgSessionDuration: parseFloat((Math.random() * 5 + 2).toFixed(1)),
          conversionRate: parseFloat((Math.random() * 5 + 1).toFixed(2)),
          topPages: [
            { path: '/', views: Math.floor(Math.random() * 10000) + 5000, title: 'Home' },
            { path: '/services', views: Math.floor(Math.random() * 8000) + 3000, title: 'Services' },
            { path: '/about', views: Math.floor(Math.random() * 6000) + 2000, title: 'About' },
            { path: '/contact', views: Math.floor(Math.random() * 4000) + 1000, title: 'Contact' }
          ],
          trafficSources: [
            { source: 'Organic Search', percentage: 45, visitors: Math.floor(Math.random() * 10000) + 5000 },
            { source: 'Direct', percentage: 25, visitors: Math.floor(Math.random() * 6000) + 3000 },
            { source: 'Social Media', percentage: 15, visitors: Math.floor(Math.random() * 4000) + 2000 },
            { source: 'Referral', percentage: 10, visitors: Math.floor(Math.random() * 3000) + 1000 },
            { source: 'Email', percentage: 5, visitors: Math.floor(Math.random() * 2000) + 500 }
          ],
          deviceTypes: [
            { type: 'Desktop', percentage: 60, icon: Monitor },
            { type: 'Mobile', percentage: 35, icon: Smartphone },
            { type: 'Tablet', percentage: 5, icon: Globe }
          ],
          realTimeUsers: Math.floor(Math.random() * 50) + 10,
          userEngagement: Math.floor(Math.random() * 40) + 60
        });
      };

      fetchAnalytics();
      const interval = setInterval(fetchAnalytics, 10000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
            <MetricCard
              title="Page Views"
              value={analyticsData.pageViews.toLocaleString()}
              icon={<Eye size={20} />}
              trend="+12.5%"
              trendUp={true}
            />
            <MetricCard
              title="Unique Visitors"
              value={analyticsData.uniqueVisitors.toLocaleString()}
              icon={<Users size={20} />}
              trend="+8.3%"
              trendUp={true}
            />
            <MetricCard
              title="Bounce Rate"
              value={`${analyticsData.bounceRate}%`}
              icon={<TrendingUp size={20} />}
              trend="-2.1%"
              trendUp={false}
            />
            <MetricCard
              title="Avg Session Duration"
              value={`${analyticsData.avgSessionDuration}m`}
              icon={<Clock size={20} />}
              trend="+15.2%"
              trendUp={true}
            />
            <MetricCard
              title="Conversion Rate"
              value={`${analyticsData.conversionRate}%`}
              icon={<MousePointer size={20} />}
              trend="+3.7%"
              trendUp={true}
            />
            <MetricCard
              title="Real-time Users"
              value={analyticsData.realTimeUsers.toString()}
              icon={<Globe size={20} />}
              trend="Live"
              trendUp={true}
            />
          </div>
        );
      case 'pages':
        return (
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold mb-4">Top Pages</h3>
            <div className="space-y-3">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">{page.title}</div>
                    <div className="text-sm text-gray-400">{page.path}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{page.views.toLocaleString()} views</div>
                    <div className="text-sm text-gray-400">
                      {((page.views / analyticsData.pageViews) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'sources':
        return (
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {analyticsData.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">{source.source}</div>
                    <div className="text-sm text-gray-400">{source.visitors.toLocaleString()} visitors</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{source.percentage}%</div>
                    <div className="w-32 bg-gray-600 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'devices':
        return (
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold mb-4">Device Types</h3>
            <div className="space-y-3">
              {analyticsData.deviceTypes.map((device, index) => {
                const IconComponent = device.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <IconComponent size={24} />
                      <div>
                        <div className="font-medium">{device.type}</div>
                        <div className="text-sm text-gray-400">{device.percentage}% of traffic</div>
                      </div>
                    </div>
                    <div className="w-32 bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 'realtime':
        return (
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-medium">Active Users</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-green-400">{analyticsData.realTimeUsers}</div>
                <div className="text-sm text-gray-400">Currently online</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-medium">User Engagement</span>
                  <BarChart3 size={20} />
                </div>
                <div className="text-3xl font-bold text-blue-400">{analyticsData.userEngagement}%</div>
                <div className="text-sm text-gray-400">Engagement score</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-gray-800 rounded-lg shadow-xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Advanced Analytics Dashboard</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close dashboard"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex border-b border-gray-700 overflow-x-auto">
              <TabButton icon={<BarChart3 size={18} />} label="Overview" isActive={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
              <TabButton icon={<Eye size={18} />} label="Pages" isActive={activeTab === 'pages'} onClick={() => setActiveTab('pages')} />
              <TabButton icon={<Globe size={18} />} label="Sources" isActive={activeTab === 'sources'} onClick={() => setActiveTab('sources')} />
              <TabButton icon={<Monitor size={18} />} label="Devices" isActive={activeTab === 'devices'} onClick={() => setActiveTab('devices')} />
              <TabButton icon={<TrendingUp size={18} />} label="Real-time" isActive={activeTab === 'realtime'} onClick={() => setActiveTab('realtime')} />
            </div>
            <div className="flex-grow overflow-y-auto text-white">
              {renderContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
      isActive ? 'bg-gray-700 text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white hover:bg-gray-700'
    } transition-colors duration-200 whitespace-nowrap`}
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
  >
    {icon}
    <span>{label}</span>
  </button>
);

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  trendUp: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, trend, trendUp }) => (
  <div className="bg-gray-700 p-4 rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-400">{title}</span>
      {icon}
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className={`text-sm ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
      {trend}
    </div>
  </div>
);

export default AdvancedAnalyticsDashboard;