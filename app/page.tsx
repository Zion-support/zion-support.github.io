import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="hero-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">AI, cloud, and micro SaaS solutions that drive measurable results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Services
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

