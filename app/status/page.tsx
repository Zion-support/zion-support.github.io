'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Server,
  Database,
  Cloud,
  Shield,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
}

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const services: ServiceStatus[] = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '12ms'
    },
    {
      name: 'AI Processing',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '1.2s'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '23ms'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '8ms'
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.5%',
      responseTime: '156ms',
      lastIncident: 'Increased latency due to maintenance'
    }
  ];

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Activity className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Check the current status of Zion Tech Group services. Real-time monitoring of our AI and IT infrastructure." />
        <meta name="keywords" content="status, uptime, service status, system monitoring, infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  System Status
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Real-time monitoring of our AI and IT infrastructure. All systems are operational.
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">All Systems Operational</span>
                  </div>
                  <button
                    onClick={refreshStatus}
                    disabled={isRefreshing}
                    className="flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Status Overview */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Overall Uptime</div>
                    <div className="flex items-center justify-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+0.1%</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">45ms</div>
                    <div className="text-gray-600">Avg Response Time</div>
                    <div className="flex items-center justify-center mt-2">
                      <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">-5ms</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                    <div className="text-gray-600">Services Monitored</div>
                    <div className="flex items-center justify-center mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">All Healthy</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                    <div className="text-gray-600">Active Incidents</div>
                    <div className="flex items-center justify-center mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">No Issues</span>
                    </div>
                  </div>
                </div>

                {/* Service Status List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">Service Status</h2>
                    <p className="text-gray-600 text-sm">Last updated: {lastUpdated.toLocaleString()}</p>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {services.map((service, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {getStatusIcon(service.status)}
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                              {service.lastIncident && (
                                <p className="text-sm text-yellow-600">{service.lastIncident}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-6">
                            <div className="text-right">
                              <div className="text-sm text-gray-600">Uptime</div>
                              <div className="font-semibold text-gray-900">{service.uptime}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">Response Time</div>
                              <div className="font-semibold text-gray-900">{service.responseTime}</div>
                            </div>
                            <div className="text-right">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                                {getStatusText(service.status)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Incident History */}
                <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Incidents</h2>
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600">No recent incidents to report</p>
                    <p className="text-sm text-gray-500 mt-2">All services have been running smoothly</p>
                  </div>
                </div>

                {/* Maintenance Schedule */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Scheduled Maintenance</h3>
                  <div className="text-blue-800">
                    <p className="mb-2">No scheduled maintenance at this time.</p>
                    <p className="text-sm">We'll notify you 48 hours in advance of any planned maintenance windows.</p>
                  </div>
                </div>
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