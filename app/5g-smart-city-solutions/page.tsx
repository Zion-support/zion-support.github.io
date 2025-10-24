'use client'
import React from 'react'

export default function FiveGSmartCitySolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform urban infrastructure with 5G-powered smart city technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Traffic Management</h3>
              <p className="text-gray-300">Real-time traffic monitoring and optimization using 5G connectivity.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Environmental Monitoring</h3>
              <p className="text-gray-300">Monitor air quality, noise levels, and environmental conditions in real-time.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Public Safety</h3>
              <p className="text-gray-300">Enhanced public safety through connected surveillance and emergency response systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}