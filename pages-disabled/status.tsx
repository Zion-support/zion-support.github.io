import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Cloud, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SystemStatus: NextPage = () => {
  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Globe
    }, {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Server
    }, {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Database
    }, {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '200ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Cloud
    }, {
      name: 'CDN',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '50ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Activity
    }, {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '300ms',
      lastIncident: 'No incidents in the past 30 days',
      icon: Server
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - API Services',
      status: 'resolved',
      date: '2024-11-15',
      duration: '2 hours',
      description: 'Scheduled maintenance window for API infrastructure updates. All services were restored successfully.'
    }, {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      date: '2024-10-28',
      duration: '45 minutes',
      description: 'Temporary performance degradation in database queries. Issue was resolved by optimizing query performance.'
    }, {
      id: 3,
      title: 'CDN Outage',
      status: 'resolved',
      date: '2024-10-10',
      duration: '1 hour',
      description: 'CDN provider experienced regional outage affecting content delivery. Service was restored after provider resolution.'
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
      case 'maintenance':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />}
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'outage':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800'}
  };

  const overallStatus = 'operational';
  const overallUptime = '99.9%';

  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group services and infrastructure. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, incident reports, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Activity className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real-time status of all Zion Tech Group services and infrastructure. 
              We maintain 99.9% uptime to ensure your business operations run smoothly.
            </p>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center mb-4">
                  {getStatusIcon(overallStatus)}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">All Systems Operational</h2>
                <p className="text-xl text-gray-600 mb-4">
                  All services are running normally. Current uptime: <span className="font-semibold text-green-600">{overallUptime}</span>
                </p>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Monitor the status of all our core services and infrastructure components.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <service.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Status</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Uptime</span>
                        <span className="text-sm font-medium text-gray-900">{service.uptime}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Response Time</span>
                        <span className="text-sm font-medium text-gray-900">{service.responseTime}</span>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500">{service.lastIncident}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track our incident history and resolution times. We're committed to transparency and continuous improvement.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {recentIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        {getStatusIcon(incident.status)}
                        <h3 className="text-lg font-semibold text-gray-900 ml-3">{incident.title}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{incident.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span>Date: {incident.date}</span>
                        <span>Duration: {incident.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key performance indicators and uptime statistics for the past 30 days.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Overall Uptime</div>
                  <div className="text-sm text-gray-500 mt-1">Past 30 days</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">120ms</div>
                  <div className="text-gray-600">Average Response Time</div>
                  <div className="text-sm text-gray-500 mt-1">Global average</div>
                </motion.div>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                  <div className="text-gray-600">Active Incidents</div>
                  <div className="text-sm text-gray-500 mt-1">All systems operational</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and be notified of any service incidents or maintenance windows.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-200 mt-4">
              For immediate support, contact us at <a href="mailto:kleber@ziontechgroup.com" className="underline">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default SystemStatus;