import React from 'react';
import { Shield } from 'lucide-react';

const October2025FraudDetectionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20 border-y border-red-500/30 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4 animate-pulse">
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-semibold text-sm">🚨 BREAKING: OCTOBER 1, 2025 — ENTERPRISE FRAUD CRISIS SOLVED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AI-Powered Real-Time Fraud Detection
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">
              $847B in Assets Protected | 99.7% Accuracy | Sub-50ms Detection
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary AI system deployed across Fortune 100 companies, preventing $2.3B in fraud losses in first month alone
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-xl font-bold text-white">Real-Time Detection</h3>
            </div>
            <p className="text-gray-300">
              Sub-50ms fraud detection with 99.7% accuracy using advanced neural networks and behavioral analysis
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Graph Intelligence</h3>
            </div>
            <p className="text-gray-300">
              Detect fraud rings and coordinated attacks across millions of entities — uncover hidden network patterns
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 via-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Fortune 100 Success</h3>
            </div>
            <p className="text-gray-300">
              $2.3B in fraud losses prevented in first month across 50+ Fortune 100 companies
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Learn More About Our AI Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default October2025FraudDetectionBanner;