import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SystemStatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            System Status
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">All Systems Operational</h2>
            <p className="text-gray-300 mb-6">
              Real-time status of all our services and infrastructure.
            </p>
            
            <div className="space-y-4">
              <div className="quantum-card p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🟢</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">API Services</h3>
                    <p className="text-gray-300">Operational</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-bold">99.9%</p>
                  <p className="text-gray-400 text-sm">uptime</p>
                </div>
              </div>
              
              <div className="quantum-card p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🟢</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">Database</h3>
                    <p className="text-gray-300">Operational</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-bold">99.8%</p>
                  <p className="text-gray-400 text-sm">uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}