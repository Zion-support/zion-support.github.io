import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Zion Tech Group',
  description: 'AI, cloud, and micro SaaS solutions',
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Zion Tech Group</h1>
        <p className="text-gray-300 mb-8">Production-ready minimal homepage. Explore services or contact us.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/services" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold">Explore Services</Link>
          <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold">Contact</Link>
        </div>
      </div>
    </main>
  )
}

