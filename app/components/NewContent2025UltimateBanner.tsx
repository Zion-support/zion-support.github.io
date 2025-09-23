"use client";

import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBanner(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Revolutionary AI Content</h2>
          <p className="text-lg md:text-xl opacity-90 mt-4">
            Discover our latest AI insights, enterprise solutions, and implementation guides.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/blog" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Read the Blog →
          </Link>
          <Link href="/resources" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700">
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
}