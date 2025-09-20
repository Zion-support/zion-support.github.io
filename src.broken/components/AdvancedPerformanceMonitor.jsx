<<<<<<< HEAD
 from 'lucide-react',

const mockSystemMetrics = [{

    id: '1',
    name: 'CPU Usage',
    value: 78.5,
    unit: '%',
    threshold: 85,
    status: 'warning',
    trend: 'up',
    change: 5.2,
    category: 'Processor',
    lastUpdated: '2024-01-15T10:00:00.000Z'},
  {

    id: '2',
    name: 'Memory Usage',
    value: 65.3,
    unit: '%',
    threshold: 80,
    status: 'normal',
    trend: 'stable',
    change: 0.8,
    category: 'Memory',
    lastUpdated: '2024-01-15T10:00:00.000Z'},
  {

    id: '3',
    name: 'Disk I/O',
    value: 1250,
    unit: 'MB/s',
    threshold: 1500,
    status: 'normal',
    trend: 'down',
    change: -2.1,
    category: 'Storage',
    lastUpdated: '2024-01-15T10:00:00.000Z'},
  {

    id: '4',
    name: 'Network Latency',
    value: 45,
    unit: 'ms',
    threshold: 50,
    status: 'normal',
    trend: 'stable',
    change: 0.5,
    category: 'Network',
    lastUpdated: '2024-01-15T10:00:00.000Z'},
  {

    id: '5',
    name: 'Database Connections',
    value: 89,
    unit: 'connections',
    threshold: 100,
    status: 'warning',
    trend: 'up',
    change: 8.7,
    category: 'Database',
    lastUpdated: '2024-01-15T10:00:00.000Z'},
  {

    id: '6',
    name: 'Response Time',
    value: 180,
    unit: 'ms',
    threshold: 200,
    status: 'normal',
    trend: 'down',
    change: -3.2,
    category: 'Performance',
    lastUpdated: '2024-01-15T10:00:00.000Z'}
],

