'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">System Status</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">All Systems Operational</h2>
            <p className="text-gray-300 mb-6">
              Our systems are running smoothly with 99.9% uptime.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              For status updates or issues, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StatusPage;