import * as React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const Status: NextPage = () => {
  const services = [
    {
      name: 'Web Application', status: 'operational',
      uptime: '99.9%', responseTime: '120ms',
      lastIncident: 'No incidents in the past 30 days'
    }, {
      name: 'API Services',
      status: 'operational', uptime: '99.8%',
      responseTime: '85ms', lastIncident: 'No incidents in the past 30 days'
    }, {
      name: 'Database', status: 'operational',
      uptime: '99.9%', responseTime: '45ms',
      lastIncident: 'No incidents in the past 30 days'
    }, {
      name: 'Cloud Infrastructure',
      status: 'operational', uptime: '99.7%',
      responseTime: '200ms', lastIncident: 'No incidents in the past 30 days'
    }, {
      name: 'CDN', status: 'operational',
      uptime: '99.9%', responseTime: '50ms',
      lastIncident: 'No incidents in the past 30 days'
    }, {
      name: 'Monitoring',
      status: 'operational', uptime: '100%',
      responseTime: '30ms', lastIncident: 'No incidents in the past 30 days'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded': return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />}
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'outage': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100'}
  };

  const incidents = [
    {
      id: 1, title: 'Scheduled Maintenance - API Services',
      status: 'resolved', date: '2025-01-20',
      description: 'Scheduled maintenance window for API services completed successfully.', impact: 'minor'
    }, {
      id: 2, title: 'Database Performance Issue',
      status: 'resolved', date: '2025-01-15',
      description: 'Temporary performance degradation in database queries has been resolved.', impact: 'minor'
    }
  ];

export default function StatusPage() {
  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Check uptime, performance, and incident reports."
      keywords="status, uptime, incidents, system health, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  System Status
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Real-time status of all our services and systems
              </p>
            </motion.div>
          </div>
        </section>

        {/* Status Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Uptime</span>
                      <span className="text-sm font-medium text-green-600">{service.uptime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last Incident</span>
                      <span className="text-sm text-gray-500">{service.lastIncident}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Health */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">System Health</h2>
                <p className="text-lg text-gray-600">
                  Comprehensive overview of our infrastructure and service performance
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Servers</h3>
                  <p className="text-2xl font-bold text-green-600">99.9%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Database</h3>
                  <p className="text-2xl font-bold text-green-600">99.8%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">CDN</h3>
                  <p className="text-2xl font-bold text-green-600">99.7%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-2xl font-bold text-green-600">100%</p>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
                <p className="text-lg text-gray-600">
                  Latest incidents and maintenance windows
                </p>
              </motion.div>

              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                            {incident.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{incident.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                          </div>
                          <span className="capitalize">Impact: {incident.impact}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default Status;