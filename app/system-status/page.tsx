'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, Server, Database, Cloud, Shield, Activity } from 'lucide-react'
import Layout from '../layout'

const SystemStatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const systemComponents = [
    {
      name: 'Web Servers',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Primary web application servers',
      icon: <Server className="w-6 h-6 text-blue-500" />,
      details: {
        'Load Average': '0.8',
        'Memory Usage': '67%',
        'CPU Usage': '23%',
        'Active Connections': '1,247'
      }
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      description: 'Primary and replica database systems',
      icon: <Database className="w-6 h-6 text-green-500" />,
      details: {
        'Query Response Time': '12ms',
        'Connection Pool': '85%',
        'Replication Lag': '0ms',
        'Cache Hit Rate': '94%'
      }
    },
    {
      name: 'CDN Network',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '8ms',
      description: 'Global content delivery network',
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      details: {
        'Edge Locations': '150+',
        'Cache Hit Rate': '89%',
        'Bandwidth': '2.3 TB/s',
        'Geographic Coverage': 'Global'
      }
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '5ms',
      description: 'Firewall, DDoS protection, and security monitoring',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      details: {
        'Threats Blocked': '1,234',
        'DDoS Attacks': '0',
        'Security Score': 'A+',
        'SSL Certificate': 'Valid'
      }
    },
    {
      name: 'Monitoring Systems',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '2ms',
      description: 'System monitoring and alerting infrastructure',
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      details: {
        'Alerts Active': '0',
        'Metrics Collected': '50,000/min',
        'Logs Processed': '1.2M/min',
        'Uptime Monitoring': '100%'
      }
    },
    {
      name: 'Message Queue',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '150ms',
      description: 'Message queuing and processing system',
      icon: <Activity className="w-6 h-6 text-yellow-500" />,
      details: {
        'Queue Depth': 'High',
        'Processing Rate': 'Slowed',
        'Failed Messages': '12',
        'Retry Attempts': 'Active'
      },
      incident: 'Experiencing high queue depth due to increased message volume'
    }
  ]

  const performanceMetrics = [
    {
      name: 'Response Time',
      value: '45ms',
      trend: '+2ms',
      status: 'good',
      description: 'Average response time across all services'
    },
    {
      name: 'Throughput',
      value: '12,500 req/s',
      trend: '+150 req/s',
      status: 'excellent',
      description: 'Requests processed per second'
    },
    {
      name: 'Error Rate',
      value: '0.02%',
      trend: '-0.01%',
      status: 'excellent',
      description: 'Percentage of failed requests'
    },
    {
      name: 'Availability',
      value: '99.9%',
      trend: '0%',
      status: 'excellent',
      description: 'Overall system availability'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400'
      case 'degraded':
        return 'text-yellow-400'
      case 'outage':
        return 'text-red-400'
      case 'maintenance':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const getTrendColor = (trend: string) => {
    if (trend.startsWith('+')) return 'text-red-400'
    if (trend.startsWith('-')) return 'text-green-400'
    return 'text-gray-400'
  }

  const refreshStatus = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const overallStatus = systemComponents.every(component => component.status === 'operational') ? 'operational' : 'degraded'

  return (
    <Layout 
      title="System Status - Zion Tech Group"
      description="Detailed system status and performance metrics for Zion Tech Group infrastructure and services."
      keywords="system status, infrastructure, performance, monitoring, uptime, technical status"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            {getStatusIcon(overallStatus)}
            <h1 className="text-5xl md:text-7xl font-bold text-white ml-4 leading-tight">
              System <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Status</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Detailed monitoring of our infrastructure components and system performance metrics.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
            </button>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                  <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">System Components</h2>
          <div className="space-y-6">
            {systemComponents.map((component, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {component.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                      <p className="text-gray-300 text-sm">{component.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusIcon(component.status)}
                    <div className="text-right">
                      <div className={`font-medium ${getStatusColor(component.status)}`}>
                        {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                      </div>
                      <div className="text-gray-400 text-sm">{component.uptime} uptime</div>
                    </div>
                  </div>
                </div>

                {component.incident && (
                  <div className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-400 font-medium">Incident Notice</span>
                    </div>
                    <p className="text-yellow-300 text-sm">{component.incident}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(component.details).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-gray-400 text-sm">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Health Summary */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">System Health Summary</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Overall system health and performance indicators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-300 mb-4">Overall Uptime</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.8%' }}></div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">45ms</div>
              <div className="text-gray-300 mb-4">Average Response Time</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-4xl font-bold text-white mb-2">0.02%</div>
              <div className="text-gray-300 mb-4">Error Rate</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technical Issues?
            </h2>
            <p className="text-xl text-white/90 mb-6">
              If you're experiencing technical issues not reflected in our status page, 
              please contact our technical support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Technical Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Report an Issue
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SystemStatusPage