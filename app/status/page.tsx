'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, Clock, Server, Database, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'Website',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: 'No incidents in the last 30 days'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.8%',
      lastIncident: 'No incidents in the last 30 days'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: 'No incidents in the last 30 days'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: 'No incidents in the last 30 days'
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
        <meta name="description" content="Real-time system status and uptime information for Zion Tech Group services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                System Status
              </h1>
              <p className="text-xl text-gray-300">
                Real-time status of our services and infrastructure
              </p>
            </div>

            <div className="cyber-card p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="font-semibold">All services are running normally</span>
                </div>
              </div>
              <p className="text-gray-300">
                All our services are currently operational. We monitor our systems 24/7 to ensure maximum uptime.
              </p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        <p className="text-sm text-gray-300">{service.lastIncident}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </div>
                      <div className="text-sm text-gray-400">Uptime: {service.uptime}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                Last updated: {new Date().toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                For technical support, contact us at{' '}
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

export default StatusPage;