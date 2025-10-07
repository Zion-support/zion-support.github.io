import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025FinTechSuccessBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 border-4 border-blue-500 rounded-2xl shadow-2xl mb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-blue-500/30 border-2 border-blue-400 rounded-full px-5 py-2 backdrop-blur-sm">

            <span className="text-yellow-300 font-black text-sm tracking-wider">
              💎 NEW CASE STUDY • OCTOBER 2025 • FORTUNE 100 SUCCESS 💎
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-12 h-12 text-blue-400 animate-pulse" <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Fortune 100 FinTech Transformation
              </h2>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-blue-100 mb-4">
              AI-Powered Digital Banking Revolution
            </p>

            <div className="flex items-center gap-3 mb-6">

              <p className="text-xl text-blue-200 font-semibold">
                $22.8B Business Value • 96% Automation • 47M Customers
              </p>
            </div>

            {/* Key Results */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-blue-800/40 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">

                <span className="text-blue-100 font-semibold">
                  18,400% ROI • $14.1B Annual Cost Savings
                </span>
              </div>
              <div className="flex items-center gap-3 bg-blue-800/40 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">

                <span className="text-blue-100 font-semibold">
                  47M Active Users • 92% Customer Satisfaction
                </span>
              </div>
              <div className="flex items-center gap-3 bg-blue-800/40 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">

                <span className="text-blue-100 font-semibold">
                  99.8% Fraud Detection Accuracy • $2.3B Prevented
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/case-studies/fintech-ai-transformation-2025"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
            >
              <Building2 className="w-6 h-6" <span>Read Full Case Study</span>

            </Link>
          </div>

          {/* Right Column - Metrics Dashboard */}
          <div className="space-y-4">
            {/* Main Value */}
            <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 backdrop-blur-md border-2 border-blue-400/50 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text mb-2">
                $22.8B
              </div>
              <div className="text-xl font-bold text-blue-200">Total Business Value</div>
              <div className="text-sm text-blue-300 mt-2">
                3-year transformation results • 85,000 employees • 72 countries
              </div>
            </div>

            {/* Grid Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-800/60 to-purple-900/60 backdrop-blur-md border-2 border-indigo-400/50 rounded-xl p-4 shadow-xl">
                <div className="text-3xl md:text-4xl font-black text-indigo-300 mb-1">96%</div>
                <div className="text-sm font-bold text-blue-200">Automation Rate</div>
                <div className="text-xs text-blue-300 mt-1">Customer interactions</div>
              </div>
              <div className="bg-gradient-to-br from-blue-800/60 to-indigo-900/60 backdrop-blur-md border-2 border-blue-400/50 rounded-xl p-4 shadow-xl">
                <div className="text-3xl md:text-4xl font-black text-blue-300 mb-1">18,400%</div>
                
                <div className="text-xs text-blue-300 mt-1">Within 30 months</div>
              </div>
            </div>

            {/* Customer Impact */}
            <div className="bg-gradient-to-br from-purple-800/60 to-blue-900/60 backdrop-blur-md border-2 border-purple-400/50 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">

                <div className="text-lg font-bold text-blue-200">Customer Success</div>
              </div>
              <div className="text-2xl font-black text-purple-300">47M Active Users</div>
              <div className="text-sm text-blue-300 mt-1">92% satisfaction • 24/7 AI assistance</div>
            </div>

            {/* Security Impact */}
            <div className="bg-gradient-to-br from-green-800/60 to-blue-900/60 backdrop-blur-md border-2 border-green-400/50 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">

                <div className="text-lg font-bold text-blue-200">Security Excellence</div>
              </div>
              <div className="text-2xl font-black text-green-300">99.8% Accuracy</div>
              <div className="text-sm text-blue-300 mt-1">Fraud detection • $2.3B prevented</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-8 pt-6 border-t-2 border-blue-500/30">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-blue-300 mb-1">85,000</div>
              
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
              <div className="text-2xl font-black text-green-300 mb-1">$14.1B</div>
              <div className="text-sm text-blue-200">Annual Savings</div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
