'use client'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, XCircle, AlertTriangle, RefreshCw, Clock } from 'lucide-react'

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  const services = [
    {
      name: 'AI Content Generator',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms'
    },
    {
      name: 'AI Analytics Dashboard',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '95ms'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '80ms'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '150ms'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms'
    },
    {
      name: 'CDN Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '60ms'
    }
  ]

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      description: 'Planned maintenance window for AI service updates',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      impact: 'minor'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
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
      default:
        return 'text-gray-400'
    }
  }

  const refreshStatus = () => {
    setLastUpdated(new Date())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Check the current status of Zion Tech Group services and systems. Real-time monitoring and incident reporting." />
        <meta name="keywords" content="status, system status, service status, uptime, monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              System Status
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Real-time monitoring of our services and systems. 
              All systems are currently operational.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-400 font-semibold">All Systems Operational</span>
              </div>
              <button
                onClick={refreshStatus}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Current status of all our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={getStatusColor(service.status)}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Recent Incidents</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Information about any service disruptions
            </p>
          </div>
          {incidents.length > 0 ? (
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' 
                        ? 'bg-green-400/10 text-green-400' 
                        : 'bg-yellow-400/10 text-yellow-400'
                    }`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                    <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Active Incidents</h3>
              <p className="text-gray-300">All services are running smoothly</p>
            </div>
          )}
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Last updated: {lastUpdated.toLocaleString()}
          </p>
        </div>
      </section>
    </div>
  )
}

export default StatusPage