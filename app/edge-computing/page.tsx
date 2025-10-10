'use client';

import React from 'react';
import { Cpu, Zap, Globe, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const EdgeComputingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Edge Computing - Zion Tech Group"
        description="Edge computing solutions for low-latency, high-performance applications."
        keywords="edge computing, low latency, distributed computing, edge solutions"
      />
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Edge
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Edge computing solutions for low-latency, high-performance applications.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdgeComputingPage;