'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, ExternalLink } from 'lucide-react'
import Layout from '../layout'

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      description: 'Core AI services including content generation, chatbots, and analytics'
    },
    {
      name: 'IT Services Platform',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms',
      description: 'IT infrastructure management and cloud services'
    },
    {
      name: 'Micro SaaS Applications',
      status: 'operational',
      uptime: '99.7%',
      description: 'Ready-to-use SaaS applications and productivity tools'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'User authentication and authorization services'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      description: 'Primary and backup database systems'
    },
    {
      name: 'CDN & Content Delivery',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '15ms',
      description: 'Global content delivery network'
    },
    {
      name: 'Email Services',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '2.1s',
      description: 'Email delivery and notification services',
      incident: 'Experiencing delays in email delivery due to high volume'
    },
    {
      name: 'Monitoring Systems',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '30ms',
      description: 'System monitoring and alerting services'
    }
  ]

  const incidents = [
    {
      id: 'INC-2024-001',
      title: 'Email Delivery Delays',
      status: 'investigating',
      severity: 'minor',
      description: 'Some users are experiencing delays in email delivery. We are investigating the root cause.',
      started: '2024-01-20T10:30:00Z',
      updates: [
        {
          time: '2024-01-20T10:30:00Z',
          message: 'We are investigating reports of email delivery delays affecting some users.',
          status: 'investigating'
        },
        {
          time: '2024-01-20T11:15:00Z',
          message: 'We have identified the issue as high email volume causing processing delays.',
          status: 'investigating'
        },
        {
          time: '2024-01-20T12:00:00Z',
          message: 'We are implementing additional email processing capacity to resolve the delays.',
          status: 'monitoring'
        }
      ]
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500'
      case 'major':
        return 'bg-orange-500'
      case 'minor':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  const refreshStatus = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const overallStatus = services.every(service => service.status === 'operational') ? 'operational' : 'degraded'

  return (
    <Layout 
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incidents."
      keywords="status, uptime, system status, service status, incidents, monitoring"
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
            Real-time monitoring of all our services and systems. 
            We're committed to providing reliable and high-performance solutions.
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

      {/* Overall Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="flex items-center justify-center mb-4">
              {getStatusIcon(overallStatus)}
              <h2 className={`text-3xl font-bold ml-4 ${getStatusColor(overallStatus)}`}>
                All Systems {overallStatus === 'operational' ? 'Operational' : 'Experiencing Issues'}
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              {overallStatus === 'operational' 
                ? 'All services are running normally with no known issues.'
                : 'Some services are experiencing issues. Please check individual service status below.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">99.8%</div>
                <div className="text-gray-300">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">0</div>
                <div className="text-gray-300">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">8</div>
                <div className="text-gray-300">Services Monitored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.name}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                    <span className="text-gray-400 text-sm">{service.uptime} uptime</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  {service.responseTime && (
                    <div>Response time: {service.responseTime}</div>
                  )}
                  <div>Last checked: {new Date().toLocaleTimeString()}</div>
                </div>
                {service.incident && (
                  <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-yellow-400 font-medium">Incident Notice</span>
                    </div>
                    <p className="text-yellow-300 text-sm">{service.incident}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      {incidents.length > 0 && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Active Incidents</h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white mr-4 ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.toUpperCase()}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                    </div>
                    <span className="text-gray-400 text-sm">#{incident.id}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  <div className="text-sm text-gray-400 mb-4">
                    Started: {new Date(incident.started).toLocaleString()}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Updates</h4>
                    <div className="space-y-3">
                      {incident.updates.map((update, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-gray-400">
                                {new Date(update.time).toLocaleString()}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                update.status === 'investigating' ? 'bg-yellow-500/20 text-yellow-400' :
                                update.status === 'monitoring' ? 'bg-blue-500/20 text-blue-400' :
                                'bg-green-500/20 text-green-400'
                              }`}>
                                {update.status}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{update.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe to Updates */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Subscribe to status updates and get notified immediately when incidents occur or are resolved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="mt-4 text-sm text-white/70">
              You can also follow us on{' '}
              <a href="#" className="underline hover:text-white">
                Twitter
              </a>{' '}
              for real-time updates
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StatusPage