'use client'
import React from 'react'

export default function FiveGEdgeComputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Edge Computing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Deploy computing resources at the edge of 5G networks for ultra-low latency applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Ultra-Low Latency</h3>
              <p className="text-gray-300">Process data at the edge for sub-millisecond response times.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Distributed Processing</h3>
              <p className="text-gray-300">Distribute computing workloads across edge nodes for optimal performance.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
              <p className="text-gray-300">Enable real-time data processing and analytics at the network edge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}