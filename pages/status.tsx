import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  description: string;
  lastChecked: string;
  uptime: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  description: string;
  startedAt: string;
  resolvedAt?: string;
  affectedServices: string[];
}

export default function StatusPage() {
  const [services, setServices] = useState<ServiceStatus[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    fetchStatusData();
    const interval = setInterval(fetchStatusData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStatusData = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setServices([
        {
          id: '1',
          name: 'Website',
          status: 'operational',
          description: 'Main website and all pages',
          lastChecked: new Date().toISOString(),
          uptime: '99.9%'
        },
        {
          id: '2',
          name: 'API Services',
          status: 'operational',
          description: 'REST API and GraphQL endpoints',
          lastChecked: new Date().toISOString(),
          uptime: '99.8%'
        },
        {
          id: '3',
          name: 'Database',
          status: 'operational',
          description: 'Primary and replica databases',
          lastChecked: new Date().toISOString(),
          uptime: '99.9%'
        },
        {
          id: '4',
          name: 'CDN',
          status: 'operational',
          description: 'Content delivery network',
          lastChecked: new Date().toISOString(),
          uptime: '99.7%'
        },
        {
          id: '5',
          name: 'Email Services',
          status: 'degraded',
          description: 'Email delivery and notifications',
          lastChecked: new Date().toISOString(),
          uptime: '98.5%'
        },
        {
          id: '6',
          name: 'Monitoring',
          status: 'operational',
          description: 'System monitoring and alerts',
          lastChecked: new Date().toISOString(),
          uptime: '99.9%'
        }
      ]);

      setIncidents([
        {
          id: '1',
          title: 'Email delivery delays',
          status: 'monitoring',
          description: 'Some email notifications may experience delays of up to 15 minutes. We are monitoring the situation.',
          startedAt: '2024-01-15T10:30:00Z',
          affectedServices: ['Email Services']
        }
      ]);

      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1000);
  };

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
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'outage':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case 'investigating':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'identified':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'monitoring':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'resolved':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const overallStatus = services.length > 0 
    ? services.every(s => s.status === 'operational') 
      ? 'operational' 
      : services.some(s => s.status === 'outage')
        ? 'outage'
        : 'degraded'
    : 'unknown';

  return (
    <Layout title="System Status - Zion Tech Group" description="Real-time status of Zion Tech Group services and systems">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System Status
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Real-time status of our services and systems
            </p>
            
            {/* Overall Status */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border ${getStatusColor(overallStatus)}`}>
              {getStatusIcon(overallStatus)}
              <span className="font-semibold">
                {overallStatus === 'operational' ? 'All Systems Operational' :
                 overallStatus === 'degraded' ? 'Some Services Degraded' :
                 overallStatus === 'outage' ? 'Service Outage' : 'Status Unknown'}
              </span>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated.toLocaleString()}</span>
            </div>
            <button
              onClick={fetchStatusData}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
          </motion.div>

          {/* Services Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-white font-medium">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last checked:</span>
                      <span className="text-white">
                        {new Date(service.lastChecked).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Incidents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Incidents</h2>
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{incident.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-2 py-1 rounded border ${getIncidentStatusColor(incident.status)}`}>
                            {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                          </span>
                          <span className="text-gray-400">
                            Started: {new Date(incident.startedAt).toLocaleString()}
                          </span>
                          {incident.resolvedAt && (
                            <span className="text-gray-400">
                              Resolved: {new Date(incident.resolvedAt).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Affected services:</span>
                      <div className="flex flex-wrap gap-2">
                        {incident.affectedServices.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="px-2 py-1 bg-white/10 rounded text-sm text-white"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-gray-300">No recent incidents</p>
              </div>
            )}
          </motion.div>

          {/* Status History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Status History</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-center py-8">
                <p className="text-gray-300 mb-4">View detailed status history and metrics</p>
                <a
                  href="https://status.ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>View Full Status Page</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                If you're experiencing issues not reflected in our status page, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}