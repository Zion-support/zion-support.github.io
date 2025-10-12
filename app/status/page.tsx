import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Status - Zion Tech Group | System Status</title>
        <meta name="description" content="Check the current status of Zion Tech Group services and systems." />
      </Helmet>
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            System Status
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            All systems are operational.
          </p>
        </div>
      </section>
    </div>
  )
}