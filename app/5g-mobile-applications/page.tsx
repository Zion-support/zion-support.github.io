'use client'
import React from 'react'

export default function FiveGMobileApplicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Mobile Applications
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Develop high-performance mobile applications that leverage 5G capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">High-Speed Apps</h3>
              <p className="text-gray-300">Build applications that take advantage of 5G's ultra-fast speeds.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Low Latency Features</h3>
              <p className="text-gray-300">Implement real-time features with 5G's ultra-low latency capabilities.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform</h3>
              <p className="text-gray-300">Develop for iOS and Android with optimized 5G performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}