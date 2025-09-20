import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface AnalyticsData {
  
pageViews: number;
uniqueVisitors: number;
bounceRate: number;,
avgSessionDuration: number;,
conversionRate: number;
}
}
topPages: Array<{ page: string; views: number }>;
trafficSources: Array<{ source: string; percentage: number }>;
<option value="24h">Last 24 hours</option>;
<option value="7d">Last 7 days</option>;
<option value="30d">Last 30 days</option>;
<option value="90d">Last 90 days</option>;
</select>;
<div className="flex items-center justify-between mb-4">;
<div className="text-3xl">{metric.icon}</div>;
<div className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value}</div>;
</div>;
<h3 className="text-lg font-semibold text-white">{metric.label}</h3>;
</motion.div>;
<div key={source.source}>;
<div className="flex justify-between items-center mb-2">;
<span className="text-white">{source.source}</span>;
<span className="text-gray-400">{source.percentage}%</span>;
</div>;
<div className="w-full bg-gray-700 rounded-full h-2">;
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
