
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Service Status | Zion Tech Group</title>
        <meta name="description" content="Check the current status of our services and systems. Real-time monitoring and status updates." />
        <meta name="keywords" content="system status, service status, uptime, monitoring, service availability" />
        <link rel="canonical" href="https://ziontechgroup.com/status" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              System Status
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Real-time service monitoring
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Monitor the status of our services and systems in real-time. All systems operational.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StatusPage;

