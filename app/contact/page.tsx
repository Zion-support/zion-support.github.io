import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Professional contact services and solutions for modern businesses.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Contact | Zion Tech Group',
    description: 'Professional contact services and solutions for modern businesses.',
  },
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional contact services and solutions for modern businesses.
          </p>
        </div>
      </div>
  )
}