import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Globe } from 'lucide-react';

const Status: NextPage = () => {
  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: '2024-01-15',
      icon: Globe
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '12ms',
      lastIncident: '2024-01-10',
      icon: Database
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '23ms',
      lastIncident: '2024-01-12',
      icon: Server
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '67ms',
      lastIncident: '2024-01-08',
      icon: Database
    },
    {
      name: 'Email Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '89ms',
      lastIncident: '2024-01-05',
      icon: Globe
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '34ms',
      lastIncident: '2024-01-03',
      icon: Globe
    }
  ];

  const recentIncidents = [
    {
      title: 'API Response Time Degradation',
      status: 'resolved',
      date: '2024-01-15',
      duration: '2 hours',
      description: 'Some API endpoints experienced slower response times due to increased load.'
    },
    {
      title: 'Database Connection Issues',
      status: 'resolved',
      date: '2024-01-10',
      duration: '45 minutes',
      description: 'Temporary database connection issues affecting some users.'
    },
    {
      title: 'Email Delivery Delays',
      status: 'resolved',
      date: '2024-01-05',
      duration: '1 hour',
      description: 'Email notifications were delayed due to third-party service issues.'
    }
  ];

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5" />;
      case 'outage':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group services and infrastructure."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">System Status</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Real-time status of all Zion Tech Group services and infrastructure.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>All Systems Operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-blue-400" />
              <span>Last updated: 2 minutes ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current status of all our services and infrastructure components.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                      {getStatusIcon(service.status)}
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Uptime (30 days)</span>
                      <span className="font-semibold text-gray-900">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-semibold text-gray-900">{service.responseTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Last Incident</span>
                      <span className="font-semibold text-gray-900">{service.lastIncident}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators for the past 30 days.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Overall Uptime</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">45ms</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-gray-600">Active Incidents</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2.1h</div>
              <div className="text-gray-600">Total Downtime (30d)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              History of recent service incidents and their resolutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}>
                      {getStatusIcon(incident.status)}
                      <span className="capitalize">{incident.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Date: {incident.date}</span>
                    <span>Duration: {incident.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Page Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Status Page Information</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How We Monitor</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 automated monitoring</li>
                  <li>• Real-time performance tracking</li>
                  <li>• Automated incident detection</li>
                  <li>• Multi-region health checks</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident Response</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Immediate incident notification</li>
                  <li>• Rapid response team activation</li>
                  <li>• Regular status updates</li>
                  <li>• Post-incident analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to status updates and get notified about incidents and maintenance.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Status;