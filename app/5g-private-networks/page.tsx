'use client'
import React from 'react'

export default function FiveGPrivateNetworksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            5G Private Networks
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Deploy dedicated 5G private networks for enhanced security and control.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
              <p className="text-gray-300">Dedicated network infrastructure with complete control over security policies.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Custom Configuration</h3>
              <p className="text-gray-300">Tailor network parameters to meet specific business requirements.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Isolated Environment</h3>
              <p className="text-gray-300">Complete network isolation for maximum data protection and privacy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}