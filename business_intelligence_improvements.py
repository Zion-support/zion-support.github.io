#!/usr/bin/env python3

import os
import subprocess

def run_command(command, cwd=None):
    """Run a command and return success status"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True, 
            cwd=cwd,
            timeout=60
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def create_business_intelligence_dashboard():
    """Create a comprehensive business intelligence dashboard"""
    
    print("📊 Creating Business Intelligence Dashboard...")
    
    content = '''import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BusinessMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  category: 'revenue' | 'growth' | 'efficiency' | 'customer';
  icon: string;
  color: string;
}

interface KPIData {
  metric: string;
  current: number;
  target: number;
  progress: number;
  status: 'on-track' | 'at-risk' | 'behind';
}

interface RevenueData {
  month: string;
  revenue: number;
  growth: number;
  profit: number;
}

interface CustomerInsight {
  segment: string;
  count: number;
  revenue: number;
  growth: number;
  satisfaction: number;
}

export const BusinessIntelligenceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessMetric[]>([
    {
      id: '1',
      title: 'Total Revenue',
      value: '$12.4M',
      change: '+18.5%',
      trend: 'up',
      category: 'revenue',
      icon: '💰',
      color: 'green'
    },
    {
      id: '2',
      title: 'Customer Growth',
      value: '24,567',
      change: '+12.3%',
      trend: 'up',
      category: 'growth',
      icon: '👥',
      color: 'blue'
    },
    {
      id: '3',
      title: 'Operational Efficiency',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      category: 'efficiency',
      icon: '⚡',
      color: 'purple'
    },
    {
      id: '4',
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.3',
      trend: 'up',
      category: 'customer',
      icon: '⭐',
      color: 'yellow'
    },
    {
      id: '5',
      title: 'Market Share',
      value: '15.7%',
      change: '+3.2%',
      trend: 'up',
      category: 'growth',
      icon: '📈',
      color: 'indigo'
    },
    {
      id: '6',
      title: 'Cost Reduction',
      value: '$2.1M',
      change: '-8.5%',
      trend: 'up',
      category: 'efficiency',
      icon: '💸',
      color: 'red'
    }
  ]);

  const [kpis, setKpis] = useState<KPIData[]>([
    {
      metric: 'Monthly Revenue Target',
      current: 1250000,
      target: 1500000,
      progress: 83,
      status: 'on-track'
    },
    {
      metric: 'Customer Acquisition',
      current: 2456,
      target: 3000,
      progress: 82,
      status: 'on-track'
    },
    {
      metric: 'Product Launch',
      current: 3,
      target: 5,
      progress: 60,
      status: 'at-risk'
    },
    {
      metric: 'Employee Satisfaction',
      current: 4.2,
      target: 4.5,
      progress: 93,
      status: 'on-track'
    }
  ]);

  const [revenueData, setRevenueData] = useState<RevenueData[]>([
    { month: 'Jan', revenue: 950000, growth: 8.2, profit: 285000 },
    { month: 'Feb', revenue: 1100000, growth: 15.8, profit: 330000 },
    { month: 'Mar', revenue: 1200000, growth: 9.1, profit: 360000 },
    { month: 'Apr', revenue: 1150000, growth: -4.2, profit: 345000 },
    { month: 'May', revenue: 1300000, growth: 13.0, profit: 390000 },
    { month: 'Jun', revenue: 1240000, growth: -4.6, profit: 372000 }
  ]);

  const [customerInsights, setCustomerInsights] = useState<CustomerInsight[]>([
    {
      segment: 'Enterprise',
      count: 245,
      revenue: 8500000,
      growth: 15.2,
      satisfaction: 4.9
    },
    {
      segment: 'Mid-Market',
      count: 1245,
      revenue: 2800000,
      growth: 22.1,
      satisfaction: 4.6
    },
    {
      segment: 'SMB',
      count: 8900,
      revenue: 1100000,
      growth: 8.7,
      satisfaction: 4.3
    }
  ]);

  const [selectedTimeframe, setSelectedTimeframe] = useState('6m');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'revenue': return 'from-green-500 to-emerald-600';
      case 'growth': return 'from-blue-500 to-cyan-600';
      case 'efficiency': return 'from-purple-500 to-violet-600';
      case 'customer': return 'from-yellow-500 to-amber-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-green-400 bg-green-900';
      case 'at-risk': return 'text-yellow-400 bg-yellow-900';
      case 'behind': return 'text-red-400 bg-red-900';
      default: return 'text-gray-400 bg-gray-900';
    }
  };

  const filteredMetrics = selectedCategory === 'all' 
    ? metrics 
    : metrics.filter(metric => metric.category === selectedCategory);

  const categories = ['all', 'revenue', 'growth', 'efficiency', 'customer'];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Business Intelligence Dashboard</h1>
            <p className="text-gray-400">Comprehensive business analytics and performance insights</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last Year</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {filteredMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${getCategoryColor(metric.category)} p-6`}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* KPI Tracking */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">KPI Progress Tracking</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.metric}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">{kpi.metric}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(kpi.status)}`}>
                    {kpi.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Current: {typeof kpi.current === 'number' && kpi.current > 1000000 
                      ? `$${(kpi.current / 1000000).toFixed(1)}M` 
                      : kpi.current}</span>
                    <span>Target: {typeof kpi.target === 'number' && kpi.target > 1000000 
                      ? `$${(kpi.target / 1000000).toFixed(1)}M` 
                      : kpi.target}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        kpi.progress >= 80 ? 'bg-green-500' :
                        kpi.progress >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${kpi.progress}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-1">{kpi.progress}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Analysis */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Revenue Analysis</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p>Revenue Trend Chart</p>
                <p className="text-sm">Interactive revenue and growth visualization</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-green-400 font-semibold">$12.4M</div>
                <div className="text-gray-400">Total Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">+18.5%</div>
                <div className="text-gray-400">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold">$3.7M</div>
                <div className="text-gray-400">Net Profit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Insights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Customer Segment Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerInsights.map((insight, index) => (
              <motion.div
                key={insight.segment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{insight.segment}</h3>
                  <div className="text-2xl">👥</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Customers</span>
                    <span className="text-white font-semibold">{insight.count.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue</span>
                    <span className="text-green-400 font-semibold">
                      ${(insight.revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Growth</span>
                    <span className="text-blue-400 font-semibold">+{insight.growth}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Satisfaction</span>
                    <span className="text-yellow-400 font-semibold">{insight.satisfaction}/5</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Strategic Insights & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Opportunities</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Mid-market segment showing 22.1% growth - focus expansion</li>
                <li>• Operational efficiency at 94.2% - optimize further</li>
                <li>• Cost reduction of $2.1M - continue initiatives</li>
                <li>• Customer satisfaction high at 4.8/5 - leverage for referrals</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-3">⚠️ Areas of Attention</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Product launch KPI at 60% - needs acceleration</li>
                <li>• SMB segment growth slowing to 8.7%</li>
                <li>• April revenue dip of -4.2% - investigate causes</li>
                <li>• Employee satisfaction below target at 4.2/4.5</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessIntelligenceDashboard;
'''
    
    with open('/workspace/src/components/BusinessIntelligenceDashboard.tsx', 'w') as f:
        f.write(content)
    
    print("✅ Created Business Intelligence Dashboard")

def create_enterprise_analytics_suite():
    """Create an enterprise analytics suite"""
    
    print("🏢 Creating Enterprise Analytics Suite...")
    
    content = '''import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EnterpriseMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  department: 'sales' | 'marketing' | 'operations' | 'finance' | 'hr';
  priority: 'high' | 'medium' | 'low';
  icon: string;
}

interface DepartmentPerformance {
  department: string;
  revenue: number;
  growth: number;
  efficiency: number;
  satisfaction: number;
  color: string;
}

interface ProjectStatus {
  name: string;
  progress: number;
  status: 'on-track' | 'delayed' | 'at-risk' | 'completed';
  team: string;
  deadline: string;
}

export const EnterpriseAnalyticsSuite: React.FC = () => {
  const [metrics, setMetrics] = useState<EnterpriseMetric[]>([
    {
      id: '1',
      title: 'Enterprise Revenue',
      value: '$45.2M',
      change: '+23.1%',
      trend: 'up',
      department: 'sales',
      priority: 'high',
      icon: '💰'
    },
    {
      id: '2',
      title: 'Lead Generation',
      value: '12,847',
      change: '+18.7%',
      trend: 'up',
      department: 'marketing',
      priority: 'high',
      icon: '🎯'
    },
    {
      id: '3',
      title: 'Operational Efficiency',
      value: '96.8%',
      change: '+1.2%',
      trend: 'up',
      department: 'operations',
      priority: 'medium',
      icon: '⚙️'
    },
    {
      id: '4',
      title: 'Profit Margin',
      value: '34.2%',
      change: '+2.8%',
      trend: 'up',
      department: 'finance',
      priority: 'high',
      icon: '📊'
    },
    {
      id: '5',
      title: 'Employee Retention',
      value: '94.5%',
      change: '+0.8%',
      trend: 'up',
      department: 'hr',
      priority: 'medium',
      icon: '👥'
    },
    {
      id: '6',
      title: 'Customer Acquisition Cost',
      value: '$245',
      change: '-12.3%',
      trend: 'up',
      department: 'marketing',
      priority: 'high',
      icon: '💸'
    }
  ]);

  const [departmentPerformance, setDepartmentPerformance] = useState<DepartmentPerformance[]>([
    {
      department: 'Sales',
      revenue: 45200000,
      growth: 23.1,
      efficiency: 94.2,
      satisfaction: 4.7,
      color: 'blue'
    },
    {
      department: 'Marketing',
      revenue: 8500000,
      growth: 18.7,
      efficiency: 91.8,
      satisfaction: 4.5,
      color: 'green'
    },
    {
      department: 'Operations',
      revenue: 3200000,
      growth: 15.3,
      efficiency: 96.8,
      satisfaction: 4.8,
      color: 'purple'
    },
    {
      department: 'Finance',
      revenue: 1200000,
      growth: 12.9,
      efficiency: 98.1,
      satisfaction: 4.6,
      color: 'yellow'
    },
    {
      department: 'HR',
      revenue: 800000,
      growth: 8.4,
      efficiency: 89.5,
      satisfaction: 4.4,
      color: 'indigo'
    }
  ]);

  const [projectStatus, setProjectStatus] = useState<ProjectStatus[]>([
    {
      name: 'Digital Transformation Initiative',
      progress: 78,
      status: 'on-track',
      team: 'Engineering',
      deadline: '2024-03-15'
    },
    {
      name: 'Customer Experience Platform',
      progress: 92,
      status: 'on-track',
      team: 'Product',
      deadline: '2024-02-28'
    },
    {
      name: 'AI Integration Project',
      progress: 45,
      status: 'at-risk',
      team: 'Data Science',
      deadline: '2024-04-30'
    },
    {
      name: 'Security Infrastructure Upgrade',
      progress: 100,
      status: 'completed',
      team: 'Security',
      deadline: '2024-01-15'
    },
    {
      name: 'Mobile App Redesign',
      progress: 65,
      status: 'delayed',
      team: 'Design',
      deadline: '2024-03-01'
    }
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '➡️';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'sales': return 'from-blue-500 to-cyan-600';
      case 'marketing': return 'from-green-500 to-emerald-600';
      case 'operations': return 'from-purple-500 to-violet-600';
      case 'finance': return 'from-yellow-500 to-amber-600';
      case 'hr': return 'from-indigo-500 to-blue-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900';
      case 'medium': return 'text-yellow-400 bg-yellow-900';
      case 'low': return 'text-green-400 bg-green-900';
      default: return 'text-gray-400 bg-gray-900';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-green-400 bg-green-900';
      case 'completed': return 'text-blue-400 bg-blue-900';
      case 'at-risk': return 'text-yellow-400 bg-yellow-900';
      case 'delayed': return 'text-red-400 bg-red-900';
      default: return 'text-gray-400 bg-gray-900';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    if (progress >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const filteredMetrics = metrics.filter(metric => {
    const departmentMatch = selectedDepartment === 'all' || metric.department === selectedDepartment;
    const priorityMatch = selectedPriority === 'all' || metric.priority === selectedPriority;
    return departmentMatch && priorityMatch;
  });

  const departments = ['all', 'sales', 'marketing', 'operations', 'finance', 'hr'];
  const priorities = ['all', 'high', 'medium', 'low'];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Enterprise Analytics Suite</h1>
            <p className="text-gray-400">Comprehensive enterprise performance and project management</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept.charAt(0).toUpperCase() + dept.slice(1)}
                </option>
              ))}
            </select>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
            >
              {priorities.map(priority => (
                <option key={priority} value={priority}>
                  {priority === 'all' ? 'All Priorities' : priority.charAt(0).toUpperCase() + priority.slice(1)}
                </option>
              ))}
            </select>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Generate Report
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Enterprise KPIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMetrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${getDepartmentColor(metric.department)} p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{metric.icon}</div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(metric.priority)}`}>
                      {metric.priority}
                    </span>
                    <div className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                      {getTrendIcon(metric.trend)} {metric.change}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white/80 mb-1">{metric.title}</h3>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Department Performance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Department Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {departmentPerformance.map((dept, index) => (
              <motion.div
                key={dept.department}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{dept.department}</h3>
                  <div className={`w-4 h-4 rounded-full bg-${dept.color}-500`} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Revenue</span>
                    <span className="text-green-400 font-semibold">
                      ${(dept.revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Growth</span>
                    <span className="text-blue-400 font-semibold">+{dept.growth}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-purple-400 font-semibold">{dept.efficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Satisfaction</span>
                    <span className="text-yellow-400 font-semibold">{dept.satisfaction}/5</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Project Status Overview</h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="space-y-4">
              {projectStatus.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                      <span className="text-gray-400 text-sm">{project.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Team: {project.team}</span>
                    <span className="text-white font-semibold">{project.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Executive Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-green-400 font-semibold text-2xl">+23.1%</div>
              <div className="text-gray-400">Overall Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-blue-400 font-semibold text-2xl">94.2%</div>
              <div className="text-gray-400">Efficiency Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-purple-400 font-semibold text-2xl">4.6/5</div>
              <div className="text-gray-400">Satisfaction Score</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnterpriseAnalyticsSuite;
'''
    
    with open('/workspace/src/components/EnterpriseAnalyticsSuite.tsx', 'w') as f:
        f.write(content)
    
    print("✅ Created Enterprise Analytics Suite")

def update_app_with_business_components():
    """Update App.tsx to include business intelligence components"""
    
    print("🔄 Updating App.tsx with business intelligence components...")
    
    try:
        with open('/workspace/src/App.tsx', 'r') as f:
            app_content = f.read()
        
        # Add new imports
        new_imports = """
