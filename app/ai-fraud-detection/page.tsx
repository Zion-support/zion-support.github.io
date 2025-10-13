import React from 'react';
import { Shield, AlertTriangle, Eye } from 'lucide-react';

export default function AiFraudDetectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Fraud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Detection</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business with advanced AI-powered fraud detection and prevention
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Detection</h3>
            <p className="text-gray-300 mb-6">Instant fraud detection with AI-powered algorithms</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Risk Assessment</h3>
            <p className="text-gray-300 mb-6">Comprehensive risk analysis and scoring</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Pattern Recognition</h3>
            <p className="text-gray-300 mb-6">Advanced pattern recognition for suspicious activities</p>
          </div>
        </div>
      </div>
    </div>
  );
}