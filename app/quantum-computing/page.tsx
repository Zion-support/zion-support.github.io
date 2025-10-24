import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quantum Computing - Zion Tech Group',
  description: 'Revolutionary quantum computing solutions for complex problem solving and advanced computational capabilities. Explore the future of computing.',
}

export default function QuantumComputing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore the future of computing with our revolutionary quantum computing solutions.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our quantum computing solutions are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}