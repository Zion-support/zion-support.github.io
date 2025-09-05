import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Globe } from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
}

const services: ServiceStatus[] = [
  {
    name: 'Website',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '120ms',
    lastIncident: '2024-01-15'
  },
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '85ms',
    lastIncident: '2024-01-10'
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '45ms',
    lastIncident: '2024-01-05'
  },
  {
    name: 'CDN',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '25ms',
    lastIncident: '2024-01-01'
  },
  {
    name: 'Email Services',
    status: 'degraded',
    uptime: '98.5%',
    responseTime: '200ms',
    lastIncident: '2024-01-20'
  },
  {
    name: 'Monitoring',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '60ms',
    lastIncident: '2024-01-12'
  }
];

const incidents = [
  {
    id: 1,
    title: 'Email Service Degradation',
    status: 'investigating',
    description: 'We are experiencing slower than usual email delivery times.',
    startTime: '2024-01-20T10:30:00Z',
    affectedServices: ['Email Services']
  },
  {
    id: 2,
    title: 'Scheduled Maintenance',
    status: 'scheduled',
    description: 'Database maintenance scheduled for this weekend.',
    startTime: '2024-01-27T02:00:00Z',
    affectedServices: ['Database', 'API Services']
  }
];

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
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

  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, incident reports, monitoring"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">System Status</h1>
                <p className="text-gray-600 mt-2">Real-time status of all our services</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Last updated</div>
                <div className="text-lg font-mono">{currentTime.toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
                    <p className="text-gray-600">All services are running normally</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime (30 days)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(service.status)}
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Uptime:</span>
                      <span className="font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-medium">{service.responseTime}</span>
                    </div>
                    {service.lastIncident && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Last Incident:</span>
                        <span className="font-medium">{service.lastIncident}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incidents */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                      <p className="text-gray-600 mt-1">{incident.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'investigating' ? 'text-yellow-600 bg-yellow-100' :
                      incident.status === 'scheduled' ? 'text-blue-600 bg-blue-100' :
                      'text-gray-600 bg-gray-100'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div>
                      <span>Start Time: {new Date(incident.startTime).toLocaleString()}</span>
                    </div>
                    <div>
                      <span>Affected: {incident.affectedServices.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>For real-time updates, follow us on <a href="https://twitter.com/ziontechgroup" className="text-blue-600 hover:underline">Twitter</a></p>
              <p className="mt-2">Need immediate assistance? <a href="/contact" className="text-blue-600 hover:underline">Contact Support</a></p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}