'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/status" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Status Page
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This page provides detailed system status information and monitoring data.
          </p>
          
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">System Overview</h2>
            <p className="text-gray-300 mb-6">
              All systems are currently operational. For real-time status updates, please visit our main status page.
            </p>
            <Link
              href="/status"
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              View Live Status
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SystemStatusPage;