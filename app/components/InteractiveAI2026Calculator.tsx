import React from 'react';

export default function InteractiveAI2026Calculator() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          AI 2026 ROI Calculator
        </h3>
        <p className="text-lg text-gray-600">
          Calculate your potential returns from AI 2026 transformation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Size (Employees)
            </label>
            <input
              type="range"
              min="100"
              max="100000"
              step="100"
              defaultValue="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>100</span>
              <span className="font-semibold text-indigo-600">1,000</span>
              <span>100K+</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Efficiency Level: 60%
            </label>
            <input
              type="range"
              min="20"
              max="90"
              step="5"
              defaultValue="60"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>20%</span>
              <span>90%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              AI Adoption Level: 50%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="10"
              defaultValue="50"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>10%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select
              defaultValue="manufacturing"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="manufacturing">Manufacturing</option>
              <option value="finance">Financial Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
              <option value="technology">Technology</option>
              <option value="logistics">Logistics</option>
            </select>
          </div>
        </div>

        {/* Results Display */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Projected Annual Savings</h4>
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              $2,500,000
            </div>
            <p className="text-gray-600">
              Based on efficiency improvements and AI automation
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <div className="text-2xl font-bold text-green-600 mb-1">
                300%
              </div>
              <div className="text-sm text-gray-600">Expected ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                80%
              </div>
              <div className="text-sm text-gray-600">Productivity Gain</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                60%
              </div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                8
              </div>
              <div className="text-sm text-gray-600">Months to ROI</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h4>
            <p className="text-indigo-100 mb-4">
              Our AI 2026 solutions can help you achieve these results and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/services"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}