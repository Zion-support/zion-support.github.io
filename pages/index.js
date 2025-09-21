import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zion App - Advanced AI Services Platform
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-bold mb-4">AI-Powered Services</h3>
            <p className="text-gray-300">
              Advanced AI automation and marketplace services for the future.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-bold mb-4">Micro-SaaS Solutions</h3>
            <p className="text-gray-300">
              Innovative micro-SaaS services for 2025-2030.
            </p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <h3 className="text-xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-300">
              Comprehensive IT infrastructure and cybersecurity services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}