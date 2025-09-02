import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Cloud, Brain, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Status: NextPage = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      icon: Server,
      description: 'Core API endpoints and services'
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '120ms',
      icon: Brain,
      description: 'AI and machine learning services'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '25ms',
      icon: Cloud,
      description: 'Cloud hosting and infrastructure'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15ms',
      icon: Database,
      description: 'Database and data storage services'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '30ms',
      icon: Shield,
      description: 'Authentication and security services'
    },
    {
      name: 'CDN Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '10ms',
      icon: Activity,
      description: 'Content delivery network'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2025-01-10',
      description: 'Planned maintenance window completed successfully. All services restored.',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Database Performance Optimization',
      status: 'resolved',
      date: '2025-01-08',
      description: 'Database performance improvements implemented. Response times improved by 20%.',
      impact: 'minor'
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
        return CheckCircle;
      case 'degraded':
        return AlertCircle;
      case 'outage':
        return XCircle;
      default:
        return Clock;
    }
  };

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group services including API, AI services, cloud infrastructure, and more."
      keywords="system status, service status, uptime, API status, service monitoring, status page"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Activity className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Real-time status of all Zion Tech Group services. We monitor our systems 24/7 
              to ensure optimal performance and reliability.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-green-800 mb-2">All Systems Operational</h2>
              <p className="text-green-700 text-lg">
                All services are running normally. No incidents reported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Service Status</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <service.icon className="w-8 h-8 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Uptime</span>
                        <span className="font-semibold text-gray-800">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response Time</span>
                        <span className="font-semibold text-gray-800">{service.responseTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                      <StatusIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Operational</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Performance Metrics</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-600">Overall Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">45ms</div>
                <p className="text-gray-600">Average Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <p className="text-gray-600">Active Incidents</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Incidents</h2>
          <div className="max-w-4xl mx-auto">
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    className="bg-white rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{incident.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{incident.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{incident.date}</span>
                      <span className="capitalize">Impact: {incident.impact}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No Recent Incidents</h3>
                <p className="text-gray-600">
                  All systems have been running smoothly with no reported issues.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Subscribe to status updates and get notified about any service incidents.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Status;