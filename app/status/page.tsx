'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  RefreshCw, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 2000);
  };

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      description: 'Core API endpoints and data processing'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '12ms',
      lastIncident: '2024-01-10',
      description: 'Primary database and backup systems'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '25ms',
      lastIncident: '2024-01-12',
      description: 'Content delivery and edge caching'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '18ms',
      lastIncident: '2024-01-08',
      description: 'User authentication and authorization'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '120ms',
      lastIncident: '2024-01-05',
      description: 'Machine learning and AI processing'
    },
    {
      name: 'Monitoring',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: '2024-01-01',
      description: 'System monitoring and alerting'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'API Response Time Degradation',
      status: 'resolved',
      severity: 'minor',
      startTime: '2024-01-15T10:30:00Z',
      endTime: '2024-01-15T11:45:00Z',
      description: 'Temporary increase in API response times due to high traffic load. Issue resolved by scaling up infrastructure.',
      affectedServices: ['API Services', 'CDN']
    },
    {
      id: 2,
      title: 'Database Connection Pool Exhaustion',
      status: 'resolved',
      severity: 'major',
      startTime: '2024-01-10T14:20:00Z',
      endTime: '2024-01-10T16:30:00Z',
      description: 'Database connection pool reached maximum capacity, causing intermittent service failures. Resolved by optimizing connection management.',
      affectedServices: ['Database', 'API Services']
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'major':
        return 'bg-orange-100 text-orange-800';
      case 'minor':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time status of Zion Tech Group's services and infrastructure. Monitor uptime, performance, and incident reports." />
        <meta name="keywords" content="system status, uptime, service monitoring, incident reports, API status" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Header */}
          <section className="bg-white border-b">
            <div className="container mx-auto px-4 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">System Status</h1>
                  <p className="text-gray-600">
                    All systems are operational • Last updated: {lastUpdated.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
            </div>
          </section>

          {/* Overall Status */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Overall Status</h3>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-2">Operational</p>
                  <p className="text-gray-600">All systems running normally</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Uptime</h3>
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">99.9%</p>
                  <p className="text-gray-600">Last 30 days</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                    <Activity className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">45ms</p>
                  <p className="text-gray-600">Average response time</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Status */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Uptime
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Response Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Incident
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {services.map((service, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-500">{service.description}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {getStatusIcon(service.status)}
                              <span className={`ml-2 text-sm font-medium ${getStatusColor(service.status)}`}>
                                {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {service.uptime}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {service.responseTime}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {service.lastIncident}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Incidents */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{incident.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-4">Affected Services:</span>
                      <div className="flex space-x-2">
                        {incident.affectedServices.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default StatusPage;