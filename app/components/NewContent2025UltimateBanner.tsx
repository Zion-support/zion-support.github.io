"use client";

import Link from 'next/link';
import React from 'react';

export default function NewContent2025UltimateBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1 mb-4">
          <span className="text-sm">🚀 NEW CONTENT 2025</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Revolutionary AI Content</h2>
        <p className="text-lg md:text-xl text-white/80 mb-6">
          Discover cutting-edge AI insights, enterprise solutions, and transformative technologies.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/blog" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">Read Blog</Link>
          <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold">Our Services</Link>
        </div>
      </div>
    </section>
  );
}