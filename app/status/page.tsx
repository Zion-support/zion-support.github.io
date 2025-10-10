'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  // Mock status data
  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-10'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '12ms',
      lastIncident: '2024-01-05'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '23ms',
      lastIncident: '2024-01-01'
    },
    {
      name: 'Authentication',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '120ms',
      lastIncident: '2024-01-15'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '67ms',
      lastIncident: '2023-12-28'
    },
    {
      name: 'Email Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '89ms',
      lastIncident: '2023-12-20'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Authentication Service Degraded Performance',
      status: 'investigating',
      impact: 'minor',
      started: '2024-01-15T10:30:00Z',
      description: 'Users may experience slower login times'
    },
    {
      id: 2,
      title: 'Database Maintenance',
      status: 'resolved',
      impact: 'major',
      started: '2024-01-10T02:00:00Z',
      resolved: '2024-01-10T04:00:00Z',
      description: 'Scheduled maintenance completed successfully'
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

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'minor':
        return 'bg-yellow-100 text-yellow-800';
      case 'major':
        return 'bg-orange-100 text-orange-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  System Status
                </h1>
                <p className="text-gray-600">
                  Real-time status of all our services and systems
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="text-sm text-gray-500">
                  Last updated: {lastUpdated.toLocaleString()}
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Overall Status */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center mb-4">
              <Activity className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Overall System Status</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">99.7%</div>
                <div className="text-sm text-gray-600">Uptime (30 days)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">45ms</div>
                <div className="text-sm text-gray-600">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">5</div>
                <div className="text-sm text-gray-600">Services Operational</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">1</div>
                <div className="text-sm text-gray-600">Services Degraded</div>
              </div>
            </div>
          </div>

          {/* Services Status */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Status</h2>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">
                        Last incident: {service.lastIncident}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{service.uptime}</div>
                      <div className="text-xs text-gray-500">Uptime</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{service.responseTime}</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                    <div className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Incidents</h2>
            
            {incidents.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-600">No recent incidents</p>
              </div>
            ) : (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{incident.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getImpactColor(incident.impact)}`}>
                        {incident.impact}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{incident.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-4">
                        Started: {new Date(incident.started).toLocaleString()}
                      </span>
                      {incident.resolved && (
                        <span>
                          Resolved: {new Date(incident.resolved).toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status History */}
          <div className="mt-8 text-center">
            <Link
              to="/status/history"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Status History
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;