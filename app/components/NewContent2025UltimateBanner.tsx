"use client";

import Link from 'next/link';

export default function NewContent2025UltimateBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block text-xs tracking-wider opacity-80 mb-2">NEW CONTENT 2025</span>
          <h2 className="text-3xl md:text-4xl font-bold">Revolutionary AI Content</h2>
          <p className="mt-3 text-white/80">Explore our latest enterprise AI guides and resources.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog" className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold">View Blog</Link>
          <Link href="/resources" className="border border-white px-6 py-3 rounded-lg font-semibold">Resources</Link>
        </div>
      </div>
    </section>
  );
}
