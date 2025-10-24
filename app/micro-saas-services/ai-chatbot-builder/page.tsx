'use client'
import React from 'react'

export default function Page() {
  return (
    <div>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional micro saas services services and solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
              <p className="text-gray-300">Professional micro saas services solutions tailored to your needs.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and maintenance for your micro saas services infrastructure.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-300">Build scalable micro saas services solutions that grow with your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
