import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, AlertCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
    { name: 'API Services', status: 'operational', uptime: '99.8%', lastIncident: 'None' },
    { name: 'Database', status: 'operational', uptime: '99.9%', lastIncident: 'None' },
    { name: 'CDN', status: 'operational', uptime: '99.95%', lastIncident: 'None' },
    { name: 'Email Services', status: 'operational', uptime: '99.7%', lastIncident: 'None' },
    { name: 'File Storage', status: 'operational', uptime: '99.9%', lastIncident: 'None' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-yellow-400" />;
      case 'outage':
        return <XCircle className="h-5 w-5 text-red-400" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
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
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              System Status
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive status information for all our services and systems. We maintain 99.9% uptime across all services.
            </p>
          </header>

          <div className="cyber-card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Service Status</h2>
              <div className="flex items-center text-gray-400 text-sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Last updated: Just now
              </div>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center">
                    {getStatusIcon(service.status)}
                    <span className="ml-3 text-white font-medium">{service.name}</span>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </div>
                    <div className="text-sm text-gray-400">Uptime: {service.uptime}</div>
                    <div className="text-xs text-gray-500">Last incident: {service.lastIncident}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Overall Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">All Systems</span>
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Average Uptime</span>
                  <span className="text-green-400 font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-green-400 font-semibold">45ms</span>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <div className="font-semibold text-green-400">All systems operational</div>
                  <div>No incidents in the last 30 days</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="font-semibold text-blue-400">Scheduled maintenance</div>
                  <div>Next maintenance: TBD</div>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Error Rate</span>
                  <span className="text-green-400">0.01%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Peak Load</span>
                  <span className="text-green-400">Normal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Data Transfer</span>
                  <span className="text-green-400">Stable</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-200 mb-6">
              If you're experiencing issues not reflected in our status page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SystemStatusPage;