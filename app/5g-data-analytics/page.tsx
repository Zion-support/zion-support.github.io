import React from 'react'
import Link from 'next/link'

export default function FiveGDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">5G Data Analytics Solutions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Leverage the power of 5G networks for advanced data analytics. Our solutions 
              enable real-time data processing, machine learning, and predictive analytics 
              at unprecedented speeds and scale.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Real-time data streaming and processing</li>
              <li>Advanced machine learning algorithms</li>
              <li>Predictive analytics and forecasting</li>
              <li>Interactive dashboards and visualizations</li>
              <li>Automated reporting and alerts</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Cities</h3>
                <p className="text-gray-600">
                  Analyze traffic patterns, energy usage, and citizen behavior in real-time.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Industrial IoT</h3>
                <p className="text-gray-600">
                  Monitor equipment performance and predict maintenance needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}