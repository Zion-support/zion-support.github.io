'use client'
import React from 'react'

export default function FiveGNetworkInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Network Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Build robust and scalable 5G network infrastructure for your organization.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Core Network</h3>
              <p className="text-gray-300">Deploy 5G core network components for high-performance connectivity.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">RAN Infrastructure</h3>
              <p className="text-gray-300">Radio Access Network infrastructure for optimal coverage and capacity.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
              <p className="text-gray-300">Enterprise-grade security and compliance for 5G networks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}