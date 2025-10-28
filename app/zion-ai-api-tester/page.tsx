import React from 'react';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Zion AI API Tester | Zion Tech Group',
  description: 'AI-powered API testing and validation tool',
  keywords: 'API testing, AI, validation, automation, testing tools',
  openGraph: {
    title: 'Zion AI API Tester | Zion Tech Group',
    description: 'AI-powered API testing and validation tool',
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
              Zion AI API Tester
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered API testing and validation tool for better development
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
