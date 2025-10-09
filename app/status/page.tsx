import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function StatusPage() {
  const services = [
    { name: 'AI Services', status: 'operational', uptime: '99.9%' },
    { name: 'IT Services', status: 'operational', uptime: '99.8%' },
    { name: 'Micro SAAS', status: 'operational', uptime: '99.9%' },
    { name: 'API Services', status: 'operational', uptime: '99.7%' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return '🟢';
      case 'degraded':
        return '🟡';
      case 'outage':
        return '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Service Status
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">All Systems Operational</h2>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{getStatusIcon(service.status)}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{service.name}</h3>
                      <p className="text-gray-300 capitalize">{service.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold">{service.uptime}</p>
                    <p className="text-gray-400 text-sm">uptime</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center text-gray-400 text-sm">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}