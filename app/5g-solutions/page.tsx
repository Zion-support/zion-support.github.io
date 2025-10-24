'use client'
import React from 'react'

export default function FiveGSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive 5G solutions to transform your business operations and connectivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Network Deployment</h3>
              <p className="text-gray-300">Complete 5G network deployment and optimization services.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Application Development</h3>
              <p className="text-gray-300">Custom applications designed to leverage 5G capabilities.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Integration Services</h3>
              <p className="text-gray-300">Seamless integration of 5G solutions with existing systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}