import React from 'react'
import Link from 'next/link'

export default function MicrosaasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Social Media Scheduler</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Advanced artificial intelligence solutions for modern businesses.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Advanced technology implementation</li>
              <li>Scalable and secure solutions</li>
              <li>24/7 support and maintenance</li>
              <li>Custom solutions tailored to your needs</li>
              <li>Proven track record of success</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">
                  Optimized solutions designed for maximum performance and efficiency.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade reliability and security standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}