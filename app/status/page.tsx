'use client';

import React from 'react';
import { 
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Server,
  Database,
  Cloud,
  Zap
} from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    {
      name: "AI Workflow Automation",
      status: "operational",
      uptime: "99.9%",
      responseTime: "245ms",
      lastIncident: "None"
    },
    {
      name: "AI Customer Support",
      status: "operational",
      uptime: "99.8%",
      responseTime: "189ms",
      lastIncident: "None"
    },
    {
      name: "AI Data Analytics",
      status: "operational",
      uptime: "99.9%",
      responseTime: "312ms",
      lastIncident: "None"
    },
    {
      name: "AI Content Generation",
      status: "operational",
      uptime: "99.7%",
      responseTime: "456ms",
      lastIncident: "None"
    },
    {
      name: "Cloud Infrastructure",
      status: "operational",
      uptime: "99.9%",
      responseTime: "156ms",
      lastIncident: "None"
    },
    {
      name: "Database Services",
      status: "operational",
      uptime: "99.9%",
      responseTime: "89ms",
      lastIncident: "None"
    }
  ];

  const recentIncidents = [
    {
      title: "All systems operational",
      status: "resolved",
      date: "2024-01-10",
      description: "No incidents reported in the last 30 days."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            System Status
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Real-time status of all our services and systems. We're committed to providing reliable service.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-2xl font-bold text-green-400">All Systems Operational</span>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-400">Overall Uptime</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">245ms</h3>
              <p className="text-gray-400">Avg Response Time</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">6</h3>
              <p className="text-gray-400">Services Monitored</p>
            </div>
            
            <div className="cyber-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">0</h3>
              <p className="text-gray-400">Active Incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Status
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time status of all our AI and IT services.
            </p>
          </div>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <p className={`text-sm font-semibold ${getStatusColor(service.status)}`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-sm text-gray-400">Uptime</p>
                      <p className="text-lg font-bold text-white">{service.uptime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Response Time</p>
                      <p className="text-lg font-bold text-white">{service.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Last Incident</p>
                      <p className="text-lg font-bold text-white">{service.lastIncident}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Incidents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              History of recent incidents and maintenance windows.
            </p>
          </div>
          
          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(incident.status)}
                    <div>
                      <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                      <p className="text-gray-300">{incident.description}</p>
                      <p className="text-sm text-gray-400 mt-2">{incident.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    incident.status === 'resolved' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;