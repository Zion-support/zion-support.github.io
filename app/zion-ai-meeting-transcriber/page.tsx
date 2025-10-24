import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zion Ai Meeting Transcriber - Zion Tech Group',
  description: 'Professional zion ai meeting transcriber services by Zion Tech Group. Advanced AI and IT solutions for modern businesses.',
}

export default function ZionAiMeetingTranscriber() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Ai Meeting Transcriber
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional zion ai meeting transcriber services and solutions.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our zion ai meeting transcriber services are currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}