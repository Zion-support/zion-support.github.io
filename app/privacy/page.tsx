'use client';
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Privacy Policy
          </h1>
          <div className="cyber-card p-8">
            <p className="text-gray-300 mb-4">
              This privacy policy is currently being updated. Please contact us at 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                {' '}kleber@ziontechgroup.com
              </a> for any privacy-related questions.
            </p>
            <Link
              to="/"
              className="cyber-button inline-flex items-center mt-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
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

export default PrivacyPage;