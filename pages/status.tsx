import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
<<<<<<< HEAD
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Status: NextPage = () => {
  const systemStatus = [
=======
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Cloud } from 'lucide-react';

const Status: NextPage = () => {
  const services = [
>>>>>>> main
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
<<<<<<< HEAD
      responseTime: '120ms',
      icon: Server,
      description: 'Core API endpoints and services'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
=======
>>>>>>> main
      responseTime: '45ms',
      icon: Database,
      description: 'Primary database and data storage'
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.8%',
<<<<<<< HEAD
      responseTime: '200ms',
      icon: Cloud,
      description: 'Cloud hosting and infrastructure services'
=======
      responseTime: '120ms',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '8ms',
      lastIncident: 'No incidents in the past 30 days'
>>>>>>> main
    },
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '350ms',
      icon: Activity,
      description: 'AI and machine learning services'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
<<<<<<< HEAD
      responseTime: '80ms',
      icon: CheckCircle,
      description: 'User authentication and authorization'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.85%',
      responseTime: '150ms',
      icon: Database,
      description: 'File upload and storage services'
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2025-01-14',
      duration: '2 hours',
      description: 'Scheduled maintenance window for API infrastructure updates. All services restored successfully.',
      impact: 'minor'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      date: '2025-01-12',
      duration: '45 minutes',
      description: 'Temporary performance degradation in database queries. Issue resolved with query optimization.',
      impact: 'minor'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Update',
      status: 'resolved',
      date: '2025-01-10',
      duration: '1 hour',
      description: 'Scheduled cloud infrastructure updates. Brief service interruption during maintenance.',
      impact: 'minor'
    }
  ];
=======
      responseTime: '25ms',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Authentication',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '35ms',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'File Storage',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '65ms',
      lastIncident: 'No incidents in the past 30 days'
    }
  ];

  const recentIncidents = [
    {
      date: 'January 15, 2025',
      title: 'Scheduled Maintenance',
      status: 'resolved',
      description: 'Planned maintenance window for database optimization. All services restored.',
      duration: '2 hours'
    },
    {
      date: 'January 8, 2025',
      title: 'API Rate Limiting Issue',
      status: 'resolved',
      description: 'Temporary issue with rate limiting causing some API requests to fail. Issue resolved within 30 minutes.',
      duration: '30 minutes'
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
>>>>>>> main

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
<<<<<<< HEAD
        return 'from-green-500 to-green-600';
      case 'degraded':
        return 'from-yellow-500 to-yellow-600';
      case 'outage':
        return 'from-red-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
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
=======
        return 'text-green-600 bg-green-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'outage':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
>>>>>>> main
    }
  };

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
<<<<<<< HEAD
      description="Real-time system status and uptime information for Zion Tech Group services. Monitor service availability and performance."
      keywords="system status, uptime, service status, monitoring, availability, performance"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            System Status
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-time monitoring of our services and infrastructure. 
            All systems are currently operational.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-green-500 bg-opacity-20 rounded-lg px-6 py-3 border border-green-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">All Systems Operational</span>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg px-6 py-3">
              <div className="text-sm text-gray-300">Last Updated</div>
              <div className="font-mono text-lg">{new Date().toLocaleTimeString()}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* System Status Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Service Status</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Current status of all Zion Tech Group services and infrastructure components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemStatus.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status);
              return (
                <motion.div
                  key={service.name}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getStatusColor(service.status)} rounded-full flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`w-5 h-5 ${
                        service.status === 'operational' ? 'text-green-500' :
                        service.status === 'degraded' ? 'text-yellow-500' :
                        'text-red-500'
                      }`} />
                      <span className={`text-sm font-semibold capitalize ${
                        service.status === 'operational' ? 'text-green-600' :
                        service.status === 'degraded' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
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
                </motion.div>
              );
            })}
=======
      description="Real-time status of Zion Tech Group services and infrastructure. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, incident reports, monitoring, infrastructure"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            System Status
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Real-time monitoring of our services and infrastructure. 
            We maintain 99.9% uptime to ensure your applications run smoothly.
          </p>
          
          {/* Overall Status */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold">All Systems Operational</span>
            </div>
            <p className="text-gray-200">Last updated: {new Date().toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current status of all our core services and infrastructure components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.name} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
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
                  
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-500">{service.lastIncident}</p>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Recent Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Recent Incidents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Historical record of service incidents and maintenance activities.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="text-lg font-semibold text-gray-800">{incident.title}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(incident.impact)}`}>
                      {incident.impact}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{new Date(incident.date).toLocaleDateString()}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                    <span className="capitalize text-green-600 font-medium">{incident.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Uptime Statistics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Historical uptime statistics for the past 90 days.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-600">30-Day Uptime</div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                <div className="text-gray-600">90-Day Uptime</div>
              </motion.div>
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">2.4s</div>
                <div className="text-gray-600">Avg Response Time</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to status updates and get notified about incidents and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
=======
      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key performance indicators for the past 30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Overall Uptime</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">45ms</h3>
              <p className="text-gray-600">Average Response Time</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">0</h3>
              <p className="text-gray-600">Active Incidents</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">6</h3>
              <p className="text-gray-600">Services Monitored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historical record of service incidents and maintenance windows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{incident.date} • Duration: {incident.duration}</span>
                  </div>
                  
                  <p className="text-gray-600">{incident.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Page Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About This Status Page</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            This status page is updated in real-time and provides transparency about our service availability. 
            We monitor our infrastructure 24/7 to ensure optimal performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">Our systems are monitored continuously with automated alerts and notifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Transparent Communication</h3>
              <p className="text-gray-600">We provide detailed incident reports and regular updates during any service issues.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proactive Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance windows are planned in advance to minimize service disruption.</p>
            </div>
          </div>
>>>>>>> main
        </div>
      </section>
    </MainLayout>
  );
};

export default Status;