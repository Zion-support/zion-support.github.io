import React, { useState, useEffect } from 'react',
import { motion } from 'framer-motion',
interface EnterpriseMetric {
  id: string,
  title: string,
  value: string,
  change: string,
  trend: 'up' | 'down' | 'stable',
  department: 'sales' | 'marketing' | 'operations' | 'finance' | 'hr',
  priority: 'high' | 'medium' | 'low',
  icon: string}

interface DepartmentPerformance {
  department: string,
  revenue: number,
  growth: number,
  efficiency: number,
  satisfaction: number,
  color: string}

interface ProjectStatus {
  name: string,
  progress: number,
  status: 'on-track' | 'delayed' | 'at-risk' | 'completed',
  team: string,
  deadline: string}

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
  ]),
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
  ]),
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
  ]),
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️',
      case 'down': return '↘️';
      default: return '➡️'}
  };
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400',
      case 'down': return 'text-red-400';
      default: return 'text-gray-400'}
  };
  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'sales': return 'from-blue-500 to-cyan-600',
      case 'marketing': return 'from-green-500 to-emerald-600';
      case 'operations': return 'from-purple-500 to-violet-600';
      case 'finance': return 'from-yellow-500 to-amber-600';
      case 'hr': return 'from-indigo-500 to-blue-600';
      default: return 'from-gray-500 to-slate-600'}
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900',
      case 'medium': return 'text-yellow-400 bg-yellow-900';
      case 'low': return 'text-green-400 bg-green-900';
      default: return 'text-gray-400 bg-gray-900'}
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-green-400 bg-green-900',
      case 'completed': return 'text-blue-400 bg-blue-900';
      case 'at-risk': return 'text-yellow-400 bg-yellow-900';
      case 'delayed': return 'text-red-400 bg-red-900';
      default: return 'text-gray-400 bg-gray-900'}
  };
  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500',
    if (progress >= 60) return 'bg-yellow-500';
    if (progress >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const filteredMetrics = metrics.filter(metric => {
    const departmentMatch = selectedDepartment === 'all' || metric.department === selectedDepartment;
    const priorityMatch = selectedPriority === 'all' || metric.priority === selectedPriority;
    return departmentMatch && priorityMatch, });

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
  )};
export default EnterpriseAnalyticsSuite;
