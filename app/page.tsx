import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">Zion Tech Group</h1>
        <p className="text-lg text-gray-300 mb-10">Production build restored. Explore our services and get started.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="bg-purple-600 hover:bg-purple-700 rounded-lg px-6 py-3 font-semibold inline-flex items-center">
            Explore Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/contact" className="border border-white/30 hover:bg-white hover:text-slate-900 rounded-lg px-6 py-3 font-semibold inline-flex items-center">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
