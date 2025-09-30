import React from 'react';
import Link from 'next/link';

export default function InteractiveAICalculator2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive AI Calculator 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your potential AI investment returns for 2026. Get personalized insights and ROI projections for your specific use case.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Calculator Features</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">ROI Projections</h4>
                  <p className="text-gray-600">Get detailed ROI calculations based on your industry and company size</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Implementation Timeline</h4>
                  <p className="text-gray-600">Understand the timeline and milestones for your AI transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">💰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost Analysis</h4>
                  <p className="text-gray-600">Detailed breakdown of costs vs. expected benefits and savings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strategy Recommendations</h4>
                  <p className="text-gray-600">Get tailored recommendations for your specific business needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Revenue
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., $1,000,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select your industry</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Manufacturing</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary AI Use Case
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select primary use case</option>
                  <option>Process Automation</option>
                  <option>Data Analytics</option>
                  <option>Customer Service</option>
                  <option>Predictive Maintenance</option>
                  <option>Supply Chain Optimization</option>
                  <option>Other</option>
                </select>
              </div>
              <Link
                href="/tools/ai-roi-calculator-2026"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Calculate My AI ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}