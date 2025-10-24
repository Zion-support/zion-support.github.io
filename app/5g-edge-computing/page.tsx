import React from 'react'
import Link from 'next/link'

export default function FiveGEdgeComputingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">5G Edge Computing Solutions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Transform your business with our cutting-edge 5G edge computing solutions. 
              Reduce latency, improve performance, and enable real-time applications with 
              our advanced edge infrastructure.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Ultra-low latency for real-time applications</li>
              <li>Improved data processing and analytics</li>
              <li>Enhanced security and privacy</li>
              <li>Reduced bandwidth costs</li>
              <li>Scalable infrastructure</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Edge Data Centers</h3>
                <p className="text-gray-600">
                  Deploy edge computing infrastructure closer to your users for optimal performance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Process and analyze data at the edge for instant insights and decision making.
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