import BusinessIntelligenceDashboard from './components/BusinessIntelligenceDashboard';
import EnterpriseAnalyticsSuite from './components/EnterpriseAnalyticsSuite';
"""
        
        # Add new routes
        new_routes = """
              <Route path="/business-intelligence" element={<BusinessIntelligenceDashboard />} />
              <Route path="/enterprise-analytics" element={<EnterpriseAnalyticsSuite />} />
"""
        
        # Update the file
        if 'BusinessIntelligenceDashboard' not in app_content:
            app_content = app_content.replace(
                "import AIPoweredAnalytics from './components/AIPoweredAnalytics';",
                "import AIPoweredAnalytics from './components/AIPoweredAnalytics';\n" + new_imports
            )
            
            app_content = app_content.replace(
                "              <Route path='/ai-analytics' element={<AIPoweredAnalytics />} />",
                "              <Route path='/ai-analytics' element={<AIPoweredAnalytics />} />" + new_routes
            )
        
        with open('/workspace/src/App.tsx', 'w') as f:
            f.write(app_content)
        
        print("✅ Updated App.tsx with business intelligence components")
        
    except Exception as e:
        print(f"❌ Error updating App.tsx: {e}")

def main():
    """Main function to create business intelligence improvements"""
    
    print("🚀 Creating business intelligence improvements...")
    
    try:
        create_business_intelligence_dashboard()
        create_enterprise_analytics_suite()
        update_app_with_business_components()
        
        print("\n🎉 Business intelligence improvements completed!")
        print("✅ Business Intelligence Dashboard with KPIs and metrics")
        print("✅ Enterprise Analytics Suite with department performance")
        print("✅ Updated App.tsx with new business routes")
        
        # Test build
        print("\n🔨 Testing build...")
        success, stdout, stderr = run_command("npm run build")
        if success:
            print("✅ Build successful!")
        else:
            print(f"⚠️  Build issues: {stderr}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()