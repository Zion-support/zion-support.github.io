import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnalyticsData {
pageViews: number;
uniqueVisitors: number;
bounceRate: number;
avgSessionDuration: number;
conversionRate: number;,
topPages: Array<{ page: string; views: number }>;
trafficSources: Array<{ source: string; percentage: number }>;
}

export const AdvancedAnalytics: React.FC = () => {
const [data, setData] = useState<AnalyticsData>({
pageViews: 45672,
uniqueVisitors: 12345,
bounceRate: 32.5,
avgSessionDuration: 245,
conversionRate: 4.2,
topPages: [
{ page: '/dashboard', views: 1234 },
{ page: '/services', views: 987 },
{ page: '/contact', views: 654 },
{ page: '/about', views: 432 }
],
trafficSources: [
{ source: 'Organic Search', percentage: 45 },
{ source: 'Direct', percentage: 25 },
{ source: 'Social Media', percentage: 15 },
{ source: 'Referral', percentage: 10 },
{ source: 'Email', percentage: 5 };
];
});

const [timeRange, setTimeRange] = useState('7d');
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
// Simulate data loading;
setIsLoading(true);
setTimeout(() => setIsLoading(false), 1000);
}, [timeRange]);

const formatNumber: any = (num: number) => {;
return new Intl.NumberFormat().format(num);
};

const formatDuration: any = (seconds: number) => {;
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
return `${minutes}m ${remainingSeconds}s`;
};

if (isLoading) {
return (
<div className="p-6 bg-gray-900 min-h-screen flex items-center justify-center">;
<div className="text-white text-xl">Loading analytics...</div>;
</div>;
);
}

return (
<div className="p-6 bg-gray-900 min-h-screen">;
<motion.div;
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="max-w-7xl mx-auto"
>;
<div className="flex justify-between items-center mb-8">;
<h1 className="text-3xl font-bold text-white">Advanced Analytics</h1>;
<select;
value={timeRange}
onChange={(e) => setTimeRange(e.target.value)}
className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
>;
<option value="24h">Last 24 hours</option>;
<option value="7d">Last 7 days</option>;
<option value="30d">Last 30 days</option>;
<option value="90d">Last 90 days</option>;
</select>;
</div>;

{/* Key Metrics */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">;
{[
{ label: 'Page Views', value: formatNumber(data.pageViews), icon: '👁️', color: 'blue' },
{ label: 'Unique Visitors', value: formatNumber(data.uniqueVisitors), icon: '👥', color: 'green' },
{ label: 'Bounce Rate', value: `${data.bounceRate}%`, icon: '📈', color: 'yellow' },
{ label: 'Avg Session', value: formatDuration(data.avgSessionDuration), icon: '⏱️', color: 'purple' },
{ label: 'Conversion Rate', value: `${data.conversionRate}%`, icon: '🎯', color: 'red' }
].map((metric, index) => (
<motion.div;
key={metric.label}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
className={`bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-${metric.color}-500 transition-colors`}
>;
<div className="flex items-center justify-between mb-4">;
<div className="text-3xl">{metric.icon}</div>;
<div className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value}</div>;
</div>;
<h3 className="text-lg font-semibold text-white">{metric.label}</h3>;
</motion.div>;
))}
</div>;

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
{/* Top Pages */}
<motion.div;
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
className="bg-gray-800 p-6 rounded-lg border border-gray-700"
>;
<h3 className="text-xl font-semibold text-white mb-6">Top Pages</h3>;
<div className="space-y-4">;
{data.topPages.map((page, index) => (
<div key={page.page} className="flex items-center justify-between">;
<div className="flex items-center space-x-3">;
<div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-bold">;
{index + 1}
</div>;
<span className="text-white">{page.page}</span>;
</div>;
<div className="text-gray-400">{formatNumber(page.views)} views</div>;
</div>;
))}
</div>;
</motion.div>;

{/* Traffic Sources */}
<motion.div;
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
className="bg-gray-800 p-6 rounded-lg border border-gray-700"
>;
<h3 className="text-xl font-semibold text-white mb-6">Traffic Sources</h3>;
<div className="space-y-4">;
{data.trafficSources.map((source, index) => (
<div key={source.source}>;
<div className="flex justify-between items-center mb-2">;
<span className="text-white">{source.source}</span>;
<span className="text-gray-400">{source.percentage}%</span>;
</div>;
<div className="w-full bg-gray-700 rounded-full h-2">;
<motion.div;
initial={{ width: 0 }}
animate={{ width: `${source.percentage}%` }}
transition={{ delay: index * 0.1, duration: 0.8 }}
className="bg-blue-500 h-2 rounded-full"
/>;
</div>;
</div>;
))}
</div>;
</motion.div>;
</div>;

{/* Real-time Activity */}
<motion.div;
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700"
>;
<h3 className="text-xl font-semibold text-white mb-6">Real-time Activity</h3>;
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
<div className="text-center">;
<div className="text-3xl font-bold text-green-400 mb-2">23</div>;
<div className="text-gray-400">Active Users</div>;
</div>;
<div className="text-center">;
<div className="text-3xl font-bold text-blue-400 mb-2">156</div>;
<div className="text-gray-400">Page Views (1h)</div>;
</div>;
<div className="text-center">;
<div className="text-3xl font-bold text-purple-400 mb-2">8</div>;
<div className="text-gray-400">Conversions (1h)</div>;
</div>;
</div>;
</motion.div>;
</motion.div>;
</div>;
);
};

export default AdvancedAnalytics;
<//div><///div>;