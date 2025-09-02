import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Globe } from 'lucide-react';

const SystemStatus: NextPage = () => {
  const services = [
    {
      name: "Website",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
      lastIncident: "2024-12-15"
    },
    {
      name: "API Services",
      status: "operational",
      uptime: "99.8%",
      responseTime: "85ms",
      lastIncident: "2024-12-10"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.95%",
      responseTime: "45ms",
      lastIncident: "2024-11-28"
    },
    {
      name: "Cloud Infrastructure",
      status: "operational",
      uptime: "99.9%",
      responseTime: "200ms",
      lastIncident: "2024-11-20"
    },
    {
      name: "AI Services",
      status: "operational",
      uptime: "99.7%",
      responseTime: "300ms",
      lastIncident: "2024-12-05"
    },
    {
      name: "CDN",
      status: "operational",
      uptime: "99.9%",
      responseTime: "50ms",
      lastIncident: "2024-10-15"
    }
  ];

  const incidents = [
    {
      id: 1,
      title: "API Response Time Degradation",
      status: "resolved",
      severity: "minor",
      startTime: "2024-12-15T10:30:00Z",
      endTime: "2024-12-15T11:45:00Z",
      description: "Some API endpoints experienced increased response times due to high traffic load."
    },
    {
      id: 2,
      title: "Database Connection Issues",
      status: "resolved",
      severity: "major",
      startTime: "2024-12-10T14:20:00Z",
      endTime: "2024-12-10T16:30:00Z",
      description: "Intermittent database connection issues affecting some services."
    },
    {
      id: 3,
      title: "Scheduled Maintenance",
      status: "completed",
      severity: "maintenance",
      startTime: "2024-12-05T02:00:00Z",
      endTime: "2024-12-05T04:00:00Z",
      description: "Routine maintenance to update infrastructure components."
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
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'major':
        return 'text-orange-600 bg-orange-100';
      case 'minor':
        return 'text-yellow-600 bg-yellow-100';
      case 'maintenance':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group services and infrastructure. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, incident reports, monitoring"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Status</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Real-time monitoring of our services and infrastructure. All systems are operational.
            </p>
            
            {/* Overall Status */}
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold">
              <CheckCircle className="w-6 h-6 mr-2" />
              All Systems Operational
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Uptime:</span>
                      <span className="font-semibold text-gray-900">{service.uptime}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-semibold text-gray-900">{service.responseTime}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Incident:</span>
                      <span className="text-sm text-gray-500">{service.lastIncident}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Incidents</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                        {incident.endTime && (
                          <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700">{incident.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Performance Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Server className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Overall Uptime</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">150ms</div>
                <div className="text-gray-600">Avg Response Time</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">99.95%</div>
                <div className="text-gray-600">Database Uptime</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to status updates and get notified about incidents and maintenance windows.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SystemStatus;