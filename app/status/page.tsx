'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshStatus = async () => {
    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Core API endpoints and services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '12ms',
      description: 'Primary database cluster'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms',
      description: 'Content delivery network'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '23ms',
      description: 'User authentication services'
    },
    {
      name: 'Email Service',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '120ms',
      description: 'Email delivery and notifications'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      description: 'File upload and storage'
    }
  ]

  const incidents = [
    {
      id: 1,
      title: 'Email Service Degradation',
      status: 'investigating',
      description: 'We are currently investigating reports of delayed email delivery.',
      time: '2 hours ago',
      updates: [
        {
          time: '2 hours ago',
          message: 'Issue identified with email service provider'
        },
        {
          time: '1 hour ago',
          message: 'Working with provider to resolve the issue'
        }
      ]
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              System Status
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Real-time status of all our services and systems. We're committed to providing reliable service.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-400 font-medium">All Systems Operational</span>
              </div>
              <div className="text-gray-400">•</div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
              <button
                onClick={refreshStatus}
                disabled={isRefreshing}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Current status of all our services and infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  {getStatusIcon(service.status)}
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className={getStatusColor(service.status)}>{service.status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
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
      {incidents.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Active Incidents</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Current issues and their resolution status
              </p>
            </div>
            
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                      <p className="text-gray-300">{incident.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(incident.status)}
                      <span className={getStatusColor(incident.status)}>{incident.status}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-4">Started {incident.time}</div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-white">Updates:</h4>
                    {incident.updates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="text-sm text-gray-400">{update.time}</div>
                          <div className="text-gray-300">{update.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

export default StatusPage