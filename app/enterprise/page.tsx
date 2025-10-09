'use client';
import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Shield, Users, Award } from 'lucide-react';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center">
          <div className="text-6xl mb-6">🏢</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive enterprise-grade AI and IT solutions
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            This page is currently under development. Please contact us for more information about our enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              Call (302) 464-0950
            </a>
            <Link
              to="/services"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              View Our Services
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

export default EnterprisePage;