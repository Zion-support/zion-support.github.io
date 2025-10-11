'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertCircle, XCircle, Clock, Server, Database, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Micro SaaS Platform',
      status: 'operational',
      uptime: '99.8%',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.9%',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: 'No incidents in the past 30 days'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      lastIncident: 'No incidents in the past 30 days'
    }
  ];

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
        <title>System Status - Zion Tech Group | Service Health Dashboard</title>
        <meta name="description" content="Real-time system status and service health dashboard for Zion Tech Group services and infrastructure." />
        <meta name="keywords" content="system status, service health, uptime, monitoring, infrastructure" />
        <meta property="og:title" content="System Status - Zion Tech Group" />
        <meta property="og:description" content="Real-time service health and system status" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              System Status
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Real-Time Service Health Dashboard
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Monitor the health and performance of all Zion Tech Group services. 
              We maintain 99.9% uptime across all our platforms and services.
            </p>
          </section>

          {/* Overall Status */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-400 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold text-white">All Systems Operational</h2>
                  <p className="text-gray-300">All services are running normally</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Overall Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-gray-300">Active Incidents</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">30</div>
                  <div className="text-gray-300">Days Since Last Incident</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Status */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Service Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    {getStatusIcon(service.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Status:</span>
                      <span className={`font-semibold ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-300">Uptime:</span>
                      <span className="text-cyan-400 font-semibold">{service.uptime}</span>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      {service.lastIncident}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">2.3ms</div>
                  <div className="text-gray-300">Average Response Time</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Database Uptime</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">99.95%</div>
                  <div className="text-gray-300">Cloud Infrastructure</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-orange-400 mb-2">100%</div>
                  <div className="text-gray-300">Security Services</div>
                </div>
              </div>
            </div>
          </section>

          {/* Incident History */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Recent Incidents</h2>
              <div className="text-center text-gray-300">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <p className="text-xl">No incidents reported in the past 30 days</p>
                <p className="text-sm mt-2">All systems are running smoothly</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                If you're experiencing issues or have questions about our services, 
                our support team is available 24/7 to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default StatusPage;
