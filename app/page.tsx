import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Enterprise AI, cloud, and micro‑SaaS solutions.'
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">Zion Tech Group</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise AI, cloud, and micro‑SaaS solutions.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">Explore Services</Link>
          <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold">Get Started</Link>
        </div>
      </main>
    </div>
  );
}