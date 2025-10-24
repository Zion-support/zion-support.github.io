import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Leading provider of AI, cloud, blockchain, and technology solutions for modern businesses.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Leading provider of AI, cloud, blockchain, and technology solutions for modern businesses.',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Leading provider of AI, cloud, blockchain, and technology solutions for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}