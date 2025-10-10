'use client';
import React, { lazy, Suspense } from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertTriangle, ArrowRight, Phone, Mail } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GDPR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about our commitment to GDPR compliance and your data protection rights.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default GDPRPage;