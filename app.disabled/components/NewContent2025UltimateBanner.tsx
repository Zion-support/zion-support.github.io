"use client";

import Link from 'next/link';

export default function NewContent2025UltimateBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center bg-white/20 rounded-full px-4 py-1 text-sm">🚀 NEW CONTENT 2025</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Revolutionary AI Content</h2>
          <p className="mt-4 text-lg text-white/80">Discover cutting-edge AI insights and enterprise solutions reshaping 2025.</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="/services" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">Explore Services</Link>
          <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold">Get Started</Link>
        </div>
      </div>
    </section>
  );
}