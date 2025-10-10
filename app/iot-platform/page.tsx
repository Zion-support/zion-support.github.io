'use client';

import React from 'react';
import { Wifi, Cpu, Database, Shield, Globe, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const IoTPlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="IoT Platform - Zion Tech Group"
        description="Comprehensive IoT platform solutions for connected devices and smart infrastructure."
        keywords="IoT platform, connected devices, smart infrastructure, IoT solutions"
      />
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            IoT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IoT platform solutions for connected devices and smart infrastructure.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoTPlatformPage;