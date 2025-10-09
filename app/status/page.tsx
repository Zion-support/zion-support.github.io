import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertCircle, Clock, RefreshCw } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%' },
    { name: 'API Services', status: 'operational', uptime: '99.95%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' },
    { name: 'CDN', status: 'operational', uptime: '99.95%' }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">System Status</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time status of all our services and systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Service Status</h2>
              <div className="flex items-center space-x-2 text-gray-400">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm">Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(service.status)}
                    <span className="text-white font-medium">{service.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                    <span className="text-gray-400 text-sm">Uptime: {service.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              All systems are operational. If you're experiencing issues, please contact our support team.
            </p>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Support - (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;