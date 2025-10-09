import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'AI Services', status: 'operational', uptime: '99.9%' },
    { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.8%' },
    { name: 'API Services', status: 'operational', uptime: '99.7%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">System Status</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time status of our services and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
              </div>
              <div className="text-gray-300">
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Uptime: {service.uptime}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-8 text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">All Systems Operational</h2>
          <p className="text-gray-300 mb-6">
            All services are running normally. No incidents reported.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StatusPage;
