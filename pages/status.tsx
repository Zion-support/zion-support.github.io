import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Clock, Server, Database, Globe, Shield } from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const services = [
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '120ms',
    lastIncident: '2024-01-15'
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '45ms',
    lastIncident: '2024-01-10'
  },
  {
    name: 'CDN',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '25ms',
    lastIncident: '2024-01-05'
  },
  {
    name: 'Authentication',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '80ms',
    lastIncident: '2024-01-12'
  },
  {
    name: 'File Storage',
    status: 'operational',
    uptime: '99.7%',
    responseTime: '200ms',
    lastIncident: '2024-01-08'
  },
  {
    name: 'Email Service',
    status: 'operational',
    uptime: '99.6%',
    responseTime: '150ms',
    lastIncident: '2024-01-03'
  }
];

const incidents = [
  {
    id: 1,
    title: 'API Rate Limiting Issue',
    status: 'resolved',
    severity: 'medium',
    description: 'Temporary rate limiting issues affecting some API endpoints',
    startTime: '2024-01-15T10:30:00Z',
    endTime: '2024-01-15T12:45:00Z',
    duration: '2h 15m'
  },
  {
    id: 2,
    title: 'Database Connection Pool Exhaustion',
    status: 'resolved',
    severity: 'high',
    description: 'Database connection pool was exhausted causing timeouts',
    startTime: '2024-01-10T14:20:00Z',
    endTime: '2024-01-10T16:30:00Z',
    duration: '2h 10m'
  },
  {
    id: 3,
    title: 'CDN Cache Miss Spike',
    status: 'resolved',
    severity: 'low',
    description: 'Increased cache miss rate causing slower response times',
    startTime: '2024-01-05T09:15:00Z',
    endTime: '2024-01-05T10:30:00Z',
    duration: '1h 15m'
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
      return AlertTriangle;
    case 'outage':
      return XCircle;
    default:
      return Clock;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'low':
      return 'text-blue-600 bg-blue-100';
    case 'medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'high':
      return 'text-red-600 bg-red-100';
    case 'critical':
      return 'text-red-800 bg-red-200';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export default function StatusPage() {
  return (
    <MainLayout
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incidents."
      keywords="system status, uptime, service status, incidents, monitoring, performance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                System <span className="text-blue-600">Status</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Real-time status of all our services and systems. We're committed to transparency and reliability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-lg font-semibold mb-4">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  All Systems Operational
                </div>
                <p className="text-gray-600">Last updated: {new Date().toLocaleString()}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Status</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => {
                    const StatusIcon = getStatusIcon(service.status);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-white p-6 rounded-lg shadow-md"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Uptime</span>
                            <span className="font-semibold">{service.uptime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Response Time</span>
                            <span className="font-semibold">{service.responseTime}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Last Incident</span>
                            <span className="text-sm text-gray-500">{service.lastIncident}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
                <div className="space-y-4">
                  {incidents.map((incident, index) => (
                    <motion.div
                      key={incident.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                          <p className="text-gray-600">{incident.description}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                            {incident.severity}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(incident.status)}`}>
                            {incident.status}
                          </span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Start Time:</span> {new Date(incident.startTime).toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">End Time:</span> {new Date(incident.endTime).toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {incident.duration}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  If you're experiencing issues not reflected in our status page, please contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}