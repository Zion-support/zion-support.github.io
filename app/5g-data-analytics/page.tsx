'use client'
import React from 'react'

export default function FiveGDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Data Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Leverage the power of 5G networks for real-time data analytics and insights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Processing</h3>
              <p className="text-gray-300">Process massive amounts of data in real-time with 5G's ultra-low latency.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Edge Computing</h3>
              <p className="text-gray-300">Deploy analytics at the edge for faster decision making and reduced bandwidth usage.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">AI Integration</h3>
              <p className="text-gray-300">Combine 5G with AI for intelligent data processing and predictive analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}