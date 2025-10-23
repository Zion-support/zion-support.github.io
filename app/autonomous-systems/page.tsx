'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Advanced autonomous systems solutions for modern businesses." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
        <div className="container mx-auto px-4 py-16" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h1 className="text-5xl font-bold text-white mb-6" loading="lazy">
              Autonomous <span className="text-cyan-400" loading="lazy">Systems</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" loading="lazy">Advanced autonomous systems solutions for modern businesses.</p>
          </div>
        </div>
      </div>
    </>
  )
}
};
export default AutonomousSystemsPage

