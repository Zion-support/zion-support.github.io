import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Clock, Server, Database, Cloud, Shield } from 'lucide-react';
import Layout from '../components/Layout';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
  description: string;
}

const services: ServiceStatus[] = [
  {
    name: 'AI Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '120ms',
    description: 'AI-powered email responder, predictive analytics, and chatbot services'
  },
  {
    name: 'Cloud Infrastructure',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '85ms',
    description: 'Cloud hosting, storage, and compute services'
  },
  {
    name: 'IT Services',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '95ms',
    description: 'Network management, cybersecurity, and system administration'
  },
  {
    name: 'Micro SaaS Platform',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '110ms',
    description: 'Cloud Cost Guard, LLM Evaluation Suite, and other micro services'
  },
  {
    name: 'Database Services',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '45ms',
    description: 'Primary and backup database systems'
  },
  {
    name: 'API Gateway',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '75ms',
    description: 'API management and rate limiting services'
  }
];

const incidents = [
  {
    id: 1,
    title: 'Scheduled Maintenance - AI Services',
    status: 'resolved',
    severity: 'maintenance',
    startTime: '2024-01-15T02:00:00Z',
    endTime: '2024-01-15T04:00:00Z',
    description: 'Routine maintenance to update AI models and improve performance',
    affectedServices: ['AI Services', 'Micro SaaS Platform']
  },
  {
    id: 2,
    title: 'Database Performance Issue',
    status: 'resolved',
    severity: 'minor',
    startTime: '2024-01-10T14:30:00Z',
    endTime: '2024-01-10T15:45:00Z',
    description: 'Temporary performance degradation due to high query load',
    affectedServices: ['Database Services', 'API Gateway']
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    case 'degraded':
      return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    case 'outage':
      return <XCircle className="w-6 h-6 text-red-500" />;
    default:
      return <Clock className="w-6 h-6 text-gray-500" />;
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

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Real-time status of all Zion Tech Group services and systems. Monitor uptime, performance, and incidents."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                System Status
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                {getStatusIcon(overallStatus)}
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'All Systems Operational' : 
                   overallStatus === 'degraded' ? 'Some Services Degraded' : 
                   'Service Outage'}
                </span>
              </div>
              <p className="text-gray-600">
                Last updated: {lastUpdated.toLocaleString()}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Uptime:</span>
                        <span className="font-semibold text-gray-900">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response Time:</span>
                        <span className="font-semibold text-gray-900">{service.responseTime}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{incident.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>
                            {new Date(incident.startTime).toLocaleString()} - {new Date(incident.endTime).toLocaleString()}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(incident.severity)}`}>
                            {incident.severity}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(incident.status)}`}>
                            {incident.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{incident.description}</p>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Affected Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* System Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">System Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Server, title: 'Server Uptime', value: '99.95%', color: 'text-green-600' },
                  { icon: Database, title: 'Database Performance', value: 'Excellent', color: 'text-green-600' },
                  { icon: Cloud, title: 'Cloud Resources', value: 'Normal', color: 'text-blue-600' },
                  { icon: Shield, title: 'Security Status', value: 'Secure', color: 'text-green-600' }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center"
                  >
                    <metric.icon className="w-8 h-8 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                    <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 mb-6">
                If you're experiencing issues not reflected in this status page, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Email Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                >
                  Call Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}