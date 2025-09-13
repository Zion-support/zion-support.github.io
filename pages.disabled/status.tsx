import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, AlertCircle, XCircle, Clock, 
  Brain, Atom, Shield, Rocket, Globe,
  TrendingUp, Award, Sparkles, ExternalLink,
  Activity, Server, Database, Wifi
} from 'lucide-react';

export default function Status() {
  const services = [
    {
      name: 'AI Consciousness Platform',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '45ms',
      lastIncident: 'None',
      icon: <Brain className="w-6 h-6" />,
      category: 'AI Services'
    },
    {
      name: 'Quantum AI Fusion Platform',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '52ms',
      lastIncident: 'None',
      icon: <Atom className="w-6 h-6" />,
      category: 'Quantum Services'
    },
    {
      name: 'Autonomous Business Operations',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '38ms',
      lastIncident: 'None',
      icon: <Rocket className="w-6 h-6" />,
      category: 'Business Services'
    },
    {
      name: 'IT Asset Management',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '41ms',
      lastIncident: 'None',
      icon: <Shield className="w-6 h-6" />,
      category: 'IT Services'
    },
    {
      name: 'Quantum Neural Networks',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '67ms',
      lastIncident: 'None',
      icon: <Brain className="w-6 h-6" />,
      category: 'Quantum Services'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '23ms',
      lastIncident: 'None',
      icon: <Server className="w-6 h-6" />,
      category: 'Infrastructure'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms',
      lastIncident: 'None',
      icon: <Database className="w-6 h-6" />,
      category: 'Infrastructure'
    },
    {
      name: 'Network Infrastructure',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '8ms',
      lastIncident: 'None',
      icon: <Wifi className="w-6 h-6" />,
      category: 'Infrastructure'
    }
  ];

  const overallStatus = {
    status: 'operational',
    uptime: '99.98%',
    responseTime: '35ms',
    lastIncident: 'None',
    totalServices: services.length,
    operationalServices: services.filter(s => s.status === 'operational').length
  };

  const recentIncidents = [
    {
      title: 'All systems operational',
      description: 'No incidents reported in the last 30 days',
      status: 'resolved',
      date: '2025-01-15',
      duration: '0 minutes'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'degraded':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'outage':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const categories = [
    { name: 'All Services', count: services.length, active: true },
    { name: 'AI Services', count: 1, active: false },
    { name: 'Quantum Services', count: 2, active: false },
    { name: 'Business Services', count: 1, active: false },
    { name: 'IT Services', count: 1, active: false },
    { name: 'Infrastructure', count: 3, active: false }
  ];

  return (
    <>
      <Head>
        <title>Service Status - Zion Tech Group</title>
        <meta name="description" content="Real-time status of Zion Tech Group's AI, quantum computing, and technology services. Monitor uptime, performance, and incident reports." />
        <meta name="keywords" content="service status, uptime, performance monitoring, incident reports, AI services status, quantum computing status" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Activity className="w-4 h-4 mr-2" />
                Real-time Status
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Service Status
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Monitor the real-time status of all our AI, quantum computing, and technology services. 
                Track uptime, performance, and incident reports.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Overall System Status</h2>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      {getStatusIcon(overallStatus.status)}
                      <h3 className="text-3xl font-bold text-white">All Systems Operational</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Overall Uptime</div>
                        <div className="text-2xl font-bold text-green-400">{overallStatus.uptime}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Average Response Time</div>
                        <div className="text-2xl font-bold text-blue-400">{overallStatus.responseTime}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Total Services</div>
                        <div className="text-2xl font-bold text-purple-400">{overallStatus.totalServices}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Operational Services</div>
                        <div className="text-2xl font-bold text-green-400">{overallStatus.operationalServices}</div>
                      </div>
                    </div>
                    
                    <div className="text-gray-300">
                      <strong>Last Incident:</strong> {overallStatus.lastIncident}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    category.active
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Status Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Service Status</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="mr-3">{service.icon}</div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{service.name}</h3>
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gray-400">Uptime</div>
                        <div className="text-green-400 font-semibold">{service.uptime}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Response Time</div>
                        <div className="text-blue-400 font-semibold">{service.responseTime}</div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      <strong>Last Incident:</strong> {service.lastIncident}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
              
              <div className="space-y-6">
                {recentIncidents.map((incident, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{incident.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{incident.description}</p>
                    
                    <div className="flex items-center space-x-6 text-gray-400 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(incident.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Activity className="w-4 h-4 mr-2" />
                        Duration: {incident.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Performance Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { label: 'Average Response Time', value: '35ms', icon: <Activity className="w-8 h-8 text-blue-400" /> },
                  { label: 'Peak Response Time', value: '89ms', icon: <TrendingUp className="w-8 h-8 text-green-400" /> },
                  { label: 'Error Rate', value: '0.01%', icon: <AlertCircle className="w-8 h-8 text-yellow-400" /> },
                  { label: 'Total Requests', value: '2.4M', icon: <Server className="w-8 h-8 text-purple-400" /> }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">{metric.icon}</div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to status updates and get notified about incidents, maintenance, 
                and performance improvements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you're experiencing issues with our services, our support team is available 24/7 
                to help you resolve any problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 transform hover:scale-105">
                  Contact Support
                  <Activity className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}