const mockPerformanceAlerts = [{

    id: '1',
    type: 'performance',
    severity: 'medium',
    title: 'High CPU Usage Detected',
    description:'
      'CPU usage has exceeded 75% for the last 10 minutes, indicating potential performance degradation.',
    timestamp: '2024-01-15T10:00:00.000Z',
    affected: ['Web Server 1',Application Server 2'],
    recommendations: ['
      'Scale horizontally',Optimize database queries',Review background processes'
    ],
    status: 'active'},
  {

    id: '2',
    type: 'scalability',
    severity: 'high',
    title: 'Database Connection Pool Near Capacity',
    description:'
      'Database connection pool is at 89% capacity, approaching the maximum limit.',
    timestamp: '2024-01-15T09:45:00.000Z',
    affected: ['Database Cluster',Application Servers'],
    recommendations: ['
      'Increase connection pool size',Implement connection pooling',Monitor query performance'
    ],
    status: 'active'}
],

export function AdvancedPerformanceMonitor({ enabled = true }) {

  const [isExpanded, setIsExpanded] = useState(false),
  const [isMinimized, setIsMinimized] = useState(false),
  const [selectedMetric, setSelectedMetric] = useState(null),
  const [refreshInterval, setRefreshInterval] = useState(5000),
  const [isRefreshing, setIsRefreshing] = useState(false),
  const [showAlerts, setShowAlerts] = useState(true),
  const [performanceScore, setPerformanceScore] = useState(87),
  const [trendData, setTrendData] = useState([]),
  const [systemHealth, setSystemHealth] = useState('good'),
  const [optimizationSuggestions, setOptimizationSuggestions] = useState([]),

  const containerRef = useRef(null) ,

  useEffect(() => {
    if(!enabled) return,

    const interval = setInterval(() => {
      refreshMetrics () ,
    }, refreshInterval) ,

    return () => clearInterval(interval) ,
  }, [enabled, refreshInterval]) ,

  const refreshMetrics = async () => {
    setIsRefreshing(true) ,
    // Simulate API call
    await new Promise(resolve => setTimeout (resolve, 1000) ) ,
    setIsRefreshing(false) ,
  },

  const getStatusColor = status => {

    switch(status) {

      case 'critical':'
        return 'text-red-500',
      case 'warning':'
        return 'text-yellow-500',
      case 'normal':'
        return 'text-green-500',
      default: '
        return 'text-gray-500'
    }
  },

  const getStatusIcon = status => {

    switch(status) {

      case 'critical':
        return <AlertTriangle className="w-4 h-4 text-red-500" />,
      case 'warning':"
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />,
      case 'normal':"
        return <CheckCircle className="w-4 h-4 text-green-500" />,
      default: "
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  },

  const getTrendIcon = trend => {

    switch(trend) {

      case 'up':"
        return <TrendingUp className="w-4 h-4 text-red-500" />,
      case 'down':
        return ("
          <TrendingUp className="w-4 h-4 text-green-500 transform rotate-180" />
        ),
      case 'stable':"
        return <BarChart3 className="w-4 h-4 text-blue-500" />,
      default: "
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  },

  if(!enabled) return null,

  if(isMinimized) {

    return ("
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}"
          className="bg-zion-blue text-white p-3 rounded-full shadow-lg hover: bg-zion-blue/80 transition-all duration-300"
        >"
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>) 
  }

  return ()
    <div
      ref={containerRef}
      className={`fixed bottom-4 right-4 z-50 bg-white dark:bg-zion-slate-dark rounded-lg shadow-2xl border border-zion-slate-light/20 transition-all duration-300 ${isExpanded ? 'w-96 h-96' : 'w-80 h-64'`
      }`}
    >
      {/* Header */}"
      <div className="flex items-center justify-between p-4 border-b border-zion-slate-light/20">"
        <div className="flex items-center space-x-2">"
          <Activity className="w-5 h-5 text-zion-cyan" />"
          <h3 className="font-semibold text-zion-slate-dark dark:text-white">
            Performance Monitor
          </h3>
          <div`
            className={`w-2 h-2 rounded-full ${systemHealth === 'good''
                ? 'bg-green-500''
                : systemHealth === 'warning''
                  ? 'bg-yellow-500''
                  : 'bg-red-500'`
            }`}
          />
        </div>"
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowAlerts(!showAlerts)}"
            className="p-1 hover:bg-zion-slate-light/20 rounded transition-colors"
          >
            <AlertTriangle'`
              className={`w-4 h-4 ${showAlerts ? 'text-yellow-500' : 'text-gray-400'}`}
            />
          </button>
          <button
            onClick={refreshMetrics}
            disabled={isRefreshing}"
            className="p-1 hover:bg-zion-slate-light/20 rounded transition-colors disabled:opacity-50"
          >
            <RefreshCw'`
              className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}"
            className="p-1 hover:bg-zion-slate-light/20 rounded transition-colors"
          >
            {isExpanded ? ("
              <Minimize2 className="w-4 h-4" />
            ) : ("
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setIsMinimized(true)}"
            className="p-1 hover:bg-zion-slate-light/20 rounded transition-colors"
          >"
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}"
      <div className="p-4 space-y-4 overflow-y-auto h-full">
        {/* Performance Score */}"
        <div className="text-center">"
          <div className="text-2xl font-bold text-zion-cyan">
            {performanceScore}
          </div>"
          <div className="text-sm text-zion-slate-light">Performance Score</div>
        </div>

        {/* Key Metrics */}"
        <div className="grid grid-cols-2 gap-3">
          {mockSystemMetrics.slice(0, 4).map(metric => (
            <div
              key={metric.id}"
              className="p-3 bg-zion-slate-light/10 rounded-lg cursor-pointer hover:bg-zion-slate-light/20 transition-colors"
              onClick={() => setSelectedMetric(metric)}
            >"
              <div className="flex items-center justify-between mb-2">"
                <span className="text-xs text-zion-slate-light">
                  {metric.name}
                </span>
                {getStatusIcon(metric.status)}
              </div>"
              <div className="text-lg font-semibold text-zion-slate-dark dark:text-white">
                {metric.value}
                {metric.unit}
              </div>"
              <div className="flex items-center space-x-1 text-xs">
                {getTrendIcon(metric.trend)}
                <span
                  className={

                    metric.change >= 0 ? 'text-red-500' : 'text-green-500'
                  }
                >
                  {metric.change >= 0 ? '+' : ''}
                  {metric.change}%
                </span>
              </div>
            </div>) ) }
        </div>

        {/* Alerts */}
        {showAlerts && mockPerformanceAlerts.length > 0 && ("
          <div className="space-y-2">"
            <h4 className="text-sm font-semibold text-zion-slate-dark dark:text-white">
              Active Alerts
            </h4>
            {mockPerformanceAlerts.map(alert => (
              <div
                key={alert.id}`
                className={`p-3 rounded-lg border-l-4 ${alert.severity === 'high''
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20''
                    : alert.severity === 'medium''
                      ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20''
                      : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'`
                }`}
              >"
                <div className="flex items-start justify-between">"
                  <div className="flex-1">"
                    <h5 className="text-sm font-semibold text-zion-slate-dark dark:text-white">
                      {alert.title}
                    </h5>"
                    <p className="text-xs text-zion-slate-light mt-1">
                      {alert.description}
                    </p>
                  </div>
                  <span`
                    className={`text-xs px-2 py-1 rounded-full ${alert.severity === 'high''
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200''
                        : alert.severity === 'medium''
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200''
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'`
                    }`}
                  >
                    {alert.severity}
                  </span>
                </div>
              </div>) ) }
          </div>) }

        {/* Expanded View */}
        {isExpanded && ("
          <div className="space-y-4">"
            <div className="border-t border-zion-slate-light/20 pt-4">"
              <h4 className="text-sm font-semibold text-zion-slate-dark dark:text-white mb-3">
                System Health Overview
              </h4>"
              <div className="space-y-2">
                {mockSystemMetrics.map(metric => (
                  <div
                    key={metric.id}"
                    className="flex items-center justify-between text-sm"
                  >"
                    <span className="text-zion-slate-light">{metric.name}</span>"
                    <div className="flex items-center space-x-2">
                      <span className={getStatusColor(metric.status)}>
                        {metric.value}
                        {metric.unit}
                      </span>
                      {getStatusIcon(metric.status)}
                    </div>
                  </div>) ) }
              </div>
            </div>
          </div>) }
      </div>
    </div>) ,
}
'"`
=======
import React, { useState, useRef, useEffect } from 'react',
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
