'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Service Status</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Real-time status of all our services and systems.
            </p>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
              <h3 className="text-green-400 font-semibold mb-2">All Services Online</h3>
              <p className="text-gray-300">All services are operating normally.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatusPage;