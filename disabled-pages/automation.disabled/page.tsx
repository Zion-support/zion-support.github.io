import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Analytics - Zion Holdings",
  description: "Advanced analytics and data insights for your business"
}

export default function AnalyticsPage() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Analytics</h1>
          <p className="text-xl text-gray-300">
            Advanced analytics and data insights for your business.
          </p>
        </div>
      </div>
    </div>
  )
}