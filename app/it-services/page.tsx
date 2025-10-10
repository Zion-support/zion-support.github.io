'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom software development, and network solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to modernize your infrastructure.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default ItServicesPage;
