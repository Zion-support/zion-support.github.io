'use client';
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, Brain, Cloud, Shield } from 'lucide-react';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Coming Soon - Meet the experts behind Zion Tech Group
          </p>
          <Link
            to="/"
            className="cyber-button inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default TeamPage;