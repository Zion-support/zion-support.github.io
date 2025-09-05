import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Activity } from 'lucide-react';
import Layout from '../components/Layout';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  lastIncident?: string;
}

const mockServices: ServiceStatus[] = [
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '45ms'
  },
  {
    name: 'Web Application',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '120ms'
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '25ms'
  },
  {
    name: 'CDN',
    status: 'degraded',
    uptime: '98.5%',
    responseTime: '200ms',
    lastIncident: 'Increased latency in EU region'
  },
  {
    name: 'Authentication',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '60ms'
  },
  {
    name: 'File Storage',
    status: 'operational',
    uptime: '99.7%',
    responseTime: '80ms'
  }
];

const recentIncidents = [
  {
    id: 1,
    title: 'CDN Latency Issues',
    status: 'resolved',
    time: '2 hours ago',
    description: 'Increased latency detected in EU region. Issue resolved after 15 minutes.'
  },
  {
    id: 2,
    title: 'Database Maintenance',
    status: 'completed',
    time: '1 day ago',
    description: 'Scheduled maintenance completed successfully. No downtime experienced.'
  },
  {
    id: 3,
    title: 'API Rate Limiting',
    status: 'resolved',
    time: '3 days ago',
    description: 'Temporary rate limiting applied due to unusual traffic patterns.'
  }
];

export default function StatusPage() {
  const [services, setServices] = useState<ServiceStatus[]>(mockServices);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

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
        return 'text-green-500';
      case 'degraded':
        return 'text-yellow-500';
      case 'outage':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Service Outage';
      default:
        return 'Unknown';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Real-time status of Zion Tech Group services and systems. Monitor uptime, performance, and incident reports."
      keywords="system status, uptime, service status, monitoring, incidents, Zion Tech Group"
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Header */}
        <section className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  System Status
                </h1>
                <p className="text-gray-300">
                  Real-time monitoring of our services and infrastructure
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Last updated</p>
                  <p className="text-white font-medium">
                    {lastUpdated.toLocaleTimeString()}
                  </p>
                </div>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-5 h-5 text-white ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8"
            >
              <div className="flex items-center justify-center space-x-4">
                {getStatusIcon(overallStatus)}
                <div className="text-center">
                  <h2 className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>
                    {getStatusText(overallStatus)}
                  </h2>
                  <p className="text-gray-300 mt-1">
                    All systems are running normally
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {service.name}
                    </h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Status</span>
                      <span className={getStatusColor(service.status)}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white">{service.uptime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white">{service.responseTime}</span>
                    </div>
                    {service.lastIncident && (
                      <div className="pt-2 border-t border-white/20">
                        <p className="text-xs text-yellow-400">
                          {service.lastIncident}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Incidents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2" />
                Recent Incidents
              </h3>
              
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <div
                    key={incident.id}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {incident.status === 'resolved' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : incident.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-medium">
                          {incident.title}
                        </h4>
                        <span className="text-sm text-gray-400">
                          {incident.time}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">
                        {incident.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}