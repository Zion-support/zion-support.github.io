import React from 'react';
import { Database, CheckCircle, Shield, BarChart3 } from 'lucide-react';

export default function October2025AutonomousDataGovernanceBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-cyan-950 to-teal-950 border-4 border-cyan-400 shadow-2xl my-8 rounded-xl">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-teal-500/10 to-blue-400/10 animate-pulse" />
      
      <div className="relative z-10 px-8 py-12">
        {/* Header with Icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Database className="w-16 h-16 text-cyan-400 animate-bounce" />
          <CheckCircle className="w-16 h-16 text-teal-400 animate-pulse" />
          <Shield className="w-16 h-16 text-blue-400 animate-bounce" />
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <div className="inline-block bg-cyan-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🗂️🗂️🗂️ ABSOLUTE NEWEST: OCTOBER 1, 2025 - DATA GOVERNANCE REVOLUTION 🗂️🗂️🗂️
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 mb-4 leading-tight">
            Autonomous Data Governance Platform
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold text-white mb-4">
            Self-Regulating Enterprise Data Intelligence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-400 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-cyan-400 mb-2">$1.2B</div>
            <div className="text-sm font-semibold text-white">Compliance Savings</div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-teal-400 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-teal-400 mb-2">99.94%</div>
            <div className="text-sm font-semibold text-white">Data Quality</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-400 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-blue-400 mb-2">87%</div>
            <div className="text-sm font-semibold text-white">Overhead Reduction</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-green-400 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-black text-green-400 mb-2">1,847%</div>
            <div className="text-sm font-semibold text-white">ROI Over 3 Years</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 mb-8 border-2 border-cyan-400/50">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Autonomous Governance Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔍</div>
              <div>
                <div className="font-bold text-white">Intelligent Data Classification</div>
                <div className="text-sm text-gray-300">Auto-discover and classify sensitive data</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚖️</div>
              <div>
                <div className="font-bold text-white">Autonomous Policy Enforcement</div>
                <div className="text-sm text-gray-300">Automatic compliance without manual work</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">📊</div>
              <div>
                <div className="font-bold text-white">Continuous Compliance Monitoring</div>
                <div className="text-sm text-gray-300">24/7 verification across 50+ regulations</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🔧</div>
              <div>
                <div className="font-bold text-white">Self-Healing Data Quality</div>
                <div className="text-sm text-gray-300">AI automatically fixes quality issues</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🗺️</div>
              <div>
                <div className="font-bold text-white">Intelligent Data Lineage</div>
                <div className="text-sm text-gray-300">Complete visibility into data flows</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl">🌐</div>
              <div>
                <div className="font-bold text-white">Multi-Regulation Support</div>
                <div className="text-sm text-gray-300">GDPR, CCPA, HIPAA, SOX, and 46+ more</div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-xl p-6 mb-8 border-2 border-purple-400">
          <h3 className="text-xl font-bold text-purple-400 mb-3">🏥 Healthcare Provider Success Story</h3>
          <p className="text-sm text-gray-300 mb-4">12,500 locations • 850TB patient data • 40 systems</p>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">99.7%</div>
              <div className="text-sm text-gray-300">HIPAA Compliance</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-sm text-gray-300">Staff Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$147M</div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Zero</div>
              <div className="text-sm text-gray-300">Audit Findings</div>
            </div>
          </div>
        </div>

        {/* Compliance Coverage */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 mb-8 border-2 border-teal-400/50">
          <h3 className="text-xl font-bold text-teal-400 mb-3">📋 Automated Compliance Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            {['GDPR', 'CCPA', 'HIPAA', 'SOX', 'PCI DSS', 'FISMA', 'ISO 27001', 'NIST', 'CMMC', '+41 More'].map((reg, idx) => (
              <div key={idx} className="bg-teal-500/20 border border-teal-400 rounded px-3 py-2 text-center text-white font-semibold">
                {reg}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-8 py-4 rounded-full text-xl font-bold mb-4 transform hover:scale-105 transition-transform cursor-pointer shadow-lg">
            🚀 TRANSFORM YOUR DATA GOVERNANCE - $5M-$18M INVESTMENT
          </div>
          
          <div className="text-lg text-gray-300">
            <span className="font-bold text-cyan-400">165-Day Implementation</span> • 
            <span className="font-bold text-green-400"> 1,847% ROI</span> • 
            <span className="font-bold text-teal-400"> 50+ Regulations</span>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 pt-6 border-t-2 border-cyan-400/50 text-center">
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400">
            💎💎💎 JUST PUBLISHED: Complete Guide to Autonomous Data Governance & Self-Regulating Compliance 💎💎💎
          </p>
        </div>
      </div>
    </div>
  );
}
