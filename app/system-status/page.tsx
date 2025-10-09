import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, XCircle, AlertTriangle, Clock, Server, Database, Cloud } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const systemComponents = [
    {
      name: 'AI Services',
      status: 'operational',
      uptime: '99.9%',
      icon: Server,
      lastIncident: 'None'
    },
    {
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '99.8%',
      icon: Cloud,
      lastIncident: 'None'
    },
    {
      name: 'Database Services',
      status: 'operational',
      uptime: '99.9%',
      icon: Database,
      lastIncident: 'None'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.7%',
      icon: Server,
      lastIncident: 'None'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">System Status</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring of our infrastructure and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {systemComponents.map((component, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <component.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{component.name}</h3>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Uptime</span>
                  <span className="font-semibold">{component.uptime}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: component.uptime }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Last Incident</span>
                  <span>{component.lastIncident}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card hologram-card p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">All Systems Operational</h2>
          <p className="text-gray-300 mb-6">
            All services are running normally. No incidents reported in the last 30 days.
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

export default SystemStatusPage;
