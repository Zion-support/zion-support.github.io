import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES_2030 } from '../data/comprehensiveServices2030';

interface DashboardMetrics {
  totalServices: number;
  totalRevenue: number;
  avgRating: number;
  activeProjects: number;
  completionRate: number;
  clientSatisfaction: number;
}

interface ChartData {
  month: string;
  revenue: number;
  projects: number;
}

const InteractiveDashboard: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardMetrics, setDashboardMetrics] = useState<DashboardMetrics>({
    totalServices: 0,
    totalRevenue: 0,
    avgRating: 0,
    activeProjects: 0,
    completionRate: 0,
    clientSatisfaction: 0
  });

  // Simulate loading and data fetching
  useEffect(() => {
    const loadDashboardData = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Calculate metrics from services data
      const totalServices = COMPREHENSIVE_SERVICES_2030.length;
      const totalRevenue = COMPREHENSIVE_SERVICES_2030.reduce((sum, service) => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        return sum + price;
      }, 0);
      
      const avgRating = COMPREHENSIVE_SERVICES_2030.reduce((sum, service) => sum + service.rating, 0) / totalServices;
      
      setDashboardMetrics({
        totalServices,
        totalRevenue: totalRevenue * 1000, // Convert to thousands
        avgRating: Math.round(avgRating * 10) / 10,
        activeProjects: Math.floor(Math.random() * 50) + 20,
        completionRate: Math.floor(Math.random() * 20) + 80,
        clientSatisfaction: Math.floor(Math.random() * 15) + 85
      });
      
      setIsLoading(false);
    };

    loadDashboardData();
  }, []);

  // Generate chart data based on timeframe
  const chartData: ChartData[] = useMemo(() => {
    const months = selectedTimeframe === '6months' 
      ? ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return months.map((month, index) => ({
      month,
      revenue: Math.floor(Math.random() * 500000) + 100000,
      projects: Math.floor(Math.random() * 20) + 5
    }));
  }, [selectedTimeframe]);

  const metrics = [
    {
      title: 'Total Services',
      value: dashboardMetrics.totalServices,
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Revenue',
      value: `$${(dashboardMetrics.totalRevenue / 1000000).toFixed(1)}M`,
      icon: '💰',
      color: 'from-green-500 to-emerald-500',
      change: '+18%',
      changeType: 'positive'
    },
    {
      title: 'Average Rating',
      value: dashboardMetrics.avgRating,
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500',
      change: '+0.2',
      changeType: 'positive'
    },
    {
      title: 'Active Projects',
      value: dashboardMetrics.activeProjects,
      icon: '📋',
      color: 'from-purple-500 to-pink-500',
      change: '+5',
      changeType: 'positive'
    },
    {
      title: 'Completion Rate',
      value: `${dashboardMetrics.completionRate}%`,
      icon: '✅',
      color: 'from-indigo-500 to-purple-500',
      change: '+3%',
      changeType: 'positive'
    },
    {
      title: 'Client Satisfaction',
      value: `${dashboardMetrics.clientSatisfaction}%`,
      icon: '😊',
      color: 'from-teal-500 to-blue-500',
      change: '+7%',
      changeType: 'positive'
    }
  ];

  const topServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES_2030
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Loading Dashboard</h2>
          <p className="text-gray-400">Analyzing performance metrics...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Performance Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Real-time insights into your business performance and growth metrics
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-4">
          <div className="flex gap-2">
            {['6months', '1year'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTimeframe === timeframe
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {timeframe === '6months' ? '6 Months' : '1 Year'}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            {['revenue', 'projects'].map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedMetric === metric
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {metric === 'revenue' ? 'Revenue' : 'Projects'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{metric.icon}</div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  metric.changeType === 'positive' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                }`}>
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {metric.value}
              </h3>
              <p className="text-gray-400 text-sm">{metric.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue/Projects Chart */}
          <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-white">
              {selectedMetric === 'revenue' ? 'Revenue Trends' : 'Project Count'}
            </h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {chartData.map((data, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`w-8 rounded-t transition-all duration-300 hover:opacity-80 ${
                      selectedMetric === 'revenue'
                        ? 'bg-gradient-to-t from-green-500 to-emerald-400'
                        : 'bg-gradient-to-t from-blue-500 to-cyan-400'
                    }`}
                    style={{
                      height: `${(selectedMetric === 'revenue' ? data.revenue : data.projects * 10000) / Math.max(...chartData.map(d => selectedMetric === 'revenue' ? d.revenue : d.projects * 10000)) * 200}px`
                    }}
                  />
                  <span className="text-xs text-gray-400 mt-2">{data.month}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Services */}
          <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-6 text-white">Top Rated Services</h3>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">★ {service.rating}</div>
                    <div className="text-gray-400 text-sm">{service.reviewCount} reviews</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 text-white">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New project started', project: 'AI Chatbot Platform', time: '2 hours ago', type: 'success' },
              { action: 'Client meeting completed', project: 'Quantum Security Review', time: '4 hours ago', type: 'info' },
              { action: 'Project milestone reached', project: 'Space Analytics Dashboard', time: '6 hours ago', type: 'success' },
              { action: 'Payment received', project: 'Blockchain Integration', time: '1 day ago', type: 'success' },
              { action: 'New client onboarded', project: 'Cybersecurity Audit', time: '2 days ago', type: 'info' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center p-3 bg-gray-700/30 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-3 h-3 rounded-full mr-4 ${
                  activity.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div className="flex-1">
                  <p className="text-white">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.project}</p>
                </div>
                <span className="text-gray-400 text-sm">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveDashboard;