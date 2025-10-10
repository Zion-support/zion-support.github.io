'use client';
import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const services = [
    {
      name: 'AI Services API',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45 ms',
      lastIncident: '2024-01-15',
      description: 'Core AI and machine learning services'
    },
    {
      name: 'Micro SAAS Platform',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '32 ms',
      lastIncident: '2024-01-10',
      description: 'Micro SAAS tools and applications'
    },
    {
      name: 'IT Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '28 ms',
      lastIncident: '2024-01-05',
      description: 'Core IT infrastructure and hosting'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '15 ms',
      lastIncident: '2024-01-12',
      description: 'Database and data storage services'
    },
    {
      name: 'Cloud Services',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '38 ms',
      lastIncident: '2024-01-08',
      description: 'Cloud computing and storage services'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '22 ms',
      lastIncident: '2024-01-03',
      description: 'Security monitoring and protection'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - AI Services',
      status: 'resolved',
      severity: 'low',
      startTime: '2024-01-15T02:00:00Z',
      endTime: '2024-01-15T04:00:00Z',
      description: 'Routine maintenance window for AI services infrastructure'
    },
    {
      id: 2,
      title: 'Database Performance Issue',
      status: 'resolved',
      severity: 'medium',
      startTime: '2024-01-10T14:30:00Z',
      endTime: '2024-01-10T16:45:00Z',
      description: 'Temporary performance degradation in database queries'
    }
  ];

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

  return (
    <>
      <SEOOptimizer 
        title="System Status - Service Health | Zion Tech Group"
        description="Real-time status of all Zion Tech Group services. Monitor uptime, performance, and incidents."
        keywords="system status, service health, uptime, incidents, monitoring"
        canonicalUrl="https://ziontechgroup.com/status"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                System Status
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Real-time status of all our services and infrastructure.
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Last updated: {lastUpdated.toLocaleString()}</span>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-white">Overall System Status</h2>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">All Systems Operational</span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime (30 days)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">32ms</div>
                  <div className="text-gray-400">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                  <div className="text-gray-400">Active Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
                  <div className="text-gray-400">Services Monitored</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Status</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 h-full border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      {getStatusIcon(service.status)}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-green-400 font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-blue-400 font-medium">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Last Incident:</span>
                        <span className="text-gray-300">{service.lastIncident}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{incident.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
                    <span>Ended: {new Date(incident.endTime).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you're experiencing issues not reflected in our status page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default StatusPage;