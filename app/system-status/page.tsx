
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SystemStatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Service Monitoring | Zion Tech Group</title>
        <meta name="description" content="Monitor the status of our systems and services. Real-time updates on service availability and performance." />
        <meta name="keywords" content="system status, service monitoring, uptime, availability, performance monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/system-status" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <section className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              System Status
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Service monitoring dashboard
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Track the performance and availability of our services in real-time.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SystemStatusPage;

