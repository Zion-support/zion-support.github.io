'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, Clock, Server, Database, Cloud, Shield, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemStatusPage: React.FC = () => {
  const systems = [
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      lastIncident: 'No incidents in the last 30 days',
      icon: Server
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      lastIncident: 'No incidents in the last 30 days',
      icon: Activity
    },
    {
      name: 'Database Cluster',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      lastIncident: 'No incidents in the last 30 days',
      icon: Database
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      responseTime: 'N/A',
      lastIncident: 'No incidents in the last 30 days',
      icon: Cloud
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: 'N/A',
      lastIncident: 'No incidents in the last 30 days',
      icon: Shield
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'outage':
        return <AlertTriangle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400';
      case 'degraded':
        return 'text-yellow-400';
      case 'outage':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and performance metrics for all Zion Tech Group services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                System Status
              </h1>
              <p className="text-xl text-gray-300">
                Real-time status and performance metrics for all our services
              </p>
            </div>

            {/* Overall Status */}
            <div className="cyber-card p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">All services are running normally</span>
                </div>
              </div>
              <p className="text-gray-300">
                All our systems are currently operational with excellent performance metrics. 
                We monitor our infrastructure 24/7 to ensure maximum uptime and reliability.
              </p>
            </div>

            {/* Systems Status */}
            <div className="space-y-4">
              {systems.map((system, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <system.icon className="w-6 h-6 text-cyan-400" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{system.name}</h3>
                        <p className="text-sm text-gray-300">{system.lastIncident}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className={`text-sm font-medium ${getStatusColor(system.status)}`}>
                          {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                        </div>
                        <div className="text-xs text-gray-400">Uptime: {system.uptime}</div>
                      </div>
                      {system.responseTime !== 'N/A' && (
                        <div className="text-right">
                          <div className="text-sm font-medium text-white">{system.responseTime}</div>
                          <div className="text-xs text-gray-400">Response Time</div>
                        </div>
                      )}
                      {getStatusIcon(system.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Metrics */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Average Response Time</h3>
                <div className="text-3xl font-bold text-cyan-400">85ms</div>
                <p className="text-sm text-gray-400">Last 24 hours</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Overall Uptime</h3>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <p className="text-sm text-gray-400">Last 30 days</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Active Incidents</h3>
                <div className="text-3xl font-bold text-green-400">0</div>
                <p className="text-sm text-gray-400">Currently</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                Last updated: {new Date().toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                For technical support or to report an issue, contact us at{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SystemStatusPage;