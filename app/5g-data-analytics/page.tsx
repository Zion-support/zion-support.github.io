import React from 'react';
import { ErrorBoundary } from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: '5G Data Analytics | Zion Tech Group',
  description: 'Advanced 5G data analytics solutions powered by AI',
  keywords: '5G, data analytics, AI, telecommunications, network optimization',
  openGraph: {
    title: '5G Data Analytics | Zion Tech Group',
    description: 'Advanced 5G data analytics solutions powered by AI',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              5G Data Analytics
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Advanced 5G data analytics solutions powered by AI for better network performance
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
