
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, AlertCircle, Clock, Server, Database, Cloud } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systems = [
    { name: 'Web Servers', status: 'operational', uptime: '99.9%', icon: Server },
    { name: 'Database', status: 'operational', uptime: '99.8%', icon: Database },
    { name: 'Cloud Infrastructure', status: 'operational', uptime: '99.9%', icon: Cloud },
    { name: 'API Services', status: 'operational', uptime: '99.7%', icon: Server },
    { name: 'CDN', status: 'operational', uptime: '99.9%', icon: Cloud },
    { name: 'Monitoring', status: 'operational', uptime: '99.9%', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real-time monitoring of our infrastructure and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {systems.map((system, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <system.icon className="w-8 h-8 text-cyan-400" />
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{system.name}</h3>
                <p className="text-green-400 font-semibold mb-1">Operational</p>
                <p className="text-gray-400 text-sm">Uptime: {system.uptime}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="cyber-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">All Systems Operational</h2>
              <p className="text-gray-300 mb-6">
                Our infrastructure is running smoothly with excellent performance metrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Clock className="w-5 h-5" />
                  <span>Report Issue</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SystemStatusPage;
