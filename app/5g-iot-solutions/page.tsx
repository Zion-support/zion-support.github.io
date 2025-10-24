'use client'
import React from 'react'

export default function FiveGIoTSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G IoT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect and manage IoT devices with the power of 5G networks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Device Management</h3>
              <p className="text-gray-300">Centralized management of thousands of IoT devices with 5G connectivity.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
              <p className="text-gray-300">Monitor IoT devices and collect data in real-time with ultra-low latency.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-300">Build scalable IoT solutions that can grow with your business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}