import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DashboardMetric {
  id: string, title: string, value: string, change: string, trend: "up" | "down" | "stable";
  icon: string, color: string,
}

interface ChartData {
  labels: string[], datasets: Array<{
    label: string, data: number[], borderColor: string, backgroundColor: string, tension: number,
  }>;
}

export const AdvancedDashboardV2: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([
    {
      id: "1",
      title: "Total Revenue",
      value: "$2,847,392",
      change: "+12.5%",
      trend: "up",
      icon: "💰",
      color: "green"
    },
    {
      id: "2",
      title: "Active Users",
      value: "45,672",
      change: "+8.3%",
      trend: "up",
      icon: "👥",
      color: "blue"
    },
    {
      id: "3",
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      trend: "down",
      icon: "📈",
      color: "red"
    },
    {
      id: "4",
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      icon: "⭐",
      color: "yellow"
    },
    {
      id: "5",
      title: "System Uptime",
      value: "99.9%",
      change: "stable",
      trend: "stable",
      icon: "⚡",
      color: "purple"
    },
    {
      id: "6",
      title: "API Response Time",
      value: "145ms",
      change: "-12ms",
      trend: "up",
      icon: "🚀",
      color: "indigo"
    }
  ]);

  const [chartData, setChartData] = useState<ChartData>({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [120000, 190000, 300000, 500000, 200000, 300000],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        tension: 0.4,
      },
      {
        label: "Users",
        data: [10000, 15000, 25000, 35000, 40000, 45000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
      }
    ]
  });

  const [timeRange, setTimeRange] = useState("6m");
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "↗️";
      case "down": return "↘️";
      default: return "➡️",
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-green-400";
      case "down": return "text-red-400";
      default: return "text-gray-400",
    }
  };

  const getMetricColor = (color: string) => {
    switch (color) {
      case "green": return "from-green-500 to-emerald-600";
      case "blue": return "from-blue-500 to-cyan-600";
      case "red": return "from-red-500 to-rose-600";
      case "yellow": return "from-yellow-500 to-amber-600";
      case "purple": return "from-purple-500 to-violet-600";
      case "indigo": return "from-indigo-500 to-blue-600";
      default: return "from-gray-500 to-slate-600",
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div;
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Advanced Dashboard v2</h1>
            <p className="text-gray-400">Comprehensive analytics and monitoring dashboard</p>
          </div>
          <div className="flex space-x-4">
            <select,
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="6m">Last 6 months</option>
              <option value="1y">Last year</option>
            </select>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Report;
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div,
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${getMetricColor(metric.color)} p-6 cursor-pointer hover:scale-105 transition-transform`}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <div className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {getTrendIcon(metric.trend)} {metric.change}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white/80 mb-1">{metric.title}</h3>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </div>
              {selectedMetric === metric.id && (
                <motion.div;
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 pt-4 border-t border-white/20"
                >
                  <div className="text-xs text-white/60">
                    <p>Detailed metrics and trends for {metric.title.toLowerCase()}</p>
                    <p className="mt-1">Click to expand further details...</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <motion.div;
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Revenue & User Growth</h3>
            <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p>Interactive Chart Component</p>
                <p className="text-sm">(Chart.js or Recharts integration)</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm text-gray-400">
              <span>Revenue: $2.8M</span>
              <span>Users: 45.6K</span>
              <span>Growth: +12.5%</span>
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div;
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6">System Performance</h3>
            <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <p>Performance Metrics</p>
                <p className="text-sm">Real-time monitoring dashboard</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-400 font-semibold">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">145ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Activity Feed */}
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "New user registration", user: "john.doe@example.com", time: "2 minutes ago", type: "success" },
              { action: "Payment processed", user: "$2,450.00", time: "5 minutes ago", type: "info" },
              { action: "System backup completed", user: "Database", time: "15 minutes ago", type: "success" },
              { action: "API rate limit warning", user: "Endpoint: /api/users", time: "1 hour ago", type: "warning" },
              { action: "New feature deployed", user: "Dashboard v2.1", time: "2 hours ago", type: "info" }
            ].map((activity, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === "success" ? "bg-green-400" :
                  activity.type === "warning" ? "bg-yellow-400" : "bg-blue-400"
                }`} />
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.user}</p>
                </div>
                <div className="text-gray-400 text-sm">{activity.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdvancedDashboardV2;
