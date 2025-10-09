'use client';
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wifi, WifiOff, RefreshCw } from 'lucide-react';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const OfflinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <div className="text-6xl mb-6">📡</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            You're Offline
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please check your internet connection
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="cyber-button inline-flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <Link
              to="/"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </div>
        </div>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default OfflinePage;