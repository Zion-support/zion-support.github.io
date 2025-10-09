import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.9%' },
    { name: 'API Services', status: 'operational', uptime: '99.8%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' },
    { name: 'CDN', status: 'operational', uptime: '99.95%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              System Status
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Real-time system monitoring and status updates
            </p>
          </div>
        </section>

        {/* Status Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 font-medium">{service.status}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">Uptime: {service.uptime}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;