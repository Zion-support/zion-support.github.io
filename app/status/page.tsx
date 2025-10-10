'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Globe, Server, Database, Cloud, Shield, Zap, Activity, TrendingUp, Users, Eye, BarChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer'
export default function StatusPage() {
const [lastUpdated, setLastUpdated] = useState(new Date())
const [isRefreshing, setIsRefreshing] = useState(false)
const refreshStatus = async () => {

    setIsRefreshing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastUpdated(new Date())
    setIsRefreshing(false)
  }
  }
const services = [
    {
    name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and authentication'
  },
    {
    name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      lastIncident: '2024-01-10',
      description: 'Machine learning and AI processing'
  },
    {
    name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '25ms',
      lastIncident: '2024-01-05',
      description: 'Cloud hosting and storage services'
  },
    {
    name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      lastIncident: '2024-01-12',
      description: 'Primary and backup databases'
  },
    {
    name: 'CDN',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: '2024-01-08',
      description: 'Content delivery network'
  },
    {
    name: 'Monitoring',
      status: 'operational',
      uptime: '100%',
      responseTime: '5ms',
      lastIncident: 'Never',
      description: 'System monitoring and alerts'
  }
    }
  ]
const incidents = [
    {
    id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      description: 'Some API endpoints experienced increased response times due to high traffic load.',
      affectedServices: ['API Services', 'AI Services']
  },
    {
    id: 2,
      title: 'Database Connection Issues',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-12T14:20:00Z',
      endTime: '2024-01-12T16:30:00Z',
      description: 'Intermittent database connection issues affecting some user operations.',
      affectedServices: ['Database', 'API Services']
  }
    }
  ]
const getStatusIcon = (;
    switch (status) {
    case 'operational':;

        return <CheckCircle>
      case 'degraded':;
        return <AlertTriangle>
      case 'outage':;
        return <XCircle>

      default:;) => {
  return (
    $3
  )
  }
        return <Clock>}
    }
  }
const getStatusColor = (;
    switch (status) {
    case 'operational':;
        return 'text-green-400';
      case 'degraded':;
        return 'text-yellow-400';
      case 'outage':;
        return 'text-red-400';
      default:;) => {
  return (
    $3
  )
  }
        return 'text-gray-400';}
    }
  }
const getSeverityColor = (;
    switch (severity) {
    case 'critical':;
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'major':;
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'minor':;
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:;) => {
  return (
    $3
  )
  }
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';}
    }
  }
const overallStatus = services.every(service => service.status === 'operational');
    ? 'operational';
    : services.some(service => service.status === 'outage')
      ? 'outage'
      : 'degraded'
return (
          </h1>
          <p>
            Real-time status of all our services. We're committed to providing reliable,
            high-performance AI and IT solutions.
          </p>
          <h2>
            Need More Information?
          </h2>