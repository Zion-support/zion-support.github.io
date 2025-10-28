<<<<<<< HEAD
import Navigation from '../../components/Navigation';
import ErrorBoundary from '../SimpleErrorBoundary';
import Footer from '../../components/Footer';
import { Metadata } from 'next';
=======
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/fix-errors-and-merge-to-main-c408

export const metadata: Metadata = {
  title: 'Micro SaaS Services | Zion Tech Group',
  description: 'Comprehensive micro SaaS solutions for modern businesses',
  keywords: 'micro SaaS, software as a service, business solutions, automation',
  openGraph: {
    title: 'Micro SaaS Services | Zion Tech Group',
    description: 'Comprehensive micro SaaS solutions for modern businesses',
    type: 'website',
  },
};

<<<<<<< HEAD
export default function Page() {
  return (
    <ErrorBoundary>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Comprehensive micro SaaS solutions for modern businesses
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c408
