import React from 'react';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'AI Analytics Dashboard | Zion Tech Group',
  description: 'Advanced AI-powered analytics dashboard solutions',
  keywords: 'AI analytics, dashboard, business intelligence, data visualization',
  openGraph: {
    title: 'AI Analytics Dashboard | Zion Tech Group',
    description: 'Advanced AI-powered analytics dashboard solutions',
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
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered analytics dashboard solutions for data-driven businesses
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
