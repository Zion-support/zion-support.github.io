'use client'
import React from 'react'

export default function FiveGImplementationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Implementation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Complete 5G network implementation services for businesses of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Network Planning</h3>
              <p className="text-gray-300">Comprehensive 5G network design and planning for optimal coverage and performance.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure Setup</h3>
              <p className="text-gray-300">Complete infrastructure deployment including base stations, antennas, and core network components.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Testing & Optimization</h3>
              <p className="text-gray-300">Rigorous testing and optimization to ensure peak performance and reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}